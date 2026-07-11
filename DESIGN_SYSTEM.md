# DESIGN_SYSTEM.md - The Radical Excellence (Monochrome & Violet)

## Misión y Identidad

**Misión:** Liderazgo absoluto en salud pulmonar y trasplante de pulmón. CETRA no es una clínica, es un referente de esperanza y alta ingeniería médica.

**Concepto Visual:** "The Medical Atelier" — Una estética que proyecta precisión quirúrgica y exclusividad absoluta. Contraste extremo: el blanco y negro genera autoridad, mientras que el violeta actúa como el "pulso" de la marca.

**Diferenciador:** Cero azules. Rompemos con el estándar de la industria para posicionar a CETRA como una entidad única de vanguardia.

## Target Audiencia

- Pacientes de perfil socioeconómico alto (A/B) con diagnósticos respiratorios complejos
- Médicos referidores que buscan el estándar de oro en especialidad
- Usuarios que valoran la claridad, rapidez y sofisticación digital

## Pilares de Comunicación

1. **Precisión** — Información médica validada y directa, sin ambigüedades
2. **Exclusividad** — Diseño limpio, sin saturación, digno de un hotel de lujo o centro de investigación suizo
3. **Vanguardia** — Animaciones sutiles y transiciones fluidas que denoten tecnología de punta

## Vibe & Concept

## Design Tokens (Tailwind)
- **Base White:** #FFFFFF (Pureza total para fondos de contenido).
- **Base Black:** #09090B (Un negro "Zinc" casi total para tipografía y secciones de impacto).
- **Deep Violet (The Heritage):** #311B92 (Violeta oscuro, denso, para elementos de confianza y navegación).
- **Electric Violet (The Pulse):** #7C3AED (Para estados de interacción, botones críticos y acentos de tecnología).
- **Soft Gray:** #F4F4F5 (Para sutiles separaciones sin ensuciar el diseño).
- **Lavender (`lavender`):** #f8f7ff (Superficie alterna violeta muy sutil — hero, secciones alternas, footer; parentesco visual con la identidad Christus Muguerza).
- **Lavender Line (`lavender-line`):** #e8e4f8 (Bordes y separadores sobre lavanda o blanco).
- **Ink (`ink`):** #120726 (Texto principal y fondos de secciones oscuras en el lenguaje editorial).
- **Violet Soft (`violet-soft`):** #c4b5fd (Kickers y acentos sobre fondos `ink`).

## Typography (World-Class Standards)
- **Display (Headings):** 'Playfair Display' (Font-weight: 700, Tracking: -0.02em). Serif elegante que denota autoridad médica y tradición.
- **Body Text:** 'DM Sans' (Font-weight: 400, Line-height: 1.8). Sans-serif moderno con excelente legibilidad. Espaciado generoso para lectura ejecutiva.

## UI Elements (Minimalismo Radical)
- **Borders:** 0px o 4px (Bordes muy sutiles). Queremos que el sitio se sienta como una interfaz de software de alta gama (tipo Apple o Stripe).
- **Shadows:** Ninguna o "Stroke-only". Usaremos bordes de 1px en lugar de sombras para mantener la limpieza.
- **Buttons:** Fondo negro con texto blanco y hover en `Electric Violet`. O fondo blanco con borde `Deep Violet`.

## Botones — Componente `ButtonCTA`

Todos los CTAs se renderizan con el componente único **`src/components/ui/ButtonCTA.tsx`**. No volver a escribir clases de botón a mano: usar el componente para mantener una sola receta visual en todo el sitio.

**Lenguaje actual: cuadrado editorial** (esquinas rectas, sin sombra, tipografía semibold). El pill redondeado quedó retirado en Julio 2026 al adoptar la dirección editorial de la home.

```tsx
import ButtonCTA from '@/components/ui/ButtonCTA';
import { CONTACT_WHATSAPP } from '@/lib/contact';

// Externo (WhatsApp, Google Maps) → abre en pestaña nueva con rel seguro
<ButtonCTA href={CONTACT_WHATSAPP} external size="lg">Agendar estudio</ButtonCTA>

// Interno (next/link) — secundario con icono
<ButtonCTA href="/contacto" variant="secondary" size="md" icon={<CalendarDays className="h-4 w-4" />}>
  Ver contacto
</ButtonCTA>
```

| Prop | Valores | Uso |
|------|---------|-----|
| `variant` | `primary` (def.) · `secondary` | Sólido `violet-heritage` con hover `ink` / contorno `violet-heritage` con hover `lavender` |
| `size` | `sm` · `md` (def.) · `lg` | Nav / CTA estándar de página / hero y cierres editoriales |
| `external` | `boolean` | `true` → `<a target="_blank" rel="noopener noreferrer">` |
| `href` | string | Rutas `/…` usan `next/link`; `tel:`/`mailto:` y externos usan `<a>` |
| `icon` | ReactNode | Icono opcional a la izquierda (`<ArrowRight className="h-4 w-4" />`) |
| `className` | string | Solo para ancho/margen/visibilidad responsive (ej. `w-full lg:w-auto`) |

**Sin sombra:** el botón editorial no lleva sombra (coherente con "Shadows: ninguna o stroke-only").

**Excepciones documentadas (bespoke, no migradas):** los pares de botones del `Hero` y de `EligibilityQuiz` conservan su tamaño propio para no desalinear su botón hermano; los outline violeta del Hero/landing ("Ver servicios") mantienen su estilo editorial.

## Imágenes — Componente `PhotoFrame`

Los slots de imagen del sitio se renderizan con **`src/components/ui/PhotoFrame.tsx`**. Mientras no haya foto, muestra un **marco punteado etiquetado** (con el aspect-ratio visible, sirve de brief para el fotógrafo); al pasarle `src` renderiza `next/image`. Migrar a foto real = añadir las props `src`/`alt`.

```tsx
import PhotoFrame from '@/components/ui/PhotoFrame';

// Placeholder (aún sin foto) → marco punteado violeta
<PhotoFrame label="Fachada de la clínica" ratio="4/3" />

// Con foto real → next/image
<PhotoFrame src="/images/instalaciones/fachada.webp" alt="Fachada de CETRA" ratio="4/3" />
```

| Prop | Valores | Uso |
|------|---------|-----|
| `src` | string · `undefined` | Sin valor → placeholder; con valor → `next/image` |
| `alt` | string | Texto alternativo de la foto; si falta usa `label` |
| `label` | string (req.) | Qué foto va aquí; visible en el placeholder |
| `ratio` | `4/3` (def.) · `3/4` · `16/9` · `1/1` · `3/2` · `2/1` | Proporción del marco (usar la más cercana a la foto para minimizar recorte) |
| `fit` | `cover` (def.) · `contain` | `cover` llena y recorta; `contain` muestra la foto completa sin recortar |
| `priority` | boolean | Para imágenes above-the-fold |
| `sizes` | string | `sizes` de `next/image` (optimización responsive) |
| `className` | string | Ancho/margen/columna (ej. `md:col-span-2`) |

**Fotos** en `public/images/` (subcarpeta por contexto, ej. `public/images/instalaciones/`), optimizadas a `.webp`. Usado hoy en el landing (sección `Instalaciones`, banda de trasplante, `HowItWorks`).

> Nota: `Specialists.tsx` conserva su propio `PhotoPlaceholder` local (silueta de persona para headshots faltantes). Migrarlo a `PhotoFrame` es deuda menor pendiente.

## Regla de Color (estricta)

Prohibido en clases Tailwind: `blue-*`, `purple-*`, grises genéricos como acento (`gray-800`, etc.). Usar siempre los tokens/hex de marca. Tints violeta de superficie canónicos: `#faf8ff` (hover claro), `#f5f0ff` / `#f5f3ff` (chips y fondos suaves), `#ece7fb` (tint medio), `#e8e4f8` / `#d8c9ff` (bordes). **Deuda pendiente:** consolidar la proliferación de casi-blancos en una escala nombrada (sesión dedicada con QA visual).