# Anime.js Animation Integration — CETRA

**Date:** June 28, 2026  
**Status:** Design Approved  
**Scope:** Add 4 new animations with Anime.js v4 while maintaining Framer Motion for existing components

---

## Overview

CETRA currently uses Framer Motion for animations. This spec adds Anime.js v4 to implement 4 specific animation effects:

1. **Fade-in on scroll** — Global, wrapper-based for any section/card
2. **Stagger cards** — Service cards animate sequentially (80ms apart)
3. **Pulse button** — Subtle infinite scale on WhatsApp CTA
4. **Wave animation** — Symptom chips enter from center outward

Both libraries coexist; Anime.js handles these 4 effects only. Framer Motion continues managing existing animations.

---

## Architecture

### Dependencies

```json
{
  "animejs": "^4.0.0"
}
```

Install via `npm install animejs`.

### Folder Structure

```
src/hooks/animations/
├── useFadeInOnScroll.ts       # Fade-in on viewport entry
├── useStaggerCards.ts         # Sequential card animation
├── usePulseButton.ts          # Infinite pulse effect
└── useWaveAnimation.ts        # Center-outward chip animation

src/components/animations/
└── FadeInOnScroll.tsx         # Wrapper for fade-in reuse
```

### Implementation Approach

- **Hooks only** — No custom animation components beyond the wrapper
- **ES modules** — `import { animate, stagger, onScroll } from 'animejs'`
- **TypeScript** — Strict mode, no `any`
- **Client-side** — `'use client'` on all animation components/hooks

---

## Animation Specifications

### 1. Fade-in on Scroll (`useFadeInOnScroll`)

**Usage:**
```tsx
'use client';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

<FadeInOnScroll>
  <section>Content animates in on scroll</section>
</FadeInOnScroll>
```

**Behavior:**
- Opacity: `0 → 1`
- Transform: `translateY: [40px, 0]` (desktop) | `[20px, 0]` (mobile <768px)
- Duration: 600ms
- Trigger: When element enters viewport (Anime.js `onScroll`)
- Respects `prefers-reduced-motion: reduce`
- Applies `will-change: opacity, transform` during animation, removes after

**Hook Signature:**
```tsx
useFadeInOnScroll(ref: RefObject<HTMLElement>, options?: {
  duration?: number;
  delay?: number;
  translateDistance?: number; // auto-set per viewport
}): void
```

---

### 2. Stagger Cards (`useStaggerCards`)

**Usage:**
```tsx
'use client';
import { useStaggerCards } from '@/hooks/animations/useStaggerCards';

export function Services() {
  const containerRef = useRef(null);
  useStaggerCards(containerRef);
  
  return (
    <div ref={containerRef} className="grid gap-6">
      <div className="service-card">...</div>
      <div className="service-card">...</div>
      {/* auto-detected and staggered */}
    </div>
  );
}
```

**Behavior:**
- Targets `.service-card` elements within container
- Opacity: `0 → 1`
- Transform: `translateY: [40px, 0]` (desktop) | `[20px, 0]` (mobile)
- Duration: 600ms
- Stagger: 80ms between each card
- Trigger: When container enters viewport
- Respects `prefers-reduced-motion`
- Max 8 cards animated simultaneously on mobile (larger sets pause extra)

**Hook Signature:**
```tsx
useStaggerCards(ref: RefObject<HTMLElement>, options?: {
  duration?: number;
  staggerDelay?: number;
  translateDistance?: number;
  maxConcurrent?: number; // mobile limit
}): void
```

---

### 3. Pulse Button (`usePulseButton`)

**Usage:**
```tsx
'use client';
import { usePulseButton } from '@/hooks/animations/usePulseButton';

export function ButtonCTA({ href, external, size, children }) {
  const buttonRef = useRef(null);
  const isPulseEnabled = href?.includes('wa.me'); // WhatsApp only
  
  usePulseButton(buttonRef, { enabled: isPulseEnabled });
  
  return <a ref={buttonRef} href={href} ...>{children}</a>;
}
```

**Behavior:**
- Scale: `[1, 1.04, 1]` loop
- Duration: 1800ms
- Infinite loop
- **Disabled on mobile (<768px)** — already visible on small screens
- Easing: ease-in-out by default
- Applies `will-change: transform`, removes after animation completes
- Respects `prefers-reduced-motion`

**Hook Signature:**
```tsx
usePulseButton(ref: RefObject<HTMLElement>, options?: {
  enabled?: boolean;
  duration?: number;
  scale?: [number, number, number];
  minWidth?: number; // disable below (default 768px)
}): void
```

---

### 4. Wave Animation (`useWaveAnimation`)

**Usage:**
```tsx
'use client';
import { useWaveAnimation } from '@/hooks/animations/useWaveAnimation';

export function WhenToSeek() {
  const containerRef = useRef(null);
  useWaveAnimation(containerRef);
  
  return (
    <div ref={containerRef} className="flex flex-wrap gap-2">
      <span className="symptom-chip">Fiebre</span>
      <span className="symptom-chip">Tos</span>
      {/* auto-detected and wave-animated */}
    </div>
  );
}
```

**Behavior:**
- Targets `.symptom-chip` elements
- Opacity: `0 → 1`
- Scale: `0.8 → 1`
- Stagger: `{ from: 'center' }` (desktop only) | standard order (mobile)
- Duration: 600ms
- Stagger delay: 60ms per chip
- Trigger: When container enters viewport
- Respects `prefers-reduced-motion`
- Mobile: standard left-to-right stagger instead of center (less jarring on small screens)

**Hook Signature:**
```tsx
useWaveAnimation(ref: RefObject<HTMLElement>, options?: {
  duration?: number;
  staggerDelay?: number;
  fromCenter?: boolean; // auto false on mobile
}): void
```

---

## Cross-Cutting Requirements

### Mobile Optimization

| Device | Fade-in translateY | Pulse Button | Wave from Center |
|--------|-------------------|--------------|------------------|
| Desktop (≥768px) | 40px | ✅ Active | ✅ Yes |
| Mobile (<768px) | 20px | ❌ Disabled | ❌ Standard order |

- Detect via `window.matchMedia('(max-width: 767px)')`
- No device libraries; use media queries
- Max 8 simultaneous animations on mobile renderer

### Accessibility

**`prefers-reduced-motion` Handling:**
- Detect: `window.matchMedia('(prefers-reduced-motion: reduce)').matches`
- If true: skip animation setup entirely (return early from each hook)
- Result: instant element opacity/visibility without animation

**Implementation:**
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) return; // in each hook's useEffect
```

### Performance & Cleanup

- **`will-change`:** Apply only during animation, remove in cleanup
- **Observers:** IntersectionObserver cleanup in useEffect return
- **Timelines:** All Anime.js instances cleaned up on unmount
- **No memory leaks:** Refs properly nullified, event listeners removed

---

## Integration Points

### Modified Components

| Component | Change | Hook(s) |
|-----------|--------|---------|
| `Services.tsx` | Add `useStaggerCards` to grid container | `useStaggerCards` |
| `ButtonCTA.tsx` | Add pulse on WhatsApp links | `usePulseButton` |
| `WhenToSeek.tsx` | Apply wave to symptom chips | `useWaveAnimation` |
| **New:** `FadeInOnScroll.tsx` | Reusable wrapper | `useFadeInOnScroll` |

### Deployment

- No breaking changes to existing components
- Framer Motion continues unchanged
- Anime.js added to `package.json` only
- SSR-safe: all animations in `useEffect`

---

## Testing Strategy

**Manual Testing:**
- Desktop: verify fade-in, stagger, pulse, wave with scroll
- Mobile (iOS Safari, Android Chrome): verify reduced translateY, no pulse, standard wave
- Reduced motion: disable animations and verify instant visibility
- Performance: no jank on animation frames

**Code Quality:**
- TypeScript strict mode
- No `any` types
- Proper ref management
- Cleanup functions verified

---

## Success Criteria

✅ Anime.js v4 installed  
✅ 4 custom hooks created and exported  
✅ `FadeInOnScroll` wrapper component functional  
✅ Services cards stagger on Services page  
✅ WhatsApp CTA pulses (desktop only)  
✅ Symptom chips wave in WhenToSeek section  
✅ `prefers-reduced-motion` respected globally  
✅ Mobile: translateY halved, pulse disabled, wave simplified  
✅ No visual regressions with Framer Motion components  
✅ Clean SSR with Next.js 16 App Router  

---

## Timeline Estimate

- Install dependencies: 2 min
- Create 4 hooks: 30 min
- Create wrapper component: 10 min
- Integrate into Services, ButtonCTA, WhenToSeek: 20 min
- Mobile testing & refinement: 20 min
- Code review & polish: 10 min

**Total: ~90 minutes**
