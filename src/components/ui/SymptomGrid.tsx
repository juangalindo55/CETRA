'use client';

import { useRef } from 'react';
import { useWaveAnimation } from '@/hooks/animations/useWaveAnimation';

interface SymptomGridProps {
  symptoms: string[];
}

export default function SymptomGrid({ symptoms }: SymptomGridProps) {
  const chipContainerRef = useRef<HTMLDivElement>(null);
  useWaveAnimation(chipContainerRef);

  return (
    <div ref={chipContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {symptoms.map((symptom) => (
        <div
          key={symptom}
          className="symptom-chip flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-violet-electric/20 hover:shadow-sm transition-all duration-300"
        >
          <div className="w-2 h-2 bg-violet-electric rounded-full flex-shrink-0 mt-1.5" />
          <span className="text-gray-700 text-sm leading-relaxed">{symptom}</span>
        </div>
      ))}
    </div>
  );
}
