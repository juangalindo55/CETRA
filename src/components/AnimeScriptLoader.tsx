'use client';

import { useEffect } from 'react';

export default function AnimeScriptLoader() {
  useEffect(() => {
    // Load anime.js from npm package
    (async () => {
      try {
        const anime = await import('animejs');
        // Assign to window for global access
        (window as any).anime = anime.default || anime;
        console.log('✓ Anime.js loaded from npm package');
      } catch (error) {
        console.error('✗ Failed to load Anime.js:', error);
      }
    })();
  }, []);

  return null;
}
