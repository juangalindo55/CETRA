'use client';

import { motion } from 'framer-motion';

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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4 font-light">
              Proceso simple
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight">
              Cómo funciona
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Número en círculo */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#311B92] to-[#7C3AED] text-white rounded-full flex items-center justify-center font-display text-2xl font-light mb-6 flex-shrink-0">
                {step.num}
              </div>

              {/* Línea conectora (visible solo en desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-16 w-32 h-0.5 bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
              )}

              {/* Contenido */}
              <h3 className="font-display text-lg font-semibold text-[#311B92] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
