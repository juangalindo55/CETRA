'use client';

import { useEffect, RefObject } from 'react';

export interface WaveOptions {
  duration?: number;
  staggerDelay?: number;
}

export function useWaveAnimation(
  ref: RefObject<HTMLElement | null>,
  options: WaveOptions = {}
): void {
  const { duration = 600, staggerDelay = 60 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const container = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Find all symptom chips
    const chips = Array.from(
      container.querySelectorAll('.symptom-chip')
    ) as HTMLElement[];

    if (chips.length === 0) return;

    // Set initial state
    chips.forEach((chip) => {
      chip.style.opacity = '0';
      chip.style.transform = 'scale(0.8)';
      chip.style.willChange = 'transform, opacity';
    });

    // Observe container intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Dynamic import to work around Turbopack module resolution
          import('animejs').then(({ animate: animeAnimate, stagger }) => {
            // On desktop, use stagger from center; on mobile, standard left-to-right
            const staggerConfig = isMobile
              ? stagger(staggerDelay)
              : stagger(staggerDelay, { from: 'center' });

            animeAnimate(chips, {
              opacity: [0, 1],
              scale: [0.8, 1],
              duration,
              delay: staggerConfig,
              easing: 'easeOutQuad',
              complete: () => {
                chips.forEach((chip) => {
                  chip.style.willChange = 'auto';
                });
              },
            });
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [ref, duration, staggerDelay]);
}
