'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Award, Star, CheckCircle2 } from 'lucide-react';

const pneumologistDescription = {
  role: 'Neumólogos Especialistas',
  specialties: ['Diagnóstico Integral', 'Trasplante Pulmonar', 'Medicina del Sueño', 'Tratamiento Respiratorio'],
  description1: 'Nuestro equipo médico de neumólogos especializados maneja integralmente todas las áreas de la medicina respiratoria avanzada.',
  description2: 'Desde la valoración inicial para trasplante pulmonar y el estricto seguimiento inmunosupresor, hasta el monitoreo de polisomnografías y rehabilitación clínica.',
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
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${color}`}>
      <span className="font-display font-bold text-xl tracking-wide">{initials}</span>
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
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)] transition-all duration-500 flex flex-col md:flex-row gap-10 items-center text-center md:text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#311B92] via-[#7C3AED] to-[#a78bfa]" />
              
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1a0a3d] to-[#311B92] flex items-center justify-center text-white shadow-2xl relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm" />
                  <Stethoscope className="w-10 h-10 relative z-10" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-display text-3xl font-semibold text-[#1a0a3d] mb-4">
                  {pneumologistDescription.role}
                </h3>
                <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-2 justify-center md:justify-start mb-6 no-scrollbar">
                  {pneumologistDescription.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] md:text-xs bg-[#7C3AED]/10 text-[#7C3AED] px-3 md:px-4 py-1.5 rounded-full font-medium tracking-wide flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <Star className="w-3 h-3 flex-shrink-0" /> {spec}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {pneumologistDescription.description1}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {pneumologistDescription.description2}
                  </p>
                </div>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {technicians.map((technician) => (
              <motion.div
                key={technician.id}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#7C3AED]/40 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-all duration-500 group flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AvatarInitials name={technician.name} color="bg-gradient-to-br from-[#7C3AED] to-[#311B92] group-hover:scale-105 transition-transform duration-500" />
                  <div className="flex-1 text-left">
                    <h3 className="font-display text-xl font-semibold text-[#1a0a3d] mb-1">
                      {technician.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#7C3AED]">
                      {technician.area}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                   <p className="text-sm text-gray-600 leading-relaxed mb-6">
                     {technician.description}
                   </p>
                   <div className="flex flex-col gap-2">
                     {technician.services.map((service) => (
                       <span
                         key={service}
                         className="text-xs bg-[#f5f3ff] text-[#311B92] py-2 px-3 border border-[#7C3AED]/10 rounded-lg font-medium flex items-center gap-2"
                       >
                         <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED]" /> {service}
                       </span>
                     ))}
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
          className="mt-32 relative overflow-hidden bg-[#1a0a3d] rounded-[2rem] p-12 lg:p-16 text-center isolate border border-white/10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/25 via-[#1a0a3d]/0 to-transparent -z-10 pointer-events-none" />
          
          <Award className="w-12 h-12 text-[#a78bfa] mx-auto mb-6 opacity-80" strokeWidth={1} />
          <h3 className="font-display text-4xl font-light text-white mb-6">
            Conoce al equipo que te cuidará
          </h3>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Nuestros especialistas están comprometidos con brindarte atención de excelencia, combinando
            precisión médica con un toque profundamente humano.
          </p>
          <a
            href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20evaluaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-[#1a0a3d] font-medium tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 inline-block"
          >
            Agendar Evaluación
          </a>
        </motion.div>
      </div>
    </section>
  );
}
