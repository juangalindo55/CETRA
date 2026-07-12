# Specification: Migración de componentes a Server Components

## 1. Goal & Context
El proyecto CETRA está construido sobre Next.js 16 (App Router), el cual es Server-First por defecto. Actualmente, la mayoría de los componentes en `src/components/sections/` contienen la directiva `'use client';` debido al uso directo de animaciones de Framer Motion (`motion.div`, etc.).

El objetivo es migrar los componentes de sección puramente estáticos a Server Components nativos de React/Next.js. Esto reducirá el tamaño del bundle de JavaScript enviado al cliente, mejorará los tiempos de renderizado inicial (TTFB y FCP) y optimizará el SEO al servir HTML más completo directamente desde el servidor.

## 2. Technical Strategy
- **Remover la directiva `'use client';`** en los componentes que no requieran estado interactivo (`useState`, `useEffect`) ni APIs exclusivas de navegador.
- **Desacoplar animaciones**: Reemplazar componentes animados integrados (como `motion.div`) usando el wrapper cliente de animación de scroll `<Reveal />` (que ya está construido en `src/components/ui/Reveal.tsx` como client component) o el componente `<MotionSequence />` de animación secuencial.
- **Componentes elegidos para migración**:
  - `TrustPillars.tsx` (actualmente usa `motion.div`)
  - `WhenToSeek.tsx` (actualmente usa `motion.div` y `motion.button`)
  - `HowItWorks.tsx` (actualmente usa `motion.div`)
  - `ProcessPhases.tsx` (actualmente usa `motion.div`)

## 3. Acceptance Criteria
1. Ninguno de los componentes migrados debe incluir la directiva `'use client';` en su raíz.
2. La interfaz visual debe conservar las animaciones de aparición al hacer scroll usando el componente `<Reveal />`.
3. El proyecto debe compilar correctamente con `npm run build`.
4. El tipo estricto de TypeScript (`npx tsc --noEmit`) y el linter (`npm run lint`) deben pasar con cero errores.
