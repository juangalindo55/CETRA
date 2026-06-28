'use client';

import { useEffect, RefObject } from 'react';
import { animate, stagger } from 'animejs';

export interface StaggerOptions {
  duration?: number;
  staggerDelay?: number;
}

export function useStaggerCards(
  ref: RefObject<HTMLElement>,
  options: StaggerOptions = {}
): void {
  const { duration = 600, staggerDelay = 80 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const container = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 20 : 40;

    // Find all service cards
    const cards = Array.from(
      container.querySelectorAll('.service-card')
    ) as HTMLElement[];

    if (cards.length === 0) return;

    // Set initial state for all cards
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = `translateY(${translateDistance}px)`;
      card.style.willChange = 'transform, opacity';
    });

    // Observe container intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate({
            targets: cards,
            opacity: [0, 1],
            translateY: [translateDistance, 0],
            duration,
            delay: stagger(staggerDelay),
            easing: 'easeOutQuad',
            complete: () => {
              cards.forEach((card) => {
                card.style.willChange = 'auto';
              });
            },
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
