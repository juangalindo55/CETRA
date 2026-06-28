# Task 10: Test Across Devices

**Objective:** Verify all 4 animations work correctly on desktop, mobile, and with accessibility settings

**Files:**
- No files modified (testing only)

**Test Checklist — Desktop (≥768px)**

Run: `npm run dev` and open http://localhost:3000

- [ ] Fade-in animation: Sections fade in with opacity 0→1 and translateY 40→0 when scrolling into view
- [ ] Services stagger: Cards on `/servicios` animate 80ms apart in sequence
- [ ] WhatsApp CTA pulse: Look for subtle scale 1→1.04→1 loop (1800ms) on WhatsApp buttons (hero, footer)
- [ ] Wave chips: In "¿Cuándo deberías acudir?" section, symptom chips animate from center outward with scale 0.8→1

**Test Checklist — Mobile (<768px)**

Open DevTools (F12) > Responsive Design Mode > iPhone 12 (or Pixel 5)

- [ ] Fade-in: Sections fade in with translateY 20px (NOT 40px) — should feel snappier
- [ ] Services stagger: Cards stagger with 20px translateY, not 40px
- [ ] WhatsApp CTA pulse: **NOT present** — pulse should be disabled on mobile
- [ ] Wave chips: Chips animate left-to-right standard stagger (NOT center-outward)
- [ ] Performance: No frame drops, smooth 60fps scrolling

**Test Checklist — Reduced Motion**

DevTools > Rendering > Emulate CSS media feature: prefers-reduced-motion > `reduce`

- [ ] All animations: **Instantly skipped** — elements appear without animation
- [ ] No delay: Elements show immediately without opacity/transform animation
- [ ] Fade-in: Content visible instantly
- [ ] Services: Cards visible instantly (no stagger)
- [ ] Pulse: No animation on button
- [ ] Wave: Chips visible instantly

**Test Checklist — Real Devices (Optional)**

If available, test on actual iPhone (iOS Safari) and Android phone (Chrome):

- [ ] Scroll smoothness
- [ ] No janky paint issues
- [ ] WhatsApp button pulse visible on desktop device
- [ ] Animations smooth and not stuttering

**Test Checklist — Regressions**

Verify existing Framer Motion animations still work:

- [ ] Hero section fade-in (top of landing)
- [ ] Other motion effects on Services, Timeline, etc.
- [ ] No layout shifts
- [ ] No unexpected behavior

**Test Summary (to be recorded, not committed):**

Example output:
```
✅ Desktop: All 4 animations working, 60fps, no jank
✅ Mobile: Reduced translateY, pulse disabled, wave stagger correct
✅ Reduced Motion: All animations skipped, instant visibility
✅ Real device (iPhone 12): Smooth, no stuttering
✅ Real device (Pixel 5): Smooth, no stuttering
✅ No regressions: Framer Motion still working
```

**Exit Criteria:**
- All animations verified on desktop, mobile, and reduced-motion
- No regressions with existing Framer Motion components
- Performance acceptable (60fps, no jank)
- Ready to merge
