import type { Metadata } from 'next';
import Specialists from '@/components/sections/Specialists';
import Link from 'next/link';
import { SITE_URL, getSpecialistsSchema } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Nuestro Equipo de Especialistas',
  description:
    'Conoce a los neumólogos, cirujano cardiotorácico y equipo técnico de CETRA. Especialistas en trasplante pulmonar, función respiratoria y medicina respiratoria avanzada en Monterrey.',
  alternates: { canonical: `${SITE_URL}/especialistas` },
  openGraph: {
    title: 'Equipo de Especialistas | CETRA',
    description:
      'Médicos especialistas y equipo técnico de CETRA: neumólogos certificados, cirugía cardiotorácica y estudios respiratorios en Monterrey.',
    url: `${SITE_URL}/especialistas`,
  },
};

export default function SpecialistsPage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-ink text-white pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7C3AED] via-transparent to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-[10px] tracking-[0.4em] text-[#a78bfa] uppercase mb-6 font-semibold">
            Excelencia Médica
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Nuestro <em className="italic font-bold text-white">Equipo</em>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Un equipo multidisciplinario de neumólogos especializados y técnicos expertos dedicados a
            tu salud pulmonar con excelencia médica y humanismo.
          </p>
        </div>
      </section>

      {/* Physicians JSON-LD */}
      {getSpecialistsSchema().map((s) => (
        <script
          key={s['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Specialists Component */}
      <Specialists />
    </div>
  );
}
