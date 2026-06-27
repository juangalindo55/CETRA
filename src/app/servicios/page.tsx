import Services from '@/components/sections/Services';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Servicios | ${SITE_NAME}`,
  description:
    'Servicios especializados de CETRA: trasplante pulmonar, evaluación respiratoria avanzada, diagnóstico funcional, pruebas de esfuerzo, sueño y rehabilitación pulmonar.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: `Servicios | ${SITE_NAME}`,
    description:
      'Servicios especializados de CETRA en trasplante pulmonar y medicina respiratoria avanzada.',
    url: '/servicios',
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-[#1a0a3d] text-white pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7C3AED] via-transparent to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-[10px] tracking-[0.4em] text-[#a78bfa] uppercase mb-6 font-semibold">
            Nuestra Oferta
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Nuestros <em className="italic font-bold text-white">Servicios</em>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Diagnóstico integral, tratamiento especializado y rehabilitación para enfermedades
            respiratorias con tecnología de punta y atención humanizada.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />
    </div>
  );
}
