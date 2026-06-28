'use client';

import { useEffect, RefObject } from 'react';

export interface FadeInOptions {
  duration?: number;
  delay?: number;
}

export function useFadeInOnScroll(
  ref: RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
): void {
  const { duration = 600, delay = 0 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 20 : 40;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = `translateY(${translateDistance}px)`;
    element.style.willChange = 'transform, opacity';

    // Observe intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Dynamic import to work around Turbopack module resolution
          import('animejs').then(({ animate: animeAnimate }) => {
            animeAnimate(element, {
              opacity: [0, 1],
              translateY: [translateDistance, 0],
              duration,
              delay,
              easing: 'easeOutQuad',
              complete: () => {
                element.style.willChange = 'auto';
              },
            });
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, duration, delay]);
}
