'use client';

import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/animations/useReducedMotion';

interface MotionSequenceProps {
  children: ReactNode;
  className?: string;
}

/**
 * Secuencia explicativa: dibuja su eje y revela los pasos una sola vez.
 * No bloquea interacción y reduce movimiento a opacidad cuando así se solicita.
 */
export default function MotionSequence({ children, className = '' }: MotionSequenceProps) {
  const ref = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLLIElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const list = ref.current;
    const line = lineRef.current;
    if (!list || !line) return;

    const items = Array.from(list.children).filter(
      (node): node is HTMLElement => node instanceof HTMLElement && node.dataset.motionItem === 'true'
    );
    const activeAnimations: Animation[] = [];
    const releaseAnimation = (animation: Animation) => {
      const index = activeAnimations.indexOf(animation);
      if (index !== -1) activeAnimations.splice(index, 1);
      animation.cancel();
    };

    if (shouldReduceMotion) {
      line.style.opacity = '1';
      line.style.transform = 'none';
      items.forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'none';
      });

      return () => {
        line.style.opacity = '';
        line.style.transform = '';
        items.forEach((item) => {
          item.style.opacity = '';
          item.style.transform = '';
        });
      };
    }

    line.style.opacity = '1';
    line.style.transform = 'scaleX(0)';
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(8px)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(list);

        const lineAnimation = line.animate(
          [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
          {
            duration: 440,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
            fill: 'both',
          }
        );
        activeAnimations.push(lineAnimation);
        lineAnimation.onfinish = () => {
          line.style.transform = 'scaleX(1)';
          releaseAnimation(lineAnimation);
        };

        items.forEach((item, index) => {
          const animation = item.animate(
            [
              { opacity: 0, transform: 'translateY(8px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 300,
              delay: 80 + index * 45,
              easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
              fill: 'both',
            }
          );
          activeAnimations.push(animation);
          animation.onfinish = () => {
            item.style.opacity = '1';
            item.style.transform = 'none';
            releaseAnimation(animation);
          };
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(list);
    return () => {
      observer.disconnect();
      activeAnimations.forEach((animation) => animation.cancel());
      line.style.opacity = '';
      line.style.transform = '';
      items.forEach((item) => {
        item.style.opacity = '';
        item.style.transform = '';
      });
    };
  }, [shouldReduceMotion]);

  return (
    <ol ref={ref} data-motion-sequence className={`relative ${className}`}>
      <li
        ref={lineRef}
        aria-hidden="true"
        role="presentation"
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-white/35"
      />
      {children}
    </ol>
  );
}
