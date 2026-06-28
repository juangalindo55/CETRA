'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useWaveAnimation } from '@/hooks/animations/useWaveAnimation';

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
  const chipContainerRef = useRef<HTMLDivElement>(null);
  useWaveAnimation(chipContainerRef);

  return (
    <section className="py-20 bg-[#f5f3ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4 font-light">
              Indicaciones clínicas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight">
              ¿Cuándo deberías acudir?
            </h2>
            <p className="text-gray-500 mt-4 font-light">
              Estos síntomas son indicación para un estudio respiratorio con nuestros especialistas.
            </p>
          </motion.div>
        </div>

        <div ref={chipContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {symptoms.map((symptom, i) => (
            <motion.div
              key={symptom}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="symptom-chip flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#7C3AED]/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-2 h-2 bg-[#7C3AED] rounded-full flex-shrink-0 mt-1.5" />
              <span className="text-gray-700 text-sm leading-relaxed">{symptom}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
