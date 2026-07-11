# CODEX Handoff

## 1. Objetivo final
Dejar CETRA estable, desplegado en Vercel como origen de producción, con limpieza técnica priorizada por riesgo: animaciones consistentes, validaciones correctas, documentación alineada y sin reabrir arquitectura salvo evidencia fuerte.

## 2. Estado actual del repo
- Proyecto: Next.js + TypeScript en `/home/surface/proyectos/CETRA`.
- Deploy canonical confirmado en Vercel; GitHub Pages quedó como estado externo heredado y no se tocó.
- Ya están completados y verificados: lint config moderna, build limpio, `turbopack.root` corregido, hours centralizadas, validación fuerte de frontmatter MDX, sitemap actualizado, headers de seguridad, carga diferida de Google Maps, y soporte `prefers-reduced-motion`.
- Animaciones ya existen en `src/hooks/animations/`, pero hay limpieza pendiente: varios hooks resetean al salir del viewport y hay documentación que describe ese comportamiento.
- El repo ya estaba dirty antes de este trabajo; no revertir cambios ajenos ni limpiar artefactos sin instrucción explícita.

## 3. Plan aprobado
1. Limpiar el comportamiento de animaciones de entrada para que no reaparezcan al salir del viewport.
2. Alinear la documentación de animaciones con el comportamiento real.
3. Correr validación: lint, typecheck y build.
4. Revisar diff final por scope creep y riesgos residuales.

## 4. Archivos probables a modificar
- `src/hooks/animations/useFadeInOnScroll.ts`
- `src/hooks/animations/useStaggerCards.ts`
- `src/hooks/animations/useWaveAnimation.ts`
- `docs/ANIMACIONES.md`
- Posiblemente `src/components/sections/Services.tsx` y `src/components/sections/WhenToSeek.tsx` solo si el ajuste de comportamiento revela un conflicto visual real.

## 5. Decisiones técnicas ya tomadas
- Vercel es la fuente de despliegue canonical; no reabrir GitHub Pages salvo instrucción explícita.
- No replantear la app completa; trabajar por bloques pequeños y verificables.
- Mantener `prefers-reduced-motion` como salida temprana real, no como ajuste cosmético.
- No mezclar Framer Motion y Anime.js sobre el mismo nodo si ya hay conflicto.
- No tocar el playground/quiz que se decidió omitir.

## 6. Lo que NO debe replantear Claude
- No rediseñar arquitectura.
- No volver a introducir el quiz de elegibilidad.
- No cambiar el hosting canonical a GitHub.
- No tocar privacidad, sitemap, headers, map consent ni hours salvo que aparezca un bug claro relacionado.
- No eliminar hooks de animación por “limpieza” si siguen siendo usados; solo corregir su comportamiento.

## 7. Riesgos, supuestos y ambigüedades
- El comportamiento “repeat” de las animaciones puede ser intencional según docs antiguas, pero hoy parece inconsistente con la intención de estabilidad visual.
- `useFadeInOnScroll` no tiene consumidores, así que cambios ahí son de deuda preventiva, no de impacto inmediato.
- `duration` en algunos hooks puede estar subutilizado o ignorado; si aparece como deuda, tratarlo como limpieza secundaria y no como rediseño.
- El repo tiene cambios ajenos; cualquier diff debe leerse con cuidado antes de editar o validar.

## 8. Comandos de trabajo y validación
- Instalar: `npm install`
- Revisar tipos: `npx tsc --noEmit`
- Lint: `npm run lint`
- Build: `npm run build`
- Inspeccionar diff: `git diff --stat` y `git diff --check`
- Buscar usos de hooks: `rg -n "useFadeInOnScroll|useStaggerCards|useWaveAnimation|usePulseButton" src docs`

## 9. Criterios de aceptación
- Las animaciones de `useStaggerCards` y `useWaveAnimation` no se reactivan al salir y volver a entrar al viewport, salvo que se justifique explícitamente.
- `useFadeInOnScroll` queda consistente con el resto del sistema y sin API engañosa.
- `docs/ANIMACIONES.md` describe el comportamiento real, no un estado antiguo.
- `npm run lint`, `npx tsc --noEmit` y `npm run build` pasan.
- No aparecen cambios colaterales fuera del bloque aprobado.

## 10. Primer paso exacto para Claude
1. Abrir `src/hooks/animations/useFadeInOnScroll.ts`, `src/hooks/animations/useStaggerCards.ts`, `src/hooks/animations/useWaveAnimation.ts` y `docs/ANIMACIONES.md`.
2. Confirmar si el objetivo es pasar a comportamiento de una sola entrada por viewport.
3. Si sí, implementar la limpieza mínima: dejar de resetear en `else`, unobserve cuando corresponda y actualizar docs en el mismo bloque.
4. Luego correr `npm run lint`, `npx tsc --noEmit` y `npm run build`.
