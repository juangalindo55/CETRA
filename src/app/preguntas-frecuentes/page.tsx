import type { Metadata } from 'next';
import FAQ from '@/components/sections/FAQ';
import { SITE_URL, getFullFAQSchema } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Estudios Respiratorios',
  description:
    'Resuelve tus dudas sobre espirometría, pletismografía, DLCO, FeNO, estudios del sueño y cobertura de seguros en CETRA Monterrey.',
  alternates: { canonical: `${SITE_URL}/preguntas-frecuentes` },
  openGraph: {
    title: 'Preguntas Frecuentes | CETRA',
    description:
      'Dudas frecuentes sobre preparación de pruebas pulmonares, tiempos de entrega de resultados y cobertura de seguros médicos en Monterrey.',
    url: `${SITE_URL}/preguntas-frecuentes`,
  },
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="w-full pt-16 bg-lavender">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFullFAQSchema()) }}
      />
      <FAQ />
    </div>
  );
}
