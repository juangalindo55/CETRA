'use client';

import { useEffect, RefObject } from 'react';
import { animate, spring } from 'animejs';

export interface FadeInOptions {
  duration?: number;
  delay?: number;
}

export function useFadeInOnScroll(
  ref: RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
): void {
  const { delay = 0 } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 20 : 40;

    const reset = () => {
      element.style.opacity = '0';
      element.style.transform = `translateY(${translateDistance}px)`;
      element.style.willChange = 'transform, opacity';
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(element, {
            opacity: [0, 1],
            translateY: [translateDistance, 0],
            ease: spring({ stiffness: 120, damping: 14, mass: 1 }),
            delay,
            onComplete: () => {
              element.style.willChange = 'auto';
            },
          });
        } else {
          reset();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, delay]);
}
