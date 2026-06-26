import { ArrowRight, Building2 } from 'lucide-react';
import { CONTACT_WHATSAPP, CETRA_LOCATION } from '@/lib/contact';

export default function InstalacionesPage() {
  return (
    <div className="w-full bg-white">
      <section className="relative overflow-hidden bg-[#120726] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
            Instalaciones
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            Espacios diseñados para la atención de alta especialidad
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            CETRA opera en {CETRA_LOCATION.address}, con instalaciones equipadas para evaluación, diagnóstico y seguimiento del paciente respiratorio.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f7ff] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Building2 className="mx-auto h-8 w-8 text-[#7C3AED]" strokeWidth={1.5} />
          <h2 className="mt-6 font-display text-3xl font-light text-[#120726] sm:text-4xl">
            Contenido en construcción
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            Estamos preparando un recorrido detallado de nuestras instalaciones. Si quieres conocer más, contáctanos directamente.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#311B92] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1a0a5e]"
            >
              <ArrowRight className="h-4 w-4" />
              Contactar a CETRA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
