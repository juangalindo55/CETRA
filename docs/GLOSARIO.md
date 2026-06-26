# GLOSARIO — CETRA

> Términos médicos y técnicos usados en el proyecto.
> Consultar cuando haya dudas sobre nomenclatura en código, copy o documentación.

---

## Términos Médicos

### Procedimientos y Diagnóstico

| Término | Significado | Uso en CETRA |
|---------|-------------|--------------|
| **Espirometría** | Prueba que mide el volumen y flujo del aire que entra y sale de los pulmones | Servicio de Cristina Durán en `Specialists.tsx` |
| **Pletismografía** | Prueba que mide la capacidad pulmonar total y la resistencia de las vías aéreas | Servicio de Cristina Durán |
| **DLCO** | Diffusing Capacity of the Lungs for Carbon Monoxide — capacidad de difusión pulmonar | Servicio de Cristina Durán |
| **MIP-MEP** | Presión inspiratoria / espiratoria máxima — mide fuerza muscular respiratoria | Servicio de Cristina Durán |
| **Poligrafía** | Estudio del sueño simplificado (sin EEG) para diagnóstico de apnea | Servicio de Ivis Pérez |
| **Polisomnografía** | Estudio del sueño completo (con EEG) — referenciado en descripción de neumólogos | Mencionado en `Specialists.tsx` |
| **Titulación CPAP** | Ajuste de presión del dispositivo CPAP para tratar apnea del sueño | Servicio de Ivis Pérez |
| **Noche Dividida** | Protocolo de estudio del sueño: primera parte diagnóstico, segunda parte titulación | Servicio de Ivis Pérez |
| **Caminata 6 Minutos** | Prueba funcional que mide la distancia caminada en 6 minutos — evalúa capacidad aeróbica | Servicio de Brandon Hernández |
| **CPET** | Cardiopulmonary Exercise Test — prueba de esfuerzo cardiopulmonar máxima | Servicio de Brandon Hernández |
| **Reto con Ejercicio** | Prueba de broncoespasmo inducido por ejercicio | Servicio de Brandon Hernández |
| **Ergometría** | Ciencia que estudia la medición del trabajo muscular (cardiopulmonar) | Área de Brandon Hernández |

### Enfermedades y Condiciones

| Término | Significado | Contexto en CETRA |
|---------|-------------|-------------------|
| **EPOC** | Enfermedad Pulmonar Obstructiva Crónica — principal candidata a trasplante | Mencionada en `EligibilityQuiz.tsx` |
| **Fibrosis Pulmonar** | Cicatrización progresiva del tejido pulmonar | Candidatura para trasplante |
| **Apnea del Sueño** | Pausas repetidas de respiración durante el sueño | Servicio de diagnóstico del sueño |
| **Inmunosupresor** | Medicamento que suprime el sistema inmune (esencial post-trasplante) | Mencionado en descripción de neumólogos |

### Proceso de Trasplante

| Término | Significado | Fase en Timeline |
|---------|-------------|-----------------|
| **Evaluación Pretrasplante** | Análisis clínico integral para determinar elegibilidad | Fase 1 del Timeline |
| **Lista de Espera** | Registro nacional de candidatos a trasplante | Fase de Preparación |
| **Donación Cadavérica** | Órgano proveniente de un donante fallecido | Coordinación en Fase 2 |
| **Seguimiento Inmunosupresor** | Control médico continuo de medicamentos post-trasplante | Fase de Recuperación |
| **Rehabilitación Pulmonar** | Programa de ejercicio y educación para optimizar función respiratoria | Servicio CETRA / Fase 2 y 4 |

### Seguro Médico

| Aseguradora | Abreviación común |
|-------------|------------------|
| AXA Seguros | AXA |
| MetLife | MET |
| GNP Seguros | GNP |
| Monterrey NY Life | MNY |
| Seguros Atlas | Atlas |
| Bupa México | Bupa |
| Qualitas | — |
| Inbursa | — |
| Mapfre | — |
| Banorte Seguros | — |
| Allianz | — |

*(Fuente: `INSURANCE_COMPANIES` en `@/lib/contact.ts`)*

---

## Términos Técnicos del Proyecto

### Next.js / React

| Término | Significado | Relevancia en CETRA |
|---------|-------------|---------------------|
| **App Router** | Sistema de rutas basado en el sistema de archivos de Next.js 13+ | Estructura de `/src/app/` |
| **Server Component (RSC)** | Componente React que se renderiza solo en el servidor | Default en CETRA |
| **Client Component** | Componente React con `'use client'` — puede usar hooks y events | Timeline, Quiz, Specialists |
| **SSG** | Static Site Generation — páginas generadas en build time | Páginas de servicios MDX |
| **SSR** | Server Side Rendering — renderizado en cada request | No usado actualmente |
| **MDX** | Markdown + JSX — permite usar componentes React en archivos Markdown | Motor de contenido de servicios |
| **gray-matter** | Librería para parsear frontmatter YAML de archivos MDX | `@/lib/mdx.ts` |
| **next-mdx-remote** | Librería para renderizar MDX desde el servidor en Next.js | Páginas `/servicios/[slug]` |

### Framer Motion

| Término | Significado |
|---------|-------------|
| **variants** | Objeto con estados de animación nombrados (`hidden`, `show`) |
| **staggerChildren** | Retraso escalonado entre animaciones de elementos hijos |
| **whileInView** | Activar animación cuando el elemento entra al viewport |
| **viewport={{ once: true }}** | Ejecutar la animación solo la primera vez (no en re-scroll) |

### Design System

| Término | Valor | Uso |
|---------|-------|-----|
| **Electric Violet** | `#7C3AED` | CTAs, acentos, iconos activos |
| **Heritage / Deep Violet** | `#311B92` | Navegación, confianza, headings |
| **Base Black** | `#09090B` | Tipografía principal, secciones oscuras |
| **Soft Gray** | `#F4F4F5` | Separaciones, fondos sutiles |
| **Dark Violet** | `#1a0a3d` | Headings display y CTA oscuro |
| **Playfair Display** | Fuente serif | Headings, display, autoridad médica |
| **DM Sans** | Fuente sans-serif | Body text, lectura fluida |
| **Glassmorphism** | Efecto visual de cristal translúcido (`backdrop-blur` + `bg-white/80`) | Cards de especialistas, Hero |

### Infraestructura

| Término | Significado | Estado en CETRA |
|---------|-------------|-----------------|
| **Vercel** | Plataforma de deploy — hosting del proyecto | Fase 5 (planeado) |
| **Supabase** | Backend-as-a-Service: PostgreSQL + Auth + Storage | Fase 3 (próximo) |
| **RLS** | Row Level Security — políticas de seguridad por fila en Supabase | Planeado Fase 3 |
| **Schema.org** | Vocabulario de datos estructurados para SEO | `MedicalClinic` implementado en `@/lib/site.ts` |
| **SVGO** | Optimizador de SVGs en el build | Configurado en devDependencies |

---

## Nomenclatura de Rutas

| Ruta | Contenido |
|------|-----------|
| `/` | Landing principal |
| `/servicios` | Grid de todos los servicios médicos |
| `/servicios/trasplante-pulmonar` | Página MDX del servicio |
| `/servicios/evaluacion-pretrasplante` | Página MDX del servicio |
| `/servicios/rehabilitacion-pulmonar` | Página MDX del servicio |
| `/servicios/diagnostico-funcional-respiratorio` | Página MDX del servicio |
| `/servicios/diagnostico-del-sueno` | Página MDX del servicio |
| `/servicios/pruebas-de-esfuerzo` | Página MDX del servicio |
| `/especialistas` | Directorio del equipo médico |
| `/contacto` | Información de contacto y mapa |
| `/investigacion` | Página de investigación clínica |
| `/privacidad` | Política de privacidad |
| `/terminos` | Términos y condiciones |
