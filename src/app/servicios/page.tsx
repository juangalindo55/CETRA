import Services from '@/components/sections/Services';
import Link from 'next/link';

export const metadata = {
  title: 'Servicios | CETRA',
  description: 'Conoce todos los servicios especializados de CETRA: diagnóstico funcional respiratorio, diagnóstico del sueño, pruebas de esfuerzo y rehabilitación pulmonar.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#311B92] to-[#7C3AED] text-white pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
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
