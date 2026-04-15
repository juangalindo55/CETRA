'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Wind, Moon, Activity, HeartPulse, ChevronDown } from 'lucide-react';

const serviceCategories = [
  {
    id: 'diagnostico-funcional',
    title: 'Diagnóstico Funcional Respiratorio',
    icon: <Wind className="w-8 h-8" strokeWidth={1.5} />,
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
    icon: <Moon className="w-8 h-8" strokeWidth={1.5} />,
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
    icon: <Activity className="w-8 h-8" strokeWidth={1.5} />,
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
    icon: <HeartPulse className="w-8 h-8" strokeWidth={1.5} />,
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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
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
                      <div className="w-12 h-12 flex items-center justify-center text-white">
                        {category.icon}
                      </div>
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
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="text-white"
                    >
                      <ChevronDown className="w-6 h-6" />
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
                      className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#7C3AED]/40 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-all duration-300"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-24 relative overflow-hidden bg-[#1a0a3d] rounded-[2rem] p-12 text-center isolate border border-white/10"
        >
          {/* Glowing Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/20 via-[#1a0a3d]/0 to-transparent -z-10 pointer-events-none" />
          
          <h3 className="font-display text-4xl font-light text-white mb-6">
            Lleva tu cuidado al siguiente nivel
          </h3>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Nuestro equipo de especialistas está preparado para ofrecerte un diagnóstico preciso y un tratamiento a medida. 
            No dejes tu salud respiratoria para mañana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#1a0a3d] font-medium tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 inline-block text-center"
            >
              Agendar Servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
