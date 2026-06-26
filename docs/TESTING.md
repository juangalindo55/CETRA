# TESTING — CETRA

> Estado actual: **sin suite de testing configurada**.
> Este documento define la estrategia cuando se implemente.

---

## Estado Actual

CETRA no tiene tests automatizados configurados. El proyecto actualmente valida calidad mediante:

- `npx tsc --noEmit` — verificación de tipos TypeScript
- `npm run lint` — ESLint con configuración de Next.js
- `npm run build` — build de producción (falla si hay errores de tipos o imports rotos)
- Revisión manual en el navegador

---

## Estrategia de Testing Recomendada (Fase 4+)

Para un proyecto de esta naturaleza (landing médica, contenido MDX, componentes UI), la prioridad es:

```
1. TypeScript (ya activo)     — tipos correctos, sin any
2. Build checks (ya activo)   — imports rotos, errores de compilación
3. Playwright E2E             — flujos críticos del paciente
4. Vitest unit tests          — lógica de utilidades (mdx.ts, site.ts)
5. Lighthouse CI              — performance y accesibilidad automática
```

---

## Pruebas Manuales — Checklist por Feature

Mientras no haya suite automatizada, usar este checklist antes de cada deploy:

### Landing (`/`)
- [ ] Hero carga correctamente con animaciones fade-in
- [ ] Timeline — las 4 fases son clickeables y muestran contenido correcto
- [ ] EligibilityQuiz — flujo completo: 4 preguntas → resultado correcto con ≥3 "Sí" → resultado alternativo con <3 "Sí" → botón reset funciona
- [ ] Specialists — cards de Cristina Durán, Ivis Pérez, Brandon Hernández visibles
- [ ] CTA "Agendar Evaluación" abre WhatsApp con mensaje pre-cargado
- [ ] Marquee de aseguradoras se desliza correctamente

### Servicios
- [ ] `/servicios` — grid de 6 servicios visible, links funcionan
- [ ] `/servicios/trasplante-pulmonar` — contenido MDX renderiza, ProcessPhases y RecoveryTimeline cargan
- [ ] `/servicios/evaluacion-pretrasplante` — carga sin errores
- [ ] `/servicios/rehabilitacion-pulmonar` — carga sin errores
- [ ] `/servicios/diagnostico-funcional-respiratorio` — carga sin errores
- [ ] `/servicios/diagnostico-del-sueno` — carga sin errores
- [ ] `/servicios/pruebas-de-esfuerzo` — carga sin errores
- [ ] TableOfContents y ReadingProgress visibles en cada página de servicio

### Navegación
- [ ] Navbar links funcionan: Servicios, Especialistas, Investigación, Contacto
- [ ] Footer links funcionan: Privacidad, Términos
- [ ] Logo redirige a `/`
- [ ] Navbar es sticky en scroll

### Contacto y Legal
- [ ] `/contacto` — mapa carga, teléfono y email visibles
- [ ] `/privacidad` — contenido completo visible con TableOfContents
- [ ] `/terminos` — contenido completo visible con TableOfContents
- [ ] `/especialistas` — directorio completo, CTA de WhatsApp funciona

### Responsive (Mobile)
- [ ] Landing en 375px (iPhone SE) — sin overflow horizontal
- [ ] Navbar mobile funciona (menú hamburguesa si existe)
- [ ] Timeline legible en mobile
- [ ] Cards de especialistas apiladas en mobile
- [ ] CTAs con tap targets mínimo 44x44px

---

## Setup de Playwright (cuando se implemente)

```bash
# Instalar
npm install --save-dev @playwright/test
npx playwright install

# Agregar a package.json
"test:e2e": "playwright test"
```

### Tests críticos a escribir primero:

```typescript
// tests/quiz.spec.ts
test('eligibility quiz — candidato positivo', async ({ page }) => {
  await page.goto('/');
  // navegar al quiz
  // responder 4 veces "Sí"
  // verificar resultado "¡Podrías ser candidato!"
  // verificar que el CTA de WhatsApp aparece
});

// tests/servicios.spec.ts
test('todas las páginas de servicio cargan sin error', async ({ page }) => {
  const slugs = [
    'trasplante-pulmonar',
    'evaluacion-pretrasplante',
    'rehabilitacion-pulmonar',
    'diagnostico-funcional-respiratorio',
    'diagnostico-del-sueno',
    'pruebas-de-esfuerzo',
  ];
  for (const slug of slugs) {
    await page.goto(`/servicios/${slug}`);
    await expect(page).not.toHaveTitle(/404/);
  }
});
```

---

## Setup de Vitest (para utilidades)

```bash
# Instalar
npm install --save-dev vitest @vitejs/plugin-react

# Agregar a package.json
"test:unit": "vitest run"
```

### Funciones candidatas para unit tests:

| Función | Archivo | Qué probar |
|---------|---------|-----------|
| `getServiceData(slug)` | `@/lib/mdx.ts` | Retorna datos correctos para cada slug |
| `getCanonicalPath(pathname)` | `@/lib/site.ts` | URLs canónicas bien formadas |
| `getAbsoluteUrl(pathname)` | `@/lib/site.ts` | Concatenación correcta con SITE_URL |

---

## Lighthouse CI (Fase 4)

Objetivo: **100 en las 4 categorías**.

```bash
# Instalar lighthouse CLI
npm install --save-dev @lhci/cli

# Correr audit local
npx lhci autorun --collect.url=http://localhost:3000

# Configuración en lighthouserc.js
module.exports = {
  ci: {
    collect: {
      urls: ['/', '/servicios', '/especialistas', '/contacto'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
  },
};
```
