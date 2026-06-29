'use client';

import { useEffect, RefObject } from 'react';
import { animate, stagger } from 'animejs';

export interface WaveOptions {
  duration?: number;
  staggerDelay?: number;
}

export function useWaveAnimation(
  ref: RefObject<HTMLElement | null>,
  options: WaveOptions = {}
): void {
  const { staggerDelay = 50 } = options;

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const getChips = () =>
      Array.from(container.querySelectorAll('.symptom-chip')) as HTMLElement[];

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
        } else {
          reset();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [ref, staggerDelay]);
}
