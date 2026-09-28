import { Stethoscope, Heart, TrendingUp, Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

interface Phase {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  items: string[];
  bgColor: string;
  iconBgColor: string;
}

const phases: Phase[] = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    number: '01',
    title: 'Evaluación de Candidatura',
    description: 'La evaluación inicial es crítica para determinar si el trasplante es viable y ofrece el mejor pronóstico posible.',
    items: [
      'Evaluación respiratoria completa',
      'Estudios de imagen avanzados',
      'Determinación de compatibilidad',
    ],
    bgColor: 'bg-gradient-to-br from-[#311B92] to-[#7C3AED]',
    iconBgColor: 'bg-white/20',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    number: '02',
    title: 'Preparación Pre-Trasplante',
    description: 'Optimizamos tu estado físico y mental para llegar en las mejores condiciones a la intervención quirúrgica.',
    items: [
      'Rehabilitación pulmonar preoperatoria',
      'Optimización nutricional',
      'Apoyo psicológico continuo',
    ],
    bgColor: 'bg-gradient-to-br from-[#7C3AED] to-[#4c1d95]',
    iconBgColor: 'bg-white/20',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    number: '03',
    title: 'Seguimiento Post-Quirúrgico',
    description: 'El trasplante es el inicio del tratamiento. Nuestro equipo te acompaña paso a paso en tu nueva vida.',
    items: [
      'Monitoreo y ajuste de la inmunosupresión',
      'Rehabilitación física postoperatoria',
      'Seguimiento médico de por vida',
    ],
    bgColor: 'bg-gradient-to-br from-[#5b21b6] to-[#311B92]',
    iconBgColor: 'bg-white/20',
  },
];

interface ProcessPhasesProps {
  phases?: string;
  descriptions?: string;
}

export function ProcessPhases({ phases: customPhases, descriptions: customDescriptions }: ProcessPhasesProps = {}) {
  let displayPhases = phases;

  if (customPhases) {
    const titles = customPhases.split('|').map((t) => t.trim());
    const descs = customDescriptions ? customDescriptions.split('|').map((d) => d.trim()) : [];
    const icons = [
      <Stethoscope key="1" className="w-6 h-6" />,
      <Heart key="2" className="w-6 h-6" />,
      <TrendingUp key="3" className="w-6 h-6" />,
    ];
    const bgColors = [
      'bg-gradient-to-br from-[#311B92] to-[#7C3AED]',
      'bg-gradient-to-br from-[#7C3AED] to-[#4c1d95]',
      'bg-gradient-to-br from-[#5b21b6] to-[#311B92]',
    ];

    displayPhases = titles.map((title, idx) => ({
      icon: icons[idx % icons.length],
      number: String(idx + 1).padStart(2, '0'),
      title,
      description: descs[idx] || '',
      items: [],
      bgColor: bgColors[idx % bgColors.length],
      iconBgColor: 'bg-white/20',
    }));
  }

  return (
    <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {displayPhases.map((phase, index) => (
        <Reveal
          key={index}
          delay={index * 100}
          className="flex"
        >
          <div
            className={`${phase.bgColor} w-full rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-2 relative overflow-hidden group`}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 [@media(hover:hover)]:group-hover:scale-150 transition-transform duration-300" />

            {/* Icon + número */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className={`${phase.iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm`}>
                {phase.icon}
              </div>
              <span className="text-sm font-bold text-white">{phase.number}</span>
            </div>

            {/* Title (use div with role heading so it does not pollute article TableOfContents) */}
            <div role="heading" aria-level={3} className="font-display text-lg font-semibold text-white mb-2 relative z-10">
              {phase.title}
            </div>

            {/* Content */}
            <p className="text-sm text-white mb-4 leading-relaxed relative z-10">{phase.description}</p>

            {/* Items list */}
            {phase.items && phase.items.length > 0 && (
              <ul className="space-y-2 relative z-10">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white" />
                    <span className="text-sm text-white">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
