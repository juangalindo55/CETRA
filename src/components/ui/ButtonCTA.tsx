'use client';

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
  'motion-press inline-flex items-center justify-center gap-2';

const variants: Record<ButtonCTAVariant, string> = {
  primary:
    'bg-violet-heritage text-white [@media(hover:hover)_and_(pointer:fine)]:hover:bg-ink',
  secondary:
    'border border-violet-heritage text-violet-heritage [@media(hover:hover)_and_(pointer:fine)]:hover:bg-lavender',
};

const sizes: Record<ButtonCTASize, string> = {
  sm: 'min-h-11 px-6 py-2.5 text-sm font-semibold',
  md: 'min-h-12 px-7 py-3.5 text-sm font-semibold',
  lg: 'min-h-12 px-9 py-3.5 text-sm font-semibold tracking-wide',
};

/**
 * CTA unificado de CETRA — lenguaje cuadrado editorial
 * (ver DESIGN_SYSTEM.md → Botones).
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
