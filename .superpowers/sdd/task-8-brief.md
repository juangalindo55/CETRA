# Task 8: Integrate usePulseButton into ButtonCTA.tsx

**Objective:** Add pulse animation to WhatsApp CTA buttons in the ButtonCTA component

**Files:**
- Modify: `src/components/ui/ButtonCTA.tsx`

**Dependencies:**
- Requires: `usePulseButton` hook (Task 4) to already exist

**Key Changes:**
1. Add `'use client';` at very top of file (currently Server Component, must become Client)
2. Import: `import { useRef } from 'react';`
3. Import: `import { usePulseButton } from '@/hooks/animations/usePulseButton';`
4. Inside the `ButtonCTA` function component, add before JSX return:
   ```typescript
   const buttonRef = useRef<HTMLAnchorElement>(null);
   const isWhatsApp = href?.includes('wa.me');
   usePulseButton(buttonRef, { enabled: isWhatsApp });
   ```
5. Attach `ref={buttonRef}` to the returned anchor/link element (all three cases: external, internal Link, plain anchor)

**Integration Points:**
- Three conditional returns (external, Link, plain anchor) all need `ref={buttonRef}`
- Only WhatsApp links will pulse (via `enabled` flag)
- Pulse auto-disables on mobile (<768px) in the hook itself

**Test:**
1. Run `npm run dev`
2. Find a WhatsApp CTA button (usually in hero or footer)
3. Verify subtle scale pulse (1 → 1.04 → 1) on desktop
4. Verify NO pulse on mobile
5. Verify non-WhatsApp buttons don't pulse
6. Verify existing ButtonCTA functionality unchanged

**Important:** Must add `ref` to all three return statements (external link, internal Link, plain anchor). Copy exactly from plan template.
