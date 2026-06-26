'use client';

import Hero from '@/components/sections/Hero';
import TrustPillars from '@/components/sections/TrustPillars';
import Services from '@/components/sections/Services';
import WhenToSeek from '@/components/sections/WhenToSeek';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import Marquee from '@/components/ui/Marquee';
import Link from 'next/link';
import { CONTACT_WHATSAPP } from '@/lib/contact';

import { motion } from 'framer-motion';

export default function Home() {
  const differentiators = [
    'Equipo médico especializado',
    'Atención humana y profesional',
    'Estudios respiratorios y del sueño',
    'Tecnología diagnóstica avanzada',
    'Seguimiento clínico confiable',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST PILLARS */}
      <TrustPillars />

      {/* 3. MARQUEE */}
      <Marquee />

      {/* 4. MAIN SERVICES SECTION */}
      <Services />

      {/* 5. WHEN TO SEEK */}
      <WhenToSeek />

      {/* 6. HOW IT WORKS */}
      <HowItWorks />

      {/* 7. WHY CETRA - DIFFERENTIATORS */}
      <section className="py-20 w-full bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4 font-light">
                Nuestro enfoque
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight">
                ¿Por qué <em className="italic font-semibold">CETRA</em>?
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-[#7C3AED] rounded-full flex-shrink-0" />
                <span className="font-light text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTITUTIONAL TRANSPLANT SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#1a0a3d] to-[#311B92]/80 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xs tracking-widest uppercase text-[#a78bfa] mb-4 font-light">
              Alta especialidad
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Medicina respiratoria avanzada y experiencia en trasplante pulmonar
            </h2>
            <p className="text-gray-200 leading-relaxed mb-8 font-light max-w-xl">
              CETRA también cuenta con experiencia en alta especialidad respiratoria y trasplante pulmonar, respaldando una práctica clínica integral para casos complejos.
            </p>
            <Link
              href="/servicios/trasplante-pulmonar"
              className="inline-block text-[#a78bfa] hover:text-white transition-colors duration-300 font-light"
            >
              Conocer programa →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. FINAL CTA */}
      <section className="py-24 w-full bg-[#f5f3ff]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4 font-light">
              Próximo paso
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight mb-6">
              Agenda tu estudio{' '}
              <em className="italic font-semibold">respiratorio hoy</em>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-md mx-auto">
              Nuestro equipo puede orientarte sobre el estudio más adecuado para tu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#311B92] text-white font-light tracking-wide rounded-full shadow-lg shadow-[#311B92]/20 hover:bg-[#1a0a5e] hover:shadow-xl hover:shadow-[#311B92]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Agendar estudio por WhatsApp
              </a>
              <Link
                href="/servicios"
                className="inline-block px-10 py-4 border border-[#311B92] text-[#311B92] font-light tracking-wide rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
              >
                Ver servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
