'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Atención especializada',
    desc: 'Equipo médico certificado en neumología y medicina del sueño.',
  },
  {
    title: 'Interpretación clínica experta',
    desc: 'Diagnóstico confiable para guiar tratamiento y seguimiento.',
  },
  {
    title: 'Estudios respiratorios y del sueño',
    desc: 'Cartera completa de pruebas diagnósticas avanzadas.',
  },
  {
    title: 'Agenda rápida por WhatsApp',
    desc: 'Agendar tu estudio es fácil, rápido y accesible.',
  },
];

export default function TrustPillars() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="font-display text-sm font-semibold text-[#311B92] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
