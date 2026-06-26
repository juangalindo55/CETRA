# SEGURIDAD Y PRIVACIDAD — CETRA

> CETRA maneja **datos personales sensibles** (historial clínico, estudios médicos, información genética).
> Esto implica obligaciones legales bajo la legislación mexicana y estándares de seguridad más estrictos que los de un sitio web ordinario.

---

## Marco Legal Aplicable

| Ley / Norma | Relevancia para CETRA |
|-------------|----------------------|
| **LFPDPPP** | Ley Federal de Protección de Datos Personales en Posesión de los Particulares — rige el tratamiento de datos de salud |
| **NOM-004-SSA3-2012** | Norma oficial del expediente clínico — aplica cuando CETRA gestione expedientes digitales (Fase 3) |
| **NOM-024-SSA3-2012** | Sistemas de información de registro electrónico de salud |
| **Ley General de Salud** | Marco general de prestación de servicios médicos |
| **CENATRA** | Centro Nacional de Trasplantes — coordinación y registro de protocolos de trasplante |

Los datos de salud son clasificados como **"datos sensibles"** bajo la LFPDPPP, lo que requiere:
- Consentimiento expreso del paciente para su tratamiento
- Medidas de seguridad reforzadas
- Restricción de transferencias a terceros (solo aseguradoras, CENATRA, laboratorios de referencia)

---

## Datos que CETRA Maneja (o Manejará)

### Fase actual (1-2) — Solo sitio informativo
| Tipo de dato | Dónde | Riesgo |
|---|---|---|
| Interacciones con Quiz (respuestas Sí/No) | Solo en memoria del browser, no persiste | Bajo |
| Clicks en WhatsApp | Redirige a wa.me (no almacena datos en CETRA) | Bajo |
| Visitas al sitio | No hay analytics activo aún | Ninguno |

### Fase 3 — Con Supabase (datos clínicos)
| Tipo de dato | Clasificación LFPDPPP | Medida requerida |
|---|---|---|
| Nombre, CURP, fecha de nacimiento | Identificación personal | Consentimiento simple |
| Teléfono, email, domicilio | Contacto | Consentimiento simple |
| Historial clínico | **Sensible** | Consentimiento expreso + cifrado |
| Estudios de laboratorio | **Sensible** | Consentimiento expreso + cifrado |
| Información genética | **Sensible** | Consentimiento expreso + cifrado |

---

## Reglas de Seguridad en Código

### Variables de entorno
- `SUPABASE_SERVICE_ROLE_KEY` — **nunca** con prefijo `NEXT_PUBLIC_`. Acceso solo desde servidor.
- Ninguna clave secreta en el código fuente ni en git.
- `.env.local` en `.gitignore` ✓

### Datos de contacto en el frontend
- Los links de WhatsApp son públicos por diseño (número de la clínica).
- No almacenar números de pacientes ni datos personales en el cliente.

### Supabase RLS (Fase 3)
Cada tabla que contenga datos clínicos necesita Row Level Security habilitado:

```sql
-- Ejemplo: tabla expedientes
ALTER TABLE expedientes ENABLE ROW LEVEL SECURITY;

-- Solo el paciente puede ver su propio expediente
CREATE POLICY "Paciente ve su expediente"
  ON expedientes FOR SELECT
  USING (auth.uid() = patient_id);

-- Solo roles médicos pueden insertar
CREATE POLICY "Médico crea expediente"
  ON expedientes FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' = 'medico');
```

### Headers de seguridad (Fase 5 — Vercel)
Configurar en `next.config.ts` antes del deploy a producción:

```typescript
const headers = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",  // necesario para Next.js
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://*.supabase.co https://wa.me",
      "frame-src https://maps.google.com",
    ].join('; '),
  },
];
```

---

## Derechos ARCO del Paciente

Según la LFPDPPP, cualquier paciente puede ejercer sus derechos:

| Derecho | Qué implica | Canal en CETRA |
|---------|------------|----------------|
| **Acceso** | Ver qué datos tiene CETRA sobre él | Email: contacto@cetrapulmonar.com |
| **Rectificación** | Corregir datos incorrectos | Email: contacto@cetrapulmonar.com |
| **Cancelación** | Eliminar sus datos del sistema | Email: contacto@cetrapulmonar.com |
| **Oposición** | Oponerse a usos específicos de sus datos | Email: contacto@cetrapulmonar.com |

**Tiempo de respuesta legal:** 20 días hábiles para dar respuesta a una solicitud ARCO.

---

## Transferencia de Datos a Terceros

Solo estas transferencias están autorizadas según el Aviso de Privacidad de CETRA:

| Receptor | Propósito | Base legal |
|----------|-----------|-----------|
| Compañías de seguros (AXA, MetLife, GNP, Bupa, etc.) | Pago de servicios médicos | Póliza del paciente |
| CENATRA | Registro en protocolos de trasplante | Ley General de Salud |
| Laboratorios de referencia | Análisis de muestras | Consentimiento del paciente |

**Ninguna otra transferencia está permitida** sin consentimiento expreso del paciente.

---

## Checklist de Seguridad por Fase

### Fase 1-2 (actual) ✅
- [x] No se almacenan datos de pacientes en el frontend
- [x] Links externos con `rel="noopener noreferrer"`
- [x] Aviso de Privacidad publicado en `/privacidad`
- [x] Términos y Condiciones en `/terminos` con disclaimer del Quiz
- [x] `.env.local` en `.gitignore`

### Fase 3 (Supabase) — pendiente
- [ ] RLS habilitado en todas las tablas con datos clínicos
- [ ] `SUPABASE_SERVICE_ROLE_KEY` solo en servidor, nunca en cliente
- [ ] Consentimiento explícito del paciente antes de guardar datos sensibles
- [ ] Tipos TypeScript generados desde schema real (`supabase gen types`)
- [ ] Backups automáticos de la base de datos configurados

### Fase 5 (Producción) — pendiente
- [ ] Headers de seguridad (CSP, X-Frame-Options, HSTS) en `next.config.ts`
- [ ] HTTPS forzado en Vercel
- [ ] Logs de acceso a datos sensibles habilitados en Supabase
- [ ] Política de retención de datos definida y documentada
