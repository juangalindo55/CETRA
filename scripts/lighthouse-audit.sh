#!/bin/bash

# CETRA Lighthouse Audit Script
# Uso: ./scripts/lighthouse-audit.sh

set -e

# Directorio de reportes
REPORT_DIR="lighthouse-reports"
mkdir -p "$REPORT_DIR"
BASE_URL=${BASE_URL:-http://localhost:3000}

# En WSL, chrome-launcher convierte su perfil temporal a ruta Windows aunque
# usemos Chromium de Linux, lo que crea carpetas `undefined:/...` en el repo.
# Evitamos ese bug lanzando Chrome nosotros con un perfil Linux temporal y
# pasando su puerto remoto a Lighthouse.
if [[ -z "${CHROME_PATH:-}" ]]; then
  PUPPETEER_CHROME_PATH=$(npx puppeteer browsers list 2>/dev/null | awk '/^chrome@/ {print $NF; exit}')
  if [[ -n "$PUPPETEER_CHROME_PATH" && -x "$PUPPETEER_CHROME_PATH" ]]; then
    export CHROME_PATH="$PUPPETEER_CHROME_PATH"
  fi
fi

if [[ -z "${CHROME_PATH:-}" ]]; then
  for chrome_candidate in google-chrome google-chrome-stable chromium chromium-browser; do
    if command -v "$chrome_candidate" >/dev/null 2>&1; then
      CHROME_PATH=$(command -v "$chrome_candidate")
      export CHROME_PATH
      break
    fi
  done
fi

if [[ -z "${CHROME_PATH:-}" || ! -x "$CHROME_PATH" ]]; then
  echo "❌ No se encontró Chrome/Chromium. Ejecuta: npx puppeteer browsers install chrome"
  exit 1
fi

CHROME_PROFILE_DIR=$(mktemp -d -t cetra-lighthouse-profile-XXXXXX)
CHROME_PORT=${CHROME_PORT:-$(shuf -i 40000-49999 -n 1)}
CHROME_LOG="$CHROME_PROFILE_DIR/chrome.log"

cleanup() {
  if [[ -n "${CHROME_PID:-}" ]]; then
    kill "$CHROME_PID" >/dev/null 2>&1 || true
  fi
  rm -rf "$CHROME_PROFILE_DIR"
}
trap cleanup EXIT

"$CHROME_PATH" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --disable-dev-shm-usage \
  --remote-debugging-address=127.0.0.1 \
  --remote-debugging-port="$CHROME_PORT" \
  --user-data-dir="$CHROME_PROFILE_DIR" \
  about:blank \
  >"$CHROME_LOG" 2>&1 &
CHROME_PID=$!

for _ in {1..60}; do
  if curl -fsS "http://127.0.0.1:$CHROME_PORT/json/version" >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

if ! curl -fsS "http://127.0.0.1:$CHROME_PORT/json/version" >/dev/null 2>&1; then
  echo "❌ Chrome no inició en el puerto $CHROME_PORT"
  echo "Log: $CHROME_LOG"
  exit 1
fi

echo "🔍 CETRA Lighthouse Audit"
echo "========================="
echo ""

# URLs a auditar
URLS=(
  "$BASE_URL|homepage"
  "$BASE_URL/servicios|servicios"
  "$BASE_URL/servicios/trasplante-pulmonar|trasplante-pulmonar"
  "$BASE_URL/especialistas|especialistas"
  "$BASE_URL/contacto|contacto"
)

# Función para correr lighthouse
run_lighthouse() {
  local url=$1
  local name=$2

  echo "📊 Analizando: $name"
  echo "   URL: $url"

  lighthouse "$url" \
    --output=json \
    --output=html \
    --output-path="$REPORT_DIR/$name" \
    --port="$CHROME_PORT" \
    --max-wait-for-load=45000 \
    --quiet

  # Extraer y mostrar scores
  local scores=$(jq '.categories | {
    performance: (.performance.score * 100 | round),
    accessibility: (.accessibility.score * 100 | round),
    best_practices: (."best-practices".score * 100 | round),
    seo: (.seo.score * 100 | round)
  }' "$REPORT_DIR/${name}.json")

  echo "   Results:"
  echo "$scores" | jq -r '"   - Performance: \(.performance)/100\n   - Accessibility: \(.accessibility)/100\n   - Best Practices: \(.best_practices)/100\n   - SEO: \(.seo)/100"'
  echo ""
}

# Correr audits
for entry in "${URLS[@]}"; do
  IFS="|" read -r url name <<< "$entry"
  run_lighthouse "$url" "$name"
done

echo "✅ Audits completados!"
echo "📂 Reportes en: ./$REPORT_DIR/"
echo ""
echo "Abrir reportes HTML:"
for f in $REPORT_DIR/*.html; do
  echo "   - $f"
done
