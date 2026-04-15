import Specialists from '@/components/sections/Specialists';
import Link from 'next/link';

export const metadata = {
  title: 'Especialistas | CETRA',
  description: 'Conoce al equipo de neumólogos especializados y técnicos de CETRA. Profesionales altamente capacitados comprometidos con tu salud respiratoria.',
};

export default function SpecialistsPage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-[#1a0a3d] text-white pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent" />
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

      {/* Specialists Component */}
      <Specialists />
    </div>
  );
}
