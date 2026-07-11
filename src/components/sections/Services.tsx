'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useStaggerCards } from '@/hooks/animations/useStaggerCards';
import { ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { CONTACT_WHATSAPP } from '@/lib/contact';
import { featuredServices } from '@/lib/service-hub';
import ButtonCTA from '@/components/ui/ButtonCTA';

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
    index: 'A',
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
    index: 'B',
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
    index: 'C',
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
    index: 'D',
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


export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    serviceCategories[0].id,
  );
  const serviceGridRef = useRef<HTMLDivElement>(null);
  useStaggerCards(serviceGridRef as React.RefObject<HTMLElement>, { itemSelector: '.service-category' });

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
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-electric">
            ¿Qué necesitas hoy?
          </p>
          <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] text-ink sm:text-5xl">
            Estudios, evaluación y rehabilitación respiratoria
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Encuentra el estudio o programa que mejor corresponde a tu caso y avanza con una ruta clínica más clara.
          </p>
        </motion.div>

        {/* 01 / Rutas principales */}
        <div className="mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-display text-lg text-violet-electric">01 / Rutas principales</p>
              <h3 className="mt-6 font-display text-3xl font-light leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl">
                Puntos de entrada para las búsquedas más importantes
              </h3>
            </div>
          </div>

          <ol className="mt-10 border-t border-ink">
            {featuredServices.map((service) => (
              <li
                key={service.slug}
                className="grid gap-3 border-b border-lavender-line py-7 sm:grid-cols-[10rem_1fr] lg:grid-cols-[10rem_0.9fr_1.1fr] lg:gap-10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric sm:pt-1.5">
                  {service.tag}
                </p>
                <h4 className="max-w-md text-xl font-semibold leading-7 text-ink">{service.title}</h4>
                <div>
                  <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base">{service.summary}</p>
                  <Link
                    href={service.slug}
                    className="mt-4 inline-flex items-center gap-2 border-b border-violet-electric/35 pb-1 text-sm font-semibold text-violet-heritage transition-colors hover:border-violet-heritage"
                  >
                    Ver página
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* 02 / Guía rápida */}
        <div className="mt-20">
          <p className="font-display text-lg text-violet-electric">02 / Guía rápida</p>
          <div className="mt-8 grid gap-x-8 gap-y-10 border-t border-ink pt-8 sm:grid-cols-2 xl:grid-cols-4">
            {quickGuide.map((item) => (
              <article key={item.title} className="border-l border-violet-electric/40 pl-4">
                <h3 className="text-base font-semibold leading-6 text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 03 / Catálogo completo */}
        <div ref={serviceGridRef} className="mt-20">
          <p className="font-display text-lg text-violet-electric">03 / Catálogo completo</p>
          <div className="mt-8 border-t border-ink">
            {serviceCategories.map((category) => {
              const isExpanded = expandedCategory === category.id;

              return (
                <div key={category.id} className="service-category border-b border-lavender-line">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : category.id)
                    }
                    className="w-full cursor-pointer text-left"
                    aria-expanded={isExpanded}
                  >
                    <div className="grid gap-3 py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-6">
                      <p className="font-display text-xl text-violet-electric">{category.index}</p>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <h3 className="font-display text-2xl font-light tracking-[-0.02em] text-ink sm:text-3xl">
                            {category.title}
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                            {category.services.length} servicios
                          </span>
                        </div>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                          {category.summary}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="hidden text-ink sm:block sm:pt-1"
                      >
                        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
                      </motion.div>
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
                    <div className="grid grid-cols-1 gap-x-10 gap-y-8 pb-10 sm:grid-cols-2 sm:pl-[4.5rem] lg:grid-cols-3">
                      {category.services.map((service) => (
                        <div key={service.name} className="border-t border-lavender-line pt-4">
                          <h4 className="text-base font-semibold text-ink">
                            {service.name}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 04 / Tu siguiente paso */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="mt-24 grid gap-10 border-y border-ink py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-16"
        >
          <p className="font-display text-lg text-violet-electric">04 / Tu siguiente paso</p>
          <div>
            <h3 className="max-w-2xl font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] text-ink sm:text-5xl">
              ¿No sabes cuál te corresponde?
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Nuestro equipo puede orientarte según tus síntomas, historial y objetivo clínico para que elijas el estudio o programa correcto.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonCTA href={CONTACT_WHATSAPP} external>
                Contactar por WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </ButtonCTA>
              <ButtonCTA href="/contacto" variant="secondary">
                Ver contacto
              </ButtonCTA>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
