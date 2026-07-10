'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function AnimeTest() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ballRef.current) return;
    animate(ballRef.current, {
      translateX: [-200, 200, -200],
      scale: [0.5, 1.5, 0.5],
      rotate: [0, 720],
      duration: 2000,
      loop: true,
      ease: 'inOutSine',
    });
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 z-[9999] -translate-x-1/2 pointer-events-none">
      <div
        ref={ballRef}
        style={{ width: 80, height: 80, borderRadius: '50%', background: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 10 }}
      >
        ANIME.JS
      </div>
    </div>
  );
}
