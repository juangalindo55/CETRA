'use client';

import { useEffect, RefObject } from 'react';
import * as anime from 'animejs';

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

  useEffect(() => {
    if (!ref.current || !enabled) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Check if device width is below minWidth (disable on mobile)
    const isBelowMinWidth = window.matchMedia(
      `(max-width: ${minWidth - 1}px)`
    ).matches;
    if (isBelowMinWidth) return;

    const element = ref.current;
    element.style.willChange = 'transform';

    // Infinite pulse animation
    const timeline = anime({
      targets: element,
      scale: [1, 1.04, 1],
      duration,
      easing: 'easeInOutQuad',
      loop: true,
    });

    return () => {
      timeline.pause();
      element.style.willChange = 'auto';
    };
  }, [ref, enabled, duration, minWidth]);
}
