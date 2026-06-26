# VARIABLES DE ENTORNO — CETRA

> Referencia de todas las variables de entorno del proyecto, actuales y planeadas.

---

## Variables Actuales (Fase 1-2)

### `.env.local` (desarrollo)

```env
# URL base del sitio — usada en @/lib/site.ts para URLs canónicas y metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Producción (Vercel)

```env
NEXT_PUBLIC_SITE_URL=https://cetrapulmonar.com
```

**Nota:** `NEXT_PUBLIC_` prefix expone la variable al cliente (browser). Es correcto aquí porque la URL del sitio no es secreta.

---

## Variables Planeadas — Fase 3 (Supabase)

Cuando se integre Supabase para datos clínicos y el dashboard de administración:

```env
# Supabase — claves públicas (seguras para exponer al cliente)
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Supabase — clave de servicio (SOLO servidor, nunca al cliente)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Regla crítica:** `SUPABASE_SERVICE_ROLE_KEY` NUNCA debe tener el prefijo `NEXT_PUBLIC_`. Esta clave bypasea RLS y es equivalente a acceso root a la base de datos.

---

## Variables Planeadas — Fase 5 (Analytics y Monitoring)

```env
# Vercel Analytics (activar desde Vercel Dashboard, no requiere variable manual)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID — se inyecta automáticamente por Vercel

# Error tracking (si se agrega Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
SENTRY_AUTH_TOKEN=...
SENTRY_ORG=cetra
SENTRY_PROJECT=cetra-web
```

---

## Cómo Agregar una Variable Nueva

1. Agregar a `.env.local` para desarrollo local
2. Agregar a Vercel Dashboard → Settings → Environment Variables para producción
3. Documentar aquí con descripción, ejemplo y en qué fase se usa
4. Si la variable es requerida para que la app funcione, agregar validación en `@/lib/env.ts` (crear cuando sea necesario)

---

## Variables de Next.js Automáticas (Vercel)

Vercel inyecta estas variables automáticamente en cada deploy — no hay que configurarlas:

| Variable | Valor ejemplo | Uso |
|----------|--------------|-----|
| `VERCEL` | `1` | Detectar si se está en Vercel |
| `VERCEL_ENV` | `production` / `preview` / `development` | Saber el ambiente actual |
| `VERCEL_URL` | `cetra-git-main.vercel.app` | URL del deploy actual |
| `VERCEL_GIT_COMMIT_SHA` | `abc1234...` | Hash del commit desplegado |

---

## Checklist Antes de Deploy a Producción

- [ ] `NEXT_PUBLIC_SITE_URL` apunta a `https://cetrapulmonar.com` (no localhost)
- [ ] Supabase keys configuradas en Vercel (cuando Fase 3 esté lista)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` marcada como "Sensitive" en Vercel Dashboard
- [ ] Ninguna key secreta en el código fuente o commiteada en git
- [ ] `.env.local` en `.gitignore` ✓
