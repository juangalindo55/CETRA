# CETRA - Technical Architecture & Standards

## Stack Tecnológico
- **Framework:** Next.js 15 (App Router).
- **Runtime:** Node.js 20+ (Edge Runtime para rutas críticas).
- **Lenguaje:** TypeScript (Strict Mode: on).
- **Estilos:** Tailwind CSS con arquitectura de diseño atómico.
- **Componentes:** Radix UI Primitives (sin estilos) + Framer Motion.
- **Base de Datos/Auth:** Supabase.
- **Despliegue:** Vercel (Edge Config optimizado).

## Patrones de Desarrollo (Vibe Coding Rules)
- **Atomic Commits:** Cada cambio funcional debe ser pequeño.
- **Zero Globals:** No usar estados globales a menos que sea estrictamente necesario (preferir Composition).
- **Server-First:** Maximizar el uso de React Server Components (RSC).
- **Error Handling:** Implementar `error.tsx` y `loading.tsx` en cada nivel de ruta.

## Seguridad
- Variables de entorno estrictamente tipadas con T3 Env o validación manual.
- Políticas RLS en Supabase para cada tabla.