# CLAUDE.md — CETRA Project Context

## Qué Es Este Proyecto

CETRA (Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada) es un **sitio web institucional de alta especialidad médica** ubicado en Monterrey, N.L. No es un SaaS ni e-commerce. Su objetivo es captar pacientes, generar confianza y dirigir conversiones a WhatsApp. Diseño editorial de lujo — estética "Medical Atelier".

## Stack

- **Framework:** Next.js 16.2.3 (App Router, Server Components por defecto)
- **UI:** React 19.2.5 + TypeScript 6.0 (strict, prohibido `any`)
- **Estilos:** Tailwind CSS 4.2.2 + plugin `@tailwindcss/typography` — solo tokens del Design System
- **Animaciones:** sistema híbrido — Framer Motion 12.38 (mayoría) + anime.js 4.5 y Web Animations API en hooks propios. Ver `docs/ANIMACIONES.md` antes de tocar nada.
- **Iconos:** Lucide React
- **Contenido:** MDX via `next-mdx-remote` + `gray-matter` (SSG)
- **Fuentes:** Playfair Display (display/headings) + DM Sans (body)
- **Analytics:** `@vercel/analytics` + `@vercel/speed-insights` (montados en `layout.tsx`)
- **Deploy:** Vercel
- **BD/Auth:** Supabase (Fase 3 — aún no implementado)
- **Lint:** `npm run lint` → `eslint .` (ya no `next lint`)

## Estructura de Carpetas

```
src/
├── app/
│   ├── layout.tsx                  # Root layout, metadata global, fuentes, analytics
│   ├── not-found.tsx               # 404 custom
│   ├── page.tsx                    # Landing principal (Server Component)
│   ├── contacto/page.tsx           # Página de contacto con mapa y WhatsApp
│   ├── especialistas/page.tsx      # Perfiles de médicos y técnicos
│   ├── instalaciones/page.tsx      # Galería editorial del centro
│   ├── investigacion/page.tsx      # Investigación científica
│   ├── nuestra-historia/page.tsx   # Historia institucional + hitos con prensa
│   ├── preguntas-frecuentes/page.tsx  # FAQ dedicada con structured data
│   ├── revision/
│   │   └── quiz-elegibilidad/page.tsx # EligibilityQuiz montado
│   ├── servicios/
│   │   ├── page.tsx                # Grid de todos los servicios
│   │   └── [slug]/page.tsx         # Renderizador MDX dinámico (SSG)
│   ├── privacidad/page.tsx
│   └── terminos/page.tsx
├── components/
│   ├── sections/                   # Hero, Specialists, Services, FAQ, Instalaciones, EligibilityQuiz...
│   ├── ui/                         # Navbar, Footer, ButtonCTA, PhotoFrame, Reveal, MotionSequence...
│   ├── SectionLayout.tsx           # Layout imagen+texto reutilizable en MDX
│   ├── SeoSchema.tsx               # Inyección de JSON-LD
│   ├── TableOfContents.tsx         # TOC de páginas de servicio
│   ├── ReadingProgress.tsx         # Barra de progreso de lectura
│   └── Map.tsx                     # Embed de Google Maps
├── content/
│   └── servicios/                  # 6 archivos .mdx (uno por servicio)
│       ├── trasplante-pulmonar.mdx
│       ├── evaluacion-pretrasplante.mdx
│       ├── rehabilitacion-pulmonar.mdx
│       ├── diagnostico-funcional-respiratorio.mdx
│       ├── diagnostico-del-sueno.mdx
│       └── pruebas-de-esfuerzo.mdx
├── hooks/
│   └── animations/                 # useFadeInOnScroll, useStaggerCards, useWaveAnimation, useReducedMotion
├── lib/
│   ├── contact.ts                  # ÚNICA fuente de datos de contacto — siempre importar de aquí
│   ├── legal.ts                    # ÚNICA fuente de datos regulatorios (COFEPRIS, responsable sanitario)
│   ├── site.ts                     # SITE_NAME, getAbsoluteUrl(), Schema.org
│   ├── mdx.ts                      # getServiceBySlug(), getAllServices()
│   └── service-hub.ts              # Metadata de servicios para SEO
public/
└── images/                         # Imágenes estáticas (webp optimizados)
```

## Design Tokens (no usar otros colores)

Definidos en `tailwind.config.ts` — usar el nombre del token, no el hex.

| Token Tailwind | Hex | Uso |
|----------------|-----|-----|
| `violet-heritage` | `#311B92` | Navegación, confianza, headings |
| `violet-electric` | `#7C3AED` | CTAs, acentos, interacción |
| `violet-soft` | `#c4b5fd` | Acentos suaves, bordes activos |
| `ink` | `#120726` | Headings display sobre fondo claro |
| `base-black` | `#09090B` | Tipografía, secciones de impacto |
| `lavender` | `#f8f7ff` | Fondos de bloque suaves (CTA, cards) |
| `lavender-line` | `#e8e4f8` | Bordes y separadores |
| `soft-gray` | `#F4F4F5` | Separaciones sutiles |
| `base-white` | `#FFFFFF` | Fondos de contenido |

También en uso (aún sin token): `#1a0a3d` para hero backgrounds oscuros.

**Regla:** Sin azules (`blue-*`), sin grises genéricos (`gray-800`), sin `purple-*` de Tailwind.

## Datos de Contacto — Fuente Única

```tsx
import { CONTACT_WHATSAPP, CONTACT_PHONE_DISPLAY, CETRA_LOCATION, CONTACT_EMAIL } from '@/lib/contact';
// NUNCA hardcodear teléfonos, emails o direcciones directamente
```

- WhatsApp: `CONTACT_WHATSAPP` — prefill "quisiera agendar una cita"
- WhatsApp orientación: `CONTACT_WHATSAPP_ORIENTACION` — prefill "quisiera orientación sobre mi caso". Usar en CTAs cuyo copy hable de orientar, no de agendar: el prefill debe coincidir con el texto del botón.
- Teléfono display: `811 778 1017` · tel: `CONTACT_PHONE_TEL`
- Email: `contacto@cetrapulmonar.com`
- Dirección: Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Monterrey
- También exporta: `CETRA_WEEKDAY_HOURS`, `GOOGLE_MAPS_URL`, `GOOGLE_MAPS_EMBED_URL`, `INSURANCE_COMPANIES`

### Datos legales — `@/lib/legal.ts`

Publicidad sanitaria (COFEPRIS). Misma regla: nunca hardcodear.

```tsx
import { RESPONSABLE_SANITARIO, COFEPRIS_PERMISO_PUBLICIDAD, LEYENDA_SANITARIA } from '@/lib/legal';
```

`COFEPRIS_PERMISO_PUBLICIDAD` es `null` mientras el trámite esté pendiente — el footer omite el número en ese caso. **Nunca publicar un número de permiso inexistente.**

## Reglas de Desarrollo

1. **Server-First** — Todo componente es Server Component por defecto. `'use client'` solo cuando hay `useState`, `useEffect`, `useRef`, o Framer Motion.
2. **TypeScript estricto** — Sin `any`. Props tipadas con interfaces nombradas.
3. **Tailwind puro** — Sin shadcn, MUI, Chakra ni otras librerías de componentes.
4. **Animaciones** — Siempre `viewport={{ once: true }}` en Framer Motion para no re-triggerear al scroll. Los hooks propios (`src/hooks/animations/`) respetan `prefers-reduced-motion` vía `useReducedMotion` — cualquier animación nueva debe hacer lo mismo. **Nunca animar el mismo elemento con Framer Motion y con un hook a la vez** — se pelean; ver `docs/ANIMACIONES.md`.
5. **Links externos** — Siempre `target="_blank" rel="noopener noreferrer"`.
6. **Imágenes** — Usar `next/image` con `alt` descriptivo. Archivos en `public/images/`.
7. **MDX headings** — Usar `<h2 id="id-kebab">` **sin `className`** para que el TableOfContents funcione; el estilo lo aplica el wrapper `prose`. Ver "Heading MDX con ID".
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

## Estado del Proyecto (Julio 2026)

Rama de trabajo: **`preview-staging`**. `main` va 71 commits atrás — la rama es la fuente de verdad.

- **Fases 1-2:** ✅ Completas — Layout, Design System, componentes base
- **Fase 3:** 🔄 En progreso — MDX dinámico listo, Supabase pendiente (único bloque restante)
- **Fase 4:** 🔄 En progreso — Mobile OK, SEO/structured data listo, Lighthouse audit pendiente
- **Fase 5:** 🔄 En progreso — Analytics montado (Vercel Analytics + Speed Insights); deploy de producción pendiente

Cerrado desde la última revisión: `ButtonCTA` unificando los CTAs, `PhotoFrame`, sistema de animaciones con `prefers-reduced-motion`, 4 secciones migradas a Server Components, página FAQ con structured data, 404 custom, cédulas profesionales y preparación COFEPRIS.

## Componentes No Activos (pero disponibles)

Implementados y funcionales, pero hoy sin ningún import en el árbol. Antes de crear algo parecido, revisar si uno de estos sirve:

- **`HowItWorks.tsx`** — Proceso paso a paso. La home tiene su propia versión inline.
- **`WhenToSeek.tsx`** — Señales de alarma. Usa `SymptomGrid` + `useWaveAnimation`.
- **`TrustPillars.tsx`** — Pilares de confianza.
- **`Testimonial.tsx`** — Testimonio corto (el que sí se usa en servicios es `TestimonialExpanded`).

`Timeline.tsx` **sí está en uso**, pero indirectamente: lo consume `RecoveryTimeline.tsx`, no las páginas. `EligibilityQuiz.tsx` ya está montado en `/revision/quiz-elegibilidad`.

## Deuda Técnica Documentada

**Colores Hex vs Tokens Tailwind** — 30+ archivos usan valores hexadecimales directamente (`#311B92`, `#7C3AED`, `#1a0a3d`, `#09090B`) en lugar de los tokens Tailwind CSS definidos (`text-violet-heritage`, `bg-violet-electric`, `text-base-black`). Los valores visuales son correctos, pero esto viola la regla "Sin azules, sin grises genéricos". **Próxima acción**: Refactorización dedicada con prueba visual completa (sesión separada). **Regla para código nuevo**: Todo componente nuevo DEBE usar tokens Tailwind desde el inicio — buscar en `tailwind.config.ts` los nombres exactos disponibles.

**Dos sistemas de animación conviviendo** — Framer Motion en ~15 archivos, anime.js 4.5 en `Hero` + 2 hooks, y Web Animations API nativa en `useFadeInOnScroll` / `MotionSequence`. Funciona, pero son tres formas de hacer lo mismo. No migrar nada sin leer `docs/ANIMACIONES.md` primero — hubo una tanda larga de fixes por conflictos entre sistemas y por el bundling de anime.js con Turbopack.

**4 componentes de sección sin uso** — ver "Componentes No Activos". Decidir si se montan o se borran.

**Resuelto (Junio 2026):** Eliminados todos los `blue-*`, `purple-*` y `shadow-purple-*` de Tailwind (eran azul/violeta off-brand) — migrados a hex de marca. Los CTAs se unificaron en el componente `ButtonCTA` (antes ~11 recetas distintas del pill violeta). Datos de contacto hardcodeados (FAQ, privacidad) ahora importan de `@/lib/contact`.

**Parcialmente resuelto:** la escala de casi-blancos violeta ya tiene tokens (`lavender`, `lavender-line`, `violet-soft`, `ink`), pero conviven con hex sueltos (`#faf8ff`, `#fcfbff`, `#f5f3ff`, `#f5f0ff`, `#ece7fb`, `#eee7ff`…). Falta el barrido final hex→token, que va junto con la deuda de arriba y requiere QA visual.

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
| `PROJECT_REVIEW_PLAYBOOK.md` | Al auditar el código o planear limpieza a fondo |

Además: `docs/superpowers/` (specs y planes de trabajo) y `docs/archive/` (docs retirados).
