# Product Guidelines: CETRA

## 1. Brand Identity & Tone
- **Voice**: Riguroso, empático y sobrio. Comunicamos con precisión clínica sin caer en tecnicismos incomprensibles.
- **Style**: Editorial y distinguido ("Medical Atelier"). Evitar modismos informales o lenguaje excesivamente comercial/vendedor.
- **Language**: Español neutro, dirigido al paciente de manera respetuosa y clara.

## 2. Design System & Style Guide
### Colors
- **Primary Ink**: `#120726` (para fondos oscuros, texto principal y componentes sobrios).
- **Violet Heritage**: `#311B92` (para elementos de confianza y títulos secundarios).
- **Violet Electric**: `#7C3AED` (para interacciones, botones de llamada a la acción y acentos activos).
- **Lavender Background**: `#f8f7ff` y línea `#e8e4f8` (para fondos alternos y bordes limpios).
- **Violet Soft**: `#c4b5fd` (para acentos y texto sobre fondo oscuro).
- **Regla estricta**: Prohibido usar paletas de color genéricas (`blue-*`, `purple-*`). Solo se usan los tokens de la marca.

### Typography
- **Headings**: Cormorant Garamond / Playfair Display (Serif, elegante, de alta gama y estilo editorial).
- **Body**: DM Sans (Sans-serif, legible y optimizado para pantallas móviles).

## 3. UX & Interaction Principles
- **Server-First**: Las páginas principales deben ser Server Components para carga instantánea. El uso de `'use client'` se limita a componentes interactivos al final del árbol (botones de acción, carruseles, acordeones).
- **Micro-interacciones**: Uso suave de animaciones vía Framer Motion o Web Animations API nativo (con soporte para `prefers-reduced-motion`).
- **Llamadas a la acción (CTAs)**: Uniformidad en el uso del componente `ButtonCTA` para acciones principales (agendar, orientar) y secundarias.
