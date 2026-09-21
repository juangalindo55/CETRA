'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '@/lib/blog';

interface PostFAQProps {
  faqs: FAQItem[];
  title?: string;
  kicker?: string;
}

export default function PostFAQ({
  faqs,
  title = 'Preguntas frecuentes sobre este tema',
  kicker = 'Respuestas clínicas directas',
}: PostFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="my-16 rounded-3xl border border-lavender-line bg-lavender/40 p-6 sm:p-10">
      <div className="flex items-center gap-2 mb-2">
        <HelpCircle className="h-4 w-4 text-violet-electric" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
          {kicker}
        </span>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl font-light text-ink tracking-tight mb-8">
        {title}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const headingId = `faq-heading-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-lavender-line bg-white transition-all duration-200 hover:border-violet-soft/60"
            >
              <button
                type="button"
                id={headingId}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-violet-electric"
              >
                <span className="font-display text-base sm:text-lg font-medium text-ink pr-4">
                  {faq.question}
                </span>
                <span
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender text-violet-electric transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-violet-electric text-white' : ''
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className="border-t border-lavender-line/70 px-5 pb-6 pt-4 sm:px-6"
                >
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
