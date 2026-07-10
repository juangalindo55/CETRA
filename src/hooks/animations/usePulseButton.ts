'use client';

import { useEffect, RefObject } from 'react';
import { animate } from 'animejs';
import { useReducedMotion } from './useReducedMotion';

export interface PulseOptions {
  enabled?: boolean;
  duration?: number;
  minWidth?: number;
}

export function usePulseButton(
  ref: RefObject<HTMLElement | null>,
  options: PulseOptions = {}
): void {
  const { enabled = true, duration = 1800, minWidth = 768 } = options;
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const element = ref.current;
    if (shouldReduceMotion) {
      element.style.transform = 'none';
      element.style.willChange = 'auto';
      return;
    }

    const isBelowMinWidth = window.matchMedia(
      `(max-width: ${minWidth - 1}px)`
    ).matches;
    if (isBelowMinWidth) return;

    element.style.willChange = 'transform';

    const anim = animate(element, {
      scale: [1, 1.06, 1],
      duration,
      ease: 'inOutSine',
      loop: true,
    });

    return () => {
      anim.pause();
      element.style.willChange = 'auto';
    };
  }, [ref, enabled, duration, minWidth, shouldReduceMotion]);
}
