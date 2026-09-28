# Plan Estratégico de Integración Editorial y SEO: Blog CETRA (Entradas 11 a 20 — Dr. Sergio Sánchez)

> **Documento de Trabajo y Arquitectura Editorial**  
> **Ubicación en el repositorio:** `docs/Blog Cetra/plan-estrategico-blog-sergio-sanchez.md`  
> **Autor médico del contenido:** Dr. Sergio Saúl Sánchez Salazar (Neumólogo · Céd. Prof. 11207367 · CNN-1215)  
> **Validación clínica:** Dr. Uriel Chavarría Martínez (CNN-445) / Dr. Manuel Wong Jaen (CNCT-506)  
> **Centro:** CETRA (Centro de Enfermedades Respiratorias y Trasplante Avanzado — Monterrey, N.L.)

---

## 1. Resumen Ejecutivo

El documento fuente `docs/Blog Cetra/Links Blog Sergio Sanches.txt` contiene 10 cápsulas clínicas de alta relevancia (entradas 11 a 20) orientadas a pacientes y familiares. Cada texto sintetiza en 200–250 palabras un problema respiratorio crítico con respaldo de literatura médica de primer orden (*New England Journal of Medicine, Cochrane Library, Chest, JAMA Network Open, European Respiratory Journal, Fleischner Society*).

El objetivo de este plan es **transformar estas 10 cápsulas en artículos completos dentro del motor de contenidos MDX de CETRA**, optimizados para:
1. **Posicionamiento orgánico (SEO) en Monterrey y México**, aprovechando la autoridad médica (E-E-A-T) de los especialistas.
2. **Diseño y experiencia de usuario (UI/UX)** mediante componentes interactivos que eviten bloques planos de texto.
3. **Conversión clínica directa**, guiando al paciente con dudas o angustia hacia el servicio correspondiente y la orientación por WhatsApp.

---

## 2. Diagnóstico y Adaptación de Formato

### Reto actual del material
* Las cápsulas originales son breves (~200-250 palabras). Aunque son excelentes para redes sociales o boletines, en Google un artículo médico de menos de 400 palabras suele tener menor tracción frente a competidores enciclopédicos (Mayo Clinic, MedlinePlus).
* Falta estructurar los metadatos obligatorios que el compilador MDX de CETRA exige (`title`, `description`, `category`, `primaryKeyword`, `secondaryKeywords`, `author`, `reviewedBy`, `coverImage`, `relatedServices`, `faqs`).

### Solución adoptada: Formato "Guía Clínica al Grano" (600–900 palabras)
Mantener **la voz original, directa y empática del Dr. Sergio Sánchez**, complementándola en cada artículo con:
* **Entradilla y desarrollo central:** La explicación clínica del Dr. Sergio sin alteraciones.
* **Componente interactivo visual:** Bloque comparativo ("Mito vs. Realidad"), lista de verificación de síntomas o esquema temporal.
* **Recuadro de Evidencia Científica:** Destacado visual con el hallazgo del estudio y enlace a la fuente (*NEJM, Cochrane, etc.*).
* **Preguntas Frecuentes (FAQ):** 2 a 3 preguntas frecuentes con marcado Schema `FAQPage` para ganar Rich Snippets en Google.
* **Cierre y CTA contextual:** Orientación médica personalizada por WhatsApp vinculada al servicio clínico de CETRA.

---

## 3. Arquitectura y Mapeo Detallado de los 10 Artículos

Cada artículo se publicará como archivo `.mdx` en `src/content/blog/`, asignado a una de las 4 categorías del sitio y vinculado a los servicios existentes en `src/content/servicios/`:

### Lote 1: Alta Búsqueda e Impacto Inmediato (Fase 1)

#### Artículo 1 (Entrada 20) — Nódulo Pulmonar Incidental
* **Archivo:** `src/content/blog/nodulo-pulmonar-que-significa-que-sigue.mdx`
* **Título:** ¿Qué significa tener un nódulo en el pulmón y qué pasos siguen?
* **Categoría:** `diagnostico`
* **Palabra clave principal:** `nodulo en el pulmon que significa`
* **Palabras clave secundarias:** `nodulo pulmonar es cancer`, `guia fleischner nodulo pulmonar`, `nodulo pulmonar tomografia monterrey`
* **Servicio relacionado:** `/servicios/diagnostico-funcional-respiratorio`
* **Componente clave:** *Semáforo de tranquilidad clínica* (el 95% son benignos) + algoritmo de vigilancia según guías Fleischner 2017.
* **Referencia:** *MacMahon H, et al. Fleischner Society 2017. Radiology. 2017;284(1):228-243.*

#### Artículo 2 (Entrada 13) — Apnea Obstructiva del Sueño
* **Archivo:** `src/content/blog/apnea-del-sueno-cuando-roncar-no-es-normal.mdx`
* **Título:** Apnea del sueño: señales de que roncar no es normal y cuándo consultar
* **Categoría:** `diagnostico`
* **Palabra clave principal:** `apnea del sueño sintomas`
* **Palabras clave secundarias:** `roncar y dejar de respirar`, `estudio de sueño polisomnografia monterrey`, `hipertension y apnea del sueño`
* **Servicio relacionado:** `/servicios/diagnostico-del-sueno`
* **Componente clave:** *Checklist de autoevaluación* (somnolencia diurna, pausas al dormir, cefalea matutina).
* **Referencia:** *Peppard PE, et al. N Engl J Med. 2000;342(19):1378-1384.*

#### Artículo 3 (Entrada 16) — Técnica Correcta de Inhaladores
* **Archivo:** `src/content/blog/como-usar-el-inhalador-tecnica-correcta-errores.mdx`
* **Título:** "Mi inhalador no me hace nada": los errores más comunes y la técnica correcta
* **Categoría:** `vida-con-la-enfermedad`
* **Palabra clave principal:** `como usar el inhalador correctamente`
* **Palabras clave secundarias:** `errores al usar inhalador`, `camara espaciadora uso`, `inhalador de polvo seco vs presurizado`
* **Servicio relacionado:** `/servicios/diagnostico-funcional-respiratorio`
* **Componente clave:** *Tabla visual comparativa: Inhalador Presurizado (Spray) vs. Polvo Seco* + los 3 errores críticos.
* **Referencia:** *Sanchis J, et al. ADMIT. Chest. 2016;150(2):394-406.*

#### Artículo 4 (Entrada 14) — Asma y Uso Excesivo de Rescate
* **Archivo:** `src/content/blog/inhalador-de-rescate-asma-mal-controlada.mdx`
* **Título:** ¿Usas tu inhalador de rescate a diario? Por qué no es señal de asma controlada
* **Categoría:** `enfermedades-respiratorias`
* **Palabra clave principal:** `asma mal controlada sintomas`
* **Palabras clave secundarias:** `salbutamol diario peligro`, `inhalador de mantenimiento vs rescate`, `crisis de asma prevencion`
* **Servicio relacionado:** `/servicios/diagnostico-funcional-respiratorio`
* **Componente clave:** *Mito vs. Realidad: El spray azul no cura la inflamación* + criterio SABINA (>2 frascos al año = alerta).
* **Referencia:** *Nwaru BI, et al. SABINA programme. Eur Respir J. 2020;55(4):1901872.*

---

### Lote 2: Procedimientos de Tercer Nivel y Cuidados Especializados (Fase 2)

#### Artículo 5 (Entrada 11) — ECMO: Oxigenación por Membrana Extracorpórea
* **Archivo:** `src/content/blog/que-es-ecmo-soporte-pulmonar-avanzado.mdx`
* **Título:** ECMO: qué es, cómo funciona y cuándo se utiliza como soporte pulmonar
* **Categoría:** `trasplante-pulmonar`
* **Palabra clave principal:** `que es ecmo en medicina`
* **Palabras clave secundarias:** `oxigenacion por membrana extracorporea`, `ecmo terapia intensiva monterrey`, `ecmo puente a trasplante pulmonar`
* **Servicio relacionado:** `/servicios/trasplante-pulmonar`, `/servicios/evaluacion-pretrasplante`
* **Componente clave:** *Infografía explicativa:* Cómo circula la sangre fuera del cuerpo para oxigenar y dar reposo al pulmón.
* **Referencia:** *Combes A, et al. EOLIA Trial Group. N Engl J Med. 2018;378(21):1965-1975.*

#### Artículo 6 (Entrada 19) — Guía para el Paciente: Broncoscopia
* **Archivo:** `src/content/blog/que-es-una-broncoscopia-que-esperar-procedimiento.mdx`
* **Título:** Qué esperar de una broncoscopia: preparación, procedimiento y recuperación
* **Categoría:** `diagnostico`
* **Palabra clave principal:** `que es una broncoscopia y para que sirve`
* **Palabras clave secundarias:** `duele la broncoscopia`, `cuidados despues de una broncoscopia`, `estudio broncoscopia monterrey`
* **Servicio relacionado:** `/servicios/diagnostico-funcional-respiratorio`
* **Componente clave:** *Fases del Procedimiento* (`<ProcessPhases>`): Antes (ayuno y sedación) → Durante (20-45 min sin dolor) → Después (cuidados y señales de alarma).
* **Referencia:** *Du Rand IA, et al. British Thoracic Society. Thorax. 2013;68(Suppl 1):i1-i44.*

#### Artículo 7 (Entrada 12) — Mitos del Oxígeno Domiciliario
* **Archivo:** `src/content/blog/oxigeno-en-casa-mitos-y-realidades.mdx`
* **Título:** Oxígeno en casa: cuatro mitos que necesitas aclarar antes de usarlo
* **Categoría:** `vida-con-la-enfermedad`
* **Palabra clave principal:** `oxigeno en casa mitos`
* **Palabras clave secundarias:** `el oxigeno medicinal causa adiccion`, `subir el flujo de oxigeno riesgos`, `tanque de oxigeno seguridad en el hogar`
* **Servicio relacionado:** `/servicios/rehabilitacion-pulmonar`
* **Componente clave:** *Tarjetas Interactivas de Mito vs. Realidad* + Sección de Seguridad contra Incendio.
* **Referencia:** *Long-Term Oxygen Treatment Trial Research Group. N Engl J Med. 2016;375(17):1617-1627.*

---

### Lote 3: Salud Pública, Prevención y Recuperación Crónica (Fase 3)

#### Artículo 8 (Entrada 18) — EPOC por Humo de Leña (Biomasa)
* **Archivo:** `src/content/blog/epoc-por-humo-de-lena-en-casa.mdx`
* **Título:** Humo de leña dentro de casa: la causa de EPOC en personas que nunca fumaron
* **Categoría:** `enfermedades-respiratorias`
* **Palabra clave principal:** `epoc por humo de leña`
* **Palabras clave secundarias:** `dano pulmonar por cocinar con leña`, `espirometria humo de leña mexico`, `enfermedad respiratoria por biomasa`
* **Servicio relacionado:** `/servicios/diagnostico-funcional-respiratorio`, `/servicios/rehabilitacion-pulmonar`
* **Componente clave:** *Estudio del INER México:* Evidencia de supervivencia idéntica al EPOC por tabaco + lista de medidas preventivas de mayor a menor impacto.
* **Referencia:** *Ramírez-Venegas A, et al. INER. Am J Respir Crit Care Med. 2006;173(4):393-397.*

#### Artículo 9 (Entrada 17) — Rehabilitación Post-COVID
* **Archivo:** `src/content/blog/rehabilitacion-pulmonar-despues-de-covid.mdx`
* **Título:** Cansancio y falta de aire tras el COVID: por qué el reposo no siempre basta
* **Categoría:** `vida-con-la-enfermedad`
* **Palabra clave principal:** `rehabilitacion post covid fatiga`
* **Palabras clave secundarias:** `falta de aire secuelas covid`, `ejercicio post covid empeoramiento`, `rehabilitacion pulmonar monterrey`
* **Servicio relacionado:** `/servicios/rehabilitacion-pulmonar`, `/servicios/pruebas-de-esfuerzo`
* **Componente clave:** *Advertencia sobre malestar postesfuerzo (PEM)*: Por qué el ejercicio sin supervisión médica puede empeorar a ciertos pacientes.
* **Referencia:** *Pouliopoulou DV, et al. JAMA Netw Open. 2023;6:e2333838.*

#### Artículo 10 (Entrada 15) — Vacunación en Enfermedad Respiratoria Crónica
* **Archivo:** `src/content/blog/vacunas-para-pacientes-con-enfermedades-pulmonares.mdx`
* **Título:** Vacunas que protegen tus pulmones: por qué no son opcionales en EPOC y asma
* **Categoría:** `vida-con-la-enfermedad`
* **Palabra clave principal:** `vacunas para pacientes con epoc`
* **Palabras clave secundarias:** `vacuna neumococo adultos pulmon`, `influenza y enfermedades respiratorias`, `vacuna virus sincicial respiratorio adultos`
* **Servicio relacionado:** `/servicios/diagnostico-funcional-respiratorio`
* **Componente clave:** *Calendario/Guía de Vacunas Respiratorias* (Influenza anual, Neumococo conjugado, VSR, COVID) + desmentir el mito de "la vacuna me dio gripe".
* **Referencia:** *Kopsaftis Z, et al. Cochrane Database Syst Rev. 2018;6(6):CD002733.*

---

## 4. Diseño UI/UX y Nuevos Componentes para el Blog

El layout del blog (`src/app/blog/[slug]/page.tsx`) ya cuenta con tipografía editorial de alto nivel, lectura estimada, tabla de contenidos flotante (`TableOfContents`), barra de progreso (`ReadingProgress`), tarjeta de autor y aviso sanitario.

Para potenciar la presentación de estos temas clínicos, proponemos integrar o reutilizar los siguientes patrones:

### A. Bloque "Mito vs. Realidad"
Diseñado con Tailwind CSS para contrastar creencias populares con la evidencia:
* **Mito:** Fondo neutro con alerta suave roja y texto de la creencia común.
* **Realidad médica:** Fondo lavanda suave con borde violeta eléctrico y explicación fisiológica clara.

### B. Recuadro de Evidencia Científica Verificada (Badge E-E-A-T)
Un elemento distintivo en cada post para certificar el origen del dato ante el paciente:
* Cita textual de la revista (*NEJM, Cochrane, JAMA, Chest*).
* Explicación breve de lo que el ensayo clínico demostró.
* Enlace bibliográfico formal.

### C. Portadas Gráficas Editoriales
* Formato: `.webp` en proporción 21:9 o 16:9, alojadas en `public/images/blog/`.
* Estilo gráfico: Coherente con las ilustraciones editoriales de CETRA, evitando fotografías genéricas de stock y utilizando la paleta institucional (Ink `#0B0C10`, Violet Soft, Violet Electric, Lavender, Gris Neutro).

---

## 5. Análisis de Competencia y Diferenciación en Monterrey

| Canal / Competidor | Qué ofrecen | Qué les falta / Sus debilidades | Ventaja Competitiva de CETRA |
|---|---|---|---|
| **Directorios (Doctoralia, TopDoctors)** | Respuestas de 2 frases generadas para rankear perfiles. | Cero profundidad, publicidad intrusiva, sin diseño editorial ni respaldo de centro hospitalario. | Contenido exhaustivo, avalado por un equipo multidisciplinario con cédulas visibles y programa de trasplante/ECMO real. |
| **Páginas web de neumólogos en Monterrey** | Artículos cortos creados por agencias de marketing con sobreoptimización de palabras clave. | Falta de rigor médico, no citan fuentes científicas, no explican la fisiopatología al paciente. | Rigor académico de tercer nivel (citas de *NEJM, Fleischner, Cochrane*), pero explicado con empatía y claridad para el paciente común. |
| **Sitios internacionales (Mayo Clinic, MedlinePlus)** | Enorme enciclopedia con alta autoridad de dominio. | Información traducida, neutra y distante. **No ofrecen atención ni consulta local en Monterrey**. | Vinculación local inmediata: si al paciente le encontraron un nódulo o necesita un estudio de sueño, en CETRA puede agendar con el Dr. Sergio o solicitar orientación por WhatsApp en minutos. |

---

## 6. Estrategia SEO Técnica y Conversión

1. **Atributos E-E-A-T (Google Quality Rater Guidelines):**
   * Cada artículo tendrá en su frontmatter:
     ```yaml
     author: "sergio"
     reviewedBy: "uriel"
     ```
   * Esto inyecta automáticamente en el Schema JSON-LD el perfil del Dr. Sergio Saúl Sánchez Salazar (Céd. Prof. 11207367, Consejo CNN-1215) y del Dr. Uriel Chavarría, enlazando a su perfil médico verificado en `/especialistas`.
2. **Schema `FAQPage`:**
   * Cada artículo incluirá 2 a 3 preguntas frecuentes redactadas con intención de búsqueda natural (ej. *"¿Duele hacerse una broncoscopia?"*, *"¿El nódulo pulmonar desaparece solo?"*). Esto genera snippets expandibles en las páginas de resultados de Google (SERP).
3. **Internal Linking Estratégico:**
   * Del artículo informativo (`/blog/...`) hacia el servicio clínico (`/servicios/...`).
   * Del artículo hacia la prueba de diagnóstico relevante (ej. Espirometría, TAC, Polisomnografía).
4. **Embudo de Conversión:**
   * Banner inferior ya existente con botón directo a WhatsApp de Orientación (`CONTACT_WHATSAPP_ORIENTACION`).

---

## 7. Plan de Trabajo y Ejecución por Fases

* **Fase 1 (Inmediata tras aprobación):**
  * Publicar los 4 artículos de mayor búsqueda y angustia del paciente: Nódulo pulmonar, Apnea del sueño, Técnica de inhaladores y Asma mal controlada.
* **Fase 2:**
  * Publicar los 3 artículos de alta especialidad hospitalaria: ECMO, Broncoscopia y Mitos del Oxígeno domiciliario.
* **Fase 3:**
  * Publicar los 3 artículos de prevención y salud comunitaria: Humo de leña (biomasa), Rehabilitación post-COVID y Vacunas respiratorias.

---

## 8. Preguntas para Validación

1. ¿Deseas que arranquemos directamente con la redacción y generación de los archivos `.mdx` del **Lote 1 (Nódulo, Apnea, Inhaladores, Asma)**?
2. Para las portadas de los artículos, ¿prefieres que utilicemos ilustraciones vectoriales editoriales con la paleta de CETRA o fotografías médicas de archivo clínico del centro?
