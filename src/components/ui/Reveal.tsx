'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import { useFadeInOnScroll } from '@/hooks/animations/useFadeInOnScroll';

interface RevealProps {
  children: ReactNode;
  /** Retraso en ms antes de iniciar la animación al entrar al viewport. */
  delay?: number;
  variant?: 'content' | 'media';
  className?: string;
}

/**
 * Wrapper cliente para animar bloques de páginas server (fade-up una sola vez,
 * respeta prefers-reduced-motion vía useFadeInOnScroll).
 */
export default function Reveal({
  children,
  delay = 0,
  variant = 'content',
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(ref, { delay, variant });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
