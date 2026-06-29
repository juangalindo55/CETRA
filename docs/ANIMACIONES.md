# Animaciones — CETRA

Sistema de animaciones basado en **animejs v4** (named imports, sin default export). Framer Motion sigue activo para animaciones de entrada en el landing y transiciones de acordeón.

---

## Principios

- **Landing:** animaciones de entrada en scroll, repeat constante, spring con rebote.
- **Páginas internas:** Framer Motion con `viewport={{ once: true }}` es suficiente. No añadir repeat ni wave.
- **CTAs principales:** pulse de respiración activo en el botón hero. Aplicar en otros CTAs de conversión si procede.
- **Nunca:** mezclar FM y animejs sobre el mismo elemento. FM en el padre está bien; FM en el elemento que controla animejs causa conflicto.

---

## Hooks disponibles

### `useFadeInOnScroll(ref, options?)`

Fade + translateY al entrar al viewport. Se resetea al salir (repeat).

```tsx
import { useFadeInOnScroll } from '@/hooks/animations/useFadeInOnScroll';

const ref = useRef<HTMLDivElement>(null);
useFadeInOnScroll(ref, { delay: 200 });
```

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `delay` | `number` | `0` | Retardo en ms antes de iniciar |

---

### `useStaggerCards(ref, options?)`

Stagger con spring en elementos hijos que coincidan con `itemSelector`.

```tsx
import { useStaggerCards } from '@/hooks/animations/useStaggerCards';

const ref = useRef<HTMLDivElement>(null);
useStaggerCards(ref, { staggerDelay: 80, itemSelector: '.service-category' });
```

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `staggerDelay` | `number` | `80` | Ms entre cada elemento |
| `itemSelector` | `string` | `'.service-card'` | Selector CSS de los hijos a animar |

> **Nota:** los elementos hijos deben ser `<div>` planos, no `motion.div`. Si son `motion.div`, FM compite y gana — los elementos quedan en `opacity: 0`.

---

### `useWaveAnimation(ref, options?)`

Scale + fade + translateY con stagger desde el centro (desktop) o lineal (mobile). Usa `outExpo` para suavidad.

```tsx
import { useWaveAnimation } from '@/hooks/animations/useWaveAnimation';

const ref = useRef<HTMLDivElement>(null);
useWaveAnimation(ref, { staggerDelay: 50 });
```

Los elementos hijos deben tener la clase `.symptom-chip`.

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `staggerDelay` | `number` | `50` | Ms entre cada chip |

---

### `usePulseButton(ref, options?)`

Pulse de escala continuo (loop). Para CTAs principales.

```tsx
import { usePulseButton } from '@/hooks/animations/usePulseButton';

const ref = useRef<HTMLButtonElement>(null);
usePulseButton(ref, { duration: 3600, minWidth: 1 });
```

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Desactivar condicionalmente |
| `duration` | `number` | `1800` | Duración de un ciclo en ms |
| `minWidth` | `number` | `768` | No pulsa en pantallas menores a este ancho (px). Usar `1` para todos |

---

## Easing — cuándo usar cuál

| Situación | Easing | Por qué |
|-----------|--------|---------|
| Entrada de cards / secciones | `spring({ stiffness: 120–130, damping: 14–15 })` | Rebote físico, moderno |
| Wave de chips/tags | `outExpo` con `duration: 650` | Suavidad máxima, sin rebote |
| Respiración de CTA | `inOutSine` | Simétrico, orgánico |
| Acordeón expand/collapse | Framer Motion `easeInOut` | FM controla el height |

---

## Repeat vs once

| Contexto | Comportamiento |
|----------|---------------|
| Landing (`/`) | Repeat: elemento se resetea al salir del viewport y re-anima al volver |
| Páginas internas | Once: Framer Motion `viewport={{ once: true }}` |

Los hooks de animejs en este proyecto usan repeat por defecto (no llaman `observer.unobserve()`).

---

## Conflictos conocidos con Framer Motion

### Problema: FM y animejs sobre el mismo elemento
```tsx
// ❌ FM controla opacity/transform del motion.div, animejs también → FM gana
<motion.div className="symptom-chip" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>

// ✅ Elemento plano — animejs tiene control total
<div className="symptom-chip">
```

### Problema: elementos dentro de acordeón FM (height: 0)
`useStaggerCards` con selector `.service-card` no sirve si las cards viven dentro de un `motion.div` con `height: 0`. El IntersectionObserver puede disparar, pero los elementos son invisibles — la animación corre pero no se ve.

**Solución:** apuntar al contenedor visible del acordeón (`.service-category`), no a su contenido colapsado.

### Problema: animejs v4 no tiene default export
```ts
// ❌ Rompe silenciosamente — anime.default es undefined
const anime = await import('animejs');
window.anime = anime.default || anime; // window.anime = Module object, no callable

// ✅ Named imports
import { animate, stagger, spring } from 'animejs';
```

---

## Duraciones de referencia

| Intención | Duración |
|-----------|----------|
| Entrada rápida | 400–500 ms |
| Entrada estándar | 600–700 ms |
| Respiración CTA | 3000–3600 ms |
| Stagger entre elementos | 50–100 ms |
