'use client';

import Link from 'next/link';
import Map from '@/components/Map';
import {
  RESPONSABLE_SANITARIO,
  COFEPRIS_PERMISO_PUBLICIDAD,
  LEYENDA_SANITARIA,
} from '@/lib/legal';

export default function Footer() {
  return (
    <footer className="bg-lavender text-ink pt-16 pb-10 border-t border-lavender-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold mb-3 text-ink tracking-tight">
              CETRA
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-6">
              Centro de excelencia en trasplante pulmonar y medicina respiratoria avanzada.
              Atención médica de alta especialidad con un enfoque humano e integral.
            </p>

          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-semibold mb-5 text-[#7C3AED] uppercase tracking-[0.2em]">Institución</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/servicios" className="hover:text-[#311B92] transition-colors duration-200">Servicios</Link></li>
              <li><Link href="/especialistas" className="hover:text-[#311B92] transition-colors duration-200">Especialistas</Link></li>
              <li><Link href="/contacto" className="hover:text-[#311B92] transition-colors duration-200">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-semibold mb-5 text-[#7C3AED] uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/privacidad" className="hover:text-[#311B92] transition-colors duration-200">Aviso de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-[#311B92] transition-colors duration-200">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="w-full relative border-y border-lavender-line mb-12">
        <Map />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Información sanitaria (requisitos de publicidad de servicios de salud) */}
        <div className="border-t border-lavender-line pt-8 pb-6 text-xs leading-6 text-gray-600">
          <p>
            Responsable sanitario: {RESPONSABLE_SANITARIO.name}
            {RESPONSABLE_SANITARIO.cedula && <> — Céd. Prof. {RESPONSABLE_SANITARIO.cedula}</>}
            {COFEPRIS_PERMISO_PUBLICIDAD && (
              <> · Permiso de publicidad COFEPRIS: {COFEPRIS_PERMISO_PUBLICIDAD}</>
            )}
          </p>
          <p className="mt-1">
            La información de este sitio es orientativa y no sustituye una valoración médica. {LEYENDA_SANITARIA}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-lavender-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} CETRA. Todos los derechos reservados.</span>
          <span className="tracking-widest uppercase text-[9px] text-[#7C3AED]/60">Medicina Respiratoria de Alta Especialidad</span>
        </div>
      </div>
    </footer>
  );
}
