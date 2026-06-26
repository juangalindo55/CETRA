'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Fondo orgánico */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.14)_0%,rgba(124,58,237,0.06)_24%,transparent_46%),radial-gradient(circle_at_82%_28%,rgba(49,27,146,0.11)_0%,rgba(49,27,146,0.05)_26%,transparent_50%),radial-gradient(circle_at_50%_82%,rgba(167,139,250,0.12)_0%,rgba(167,139,250,0.05)_22%,transparent_48%),linear-gradient(180deg,#ffffff_0%,#fbfaff_52%,#f5f3ff_100%)]" />

      <motion.div
        aria-hidden="true"
        className="absolute -left-28 top-[-4rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(124,58,237,0.30)_0%,rgba(49,27,146,0.12)_42%,transparent_72%)] blur-3xl mix-blend-multiply pointer-events-none"
        animate={
          reduceMotion
            ? { x: 0, y: 0, scale: 1, opacity: 0.9 }
            : { x: [0, 36, 0], y: [0, 22, 0], scale: [1, 1.08, 1], opacity: [0.82, 0.98, 0.82] }
        }
        transition={reduceMotion ? { duration: 0 } : { duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(49,27,146,0.22)_0%,rgba(124,58,237,0.10)_40%,transparent_72%)] blur-3xl mix-blend-multiply pointer-events-none"
        animate={
          reduceMotion
            ? { x: 0, y: 0, scale: 1, opacity: 0.8 }
            : { x: [0, -28, 0], y: [0, 26, 0], scale: [1, 1.06, 1], opacity: [0.72, 0.9, 0.72] }
        }
        transition={reduceMotion ? { duration: 0 } : { duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute left-[calc(50%-13rem)] bottom-[-7rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18)_0%,rgba(124,58,237,0.08)_42%,transparent_70%)] blur-3xl mix-blend-multiply pointer-events-none"
        animate={
          reduceMotion
            ? { y: 0, scale: 1, opacity: 0.75 }
            : { y: [0, -18, 0], scale: [1, 1.05, 1], opacity: [0.65, 0.85, 0.65] }
        }
        transition={reduceMotion ? { duration: 0 } : { duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — texto */}
          <div className="flex flex-col">

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-8">
              <span className="inline-block text-[10px] font-light tracking-[0.3em] text-[#7C3AED] uppercase border border-[#7C3AED]/40 px-5 py-2 bg-white/60 backdrop-blur-sm">
                Diagnóstico Respiratorio
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-[10px] tracking-[0.35em] text-[#7C3AED]/70 font-light uppercase mb-4"
            >
              Estudios de Alta Especialidad
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#1a0a3d] leading-[1.1] tracking-tight mb-6"
            >
              Estudios y diagnóstico{' '}
              <em className="italic font-bold text-[#311B92] drop-shadow-sm">respiratorio</em>
              {' '}de alta especialidad
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-md"
            >
              Espirometría, pletismografía, DLCO, FeNO, estudios del sueño y pruebas de ejercicio en Monterrey.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20un%20estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-3.5 bg-[#311B92] text-white font-light tracking-wide rounded-full shadow-sm shadow-[#311B92]/30 hover:bg-[#1a0a5e] hover:shadow-md hover:shadow-[#311B92]/40 hover:-translate-y-0.5 transition-[transform,background-color,box-shadow,color] duration-300 text-center"
              >
                Agendar estudio
              </a>
              <Link
                href="/servicios"
                className="px-9 py-3.5 bg-white text-[#311B92] border border-[#7C3AED] font-light tracking-wide rounded-full shadow-sm shadow-[#311B92]/10 hover:bg-[#f8f5ff] hover:border-[#5b21b6] hover:shadow-md hover:shadow-[#311B92]/15 hover:-translate-y-0.5 transition-[transform,background-color,border-color,box-shadow,color] duration-300 text-center"
              >
                Ver servicios
              </Link>
            </motion.div>
          </div>

          {/* Columna derecha — imagen */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-[#311B92]/20">
              <Image
                src="/images/Hero.webp"
                alt="Especialista CETRA en medicina respiratoria"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
              />
            </div>
          </motion.div>

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
            animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
            transition={reduceMotion ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-[#4c1d95]"
          >
            <span className="text-[11px] md:text-sm font-medium tracking-[0.24em] uppercase text-[#311B92]">
              Descubre nuestros servicios
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#7C3AED]/45 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
