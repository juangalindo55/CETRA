# 03 - Base de Datos — CETRA (Planificación Fase 3)

> **Estado:** Diseño previo a implementación. Supabase aún no está conectado.
> Implementar en Fase 3. Leer antes de escribir cualquier código de BD o API.

---

## Stack de BD

- **Proveedor:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth (email/contraseña)
- **Seguridad:** Row Level Security (RLS) en todas las tablas
- **Tipos TS:** Generados con `supabase gen types typescript`
- **Cliente server:** `@supabase/ssr` (Next.js App Router compatible)

---

## Variables de Entorno Requeridas

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxxx...   # Solo en server, NUNCA exponer al cliente
```

---

## Diagrama de Entidades

```
leads ────────────────────────────── (contactos de potenciales pacientes)
  │
  └─→ lead_status (nuevo, contactado, calificado, convertido, descartado)

admin_users ──────────────────────── (usuarios del dashboard admin)
  │
  └─→ roles (admin, editor, viewer)

services ─────────────────────────── (catálogo de servicios médicos)
  │
  └─→ (sincronizado con MDX en /content/servicios/)

testimonials ─────────────────────── (testimonios de pacientes)

faq ──────────────────────────────── (preguntas frecuentes gestionables)

site_config ──────────────────────── (configuración del sitio: horarios, teléfonos)
```

---

## Tablas

### `leads`

Registro de cada persona que contacta a CETRA (por WhatsApp, formulario o teléfono).

```sql
CREATE TABLE leads (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now(),

  -- Datos del contacto
  name          TEXT NOT NULL,
  phone         TEXT,
  email         TEXT,
  message       TEXT,

  -- Clasificación
  source        TEXT NOT NULL DEFAULT 'web',     -- 'web', 'whatsapp', 'telefono', 'referido'
  service_interest TEXT,                          -- slug del servicio de interés
  status        TEXT NOT NULL DEFAULT 'nuevo',   -- 'nuevo', 'contactado', 'calificado', 'convertido', 'descartado'

  -- Datos del quiz de elegibilidad (si aplica)
  quiz_score    INT,                              -- número de respuestas "Sí" (0-4)
  quiz_eligible BOOLEAN,

  -- Metadatos
  notes         TEXT,                             -- notas del equipo CETRA
  utm_source    TEXT,                             -- rastreo de campaña
  utm_medium    TEXT,
  utm_campaign  TEXT
);

-- Índices
CREATE INDEX leads_status_idx ON leads(status);
CREATE INDEX leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX leads_service_interest_idx ON leads(service_interest);
```

### `admin_users`

Usuarios con acceso al dashboard de administración.

```sql
CREATE TABLE admin_users (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ DEFAULT now(),
  email       TEXT NOT NULL UNIQUE,
  full_name   TEXT,
  role        TEXT NOT NULL DEFAULT 'viewer',   -- 'admin', 'editor', 'viewer'
  avatar_url  TEXT,
  last_login  TIMESTAMPTZ
);
```

### `testimonials`

Testimonios gestionables desde el dashboard (reemplaza los estáticos en código).

```sql
CREATE TABLE testimonials (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now(),

  patient_name    TEXT NOT NULL,
  patient_age     INT,
  patient_city    TEXT,
  quote           TEXT NOT NULL,
  before_state    TEXT,                 -- "No podía caminar sin perder el aliento"
  after_state     TEXT,                 -- "Corre 5km diarios"
  months_post     INT,                  -- meses desde el trasplante
  service_slug    TEXT,                 -- servicio recibido

  is_published    BOOLEAN DEFAULT FALSE,
  display_order   INT DEFAULT 0
);

CREATE INDEX testimonials_published_idx ON testimonials(is_published, display_order);
```

### `faq`

Preguntas frecuentes gestionables (reemplaza las estáticas en `FAQ.tsx`).

```sql
CREATE TABLE faq (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now(),

  question      TEXT NOT NULL,
  answer        TEXT NOT NULL,
  service_slug  TEXT,                   -- NULL = FAQ general, 'trasplante-pulmonar' = específico
  is_published  BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0
);

CREATE INDEX faq_service_slug_idx ON faq(service_slug, is_published, display_order);
```

### `site_config`

Configuración dinámica del sitio (evita hardcodear datos que cambian).

```sql
CREATE TABLE site_config (
  key    TEXT PRIMARY KEY,
  value  TEXT NOT NULL,
  label  TEXT,   -- descripción legible para el admin
  type   TEXT DEFAULT 'text'   -- 'text', 'boolean', 'json'
);

-- Seeds iniciales
INSERT INTO site_config VALUES
  ('contact_phone', '811 778 1017', 'Teléfono principal', 'text'),
  ('contact_email', 'contacto@cetrapulmonar.com', 'Email de contacto', 'text'),
  ('contact_whatsapp', 'https://wa.me/528117781017', 'Link de WhatsApp', 'text'),
  ('hours_weekday', 'Lunes a Viernes: 8:00 am - 5:00 pm', 'Horario entre semana', 'text'),
  ('hours_saturday', 'Sábados previa cita', 'Horario sábado', 'text'),
  ('survival_rate_5yr', '98', 'Tasa supervivencia 5 años (%)', 'text'),
  ('recovery_months', '3-6', 'Meses de recuperación', 'text');
```

---

## Políticas RLS

```sql
-- leads: solo admin_users pueden leer/escribir
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read leads"
  ON leads FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Anyone can insert lead"
  ON leads FOR INSERT
  WITH CHECK (true);   -- formulario público puede crear leads

-- admin_users: solo el propio usuario o admin puede leer
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User reads own record"
  ON admin_users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admins read all users"
  ON admin_users FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE role = 'admin'));

-- testimonials: lectura pública (publicados), escritura solo admin
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public reads published testimonials"
  ON testimonials FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins manage testimonials"
  ON testimonials FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- faq: igual que testimonials
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public reads published faq"
  ON faq FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins manage faq"
  ON faq FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- site_config: lectura pública, escritura solo admin
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public reads site_config"
  ON site_config FOR SELECT
  USING (true);

CREATE POLICY "Admins write site_config"
  ON site_config FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users));
```

---

## Clientes Supabase (Next.js App Router)

### Cliente Server (Server Components / Route Handlers)

```typescript
// src/lib/supabase-server.ts
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from './database.types';

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
}
```

### Cliente Browser (Client Components)

```typescript
// src/lib/supabase.ts
import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './database.types';

export const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

---

## Flujo: Formulario de Contacto → Lead

```
Usuario llena formulario en /contacto
  → POST /api/contact (Route Handler)
      → Valida datos con Zod
      → INSERT INTO leads (name, phone, email, message, source, service_interest)
      → Retorna 200 OK
          → Notificación al equipo CETRA (email o WhatsApp)
```

---

## Generar Tipos TypeScript

```bash
# Después de crear las tablas en Supabase:
npx supabase gen types typescript \
  --project-id <PROJECT_ID> \
  --schema public \
  > src/lib/database.types.ts
```

---

## Migraciones

Guardar cada migración en `supabase/migrations/`:

```
supabase/
└── migrations/
    ├── 20260601000000_create_leads.sql
    ├── 20260601000001_create_admin_users.sql
    ├── 20260601000002_create_testimonials.sql
    ├── 20260601000003_create_faq.sql
    └── 20260601000004_create_site_config.sql
```

---

## Checklist de Implementación (Fase 3)

- [ ] Crear proyecto en Supabase Dashboard
- [ ] Instalar dependencias: `npm install @supabase/ssr @supabase/supabase-js`
- [ ] Agregar variables de entorno en Vercel y `.env.local`
- [ ] Ejecutar migraciones SQL
- [ ] Generar tipos TypeScript
- [ ] Crear `src/lib/supabase.ts` y `src/lib/supabase-server.ts`
- [ ] Implementar Route Handler `/api/contact` para leads
- [ ] Crear middleware de protección para rutas `/admin/*`
- [ ] Construir dashboard admin básico
