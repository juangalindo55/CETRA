# CETRA - High-End Medical Development Roadmap

## Fase 1: Entorno y Core Architecture (Setup Atómico)
- [x] **Configuración Next.js 15:** Inicializar con App Router, TypeScript y Tailwind CSS.
- [x] **Tailwind Config:** Integrar los tokens de `DESIGN_SYSTEM.md` (Black, White, Violet Heritage & Electric).
- [x] **Estructura de Carpetas:**
    - `/src/components/ui`: Componentes atómicos (Radix UI).
    - `/src/components/sections`: Secciones de alto impacto (Hero, Features).
    - `/src/lib`: Configuraciones de Supabase y utilidades.
    - `/src/content`: Archivos MDX para servicios médicos y especialistas.

## Fase 2: Layout Maestro & Diseño de Interfaz (The Luxury Shell)
- [x] **Navbar Premium:** Implementación de navegación minimalista con desenfoque de fondo y logo en "Deep Violet".
- [x] **Footer Institucional:** Diseño de alta densidad informativa pero estéticamente limpio.
- [x] **Fuentes:** Configuración de 'Inter' con pesos optimizados para look editorial.

## Fase 3: Motor de Contenido & Supabase
- [ ] **Supabase Setup:** Configurar cliente y tipos de TypeScript para la base de datos.
- [x] **Dynamic Services:** Crear el sistema de renderizado para los servicios médicos basado en archivos locales (MDX) para máxima velocidad (SSG).

## Fase 4: Micro-Interacciones & Refinamiento (Vibe Check)
- [x] **Framer Motion Integration:** Añadir transiciones de entrada suaves (fade-in-up) en cada sección.
- [x] **Sticky Concierge CTA:** Implementar el botón de contacto persistente con el color "Electric Violet".

## Fase 5: Despliegue & Performance (Grade A)
- [ ] **Vercel Deployment:** Configurar headers de seguridad y optimización de imágenes.
- [ ] **Lighthouse Audit:** Asegurar 100/100 en accesibilidad y performance.
