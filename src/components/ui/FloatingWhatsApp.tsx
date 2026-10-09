'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/528117781017?text=Hola,%20vi%20su%20perfil%20en%20Google%20y%20me%20gustar%C3%ADa%20agendar%20un%20estudio%20o%20consulta';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Mostrar pequeño badge informativo tras 5 segundos
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-all duration-300 ${
        hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
      }`}
    >
      {isOpen && (
        <div className="relative bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Cerrar mensaje"
          >
            <X size={14} />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Atención CETRA
            </p>
          </div>
          <p className="text-sm font-medium text-slate-700 leading-snug">
            ¿Necesitas agendar un estudio o valoración respiratoria?
          </p>
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-placement="floating-whatsapp"
        aria-label="Contactar por WhatsApp para citas"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle size={24} className="fill-current text-white shrink-0" />
        <span className="hidden sm:inline-block font-semibold text-sm pr-1">
          Agendar Cita
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
