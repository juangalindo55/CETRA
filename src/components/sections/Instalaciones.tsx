'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PhotoFrame from '@/components/ui/PhotoFrame';

type FacilityPhoto = {
  label: string;
  ratio: '4/3' | '16/9';
  className: string;
  src?: string;
  alt?: string;
};

const facilityPhotos: FacilityPhoto[] = [
  {
    label: 'Fachada / recepción — Torre José A. Muguerza',
    ratio: '16/9',
    className: 'md:col-span-2',
    src: '/images/cetralobby.webp',
    alt: 'Recepción de CETRA en Torre José A. Muguerza, Monterrey',
  },
  {
    label: 'Cabina de pletismografía / espirómetro',
    ratio: '4/3',
    className: '',
    src: '/images/pletissolo.webp',
    alt: 'Cabina de pletismografía en CETRA',
  },
  {
    label: 'Laboratorio del sueño',
    ratio: '4/3',
    className: '',
    src: '/images/CETRASAOS.webp',
    alt: 'Laboratorio del sueño de CETRA',
  },
  {
    label: 'Banda / cicloergómetro (CPET)',
    ratio: '4/3',
    className: 'md:col-span-2',
    src: '/images/bandas.webp',
    alt: 'Banda y cicloergómetro para pruebas de esfuerzo cardiopulmonar (CPET) en CETRA',
  },
];

export default function Instalaciones() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4 font-light">
              Nuestro espacio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a0a3d] leading-tight">
              Conoce nuestras instalaciones
            </h2>
            <p className="text-gray-500 mt-4 font-light max-w-xl mx-auto">
              Un entorno clínico diseñado para tu comodidad, con tecnología diagnóstica avanzada en el corazón de Monterrey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilityPhotos.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={photo.className}
            >
              <PhotoFrame
                src={photo.src}
                alt={photo.alt}
                label={photo.label}
                ratio={photo.ratio}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/instalaciones"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#311B92]"
          >
            Ver instalaciones
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
