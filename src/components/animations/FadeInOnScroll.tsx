'use client';

import { useRef, type ReactNode } from 'react';
import { useFadeInOnScroll } from '@/hooks/animations/useFadeInOnScroll';

export interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export default function FadeInOnScroll({
  children,
  className = '',
  duration = 600,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(ref, { duration });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
