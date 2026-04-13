'use client';

import Link from 'next/link';
import Map from '@/components/Map';

export default function Footer() {
  return (
    <footer className="bg-[#f8f7ff] text-[#1a0a3d] pt-16 pb-10 border-t border-[#e8e4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold mb-3 text-[#1a0a3d] tracking-tight">
              CETRA
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Centro de excelencia en trasplante pulmonar y medicina respiratoria avanzada.
              Atención médica de alta especialidad con un enfoque humano e integral.
            </p>
            <Link
              href="/contacto"
              className="inline-block border border-[#311B92]/30 text-[#311B92] hover:border-[#311B92] hover:bg-[#311B92]/5 text-sm px-6 py-2.5 rounded-full transition-all duration-300"
            >
              Contactar al especialista
            </Link>
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

          {/* Map */}
          <div>
            <h4 className="text-[10px] font-semibold mb-5 text-[#7C3AED] uppercase tracking-[0.2em]">Ubicación</h4>
            <Map />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e8e4f8] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} CETRA. Todos los derechos reservados.</span>
          <span className="tracking-widest uppercase text-[9px] text-[#7C3AED]/60">Medicina Respiratoria de Alta Especialidad</span>
        </div>
      </div>
    </footer>
  );
}
