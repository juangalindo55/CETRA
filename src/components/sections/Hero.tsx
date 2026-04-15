'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">

      {/* Fondo atmosférico */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_40%,#ede9fe_0%,#f5f3ff_50%,#ffffff_100%)]" />

      {/* Orbe decorativo derecho */}
      <div className="absolute right-0 top-1/4 w-[480px] h-[480px] bg-[#311B92]/6 rounded-full blur-3xl pointer-events-none" />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg,#311B92 0,#311B92 1px,transparent 1px,transparent 72px),repeating-linear-gradient(0deg,#311B92 0,#311B92 1px,transparent 1px,transparent 72px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 items-center">

          {/* Columna izquierda — texto */}
          <div className="flex flex-col">

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-8">
              <span className="inline-block text-[10px] font-light tracking-[0.3em] text-[#7C3AED] uppercase border border-[#7C3AED]/40 px-5 py-2 bg-white/60 backdrop-blur-sm">
                Excelencia en Medicina Respiratoria
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-[10px] tracking-[0.35em] text-[#7C3AED]/70 font-light uppercase mb-4"
            >
              Centro de Trasplante Pulmonar
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#1a0a3d] leading-[1.1] tracking-tight mb-6"
            >
              Esperanza y{' '}
              <em className="italic font-semibold text-[#311B92]">Excelencia</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-md"
            >
              En CETRA combinamos precisión quirúrgica con compasión humanista.
              Referentes en salud pulmonar y trasplante, comprometidos con tu vida.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-3.5 bg-[#311B92] text-white font-light tracking-wide rounded-full shadow-lg shadow-[#311B92]/20 hover:bg-[#1a0a5e] hover:shadow-xl hover:shadow-[#311B92]/30 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                Agendar Consulta
              </a>
              <Link
                href="/servicios"
                className="px-9 py-3.5 border border-gray-300 text-gray-600 font-light tracking-wide rounded-full hover:border-[#311B92] hover:text-[#311B92] hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                Conocer Más
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="mt-20 flex justify-start"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-300"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
