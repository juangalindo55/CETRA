# COMANDOS CLI — CETRA

> Referencia rápida de todos los comandos usados en el proyecto.

---

## Comandos npm (día a día)

```bash
# Arrancar servidor de desarrollo en localhost:3000
npm run dev

# Build de producción (genera .next/)
npm run build

# Iniciar servidor de producción (requiere build previo)
npm run start

# Linter ESLint
npm run lint
```

---

## Verificación de TypeScript

```bash
# Verificar tipos sin compilar (más rápido que build)
npx tsc --noEmit

# Ver errores de TypeScript en modo watch
npx tsc --noEmit --watch
```

---

## Optimización de SVGs (SVGO)

```bash
# Optimizar un SVG individual
npx svgo archivo.svg

# Optimizar todos los SVGs de una carpeta
npx svgo -f public/icons/

# Optimizar con output en carpeta diferente
npx svgo -f public/icons/ -o public/icons/optimized/

# Ver estadísticas de reducción de tamaño
npx svgo archivo.svg --pretty
```

---

## Git

```bash
# Ver estado actual
git status

# Ver cambios antes de commit
git diff

# Agregar archivos específicos (preferir esto sobre git add .)
git add src/components/sections/NuevoComponente.tsx

# Commit descriptivo
git commit -m "feat: agregar componente RehabServices con animaciones Framer Motion"

# Ver historial reciente
git log --oneline -10
```

### Prefijos de commit recomendados

| Prefijo | Cuándo usarlo |
|---------|--------------|
| `feat:` | Nuevo componente o feature |
| `fix:` | Corrección de bug |
| `style:` | Cambio visual / CSS sin lógica |
| `refactor:` | Refactorización sin cambio de comportamiento |
| `docs:` | Solo documentación MD |
| `config:` | next.config.ts, tailwind.config.ts, tsconfig.json |
| `perf:` | Mejora de rendimiento |

---

## Vercel CLI

```bash
# Instalar Vercel CLI globalmente (si no está instalado)
npm i -g vercel

# Vincular proyecto local con Vercel
vercel link

# Deploy preview (para revisar antes de producción)
vercel

# Deploy a producción
vercel --prod

# Ver variables de entorno del proyecto en Vercel
vercel env ls

# Agregar variable de entorno
vercel env add NOMBRE_VARIABLE

# Bajar variables de entorno a .env.local
vercel env pull .env.local
```

---

## Supabase CLI (Fase 3)

```bash
# Instalar Supabase CLI
npm install supabase --save-dev

# Login con cuenta Supabase
npx supabase login

# Iniciar Supabase local (Docker requerido)
npx supabase start

# Ver estado del proyecto local
npx supabase status

# Generar tipos TypeScript desde el schema de la BD
npx supabase gen types typescript --project-id [project-id] > src/lib/database.types.ts

# Crear nueva migración
npx supabase migration new nombre_de_la_migracion

# Aplicar migraciones pendientes
npx supabase db push
```

---

## Herramientas de Diagnóstico

```bash
# Analizar bundle de Next.js (requiere @next/bundle-analyzer)
ANALYZE=true npm run build

# Lighthouse desde terminal (requiere lighthouse globalmente)
npx lighthouse http://localhost:3000 --view

# Verificar dependencias desactualizadas
npm outdated

# Ver árbol de dependencias
npm ls --depth=1
```

---

## Información del Proyecto

```bash
# Ver versión de Node.js
node --version    # Debe ser 20+ (proyecto configurado para Node 24 LTS en Vercel)

# Ver versión de npm
npm --version

# Ver dependencias principales instaladas
npm ls next react typescript tailwindcss framer-motion
```

---

## Flujo de Trabajo Recomendado

```bash
# 1. Al inicio de cada sesión — verificar estado
git status
git log --oneline -5

# 2. Arrancar dev server
npm run dev

# 3. Al terminar — verificar tipos y lint antes de commit
npx tsc --noEmit
npm run lint

# 4. Commit con mensaje descriptivo
git add src/...
git commit -m "feat: ..."

# 5. Actualizar 11_HISTORIAL.md con los cambios del día
```
