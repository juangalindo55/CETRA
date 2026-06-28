# Task 7: Integrate useStaggerCards into Services.tsx

**Objective:** Add stagger animation to service cards in the Services component

**Files:**
- Modify: `src/components/sections/Services.tsx`

**Dependencies:**
- Requires: `useStaggerCards` hook (Task 3) to already exist
- Requires: `useRef` from React

**Changes:**
1. Add `'use client'` at very top if not present (Services.tsx is already client component)
2. Import hook: `import { useStaggerCards } from '@/hooks/animations/useStaggerCards';`
3. Import React utility if needed: `import { useRef } from 'react';`
4. Inside Services component, after state declarations, add:
   ```typescript
   const serviceGridRef = useRef<HTMLDivElement>(null);
   useStaggerCards(serviceGridRef);
   ```
5. Wrap the main services grid container (the `<div>` with `className="space-y-20 ..."`) with `ref={serviceGridRef}`
6. Add class `service-card` to each service item card container (the one with border/gap styling)

**Exact Changes:**
- Find the grid container and add: `<div ref={serviceGridRef} className="space-y-20 ...">`
- Find each card container and add `service-card` to its className
- Imports go after existing imports

**Test:**
1. Run `npm run dev`
2. Navigate to `/servicios` page
3. Scroll to see services grid
4. Verify cards stagger in smoothly (80ms apart)
5. Test on mobile: verify reduced translateY
6. Test with reduced-motion: verify instant visibility

**Note:** The exact line numbers and existing structure can be found in the current Services.tsx file. Copy class names exactly as shown in the plan template.
