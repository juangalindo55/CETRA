# CETRA - Centro de Excelencia en Trasplante Pulmonar

> **Elevando el estándar del cuidado respiratorio a través de una experiencia digital sofisticada y de alta fidelidad.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2+-black?style=flat-square&logo=nextjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19+-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2+-38b2ac?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.3-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)

---

## 📋 Visión y Concepto

**CETRA** no es solo una plataforma médica; es una extensión digital de la excelencia clínica. Diseñada bajo una filosofía de **"Lujo y Alto Rendimiento"**, la plataforma combina una estética editorial con funcionalidad avanzada para proporcionar calma, confianza y claridad a pacientes en situaciones críticas.

### Pilares de Experiencia
- **Sofisticación Médica**: Uso de tipografía serif (Playfair Display) para denotar autoridad y tradición.
- **Transparencia Radical**: Información clara sobre procedimientos de alta complejidad.
- **Empatía Proactiva**: Herramientas interactivas que guían al paciente en su viaje hacia el trasplante.

---

## ✨ Características Principales

### 🎯 Experiencia del Paciente
- **Trust Pillars**: Cuatro pilares de confianza — Atención especializada, Interpretación clínica, Estudios avanzados, Agenda por WhatsApp.
- **When to Seek**: Checklist de 8 síntomas respiratorios para orientación del paciente sobre cuándo buscar evaluación.
- **How It Works**: Proceso en 3 pasos — Agenda, Prueba, Interpretación.
- **Directorio de Especialistas Dinámico**: Gestión centralizada de perfiles médicos (ej. Cristina Durán, Ivis Pérez, Brandon Hernández).
- **Concierge Digital**: Botón de contacto persistente ("Electric Violet") para acceso inmediato a soporte vía WhatsApp.
- **Historias de Resiliencia**: Sección de testimonios diseñada con micro-animaciones para conexión emocional.
- **Timeline** & **Quiz de Elegibilidad**: Componentes disponibles (no montados en homepage actualmente, listos para páginas futuras).

### 🏥 Ingeniería de Software
- **Arquitectura Next.js 16**: Aprovechamiento de Server Components y React 19 para rendimiento Grade-A.
- **Motor MDX**: Contenido médico gestionado via MDX-Remote con parseo de `gray-matter`.
- **Estética Glassmorphism**: Capas visuales con desenfoque de fondo y bordes translúcidos.
- **Animaciones "Fade-In-Up"**: Transiciones orquestadas con Framer Motion en cada sección.
- **Optimización de Activos**: Sistema SVGO para manejo eficiente de vectores e imágenes optimizadas.

---

## 🎨 Sistema de Diseño (Premium Medical)

Basado en una paleta que equilibra la tecnología con el bienestar humano.

| Elemento | Especificación | Uso |
|-----------|----------------|-----|
| **Electric Violet** | `#7C3AED` | Acción, botones críticos y acentos |
| **Deep Violet (Heritage)** | `#311B92` | Elementos de confianza y navegación |
| **Base Black** | `#09090B` | Tipografía y secciones de impacto |
| **Soft Gray** | `#F4F4F5` | Separaciones sutiles y divisores |
| **Tipografía Display** | `Playfair Display` (Serif) | Títulos, autoridad médica |
| **Tipografía Body** | `DM Sans` (Sans-serif) | Lectura fluida, documentos técnicos |

---

## 🛠 Tech Stack

### Núcleo
- **Framework**: [Next.js 16.2.3](https://nextjs.org/) (App Router)
- **Librería UI**: [React 19.2.5](https://react.dev/)
- **Estilos**: [Tailwind CSS 4.2.2](https://tailwindcss.com/) con `@tailwindcss/typography`
- **Lenguaje**: [TypeScript 6.0](https://www.typescriptlang.org/)

### Contenido & Animación
- **MDX**: `next-mdx-remote` & `gray-matter`
- **Animaciones**: `framer-motion` 12.38
- **Iconografía**: `lucide-react` (SVG optimizado)

---

## 🚀 Instalación y Desarrollo

```bash
# 1. Clonar y entrar
git clone https://github.com/tu-usuario/cetra.git && cd cetra

# 2. Instalar dependencias (basado en package-lock v3)
npm install

# 3. Levantar entorno local
npm run dev
```

---

## 📁 Estructura del Proyecto

```
cetra/
├── src/
│   ├── app/                      # Rutas (Landing, Servicios, Especialistas)
│   ├── components/               
│   │   ├── sections/             # Especialistas, Quiz, FAQ, Timeline
│   │   ├── ui/                   # Navbar, Footer, Concierge CTA
│   │   └── SectionLayout.tsx     # HoC para secciones MDX
│   ├── content/                  # Base de conocimiento (MDX)
│   ├── lib/                      # Utils (mdx.ts, mapping)
│   └── styles/                   # Design Tokens (globals.css)
├── public/                       # Assets estáticos y Branding
├── gemini/                       # Documentación de IA y prompts
├── images/                       # Galería de activos del proyecto
└── next.config.ts                # Optimización de build
```

---

## 📈 Roadmap de Desarrollo

### Fase 1: Cimientos (Completado)
- [x] Configuración de Next.js 16 + Tailwind 4.
- [x] Implementación del Sistema de Diseño Premium.
- [x] Arquitectura de componentes base.

### Fase 2: Experiencia (En Progreso)
- [x] Timeline Interactivo y Quiz de elegibilidad.
- [x] Sistema MDX para servicios dinámicos.
- [/] Refinamiento de micro-interacciones (Framer Motion).

### Fase 3: Datos e Infraestructura (Siguiente)
- [ ] Integración con Supabase para gestión de datos clínicos.
- [ ] Dashboard de administración para contenido médico.
- [ ] Auditoría Lighthouse (Objetivo: 100/100/100/100).

---

## 🤝 Contacto

- **Web**: [cetrapulmonar.com](https://cetrapulmonar.com)
- **Email**: contacto@cetrapulmonar.com
- **Ubicación**: Torre José A. Muguerza, Piso 3, Monterrey, N.L.

**Última actualización**: Junio 2026 | **Versión**: 0.2.1
Producido bajo estándares de excelencia para el **Centro de Excelencia en Trasplante Pulmonar**.
