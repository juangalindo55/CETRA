# CLAUDE.md — CETRA Project Context

## Qué Es Este Proyecto

CETRA (Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada) es un **sitio web institucional de alta especialidad médica** ubicado en Monterrey, N.L. No es un SaaS ni e-commerce. Su objetivo es captar pacientes, generar confianza y dirigir conversiones a WhatsApp. Diseño editorial de lujo — estética "Medical Atelier".

## Stack

- **Framework:** Next.js 16.2.3 (App Router, Server Components por defecto)
- **UI:** React 19.2.5 + TypeScript 6.0 (strict, prohibido `any`)
- **Estilos:** Tailwind CSS 4.2.2 — solo tokens del Design System, sin librerías externas
- **Animaciones:** Framer Motion 12.38 — siempre `viewport={{ once: true }}`
- **Iconos:** Lucide React
- **Contenido:** MDX via `next-mdx-remote` + `gray-matter` (SSG)
- **Fuentes:** Playfair Display (display/headings) + DM Sans (body)
- **Deploy:** Vercel
- **BD/Auth:** Supabase (Fase 3 — aún no implementado)

## Estructura de Carpetas

```
src/
├── app/
│   ├── layout.tsx                  # Root layout, metadata global, fuentes
│   ├── page.tsx                    # Landing principal (Server Component)
│   ├── contacto/page.tsx           # Página de contacto con mapa y WhatsApp
│   ├── especialistas/page.tsx      # Perfiles de médicos y técnicos
│   ├── investigacion/page.tsx      # Investigación científica
│   ├── servicios/
│   │   ├── page.tsx                # Grid de todos los servicios
│   │   └── [slug]/page.tsx         # Renderizador MDX dinámico (SSG)
│   ├── privacidad/page.tsx
│   └── terminos/page.tsx
├── components/
│   ├── sections/                   # Hero, Timeline, EligibilityQuiz, Specialists, Services, FAQ...
│   ├── ui/                         # Navbar, Footer, Marquee, Logo
│   └── SectionLayout.tsx           # Layout imagen+texto reutilizable en MDX
├── content/
│   └── servicios/                  # 6 archivos .mdx (uno por servicio)
│       ├── trasplante-pulmonar.mdx
│       ├── evaluacion-pretrasplante.mdx
│       ├── rehabilitacion-pulmonar.mdx
│       ├── diagnostico-funcional-respiratorio.mdx
│       ├── diagnostico-del-sueno.mdx
│       └── pruebas-de-esfuerzo.mdx
├── lib/
│   ├── contact.ts                  # ÚNICA fuente de datos de contacto — siempre importar de aquí
│   ├── site.ts                     # SITE_NAME, getAbsoluteUrl(), Schema.org
│   ├── mdx.ts                      # getServiceBySlug(), getAllServices()
│   └── service-hub.ts              # Metadata de servicios para SEO
public/
└── images/                         # Imágenes estáticas (webp optimizados)
```

## Design Tokens (no usar otros colores)

| Token | Hex | Uso |
|-------|-----|-----|
| Deep Violet (Heritage) | `#311B92` | Navegación, confianza, headings |
| Electric Violet (Pulse) | `#7C3AED` | CTAs, acentos, interacción |
| Violet oscuro | `#1a0a3d` | Hero backgrounds, display text |
| Base Black | `#09090B` | Tipografía, secciones de impacto |
| Soft Gray | `#F4F4F5` | Separaciones sutiles |
| White | `#FFFFFF` | Fondos de contenido |

**Regla:** Sin azules (`blue-*`), sin grises genéricos (`gray-800`), sin `purple-*` de Tailwind.

## Datos de Contacto — Fuente Única

```tsx
import { CONTACT_WHATSAPP, CONTACT_PHONE_DISPLAY, CETRA_LOCATION, CONTACT_EMAIL } from '@/lib/contact';
// NUNCA hardcodear teléfonos, emails o direcciones directamente
```

- WhatsApp: `https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20cita`
- Teléfono display: `811 778 1017`
- Email: `contacto@cetrapulmonar.com`
- Dirección: Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Monterrey

## Reglas de Desarrollo

1. **Server-First** — Todo componente es Server Component por defecto. `'use client'` solo cuando hay `useState`, `useEffect`, `useRef`, o Framer Motion.
2. **TypeScript estricto** — Sin `any`. Props tipadas con interfaces nombradas.
3. **Tailwind puro** — Sin shadcn, MUI, Chakra ni otras librerías de componentes.
4. **Animaciones** — Siempre `viewport={{ once: true }}` en Framer Motion para no re-triggerear al scroll.
5. **Links externos** — Siempre `target="_blank" rel="noopener noreferrer"`.
6. **Imágenes** — Usar `next/image` con `alt` descriptivo. Archivos en `public/images/`.
7. **MDX headings** — Usar `<h2 id="id-kebab">` con las clases del Design System para que el TableOfContents funcione.
8. **Commits** — Atómicos. Un cambio funcional por commit.

## Patrones Frecuentes

### Componente con animación
```tsx
'use client';
import { motion } from 'framer-motion';
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
  ...
</motion.div>
```

### Stagger list
```tsx
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
```

### CTA correcto — usar `ButtonCTA`
Todos los CTAs ("pill" violeta) van con `@/components/ui/ButtonCTA` (variants `primary`/`secondary`, sizes `sm`/`md`/`lg`). No escribir clases de botón a mano. Ver `DESIGN_SYSTEM.md` → "Botones".
```tsx
import ButtonCTA from '@/components/ui/ButtonCTA';
import { CONTACT_WHATSAPP } from '@/lib/contact';
<ButtonCTA href={CONTACT_WHATSAPP} external size="lg">Agendar Evaluación</ButtonCTA>
```

### Imágenes — usar `PhotoFrame`
Los slots de imagen van con `@/components/ui/PhotoFrame` (no escribir `next/image` a mano para placeholders). Sin `src` muestra un marco punteado etiquetado; con `src` renderiza `next/image`. Fotos en `public/images/`. Ver `DESIGN_SYSTEM.md` → "Imágenes".
```tsx
import PhotoFrame from '@/components/ui/PhotoFrame';
<PhotoFrame label="Fachada de la clínica" ratio="4/3" />          // placeholder
<PhotoFrame src="/images/instalaciones/fachada.webp" alt="Fachada de CETRA" ratio="4/3" /> // foto real
```

### Heading MDX con ID
Los `<h2>` de MDX llevan solo `id` (para el TableOfContents) — **sin `className`**: el estilo lo aplica centralizadamente el wrapper `prose` de `servicios/[slug]/page.tsx`.
```mdx
<h2 id="seccion-id">Título</h2>
```

## Servicios Médicos (6 páginas MDX)

| Servicio | Slug | Técnico |
|----------|------|---------|
| Trasplante Pulmonar | `trasplante-pulmonar` | Equipo neumólogos |
| Evaluación Pretrasplante | `evaluacion-pretrasplante` | Equipo neumólogos |
| Rehabilitación Pulmonar | `rehabilitacion-pulmonar` | Equipo neumólogos |
| Diagnóstico Funcional Respiratorio | `diagnostico-funcional-respiratorio` | Cristina Durán |
| Diagnóstico del Sueño | `diagnostico-del-sueno` | Ivis Pérez |
| Pruebas de Esfuerzo | `pruebas-de-esfuerzo` | Brandon Hernández |

## Componentes MDX disponibles (registrados en `[slug]/page.tsx`)

`SectionLayout`, `ProcessPhases`, `RecoveryTimeline`, `TestimonialExpanded`

## Estado del Proyecto (Junio 2026)

- **Fases 1-2:** ✅ Completas — Layout, Design System, componentes base
- **Fase 3:** 🔄 En progreso — MDX dinámico listo, Supabase pendiente
- **Fase 4:** 🔄 En progreso — Mobile OK, Lighthouse audit pendiente
- **Fase 5:** ⏭️ Siguiente — Deploy producción, analytics

## Componentes No Activos (pero disponibles)

Algunos componentes implementados no están montados en la homepage actual pero están listos para uso futuro:
- **`Timeline.tsx`** (src/components/sections/) — Proceso de trasplante en 4 fases. Usar en páginas de servicios detallados o flow de elegibilidad.
- **`EligibilityQuiz.tsx`** (src/components/sections/) — Quiz interactivo de 4 preguntas. Usar en /evaluacion o como modal en servicios relacionados.

## Deuda Técnica Documentada

**Colores Hex vs Tokens Tailwind** — 30+ archivos usan valores hexadecimales directamente (`#311B92`, `#7C3AED`, `#1a0a3d`, `#09090B`) en lugar de los tokens Tailwind CSS definidos (`text-violet-heritage`, `bg-violet-electric`, `text-base-black`). Los valores visuales son correctos, pero esto viola la regla "Sin azules, sin grises genéricos". **Próxima acción**: Refactorización dedicada con prueba visual completa (sesión separada). **Regla para código nuevo**: Todo componente nuevo DEBE usar tokens Tailwind desde el inicio — buscar en `tailwind.config.ts` los nombres exactos disponibles.

**Resuelto (Junio 2026):** Eliminados todos los `blue-*`, `purple-*` y `shadow-purple-*` de Tailwind (eran azul/violeta off-brand) — migrados a hex de marca. Los CTAs se unificaron en el componente `ButtonCTA` (antes ~11 recetas distintas del pill violeta). Datos de contacto hardcodeados (FAQ, privacidad) ahora importan de `@/lib/contact`.

**Pendiente menor:** consolidar la proliferación de casi-blancos violeta (`#faf8ff`, `#f8f7ff`, `#fcfbff`, `#f5f3ff`, `#f5f0ff`, `#ece7fb`, `#eee7ff`…) en una escala nombrada — requiere QA visual, va junto con la migración hex→tokens.

## Documentación del Proyecto

| Doc | Cuándo leer |
|-----|-------------|
| `DESIGN_SYSTEM.md` | Antes de tocar estilos o colores |
| `docs/ANIMACIONES.md` | Antes de tocar o añadir animaciones (hooks, easing, conflictos FM/animejs) |
| `ARCHITECTURE.md` | Antes de crear componentes o rutas |
| `README.md` | Overview público del proyecto |
| `ROADMAP.md` | Checklist de fases y estado general |
| `docs/CONVENCIONES_CODIGO.md` | Antes de escribir código |
| `docs/FLOWS_UX.md` | Al trabajar en secciones de UI o CTAs |
| `docs/NEGOCIO.md` | Al tomar decisiones de copy o producto |
| `docs/ERRORES_Y_MEJORAS.md` | Al inicio de cada sesión de trabajo |
| `docs/BASE_DATOS.md` | Cuando se implemente Supabase (Fase 3) |
| `docs/ONBOARDING.md` | Para onboarding de nuevo desarrollador |
| `docs/TESTING.md` | Estrategia de testing (no implementado aún) |
| `docs/SEGURIDAD_PRIVACIDAD.md` | Marco legal y seguridad de datos |
| `docs/VARIABLES_ENTORNO.md` | Variables de entorno y config |
| `docs/COMANDOS_CLI.md` | Referencia de comandos npm, git, Supabase |
| `docs/GLOSARIO.md` | Términos médicos y técnicos |
| `docs/HISTORIAL.md` | Changelog por versión |
| `docs/PRODUCTO.md` | Definición de producto y métricas |
