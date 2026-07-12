import PhotoFrame from '@/components/ui/PhotoFrame';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    num: 1,
    title: 'Agenda tu estudio',
    desc: 'Contacta por WhatsApp o llamada. Nuestro equipo te orienta sobre el estudio más adecuado.',
  },
  {
    num: 2,
    title: 'Realizamos la prueba',
    desc: 'En nuestra clínica con tecnología avanzada y bajo supervisión de especialistas.',
  },
  {
    num: 3,
    title: 'Interpretación y seguimiento',
    desc: 'Entregamos resultados clinicos y recomendaciones personalizadas para tu tratamiento.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] text-violet-electric uppercase mb-4 font-light">
              Proceso simple
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight">
              Cómo funciona
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 100}
              className="relative flex flex-col items-center text-center"
            >
              {/* Número en círculo */}
              <div className="w-16 h-16 bg-gradient-to-br from-violet-heritage to-violet-electric text-white rounded-full flex items-center justify-center font-display text-2xl font-light mb-6 flex-shrink-0">
                {step.num}
              </div>

              {/* Línea conectora (visible solo en desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-16 w-32 h-0.5 bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
              )}

              {/* Contenido */}
              <h3 className="font-display text-lg font-semibold text-violet-heritage mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={150}
          className="mt-16 max-w-4xl mx-auto"
        >
          <PhotoFrame
            src="/images/pletis.webp"
            alt="Paciente realizando una prueba respiratoria en CETRA"
            label="Paciente realizando una prueba respiratoria"
            ratio="16/9"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
