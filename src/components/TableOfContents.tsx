'use client';

import { useEffect, useState } from 'react';

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>([]);

  useEffect(() => {
    const temp = document.createElement('div');
    temp.innerHTML = content;
    const h2s = temp.querySelectorAll('h2');
    const items = Array.from(h2s).map((h, i) => ({
      id: `heading-${i}`,
      text: h.textContent || '',
    }));
    setHeadings(items);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-3">
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className="block text-sm text-gray-600 hover:text-[#311B92] transition-colors pl-3 border-l-2 border-transparent hover:border-[#7C3AED]"
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}
