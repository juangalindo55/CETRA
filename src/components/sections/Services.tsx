'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const serviceCategories = [
  {
    id: 'diagnostico-funcional',
    title: 'Diagnóstico Funcional Respiratorio',
    icon: '🫁',
    color: 'from-purple-500 to-indigo-600',
    services: [
      {
        name: 'Espirometría Simple',
        description: 'Mide la capacidad y el flujo de aire de los pulmones. Es la prueba base para detectar enfermedades como EPOC y asma.',
      },
      {
        name: 'Espirometría con Broncodilatador',
        description: 'Misma prueba, pero se administra un medicamento broncodilatador antes para evaluar la reversibilidad de la obstrucción.',
      },
      {
        name: 'Pletismografía',
        description: 'Medición avanzada de los volúmenes pulmonares totales, incluyendo el aire que queda atrapado en los pulmones. Complementa la espirometría.',
      },
      {
        name: 'DLCO (Difusión de Gases)',
        description: 'Evalúa qué tan bien los pulmones transfieren el oxígeno hacia la sangre. Clave para diagnóstico de fibrosis pulmonar y enfisema.',
      },
      {
        name: 'Óxido Nítrico Exhalado (FeNO)',
        description: 'Detecta inflamación eosinofílica en la vía aérea. Apoya el diagnóstico y seguimiento del asma.',
      },
      {
        name: 'MIP-MEP (RCP)',
        description: 'Mide la fuerza de los músculos respiratorios. Útil en enfermedades neuromusculares y evaluación preoperatoria.',
      },
    ],
  },
  {
    id: 'diagnostico-sueno',
    title: 'Diagnóstico del Sueño',
    icon: '😴',
    color: 'from-blue-500 to-cyan-600',
    services: [
      {
        name: 'Poligrafía Simple Atendida',
        description: 'Estudio domiciliario o en clínica para detectar apnea del sueño, sin registro de EEG. Opción costo-efectiva y accesible.',
      },
      {
        name: 'Poligrafía de Titulación',
        description: 'Poligrafía combinada con ajuste de presión de CPAP para encontrar la configuración óptima del dispositivo.',
      },
      {
        name: 'Poligrafía en Noche Dividida',
        description: 'En una sola noche se realiza primero el diagnóstico y luego la titulación, optimizando tiempos para el paciente.',
      },
      {
        name: 'Estudios de Sueño (RCP)',
        description: 'Estudios de sueño completos dentro del marco del programa de rehabilitación.',
      },
    ],
  },
  {
    id: 'pruebas-esfuerzo',
    title: 'Pruebas de Esfuerzo y Capacidad Funcional',
    icon: '💪',
    color: 'from-green-500 to-emerald-600',
    services: [
      {
        name: 'Prueba de Caminata de 6 Minutos',
        description: 'Evalúa la tolerancia al ejercicio y la saturación de oxígeno. Estándar para seguimiento en trasplante, EPOC e hipertensión pulmonar.',
      },
      {
        name: 'Prueba de Ejercicio Cardiopulmonar con Gases Espirados (CPET)',
        description: 'Prueba de esfuerzo máximo que analiza la respuesta integrada del corazón, pulmones y músculos. Gold standard en evaluación funcional avanzada.',
      },
      {
        name: 'Prueba de Reto con Ejercicio',
        description: 'Diagnostica asma inducida por ejercicio mediante un protocolo de esfuerzo controlado.',
      },
    ],
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación Pulmonar',
    icon: '🏥',
    color: 'from-red-500 to-pink-600',
    services: [
      {
        name: 'Consulta de Rehabilitación Cardiopulmonar',
        description: 'Valoración médica inicial para ingreso al programa de rehabilitación.',
      },
      {
        name: 'Sesión de Rehabilitación Cardiopulmonar',
        description: 'Sesión individual supervisada con ejercicio aeróbico y educación en salud respiratoria.',
      },
      {
        name: 'Programa de Rehabilitación Pulmonar (24 sesiones)',
        description: 'Programa estructurado y completo. Alta evidencia clínica en mejora de calidad de vida en EPOC, trasplante y fibrosis.',
      },
      {
        name: 'Rehabilitación Pulmonar de Mantenimiento (1 sesión)',
        description: 'Para pacientes que completaron el programa y continúan entrenando de forma periódica. Genera recurrencia.',
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    serviceCategories[0].id
  );

  return (
    <section className="py-24 w-full bg-gradient-to-br from-white via-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">
            Servicios Especializados
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-4">
            Servicios CETRA Pulmonar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diagnóstico integral, tratamiento especializado y rehabilitación para enfermedades
            respiratorias con tecnología de punta.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {serviceCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              {/* Category Header */}
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )
                }
                className="w-full"
              >
                <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{category.icon}</span>
                      <div className="text-left">
                        <h3 className="font-display text-2xl font-semibold">
                          {category.title}
                        </h3>
                        <p className="text-white/80 text-sm mt-1">
                          {category.services.length} servicios
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedCategory === category.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl"
                    >
                      ▼
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedCategory === category.id ? 1 : 0,
                  height: expandedCategory === category.id ? 'auto' : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 pl-6 pr-6 pb-2">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: expandedCategory === category.id ? 1 : 0,
                        y: expandedCategory === category.id ? 0 : 10,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: expandedCategory === category.id ? index * 0.05 : 0,
                      }}
                      className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-display text-lg font-semibold text-[#1a0a3d] mb-2">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-[#311B92] to-[#7C3AED] rounded-3xl p-12 text-center"
        >
          <h3 className="font-display text-3xl font-light text-white mb-4">
            ¿Necesitas uno de nuestros servicios?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo especializado para agendar tu evaluación o para resolver
            cualquier duda sobre nuestros servicios.
          </p>
          <button className="px-10 py-4 bg-white text-[#311B92] font-light tracking-wide rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
            Agendar Consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
