'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Juan García',
    age: 52,
    location: 'Monterrey',
    achievement: 'Volvió a correr 5km diariamente',
    story:
      'Hace 8 meses no podía caminar sin perder el aliento. Después del trasplante en CETRA, mi vida cambió por completo. Hoy puedo disfrutar con mis hijos y nietos nuevamente.',
    monthsPost: 8,
  },
  {
    name: 'María Rodríguez',
    age: 48,
    location: 'Ciudad de México',
    achievement: 'Retomó su carrera profesional',
    story:
      'El equipo de CETRA no solo me cuidó médicamente, sino emocionalmente. Hoy trabajo como antes y me siento una persona nueva. La supervivencia no es estadística, es realidad.',
    monthsPost: 12,
  },
  {
    name: 'Carlos López',
    age: 55,
    location: 'San Pedro Garza García',
    achievement: 'Viaja por primera vez en 5 años',
    story:
      'Pensé que nunca volvería a viajar. Con CETRA no solo recuperé mi salud, sino mi libertad. Hace poco estuve en Italia y fue increíble sentir que puedo vivir sin limitaciones.',
    monthsPost: 10,
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 w-full bg-[#f5f3ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">Historias de transformación</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a0a3d] leading-tight">
            Vidas que han cambiado
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(124,58,237,0.1)] transition-all duration-500 overflow-hidden group flex flex-col justify-between"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute -top-4 -right-2 text-[150px] leading-none text-[#7C3AED]/5 font-serif font-bold group-hover:text-[#7C3AED]/10 transition-colors duration-500 pointer-events-none">
                “
              </div>

              {/* Story */}
              <p className="relative z-10 text-lg text-gray-600 leading-relaxed font-light mb-8 italic">
                "{testimonial.story}"
              </p>

              <div className="relative z-10 mt-auto">
                {/* Patient Info */}
                <div className="flex flex-col border-t border-gray-100 pt-6 mb-5">
                    <h3 className="font-display text-xl font-semibold text-[#1a0a3d]">{testimonial.name}</h3>
                    <div className="flex gap-2 items-center mt-1">
                       <span className="text-sm text-gray-400">{testimonial.age} años</span>
                       <span className="w-1 h-1 bg-gray-300 rounded-full" />
                       <span className="text-sm text-[#7C3AED] font-medium tracking-wide">{testimonial.location}</span>
                    </div>
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f3ff] rounded-full border border-[#ede9fe] group-hover:bg-[#ede9fe] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                    <span className="text-xs font-semibold text-[#311B92] tracking-wide">{testimonial.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
