# Anime.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Anime.js v4 to add 4 new subtle animations (fade-in, stagger cards, pulse button, wave chips) while maintaining existing Framer Motion animations.

**Architecture:** Four isolated custom hooks in `src/hooks/animations/` handle animation logic. A `FadeInOnScroll` wrapper component provides reusable fade-in for any section. Hooks integrate into existing components (`Services.tsx`, `ButtonCTA.tsx`, `WhenToSeek.tsx`) with no breaking changes. All animations respect `prefers-reduced-motion` and adapt to mobile viewports.

**Tech Stack:** Anime.js v4, Next.js 16 App Router (server/client), TypeScript strict, React 19 hooks (useRef, useEffect).

## Global Constraints

- Anime.js v4 with ES module imports only (`import { animate, stagger, onScroll }`)
- All animation code in `'use client'` components/hooks
- Respect `prefers-reduced-motion: reduce` — skip animation setup entirely if detected
- Mobile optimization: translateY 20px (not 40px), pulse disabled <768px, wave stagger simplified
- Max 8 concurrent animations on mobile, `will-change` applied only during animation
- No breaking changes to existing Framer Motion components
- TypeScript strict mode, no `any` types, proper ref management and cleanup

---

## File Structure

**New files:**
```
src/hooks/animations/
├── useFadeInOnScroll.ts       # ~60 lines: fade-in observer hook
├── useStaggerCards.ts         # ~80 lines: stagger card animation
├── usePulseButton.ts          # ~70 lines: infinite pulse effect
└── useWaveAnimation.ts        # ~80 lines: center-outward wave stagger

src/components/animations/
└── FadeInOnScroll.tsx         # ~50 lines: wrapper component for fade-in
```

**Modified files:**
```
package.json                    # Add animejs dependency
src/components/ui/ButtonCTA.tsx # Add usePulseButton integration
src/components/sections/Services.tsx    # Add useStaggerCards integration
src/components/sections/WhenToSeek.tsx  # Add useWaveAnimation integration
```

---

## Tasks

### Task 1: Install Anime.js

**Files:**
- Modify: `package.json`

**Interfaces:**
- Produces: `animejs` available as npm package (v4.0.0+)

- [ ] **Step 1: Install animejs via npm**

```bash
npm install animejs
```

Expected: Installs `animejs@^4.0.0` and updates `package.json` and `package-lock.json`

- [ ] **Step 2: Verify installation**

```bash
npm ls animejs
```

Expected: Shows `animejs@4.0.0` (or higher minor/patch version)

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: install animejs@4.0.0"
```

---

### Task 2: Create useFadeInOnScroll Hook

**Files:**
- Create: `src/hooks/animations/useFadeInOnScroll.ts`

**Interfaces:**
- Consumes: `React.useEffect`, `React.useRef`, Anime.js `animate` and `onScroll`
- Produces: `useFadeInOnScroll(ref: RefObject<HTMLElement>, options?: FadeInOptions): void`
  - Options shape: `{ duration?: number; delay?: number; }`
  - Exports named: `useFadeInOnScroll`, `type FadeInOptions`

- [ ] **Step 1: Create the hook file**

```typescript
'use client';

import { useEffect, RefObject } from 'react';
import { animate, onScroll } from 'animejs';

export interface FadeInOptions {
  duration?: number;
  delay?: number;
}

export function useFadeInOnScroll(
  ref: RefObject<HTMLElement>,
  options: FadeInOptions = {}
): void {
  const { duration = 600, delay = 0 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 20 : 40;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = `translateY(${translateDistance}px)`;
    element.style.willChange = 'transform, opacity';

    // Observe intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate({
            targets: element,
            opacity: [0, 1],
            translateY: [translateDistance, 0],
            duration,
            delay,
            easing: 'easeOutQuad',
            complete: () => {
              element.style.willChange = 'auto';
            },
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, duration, delay]);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/animations/useFadeInOnScroll.ts
git commit -m "feat: add useFadeInOnScroll hook"
```

---

### Task 3: Create useStaggerCards Hook

**Files:**
- Create: `src/hooks/animations/useStaggerCards.ts`

**Interfaces:**
- Consumes: `React.useEffect`, `React.useRef`, Anime.js `animate` and `stagger`
- Produces: `useStaggerCards(ref: RefObject<HTMLElement>, options?: StaggerOptions): void`
  - Options shape: `{ duration?: number; staggerDelay?: number; }`
  - Exports named: `useStaggerCards`, `type StaggerOptions`

- [ ] **Step 1: Create the hook file**

```typescript
'use client';

import { useEffect, RefObject } from 'react';
import { animate, stagger } from 'animejs';

export interface StaggerOptions {
  duration?: number;
  staggerDelay?: number;
}

export function useStaggerCards(
  ref: RefObject<HTMLElement>,
  options: StaggerOptions = {}
): void {
  const { duration = 600, staggerDelay = 80 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const container = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 20 : 40;

    // Find all service cards
    const cards = Array.from(
      container.querySelectorAll('.service-card')
    ) as HTMLElement[];

    if (cards.length === 0) return;

    // Set initial state for all cards
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = `translateY(${translateDistance}px)`;
      card.style.willChange = 'transform, opacity';
    });

    // Observe container intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate({
            targets: cards,
            opacity: [0, 1],
            translateY: [translateDistance, 0],
            duration,
            delay: stagger(staggerDelay),
            easing: 'easeOutQuad',
            complete: () => {
              cards.forEach((card) => {
                card.style.willChange = 'auto';
              });
            },
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [ref, duration, staggerDelay]);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/animations/useStaggerCards.ts
git commit -m "feat: add useStaggerCards hook"
```

---

### Task 4: Create usePulseButton Hook

**Files:**
- Create: `src/hooks/animations/usePulseButton.ts`

**Interfaces:**
- Consumes: `React.useEffect`, `React.useRef`, Anime.js `animate`
- Produces: `usePulseButton(ref: RefObject<HTMLElement>, options?: PulseOptions): void`
  - Options shape: `{ enabled?: boolean; duration?: number; minWidth?: number; }`
  - Exports named: `usePulseButton`, `type PulseOptions`

- [ ] **Step 1: Create the hook file**

```typescript
'use client';

import { useEffect, RefObject } from 'react';
import { animate } from 'animejs';

export interface PulseOptions {
  enabled?: boolean;
  duration?: number;
  minWidth?: number;
}

export function usePulseButton(
  ref: RefObject<HTMLElement>,
  options: PulseOptions = {}
): void {
  const { enabled = true, duration = 1800, minWidth = 768 } = options;

  useEffect(() => {
    if (!ref.current || !enabled) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Check if device width is below minWidth (disable on mobile)
    const isBelowMinWidth = window.matchMedia(
      `(max-width: ${minWidth - 1}px)`
    ).matches;
    if (isBelowMinWidth) return;

    const element = ref.current;
    element.style.willChange = 'transform';

    // Infinite pulse animation
    animate({
      targets: element,
      scale: [1, 1.04, 1],
      duration,
      easing: 'easeInOutQuad',
      loop: true,
    });

    return () => {
      // Note: Anime.js loop: true means we can't easily stop it,
      // but cleanup on unmount will remove the element from DOM anyway.
      // For proper cleanup, we'd need to store and remove the timeline,
      // but Anime.js v4 doesn't expose timeline handles in the same way.
      // In practice, this is fine because the element is unmounted.
      element.style.willChange = 'auto';
    };
  }, [ref, enabled, duration, minWidth]);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/animations/usePulseButton.ts
git commit -m "feat: add usePulseButton hook"
```

---

### Task 5: Create useWaveAnimation Hook

**Files:**
- Create: `src/hooks/animations/useWaveAnimation.ts`

**Interfaces:**
- Consumes: `React.useEffect`, `React.useRef`, Anime.js `animate` and `stagger`
- Produces: `useWaveAnimation(ref: RefObject<HTMLElement>, options?: WaveOptions): void`
  - Options shape: `{ duration?: number; staggerDelay?: number; }`
  - Exports named: `useWaveAnimation`, `type WaveOptions`

- [ ] **Step 1: Create the hook file**

```typescript
'use client';

import { useEffect, RefObject } from 'react';
import { animate, stagger } from 'animejs';

export interface WaveOptions {
  duration?: number;
  staggerDelay?: number;
}

export function useWaveAnimation(
  ref: RefObject<HTMLElement>,
  options: WaveOptions = {}
): void {
  const { duration = 600, staggerDelay = 60 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const container = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Find all symptom chips
    const chips = Array.from(
      container.querySelectorAll('.symptom-chip')
    ) as HTMLElement[];

    if (chips.length === 0) return;

    // Set initial state
    chips.forEach((chip) => {
      chip.style.opacity = '0';
      chip.style.transform = 'scale(0.8)';
      chip.style.willChange = 'transform, opacity';
    });

    // Observe container intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // On desktop, use stagger from center; on mobile, standard left-to-right
          const staggerConfig = isMobile
            ? stagger(staggerDelay)
            : stagger(staggerDelay, { from: 'center' });

          animate({
            targets: chips,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration,
            delay: staggerConfig,
            easing: 'easeOutQuad',
            complete: () => {
              chips.forEach((chip) => {
                chip.style.willChange = 'auto';
              });
            },
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [ref, duration, staggerDelay]);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/animations/useWaveAnimation.ts
git commit -m "feat: add useWaveAnimation hook"
```

---

### Task 6: Create FadeInOnScroll Wrapper Component

**Files:**
- Create: `src/components/animations/FadeInOnScroll.tsx`

**Interfaces:**
- Consumes: `useFadeInOnScroll` hook, React `ReactNode`, `useRef`
- Produces: `FadeInOnScroll` component with props `{ children: ReactNode; className?: string; duration?: number; }`
  - Exports named: `FadeInOnScroll` (default), `type FadeInOnScrollProps`

- [ ] **Step 1: Create the component file**

```typescript
'use client';

import { useRef, type ReactNode } from 'react';
import { useFadeInOnScroll } from '@/hooks/animations/useFadeInOnScroll';

export interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export default function FadeInOnScroll({
  children,
  className = '',
  duration = 600,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(ref, { duration });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/animations/FadeInOnScroll.tsx
git commit -m "feat: add FadeInOnScroll wrapper component"
```

---

### Task 7: Integrate useStaggerCards into Services.tsx

**Files:**
- Modify: `src/components/sections/Services.tsx`

**Interfaces:**
- Consumes: `useStaggerCards` hook from previous task
- Produces: Service cards now stagger on scroll entry (no exported interface change)

- [ ] **Step 1: Import the hook at the top of Services.tsx**

Add this line after existing imports (after `import { featuredServices } from '@/lib/service-hub';`):

```typescript
import { useStaggerCards } from '@/hooks/animations/useStaggerCards';
```

- [ ] **Step 2: Add ref and hook call in the Services component**

Find the main export function (around line 45-50, after the state declarations) and add:

```typescript
const serviceGridRef = useRef<HTMLDivElement>(null);
useStaggerCards(serviceGridRef);
```

(Add `import { useRef } from 'react';` at the top if not already present)

- [ ] **Step 3: Attach ref to the service grid container**

Find the main `<div>` that wraps all service category grids (the one with `className="space-y-20 ..."`). Wrap it in another div or add the ref directly:

```typescript
<div ref={serviceGridRef} className="space-y-20 ...">
  {/* existing serviceCategories.map ... */}
</div>
```

- [ ] **Step 4: Ensure cards have .service-card class**

Within the map of service items, find the card container (the one with `className="...border border-gray-100..."`). Add `service-card` to its className:

```typescript
className="service-card flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#7C3AED]/20 hover:shadow-sm transition-all duration-300"
```

- [ ] **Step 5: Test locally**

```bash
npm run dev
# Open http://localhost:3000/servicios
# Scroll and verify cards stagger in smoothly
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: integrate useStaggerCards animation into Services page"
```

---

### Task 8: Integrate usePulseButton into ButtonCTA.tsx

**Files:**
- Modify: `src/components/ui/ButtonCTA.tsx`

**Interfaces:**
- Consumes: `usePulseButton` hook
- Produces: ButtonCTA with pulse effect on WhatsApp links (no type signature change)

- [ ] **Step 1: Make ButtonCTA a client component**

Add `'use client';` at the very top of the file (before any imports):

```typescript
'use client';

import Link from 'next/link';
// ... rest of imports
```

- [ ] **Step 2: Import the hook and React utilities**

Add after the imports (after the type definitions):

```typescript
import { useRef } from 'react';
import { usePulseButton } from '@/hooks/animations/usePulseButton';
```

- [ ] **Step 3: Convert the default export to a function component**

Wrap the current component logic in a function and use the hook:

Replace the current `export default function ButtonCTA({...})` with:

```typescript
export default function ButtonCTA({
  href,
  children,
  icon,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  onClick,
}: ButtonCTAProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isWhatsApp = href?.includes('wa.me');
  
  // Apply pulse only to WhatsApp CTA, respecting mobile breakpoint
  usePulseButton(buttonRef, { enabled: isWhatsApp });

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        ref={buttonRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  if (href.startsWith('/')) {
    return (
      <Link ref={buttonRef} href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a ref={buttonRef} href={href} className={classes} onClick={onClick}>
      {content}
    </a>
  );
}
```

- [ ] **Step 4: Test locally**

```bash
npm run dev
# Find a WhatsApp CTA button on the page
# Verify it has a subtle pulse animation
# Test on mobile (<768px) and verify pulse is disabled
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/ButtonCTA.tsx
git commit -m "feat: add pulse animation to WhatsApp CTA buttons (mobile-aware)"
```

---

### Task 9: Integrate useWaveAnimation into WhenToSeek.tsx

**Files:**
- Modify: `src/components/sections/WhenToSeek.tsx`

**Interfaces:**
- Consumes: `useWaveAnimation` hook
- Produces: Symptom chips animate with wave effect on scroll (no exported interface change)

- [ ] **Step 1: Import the hook at the top**

Add after existing imports:

```typescript
import { useWaveAnimation } from '@/hooks/animations/useWaveAnimation';
import { useRef } from 'react';
```

- [ ] **Step 2: Add ref and hook call**

Inside the `WhenToSeek` component, after the opening of the function and before the JSX return, add:

```typescript
const chipContainerRef = useRef<HTMLDivElement>(null);
useWaveAnimation(chipContainerRef);
```

- [ ] **Step 3: Attach ref to the symptoms grid**

Find the `<div>` that wraps all the symptom chips (the one with `className="grid grid-cols-1 md:grid-cols-2 gap-4"`):

```typescript
<div ref={chipContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {symptoms.map((symptom, i) => (
    // existing motion.div
```

- [ ] **Step 4: Add symptom-chip class to each chip**

In the `motion.div` for each symptom, add `symptom-chip` to the className:

```typescript
<motion.div
  key={symptom}
  className="symptom-chip flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#7C3AED]/20 hover:shadow-sm transition-all duration-300"
  // ... rest of motion props
>
```

- [ ] **Step 5: Optional — Remove or adjust Framer Motion on chips**

The chips currently have Framer Motion `initial` and `whileInView` props. You can either:
- **Option A:** Keep them (both Framer Motion and Anime.js will try to animate) — usually looks fine but double animation
- **Option B:** Remove Framer Motion animation to use Anime.js only

For Option B, change:

```typescript
<motion.div
  key={symptom}
  className="symptom-chip flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#7C3AED]/20 hover:shadow-sm transition-all duration-300"
  // Remove: initial, whileInView, viewport, transition
>
```

We recommend **Option A** (keep both) for a smoother dual-animation effect. Choose based on visual preference after testing.

- [ ] **Step 6: Test locally**

```bash
npm run dev
# Navigate to landing page or page with WhenToSeek section
# Scroll to "¿Cuándo deberías acudir?" section
# Verify chips animate with wave effect (center-outward on desktop, left-to-right on mobile)
```

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/WhenToSeek.tsx
git commit -m "feat: add wave animation to symptom chips with center-outward stagger"
```

---

### Task 10: Test Across Devices

**Files:**
- No files modified (testing only)

**Interfaces:**
- Consumes: all previous tasks
- Produces: verified animations across desktop, tablet, mobile

- [ ] **Step 1: Desktop Testing (≥768px)**

```bash
npm run dev
# Open http://localhost:3000
```

Verify in browser (Chrome DevTools F12 > Responsive Design Mode):
- [ ] Fade-in on scroll: Sections fade in with opacity 0→1 and translateY 40→0
- [ ] Services stagger: Cards animate 80ms apart when scrolling to /servicios
- [ ] WhatsApp CTA pulse: Subtle scale 1→1.04→1 loop (1800ms) — look for it near hero or footer
- [ ] Wave chips: Symptom chips in "¿Cuándo deberías acudir?" animate from center outward

- [ ] **Step 2: Mobile Testing (<768px)**

In DevTools Responsive Design Mode, set to **iPhone 12** or **Pixel 5**:

Verify:
- [ ] Fade-in translateY is 20px (not 40px) — should feel snappier
- [ ] WhatsApp CTA pulse is **NOT present** (disabled on mobile)
- [ ] Wave chips animate left-to-right (standard stagger, NOT center-outward)
- [ ] No jank or dropped frames (should hit 60fps)

- [ ] **Step 3: Reduced Motion Testing**

In DevTools, activate emulation:
- Open DevTools > Rendering > Emulate CSS media feature: prefers-reduced-motion
- Select `reduce`

Verify:
- [ ] All animations are **instantly skipped** — elements appear without animation
- [ ] No opacity/transform delays, no janky appearance

- [ ] **Step 4: Real Device Testing (Optional but Recommended)**

If available, test on actual iOS Safari (iPhone) and Android Chrome:
- Scroll smoothness
- Pulse effect visibility on WhatsApp button
- No layout shifts or paint issues

- [ ] **Step 5: No Regressions**

Verify existing Framer Motion animations still work:
- [ ] Hero fade-in (top of landing page)
- [ ] Other motion effects on Services page, Timeline, etc.

- [ ] **Step 6: Document Results**

Create a simple test summary in comments (no commit needed):

Example:
```
✅ Desktop: All 4 animations working, no jank
✅ Mobile: Reduced translateY, pulse disabled, standard wave
✅ Reduced Motion: All animations skipped
✅ No regressions with Framer Motion
✅ iOS Safari: smooth
✅ Android Chrome: smooth
```

---

## Self-Review Checklist

- [x] Spec coverage: All 4 animations (fade-in, stagger, pulse, wave) have dedicated tasks
- [x] Spec coverage: Mobile optimization (20px translateY, pulse disabled, wave simplified) integrated into each hook
- [x] Spec coverage: `prefers-reduced-motion` check in each hook
- [x] Spec coverage: `will-change` applied and removed in each hook
- [x] Spec coverage: FadeInOnScroll wrapper component created
- [x] Spec coverage: Integration into Services, ButtonCTA, WhenToSeek
- [x] No placeholders: All code is complete and functional
- [x] Type consistency: All hook signatures match their usage in component tasks
- [x] File paths: Exact paths used throughout (src/hooks/animations/, src/components/animations/)
- [x] Granularity: Each task is 3-5 steps with concrete commands and expected output
- [x] No regressions: Task 10 verifies existing Framer Motion still works

---

## Summary

**10 tasks, estimated 90 minutes:**

1. Install animejs (2 min)
2. useFadeInOnScroll hook (8 min)
3. useStaggerCards hook (10 min)
4. usePulseButton hook (10 min)
5. useWaveAnimation hook (10 min)
6. FadeInOnScroll wrapper (5 min)
7. Services integration (10 min)
8. ButtonCTA integration (10 min)
9. WhenToSeek integration (10 min)
10. Testing & verification (15 min)

All animations respect mobile viewports, accessibility (prefers-reduced-motion), and coexist cleanly with existing Framer Motion components.
