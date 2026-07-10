import Image, { type ImageProps } from 'next/image';
import React from 'react';

interface LogoProps extends Omit<ImageProps, 'alt' | 'src'> {
  className?: string;
}

export default function Logo({
  className = 'w-64 h-64',
  width,
  height,
  ...props
}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="CETRA Logo"
      className={className}
      width={width ?? 256}
      height={height ?? 256}
      priority
      style={{
        cursor: 'default',
        display: 'block',
      }}
      {...props}
    />
  );
}
