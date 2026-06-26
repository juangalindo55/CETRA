import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonCTAVariant = 'primary' | 'secondary';
type ButtonCTASize = 'sm' | 'md' | 'lg';

interface ButtonCTAProps {
  /** Destino. Rutas internas empiezan con "/"; usa external para enlaces web externos. */
  href: string;
  children: ReactNode;
  /** Icono opcional a la izquierda del texto (ej. <ArrowRight className="h-4 w-4" />). */
  icon?: ReactNode;
  variant?: ButtonCTAVariant;
  size?: ButtonCTASize;
  /** true → abre en pestaña nueva con rel seguro (WhatsApp, Google Maps, etc.). */
  external?: boolean;
  /** Clases extra para casos puntuales (ancho completo, márgenes, visibilidad responsive). */
  className?: string;
  onClick?: () => void;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:-translate-y-0.5';

const variants: Record<ButtonCTAVariant, string> = {
  primary:
    'bg-[#311B92] text-white shadow-lg shadow-[#311B92]/20 hover:bg-[#1a0a5e]',
  secondary:
    'border border-[#d8c9ff] bg-white text-[#120726] hover:border-[#b99cff] hover:bg-[#fcfbff]',
};

const sizes: Record<ButtonCTASize, string> = {
  sm: 'px-6 py-2.5 text-sm font-medium',
  md: 'px-8 py-4 text-sm font-semibold',
  lg: 'px-10 py-4 font-light tracking-wide',
};

/**
 * CTA unificado de CETRA. Sustituye las múltiples recetas de "pill" violeta
 * que existían dispersas por las páginas (ver DESIGN_SYSTEM.md → Botones).
 */
export default function ButtonCTA({
  href,
  children,
  icon,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  onClick,
}: ButtonCTAProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // Rutas internas → next/link; tel:/mailto: u otros → ancla simple.
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {content}
    </a>
  );
}
