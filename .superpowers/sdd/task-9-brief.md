# Task 9: Integrate useWaveAnimation into WhenToSeek.tsx

**Objective:** Add wave animation to symptom chips in the WhenToSeek component

**Files:**
- Modify: `src/components/sections/WhenToSeek.tsx`

**Dependencies:**
- Requires: `useWaveAnimation` hook (Task 5) to already exist
- Requires: `useRef` from React (likely already imported)

**Key Changes:**
1. Add imports after existing imports:
   ```typescript
   import { useWaveAnimation } from '@/hooks/animations/useWaveAnimation';
   import { useRef } from 'react';
   ```
2. Inside WhenToSeek component, after opening function declaration, add:
   ```typescript
   const chipContainerRef = useRef<HTMLDivElement>(null);
   useWaveAnimation(chipContainerRef);
   ```
3. Attach `ref={chipContainerRef}` to the grid container `<div>` (the one with `className="grid grid-cols-1 md:grid-cols-2 gap-4"`)
4. Add class `symptom-chip` to each symptom item container (the `motion.div` wrapper around each symptom)

**Optional Enhancement:**
- You can remove Framer Motion's `initial`, `whileInView`, `viewport`, and `transition` props from the symptom motion divs (to avoid dual-animation)
- OR keep them for a dual-animation effect
- The plan recommends keeping both for a smoother effect, but either works

**Test:**
1. Run `npm run dev`
2. Navigate to landing page or page with "¿Cuándo deberías acudir?" section
3. Scroll to the section
4. Verify chips animate with wave effect:
   - Desktop: Center-outward stagger
   - Mobile: Left-to-right stagger
5. Verify scale goes from 0.8 → 1
6. Verify reduced-motion skips animation

**Important:** Make sure `symptom-chip` class is added to the motion.div wrapper, and ref is on the grid container. Exact selectors matter for the hook to find elements.
