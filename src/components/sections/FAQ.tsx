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
  {
    question: '¿Qué incluye el programa de rehabilitación pulmonar en CETRA?',
    answer:
      'Es un programa integral supervisado por neumólogos y técnicos expertos. Combina entrenamiento físico aeróbico, fuerza y ejercicios respiratorios específicos para mejorar la capacidad funcional. Con el fin de brindar una atención verdaderamente holística, el programa incluye 2 consultas de nutrición clínica y 2 consultas de psicología (aplican restricciones).',
  },
  {
    question: '¿En qué consiste el acompañamiento de psicología y nutrición en la rehabilitación?',
    answer:
      'La salud pulmonar de alta especialidad requiere un enfoque integral. Las 2 consultas de nutrición clínica ayudan a optimizar la masa muscular y adaptar la alimentación al esfuerzo metabólico respiratorio. Las 2 consultas de psicología clínica proveen herramientas cognitivo-conductuales para el manejo de la ansiedad asociada a la falta de aire (disnea) y el afrontamiento de la enfermedad pulmonar (aplican restricciones).',
  },
  {
    question: '¿Qué es un trasplante pulmonar y quién es candidato?',
    answer:
      'Un trasplante pulmonar es una cirugía de alta complejidad para reemplazar uno o ambos pulmones enfermos por pulmones sanos de un donante. Es una opción para personas con enfermedad pulmonar en etapa terminal (como fibrosis pulmonar avanzada, EPOC muy grave o hipertensión pulmonar) que ya no responden al tratamiento médico convencional. Cada paciente requiere una evaluación multidisciplinaria detallada en CETRA para determinar su elegibilidad.',
  },
  {
    question: '¿Cómo se realiza la evaluación pretrasplante en CETRA?',
    answer:
      'La evaluación es un protocolo riguroso que incluye pruebas de función pulmonar avanzadas (pletismografía, DLCO), estudios de esfuerzo cardiopulmonar, valoraciones por múltiples especialistas (cardiología, infectología, etc.), y un acompañamiento estrecho en nutrición y psicología. El objetivo es confirmar que el trasplante sea seguro y que el paciente tenga la mayor probabilidad de éxito postoperatorio.',
  },
  {
    question: '¿Cómo es la recuperación y el seguimiento después de un trasplante pulmonar?',
    answer:
      'El paciente suele permanecer en el hospital de 2 a 3 semanas. Al egresar, inicia un seguimiento de por vida para monitorear la función del injerto y el uso de medicamentos inmunosupresores (que previenen el rechazo). Los primeros 3 a 6 meses son clave e incluyen un programa intensivo de rehabilitación pulmonar para recuperar la fuerza y regresar de forma segura a sus actividades cotidianas.',
  },
  {
    question: '¿Los estudios de diagnóstico (espirometría, pletismografía) requieren orden médica previa?',
    answer:
      'Es ideal contar con una indicación médica para realizar la prueba exacta que tu especialista necesita. Sin embargo, si tienes síntomas respiratorios (como falta de aire o tos crónica) y no tienes orden, puedes contactarnos. Nuestro equipo te orientará sobre qué estudio de entrada es el adecuado y agendará la posterior interpretación de resultados con nuestros neumólogos.',
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
