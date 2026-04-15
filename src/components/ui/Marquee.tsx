'use client';

import { motion } from 'framer-motion';

const items = [
  "Rehabilitación Cardiopulmonar",
  "Trasplante Pulmonar",
  "Exámenes de sueño",
];

export default function Marquee() {
  return (
    <div className="w-full bg-[#7C3AED] overflow-hidden py-8 flex border-y border-white/10 select-none">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {/* We repeat the items to ensure a seamless infinite loop */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-white font-display text-2xl md:text-4xl font-light tracking-[0.15em] uppercase px-12">
              {item}
            </span>
            {/* Elegant separator */}
            <div className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
