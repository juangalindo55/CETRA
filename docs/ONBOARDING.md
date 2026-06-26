# 16 - Guía de Onboarding — CETRA

> Si eres nuevo en este proyecto, este documento te hace productivo en **1 día**.
> Sin llamadas largas, sin "pregúntale a Juan". Todo está aquí.

---

## Hora 1 — Entender el Proyecto (Lectura)

1. `CLAUDE.md` (10 min) — Stack, estructura, tokens, patrones clave. El doc más importante.
2. `README.md` (10 min) — Visión general del proyecto
3. `DESIGN_SYSTEM.md` (5 min) — Colores y tipografía. Crítico antes de tocar estilos.
4. `12_CONVENCIONES_CODIGO.md` (10 min) — Cómo se escribe código aquí

---

## Hora 2 — Setup Local

```bash
# 1. Clonar el repositorio
git clone git@github.com:juangalindo55/CETRA.git
cd CETRA

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Pedir valores a Juan (ver 13_VARIABLES_ENTORNO.md)
# Por ahora solo necesitas las variables de Next.js — Supabase es Fase 3

# 4. Levantar el servidor
npm run dev
# → http://localhost:3000
```

**Verificación:** Deberías ver la landing de CETRA con Hero, Marquee y Timeline.

---

## Hora 3 — Explorar el Código

Recorre estas carpetas en orden:

```
1. src/app/page.tsx              ← Landing principal — punto de entrada
2. src/components/sections/      ← Todos los componentes de sección
3. src/components/ui/            ← Navbar, Footer
4. src/lib/contact.ts            ← Fuente única de datos de contacto
5. src/content/servicios/        ← Archivos MDX de servicios médicos
6. src/app/servicios/[slug]/page.tsx ← Renderizador MDX dinámico
```

Abre 2-3 componentes y observa:
- El patrón de animaciones Framer Motion (`viewport={{ once: true }}`)
- El uso de `CONTACT_WHATSAPP` desde `@/lib/contact`
- Que la mayoría son Server Components (sin `'use client'`)

---

## Hora 4 — Primera Tarea

1. Juan te asigna una tarea pequeña (fix de UI, texto, CTA, etc.)
2. Crea una rama: `git checkout -b fix/nombre-descriptivo`
3. Consulta el doc relevante según la tarea (ver tabla en `00_INICIO.md`)
4. Sigue `12_CONVENCIONES_CODIGO.md` al escribir código
5. Prueba en mobile y desktop
6. Commit y push: `git commit -m "fix: descripción corta"`

---

## Documentación — Orden de Lectura Recomendado

| Prioridad | Documento | Cuándo leer |
|-----------|-----------|-------------|
| 1 | `CLAUDE.md` | Primero — resumen ejecutivo del proyecto |
| 2 | `DESIGN_SYSTEM.md` | Antes de tocar estilos |
| 3 | `12_CONVENCIONES_CODIGO.md` | Antes de escribir código |
| 4 | `21_FLOWS_UX.md` | Al trabajar en UI o CTAs |
| 5 | `22_NEGOCIO.md` | Para entender el negocio y el copy |
| 6 | `ARCHITECTURE.md` | Para entender rutas y arquitectura |
| — | `13_VARIABLES_ENTORNO.md` | Al configurar entorno |
| — | `10_ERRORES_Y_MEJORAS.md` | Si encuentras un bug |
| — | `11_HISTORIAL.md` | Para ver qué se ha construido |
| — | `03_BASE_DATOS.md` | Solo cuando se implemente Supabase (Fase 3) |

---

## Accesos que Necesitas

Pedir a Juan:

- [ ] Acceso al repo en GitHub como colaborador
- [ ] Valores de `.env.local` (si hay variables necesarias en tu etapa)
- [ ] Acceso al proyecto en Vercel (opcional, para ver deployments)
- [ ] Canal de comunicación preferido (WhatsApp)

---

## Git Workflow

```bash
# Rama principal (no pushear directo)
main  ← producción, auto-deploy a Vercel

# Crear rama para tu trabajo
git checkout -b fix/nombre-del-fix
git checkout -b feat/nombre-de-la-feature

# Flujo estándar
git add src/components/sections/MiComponente.tsx   # solo los archivos de tu cambio
git commit -m "feat: descripción corta del cambio"
git push origin feat/nombre-de-la-feature
# → Pull Request en GitHub → Juan revisa → merge a main
```

### Convención de commits

```
feat: agregar sección de investigación con animaciones
fix: corregir overflow en mapa mobile de contacto
style: ajustar padding de cards en mobile
docs: actualizar 11_HISTORIAL.md con cambios de Mayo
refactor: extraer datos de servicios a service-hub.ts
```

---

## Reglas del Proyecto (las más importantes)

1. **Colores del Design System únicamente** — No `blue-*`, no `purple-*`, no `gray-800`. Ver `DESIGN_SYSTEM.md`.
2. **Datos de contacto desde `@/lib/contact`** — Nunca hardcodear teléfonos o WhatsApp.
3. **Server Components por defecto** — Solo `'use client'` cuando hay `useState`, `useEffect` o Framer Motion.
4. **`viewport={{ once: true }}`** en animaciones — No re-triggerear al hacer scroll.
5. **Commits atómicos** — Un cambio funcional por commit. No mezclar varios fixes en uno.
6. **No pushear `.env.local`** — Está en `.gitignore`. Nunca commitear variables de entorno.

---

## Preguntas Frecuentes

**¿Dónde está el teléfono de CETRA en el código?**
En `src/lib/contact.ts` → `CONTACT_PHONE_DISPLAY`. Siempre importar de ahí.

**¿Cómo agrego contenido a una página de servicio?**
Edita el archivo `.mdx` en `src/content/servicios/`. Los headings necesitan `id` para el TableOfContents.

**¿Cómo agrego un componente nuevo a MDX?**
1. Crea el componente en `src/components/sections/`
2. Impórtalo en `src/app/servicios/[slug]/page.tsx`
3. Agrégalo al objeto `components` del `<MDXRemote>`
4. Úsalo como `<MiComponente />` en el `.mdx`

**¿Cómo sé si un componente necesita `'use client'`?**
Si usa `useState`, `useEffect`, `useRef`, o `motion` de Framer Motion → sí. Si solo renderiza HTML → no.

**¿Dónde se despliega el sitio?**
Vercel. Cada push a `main` hace deploy automático.

**¿Hay base de datos?**
No todavía. Supabase está planeado para Fase 3. Ver `03_BASE_DATOS.md` para el diseño.

**¿Qué hago si encuentro un bug?**
Documéntalo en `10_ERRORES_Y_MEJORAS.md` con la plantilla, luego corrígelo.
