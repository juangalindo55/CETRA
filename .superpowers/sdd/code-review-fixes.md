# Code Review Fixes — Anime.js Integration Branch

**Date:** 2026-06-28
**Branch:** preview-staging
**Status:** DONE — all 3 fixes applied, TypeScript strict mode passes (0 errors)

---

## Fix 1: WhenToSeek dual animation conflict (CRITICAL)

**File:** `src/components/sections/WhenToSeek.tsx`
**Commit:** 4fc1687

**Problem:** `.symptom-chip` elements had Framer Motion animation props (`initial`, `whileInView`, `viewport`, `transition`) while `useWaveAnimation` also animated `opacity` and `transform: scale` on the same elements via Anime.js. Two independent IntersectionObservers caused jitter, stuck scale, and flickering opacity.

**Fix:** Removed `initial={{ opacity: 0, x: -12 }}`, `whileInView={{ opacity: 1, x: 0 }}`, `viewport={{ once: true }}`, and `transition={{ delay: i * 0.05 }}` from the `.symptom-chip` `motion.div`. Kept `motion.div` wrapper intact; also removed the now-unused `i` index variable from the map. Anime.js (`useWaveAnimation`) owns all animation on these elements.

---

## Fix 2: usePulseButton incomplete cleanup (IMPORTANT)

**File:** `src/hooks/animations/usePulseButton.ts`
**Commit:** 64698b5

**Problem:** `animate()` return value was discarded, leaving no handle to pause the loop in cleanup. Under React 18 Strict Mode (dev), the effect mounts → unmounts → remounts, starting two overlapping pulse loops causing visible jitter.

**Fix:** Captured the return value as `const timeline = animate(...)` and called `timeline.pause()` in the cleanup function, before resetting `willChange`. Removed the outdated comment that incorrectly stated Anime.js v4 doesn't expose timeline handles.

---

## Fix 3: Remove unused FadeInOnScroll component (IMPORTANT)

**File:** `src/components/animations/FadeInOnScroll.tsx` (deleted)
**Commit:** 122048a

**Problem:** Component was built and exported but never imported or used anywhere in the app — dead code.

**Fix:** Removed the file entirely (Option A). The `useFadeInOnScroll` hook it depended on remains available in `src/hooks/animations/useFadeInOnScroll.ts` if needed in the future.

---

## TypeScript Verification

```
npx tsc --noEmit
# Output: (none — 0 errors)
```

All fixes pass TypeScript strict mode.

---

## Commits

| SHA | Message |
|-----|---------|
| 4fc1687 | fix: remove dual Framer Motion animation from symptom chips (useWaveAnimation owns animation) |
| 64698b5 | fix: capture animation timeline and pause on cleanup in usePulseButton |
| 122048a | refactor: remove unused FadeInOnScroll wrapper component |
