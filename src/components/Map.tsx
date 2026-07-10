'use client';

import Link from 'next/link';
import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import {
  CETRA_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
} from '@/lib/contact';
import ButtonCTA from './ui/ButtonCTA';

export default function Map() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className="flex w-full flex-col bg-white">
      <div className="relative h-[360px] w-full overflow-hidden sm:h-[420px]">
        {isMapLoaded ? (
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, filter: 'grayscale(0.08) contrast(1.08) brightness(0.96)' }}
            src={GOOGLE_MAPS_EMBED_URL}
            allowFullScreen
            loading="lazy"
            title="Ubicación de CETRA en Monterrey"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[#f5f3ff] px-6 text-center">
            <MapPin className="h-8 w-8 text-[#7C3AED]" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-[#120726]">
              Ver ubicación en el mapa
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              Al cargar el mapa, Google puede recibir datos técnicos de tu navegación. Consulta el{' '}
              <Link href="/privacidad" className="font-medium text-[#311B92] underline underline-offset-4">
                Aviso de Privacidad
              </Link>.
            </p>
            <button
              type="button"
              onClick={() => setIsMapLoaded(true)}
              className="mt-6 rounded-full bg-[#311B92] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a0a5e]"
            >
              Cargar mapa de Google
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-[#e8e4f8] bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.95fr_0.8fr] lg:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
              Centro
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-[#120726]">
              {CETRA_LOCATION.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">{CETRA_LOCATION.address}</p>
          </div>

          <div className="space-y-4">
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="flex items-center gap-3 transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#311B92]/10 bg-[#311B92]/5">
                <Phone className="h-4 w-4 text-[#311B92]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Teléfono directo</p>
                <p className="text-sm font-medium text-[#120726] transition-colors hover:text-[#7C3AED]">
                  {CONTACT_PHONE_DISPLAY}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#311B92]/10 bg-[#311B92]/5">
                <Clock className="h-4 w-4 text-[#311B92]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Horario de atención</p>
                <p className="text-sm text-gray-500">{CETRA_LOCATION.hours}</p>
                <p className="text-sm text-gray-500">{CETRA_LOCATION.saturdayHours}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start lg:justify-end">
            <ButtonCTA
              href={GOOGLE_MAPS_URL}
              external
              size="md"
              icon={<ExternalLink className="h-4 w-4" />}
              className="w-full lg:w-auto"
            >
              Abrir en Google Maps
            </ButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
}
