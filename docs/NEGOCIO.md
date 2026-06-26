# NEGOCIO — CETRA

> Contexto de negocio, modelo de operación y posicionamiento de mercado.
> Consultar al tomar decisiones de producto, copy, UX o priorización de features.

---

## Identidad

| Campo | Valor |
|-------|-------|
| **Nombre completo** | Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada |
| **Nombre corto** | CETRA |
| **Sitio web** | cetrapulmonar.com |
| **Ubicación** | Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Centro, 64060 Monterrey, N.L. |
| **Teléfono** | 811 778 1017 |
| **Email** | contacto@cetrapulmonar.com |
| **WhatsApp** | +52 811 778 1017 |
| **Horario** | Lunes a Viernes 8:00–17:00 · Sábados previa cita |

---

## Modelo de Negocio

CETRA es un **centro médico privado de alta especialidad**. No es un SaaS, no tiene e-commerce, no tiene reservas en línea (por ahora).

**Modelo de captación:**
1. Paciente busca en Google → llega al sitio
2. Navega, gana confianza (Timeline, Quiz, páginas de servicio)
3. Hace click en WhatsApp o llama directamente
4. El equipo CETRA agenda la consulta y cobra al momento de la cita

**Modelo de ingresos:**
| Fuente | Canal de pago | Notas |
|--------|--------------|-------|
| Consulta y diagnóstico | Efectivo / transferencia / tarjeta | Cobro en clínica |
| Evaluación pretrasplante | Efectivo / transferencia / tarjeta | Proceso largo (semanas) |
| Rehabilitación pulmonar | Efectivo / transferencia / tarjeta | Programa de varias sesiones |
| Seguro médico | Aseguradora paga directamente | 11 aseguradoras aceptadas |
| Referidos médicos | El médico refiere, el paciente paga en CETRA | Canal silencioso pero relevante |

---

## Segmentos de Cliente

### Paciente Directo (primario)
- **Perfil:** Adultos 18-65 años con enfermedad pulmonar crónica o terminal
- **NSE:** A/B — tienen seguro médico de gastos mayores o pueden pagar particular
- **Condiciones típicas:** EPOC avanzada, fibrosis pulmonar idiopática, apnea del sueño severa, hipertensión pulmonar
- **Comportamiento digital:** Busca en Google, lee artículos, compara opciones, valora la claridad y la confianza antes de llamar
- **Pain point:** "No sé si soy candidato", "No entiendo el proceso", "¿Es demasiado tarde para mí?"

### Familiar del Paciente (secundario)
- Toma decisiones en nombre de un ser querido con capacidad reducida
- Perfil emocional alto — necesita empatía y claridad, no jerga médica
- Busca respuestas a: "¿Mi papá puede recibir un trasplante?", "¿Qué tan difícil es el proceso?"
- **Componentes clave para este perfil:** EligibilityQuiz, Timeline, Testimonios

### Médico Referidor (terciario)
- Neumólogo, internista o médico familiar que no puede atender al paciente
- Busca credentials técnicas y confianza institucional
- Su destino principal: `/especialistas`
- Puede contactar directamente por teléfono o email (no WhatsApp)

---

## Posicionamiento

**Propuesta de valor central:**
> CETRA no es solo una clínica. Es el referente de esperanza y alta ingeniería médica en trasplante pulmonar en el norte de México.

**Tagline actual del sitio:**
> "Esperanza y Excelencia"

**Diferenciadores clave:**
1. **Único enfoque** — Exclusivamente medicina respiratoria avanzada. No atienden otras especialidades.
2. **Supervivencia a 5 años: 98%** — Una de las tasas más altas del país. Dato de conversión.
3. **Equipo técnico especializado por área** — Cristina (función pulmonar), Ivis (sueño), Brandon (esfuerzo).
4. **Diseño de lujo** — "Medical Atelier". La UI proyecta el nivel de la clínica.
5. **Transparencia radical** — El proceso de trasplante explicado paso a paso (sin otros centros que lo hagan así).

**Lo que CETRA NO es (para no desviar el proyecto):**
- ❌ No es un hospital general
- ❌ No es medicina familiar ni urgencias
- ❌ No es telemedicina masiva
- ❌ No tiene farmacia ni laboratorio clínico general

---

## Aseguradoras Aceptadas (11)

| Aseguradora | Tipo |
|-------------|------|
| AXA Seguros | Gastos médicos mayores |
| MetLife | Gastos médicos mayores |
| GNP Seguros | Gastos médicos mayores |
| Monterrey NY Life | Gastos médicos mayores |
| Seguros Atlas | Gastos médicos mayores |
| Bupa México | Internacional + local |
| Qualitas | Accidentes |
| Inbursa | Gastos médicos mayores |
| Mapfre | Gastos médicos mayores |
| Banorte Seguros | Gastos médicos mayores |
| Allianz | Internacional + local |

*Lista mantenida en `INSURANCE_COMPANIES` — `src/lib/contact.ts`*

---

## Pilares de Comunicación

| Pilar | Qué significa | Cómo se refleja en la plataforma |
|-------|--------------|----------------------------------|
| **Precisión** | Información médica validada y directa | Páginas MDX revisadas por equipo clínico, badges "Revisado por", fecha de actualización |
| **Exclusividad** | Alta especialidad, no para todos | Design System monocromático, sin azules de industria médica |
| **Vanguardia** | Tecnología de punta, UI de clase mundial | Animaciones Framer Motion, tipografía editorial (Playfair Display) |
| **Empatía** | Humanidad en situaciones críticas de vida | Quiz con lenguaje accesible, testimoniales, CTA siempre disponible |

---

## Mapa de Servicios y Responsables

| Servicio | Perfil del paciente | Técnico responsable | Ruta MDX |
|---------|---------------------|---------------------|----------|
| Trasplante Pulmonar | Enfermedad pulmonar terminal | Equipo de neumólogos | `/servicios/trasplante-pulmonar` |
| Evaluación Pretrasplante | Candidato potencial a trasplante | Equipo de neumólogos | `/servicios/evaluacion-pretrasplante` |
| Rehabilitación Pulmonar | Pre o post-trasplante | Equipo de neumólogos | `/servicios/rehabilitacion-pulmonar` |
| Diagnóstico Funcional Respiratorio | Cualquier problema respiratorio | Cristina Durán | `/servicios/diagnostico-funcional-respiratorio` |
| Diagnóstico del Sueño | Sospecha de apnea u otros trastornos | Ivis Pérez | `/servicios/diagnostico-del-sueno` |
| Pruebas de Esfuerzo | Evaluación cardiovascular-pulmonar | Brandon Hernández | `/servicios/pruebas-de-esfuerzo` |

---

## Análisis de Competencia

| Aspecto | Competencia (clínicas generales MTY) | CETRA |
|---------|--------------------------------------|-------|
| Especialización | Neumología general o multiespecialidad | Solo medicina respiratoria avanzada y trasplante |
| Información en línea | Escasa, general, sin proceso explicado | 6 páginas MDX detalladas + Timeline + Quiz |
| Diseño | Template médico genérico (azul/blanco) | Editorial de lujo, violet/black |
| Contacto digital | Formulario + teléfono | WhatsApp directo, respuesta rápida |
| Evidencia clínica | Sin datos publicados | 98% supervivencia a 5 años, explícito en el sitio |
| Equipo visible | Foto de médico genérico | Técnicos con nombre, especialidad y foto |

---

## Funnel Digital y KPIs

### Funnel de Conversión

```
Impresión en Google (SEO)
  → Visita al sitio
      → Navega > 2 minutos (engagement)
          → Hace el Quiz o lee servicio completo (intención)
              → Click en WhatsApp (conversión)
                  → Consulta agendada (resultado de negocio)
```

### Métricas Objetivo (Fase 5 — Post-Launch)

| Métrica | Objetivo | Por qué importa |
|---------|---------|----------------|
| Lighthouse Performance | ≥ 90 | Core Web Vitals como factor SEO de Google |
| Lighthouse Accessibility | 100 | WCAG + SEO + reputación médica |
| Posición Google "trasplante pulmonar monterrey" | Top 3 | Principal canal de captación |
| Posición Google "especialista pulmonar monterrey" | Top 5 | Canal secundario |
| Tiempo en página `/servicios/[slug]` | > 2 min | Indica intención real |
| Tasa de rebote landing | < 60% | Calidad del tráfico y UX |
| Clicks en WhatsApp / visitas | Baseline post-launch | KPI de conversión principal |

---

## Roadmap de Negocio (alineado con fases técnicas)

| Fase técnica | Estado | Impacto de negocio |
|---|---|---|
| Fase 1-2 | ✅ Completa | Presencia digital profesional, posicionamiento SEO inicial |
| Fase 3 — Supabase | 🔄 Próxima | Gestión de leads, formulario de contacto con backend, dashboard admin |
| Fase 4 — Lighthouse | 🔄 En progreso | Mejora de ranking SEO (Core Web Vitals), mejor experiencia mobile |
| Fase 5 — Producción | ⏭️ Siguiente | Go-live oficial, Google Analytics, monitoreo de conversiones |

---

## Reglas de Copy para la Plataforma

1. **Nunca usar "barato" o "económico"** — El target es A/B. Usar "asequible con tu seguro" si aplica.
2. **No prometer resultados garantizados** — Decir "una de las tasas más altas" no "100% de éxito".
3. **Tono cálido pero preciso** — No sobre-emocional, no frío y clínico. Balance.
4. **Siempre ofrecer salida a WhatsApp** — Cada duda debe resolverse en una conversación, no en texto.
5. **El paciente siempre tiene esperanza** — Incluso si el Quiz dice "evaluación recomendada", el CTA es positivo.
