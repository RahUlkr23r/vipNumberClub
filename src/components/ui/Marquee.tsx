import React from 'react';

export function Marquee({
  children,
  speed = 40,
  className = '',
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
      </div>
    </div>
  );
}
