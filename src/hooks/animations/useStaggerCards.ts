'use client';

import { useEffect, RefObject } from 'react';
import { animate, stagger, spring } from 'animejs';
import { useReducedMotion } from './useReducedMotion';

export interface StaggerOptions {
  staggerDelay?: number;
  itemSelector?: string;
}

export function useStaggerCards(
  ref: RefObject<HTMLElement | null>,
  options: StaggerOptions = {}
): void {
  const { staggerDelay = 80, itemSelector = '.service-card' } = options;
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const getCards = () =>
      Array.from(container.querySelectorAll(itemSelector)) as HTMLElement[];

    if (shouldReduceMotion) {
      getCards().forEach((card) => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.style.willChange = 'auto';
      });
      return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const translateDistance = isMobile ? 20 : 40;

    const reset = () => {
      getCards().forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = `translateY(${translateDistance}px)`;
        card.style.willChange = 'transform, opacity';
      });
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const cards = getCards();
        if (cards.length === 0) return;

        if (entry.isIntersecting) {
          observer.unobserve(container);
          animate(cards, {
            opacity: [0, 1],
            translateY: [translateDistance, 0],
            ease: spring({ stiffness: 130, damping: 15, mass: 1 }),
            delay: stagger(staggerDelay),
            onComplete: () => {
              cards.forEach((card) => {
                card.style.willChange = 'auto';
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
  }, [ref, staggerDelay, itemSelector, shouldReduceMotion]);
}
