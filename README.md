# CETRA - Centro de Excelencia en Trasplante Pulmonar

[![Next.js](https://img.shields.io/badge/Next.js-16.0+-black?style=flat-square&logo=nextjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19+-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38b2ac?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📋 Descripción del Proyecto

**CETRA** es una plataforma web de alta especialidad dedicada al trasplante pulmonar y medicina respiratoria avanzada. Ofrece una experiencia digital integral que conecta pacientes con especialistas médicos, proporcionando información detallada sobre procedimientos, servicios, y facilitando el primer paso hacia una mejor calidad de vida.

La plataforma combina elegancia visual, experiencia de usuario fluida y contenido médico de alta calidad para crear un sitio profesional y accesible.

---

## ✨ Características Principales

### 🎯 Para Pacientes
- **Timeline Interactivo**: Visualización clara del proceso de trasplante en 4 fases
- **Calculadora de Elegibilidad**: Quiz interactivo para determinar candidatura preliminar
- **Historias de Éxito**: Testimonios inspiradores de pacientes trasplantados
- **Centro de Información**: Secciones detalladas de servicios y especialistas
- **FAQ Expandible**: Respuestas a preguntas frecuentes sobre el procedimiento
- **Ubicación y Contacto**: Integración de mapas y formularios de contacto

### 🏥 Características Técnicas
- **Arquitectura Moderna**: Next.js App Router con Server/Client Components
- **Contenido Dinámico**: Archivos MDX para servicios con layouts responsivos
- **Animaciones Fluidas**: Framer Motion para transiciones suaves
- **Diseño Responsive**: Soporte completo para mobile, tablet y desktop
- **Optimización SEO**: Metaetiquetas y estructuras semánticas
- **Rendimiento**: Static Generation (SSG) para mejor velocidad
- **Accesibilidad**: WCAG 2.1 compliance

---

## 🛠 Tech Stack

### Frontend
| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Next.js** | 16.0+ | Framework React Full-stack |
| **React** | 19+ | Librería UI |
| **TypeScript** | 5.0+ | Type Safety |
| **Tailwind CSS** | 3.0+ | Utility-first CSS |
| **Framer Motion** | Latest | Animaciones y transiciones |
| **MDX** | Latest | Contenido interactivo |
| **OpenStreetMap** | Latest | Mapas embebidos |

### Herramientas de Desarrollo
- **ESLint**: Linting de código
- **Prettier**: Formateo de código
- **Git**: Control de versiones

---

## 📋 Requisitos Previos

Asegúrate de tener instalado:
- **Node.js**: v18.0.0 o superior
- **npm** o **pnpm**: Manejador de paquetes
- **Git**: Para control de versiones

```bash
# Verificar versión de Node.js
node --version  # v18.0.0+
npm --version   # 9.0.0+
```

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/cetra.git
cd cetra
```

### 2. Instalar dependencias
```bash
npm install
# o si prefieres pnpm
pnpm install
```

### 3. Configurar variables de entorno
```bash
# Crear archivo .env.local
cp .env.example .env.local
```

### 4. Ejecutar servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en **http://localhost:3000**

---

## 📁 Estructura del Proyecto

```
cetra/
├── src/
│   ├── app/                          # Rutas y layouts (App Router)
│   │   ├── layout.tsx               # Layout root
│   │   ├── page.tsx                 # Landing page
│   │   ├── servicios/
│   │   │   ├── [slug]/              # Página dinámica de servicios
│   │   │   └── page.tsx             # Listado de servicios
│   │   ├── especialistas/           # Página de especialistas
│   │   ├── contacto/                # Formulario de contacto
│   │   └── ...
│   ├── components/
│   │   ├── sections/                # Secciones reutilizables
│   │   │   ├── Hero.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   ├── EligibilityQuiz.tsx
│   │   │   └── FAQ.tsx
│   │   ├── ui/                      # Componentes UI base
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── ...
│   │   ├── SectionLayout.tsx        # Layout zigzag para servicios
│   │   └── Map.tsx                  # Componente de mapa
│   ├── content/                     # Contenido en MDX
│   │   └── servicios/
│   │       └── trasplante-pulmonar.mdx
│   ├── lib/                         # Utilidades y funciones
│   │   └── mdx.ts                   # Parser MDX
│   └── styles/                      # Estilos globales
│       └── globals.css
├── public/                          # Assets estáticos
│   ├── logo.svg
│   └── images/
├── next.config.ts                   # Configuración Next.js
├── tailwind.config.ts               # Configuración Tailwind
├── tsconfig.json                    # Configuración TypeScript
├── package.json                     # Dependencias del proyecto
└── README.md                        # Este archivo
```

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build            # Construye la aplicación
npm run start            # Inicia servidor en producción

# Calidad de código
npm run lint             # Ejecuta ESLint
npm run format           # Formatea código con Prettier
```

---

## 🎨 Guía de Diseño

### Paleta de Colores
```css
--purple-main: #311B92      /* Violeta principal */
--purple-light: #7C3AED     /* Violeta claro */
--purple-dark: #1a0a3d      /* Violeta oscuro */
--purple-bg: #f5f3ff        /* Fondo violeta suave */
--white: #FFFFFF            /* Blanco */
--gray-light: #F4F4F5       /* Gris claro */
--black: #09090B            /* Negro base */
```

### Tipografía
- **Display Font**: Playfair Display (Serif)
- **Body Font**: DM Sans (Sans-serif)
- **Tamaño Base**: 16px

---

## 📱 Páginas Disponibles

| Página | Ruta | Descripción |
|--------|------|-------------|
| Landing | `/` | Página principal con timeline, testimonios, quiz y FAQ |
| Servicios | `/servicios` | Listado de servicios médicos |
| Trasplante Pulmonar | `/servicios/trasplante-pulmonar` | Detalle completo del servicio |
| Especialistas | `/especialistas` | Equipo médico |
| Contacto | `/contacto` | Formulario de contacto |

---

## 📖 Guía de Desarrollo

### Agregar un Nuevo Servicio
1. Crear archivo MDX en `src/content/servicios/nuevo-servicio.mdx`
2. Usar componente `<SectionLayout>` para layout zigzag
3. La ruta se genera automáticamente `/servicios/nuevo-servicio`

### Crear una Nueva Sección en Landing
1. Crear componente en `src/components/sections/`
2. Importar en `src/app/page.tsx`
3. Agregar en el flujo de la página

---

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t cetra:latest .
docker run -p 3000:3000 cetra:latest
```

---

## 🔒 Seguridad

- Headers de seguridad configurados
- HTTPS forzado en producción
- Validación de entrada en formularios
- No hay datos sensibles en el repo

---

## 📊 Optimizaciones de Rendimiento

- Static Generation (SSG)
- Image Optimization
- Code Splitting
- Lazy Loading
- Font Optimization

---

## 🤝 Contribución

Las contribuciones son bienvenidas:

1. Fork el repositorio
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

## 📞 Contacto y Soporte

- **Email**: contacto@cetra.com
- **Teléfono**: +34 912 345 678
- **Web**: https://cetra.com
- **Ubicación**: Madrid, España

---

## 📚 Recursos y Referencias

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDX Documentation](https://mdxjs.com/)

---

**Última actualización**: Abril 2026 | **Versión**: 1.0.0

Desarrollado con ❤️ para mejorar la vida de pacientes que necesitan trasplante pulmonar.
