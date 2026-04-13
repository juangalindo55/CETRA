import Specialists from '@/components/sections/Specialists';
import Link from 'next/link';

export const metadata = {
  title: 'Especialistas | CETRA',
  description: 'Conoce al equipo de neumólogos especializados y técnicos de CETRA. Profesionales altamente capacitados comprometidos con tu salud respiratoria.',
};

export default function SpecialistsPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#311B92] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#1a0a3d] font-medium">Especialistas</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#311B92] to-[#7C3AED] text-white py-20">
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
