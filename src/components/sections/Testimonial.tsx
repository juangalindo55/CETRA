'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Juan García',
    age: 52,
    location: 'Madrid',
    achievement: 'Volvió a correr 5km diariamente',
    story:
      'Hace 8 meses no podía caminar sin perder el aliento. Después del trasplante en CETRA, mi vida cambió por completo. Hoy puedo disfrutar con mis hijos y nietos nuevamente.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    monthsPost: 8,
  },
  {
    name: 'María Rodríguez',
    age: 48,
    location: 'Barcelona',
    achievement: 'Retomó su carrera profesional',
    story:
      'El equipo de CETRA no solo me cuidó médicamente, sino emocionalmente. Hoy trabajo como antes y me siento una persona nueva. La supervivencia del 98% no es estadística, es realidad.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    monthsPost: 12,
  },
  {
    name: 'Carlos López',
    age: 55,
    location: 'Valencia',
    achievement: 'Viaja por primera vez en 5 años',
    story:
      'Pensé que nunca volvería a viajar. Con CETRA no solo recuperé mi salud, sino mi libertad. Hace poco estuve en Italia y fue increíble sentir que puedo vivir sin limitaciones.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
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
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#7C3AED]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Location */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-semibold text-[#1a0a3d]">{testimonial.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.age} años • {testimonial.location}</p>
                  <p className="text-xs text-[#7C3AED] font-medium mt-2">
                    ✓ {testimonial.monthsPost} meses post-trasplante
                  </p>
                </div>

                {/* Achievement */}
                <div className="bg-[#f5f3ff] rounded-lg p-3 mb-4 border border-[#e8e4f8]">
                  <p className="text-sm font-semibold text-[#311B92]">
                    🎯 {testimonial.achievement}
                  </p>
                </div>

                {/* Story */}
                <p className="text-sm text-gray-600 leading-relaxed">"{testimonial.story}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
