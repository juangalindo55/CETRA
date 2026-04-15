import ReadingProgress from '@/components/ReadingProgress';
import { SectionLayout } from '@/components/SectionLayout';
import { Microscope, BookOpen, FlaskConical, Globe, GraduationCap, Award } from 'lucide-react';

export const metadata = {
  title: 'Investigación y Vanguardia | CETRA',
  description: 'Explora nuestras líneas de investigación en trasplante pulmonar y medicina respiratoria. En CETRA nos mantenemos a la vanguardia científica para ofrecer los mejores resultados.',
};

const researchLines = [
  {
    icon: <FlaskConical className="w-8 h-8 text-[#7C3AED]" />,
    title: 'Bioconservación Pulmonar',
    desc: 'Investigamos protocolos avanzados de conservación de órganos para extender los tiempos de isquemia y mejorar la función post-trasplante.'
  },
  {
    icon: <Microscope className="w-8 h-8 text-[#7C3AED]" />,
    title: 'Inmunomodulación Precisa',
    desc: 'Desarrollamos algoritmos personalizados para el manejo de la inmunosupresión, buscando el equilibrio perfecto entre prevención de rechazo y mínima toxicidad.'
  },
  {
    icon: <Globe className="w-8 h-8 text-[#7C3AED]" />,
    title: 'Colaboración Internacional',
    desc: 'Participamos en multicéntricos globales para el estudio de enfermedades intersticiales raras y nuevas terapias biológicas.'
  }
];

export default function InvestigacionPage() {
  return (
    <div className="w-full">
      <ReadingProgress />

      {/* Hero Section */}
      <section className="bg-[#1a0a3d] text-white pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[10px] tracking-[0.4em] text-[#a78bfa] uppercase mb-6 font-semibold">
              Vanguardia Médica
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-8 leading-tight">
              Investigación que <em className="italic font-bold text-white">Salva Vidas</em>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              En CETRA, la investigación no es un complemento, es nuestro motor de evolución. 
              Nos dedicamos a empujar las fronteras del trasplante pulmonar para transformar el futuro de nuestros pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-[#311B92]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#1a0a3d] mb-2">Protocolos Propios</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Implementamos técnicas innovadoras de manejo pre-operatorio únicas en la región.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-[#311B92]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#1a0a3d] mb-2">Publicaciones</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Nuestros especialistas contribuyen activamente a revistas internacionales de medicina respiratoria.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#311B92]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#1a0a3d] mb-2">Certificaciones</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Avalados por los estándares internacionales más estrictos en investigación clínica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Research Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl text-[#311B92] font-bold border-b-2 border-[#7C3AED] pb-4 mb-16 text-center">
          Líneas de Investigación Estratégica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {researchLines.map((line) => (
            <div key={line.title} className="bg-[#f5f3ff] p-10 rounded-3xl border border-[#e8e4f8] hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{line.icon}</div>
              <h4 className="font-display text-xl font-bold text-[#1a0a3d] mb-4">{line.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{line.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <SectionLayout
          imageUrl="https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?w=800&h=600&fit=crop"
          imageAlt="Laboratorio de investigación avanzada"
          imageType="photo"
        >
          <h2 className="text-[#311B92] font-display text-3xl font-bold mb-6">Actualización Permanente</h2>
          <p>
            Nuestro equipo asiste anualmente a los congresos más relevantes del mundo, como el International Society for Heart and Lung Transplantation (ISHLT). No solo asistimos: tropicalizamos los hallazgos para que el contexto local de nuestros pacientes se beneficie de la ciencia global.
          </p>
          <p className="font-semibold text-[#7C3AED]">
            "La investigación es lo que nos permite ofrecer una segunda oportunidad donde otros ven un límite."
          </p>
        </SectionLayout>

        <SectionLayout
          imageUrl="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?w=800&h=600&fit=crop"
          imageAlt="Colaboración multidisciplinaria"
          imageType="photo"
          reversed
        >
          <h2 className="text-[#311B92] font-display text-3xl font-bold mb-6">Ecosistema de Innovación</h2>
          <p>
            Colaboramos estrechamente con instituciones académicas líderes para desarrollar tecnología propia en monitoreo funcional respiratorio. Nuestra meta es que CETRA sea el primer centro en Latinoamérica en implementar protocolos de realidad aumentada para la planificación quirúrgica de trasplante pulmonar.
          </p>
        </SectionLayout>
      </div>

      {/* Footer CTA */}
      <section className="bg-[#f5f3ff] py-24 border-t border-[#e8e4f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-light text-[#1a0a3d] mb-6">
            Comprometidos con el <em className="italic font-bold">Futuro</em>
          </h2>
          <p className="text-gray-600 text-lg mb-10 font-light">
            Nuestra labor científica garantiza que cada tratamiento que recibes hoy es el resultado de la mejor evidencia disponible en el mundo.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/528117781017?text=Hola,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20protocolos%20de%20investigaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#311B92] text-white font-medium rounded-full shadow-lg hover:bg-[#1a0a5e] transition-all"
            >
              Contactar Dirección Científica
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
