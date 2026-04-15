'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, MapPin, Calendar } from 'lucide-react';

const testimonials = [
  {
    name: 'Juan García',
    age: 52,
    location: 'Monterrey, NL',
    achievement: 'Volvió a correr 5km diariamente',
    story:
      'Hace 8 meses no podía caminar sin perder el aliento. Después del trasplante en CETRA, mi vida cambió por completo. Hoy puedo disfrutar con mis hijos y nietos nuevamente. El equipo fue extraordinario en cada paso del proceso.',
    monthsPost: 8,
    beforeState: 'No podía caminar',
    afterState: 'Corre 5km diarios',
  },
  {
    name: 'María Rodríguez',
    age: 48,
    location: 'Ciudad de México, CDMX',
    achievement: 'Retomó su carrera profesional',
    story:
      'El equipo de CETRA no solo me cuidó médicamente, sino emocionalmente. Hoy trabajo como antes y me siento una persona nueva. La supervivencia no es estadística, es realidad vivida cada día.',
    monthsPost: 12,
    beforeState: 'De baja médica',
    afterState: 'Trabajando a tiempo completo',
  },
  {
    name: 'Carlos López',
    age: 55,
    location: 'San Pedro Garza García, NL',
    achievement: 'Viaja por primera vez en 5 años',
    story:
      'Pensé que nunca volvería a viajar. Con CETRA no solo recuperé mi salud, sino mi libertad. Hace poco estuve en Italia y fue increíble sentir que puedo vivir sin limitaciones que me impedían disfrutar.',
    monthsPost: 10,
    beforeState: 'Limitado a casa',
    afterState: 'Viaja internacionalmente',
  },
  {
    name: 'Patricia Mendez',
    age: 50,
    location: 'Guadalajara, Jalisco',
    achievement: 'Retomó sus actividades de voluntariado',
    story:
      'Trabajaba como voluntaria en un hospicio pero tuve que dejar todo. Gracias a CETRA, hace 6 meses volví a mi pasión. Ahora enseño a otros pacientes sobre recuperación y esperanza.',
    monthsPost: 6,
    beforeState: 'Sin energía',
    afterState: 'Voluntaria activa',
  },
  {
    name: 'Roberto Sánchez',
    age: 60,
    location: 'Saltillo, Coahuila',
    achievement: 'Está escribiendo su libro de memorias',
    story:
      'A los 60 años recibí una segunda oportunidad. El trasplante en CETRA no solo salvó mi vida, me dio propósito. Ahora estoy escribiendo las historias de mi vida para mis nietos.',
    monthsPost: 14,
    beforeState: 'En lista de espera',
    afterState: 'Autor en proceso',
  },
  {
    name: 'Sofia Reyes',
    age: 45,
    location: 'Monterrey, NL',
    achievement: 'Ganó un medio maratón de beneficencia',
    story:
      'Nunca pensé que mis pulmones me permitirían correr. Hace 9 meses estaba en cama. Ahora, participo en carreras para recaudar fondos para otros pacientes. CETRA cambió mi vida literalmente.',
    monthsPost: 9,
    beforeState: 'Postrada en cama',
    afterState: 'Atleta y activista',
  },
];

export default function TestimonialExpanded() {
  return (
    <section className="py-24 w-full bg-gradient-to-b from-white to-[#f5f3ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4 font-semibold"
          >
            Historias de Transformación
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight max-w-3xl mx-auto"
          >
            Vidas que han cambiado gracias al trasplante pulmonar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto font-light"
          >
            Conoce las historias reales de pacientes que recuperaron su vida después del trasplante en CETRA
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#7C3AED]/30 transition-all duration-500 overflow-hidden group flex flex-col"
            >
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C3AED]/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              {/* Stats Pills */}
              <div className="relative z-10 flex gap-2 mb-6 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f5f3ff] rounded-full text-xs font-semibold text-[#311B92]">
                  <Calendar className="w-3.5 h-3.5" />
                  {testimonial.monthsPost} meses
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full text-xs font-semibold text-blue-700">
                  <MapPin className="w-3.5 h-3.5" />
                  {testimonial.location}
                </div>
              </div>

              {/* Story */}
              <p className="relative z-10 text-base text-gray-600 leading-relaxed font-light mb-8 italic">
                "{testimonial.story}"
              </p>

              {/* Before/After */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 p-4 bg-gradient-to-r from-red-50 to-green-50 rounded-xl">
                <div className="text-center">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-semibold">Antes</div>
                  <p className="text-sm font-medium text-gray-700">{testimonial.beforeState}</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-semibold">Ahora</div>
                  <p className="text-sm font-medium text-green-700">{testimonial.afterState}</p>
                </div>
              </div>

              {/* Patient Info */}
              <div className="relative z-10 mt-auto border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500 mb-4">{testimonial.age} años</p>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED]/10 to-[#a78bfa]/10 rounded-full border border-[#7C3AED]/20 group-hover:border-[#7C3AED]/40 group-hover:bg-gradient-to-r group-hover:from-[#7C3AED]/20 group-hover:to-[#a78bfa]/20 transition-all">
                  <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span className="text-xs font-semibold text-[#311B92] tracking-wide">{testimonial.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-12 bg-gradient-to-r from-[#311B92] to-[#7C3AED] rounded-3xl text-center"
        >
          <h3 className="font-display text-3xl font-light text-white mb-4">
            ¿Tu historia podría ser la siguiente?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Si tienes una enfermedad pulmonar terminal, es momento de explorar el trasplante como opción
          </p>
          <a
            href="https://wa.me/528117781017?text=Hola,%20quisiera%20solicitar%20una%20evaluación"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-[#311B92] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Solicitar Evaluación Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
