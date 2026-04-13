'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const phases = [
  {
    phase: 1,
    title: 'Evaluación',
    duration: '2-4 semanas',
    description: 'Análisis clínico profundo con pruebas de función pulmonar, estudios de imagen avanzados, evaluación cardiológica, análisis nutricional y psicológico.',
    icon: '📋',
  },
  {
    phase: 2,
    title: 'Preparación',
    duration: '1-3 meses',
    description: 'Programa de rehabilitación respiratoria, optimización nutricional, educación sobre el proceso, coordinación con equipo de donación y preparación psicológica.',
    icon: '💪',
  },
  {
    phase: 3,
    title: 'Trasplante',
    duration: '1 día',
    description: 'Procedimiento quirúrgico realizado por nuestro equipo especializado con tecnología de punta. Monitoreo continuo durante y después de la intervención.',
    icon: '🏥',
  },
  {
    phase: 4,
    title: 'Recuperación',
    duration: '3-6 meses',
    description: 'Rehabilitación progresiva, ajuste de medicamentos, monitoreo de función pulmonar, seguimiento continuo y retorno gradual a actividades cotidianas.',
    icon: '✨',
  },
];

export default function Timeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  return (
    <section className="py-20 w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">El camino hacia la transformación</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a0a3d] leading-tight">
            Tu Proceso de Trasplante
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#7C3AED] via-[#7C3AED] to-[#311B92] transform -translate-y-1/2" />

          {/* Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {phases.map((p, index) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setExpandedPhase(expandedPhase === p.phase ? null : p.phase)}
                className="cursor-pointer"
              >
                {/* Card */}
                <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  expandedPhase === p.phase
                    ? 'border-[#7C3AED] bg-[#f5f3ff] shadow-lg'
                    : 'border-gray-200 bg-white hover:border-[#7C3AED]/50'
                }`}>
                  {/* Circle node */}
                  <div className="hidden md:flex absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-[#7C3AED] rounded-full items-center justify-center">
                    <span className="text-lg font-semibold text-[#7C3AED]">{p.phase}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-3 block md:hidden">{p.icon}</div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-[#1a0a3d] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#7C3AED] font-medium mb-3">{p.duration}</p>

                  {/* Expanded content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: expandedPhase === p.phase ? 1 : 0,
                      height: expandedPhase === p.phase ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-600 leading-relaxed pt-3 border-t border-gray-200">
                      {p.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
