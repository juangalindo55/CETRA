# HISTORIAL DE CAMBIOS — CETRA

> Changelog del proyecto. Actualizar al final de cada sesión de trabajo.
> **Formato:** vX.Y.Z — MAJOR.MINOR.PATCH

---

## Etiquetas

| Etiqueta | Significado |
|----------|-------------|
| `ADDED` | Nueva funcionalidad o componente |
| `CHANGED` | Cambio en funcionalidad existente |
| `FIXED` | Corrección de bug |
| `REMOVED` | Código o feature eliminado |
| `DOCS` | Documentación únicamente |
| `STYLE` | Cambios de estilo / UI sin lógica |
| `REFACTOR` | Refactorización sin cambio de comportamiento |
| `CONFIG` | Cambios en configuración (next.config, tailwind, etc.) |
| `PERF` | Mejora de rendimiento |

---

## v0.1.0 — Fundación y Core (Fase 1 + Fase 2)

**Período:** Inicio del proyecto → Abril 2026
**Estado:** ✅ Completa

### ADDED
- Setup inicial Next.js 16.2.3 con App Router y TypeScript 6.0 strict
- Tailwind CSS 4.2.2 configurado con tokens del Design System (Electric Violet `#7C3AED`, Heritage `#311B92`, Base Black `#09090B`)
- Tipografía: Playfair Display (display/headings) + DM Sans (body) via `next/font`
- Estructura de carpetas: `/components/ui`, `/components/sections`, `/lib`, `/content`
- `Navbar` premium — minimalista, responsive, sticky con branding Deep Violet
- `Footer` institucional con información de contacto y aseguradoras
- `Hero` — sección principal con glassmorphism y CTA Electric Violet
- `Timeline` — proceso de trasplante en 4 fases interactivas (Evaluación, Preparación, Trasplante, Recuperación)
- `EligibilityQuiz` — 4 preguntas de elegibilidad con resultado dinámico
- `Specialists` — directorio de neumólogos + técnicos (Cristina Durán, Ivis Pérez, Brandon Hernández)
- `Services` — grid de servicios médicos
- `Testimonial` y `TestimonialExpanded` — historias de resiliencia con micro-animaciones
- `FAQ` — sección de preguntas frecuentes
- `ProcessPhases` y `RecoveryTimeline` — componentes para páginas de servicio MDX
- `SectionLayout` — HoC para secciones con imagen + texto en páginas MDX
- `Map` — mapa de ubicación (Torre José A. Muguerza, Monterrey)
- `Marquee` — banda deslizante para aseguradoras
- `ReadingProgress` — barra de progreso de lectura en páginas de servicio
- `TableOfContents` — índice flotante en páginas de servicio
- `Logo` y `SeoSchema` — branding y datos estructurados Schema.org (MedicalClinic)
- Motor MDX: `next-mdx-remote` + `gray-matter` para servicios dinámicos (SSG)
- 6 servicios en MDX: Trasplante Pulmonar, Evaluación Pretrasplante, Rehabilitación Pulmonar, Diagnóstico Funcional Respiratorio, Diagnóstico del Sueño, Pruebas de Esfuerzo
- Rutas: `/` · `/servicios` · `/servicios/[slug]` · `/especialistas` · `/contacto` · `/investigacion` · `/privacidad` · `/terminos`
- `sitemap.ts` y `robots.ts` para SEO
- `@/lib/contact.ts` — fuente única de verdad para teléfono, email, WhatsApp, dirección, aseguradoras
- `@/lib/site.ts` — metadata, URL canónica, Schema.org
- `@/lib/mdx.ts` — parseo y generación estática de contenido MDX
- Optimización mobile: responsive design, tap targets, layout mobile-first
- Micro-interacciones Framer Motion: fade-in-up, stagger en listas, hover effects

---

## v0.2.0 — Motor de Contenido y Supabase (Fase 3)

**Período:** Mayo 2026 → TBD
**Estado:** 🔄 En progreso

### ADDED
- Documentación técnica completa (set de MDs numerados)

### PENDIENTE
- [ ] Supabase client setup y tipos TypeScript generados
- [ ] RLS policies para datos clínicos
- [ ] Dashboard de administración de contenido médico
- [ ] Formulario de contacto con backend (reemplaza WhatsApp directo)

---

## v0.3.0 — Optimización y Lighthouse (Fase 4)

**Período:** TBD
**Estado:** ⏭️ Siguiente

### PENDIENTE
- [ ] Lighthouse audit — objetivo 100/100/100/100
- [ ] Optimización de imágenes (WebP, lazy loading, sizes)
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Pruebas de accesibilidad WCAG AA completas

---

## v1.0.0 — Producción (Fase 5)

**Período:** TBD
**Estado:** ⏭️ Futuro

### PENDIENTE
- [ ] Deploy Vercel production con dominio `cetrapulmonar.com`
- [ ] Headers de seguridad (CSP, HSTS)
- [ ] Supabase production con backups
- [ ] Analytics y error tracking
- [ ] Monitoreo de uptime

---

*Actualizar este archivo al final de cada sesión de desarrollo.*
