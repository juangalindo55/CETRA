# Task 6: Create FadeInOnScroll Wrapper Component

**Objective:** Create a reusable React component that wraps children and applies fade-in animation via `useFadeInOnScroll`

**Files:**
- Create: `src/components/animations/FadeInOnScroll.tsx`

**Dependencies:**
- Requires: `useFadeInOnScroll` hook (Task 2) to already exist

**Key Requirements:**
1. Component: `FadeInOnScroll` (default export)
2. Props interface: `FadeInOnScrollProps`
   - `children: ReactNode` (required)
   - `className?: string` (optional, applied to wrapper div)
   - `duration?: number` (optional, passed to hook)
3. Add `'use client'` directive at top (client component)
4. Use `useRef<HTMLDivElement>` to create ref
5. Call `useFadeInOnScroll(ref, { duration })`
6. Render wrapper div with ref and className
7. Render children inside wrapper

**Implementation Notes:**
- Simple pass-through wrapper component
- No animation logic in component itself (all in hook)
- Wrapper applies ref to a div, children render inside
- Supports custom className for styling flexibility

**Test:**
1. Import and wrap a section: `<FadeInOnScroll><section>Content</section></FadeInOnScroll>`
2. Verify animation triggers on scroll
3. Verify className is applied correctly
4. Verify default duration (600ms) works

**Exact Code Template:** See `docs/superpowers/plans/2026-06-28-animejs-implementation.md` under "Task 6: Create FadeInOnScroll Wrapper Component" — copy exactly.
