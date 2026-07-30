'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
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

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateX(-50%) translateY(-4px) scale(0.98)',
  },
  show: {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0) scale(1)',
    transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    transform: 'translateX(-50%) translateY(-4px) scale(0.98)',
    transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] },
  },
};
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.02 } },
};
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(6px)',
    transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] },
  },
  show: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
  },
};
const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateY(-6px)' },
  show: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: { duration: 0.22, ease: [0.32, 0.72, 0, 1] },
  },
  exit: {
    opacity: 0,
    transform: 'translateY(-4px)',
    transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] },
  },
};
const reducedPanelVariants: Variants = {
  hidden: { opacity: 1, transform: 'translateX(-50%)' },
  show: { opacity: 1, transform: 'translateX(-50%)', transition: { duration: 0 } },
  exit: { opacity: 1, transform: 'translateX(-50%)', transition: { duration: 0 } },
};
const reducedListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0 } },
};
const reducedCardVariants: Variants = {
  hidden: { opacity: 1, transition: { duration: 0 } },
  show: { opacity: 1, transition: { duration: 0 } },
};
const reducedMobileMenuVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 1, transition: { duration: 0 } },
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
  const shouldReduceMotion = useReducedMotion();
  const isHome = pathname === '/';
  const activePanelVariants = shouldReduceMotion
    ? reducedPanelVariants
    : panelVariants;
  const activeListVariants = shouldReduceMotion
    ? reducedListVariants
    : listVariants;
  const activeCardVariants = shouldReduceMotion
    ? reducedCardVariants
    : cardVariants;
  const activeMobileMenuVariants = shouldReduceMotion
    ? reducedMobileMenuVariants
    : mobileMenuVariants;

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
      className={`fixed top-0 left-0 z-50 flex h-20 w-full items-center transition-[background-color,border-color] duration-200 ease-[var(--ease-out-ui)] ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-lavender-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center w-full relative">
        
        {/* Izquierda: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="relative flex items-center py-1 transition-opacity duration-[160ms] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90">
            <Logo width={260} height={260} className="relative z-10 drop-shadow-lg" />
          </Link>
        </div>

        {/* Centro: Nav links (Absolute for perfect centering) */}
        {/* El logo mide 260px fijos y la navegación va centrada en absoluto: por
            debajo de xl los enlaces se montan encima del logo y del CTA. Hasta
            ahí se usa el menú hamburguesa, que contiene las mismas rutas. */}
        <nav className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-base font-light text-[#1a0a3d]/70 tracking-wide">
          <div ref={cetraDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCetraOpen((value) => !value)}
              className={`group relative inline-flex cursor-pointer items-center gap-1 transition-colors duration-200 ${cetraOpen ? 'text-[#311B92]' : '[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#311B92]'}`}
              aria-expanded={cetraOpen}
              aria-haspopup="menu"
            >
              CETRA
              <ChevronDown className={`motion-state-transform h-4 w-4 transition-transform duration-[180ms] ease-[var(--ease-in-out-ui)] ${cetraOpen ? 'rotate-180' : ''}`} />
              <span
                data-open={cetraOpen}
                className={`motion-nav-underline motion-state-transform pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left bg-[#7C3AED] transition-transform duration-[180ms] ease-[var(--ease-out-ui)] ${cetraOpen ? 'scale-x-100' : 'scale-x-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100'}`}
              />
            </button>

            <AnimatePresence>
              {cetraOpen && (
                <motion.div
                  variants={activePanelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-1/2 top-full z-50 mt-4 w-[min(420px,calc(100vw-2rem))] origin-top overflow-hidden rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-2xl shadow-[#311B92]/10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7C3AED]/5 blur-3xl" />
                  <motion.div variants={activeListVariants} className="relative">
                    <motion.div variants={activeCardVariants} className="mb-5">
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
                          <motion.div key={item.href} variants={activeCardVariants}>
                            <Link
                              href={item.href}
                              onClick={() => setCetraOpen(false)}
                              className="group/item flex items-start gap-3 rounded-xl border border-[#e8e4f8] bg-white px-4 py-3.5 transition-[background-color,border-color] duration-[160ms] ease-[var(--ease-out-ui)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[#7C3AED] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#faf8ff]"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f0ff] text-[#7C3AED] transition-colors duration-[160ms] [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:bg-[#7C3AED] [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:text-white">
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center justify-between gap-2">
                                  <span className="block text-sm font-medium text-[#120726]">{item.label}</span>
                                  <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[#7C3AED] opacity-0 transition-[transform,opacity] duration-[160ms] ease-[var(--ease-out-ui)] motion-reduce:!translate-x-0 motion-reduce:!transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:translate-x-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:opacity-100" />
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
              className={`group relative inline-flex cursor-pointer items-center gap-1 transition-colors duration-200 ${servicesOpen ? 'text-[#311B92]' : '[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#311B92]'}`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Servicios
              <ChevronDown className={`motion-state-transform h-4 w-4 transition-transform duration-[180ms] ease-[var(--ease-in-out-ui)] ${servicesOpen ? 'rotate-180' : ''}`} />
              <span
                data-open={servicesOpen}
                className={`motion-nav-underline motion-state-transform pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left bg-[#7C3AED] transition-transform duration-[180ms] ease-[var(--ease-out-ui)] ${servicesOpen ? 'scale-x-100' : 'scale-x-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100'}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  variants={activePanelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-1/2 top-full z-50 mt-4 w-[min(1000px,calc(100vw-2rem))] origin-top overflow-hidden rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-2xl shadow-[#311B92]/10"
                >
                  {/* Halo violeta sutil de fondo */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7C3AED]/5 blur-3xl" />

                  <motion.div variants={activeListVariants} className="relative grid grid-cols-2 gap-8">
                    {serviceCategories
                      .filter((category) => category.title !== 'Alta complejidad')
                      .map((category) => (
                        <motion.div key={category.title} variants={activeListVariants} className="flex flex-col">
                          <motion.div variants={activeCardVariants} className="mb-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
                              {category.title}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                          </motion.div>
                          <div className="space-y-2 flex-1">
                            {category.items.map((item) => {
                              const Icon = serviceIcons[item.slug] ?? Activity;
                              return (
                                <motion.div key={item.slug} variants={activeCardVariants}>
                                  <Link
                                    href={item.slug}
                                    onClick={() => setServicesOpen(false)}
                                    className="group/item flex items-start gap-3 rounded-xl border border-[#e8e4f8] bg-white px-4 py-3.5 transition-[background-color,border-color] duration-[160ms] ease-[var(--ease-out-ui)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[#7C3AED] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#faf8ff]"
                                  >
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f0ff] text-[#7C3AED] transition-colors duration-[160ms] [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:bg-[#7C3AED] [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:text-white">
                                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="flex items-center justify-between gap-2">
                                        <span className="block text-sm font-medium text-[#120726]">
                                          {item.title}
                                        </span>
                                        <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[#7C3AED] opacity-0 transition-[transform,opacity] duration-[160ms] ease-[var(--ease-out-ui)] motion-reduce:!translate-x-0 motion-reduce:!transition-none [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:translate-x-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover/item:opacity-100" />
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
                    variants={activeCardVariants}
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
                      className="motion-link motion-press relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#120726]"
                    >
                      Ver todos los servicios
                      <ArrowRight className="motion-link-arrow h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/servicios/trasplante-pulmonar" className="cursor-pointer whitespace-nowrap transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#311B92]">Trasplante Pulmonar</Link>
          <Link href="/blog" className="cursor-pointer transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#311B92]">Blog</Link>
          <Link href="/contacto" className="cursor-pointer font-normal text-[#311B92] underline decoration-[#311B92]/30 underline-offset-8 transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#311B92]">Contacto</Link>
        </nav>

        {/* Derecha: CTA Desktop + Hamburger Mobile */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* El envoltorio controla la visibilidad: ButtonCTA lleva `inline-flex`
              en sus clases base y gana sobre un `hidden` pasado por className. */}
          <div className="hidden xl:flex">
            <ButtonCTA href={CONTACT_WHATSAPP} external size="sm">
              Agendar estudio
            </ButtonCTA>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className={`motion-state-transform block w-5 h-0.5 bg-[#1a0a3d] transition-transform duration-[180ms] ease-[var(--ease-in-out-ui)] origin-center ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#1a0a3d] transition-opacity duration-[140ms] ${open ? 'opacity-0' : ''}`} />
            <span className={`motion-state-transform block w-5 h-0.5 bg-[#1a0a3d] transition-transform duration-[180ms] ease-[var(--ease-in-out-ui)] origin-center ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — fuera del overflow-hidden del header */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={activeMobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute top-full left-0 flex max-h-[calc(100svh-5rem)] w-full flex-col gap-4 overflow-y-auto border-b border-gray-100 bg-white px-6 py-6 text-sm font-light tracking-wide text-gray-600 shadow-lg xl:hidden"
          >
          <div className="space-y-3">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between rounded-xl border border-transparent px-3 py-3 text-left text-gray-800 transition-colors active:bg-[#f3edff]"
              onClick={() => setCetraOpen((value) => !value)}
              aria-expanded={cetraOpen}
            >
              <span className="text-base font-medium">CETRA</span>
              <ChevronDown
                className={`motion-state-transform h-5 w-5 shrink-0 transition-transform duration-[180ms] ease-[var(--ease-in-out-ui)] ${cetraOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {cetraOpen && (
                <motion.div
                  variants={activeListVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="space-y-2 pl-2 pr-1 pt-2"
                >
                  {cetraMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.href} variants={activeCardVariants}>
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
              className="flex min-h-11 w-full items-center justify-between rounded-xl border border-transparent px-3 py-3 text-left text-gray-800 transition-colors active:bg-[#f3edff]"
              onClick={() => setServicesOpen((value) => !value)}
              aria-expanded={servicesOpen}
            >
              <span className="text-base font-medium">Servicios</span>
              <ChevronDown
                className={`motion-state-transform h-5 w-5 shrink-0 transition-transform duration-[180ms] ease-[var(--ease-in-out-ui)] ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {servicesOpen && (
                <motion.div
                  variants={activeListVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="space-y-4 pl-2 pr-1 pt-2"
                >
                  {serviceCategories
                    .filter((category) => category.title !== 'Alta complejidad')
                    .map((category) => (
                      <motion.div key={category.title} variants={activeListVariants} className="space-y-2">
                        <motion.p
                          variants={activeCardVariants}
                          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]"
                        >
                          {category.title}
                        </motion.p>
                        {category.items.map((item) => {
                          const Icon = serviceIcons[item.slug] ?? Activity;
                          return (
                            <motion.div key={item.slug} variants={activeCardVariants}>
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
                  <motion.div variants={activeCardVariants}>
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
            className="flex min-h-11 w-full items-center rounded-xl border border-transparent px-3 py-3 text-base font-medium text-gray-800 transition-colors active:bg-[#f3edff]"
            onClick={closeMobileMenu}
          >
            Trasplante Pulmonar
          </Link>
          <Link
            href="/blog"
            className="flex min-h-11 w-full items-center rounded-xl border border-transparent px-3 py-3 text-base font-medium text-gray-800 transition-colors active:bg-[#f3edff]"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="flex min-h-11 w-full items-center rounded-xl border border-transparent px-3 py-3 text-base font-medium text-[#311B92] transition-colors active:bg-[#f3edff]"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
