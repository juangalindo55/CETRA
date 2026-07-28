# Cómo publicar un artículo en el blog

> Guía operativa del blog de CETRA (`/blog`).
> Dos roles: **el médico escribe**, **el editor publica**. Nadie más toca nada.

---

## Resumen en 6 pasos

| # | Paso | Quién |
|---|------|-------|
| 1 | Escribe el artículo en Word o Google Docs | Médico autor |
| 2 | Otro médico lo lee y lo aprueba | Médico revisor |
| 3 | Envía el texto aprobado + la ficha de datos | Médico autor |
| 4 | Convierte el texto a archivo `.mdx` | Editor |
| 5 | Revisa cómo se ve en la computadora | Editor |
| 6 | Publica (`draft: false` + commit) | Editor |

**Regla que no se salta nunca:** ningún artículo se publica sin que un médico lo haya
revisado y aprobado. El campo `draft: true` existe para eso.

---

# PARTE 1 — Para el médico que escribe

No necesitas saber nada de programación. Escribe en Word, en Google Docs o donde
prefieras, y envíalo.

## Qué escribir

- **Entre 600 y 1,200 palabras.** Ni una nota corta ni un capítulo de libro.
- **Un tema, una pregunta.** El artículo responde una duda concreta que un paciente
  escribiría en Google: "¿me pueden trasplantar si tengo 68 años?", "¿duele una
  pletismografía?", "¿qué significa que mi DLCO salió baja?".
- **Divide el texto en secciones con título.** Entre 4 y 7 secciones. Cada título es
  una frase corta que resume lo que viene abajo.
- **Frases cortas. Sin jerga sin explicar.** Si usas un término técnico, explícalo la
  primera vez que aparece.
- **Termina orientando al lector** hacia una valoración médica.

## Qué NO escribir

- **No prometas resultados.** "Una de las tasas más altas del país" sí; "100% de
  éxito" no.
- **No des indicaciones de tratamiento individuales.** El artículo informa, no receta.
- **No uses "barato" ni "económico".** Si aplica, "cubierto por la mayoría de los
  seguros".
- **No cites cifras sin fuente.** Si das un dato, di de dónde sale.

## La ficha que acompaña al texto

Copia esto al inicio de tu documento y complétalo. Sin estos datos el artículo no se
puede publicar.

```
TÍTULO:
(La pregunta o el tema, tal como lo vería el paciente)

RESUMEN:
(1 o 2 frases. Es lo que aparece en Google debajo del título)

CATEGORÍA: (elige UNA)
  [ ] Trasplante pulmonar
  [ ] Enfermedades respiratorias
  [ ] Diagnóstico y estudios
  [ ] Vida con la enfermedad

¿QUÉ BUSCARÍA EN GOOGLE ALGUIEN QUE NECESITA ESTE ARTÍCULO?
  Búsqueda principal:
  Otras búsquedas (2 o 3):

AUTOR: (quién lo escribió)
REVISADO POR: (qué otro médico lo leyó y lo aprobó)
FECHA DE APROBACIÓN:

SERVICIOS RELACIONADOS: (a qué páginas del sitio debería enlazar)
  [ ] Trasplante Pulmonar
  [ ] Evaluación Pretrasplante
  [ ] Rehabilitación Pulmonar
  [ ] Diagnóstico Funcional Respiratorio
  [ ] Diagnóstico del Sueño
  [ ] Pruebas de Esfuerzo

FOTO DE PORTADA:
(Adjunta una foto horizontal, o di "usar una del sitio")
```

## Sobre las fotos

- **Horizontales**, nunca verticales. Se recortan a formato panorámico.
- **Lo más grandes posible.** Del celular está bien; de WhatsApp no (llegan comprimidas).
- **Sin pacientes identificables**, salvo consentimiento firmado por escrito.
- Si no tienes foto, dilo y el editor usa una del banco del sitio.

## Cómo enviarlo

Manda el documento al editor con el asunto **"Artículo blog: [título]"**, e incluye en
el mismo correo el nombre del médico que lo revisó. Si no viene el revisor, el artículo
se devuelve.

---

# PARTE 2 — Para el editor que publica

Todo esto ocurre en tu computadora, en la carpeta del proyecto, sobre la rama
`preview-staging`.

## Paso 1 — Prepara la foto

1. Recorta la foto en horizontal (proporción aproximada 16:9 o más ancha).
2. Conviértela a `.webp` en <https://squoosh.app> (calidad 80, ancho máximo 1600 px).
3. Guárdala en `public/images/blog/` con nombre en minúsculas y guiones:
   `public/images/blog/candidato-trasplante.webp`

Si vas a usar una foto que ya existe en el sitio, sáltate este paso y busca su ruta en
`public/images/`.

## Paso 2 — Crea el archivo del artículo

1. Copia la plantilla:

   ```bash
   cp src/content/blog/_plantilla.mdx src/content/blog/NOMBRE-DEL-ARTICULO.mdx
   ```

   **El nombre del archivo es la dirección web.** `sintomas-fibrosis-pulmonar.mdx` se
   publica en `cetrapulmonar.com/blog/sintomas-fibrosis-pulmonar`. Usa minúsculas,
   guiones y sin acentos. Una vez publicado, **no lo renombres** (rompes el enlace).

2. Abre el archivo y completa la ficha de arriba (el bloque entre `---` y `---`).

### Tabla de traducción: de la ficha del médico al archivo

| En la ficha del médico | En el archivo | Valor exacto que debes escribir |
|---|---|---|
| Trasplante pulmonar | `category:` | `trasplante-pulmonar` |
| Enfermedades respiratorias | `category:` | `enfermedades-respiratorias` |
| Diagnóstico y estudios | `category:` | `diagnostico` |
| Vida con la enfermedad | `category:` | `vida-con-la-enfermedad` |
| Dr. Uriel Chavarría Martínez | `author:` / `reviewedBy:` | `uriel` |
| Dr. Manuel Wong Jaen | `author:` / `reviewedBy:` | `wong` |
| Dr. Sergio Saúl Sánchez Salazar | `author:` / `reviewedBy:` | `sergio` |
| Dr. med Juan O. Galindo Galindo | `author:` / `reviewedBy:` | `galindo` |
| Trasplante Pulmonar | `relatedServices:` | `/servicios/trasplante-pulmonar` |
| Evaluación Pretrasplante | `relatedServices:` | `/servicios/evaluacion-pretrasplante` |
| Rehabilitación Pulmonar | `relatedServices:` | `/servicios/rehabilitacion-pulmonar` |
| Diagnóstico Funcional Respiratorio | `relatedServices:` | `/servicios/diagnostico-funcional-respiratorio` |
| Diagnóstico del Sueño | `relatedServices:` | `/servicios/diagnostico-del-sueno` |
| Pruebas de Esfuerzo | `relatedServices:` | `/servicios/pruebas-de-esfuerzo` |

Las fechas van siempre como `2026-07-28` (año-mes-día, con guiones).
`publishedAt` no cambia nunca más. `lastUpdated` sí, cada vez que el artículo se revise.

**Deja `draft: true` por ahora.**

## Paso 3 — Pega el texto

Debajo de la ficha va el texto del artículo. Solo hay **una regla que importa**: cada
título de sección se escribe así.

```
<h2 id="titulo-en-minusculas-con-guiones">Título tal como lo lee el paciente</h2>
```

- El `id` va en minúsculas, con guiones, **sin acentos ni ñ**: `id="que-es-la-fibrosis"`.
- Ese `id` es lo que construye el índice lateral del artículo. Si falta, la sección no
  aparece en el índice.
- **No le pongas `class` ni `className`.** El diseño se aplica solo.

El resto es texto normal:

| Para esto | Escribe esto |
|---|---|
| Negrita | `**palabra**` |
| Lista | Una línea por punto, empezando con `- ` |
| Separador entre secciones | `---` en una línea sola |
| Enlace | `[texto visible](/servicios/trasplante-pulmonar)` |

**Tres cosas que todavía no funcionan** (si las usas, el artículo se ve mal):
- Las tablas de markdown.
- Las llaves `{` y `}` en el texto.
- Pegar texto con "comillas curvas" desde Word está bien, pero revisa que no arrastre
  formato invisible: pega siempre como **texto sin formato**.

No escribas el botón de WhatsApp, ni el aviso de "consulte a su médico", ni la firma de
los doctores: todo eso se añade solo al final del artículo.

## Paso 4 — Míralo en tu computadora

```bash
npm run dev
```

Abre <http://localhost:3000/blog>. **Los borradores sí se ven aquí**, aunque tengan
`draft: true`.

Revisa en esta lista:

- [ ] El título y el resumen se leen bien.
- [ ] La foto de portada no queda cortada en un lugar raro.
- [ ] El índice lateral (a la izquierda) muestra todas las secciones.
- [ ] Los nombres del autor y del revisor son los correctos.
- [ ] Los enlaces a servicios llevan a donde deben.
- [ ] Se ve bien en el celular (estrecha la ventana del navegador hasta que quede angosta).

Para cerrar el servidor: `Ctrl + C`.

## Paso 5 — Publica

1. Cambia `draft: true` por `draft: false` en el archivo.

2. Comprueba que todo compila:

   ```bash
   npm run build
   ```

   Si termina sin errores y ves tu artículo listado bajo `/blog/[slug]`, está bien.

3. Sube el cambio:

   ```bash
   git add src/content/blog/NOMBRE-DEL-ARTICULO.mdx public/images/blog/
   git commit -m "content(blog): publicar artículo sobre TEMA"
   git push
   ```

El push va a la rama `preview-staging`, que es la rama que Vercel publica en
**cetrapulmonar.com**. En uno o dos minutos el artículo está en línea y visible para
cualquiera.

> Es decir: **el `git push` es la publicación**. Antes de ejecutarlo, asegúrate de que el
> artículo esté aprobado por un médico y de que `draft` diga `false`.

---

## Si el build falla

El sistema está hecho para **no dejar publicar un artículo mal escrito**. El mensaje de
error siempre dice qué archivo y qué campo.

| Mensaje | Qué pasó | Cómo se arregla |
|---|---|---|
| `"category" must be one of...` | La categoría está mal escrita | Usa uno de los 4 valores exactos de la tabla de traducción |
| `"author" must be a known author id` | El nombre del médico va completo en vez del código | Escribe `galindo`, no "Dr. Galindo" |
| `"lastUpdated" must use the YYYY-MM-DD format` | Fecha en otro formato | `2026-07-28`, no `28/07/2026` |
| `"relatedServices" entries must start with "/servicios/"` | Falta la ruta completa | `/servicios/trasplante-pulmonar`, no `Trasplante Pulmonar` |
| `must be a non-empty string` | Un campo quedó vacío | Complétalo; ninguno es opcional salvo los marcados como tal |
| `must be a non-empty list of strings` | `secondaryKeywords` o `relatedServices` vacíos | Pon al menos un elemento |

Ningún error de estos rompe el sitio publicado: el despliegue simplemente no ocurre
hasta que se corrige.

---

## Corregir un artículo ya publicado

1. Edita el archivo `.mdx`.
2. **Actualiza `lastUpdated`** a la fecha de hoy. Google lo muestra y lo valora.
3. Si el cambio afecta contenido clínico, que un médico lo apruebe otra vez.
4. `npm run build`, luego `git commit` y `git push`.

**No cambies el nombre del archivo** de un artículo publicado. Si de verdad hay que
cambiar la dirección, avísalo: hace falta una redirección para no perder el
posicionamiento.

---

## Preguntas frecuentes

**¿Cuántos artículos hay que publicar?**
Uno o dos al mes, sostenidos, rinden más que diez de golpe y luego nada.

**¿Puede un médico publicar sin el editor?**
Hoy no. Publicar requiere acceso al repositorio. Si en algún momento el volumen crece y
varios médicos necesitan publicar solos, existe la opción de montar un panel de
administración — es un proyecto aparte, con su propio costo de infraestructura.

**¿Y si el médico escribe directo en el archivo `.mdx`?**
Puede, si se siente cómodo. La plantilla `_plantilla.mdx` está comentada campo por
campo. Pero el editor sigue siendo quien revisa y hace el commit.

**¿El archivo `_plantilla.mdx` se publica?**
No. Los archivos que empiezan con `_` se ignoran siempre.

**¿Dónde veo el artículo antes de que lo vea el público?**
Con `npm run dev` en tu computadora. Los borradores nunca salen al sitio publicado.
