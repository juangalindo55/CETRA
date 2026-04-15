'use client';

import { Stethoscope, Heart, TrendingUp, Check } from 'lucide-react';

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
    bgColor: 'bg-gradient-to-br from-[#7C3AED] to-[#a78bfa]',
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
    bgColor: 'bg-gradient-to-br from-[#a78bfa] to-[#c4b5fd]',
    iconBgColor: 'bg-white/20',
  },
];

export function ProcessPhases() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {phases.map((phase, index) => (
        <div
          key={index}
          className={`${phase.bgColor} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group`}
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300" />

          {/* Icon - positioned at top */}
          <div className={`${phase.iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm relative z-10`}>
            {phase.icon}
          </div>

          {/* Number badge - subtle */}
          <div className="text-3xl font-bold opacity-10 mb-2 relative z-10">{phase.number}</div>

          {/* Content */}
          <h3 className="font-display text-lg font-semibold mb-2 relative z-10 leading-snug">{phase.title}</h3>
          <p className="text-xs text-white/85 mb-4 leading-relaxed relative z-10">{phase.description}</p>

          {/* Items list */}
          <ul className="space-y-2 relative z-10">
            {phase.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white/90" />
                <span className="text-xs text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
