'use client';

import Hero from '@/components/sections/Hero';
import Timeline from '@/components/sections/Timeline';
import Testimonial from '@/components/sections/Testimonial';
import EligibilityQuiz from '@/components/sections/EligibilityQuiz';
import FAQ from '@/components/sections/FAQ';
import Marquee from '@/components/ui/Marquee';
import Link from 'next/link';

import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '50+', label: 'Trasplantes realizados' },
  { value: '98%', label: 'Tasa de supervivencia' },
  { value: '24/7', label: 'Atención continua' },
];

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Alta Especialidad',
    desc: 'Protocolos médicos de clase mundial para los casos más complejos de medicina respiratoria.',
    link: { href: '/servicios/trasplante-pulmonar', label: 'Programa de Trasplante →' },
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01-1.5 2.121V18a2.25 2.25 0 01-2.25 2.25H7.95A2.25 2.25 0 015.7 18v-.879a2.25 2.25 0 01-1.5-2.121M19.8 15H4.2" />
      </svg>
    ),
    title: 'Tecnología de Punta',
    desc: 'Equipamiento de última generación para diagnóstico preciso e intervención mínimamente invasiva.',
    link: { href: '/servicios', label: 'Ver servicios →' },
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Acompañamiento Integral',
    desc: 'Cuidado continuo y multidisciplinario que pone la humanidad del paciente en el centro.',
    link: { href: 'https://wa.me/528117781017?text=Hola,%20quisiera%20hablar%20con%20un%20especialista', label: 'Hablar con un especialista →' },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Transición diagonal Hero → Stats */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12 block" style={{ background: '#1a0a3d' }}>
          <polygon points="0,0 1440,48 0,48" fill="white" />
        </svg>
      </div>

      {/* Estadísticas */}
      <section className="w-full bg-[#1a0a3d] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="font-display text-4xl md:text-5xl font-light text-white tracking-tight">{s.value}</span>
                <span className="text-xs text-[#a78bfa] tracking-widest uppercase font-light">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Testimonios */}
      <Testimonial />

      <Marquee />

      {/* Pilares */}
      <section className="py-20 w-full bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">Nuestro enfoque</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a0a3d] leading-tight">
              Por qué elegir <em className="italic font-semibold">CETRA</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 flex flex-col rounded-xl border border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-md hover:shadow-[#311B92]/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#311B92]/[0.08] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#311B92]/[0.12] transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="font-display text-base font-semibold mb-2 text-[#1a0a3d]">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-3 flex-grow">{p.desc}</p>
                {p.link.href.startsWith('http') ? (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7C3AED] text-xs font-medium hover:text-[#311B92] transition-colors mt-auto inline-block"
                  >
                    {p.link.label}
                  </a>
                ) : (
                  <Link
                    href={p.link.href}
                    className="text-[#7C3AED] text-xs font-medium hover:text-[#311B92] transition-colors mt-auto inline-block"
                  >
                    {p.link.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora de Elegibilidad */}
      <EligibilityQuiz />

      {/* FAQ */}
      <FAQ />

      {/* CTA de cierre */}
      <section className="py-24 w-full bg-[#f5f3ff]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">Primer paso</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-6">
              Estamos listos<br />para <em className="italic font-semibold">atenderte</em>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-md mx-auto">
              Agenda una consulta con nuestros especialistas y da el primer paso hacia una mejor calidad de vida.
            </p>
            <a
              href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#311B92] text-white font-light tracking-wide rounded-full shadow-lg shadow-[#311B92]/20 hover:bg-[#1a0a5e] hover:shadow-xl hover:shadow-[#311B92]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
