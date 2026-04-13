'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqItems = [
  {
    question: '¿Cuánto cuesta un trasplante pulmonar?',
    answer:
      'El costo varía según el caso específico, comorbilidades y complejidad. La mayoría de casos están cubiertos por seguros médicos. Ofrecemos consulta financiera para discutir opciones de pago y cobertura.',
  },
  {
    question: '¿Cuánto tiempo tarda todo el proceso?',
    answer:
      'El proceso completo generalmente toma 4-6 meses desde la evaluación inicial hasta la recuperación funcional. La evaluación toma 2-4 semanas, la preparación 1-3 meses, y la recuperación 3-6 meses.',
  },
  {
    question: '¿Cuáles son los principales riesgos del trasplante?',
    answer:
      'Como toda cirugía mayor, hay riesgos de infección, rechazo del órgano y complicaciones quirúrgicas. Sin embargo, con nuestro protocolo integral y seguimiento de por vida, alcanzamos tasas de supervivencia del 98% a 5 años.',
  },
  {
    question: '¿Podré volver a trabajar después del trasplante?',
    answer:
      'Sí, la mayoría de nuestros pacientes retorna a actividades laborales dentro de 3-6 meses. El tiempo exacto depende del tipo de trabajo y la recuperación individual. Contamos con programa de rehabilitación progresiva.',
  },
  {
    question: '¿Cuál es la esperanza de vida después del trasplante?',
    answer:
      'Con nuestro protocolo, alcanzamos 98% de supervivencia a 5 años. Muchos pacientes viven 10, 15 o más años post-trasplante con excelente calidad de vida, realizando actividades normales incluyendo viajes y deportes.',
  },
  {
    question: '¿Necesitaré tomar medicamentos de por vida?',
    answer:
      'Sí, es fundamental mantener una terapia inmunosupresora de por vida para prevenir el rechazo. Sin embargo, con el tiempo los medicamentos se estabilizan y los efectos secundarios disminuyen. Nuestro equipo te ayudará a optimizar tu régimen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 w-full bg-[#f5f3ff]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">Resuelve tus dudas</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a0a3d] leading-tight">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 hover:border-[#7C3AED]/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-[#1a0a3d] text-left">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex-shrink-0 text-[#7C3AED]"
                >
                  ▼
                </motion.span>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-200"
              >
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 text-center">
          <p className="text-gray-600 mb-4">¿Tienes más preguntas?</p>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 bg-[#311B92] text-white font-light tracking-wide rounded-full hover:bg-[#1a0a5e] transition-all duration-300"
          >
            Hablar con un especialista
          </a>
        </div>
      </div>
    </section>
  );
}
