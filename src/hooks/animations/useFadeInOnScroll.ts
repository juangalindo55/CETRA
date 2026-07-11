'use client';

import { useLayoutEffect, RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface FadeInOptions {
  delay?: number;
  variant?: 'content' | 'media';
}

export function useFadeInOnScroll(
  ref: RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
): void {
  const { delay = 0, variant = 'content' } = options;
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    if (shouldReduceMotion) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.style.willChange = 'auto';

      return () => {
        element.style.opacity = '';
        element.style.transform = '';
        element.style.willChange = 'auto';
      };
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 8 : 12;
    const initialTransform =
      variant === 'media'
        ? 'scale(1.02)'
        : `translateY(${translateDistance}px)`;
    const duration = variant === 'media' ? 600 : 440;
    let activeAnimation: Animation | null = null;

    const reset = () => {
      element.style.opacity = '0';
      element.style.transform = initialTransform;
      element.style.willChange = 'auto';
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          element.style.willChange = 'transform, opacity';
          activeAnimation = element.animate(
            [
              { opacity: 0, transform: initialTransform },
              { opacity: 1, transform: 'none' },
            ],
            {
              duration,
              delay,
              easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
              fill: 'both',
            }
          );

          activeAnimation.onfinish = () => {
            const finishedAnimation = activeAnimation;
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.willChange = 'auto';
            activeAnimation = null;
            finishedAnimation?.cancel();
          };
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      activeAnimation?.cancel();
      element.style.opacity = '';
      element.style.transform = '';
      element.style.willChange = 'auto';
    };
  }, [ref, delay, shouldReduceMotion, variant]);
}
