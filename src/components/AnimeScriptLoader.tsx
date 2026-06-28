'use client';

import { useEffect } from 'react';

export default function AnimeScriptLoader() {
  useEffect(() => {
    // Check if anime is already loaded
    if (typeof window.anime === 'function') {
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/animejs@4.5.0/lib/anime.min.js';
    script.async = false;
    script.onload = () => {
      console.log('✓ Anime.js loaded successfully');
    };
    script.onerror = () => {
      console.error('✗ Failed to load Anime.js from CDN');
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
