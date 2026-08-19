'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Stethoscope, Award, Star, CheckCircle2, User } from 'lucide-react';
import { CONTACT_WHATSAPP } from '@/lib/contact';

// cedulas: números de cédula profesional (requisito publicidad sanitaria COFEPRIS).
// null = pendiente; la tarjeta no muestra el bloque hasta tener al menos una.
// certification: número y organismo del Consejo certificador.
interface Specialist {
  id: number;
  name: string;
  role: string;
  specialty?: string;
  subspecialty?: string;
  image: string;
  cedulas: { number: string; institution: string }[] | null;
  certification?: { number: string; council: string } | null;
}

const pulmonologists: Specialist[] = [
  {
    id: 1,
    name: 'Dr. Uriel Chavarría Martínez',
    role: 'Neumólogo',
    specialty: 'Neumología',
    subspecialty: 'Neumología Intensivista',
    image: '/images/specialists/uriel-chavarria.webp',
    cedulas: [
      { number: '7796468', institution: 'UANL' },
      { number: '7757598', institution: 'UANL' },
    ],
    certification: { number: 'CNN-445', council: 'Consejo Nacional de Neumología, A.C.' },
  },
  {
    id: 2,
    name: 'Dr. Manuel Wong Jaen',
    role: 'Cirujano Cardiotorácico',
    specialty: 'Especialista en Trasplante Pulmonar y Cirugía por Mínima Invasión',
    image: '/images/specialists/manuel-wong.webp',
    cedulas: [
      { number: '10359772', institution: 'Ministerio de Educación, Cultura y Deporte — Madrid, España' },
    ],
    certification: { number: '506', council: 'Consejo Nacional de Cirugía del Tórax, A.C.' },
  },
  {
    id: 3,
    name: 'Dr. Sergio Saúl Sánchez Salazar',
    role: 'Neumólogo',
    image: '/images/specialists/drsergios1.webp',
    cedulas: [
      { number: '11207367', institution: 'UANL' },
    ],
    certification: { number: 'CNN-1215', council: 'Consejo Nacional de Neumología, A.C.' },
  },
];

const coordinator = {
  name: 'Irma de Osio',
  role: 'Coordinadora de Trasplante Pulmonar',
  image: '/images/specialists/irma.webp',
};

const technicians = [
  {
    id: 1,
    name: 'Cristina Durán',
    area: 'Función Pulmonar',
    services: ['Espirometría', 'Pletismografía', 'DLCO', 'MIP-MEP'],
    description: 'Especialista en pruebas de función pulmonar avanzadas con más de 8 años de experiencia.',
    image: '/images/specialists/cris.webp',
  },
  {
    id: 2,
    name: 'Ivis Pérez',
    area: 'Estudios de Sueño',
    services: ['Poligrafía', 'Titulación CPAP', 'Noche Dividida'],
    description: 'Técnica especializada en diagnóstico y titulación de apnea del sueño, atención personalizada.',
    image: '/images/specialists/Ivis.webp',
  },
  {
    id: 3,
    name: 'Brandon Hernández',
    area: 'Pruebas de Esfuerzo',
    services: ['Caminata 6 Minutos', 'CPET', 'Reto con Ejercicio'],
    description: 'Técnico certificado en ergometría cardiopulmonar y evaluación de capacidad funcional.',
    image: '/images/specialists/brandon.webp',
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

function PhotoPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#f4f4f5] border border-[#311B92]/10 ${className}`}
    >
      <User className="w-1/3 h-1/3 text-[#311B92]/25" strokeWidth={1.25} />
    </div>
  );
}

export default function Specialists() {
  return (
    <section className="py-24 w-full bg-gradient-to-br from-white via-[#f5f3ff]/20 to-white">
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
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-6">
              Médicos Especialistas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertos en diagnóstico, consulta clínica e interpretación de resultados. Nuestro equipo de
              médicos especialistas guía cada paso del camino del paciente.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pulmonologists.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#7C3AED]/40 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {doctor.image ? (
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f4f4f5]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top [@media(hover:hover)]:hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder className="w-full aspect-[4/5]" />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope className="w-4 h-4 text-[#7C3AED] shrink-0" strokeWidth={1.75} />
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#7C3AED]">
                      {doctor.role}
                    </p>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#1a0a3d]">
                    {doctor.name}
                  </h3>
                  {doctor.specialty && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                      {doctor.specialty}
                    </p>
                  )}
                  {doctor.subspecialty && (
                    <p className="text-xs text-[#7C3AED]/70 font-medium mt-1">
                      {doctor.subspecialty}
                    </p>
                  )}
                  {(doctor.cedulas || doctor.certification) && (
                    <div className="mt-auto pt-3 border-t border-gray-100 space-y-1">
                      {doctor.cedulas?.map((c) => (
                        <p key={c.number} className="text-xs text-gray-500 leading-snug">
                          Céd. Prof. {c.number}
                          {' '}·{' '}
                          <span className="text-gray-400">{c.institution}</span>
                        </p>
                      ))}
                      {doctor.certification && (
                        <p className="text-xs text-gray-500 leading-snug">
                          Cert. {doctor.certification.number}
                          {' '}·{' '}
                          <span className="text-gray-400">{doctor.certification.council}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-6">
              Equipo Técnico Especializado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales altamente capacitados que aplican directamente todos nuestros servicios con
              precisión, empatía y compromiso con tu bienestar.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm mx-auto mb-10 bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#7C3AED]/40 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-all duration-500 overflow-hidden flex flex-col"
          >
            {coordinator.image ? (
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f4f4f5]">
                <Image
                  src={coordinator.image}
                  alt={coordinator.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : (
              <PhotoPlaceholder className="w-full aspect-[4/5]" />
            )}
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-[#1a0a3d] mb-1">
                {coordinator.name}
              </h3>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#7C3AED]">
                {coordinator.role}
              </p>
            </div>
          </motion.div>

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
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#7C3AED]/40 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-all duration-500 group overflow-hidden flex flex-col h-full"
              >
                {technician.image ? (
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f4f4f5]">
                    <Image
                      src={technician.image}
                      alt={technician.name}
                      fill
                      className="object-cover object-top [@media(hover:hover)]:hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder className="w-full aspect-[4/5]" />
                )}
                <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-[#1a0a3d] mb-1">
                  {technician.name}
                </h3>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#7C3AED] mb-6">
                  {technician.area}
                </p>

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
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-[#1a0a3d] font-medium tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] [@media(hover:hover)]:hover:scale-105 transition-all duration-300 inline-block"
          >
            Agendar Evaluación
          </a>
        </motion.div>
      </div>
    </section>
  );
}
