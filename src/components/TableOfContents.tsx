'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Buscar todos los h2 y h3 en el área de contenido MDX (que tiene la clase 'prose')
    const elements = Array.from(document.querySelectorAll('.prose h2, .prose h3'));
    
    const parsedHeadings = elements.map((elem) => {
      // Si el elemento no tiene id, generamos uno basado en su texto
      if (!elem.id) {
        elem.id = elem.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '') || '';
      }
      return {
        id: elem.id,
        text: elem.textContent || '',
        level: Number(elem.tagName.substring(1)),
      };
    });
    
    setHeadings(parsedHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block w-64 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-[#7C3AED]/10 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
      <h4 className="font-display text-sm font-semibold text-[#1a0a3d] tracking-widest uppercase mb-4">
        Contenido
      </h4>
      <ul className="space-y-3 border-l-2 border-gray-100">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`transition-colors duration-200 ${
              heading.level === 3 ? 'ml-4' : 'ml-0'
            }`}
          >
            <a
              href={`#${heading.id}`}
              className={`block -ml-[2px] pl-4 border-l-2 py-1 text-sm ${
                activeId === heading.id
                  ? 'border-[#7C3AED] text-[#7C3AED] font-medium'
                  : 'border-transparent text-gray-500 hover:text-[#1a0a3d]'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
