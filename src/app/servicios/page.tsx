import Services from '@/components/sections/Services';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Servicios`,
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
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-soft">
            Servicios
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            Diagnóstico, tratamiento y rehabilitación respiratoria
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
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
