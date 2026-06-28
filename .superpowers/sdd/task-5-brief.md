# Task 5: Create useWaveAnimation Hook

**Objective:** Create a React hook that animates elements (chips/tags) with center-outward stagger effect using Anime.js

**Files:**
- Create: `src/hooks/animations/useWaveAnimation.ts`

**Key Requirements:**
1. Hook signature: `useWaveAnimation(ref: RefObject<HTMLElement>, options?: WaveOptions): void`
2. Exports: Named export `useWaveAnimation`, type export `WaveOptions`
3. Options: `{ duration?: number; staggerDelay?: number; }`
4. Chip selector: `.symptom-chip` class (must exist on child elements)
5. Animation values:
   - Opacity: `[0, 1]`
   - Scale: `[0.8, 1]`
   - Duration: 600ms
6. Stagger behavior:
   - Desktop (≥768px): `stagger(staggerDelay, { from: 'center' })` — chips enter from center outward
   - Mobile (<768px): Standard `stagger(staggerDelay)` — chips enter left-to-right (less jarring on small screens)
7. Trigger: IntersectionObserver when container enters viewport (threshold: 0.05)
8. Accessibility: Skip animation if `prefers-reduced-motion: reduce` detected
9. Performance: Apply `will-change: transform, opacity`, remove after

**Implementation Notes:**
- Find chips: `container.querySelectorAll('.symptom-chip')`
- Detect desktop vs mobile with media query
- For desktop, use Anime.js `stagger()` with `from: 'center'` option
- For mobile, use normal `stagger()` without options
- Set initial state on ALL chips before animation
- Use IntersectionObserver on container

**Test:**
1. Create WhenToSeek component with `.symptom-chip` elements
2. Verify chips animate from center outward on desktop when scrolling into view
3. Verify chips animate left-to-right on mobile
4. Verify reduced-motion skips animation
5. Verify scale goes from 0.8 → 1

**Exact Code Template:** See `docs/superpowers/plans/2026-06-28-animejs-implementation.md` under "Task 5: Create useWaveAnimation Hook" — copy exactly.
