'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/lib/service-hub';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      return;
    }

    const onPointerDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 flex items-center ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-gray-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center w-full relative">
        
        {/* Izquierda: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center hover:opacity-90 transition-all transform hover:scale-105 duration-300 relative py-1">
            <Logo width={260} height={260} className="relative z-10 drop-shadow-lg" />
          </Link>
        </div>

        {/* Centro: Nav links (Absolute for perfect centering) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-base font-light text-[#1a0a3d]/70 tracking-wide">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              className="inline-flex items-center gap-1 hover:text-[#311B92] transition-colors duration-200 cursor-pointer"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Servicios
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-4 w-[860px] -translate-x-1/2 rounded-[2rem] border border-[#e8e4f8] bg-white p-6 shadow-2xl shadow-black/10">
                <div className="grid gap-5 md:grid-cols-3">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="rounded-2xl border border-[#f0ecfb] bg-[#faf8ff] p-4">
                      <div className="mb-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                          {category.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-gray-500">{category.description}</p>
                      </div>
                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.slug}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start justify-between gap-3 rounded-xl bg-white px-3 py-3 text-sm text-[#120726] transition-colors hover:bg-[#f5f0ff]"
                          >
                            <span className="font-medium leading-6">{item.title}</span>
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#7C3AED]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#120726] px-5 py-4 text-white">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c4b5fd]">
                      Vista general
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      Navega por todas las rutas de servicio y baja directo a la página que corresponda.
                    </p>
                  </div>
                  <Link
                    href="/servicios"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#120726] transition-transform hover:-translate-y-0.5"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/servicios/trasplante-pulmonar" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer whitespace-nowrap">Trasplante Pulmonar</Link>
          <Link href="/investigacion" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer">Investigación</Link>
          <Link href="/especialistas" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer">Especialistas</Link>
          <Link href="/contacto" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer text-[#311B92] font-normal underline decoration-[#311B92]/30 underline-offset-8">Contacto</Link>
        </nav>

        {/* Derecha: CTA Desktop + Hamburger Mobile */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[#311B92] text-white px-6 py-2.5 rounded-full text-sm hover:bg-[#1a0a5e] hover:shadow-lg hover:shadow-[#311B92]/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Agendar Servicios
          </a>

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
      </div>

      {/* Mobile menu — fuera del overflow-hidden del header */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-4 text-sm font-light text-gray-600 tracking-wide">
          <div className="space-y-3">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between rounded-xl border border-transparent px-3 py-3 text-left text-gray-800 transition-colors hover:border-[#eee7ff] hover:bg-[#faf8ff] active:bg-[#f3edff]"
              onClick={() => setServicesOpen((value) => !value)}
              aria-expanded={servicesOpen}
            >
              <span className="text-base font-medium">Servicios</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {servicesOpen && (
              <div className="space-y-4 pl-2 pr-1 pt-2">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                      {category.title}
                    </p>
                    {category.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.slug}
                        className="block rounded-xl px-4 py-3 text-sm leading-6 hover:bg-[#faf8ff] hover:text-[#311B92] active:bg-[#f3edff]"
                        onClick={() => {
                          setOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/servicios"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#311B92] hover:bg-[#faf8ff] active:bg-[#f3edff]"
                  onClick={() => {
                    setOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Ver todos los servicios
                </Link>
              </div>
            )}
          </div>
          <Link href="/investigacion" className="hover:text-[#311B92] transition-colors" onClick={() => setOpen(false)}>Investigación</Link>
          <Link href="/especialistas" className="hover:text-[#311B92] transition-colors" onClick={() => setOpen(false)}>Especialistas</Link>
          <Link href="/contacto" className="hover:text-[#311B92] transition-colors font-medium border-t border-gray-100 pt-2" onClick={() => setOpen(false)}>Contacto</Link>
          <a
            href="https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#311B92] text-white px-6 py-2.5 rounded-full text-center hover:bg-[#1a0a5e] transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            Agendar Servicios
          </a>
        </div>
      )}
    </header>
  );
}
