# CETRA - High-End Medical Development Roadmap

## Fase 1: Entorno y Core Architecture (Setup Atómico) — ✅ COMPLETADA
- [x] **Configuración Next.js 16.2.3:** App Router, TypeScript 6.0, Tailwind CSS 4.2.2.
- [x] **Tailwind Config:** Tokens de `DESIGN_SYSTEM.md` (Violet Heritage, Electric Violet, Base Black/White, Soft Gray).
- [x] **Estructura de Carpetas:**
    - `/src/components/ui`: Componentes base reutilizables.
    - `/src/components/sections`: Secciones de impacto (Hero, Timeline, Quiz, Especialistas).
    - `/src/lib`: Utilidades y configuración MDX.
    - `/src/content`: Archivos MDX para servicios y perfiles médicos.
- [x] **Tipografía:** Playfair Display (display) + DM Sans (body) integradas con `next/font`.

## Fase 2: Layout Maestro & Diseño de Interfaz (The Luxury Shell) — ✅ COMPLETADA
- [x] **Navbar Premium:** Navegación minimalista, responsive, con branding en Deep Violet.
- [x] **Footer Institucional:** Alta densidad informativa con diseño limpio.
- [x] **Fuentes Optimizadas:** Playfair Display (headings) + DM Sans (body) para look editorial premium.
- [x] **Micro-interacciones:** Framer Motion fade-in-up, sticky concierge CTA en Electric Violet.
- [x] **Refinamiento Mobile:** Responsive design optimizado para iOS/Android.

## Fase 3: Motor de Contenido & Supabase — 🔄 EN PROGRESO
- [x] **Dynamic Services:** Sistema MDX para servicios médicos, especialistas y contenido médico dinámico (SSG).
- [ ] **Supabase Setup:** Configurar cliente, tipos TS, y RLS policies para datos clínicos (PRÓXIMA).
- [ ] **Dashboard Admin:** Sistema de gestión de contenido para médicos y especialistas.

## Fase 4: Refinamiento & Optimización — 🔄 EN PROGRESO
- [x] **Mobile Optimization:** Diseño responsive, tap targets mejorados, layout mobile-first.
- [x] **Micro-interacciones:** Framer Motion fade-in-up en secciones, sticky Concierge CTA.
- [x] **Accessibility:** Validación a11y, semantic HTML, contraste WCAG AA.
- [ ] **Lighthouse Audit:** Objetivo 100 en Performance, Accessibility, Best Practices.

## Fase 5: Despliegue & Escalado (Grade A) — ⏭️ SIGUIENTE
- [ ] **Vercel Deployment:** Headers de seguridad, optimización de imágenes, Edge Config.
- [ ] **Supabase Production:** Migración de datos clínicos, RLS policies, backups.
- [ ] **Analytics & Monitoring:** Telemetría de usuario, error tracking, performance monitoring.
