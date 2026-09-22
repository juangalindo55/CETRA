import { Wind, GitFork, HeartPulse, Sparkles } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const surgicalSteps: Step[] = [
  {
    number: '01',
    title: 'Soporte Hemodinámico',
    subtitle: 'Estabilidad con ECMO',
    description:
      'Cuando el caso lo requiere, se utiliza oxigenación por membrana extracorpórea para mantener la presión y oxigenación estables durante la intervención.',
    icon: HeartPulse,
    tag: 'Seguridad circulatoria',
  },
  {
    number: '02',
    title: 'La Vía Aérea',
    subtitle: 'Anastomosis bronquial',
    description:
      'Se une el bronquio principal del donante con el del receptor mediante suturas de alta precisión para conseguir un sellado seguro de la vía aérea.',
    icon: Wind,
    tag: 'Precisión respiratoria',
  },
  {
    number: '03',
    title: 'Vasos Sanguíneos',
    subtitle: 'Arterias y venas pulmonares',
    description:
      'Se anastomosan la arteria pulmonar y el manguito de venas pulmonares hacia la aurícula izquierda del corazón, restableciendo la red vascular.',
    icon: GitFork,
    tag: 'Microcirugía vascular',
  },
  {
    number: '04',
    title: 'Reperfusión y Ventilación',
    subtitle: 'El primer aliento del injerto',
    description:
      'Se abren los clamps vasculares y se ventila el nuevo pulmón: el tejido adquiere un color rosado vibrante y asume la oxigenación del cuerpo.',
    icon: Sparkles,
    tag: 'Inicio funcional',
  },
];

export default function SurgicalSteps() {
  return (
    <div className="not-prose my-10 rounded-3xl border border-lavender-line bg-lavender/40 p-6 sm:p-8">
      <div className="mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
          Infografía de quirófano
        </span>
        <h3 className="mt-1 font-display text-xl sm:text-2xl font-light text-ink">
          Las 4 etapas de alta precisión durante la intervención
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {surgicalSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-lavender-line bg-white p-5 shadow-sm transition-all duration-300 hover:border-violet-soft hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lavender text-violet-electric">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-gray-400">
                    PASO {step.number}
                  </span>
                </div>

                <span className="mt-4 inline-block rounded-full bg-lavender px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-violet-heritage">
                  {step.tag}
                </span>

                <h4 className="mt-2 font-display text-base font-semibold text-ink">
                  {step.title}
                </h4>
                <p className="text-xs font-medium text-violet-electric">
                  {step.subtitle}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
