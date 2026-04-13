import React from 'react';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({
  className = 'w-64 h-64',
  width,
  height,
  ...props
}: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="CETRA Logo"
      className={className}
      style={{
        width: width ?? undefined,
        height: height ?? undefined,
        cursor: 'default',
        display: 'block',
      }}
      {...props}
    />
  );
}
