'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import Map from '@/components/Map';
import {
  CETRA_LOCATION,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
  GOOGLE_MAPS_URL,
  INSURANCE_COMPANIES,
} from '@/lib/contact';

const helpOptions = [
  {
    title: 'Agendar una cita',
    description: 'Escríbenos por WhatsApp o llámanos para coordinar tu visita.',
  },
  {
    title: 'Validar cobertura',
    description: 'Nuestro equipo administrativo puede revisar tu aseguradora antes de tu cita.',
  },
  {
    title: 'Resolver acceso y ubicación',
    description: 'Te ayudamos con la dirección, el acceso al edificio y el estacionamiento.',
  },
];

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Teléfono',
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    description: 'Atención para citas y orientación general.',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Correo',
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL_LINK,
    description: 'Administración, referencias y seguimiento.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Horario',
    value: CETRA_LOCATION.hours,
    description: CETRA_LOCATION.saturdayHours,
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-white">
      <section className="relative overflow-hidden bg-[#120726] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 py-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <span className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
              Atención al paciente
            </span>
            <h1 className="font-display text-5xl font-light leading-tight text-balance sm:text-6xl lg:text-7xl">
              Contacta al equipo de CETRA para agendar, validar cobertura o resolver tu visita.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
              Escríbenos por WhatsApp, llámanos o envía un correo. Te orientamos con el siguiente paso y el canal más conveniente para tu caso.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#120726] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar mensaje por WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                Llamar ahora
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
              Acceso rápido
            </p>
            <div className="mt-7 space-y-5">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#120726]">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                      {info.title}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 block break-words text-lg font-medium text-white transition-colors hover:text-[#ddd6fe]"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-medium text-white">{info.value}</p>
                    )}
                    <p className="mt-2 text-sm leading-6 text-white/65">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
              Respuesta clara
            </span>
            <h2 className="mt-4 font-display text-3xl font-light text-[#120726] sm:text-4xl">
              ¿En qué podemos ayudarte hoy?
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              La página prioriza lo que el paciente quiere resolver primero: cita, cobertura o acceso.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {helpOptions.map((option, index) => (
              <motion.article
                key={option.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-3xl border border-gray-100 bg-[#faf8ff] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c9ff] hover:shadow-lg hover:shadow-purple-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#311B92] shadow-sm">
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#120726]">{option.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{option.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7ff] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-sm sm:p-10"
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#311B92]" />
              <h2 className="font-display text-3xl font-light text-[#120726]">
                Ubicación y acceso
              </h2>
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Si es tu primera visita, abre la ubicación antes de salir para llegar directo al edificio.
            </p>

            <div className="mt-8 rounded-3xl bg-[#120726] p-6 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
                Dirección
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold">{CETRA_LOCATION.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/70">{CETRA_LOCATION.address}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#120726] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Abrir en Google Maps
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
                >
                  <MapPin className="h-4 w-4" />
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#ece7fb] bg-[#faf8ff] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                  Piso
                </p>
                <p className="mt-2 text-lg font-medium text-[#120726]">{CETRA_LOCATION.floor}</p>
              </div>
              <div className="rounded-2xl border border-[#ece7fb] bg-[#faf8ff] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                  Ciudad
                </p>
                <p className="mt-2 text-lg font-medium text-[#120726]">{CETRA_LOCATION.city}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-sm sm:p-10"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#311B92]" />
              <h2 className="font-display text-3xl font-light text-[#120726]">
                Convenios y seguros
              </h2>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Trabajamos con aseguradoras nacionales e internacionales. Si tu póliza requiere validación,
              nuestro equipo administrativo te ayuda antes de tu visita.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {INSURANCE_COMPANIES.map((company) => (
                <div
                  key={company}
                  className="rounded-2xl border border-gray-100 bg-[#fcfbff] px-4 py-4 text-center text-sm font-medium text-gray-600 transition-colors duration-200 hover:border-[#d8c9ff] hover:text-[#311B92]"
                >
                  {company}
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-[#d8c9ff] bg-[#f5f0ff] px-4 py-4 text-center text-sm font-semibold text-[#311B92]">
                Consulta tu cobertura con administración
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#120726] p-6 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
                Antes de venir
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                <li>• Ten a la mano tu póliza, referencia o estudios previos.</li>
                <li>• Si vienes por primera vez, confirma el horario antes de salir.</li>
                <li>• Escríbenos si necesitas orientación para autorizar tu atención.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
              Ubicación exacta
            </span>
            <h2 className="mt-4 font-display text-3xl font-light text-[#120726] sm:text-4xl">
              Revisa el mapa antes de salir
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              El mapa y la información de contacto usan la misma fuente de datos para evitar confusiones.
            </p>
          </div>
        </div>

        <section className="mt-10 w-full bg-gray-100">
          <Map />
        </section>
      </section>

      <section className="bg-[#f8f7ff] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-light text-[#120726] sm:text-5xl">
            ¿Necesitas una respuesta hoy?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Escríbenos por WhatsApp para agendar, confirmar horarios o revisar tu cobertura.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#311B92] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1a0a5e]"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar Agenda por Chat
            </a>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c9ff] bg-white px-8 py-4 text-sm font-semibold text-[#120726] transition-colors duration-300 hover:border-[#b99cff] hover:bg-[#fcfbff]"
            >
              <Phone className="h-4 w-4" />
              Llamar al consultorio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
