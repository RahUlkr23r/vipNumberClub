import React from 'react';
import { useTilt } from '../../hooks/useTilt';

export function TiltCard({
  children,
  maxTilt = 8,
  className = '',
}: {
  children: React.ReactNode;
  maxTilt?: number;
  className?: string;
}) {
  const ref = useTilt<HTMLDivElement>(maxTilt);
  return (
    <div ref={ref} className={`tilt-card ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
}
