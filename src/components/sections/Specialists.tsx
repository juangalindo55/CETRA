'use client';

import { motion } from 'framer-motion';

const pneumologistDescription = {
  role: 'Neumólogos Especialistas',
  specialties: ['Diagnóstico Integral', 'Trasplante Pulmonar', 'Medicina del Sueño', 'Interpretación de Resultados'],
  description: 'Nuestro equipo de neumólogos especializados maneja todas las áreas de la medicina respiratoria: desde evaluaciones clínicas completas y diagnóstico de enfermedades respiratorias, hasta evaluación de candidatos para trasplante pulmonar y seguimiento post-trasplante. También diagnosticamos y tratamos trastornos del sueño como apnea, hipoxemia nocturna y otros trastornos respiratorios nocturnos. Cada especialista interpreta resultados de pruebas funcionales con precisión para guiar el mejor tratamiento para cada paciente.',
};

const technicians = [
  {
    id: 1,
    name: 'Cristina Durán',
    area: 'Función Pulmonar',
    services: ['Espirometría', 'Pletismografía', 'DLCO', 'MIP-MEP'],
    description: 'Especialista en pruebas de función pulmonar avanzadas con más de 8 años de experiencia.',
  },
  {
    id: 2,
    name: 'Ivis Pérez',
    area: 'Estudios de Sueño',
    services: ['Poligrafía', 'Titulación CPAP', 'Noche Dividida'],
    description: 'Técnica especializada en diagnóstico y titulación de apnea del sueño, atención personalizada.',
  },
  {
    id: 3,
    name: 'Brandon Hernández',
    area: 'Pruebas de Esfuerzo',
    services: ['Caminata 6 Minutos', 'CPET', 'Reto con Ejercicio'],
    description: 'Técnico certificado en ergometría cardiopulmonar y evaluación de capacidad funcional.',
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
    transition: { duration: 0.5 },
  },
};

function AvatarInitials({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg ${color}`}
    >
      {initials}
    </div>
  );
}

export default function Specialists() {
  return (
    <section className="py-24 w-full bg-gradient-to-br from-white via-purple-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEUMÓLOGOS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">
              Médicos Especialistas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-6">
              Neumólogos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertos en diagnóstico, consulta clínica e interpretación de resultados. Nuestro equipo de
              neumólogos especializados guía cada paso del camino del paciente.
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#311B92] to-[#7C3AED] flex items-center justify-center text-white font-semibold text-xl mb-4">
                  ⚕️
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1a0a3d] mb-4">
                  {pneumologistDescription.role}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {pneumologistDescription.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs bg-[#f5f3ff] text-[#7C3AED] px-3 py-1 rounded-full font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                  {pneumologistDescription.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* DIVISOR */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent my-20" />

        {/* TÉCNICOS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">
              Equipo Técnico Especializado
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-6">
              Técnicos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales altamente capacitados que aplican directamente todos nuestros servicios con
              precisión, empatía y compromiso con tu bienestar.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {technicians.map((technician) => (
              <motion.div
                key={technician.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border-2 border-[#7C3AED]/20 hover:border-[#7C3AED]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <AvatarInitials name={technician.name} color="bg-gradient-to-br from-[#7C3AED] to-[#311B92]" />
                  <div className="flex-1 text-left">
                    <h3 className="font-display text-xl font-semibold text-[#1a0a3d] mb-1">
                      {technician.name}
                    </h3>
                    <p className="text-sm font-medium text-[#7C3AED] mb-3">
                      {technician.area}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {technician.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs bg-[#f5f3ff] text-[#311B92] px-2.5 py-1 rounded-full font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {technician.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            Conoce al equipo que te cuidará
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas están comprometidos con brindarte atención de excelencia, combinando
            precisión médica con un toque humanista.
          </p>
          <button className="px-10 py-4 bg-white text-[#311B92] font-light tracking-wide rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
            Agendar Cita
          </button>
        </motion.div>
      </div>
    </section>
  );
}
