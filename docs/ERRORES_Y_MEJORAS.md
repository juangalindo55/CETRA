# ERRORES Y MEJORAS — CETRA

> Registra aquí bugs encontrados y mejoras identificadas durante el desarrollo.
> **Regla:** Registrar ANTES de corregir, documentar resultado DESPUÉS de aplicar.

---

## Índice Rápido

| ID | Tipo | Descripción breve | Estado |
|----|------|-------------------|--------|
| E-001 | Bug | — | — |
| M-001 | Mejora | — | — |

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

*(Vacío al inicio — agregar conforme se encuentren)*

---

## Mejoras Identificadas

*(Vacío al inicio — agregar conforme se identifiquen)*

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
