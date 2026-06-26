# CETRA - Technical Architecture & Standards

## Stack Tecnológico
- **Framework:** Next.js 16.2.3 (App Router).
- **Runtime:** Node.js 24 LTS (default), compatible con 20+.
- **Lenguaje:** TypeScript 6.0 (Strict Mode: on).
- **Librería UI:** React 19.2.5 con Server Components.
- **Estilos:** Tailwind CSS 4.2.2 con arquitectura de diseño atómico.
- **Animaciones:** Framer Motion 12.38.
- **Iconografía:** Lucide React (SVG optimizado).
- **Contenido:** MDX via `next-mdx-remote` + `gray-matter`.
- **Despliegue:** Vercel (optimizado para performance).
- **Base de Datos/Auth:** Supabase (configuración pendiente para Fase 3).

## Patrones de Desarrollo (Vibe Coding Rules)
- **Atomic Commits:** Cada cambio funcional debe ser pequeño.
- **Zero Globals:** No usar estados globales a menos que sea estrictamente necesario (preferir Composition).
- **Server-First:** Maximizar el uso de React Server Components (RSC).
- **Error Handling:** Implementar `error.tsx` y `loading.tsx` en cada nivel de ruta.

## Seguridad
- Variables de entorno estrictamente tipadas con T3 Env o validación manual.
- Políticas RLS en Supabase para cada tabla.