# FLUJOS UX — CETRA

> Mapeo de los recorridos del usuario en la plataforma, pantalla por pantalla.
> Consultar al trabajar en cualquier sección de UI para mantener coherencia en CTAs y transiciones.

---

## Principios de UX de CETRA

1. **Confianza antes que conversión** — El paciente necesita creer antes de llamar. Cada sección construye credibilidad.
2. **Mobile-first** — La mayoría de búsquedas médicas en México ocurren desde celular.
3. **WhatsApp como destino** — Toda acción importante termina en WhatsApp, no en un formulario.
4. **Sin fricciones** — Máximo 2 clicks para llegar a WhatsApp desde cualquier punto del sitio.
5. **Empatía en el copy** — El paciente está en una situación de vida o muerte. El tono es cálido, directo y esperanzador.

---

## Usuarios Objetivo

| Perfil | Motivación | Punto de entrada | Componente clave |
|--------|-----------|-----------------|------------------|
| **Paciente potencial** | Tiene enfermedad pulmonar, busca opciones | Google → `/` | Timeline + EligibilityQuiz |
| **Familiar del paciente** | Investiga para un ser querido | Google → `/` | Timeline + Quiz + Testimonios |
| **Médico referidor** | Busca especialistas para referir | Google → `/especialistas` | Cards de especialistas |
| **Paciente actual** | Busca info de su servicio específico | Directo → `/servicios/[slug]` | MDX + TableOfContents |

---

## Flujo Principal — Landing (`/`)

### Journey completo

```
Google: "trasplante pulmonar monterrey" / "especialista pulmonar monterrey"
  ↓
Landing (/)
  ↓
Hero                         → CTA: "Conoce Más" → /servicios
  ↓
Marquee (aseguradoras)       → Sin CTA — genera confianza institucional
  ↓
Timeline (proceso)           → Interactivo, 4 fases — sin CTA directo
  ↓
EligibilityQuiz (¿candidato?)→ CTA resultado → WhatsApp
  ↓
Services (grid)              → CTA por card → /servicios/[slug]
  ↓
Specialists                  → CTA final → WhatsApp
  ↓
Testimonials                 → Sin CTA — genera confianza emocional
  ↓
FAQ                          → Sin CTA — resuelve dudas
  ↓
Footer                       → Teléfono, email, mapa, WhatsApp
```

### Pantalla por pantalla — Landing

#### Hero (`/`)

```
┌─────────────────────────────────────────────────────┐
│  [Logo CETRA]  Servicios ▾  Especialistas  Contacto  [Agendar Servicios →]  │
│─────────────────────────────────────────────────────│
│                                                     │
│  CENTRO DE TRASPLANTE PULMONAR                      │
│  Y MEDICINA RESPIRATORIA AVANZADA                   │
│                                                     │
│  Esperanza y                                        │
│  Excelencia  ← (Playfair Display, bold italic)      │
│                                                     │
│  "En CETRA combinamos precisión quirúrgica          │
│   con compasión humanista..."                       │
│                                                     │
│  [ Conoce Más ]  ← borde violeta, va a /servicios  │
│                                                     │
│  ↓ Conoce CETRA (scroll indicator animado)          │
│─────────────────────────────────────────────────────│
│  [Imagen del especialista — Hero.webp]  (desktop)   │
└─────────────────────────────────────────────────────┘
```

**Mobile:** Imagen oculta (`hidden lg:flex`), texto a columna completa.

#### Marquee (aseguradoras)

```
┌─────────────────────────────────────────────────────┐
│  AXA · MetLife · GNP · Bupa · Allianz · Mapfre · ▶ │
│  (desplazamiento automático, loop infinito)          │
└─────────────────────────────────────────────────────┘
```
Sin CTA. Función: validación institucional — "aceptan mi seguro".

#### Timeline (El proceso de trasplante)

```
┌─────────────────────────────────────────────────────┐
│  01 EVALUACIÓN  ▼ (expandido por defecto)           │
│  ─────────────────────────────────────────           │
│  Duración: 2-4 semanas                              │
│  Pruebas de función pulmonar, imagen,               │
│  compatibilidad. Equipo multidisciplinario.         │
│                                                     │
│  02 PREPARACIÓN  ▶ (colapsado)                      │
│  03 TRASPLANTE   ▶ (colapsado)                      │
│  04 RECUPERACIÓN ▶ (colapsado)                      │
└─────────────────────────────────────────────────────┘
```

**Interacción:** Click en fase → expande esa fase, colapsa la anterior.
**Mobile:** Stack vertical, expandir/colapsar con tap.

#### EligibilityQuiz (¿Eres candidato?)

```
Estado inicial:
┌─────────────────────────────────────────────────────┐
│  "¿Podrías ser candidato para trasplante?"          │
│                                                     │
│  Pregunta 1 de 4:                                   │
│  ¿Tienes diagnóstico de enfermedad                  │
│   pulmonar avanzada?                                │
│                                                     │
│  [ Sí ]    [ No ]                                   │
└─────────────────────────────────────────────────────┘

Resultado A (≥3 "Sí"):
┌─────────────────────────────────────────────────────┐
│  ✅ "¡Podrías ser candidato!"                       │
│                                                     │
│  [ Agendar Evaluación → WhatsApp ]                  │
└─────────────────────────────────────────────────────┘

Resultado B (<3 "Sí"):
┌─────────────────────────────────────────────────────┐
│  💬 "Te recomendamos una evaluación"                │
│                                                     │
│  [ Consultar con especialista → WhatsApp ]          │
│  [ Intentar nuevamente ]                            │
└─────────────────────────────────────────────────────┘
```

**Lógica de preguntas:**
1. ¿Diagnóstico de enfermedad pulmonar avanzada?
2. ¿Edad entre 18 y 65 años?
3. ¿Capaz de comprometerse con medicamentos de por vida?
4. ¿Sin infecciones activas graves?

#### Services (Grid)

```
┌──────────────────┬──────────────────┬──────────────────┐
│ [Icono]          │ [Icono]          │ [Icono]          │
│ Trasplante       │ Evaluación       │ Rehabilitación   │
│ Pulmonar         │ Pretrasplante    │ Pulmonar         │
│ "Evaluación      │ "Protocolo..."   │ "Programa..."    │
│  integral..."    │                  │                  │
│ [Ver más →]      │ [Ver más →]      │ [Ver más →]      │
├──────────────────┼──────────────────┼──────────────────┤
│ Diagnóstico      │ Diagnóstico      │ Pruebas de       │
│ Funcional        │ del Sueño        │ Esfuerzo         │
│ [Ver más →]      │ [Ver más →]      │ [Ver más →]      │
└──────────────────┴──────────────────┴──────────────────┘
```

**Mobile:** 1 columna, 2 columnas en sm.

---

## Flujo de Servicio — Página Individual (`/servicios/[slug]`)

### Journey

```
Grid de Servicios (/servicios)  ←  o directo desde Google
  ↓
Página de Servicio (/servicios/trasplante-pulmonar)
  ↓
  Hero oscuro (título + descripción + badges)
  ↓
  ReadingProgress (barra de progreso superior — aparece al hacer scroll)
  ↓
  Layout: [Sidebar TableOfContents] + [Main MDX Content]
    ↓
    Sección 1: Descripción del servicio
    Sección 2: Proceso (ProcessPhases o RecoveryTimeline)
    Sección 3: ¿Eres candidato? (SectionLayout con imagen)
    Sección 4: Apoyo integral (SectionLayout reversed)
    Sección 5: TestimonialExpanded
    ↓
  CTA Block: "¿Eres candidato?" → [ Solicitar una Consulta → WhatsApp ]
  ↓
  Servicios relacionados (chips con links)
```

### Wireframe del Layout

```
┌─────────────────────────────────────────────────────┐
│  [HERO OSCURO — fondo #1a0a3d]                      │
│  Servicio especializado                              │
│  Trasplante Pulmonar                                 │
│  "Evaluación integral..."                            │
│  [Badge: Centro Especializado] [Badge: Protocolos]  │
└─────────────────────────────────────────────────────┘
│ ████████████████░░░░░░░░░░░░░░░░ ReadingProgress    │
├──────────────────────────────────────────────────────┤
│ CONTENIDO (4 col)  │  SIDEBAR (sidebar sticky)       │
│────────────────────│                                 │
│ ## Excelencia en   │  CONTENIDO                      │
│    Trasplante      │  • Excelencia                   │
│                    │  • El Proceso                   │
│ ## El Proceso      │  • ¿Eres Candidato?             │
│    [ProcessPhases] │  • Tu Recuperación              │
│                    │  • Apoyo Integral               │
│ ## ¿Eres           │  • Historias                   │
│    Candidato?      │                                 │
│    [SectionLayout] │                                 │
│                    │                                 │
│ ## Recuperación    │                                 │
│    [RecoveryTL]    │                                 │
│                    │                                 │
│ ## Apoyo Integral  │                                 │
│    [SectionLayout] │                                 │
│                    │                                 │
│ ## Testimonios     │                                 │
│    [TestiExp.]     │                                 │
├────────────────────┴─────────────────────────────────┤
│  ¿Eres candidato?  →  [ Solicitar una Consulta ]     │
│  Servicios relacionados: [Evaluación] [Rehab...]     │
└──────────────────────────────────────────────────────┘
```

**Mobile:** Sidebar se oculta. TableOfContents no visible en mobile.

---

## Flujo de Especialistas (`/especialistas`)

```
/especialistas
  ↓
  Hero interno (título de sección)
  ↓
  Sección Neumólogos (card colectiva)
    Especialidades del equipo, formación, enfoque
  ↓
  Sección Técnicos (3 cards individuales)
    ┌──────────────┬──────────────┬──────────────┐
    │ Cristina Durán│ Ivis Pérez  │ Brandon Hdz. │
    │ Diagnóstico  │ Diagnóstico  │ Pruebas de   │
    │ Funcional    │ del Sueño    │ Esfuerzo     │
    │ [Foto]       │ [Foto]       │ [Foto]       │
    └──────────────┴──────────────┴──────────────┘
  ↓
  CTA Final: "Agendar Evaluación" → WhatsApp
```

---

## Flujo de Contacto (`/contacto`)

```
/contacto
  ↓
┌─────────────────────────────────────────────────────┐
│  "Estamos aquí para acompañarte"                    │
│                                                     │
│  [ Consultar Agenda por Chat → WhatsApp ]           │  ← CTA principal
│  [ Teléfono: 811 778 1017 ]                         │  ← CTA secundario
│  [ Email: contacto@cetrapulmonar.com ]              │
│                                                     │
│  HORARIOS                                           │
│  Lunes a Viernes: 8:00 am – 5:00 pm                │
│  Sábados: previa cita                               │
└─────────────────────────────────────────────────────┘
  ↓
  Mapa (iframe Google Maps — Torre José A. Muguerza)
  ↓
  Marquee de aseguradoras
  ↓
  Card de WhatsApp directo
    "Escríbenos por WhatsApp para agendar..."
    [ Consultar Agenda por Chat ]
```

---

## CTAs Globales — Jerarquía y Consistencia

| Prioridad | Texto del CTA | Destino | Color / Estilo |
|-----------|--------------|---------|----------------|
| 1 (principal) | "Agendar Evaluación" | WhatsApp | Fondo `#311B92`, texto blanco |
| 1 (principal alt) | "Consultar Agenda por Chat" | WhatsApp | Fondo `#311B92`, texto blanco |
| 1 (principal alt) | "Solicitar una Consulta" | WhatsApp | Fondo `#311B92`, texto blanco |
| 2 (secundario) | "Conoce Más" / "Conoce nuestros servicios" | `/servicios` | Borde `#7C3AED`, fondo blanco |
| 3 (terciario) | "Ver especialistas" / "Ver más" | `/especialistas` o `/servicios/[slug]` | Link de texto violeta |
| Sticky global | Botón flotante WhatsApp | WhatsApp | `#7C3AED`, bottom-right |

**Regla:** Cada sección debe terminar con mínimo un CTA de nivel 1 o 2. No dejar secciones sin salida.

---

## Navbar — Comportamiento

```
Desktop:
┌─[Logo]──[Servicios ▾]──[Especialistas]──[Investigación]──[Contacto]──[Agendar Servicios →]┐

Mobile (< lg):
┌─[Logo]─────────────────────────────────────────────────────────────[☰ Menú]─┐
Menú desplegado:
  Servicios ▾
    → Trasplante Pulmonar
    → Evaluación Pretrasplante
    → ...
  Especialistas
  Investigación
  Contacto
  [ Agendar Servicios ]
```

**Comportamiento scroll:** Navbar se vuelve opaco con blur al hacer scroll (efecto glassmorphism suave).

---

## Micro-animaciones por Sección

| Sección | Animación Framer Motion | Trigger | Notas |
|---------|------------------------|---------|-------|
| Hero | `fadeUp` con delay escalonado (0, 0.1, 0.2, 0.3...) | `animate` (on mount) | No `whileInView` — es above the fold |
| Orbs Hero | `x`, `y`, `scale` en loop infinito | `animate` | Respeta `useReducedMotion` |
| Timeline | `fadeUp` por fase | `whileInView` | `once: true` |
| EligibilityQuiz | `scale-in` en resultado | State change | AnimatePresence |
| Specialists — Técnicos | `staggerChildren: 0.1` | `whileInView` | `once: true` |
| Services Grid | `staggerChildren` | `whileInView` | `once: true` |
| Testimonials | `fadeUp` | `whileInView` | `once: true` |
| Todos | `viewport={{ once: true }}` | — | No re-triggerear al hacer scroll up |

---

## Mapa de CTAs WhatsApp en el Sitio

| # | Texto | Ubicación | Archivo |
|---|-------|-----------|---------|
| 1 | Agendar Servicios | Navbar desktop | `Navbar.tsx:135` |
| 2 | Agendar Servicios | Navbar mobile | `Navbar.tsx:211` |
| 3 | Solicitar una Consulta | Landing `page.tsx` | `page.tsx:161` |
| 4 | Consultar Agenda por Chat | Contacto — bloque superior | `contacto/page.tsx:320` |
| 5 | Consultar Agenda por Chat | Contacto — bloque inferior | `contacto/page.tsx:96` |
| 6 | Contactar por WhatsApp | Sección Services | `Services.tsx:384` |
| 7 | Solicitar una Consulta | Páginas de servicio | `[slug]/page.tsx:161` |
| 8 | Agendar evaluación | Specialists | `Specialists.tsx:227` |
| 9 | Agendar evaluación | EligibilityQuiz | `EligibilityQuiz.tsx:86` |
| 10 | (Sticky global) | Concierge flotante | `page.tsx` o componente sticky |

**Nota:** Todos usan `CONTACT_WHATSAPP` de `@/lib/contact`. Nunca hardcodear el link.

---

## Responsive Breakpoints

| Breakpoint | Uso en CETRA |
|-----------|-------------|
| `sm` (640px) | Grids 2 columnas en Services |
| `md` (768px) | Sidebar aparece en páginas de servicio |
| `lg` (1024px) | Hero 2 columnas, imagen visible |
| `xl` (1280px) | Max width containers |

**Mobile-first:** Siempre diseñar para `< 640px` primero, luego escalar.
