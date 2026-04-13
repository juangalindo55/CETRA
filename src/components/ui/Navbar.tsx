'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-gray-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo width={36} height={36} />
          <span className="font-display font-semibold text-lg tracking-tight text-[#1a0a3d]">CETRA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-light text-[#1a0a3d]/70 tracking-wide">
          <Link href="/servicios" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer">Servicios</Link>
          <Link href="/especialistas" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer">Especialistas</Link>
          <div className="w-px h-4 bg-gray-200" />
          <Link
            href="/contacto"
            className="bg-[#311B92] text-white px-6 py-2.5 rounded-full text-sm hover:bg-[#1a0a5e] hover:shadow-lg hover:shadow-[#311B92]/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Agendar Cita
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-[#1a0a3d] transition-transform duration-300 origin-center ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#1a0a3d] transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#1a0a3d] transition-transform duration-300 origin-center ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu — fuera del overflow-hidden del header */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-4 text-sm font-light text-gray-600 tracking-wide">
          <Link href="/servicios" className="hover:text-[#311B92] transition-colors" onClick={() => setOpen(false)}>Servicios</Link>
          <Link href="/especialistas" className="hover:text-[#311B92] transition-colors" onClick={() => setOpen(false)}>Especialistas</Link>
          <Link
            href="/contacto"
            className="bg-[#311B92] text-white px-6 py-2.5 rounded-full text-center hover:bg-[#1a0a5e] transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            Agendar Cita
          </Link>
        </div>
      )}
    </header>
  );
}
