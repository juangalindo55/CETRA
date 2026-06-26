# CONVENCIONES DE CÓDIGO — CETRA

> Reglas de estilo y patrones que se aplican en todo el proyecto.
> **Leer antes de codificar. Tener abierto mientras se escribe código.**

---

## Regla Principal

> **Todo archivo, función y componente debe poder entenderse en 30 segundos.**
> Si alguien abre el archivo en 6 meses sin contexto, debe saber qué hace sin leer la implementación completa.

---

## Reglas Fundamentales

1. **TypeScript estricto** — `strict: true` en `tsconfig.json`. Prohibido `any`.
2. **Server-First** — Todo componente es Server Component por defecto. Solo agregar `'use client'` cuando sea estrictamente necesario.
3. **Tailwind puro** — Ninguna librería de componentes externa (no shadcn, no MUI, no Chakra). Solo Tailwind CSS.
4. **Tokens del Design System** — No usar colores arbitrarios que no sean los definidos. Ver `DESIGN_SYSTEM.md`.
5. **Zero globals** — No usar estado global (Zustand, Context API global) salvo necesidad justificada y documentada.
6. **Fuente única de verdad** — Contacto en `@/lib/contact`, metadata en `@/lib/site`, servicios en `@/lib/mdx`.

---

## Headers de Archivo

Todo archivo `.ts` o `.tsx` no trivial empieza con un bloque descriptivo:

```typescript
/**
 * @file Renderizador dinámico de páginas de servicio médico
 * @description Genera una página estática por cada archivo MDX en /content/servicios/.
 *              Incluye hero, barra de progreso, tabla de contenidos y CTA final.
 * @see src/content/servicios/ para los archivos de contenido
 * @see 21_FLOWS_UX.md — Flujo de Servicio
 */
```

Para archivos simples (constantes, tipos), el header es opcional.

---

## Documentación de Funciones

### Funciones exportadas — JSDoc completo

```typescript
/**
 * Obtiene los datos de un servicio médico por su slug.
 * Parsea el frontmatter y el contenido MDX del archivo correspondiente.
 *
 * @param slug - Identificador kebab-case del servicio (ej: "trasplante-pulmonar")
 * @returns Objeto con frontmatter y contenido, o null si no existe
 *
 * @example
 * const service = getServiceBySlug('trasplante-pulmonar');
 * // → { frontmatter: { title: "Trasplante Pulmonar", ... }, content: "..." }
 */
export function getServiceBySlug(slug: string): ServiceData | null { ... }
```

### Funciones internas — una línea

```typescript
/** Convierte un slug en mayúsculas con espacios para mostrar en UI */
function slugToTitle(slug: string): string { ... }
```

### Secciones lógicas dentro de una función

```typescript
export async function ServicePage({ params }) {
  // --- Resolución de parámetros ---
  const resolvedParams = await params;

  // --- Obtención de datos ---
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) notFound();

  // --- Render ---
  return ( ... );
}
```

---

## Cuándo Usar `'use client'`

Agregar `'use client'` SOLO si el componente usa alguno de estos:

```tsx
// ✅ Requiere 'use client':
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// event handlers (onClick, onChange, onSubmit)
// useReducedMotion, useScrollProgress

// ✅ NO requiere 'use client' (Server Component):
import Image from 'next/image';
import Link from 'next/link';
// fetch de datos, async/await, acceso a sistema de archivos
// metadata export, generateStaticParams
```

**Regla de oro:** Si tienes duda, NO pongas `'use client'`. Prueba sin él primero.

---

## Estructura de Archivos

```
src/
├── app/                          # Solo rutas y layouts (Next.js App Router)
│   ├── layout.tsx                # Root layout con metadata global y fuentes
│   ├── page.tsx                  # Landing principal (Server Component)
│   ├── contacto/page.tsx
│   ├── especialistas/page.tsx
│   ├── investigacion/page.tsx
│   └── servicios/
│       ├── page.tsx              # Grid de servicios
│       └── [slug]/
│           ├── page.tsx          # Renderizador MDX (SSG)
│           └── loading.tsx
├── components/
│   ├── sections/                 # Secciones de impacto — PascalCase, default export
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   ├── EligibilityQuiz.tsx
│   │   ├── Specialists.tsx
│   │   ├── Services.tsx
│   │   ├── FAQ.tsx
│   │   └── ...
│   ├── ui/                       # Componentes base — Navbar, Footer, Marquee, Logo
│   ├── SectionLayout.tsx         # Layout imagen+texto para MDX
│   ├── TableOfContents.tsx
│   └── ReadingProgress.tsx
├── content/
│   └── servicios/                # Archivos MDX — kebab-case
│       ├── trasplante-pulmonar.mdx
│       └── ...
├── lib/
│   ├── contact.ts                # ⚠️ Fuente única de datos de contacto
│   ├── site.ts                   # SITE_NAME, getAbsoluteUrl(), Schema.org
│   ├── mdx.ts                    # getServiceBySlug(), getAllServices()
│   └── service-hub.ts            # Metadata de servicios
└── app/globals.css
```

---

## Naming Conventions

| Elemento | Convención | Ejemplo |
|---------|-----------|---------|
| Componentes React | PascalCase | `EligibilityQuiz.tsx` |
| Hooks | camelCase con `use` prefix | `useScrollProgress.ts` |
| Utilidades/funciones | camelCase | `getServiceData()` |
| Archivos MDX | kebab-case | `trasplante-pulmonar.mdx` |
| Variables CSS | `--kebab-case` | `--color-violet-heritage` |
| Constantes exportadas | SCREAMING_SNAKE_CASE | `CONTACT_PHONE_TEL` |
| Props (tipos) | PascalCase + sufijo `Props` | `interface SpecialistCardProps` |
| Rutas / slugs | kebab-case | `/servicios/trasplante-pulmonar` |

---

## Patrones de Componentes

### Server Component (por defecto)

```tsx
// src/components/sections/Services.tsx
/**
 * @file Grid de servicios médicos en la landing page
 * @description Obtiene datos de MDX y renderiza cards con iconos y links a cada servicio.
 */
import Link from 'next/link';
import { getAllServices } from '@/lib/mdx';

export default async function Services() {
  const services = await getAllServices();
  return (
    <section className="py-24 w-full bg-white">
      {/* ... */}
    </section>
  );
}
```

### Client Component (con Framer Motion)

```tsx
'use client';
// src/components/sections/Timeline.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(1);
  return (
    <section className="py-20 w-full bg-white">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}   // ← SIEMPRE en whileInView — no re-triggerear al scroll
      >
        {/* ... */}
      </motion.div>
    </section>
  );
}
```

### Animación en lista (stagger)

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>...</motion.div>
  ))}
</motion.div>
```

### Respeto a preferencias de movimiento reducido

```tsx
'use client';
import { useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      animate={reduceMotion ? { opacity: 1 } : { x: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
      transition={reduceMotion ? { duration: 0 } : { duration: 8, repeat: Infinity }}
    />
  );
}
```

---

## Tokens de Color — Uso Correcto

```tsx
// ✅ Correcto — tokens del Design System
className="text-[#311B92]"        // Deep Violet (Heritage) — confianza, navegación
className="text-[#7C3AED]"        // Electric Violet — CTAs, acentos, interacción
className="bg-[#09090B]"          // Base Black — tipografía, secciones de impacto
className="bg-[#F4F4F5]"          // Soft Gray — separaciones sutiles
className="text-[#1a0a3d]"        // Violeta muy oscuro — headings y texto display
className="bg-[#f5f3ff]"          // Violeta ultra-suave — fondos de cards/callouts

// ❌ Incorrecto — rompe el Design System
className="text-blue-600"         // Azul genérico de industria médica
className="bg-purple-500"         // Purple de Tailwind (tono diferente al token)
className="text-gray-800"         // Gris genérico sin coherencia con el sistema
```

---

## Datos de Contacto — Fuente Única

**Nunca hardcodear** teléfonos, emails, direcciones o el link de WhatsApp.

```tsx
// ✅ Correcto
import {
  CONTACT_WHATSAPP,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  CETRA_LOCATION,
  INSURANCE_COMPANIES
} from '@/lib/contact';

<a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer">
  {CONTACT_PHONE_DISPLAY}
</a>

// ❌ Incorrecto
<a href="https://wa.me/528117781017">811 778 1017</a>
```

---

## Validación con Zod (para Fase 3 — formularios y API)

```typescript
import { z } from 'zod';

const ContactFormSchema = z.object({
  name:    z.string().min(2, 'Nombre requerido').max(100),
  phone:   z.string().regex(/^\+?52?\d{10}$/, 'Teléfono inválido').optional(),
  email:   z.string().email('Email inválido').optional(),
  message: z.string().min(10, 'Mensaje muy corto').max(1000),
  service: z.string().optional(),
}).refine(data => data.phone || data.email, {
  message: 'Necesitas proporcionar teléfono o email',
});

type ContactFormData = z.infer<typeof ContactFormSchema>;
```

---

## Metadata SEO por Página

```typescript
// En cada page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  const title = `${service.frontmatter.title} | CETRA`;

  return {
    title,
    description: service.frontmatter.description, // 150-160 chars
    keywords: [service.frontmatter.primaryKeyword, ...service.frontmatter.secondaryKeywords],
    alternates: { canonical: getAbsoluteUrl(`/servicios/${service.slug}`) },
    openGraph: { title, description: service.frontmatter.description },
  };
}
```

---

## Patrones MDX

### Frontmatter requerido en `/src/content/servicios/*.mdx`

```yaml
---
title: "Nombre del Servicio"
description: "Descripción SEO (150-160 chars). Debe incluir keyword principal."
primaryKeyword: "trasplante pulmonar monterrey"
secondaryKeywords:
  - "lista de espera trasplante"
  - "candidato trasplante pulmonar"
relatedServices:
  - "/servicios/evaluacion-pretrasplante"
  - "/servicios/rehabilitacion-pulmonar"
reviewedBy: "Equipo clínico CETRA"
lastUpdated: "YYYY-MM-DD"
icon: "NombreIconoLucide"
---
```

### Headings en MDX (con IDs para TableOfContents)

```mdx
<h2 id="id-unico-kebab-case" className="text-4xl text-[#311B92] font-bold border-b-2 border-[#7C3AED] pb-4 mt-16 mb-6 font-display">
  Título de Sección
</h2>
```

**Regla:** El `id` debe ser kebab-case único dentro del documento. El `TableOfContents` lo usa para generar el índice y los links de ancla.

### Agregar componente JSX en MDX

1. Crear componente en `src/components/sections/`
2. Importarlo en `src/app/servicios/[slug]/page.tsx`
3. Agregarlo al objeto `components` del `<MDXRemote>`
4. Usarlo en el `.mdx` como `<NombreComponente />`

---

## Accesibilidad (WCAG AA)

- Todos los `<img>` y `<Image>` necesitan `alt` descriptivo (no genérico como "imagen")
- Botones sin texto visible necesitan `aria-label`
- Links externos: `target="_blank" rel="noopener noreferrer"`
- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande
- Secciones semánticas: `<header>`, `<main>`, `<footer>`, `<nav>`, `<aside>`
- `<section>` con `aria-label` si no tiene heading propio

---

## Checklist de Componente Nuevo

Antes de dar por terminado un componente:

- [ ] ¿Necesita `'use client'`? Solo si usa state, effects o Framer Motion
- [ ] ¿Header de archivo descriptivo (si el archivo tiene lógica no trivial)?
- [ ] ¿Usa colores del Design System? (no azules, no grises genéricos)
- [ ] ¿Animaciones Framer Motion tienen `viewport={{ once: true }}`?
- [ ] ¿Datos de contacto vienen de `@/lib/contact`?
- [ ] ¿TypeScript con tipado explícito (sin `any`)?
- [ ] ¿Links externos con `target="_blank" rel="noopener noreferrer"`?
- [ ] ¿Imágenes con `alt` descriptivo?
- [ ] ¿Se ve bien en mobile (< 375px)?
- [ ] ¿Funciona con `prefers-reduced-motion`?

---

## Checklist de Pull Request / Commit

- [ ] ¿El commit describe el cambio funcional (no "fix stuff")?
- [ ] ¿Se probó en mobile?
- [ ] ¿No hay `console.log` olvidados?
- [ ] ¿No se hardcodearon datos de contacto?
- [ ] ¿Los colores son del Design System?
- [ ] ¿Se actualizó `10_ERRORES_Y_MEJORAS.md` si se resolvió un bug?
- [ ] ¿Se actualizó `11_HISTORIAL.md` al final de la sesión?
