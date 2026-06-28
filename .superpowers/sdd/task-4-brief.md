# Task 4: Create usePulseButton Hook

**Objective:** Create a React hook that applies a subtle infinite pulse animation to a button element (WhatsApp CTA only)

**Files:**
- Create: `src/hooks/animations/usePulseButton.ts`

**Key Requirements:**
1. Hook signature: `usePulseButton(ref: RefObject<HTMLElement>, options?: PulseOptions): void`
2. Exports: Named export `usePulseButton`, type export `PulseOptions`
3. Options: `{ enabled?: boolean; duration?: number; minWidth?: number; }`
4. Animation values:
   - Scale: `[1, 1.04, 1]` (subtle, not jarring)
   - Duration: 1800ms
   - Loop: infinite
   - Easing: `easeInOutQuad`
5. Mobile behavior: **Disabled on devices <768px** (minWidth default)
6. Accessibility: Skip animation if `prefers-reduced-motion: reduce` detected
7. Performance: Apply `will-change: transform` during animation, remove after

**Implementation Notes:**
- Check `enabled` option first (will be passed false for non-WhatsApp buttons)
- Check device width: `window.matchMedia('(max-width: ' + (minWidth - 1) + 'px)').matches`
- If below minWidth, return early (don't animate)
- Use Anime.js `animate()` with `loop: true` for infinite animation
- Cleanup is tricky with Anime.js loops (timeline not exposed same way), but unmounting removes the element anyway

**Test:**
1. Create ButtonCTA with WhatsApp link
2. Verify pulse animation on desktop
3. Verify NO pulse on mobile (<768px)
4. Verify reduced-motion skips animation
5. Verify pulse doesn't break other button types (non-WhatsApp)

**Exact Code Template:** See `docs/superpowers/plans/2026-06-28-animejs-implementation.md` under "Task 4: Create usePulseButton Hook" — copy exactly.
