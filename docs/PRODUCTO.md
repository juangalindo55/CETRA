# 20 - Definición de Producto — CETRA

> Contexto de producto, servicios, diferenciadores y métricas.
> Consultar al tomar decisiones de copy, UX, priorización o diseño.

---

## Qué Es CETRA

**Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada.**

Clínica privada de alta especialidad ubicada en la Torre José A. Muguerza, Piso 3, Monterrey, N.L. CETRA no es un hospital general ni un consultorio de medicina familiar. Es el referente en trasplante pulmonar y medicina respiratoria avanzada en el norte de México.

El sitio web es el **principal canal de captación digital**: convierte visitantes en pacientes calificados a través de WhatsApp. No hay e-commerce ni reservas en línea (aún).

---

## Misión

Ofrecer esperanza y excelencia médica a pacientes con enfermedades respiratorias terminales, combinando precisión quirúrgica con compasión humanista. Referentes en salud pulmonar y trasplante pulmonar en el norte de México.

## Visión

Ser el centro de trasplante pulmonar con mayor tasa de supervivencia y calidad de vida post-trasplante en México, reconocido por su modelo integral que acompaña al paciente de por vida.

## Valores

- **Excelencia clínica** — Protocolos internacionales, equipo multidisciplinario
- **Empatía radical** — El trasplante es una transformación humana, no solo médica
- **Transparencia** — El proceso explicado paso a paso (Timeline, Quiz, páginas de servicio)
- **Vanguardia** — UI de clase mundial que refleja tecnología de punta

---

## Catálogo de Servicios

### Servicios de Alta Complejidad (Equipo de Neumólogos)

| Servicio | Descripción | Ruta |
|----------|-------------|------|
| **Trasplante Pulmonar** | Evaluación integral, preparación quirúrgica y seguimiento post-trasplante. Supervivencia a 5 años: 98%. Retorno a actividades: 3-6 meses. | `/servicios/trasplante-pulmonar` |
| **Evaluación Pretrasplante** | Protocolo multidisciplinario completo para determinar elegibilidad y preparar al paciente. | `/servicios/evaluacion-pretrasplante` |
| **Rehabilitación Pulmonar** | Programa clínico para optimizar función respiratoria pre y post-trasplante. | `/servicios/rehabilitacion-pulmonar` |

### Servicios de Diagnóstico Especializado

| Servicio | Técnico responsable | Ruta |
|----------|---------------------|------|
| **Diagnóstico Funcional Respiratorio** | Cristina Durán | `/servicios/diagnostico-funcional-respiratorio` |
| **Diagnóstico del Sueño** | Ivis Pérez | `/servicios/diagnostico-del-sueno` |
| **Pruebas de Esfuerzo** | Brandon Hernández | `/servicios/pruebas-de-esfuerzo` |

---

## Equipo Médico

### Neumólogos (equipo colectivo)
- Especialistas en trasplante pulmonar, evaluación pretrasplante y rehabilitación
- Protocolos internacionales certificados
- Junta médica multidisciplinaria

### Técnicos Especializados
| Técnico | Especialidad |
|---------|-------------|
| Cristina Durán | Diagnóstico funcional respiratorio (espirometría, pletismografía) |
| Ivis Pérez | Diagnóstico del sueño (polisomnografía, titulación CPAP) |
| Brandon Hernández | Pruebas de esfuerzo cardiopulmonar (CPET) |

---

## Público Objetivo

### Paciente Directo (primario)
- **Perfil:** Adultos 18-65 años con enfermedad pulmonar crónica o terminal
- **Condiciones:** EPOC avanzada, fibrosis pulmonar, apnea severa, hipertensión pulmonar
- **NSE:** A/B (paga particular o tiene seguro médico de gastos mayores)
- **Comportamiento:** Busca en Google, necesita información clara antes de llamar, decide con base en confianza y evidencia

### Familiar del Paciente (secundario)
- Toma decisiones en nombre de un paciente con capacidad reducida
- Perfil emocional alto — necesita empatía + claridad
- El **Quiz de Elegibilidad** y el **Timeline** son los componentes más importantes para este perfil

### Médico Referidor (terciario)
- Neumólogo, internista o médico familiar que refiere pacientes
- Busca credentials técnicas y comunicación directa con el equipo CETRA
- Página `/especialistas` es su destino principal

---

## Diferenciadores vs. Competencia

| Aspecto | Competencia (clínicas generales) | CETRA |
|---------|----------------------------------|-------|
| Especialización | Medicina general o neumología básica | Exclusivamente medicina respiratoria avanzada y trasplante |
| Diseño digital | Sitios genéricos, template médico azul | UI editorial de lujo, "Medical Atelier" |
| Transparencia | Información escasa o técnica | Proceso completo explicado (Timeline, Quiz, MDX por servicio) |
| Acceso | Solo por teléfono | WhatsApp directo 24/7 |
| Equipo | Médicos generales | Técnicos especializados por área (sueño, esfuerzo, función pulmonar) |

---

## Aseguradoras Aceptadas (11)

AXA Seguros · MetLife · GNP Seguros · Monterrey NY Life · Seguros Atlas · Bupa México · Qualitas · Inbursa · Mapfre · Banorte Seguros · Allianz

*(Lista en `INSURANCE_COMPANIES` en `src/lib/contact.ts`)*

---

## Propuesta de Valor por Perfil

### Para el paciente:
> "En CETRA no empiezas de cero. Tienes un equipo completo que te acompaña desde el diagnóstico hasta la recuperación, con una de las tasas de supervivencia más altas del país."

### Para el familiar:
> "Entendemos que estás tomando la decisión más importante de tu vida. Aquí encuentras claridad, empatía y un equipo que ya ha ayudado a cientos de familias como la tuya."

### Para el médico referidor:
> "CETRA es el destino especializado que tus pacientes con enfermedad respiratoria terminal merecen. Protocolo internacional, equipo multidisciplinario, seguimiento de por vida."

---

## Funnel de Conversión Digital

```
Búsqueda Google
  → Landing / (SEO orgánico)
      → Navega servicios / timeline / quiz
          → Genera confianza suficiente
              → Toca CTA WhatsApp
                  → Consulta o cita agendada
```

**Objetivo del sitio:** Llevar al visitante de "desconocido con dudas" a "contacto calificado vía WhatsApp" en una sola sesión.

**Conversión principal:** Click en botón WhatsApp (`CONTACT_WHATSAPP`)
**Conversión secundaria:** Click en teléfono (`CONTACT_PHONE_TEL`)

---

## Métricas de Éxito (Fase 5 — Post-Launch)

| Métrica | Objetivo |
|---------|---------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | 100 |
| Posición Google "trasplante pulmonar Monterrey" | Top 3 |
| Tiempo en página `/servicios/[slug]` | > 2 min |
| CTR en botones WhatsApp | Baseline post-launch |
| Tasa de rebote (landing) | < 60% |

---

## Roadmap de Producto (alineado con fases técnicas)

| Fase | Entregable de producto |
|------|------------------------|
| ✅ 1-2 | Presencia digital profesional, captación orgánica SEO |
| 🔄 3 | Formulario de contacto con backend Supabase, gestión de leads |
| 🔄 4 | Lighthouse 100, Core Web Vitals óptimos (factor SEO) |
| ⏭️ 5 | Go-live oficial, analytics de conversión, monitoreo |

---

## Lo que CETRA NO Es (para no desviar el desarrollo)

- ❌ No es una plataforma de telemedicina
- ❌ No es un hospital general con múltiples especialidades
- ❌ No tiene e-commerce ni pagos en línea (por ahora)
- ❌ No tiene portal de pacientes ni expediente clínico digital (hasta Fase 3+)
- ❌ No es un directorio médico — solo el equipo CETRA
