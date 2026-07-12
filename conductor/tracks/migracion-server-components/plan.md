# Implementation Plan: Migración de componentes a Server Components

## Task 1: Migrar `TrustPillars.tsx` a Server Component [x] (259a7ee)
- [x] Remover la directiva `'use client';` de `src/components/sections/TrustPillars.tsx`.
- [x] Reemplazar las importaciones de `framer-motion` por el componente `Reveal` (`@/components/ui/Reveal`).
- [x] Reemplazar los componentes `motion.div` por elementos estándar de HTML `div` envueltos en `<Reveal>`.
- [x] Ejecutar comprobación de tipos (`npx tsc --noEmit`) para verificar que compile correctamente.

## Task 2: Migrar `WhenToSeek.tsx` a Server Component [~]
- [ ] Remover la directiva `'use client';` de `src/components/sections/WhenToSeek.tsx`.
- [ ] Identificar y reemplazar componentes `motion.div` y `motion.button` por elementos HTML limpios envueltos en `Reveal` o `ButtonCTA`.
- [ ] Ejecutar comprobación de tipos (`npx tsc --noEmit`) para verificar.

## Task 3: Migrar `HowItWorks.tsx` a Server Component
- [ ] Remover la directiva `'use client';` de `src/components/sections/HowItWorks.tsx`.
- [ ] Reemplazar la dependencia de `motion` por el uso de `Reveal` y `MotionSequence` (el cual es cliente).
- [ ] Ejecutar comprobación de tipos (`npx tsc --noEmit`) para verificar.

## Task 4: Migrar `ProcessPhases.tsx` a Server Component
- [ ] Remover la directiva `'use client';` de `src/components/sections/ProcessPhases.tsx`.
- [ ] Reemplazar `motion.div` por el wrapper `Reveal`.
- [ ] Ejecutar comprobación de tipos (`npx tsc --noEmit`) para verificar.

## Task 5: Validación global de producción
- [ ] Ejecutar el formateador y linter (`npm run lint`).
- [ ] Ejecutar la compilación completa de producción (`npm run build`) para verificar la correcta optimización de Next.js Server Components.
