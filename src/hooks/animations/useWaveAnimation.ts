'use client';

import { useEffect, RefObject } from 'react';
import { animate, stagger } from 'animejs';
import { useReducedMotion } from './useReducedMotion';

export interface WaveOptions {
  staggerDelay?: number;
}

export function useWaveAnimation(
  ref: RefObject<HTMLElement | null>,
  options: WaveOptions = {}
): void {
  const { staggerDelay = 50 } = options;
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const getChips = () =>
      Array.from(container.querySelectorAll('.symptom-chip')) as HTMLElement[];

    if (shouldReduceMotion) {
      getChips().forEach((chip) => {
        chip.style.opacity = '1';
        chip.style.transform = 'none';
        chip.style.willChange = 'auto';
      });
      return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const reset = () => {
      getChips().forEach((chip) => {
        chip.style.opacity = '0';
        chip.style.transform = 'scale(0.88) translateY(10px)';
        chip.style.willChange = 'transform, opacity';
      });
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const chips = getChips();
        if (chips.length === 0) return;

        if (entry.isIntersecting) {
          observer.unobserve(container);
          const staggerConfig = isMobile
            ? stagger(staggerDelay)
            : stagger(staggerDelay, { from: 'center' });

          animate(chips, {
            opacity: [0, 1],
            scale: [0.88, 1],
            translateY: [10, 0],
            duration: 650,
            ease: 'outExpo',
            delay: staggerConfig,
            onComplete: () => {
              chips.forEach((chip) => {
                chip.style.willChange = 'auto';
              });
            },
          });
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [ref, staggerDelay, shouldReduceMotion]);
}
