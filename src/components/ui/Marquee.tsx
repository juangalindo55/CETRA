'use client';

import { motion } from 'framer-motion';

const items = [
  "Rehabilitación Cardiopulmonar",
  "Trasplante Pulmonar",
  "Exámenes de sueño",
];

export default function Marquee() {
  return (
    <div className="w-full bg-[#f5f3ff] overflow-hidden py-4 flex border-y border-[#7C3AED]/10 select-none">
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
            <span className="text-[#311B92] font-display text-sm md:text-base font-medium tracking-[0.18em] uppercase px-8 opacity-80">
              {item}
            </span>
            {/* Elegant separator */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]/35" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
