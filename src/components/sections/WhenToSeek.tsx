import Reveal from '@/components/ui/Reveal';
import SymptomGrid from '@/components/ui/SymptomGrid';

const symptoms = [
  'Falta de aire al esfuerzo',
  'Tos persistente',
  'Silbidos o obstrucción respiratoria',
  'Sospecha de asma o EPOC',
  'Ronquido fuerte o pausas al dormir',
  'Somnolencia diurna',
  'Seguimiento de enfermedad pulmonar',
  'Evaluación funcional previa o durante tratamiento',
];

export default function WhenToSeek() {
  return (
    <section className="py-20 bg-lavender">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] text-violet-electric uppercase mb-4 font-light">
              Indicaciones clínicas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight">
              ¿Cuándo deberías acudir?
            </h2>
            <p className="text-gray-500 mt-4 font-light">
              Estos síntomas son indicación para un estudio respiratorio con nuestros especialistas.
            </p>
          </Reveal>
        </div>

        <SymptomGrid symptoms={symptoms} />
      </div>
    </section>
  );
}
