# CETRA - Context & Dependency Map

## 💡 Estado Actual
- **Fase:** Inicialización (Fase 1 del Roadmap).
- **Enfoque:** Configuración de entorno y diseño atómico.

## 🏗️ Mapa de Dependencias
- `DESIGN_SYSTEM.md` -> Define los tokens para `tailwind.config.ts`.
- `ARCHITECTURE.md` -> Define las reglas para la creación de componentes en `/src/components`.
- `CONCEPT.md` -> Guía el copy y el tono de los componentes de UI.

## 📂 Directorios Clave
- `/src/app`: Rutas y Layouts (Next.js 15).
- `/src/components/ui`: Componentes base (Botones, Inputs, Modales).
- `/src/components/marketing`: Secciones de la landing page de alto nivel.
- `/src/lib`: Utilidades de Supabase y lógica de negocio.

## 🔗 Conexiones Críticas
- **Auth Flow:** Supabase Auth -> Middleware -> Protected Routes.
- **Content Flow:** MDX Files (/content) -> Static Generation -> Service Pages.