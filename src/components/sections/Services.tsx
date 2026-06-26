'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronDown,
  ArrowRight,
  FileText,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { CONTACT_WHATSAPP } from '@/lib/contact';
import { featuredServices } from '@/lib/service-hub';

const quickGuide = [
  {
    title: 'Tos, falta de aire o enfermedad pulmonar',
    description: 'Empieza por diagnóstico funcional respiratorio.',
  },
  {
    title: 'Ronquido, pausas respiratorias o sueño no reparador',
    description: 'Revisa el diagnóstico del sueño.',
  },
  {
    title: 'Seguimiento de trasplante o capacidad funcional',
    description: 'Consulta las pruebas de esfuerzo y función.',
  },
  {
    title: 'Recuperación y entrenamiento respiratorio',
    description: 'Explora rehabilitación pulmonar.',
  },
];

const serviceCategories = [
  {
    id: 'diagnostico-funcional',
    title: 'Diagnóstico funcional respiratorio',
    abbreviation: 'DFR',
    bgGradient: 'from-[#f3edff] to-[#f0ecfb]',
    accentGradient: 'from-[#7C3AED] to-[#311B92]',
    summary:
      'Estudios para medir función pulmonar, intercambio de gases, inflamación de vía aérea y fuerza respiratoria.',
    services: [
      {
        name: 'Espirometría simple',
        description:
          'Evalúa la capacidad y el flujo de aire. Es una prueba base para revisar síntomas respiratorios y control clínico.',
      },
      {
        name: 'Espirometría con broncodilatador',
        description:
          'Permite valorar la reversibilidad de la obstrucción y la respuesta al tratamiento inhalado.',
      },
      {
        name: 'Pletismografía',
        description:
          'Mide volúmenes pulmonares totales y ayuda a completar la evaluación de enfermedad respiratoria compleja.',
      },
      {
        name: 'DLCO',
        description:
          'Analiza el intercambio de gases entre pulmón y sangre. Es clave en fibrosis, enfisema y otras enfermedades intersticiales.',
      },
      {
        name: 'Óxido nítrico exhalado (FeNO)',
        description:
          'Detecta inflamación eosinofílica en la vía aérea y apoya el diagnóstico y seguimiento del asma.',
      },
      {
        name: 'MIP-MEP',
        description:
          'Mide la fuerza de los músculos respiratorios. Útil en evaluación neuromuscular y preoperatoria.',
      },
    ],
  },
  {
    id: 'diagnostico-sueno',
    title: 'Diagnóstico del sueño',
    abbreviation: 'DS',
    bgGradient: 'from-[#f0ecfb] to-[#ede9f6]',
    accentGradient: 'from-[#6366f1] to-[#7C3AED]',
    summary:
      'Estudios para detectar ronquido, pausas respiratorias y otros trastornos que alteran la calidad del descanso.',
    services: [
      {
        name: 'Polisomnografía',
        description:
          'Estudio completo del sueño para una evaluación integral de la respiración nocturna y la arquitectura del descanso.',
      },
      {
        name: 'Poligrafía simple',
        description:
          'Estudio simplificado que ayuda a identificar apnea del sueño y ronquido en un entorno portátil o clínico.',
      },
      {
        name: 'Titulación con CPAP',
        description:
          'Permite definir la presión adecuada para el tratamiento y ajustar el equipo con base en la respuesta real del paciente.',
      },
      {
        name: 'Poligrafía en noche dividida',
        description:
          'Combina diagnóstico y ajuste terapéutico en una sola noche cuando el caso lo permite.',
      },
    ],
  },
  {
    id: 'pruebas-esfuerzo',
    title: 'Pruebas de esfuerzo y capacidad funcional',
    abbreviation: 'PE',
    bgGradient: 'from-[#f3edff] to-[#f0ecfb]',
    accentGradient: 'from-[#7C3AED] to-[#5b21b6]',
    summary:
      'Evaluaciones para medir tolerancia al ejercicio, respuesta cardiorrespiratoria y capacidad funcional real.',
    services: [
      {
        name: 'Prueba de caminata de 6 minutos',
        description:
          'Valora la tolerancia al esfuerzo y la saturación de oxígeno. Es útil en trasplante, EPOC e hipertensión pulmonar.',
      },
      {
        name: 'CPET',
        description:
          'Analiza la respuesta integrada de corazón, pulmones y músculos durante el esfuerzo máximo. Es útil en evaluación avanzada.',
      },
      {
        name: 'Prueba de reto con ejercicio',
        description:
          'Ayuda a detectar asma inducida por ejercicio mediante un protocolo controlado.',
      },
    ],
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación pulmonar',
    abbreviation: 'RP',
    bgGradient: 'from-[#ede9f6] to-[#e9e5f5]',
    accentGradient: 'from-[#5b21b6] to-[#311B92]',
    summary:
      'Programas y sesiones para mejorar condición física, respiratoria y calidad de vida en pacientes con enfermedad pulmonar o trasplante.',
    services: [
      {
        name: 'Consulta de rehabilitación cardiopulmonar',
        description:
          'Valoración inicial para definir si el paciente debe ingresar a un programa de rehabilitación.',
      },
      {
        name: 'Sesión de rehabilitación cardiopulmonar',
        description:
          'Sesión individual supervisada con ejercicio aeróbico y educación en salud respiratoria.',
      },
      {
        name: 'Programa de rehabilitación pulmonar',
        description:
          'Plan estructurado de seguimiento con evidencia clínica en EPOC, trasplante y fibrosis.',
      },
      {
        name: 'Sesión de mantenimiento',
        description:
          'Sesión para continuidad terapéutica en pacientes que ya completaron un programa previo.',
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
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55 },
  },
};

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    serviceCategories[0].id,
  );

  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
            ¿Qué necesitas hoy?
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-[#120726] sm:text-5xl">
            Estudios, evaluación y rehabilitación respiratoria
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Encuentra el estudio o programa que mejor corresponde a tu caso y avanza con una ruta clínica más clara.
          </p>
        </motion.div>

        <div className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
                Rutas principales
              </p>
              <h3 className="mt-3 font-display text-2xl font-light text-[#120726]">
                Puntos de entrada para las búsquedas más importantes
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl border border-[#e8e4f8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c9ff] hover:shadow-lg hover:shadow-[#311B92]/10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                  {service.tag}
                </p>
                <h4 className="mt-3 text-xl font-semibold text-[#120726]">{service.title}</h4>
                <p className="mt-3 text-sm leading-7 text-gray-600">{service.summary}</p>
                <Link
                  href={service.slug}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#311B92]"
                >
                  Ver página
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickGuide.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-3xl border border-[#ece7fb] bg-[#faf8ff] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c9ff] hover:shadow-lg hover:shadow-[#311B92]/10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                Guía rápida
              </p>
              <h3 className="mt-3 text-base font-semibold text-[#120726]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 space-y-5"
        >
          {serviceCategories.map((category) => {
            const isExpanded = expandedCategory === category.id;

            return (
              <motion.div key={category.id} variants={itemVariants}>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedCategory(isExpanded ? null : category.id)
                  }
                  className="w-full text-left"
                >
                  <div className={`rounded-[2rem] border border-[#e8e4f8] bg-gradient-to-br ${category.bgGradient} p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8c9ff] hover:shadow-lg hover:shadow-[#311B92]/10`}>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accentGradient} text-white shadow-md`}
                        >
                          <span className="text-2xl font-bold tracking-tight">{category.abbreviation}</span>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-2xl font-semibold text-[#120726]">
                              {category.title}
                            </h3>
                            <span className="rounded-full border border-[#d8c9ff] bg-[#f5f0ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#311B92]">
                              {category.services.length} servicios
                            </span>
                          </div>
                          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                            {category.summary}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="mt-1 text-[#311B92]"
                      >
                        <ChevronDown className="h-6 w-6" />
                      </motion.div>
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-2 lg:grid-cols-3">
                    {category.services.map((service) => (
                      <div
                        key={service.name}
                        className="rounded-2xl border border-white/70 bg-[#fcfbff] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:border-[#d8c9ff] hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]"
                      >
                        <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7C3AED]">
                          <FileText className="h-3.5 w-3.5" />
                          Estudio / sesión
                        </div>
                        <h4 className="font-display text-lg font-semibold text-[#120726]">
                          {service.name}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-[#e8e4f8] bg-[#120726] p-8 text-center shadow-2xl shadow-black/10 sm:p-12"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#120726]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display text-4xl font-light text-white">
              ¿No sabes cuál te corresponde?
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Nuestro equipo puede orientarte según tus síntomas, historial y objetivo clínico para que elijas el estudio o programa correcto.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#120726] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <ArrowRight className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
              >
                <Stethoscope className="h-4 w-4" />
                Ver contacto
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
