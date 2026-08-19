'use client';

import { Activity, Zap, CheckCircle2, Target } from 'lucide-react';

interface TimelinePhase {
  icon: React.ReactNode;
  period: string;
  title: string;
  description: string;
  milestones: string[];
  color: string;
}

const phases: TimelinePhase[] = [
  {
    icon: <Activity className="w-6 h-6" />,
    period: 'Primeras semanas',
    title: 'Fase Crítica',
    description: 'Monitoreo intensivo y estabilización',
    milestones: [
      'Hospitalización bajo vigilancia constante',
      'Evaluación diaria de función pulmonar',
      'Ajuste inicial de medicamentos',
    ],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    period: 'Primeros meses',
    title: 'Fase de Recuperación',
    description: 'Rehabilitación progresiva y estabilización',
    milestones: [
      'Terapia física diaria',
      'Incremento progresivo de actividad',
      'Ajuste continuo de medicamentos',
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    period: 'Primer año',
    title: 'Fase de Consolidación',
    description: 'Estabilización y reintegración',
    milestones: [
      'Consolidación de función pulmonar',
      'Retorno gradual a actividades',
      'Seguimiento médico regular',
    ],
    color: 'from-yellow-500 to-green-500',
  },
  {
    icon: <Target className="w-6 h-6" />,
    period: 'Largo plazo',
    title: 'Nueva Vida',
    description: 'Vida normal con cuidados especializados',
    milestones: [
      'Retorno a actividades cotidianas',
      'Control médico especializado',
      'Participación en comunidad de pacientes',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export function RecoveryTimeline() {
  return (
    <div className="not-prose space-y-8">
      {/* Timeline visualization */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#311B92] via-[#7C3AED] to-[#a78bfa]" />

        {/* Timeline items */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Circle marker */}
              <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                <div className={`bg-gradient-to-br ${phase.color} rounded-full p-0.5`}>
                  <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-gray-900">
                    {phase.icon}
                  </div>
                </div>
              </div>

              {/* Content card */}
              <div className="md:ml-32 bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-start gap-4 md:gap-0 md:flex-col">
                  {/* Mobile icon */}
                  <div className="md:hidden flex-shrink-0">
                    <div className={`bg-gradient-to-br ${phase.color} rounded-lg p-3 text-white`}>
                      {phase.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-[#f5f0ff] text-[#311B92] rounded-full text-xs font-semibold">
                        {phase.period}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>

                    {/* Milestones */}
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} mt-1.5 flex-shrink-0`} />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#f5f0ff] to-[#ece7fb] rounded-lg p-4 text-center border border-[#e8e4f8]">
          <div className="text-2xl font-bold text-[#311B92]">3-6</div>
          <div className="text-xs text-[#7C3AED] mt-1">Meses para actividades cotidianas</div>
        </div>
        <div className="bg-gradient-to-br from-[#f5f0ff] to-[#ece7fb] rounded-lg p-4 text-center border border-[#e8e4f8]">
          <div className="text-2xl font-bold text-[#311B92]">98%</div>
          <div className="text-xs text-[#7C3AED] mt-1">Supervivencia a 5 años</div>
        </div>
        <div className="bg-gradient-to-br from-[#f5f0ff] to-[#ece7fb] rounded-lg p-4 text-center border border-[#e8e4f8]">
          <div className="text-2xl font-bold text-[#311B92]">100%</div>
          <div className="text-xs text-[#7C3AED] mt-1">Seguimiento de por vida</div>
        </div>
        <div className="bg-gradient-to-br from-[#f5f0ff] to-[#ece7fb] rounded-lg p-4 text-center border border-[#e8e4f8]">
          <div className="text-2xl font-bold text-[#311B92]">24/7</div>
          <div className="text-xs text-[#7C3AED] mt-1">Equipo disponible</div>
        </div>
      </div>
    </div>
  );
}
