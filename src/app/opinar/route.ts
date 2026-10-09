import { NextResponse } from 'next/server';

/**
 * Redirección directa al diálogo de 5 estrellas en Google Maps para CETRA PULMONAR.
 * Permite a recepción o médicos compartir un enlace corto: cetrapulmonar.com/opinar
 */
const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJobEm2aaVYoYRSCnyFP9PLPg';

export async function GET() {
  return NextResponse.redirect(GOOGLE_REVIEW_URL, {
    status: 307,
  });
}
