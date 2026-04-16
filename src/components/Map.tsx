'use client';

import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import {
  CETRA_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
} from '@/lib/contact';

export default function Map() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="relative min-h-[360px] w-full flex-grow overflow-hidden">
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
              className="flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5"
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
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#311B92] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#311B92]/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1a0a5e] lg:w-auto"
            >
              <ExternalLink className="h-4 w-4" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
