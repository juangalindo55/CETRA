'use client';

import Image from 'next/image';
import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  imageType?: 'photo' | 'illustration' | 'infographic';
}

export function SectionLayout({
  children,
  imageUrl,
  imageAlt,
  reversed = false,
  imageType = 'photo',
}: SectionLayoutProps) {
  const getImageBgClass = () => {
    switch (imageType) {
      case 'illustration':
        return 'bg-[#f5f0ff]';
      case 'infographic':
        return 'bg-[#ece7fb]';
      default:
        return 'bg-[#f4f4f5]';
    }
  };

  const textSection = (
    <div className="flex flex-col justify-center">
      <div className="prose prose-lg max-w-none text-gray-700
        prose-headings:font-display prose-headings:text-[#1a0a3d] prose-headings:mt-0 prose-headings:mb-4
        prose-h2:text-3xl prose-h3:text-xl
        prose-p:mb-6 prose-p:leading-relaxed
        prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
        prose-li:mb-4
        prose-strong:text-[#7C3AED]">
        {children}
      </div>
    </div>
  );

  const imageSection = (
    <div className={`relative h-full min-h-[500px] rounded-2xl overflow-hidden ${getImageBgClass()}`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      {reversed ? (
        <>
          {imageSection}
          {textSection}
        </>
      ) : (
        <>
          {textSection}
          {imageSection}
        </>
      )}
    </div>
  );
}
