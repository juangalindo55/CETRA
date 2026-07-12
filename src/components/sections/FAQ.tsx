'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from '@/lib/contact';

const faqItems = [
  {
    question: '¿Qué estudio necesito según mis síntomas?',
    answer:
      'Depende de lo que experimentes. Si tienes tos persistente, falta de aire o sospecha de asma/EPOC, empieza por espirometría. Si ronquidos, pausas al dormir o somnolencia, es un estudio del sueño. En tu consulta inicial nuestro equipo te orienta sobre el mejor estudio para tu caso.',
  },
  {
    question: '¿Cómo me preparo para una espirometría?',
    answer:
      'No necesitas ayuno ni preparación especial. Evita ejercicio intenso 1 hora antes. Usa ropa cómoda que permita respirar libremente. Toma tus medicamentos normales, excepto broncodilatadores (inhaladores) que debes suspender 4 horas antes. La prueba dura unos 20 minutos.',
  },
  {
    question: '¿Cuánto dura una pletismografía?',
    answer:
      'Aproximadamente 45 minutos. Es una prueba cómoda y no duele. Entras en una cámara cerrada (cabina) que mide tus volúmenes pulmonares con precisión. La mayoría de pacientes la tolera muy bien. No hay radiación ni efectos secundarios.',
  },
  {
    question: '¿Qué es DLCO y para qué sirve?',
    answer:
      'DLCO (capacidad de difusión pulmonar) mide cómo tus pulmones transfieren oxígeno a la sangre. Es clave para diagnosticar fibrosis pulmonar, enfisema, problemas vasculares pulmonares y otras enfermedades. Complementa la espirometría dando un diagnóstico más completo.',
  },
  {
    question: '¿Para qué sirve el FeNO?',
    answer:
      'El FeNO (óxido nítrico exhalado) detecta inflamación eosinofílica en tus vías aéreas, lo que ayuda a confirmar asma y a guiar el tratamiento. Es rápido, no invasivo (solo respiras en un tubo especial durante 10 segundos) y sin riesgos.',
  },
  {
    question: '¿Cómo agendo un estudio?',
    answer:
      `Muy fácil: contacta por WhatsApp al ${CONTACT_PHONE_DISPLAY} o llama al mismo número. Nuestro equipo te pregunta sobre tus síntomas y propone el estudio ideal para ti. Generalmente te vemos dentro de 1-2 semanas. También puedes escribirnos a ${CONTACT_EMAIL}.`,
  },
  {
    question: '¿Puedo venir sin derivación médica?',
    answer:
      'Sí, absolutamente. No necesitas una referencia de otro médico. Puedes contactarnos directamente. Aunque si tu médico ya te refirió, nos coordinaremos con él para compartir resultados y recomendaciones.',
  },
  {
    question: '¿Cómo funciona el pago y cobertura?',
    answer:
      'Aceptamos la mayoría de seguros médicos privados. Si tienes seguro, verifica cobertura con nosotros. Para pacientes sin seguro, ofrecemos opciones de pago accesibles y planes. No rechazamos a nadie por falta de recursos. Contacta para detalles específicos de tu caso.',
  },
  {
    question: '¿Cómo me preparo para un estudio del sueño?',
    answer:
      'Polisomnografía: duermes una noche en nuestra clínica con electrodos. Come normal ese día, evita cafeína/alcohol después de las 4pm. Trae pijama cómoda. Noche dividida: mitad diagnóstico, mitad ajuste de máquina CPAP. El equipo te explica todo antes de empezar. Muchos pacientes duermen bien porque es un ambiente cómodo y seguro.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 w-full bg-lavender">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.3em] text-violet-electric uppercase mb-4 font-light">
              Resuelve tus dudas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight">
              Preguntas Frecuentes sobre Estudios Respiratorios
            </h2>
          </motion.div>
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
              className="bg-white rounded-xl border border-gray-200 hover:border-violet-electric/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-ink text-left">{item.question}</span>
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

      </div>
    </section>
  );
}
