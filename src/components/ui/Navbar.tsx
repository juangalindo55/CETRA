'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  BookOpen,
  Users,
  Building2,
  Wind,
  Moon,
  Activity,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react';
import { serviceCategories } from '@/lib/service-hub';
import { CONTACT_WHATSAPP } from '@/lib/contact';
import ButtonCTA from './ButtonCTA';

const serviceIcons: Record<string, LucideIcon> = {
  '/servicios/diagnostico-funcional-respiratorio': Wind,
  '/servicios/diagnostico-del-sueno': Moon,
  '/servicios/pruebas-de-esfuerzo': Activity,
  '/servicios/rehabilitacion-pulmonar': HeartPulse,
};

// C — micro-interacciones: entrada del panel + reveal escalonado
const panelVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15, ease: 'easeIn' } },
};
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const cetraMenuItems = [
  {
    label: 'Nuestra Historia',
    href: '/nuestra-historia',
    description: 'La trayectoria detrás de CETRA.',
    icon: BookOpen,
  },
  {
    label: 'Equipo CETRA',
    href: '/especialistas',
    description: 'Médicos y técnicos especialistas.',
    icon: Users,
  },
  {
    label: 'Instalaciones',
    href: '/instalaciones',
    description: 'Conoce nuestros espacios de atención.',
    icon: Building2,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [cetraOpen, setCetraOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const cetraDropdownRef = useRef<HTMLDivElement | null>(null);
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

    const onPointerDown = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        cetraDropdownRef.current &&
        !cetraDropdownRef.current.contains(event.target as Node)
      ) {
        setCetraOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setCetraOpen(false);
  };

  const toggleMobileMenu = () => {
    if (open) {
      closeMobileMenu();
      return;
    }

    setOpen(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 flex items-center ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-lavender-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center w-full relative">
        
        {/* Izquierda: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center hover:opacity-90 transition-all transform [@media(hover:hover)]:hover:scale-105 duration-300 relative py-1">
            <Logo width={260} height={260} className="relative z-10 drop-shadow-lg" />
          </Link>
        </div>

        {/* Centro: Nav links (Absolute for perfect centering) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-base font-light text-[#1a0a3d]/70 tracking-wide">
          <div ref={cetraDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCetraOpen((value) => !value)}
              className={`group relative inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer ${cetraOpen ? 'text-[#311B92]' : 'hover:text-[#311B92]'}`}
              aria-expanded={cetraOpen}
              aria-haspopup="menu"
            >
              CETRA
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${cetraOpen ? 'rotate-180' : ''}`} />
              <span
                className={`pointer-events-none absolute -bottom-1.5 left-0 h-px bg-[#7C3AED] transition-all duration-300 ${cetraOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </button>

            <AnimatePresence>
              {cetraOpen && (
                <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-1/2 top-full z-50 mt-4 w-[min(420px,calc(100vw-2rem))] -translate-x-1/2 origin-top overflow-hidden rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-2xl shadow-[#311B92]/10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7C3AED]/5 blur-3xl" />
                  <motion.div variants={listVariants} className="relative">
                    <motion.div variants={cardVariants} className="mb-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                        Conoce CETRA
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        Quiénes somos, nuestro equipo y dónde te atendemos.
                      </p>
                    </motion.div>
                    <div className="space-y-2">
                      {cetraMenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <motion.div key={item.href} variants={cardVariants}>
                            <Link
                              href={item.href}
                              onClick={() => setCetraOpen(false)}
                              className="group/item flex items-start gap-3 rounded-xl border border-[#e8e4f8] bg-white px-4 py-3.5 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-0.5 hover:border-[#7C3AED] hover:bg-[#faf8ff] hover:shadow-lg hover:shadow-[#7C3AED]/10"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f0ff] text-[#7C3AED] transition-colors duration-300 group-hover/item:bg-[#7C3AED] group-hover/item:text-white">
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center justify-between gap-2">
                                  <span className="block text-sm font-medium text-[#120726]">{item.label}</span>
                                  <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[#7C3AED] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                </span>
                                <span className="mt-0.5 block text-xs text-gray-500">{item.description}</span>
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              className={`group relative inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer ${servicesOpen ? 'text-[#311B92]' : 'hover:text-[#311B92]'}`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Servicios
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              <span
                className={`pointer-events-none absolute -bottom-1.5 left-0 h-px bg-[#7C3AED] transition-all duration-300 ${servicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-1/2 top-full z-50 mt-4 w-[min(1000px,calc(100vw-2rem))] -translate-x-1/2 origin-top overflow-hidden rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-2xl shadow-[#311B92]/10"
                >
                  {/* Halo violeta sutil de fondo */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7C3AED]/5 blur-3xl" />

                  <motion.div variants={listVariants} className="relative grid grid-cols-2 gap-8">
                    {serviceCategories
                      .filter((category) => category.title !== 'Alta complejidad')
                      .map((category) => (
                        <motion.div key={category.title} variants={listVariants} className="flex flex-col">
                          <motion.div variants={cardVariants} className="mb-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                              {category.title}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                          </motion.div>
                          <div className="space-y-2 flex-1">
                            {category.items.map((item) => {
                              const Icon = serviceIcons[item.slug] ?? Activity;
                              return (
                                <motion.div key={item.slug} variants={cardVariants}>
                                  <Link
                                    href={item.slug}
                                    onClick={() => setServicesOpen(false)}
                                    className="group/item flex items-start gap-3 rounded-xl border border-[#e8e4f8] bg-white px-4 py-3.5 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-0.5 hover:border-[#7C3AED] hover:bg-[#faf8ff] hover:shadow-lg hover:shadow-[#7C3AED]/10"
                                  >
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f0ff] text-[#7C3AED] transition-colors duration-300 group-hover/item:bg-[#7C3AED] group-hover/item:text-white">
                                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="flex items-center justify-between gap-2">
                                        <span className="block text-sm font-medium text-[#120726]">
                                          {item.title}
                                        </span>
                                        <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[#7C3AED] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                      </span>
                                      <span className="mt-1 block text-xs leading-relaxed text-gray-500">
                                        {item.summary}
                                      </span>
                                      <span className="mt-2 inline-block rounded-full bg-[#f4f4f5] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#7C3AED]">
                                        {item.tag}
                                      </span>
                                    </span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    className="relative mt-5 flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-[#120726] px-5 py-4 text-white"
                  >
                    <div className="pointer-events-none absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#7C3AED]/20 blur-2xl" />
                    <div className="relative">
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
                      className="group/cta relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#120726] transition-transform [@media(hover:hover)]:hover:-translate-y-0.5"
                    >
                      Ver todos los servicios
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/servicios/trasplante-pulmonar" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer whitespace-nowrap">Trasplante Pulmonar</Link>
          <Link href="/contacto" className="hover:text-[#311B92] transition-colors duration-200 cursor-pointer text-[#311B92] font-normal underline decoration-[#311B92]/30 underline-offset-8">Contacto</Link>
        </nav>

        {/* Derecha: CTA Desktop + Hamburger Mobile */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <ButtonCTA
            href={CONTACT_WHATSAPP}
            external
            size="sm"
            className="hidden md:inline-flex"
          >
            Agendar estudio
          </ButtonCTA>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={toggleMobileMenu}
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-4 text-sm font-light text-gray-600 tracking-wide max-h-[calc(100svh-5rem)] overflow-y-auto">
          <div className="space-y-3">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between rounded-xl border border-transparent px-3 py-3 text-left text-gray-800 transition-colors hover:border-[#eee7ff] hover:bg-[#faf8ff] active:bg-[#f3edff]"
              onClick={() => setCetraOpen((value) => !value)}
              aria-expanded={cetraOpen}
            >
              <span className="text-base font-medium">CETRA</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${cetraOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {cetraOpen && (
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="space-y-2 pl-2 pr-1 pt-2"
                >
                  {cetraMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.href} variants={cardVariants}>
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-start gap-3 rounded-xl border border-[#e8e4f8] bg-white px-3 py-3 active:bg-[#f3edff]"
                          onClick={closeMobileMenu}
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f0ff] text-[#7C3AED]">
                            <Icon className="h-4 w-4" strokeWidth={1.75} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-[#120726]">{item.label}</span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
            <AnimatePresence initial={false}>
              {servicesOpen && (
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="space-y-4 pl-2 pr-1 pt-2"
                >
                  {serviceCategories
                    .filter((category) => category.title !== 'Alta complejidad')
                    .map((category) => (
                      <motion.div key={category.title} variants={listVariants} className="space-y-2">
                        <motion.p
                          variants={cardVariants}
                          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]"
                        >
                          {category.title}
                        </motion.p>
                        {category.items.map((item) => {
                          const Icon = serviceIcons[item.slug] ?? Activity;
                          return (
                            <motion.div key={item.slug} variants={cardVariants}>
                              <Link
                                href={item.slug}
                                className="flex min-h-11 items-start gap-3 rounded-xl border border-[#e8e4f8] bg-white px-3 py-3 active:bg-[#f3edff]"
                                onClick={closeMobileMenu}
                              >
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f0ff] text-[#7C3AED]">
                                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block text-sm font-medium text-[#120726]">
                                    {item.title}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
                                    {item.summary}
                                  </span>
                                  <span className="mt-1.5 inline-block rounded-full bg-[#f4f4f5] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#7C3AED]">
                                    {item.tag}
                                  </span>
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    ))}
                  <motion.div variants={cardVariants}>
                    <Link
                      href="/servicios"
                      className="flex min-h-11 items-center justify-between rounded-xl bg-[#120726] px-4 py-3 text-sm font-medium text-white active:bg-[#1a0a3d]"
                      onClick={closeMobileMenu}
                    >
                      Ver todos los servicios
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/servicios/trasplante-pulmonar"
            className="flex min-h-11 w-full items-center rounded-xl border border-transparent px-3 py-3 text-base font-medium text-gray-800 transition-colors hover:border-[#eee7ff] hover:bg-[#faf8ff] active:bg-[#f3edff]"
            onClick={closeMobileMenu}
          >
            Trasplante Pulmonar
          </Link>
          <Link
            href="/contacto"
            className="flex min-h-11 w-full items-center rounded-xl border border-transparent px-3 py-3 text-base font-medium text-[#311B92] transition-colors hover:border-[#eee7ff] hover:bg-[#faf8ff] active:bg-[#f3edff]"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
          <ButtonCTA
            href={CONTACT_WHATSAPP}
            external
            size="md"
            className="mt-1 w-full"
            onClick={closeMobileMenu}
          >
            Agendar estudio
          </ButtonCTA>
        </div>
      )}
    </header>
  );
}
