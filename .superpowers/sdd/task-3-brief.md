# Task 3: Create useStaggerCards Hook

**Objective:** Create a React hook that animates multiple elements (cards) with staggered entrance using Anime.js

**Files:**
- Create: `src/hooks/animations/useStaggerCards.ts`

**Key Requirements:**
1. Hook signature: `useStaggerCards(ref: RefObject<HTMLElement>, options?: StaggerOptions): void`
2. Exports: Named export `useStaggerCards`, type export `StaggerOptions`
3. Options: `{ duration?: number; staggerDelay?: number; }`
4. Card selector: `.service-card` class (must exist on child elements)
5. Animation values:
   - Desktop (≥768px): `opacity: [0, 1]`, `translateY: [40px, 0]`, duration 600ms
   - Mobile (<768px): `opacity: [0, 1]`, `translateY: [20px, 0]`, duration 600ms
6. Stagger: 80ms delay between each card (default)
7. Trigger: IntersectionObserver when container enters viewport (threshold: 0.05)
8. Accessibility: Skip animation entirely if `prefers-reduced-motion: reduce` detected
9. Performance: Apply `will-change: transform, opacity` during animation, remove after
10. Mobile constraint: Max 8 concurrent animations (enforced via stagger count)

**Implementation Notes:**
- Use Anime.js `stagger(delayMs)` function
- Find cards: `container.querySelectorAll('.service-card')`
- Use IntersectionObserver on container, not individual cards
- Check device width with media query
- Clean up observer in useEffect return
- Set initial state on ALL cards before animation fires

**Test:**
1. Create Services component with multiple `.service-card` elements
2. Verify cards stagger in (80ms apart) when scrolling container into view
3. Verify reduced-motion skips animation
4. Verify mobile uses 20px translateY

**Exact Code Template:** See `docs/superpowers/plans/2026-06-28-animejs-implementation.md` under "Task 3: Create useStaggerCards Hook" — copy the TypeScript code block exactly.
