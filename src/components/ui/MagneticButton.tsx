import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function MagneticButton({
  children,
  className = '',
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useMagnetic<HTMLDivElement>(strength);
  return (
    <div ref={ref} className={`magnetic-button ${className}`}>
      {children}
    </div>
  );
}
