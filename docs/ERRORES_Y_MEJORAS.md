# ERRORES Y MEJORAS — CETRA

> Registra aquí bugs encontrados y mejoras identificadas durante el desarrollo.
> **Regla:** Registrar ANTES de corregir, documentar resultado DESPUÉS de aplicar.

---

## Índice Rápido

| ID | Tipo | Descripción breve | Estado |
|----|------|-------------------|--------|
| E-001 | Bug | Rutas inexistentes devuelven HTTP 200 en vez de 404 | Abierto |
| M-001 | Mejora | Fuentes declaradas con variables CSS que no existen | Pendiente |
| M-002 | Mejora | Imágenes OG por artículo del blog (bloqueada por M-001) | Pendiente |

*(Agrega entradas conforme aparezcan)*

---

## Plantilla para Bug

```
### [E-XXX] Título del error

**Fecha:** YYYY-MM-DD
**Archivo(s):** src/components/...
**Prioridad:** Alta / Media / Baja
**Estado:** Abierto / En revisión / Resuelto

**Síntoma:**
Descripción observable del problema (lo que ve el usuario o el developer).

**Causa raíz:**
Por qué ocurre.

**Solución aplicada:**
Qué se hizo para resolverlo.

**Commit:** abc1234
```

---

## Plantilla para Mejora

```
### [M-XXX] Título de la mejora

**Fecha:** YYYY-MM-DD
**Archivo(s) o área:** src/components/sections/...
**Prioridad:** Alta / Media / Baja
**Estado:** Pendiente / En progreso / Aplicada

**Descripción:**
Qué mejoraría y por qué.

**Beneficio esperado:**
Impacto en performance, UX, mantenibilidad o SEO.

**Resultado (si ya se aplicó):**
Qué cambió, cómo se midió.

**Commit:** abc1234
```

---

## Bugs Conocidos

### [E-001] Rutas inexistentes devuelven HTTP 200 en vez de 404

**Fecha:** 2026-07-28
**Archivo(s):** `src/app/servicios/[slug]/page.tsx`, `src/app/not-found.tsx`
**Prioridad:** Media
**Estado:** Abierto

**Síntoma:**
En build de producción, `curl -I /servicios/no-existe` responde `200 OK` y sirve la
página 404 personalizada. El usuario ve el mensaje correcto, pero el estado HTTP es
incorrecto. Detectado al verificar las rutas del blog.

**Causa raíz:**
La ruta tiene `generateStaticParams()` pero `dynamicParams` queda en su valor por
defecto (`true`), así que Next intenta renderizar el slug bajo demanda y el
`notFound()` acaba resolviéndose como página renderizada, no como respuesta 404.

**Impacto:**
Google trata estas URLs como "soft 404": las rastrea e intenta indexarlas, diluyendo
el presupuesto de rastreo. Relevante porque el SEO es el canal principal de captación.

**Solución aplicada:**
Solo en las rutas del blog (`/blog/[slug]` y `/blog/categoria/[categoria]`), donde se
añadió `export const dynamicParams = false;` — verificado que devuelven 404 real.
**Falta aplicar el mismo arreglo a `/servicios/[slug]`**, que quedó fuera del alcance
de esa sesión por ser una ruta ya publicada que requiere su propia verificación.

**Commit:** 607591e (arreglo parcial, solo blog)

---

## Mejoras Identificadas

### [M-001] Fuentes declaradas con variables CSS que no existen

**Fecha:** 2026-07-28
**Archivo(s) o área:** `tailwind.config.ts:12-13`, `src/app/globals.css` (bloque `@theme`)
**Prioridad:** Media
**Estado:** Pendiente

**Descripción:**
`tailwind.config.ts` define `sans: ['var(--font-dm-sans)', ...]` y
`display: ['var(--font-playfair)', ...]`, pero **ninguna de esas dos variables se
define en el proyecto**: no hay `next/font`, ni `@font-face`, ni enlace a Google Fonts.
Las fuentes cargan porque el bloque `@theme` de `globals.css` las declara por nombre
(`"DM Sans"`, `"Playfair Display"`), es decir, dependen de que el usuario las tenga
instaladas o el navegador caiga al fallback (`Georgia`, `system-ui`).

**Beneficio esperado:**
Tipografía consistente para todos los visitantes, sin depender de fuentes locales.
Además desbloquea M-002 y evita saltos de layout (CLS) que penalizan Core Web Vitals.

**Cómo verificarlo:**
`grep -rn "next/font\|@font-face" src/` no devuelve resultados.

---

### [M-002] Imágenes OG por artículo del blog

**Fecha:** 2026-07-28
**Archivo(s) o área:** `src/app/blog/[slug]/opengraph-image.tsx` (no existe aún)
**Prioridad:** Baja
**Estado:** Pendiente — bloqueada por M-001

**Descripción:**
Cada artículo hereda hoy la imagen OG global del `layout.tsx`. Generar una tarjeta por
artículo con `ImageResponse` de `next/og` mejoraría el clic al compartir en WhatsApp,
que es el canal principal de CETRA.

**Por qué está bloqueada:**
`ImageResponse` necesita el archivo de fuente incrustado; no puede resolver
`font-display` por nombre. Mientras M-001 siga abierta, no hay archivo de Playfair
Display que pasarle y la tarjeta saldría con una tipografía distinta a la del sitio.

---

## Patrones de Error Recurrentes en CETRA

Errores comunes en este stack específico a tener en cuenta:

### Next.js 16 / React 19
- **"use client" en Server Components**: cualquier componente que use `useState`, `useEffect`, o Framer Motion requiere `'use client'` al tope del archivo.
- **Hydration mismatch**: animaciones de Framer Motion que dependen de `window` deben estar en componentes cliente.
- **MDX import paths**: los componentes importados en archivos `.mdx` deben ser rutas absolutas (`@/components/...`), no relativas.

### Tailwind CSS 4
- **Clases dinámicas**: no construir clases con concatenación de strings (ej: `text-[${color}]`). Tailwind 4 no las detecta en el build. Usar `cn()` con clases completas.
- **Arbitrary values**: `bg-[#7C3AED]` funciona, pero asegurarse de usar siempre los tokens del Design System (`text-[#311B92]`, `text-[#7C3AED]`).

### Framer Motion 12
- **viewport={{ once: true }}**: siempre incluirlo para evitar re-animaciones al hacer scroll hacia arriba.
- **staggerChildren en listas**: asegurarse de que el contenedor tenga `variants` de `containerVariants` y cada hijo `itemVariants`.

### MDX / gray-matter
- **Frontmatter requerido**: todos los `.mdx` en `/src/content/servicios/` necesitan `title`, `description`, `icon` en el frontmatter o `getServiceData()` fallará.
- **Componentes en MDX**: importar con named export, no default export, cuando se usen inline en MDX.

---

## Checklist Pre-commit

- [ ] TypeScript sin errores (`npm run build`)
- [ ] Sin `any` en el código nuevo
- [ ] Clases de color usando tokens del Design System (#7C3AED, #311B92, #09090B)
- [ ] Componentes con `useState`/`useEffect`/Framer Motion tienen `'use client'`
- [ ] Imágenes en `/public` optimizadas (WebP preferido)
- [ ] Sin console.log en producción
- [ ] Links de WhatsApp usando `CONTACT_WHATSAPP` de `@/lib/contact`

---

## Estadísticas

| Semana | Bugs encontrados | Bugs resueltos | Mejoras aplicadas |
|--------|-----------------|----------------|-------------------|
| — | — | — | — |
