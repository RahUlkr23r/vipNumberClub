import React, { useEffect, useRef, useState } from 'react';

export function AnimatedText({
  text,
  className = '',
  stagger = 60,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`animated-text ${className}`}>
      {text.split(' ').map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`animated-word ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: `${i * stagger}ms` }}
        >
          {word}
          {i < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}
