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
      <section className="bg-gradient-to-r from-[#311B92] to-[#7C3AED] text-white pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            Nuestro Equipo
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
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
