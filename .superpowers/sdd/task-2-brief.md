# Task 2: Create useFadeInOnScroll Hook

**Objective:** Create a custom React hook that animates elements with fade-in + slide-up when they enter the viewport using Anime.js

**Files:**
- Create: `src/hooks/animations/useFadeInOnScroll.ts`

**Key Requirements:**
1. Hook signature: `useFadeInOnScroll(ref: RefObject<HTMLElement>, options?: FadeInOptions): void`
2. Exports: Named export `useFadeInOnScroll`, type export `FadeInOptions`
3. Options: `{ duration?: number; delay?: number; }`
4. Animation values:
   - Desktop (≥768px): `opacity: [0, 1]`, `translateY: [40px, 0]`, duration 600ms
   - Mobile (<768px): `opacity: [0, 1]`, `translateY: [20px, 0]`, duration 600ms
5. Trigger: IntersectionObserver when element enters viewport (threshold: 0.1)
6. Accessibility: Skip animation entirely if `prefers-reduced-motion: reduce` detected
7. Performance: Apply `will-change: transform, opacity` during animation, remove after
8. Easing: `easeOutQuad`

**Implementation Notes:**
- Use Anime.js `animate()` function with `targets: element`
- Use IntersectionObserver for viewport detection
- Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` early
- Check `window.matchMedia('(max-width: 767px)').matches` to determine device
- Clean up observer in useEffect return function
- Set initial state (`opacity: 0`, `transform: translateY(...)`) before animation

**Test:**
1. Create a test component that wraps an element with ref and calls the hook
2. Verify animation fires when scrolling the element into view
3. Verify reduced-motion skips animation
4. Verify mobile uses 20px instead of 40px

**Exact Code Template:** See the detailed implementation in `docs/superpowers/plans/2026-06-28-animejs-implementation.md` under "Task 2: Create useFadeInOnScroll Hook" — copy the TypeScript code block exactly, including all types and logic.
