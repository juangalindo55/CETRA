'use client';

import { useEffect, useState } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const frame = requestAnimationFrame(() => {
      // El contenido MDX ya está montado cuando se recopilan sus encabezados.
      const elements = Array.from(document.querySelectorAll('.prose h2, .prose h3'));
      const parsedHeadings = elements.map((elem) => {
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
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '0px 0px -80% 0px' }
      );

      elements.forEach((elem) => observer?.observe(elem));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  if (headings.length === 0) return null;

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block w-64">
      <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric mb-5">
        Contenido
      </h4>
      <ul className="space-y-3 border-l border-lavender-line">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`transition-colors duration-200 ${
              heading.level === 3 ? 'ml-4' : 'ml-0'
            }`}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(heading.id, e)}
              className={`block -ml-px pl-4 border-l py-1 text-sm transition-colors ${
                activeId === heading.id
                  ? 'border-violet-electric text-violet-heritage font-semibold'
                  : 'border-transparent text-gray-500 hover:text-ink'
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
