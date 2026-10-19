import React, { useRef, useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  ariaLabel: string;
  itemWidth?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Carousel({
  children,
  ariaLabel,
  itemWidth = 280,
  autoPlay = false,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  className = '',
}: CarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  /* ---- Reduced motion ---- */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /* ---- Arrow state ---- */
  const updateArrows = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  /* ---- Pause when tab hidden ---- */
  useEffect(() => {
    const onVis = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* ---- Auto-play ---- */
  useEffect(() => {
    if (!autoPlay || reduced || isPaused) return;
    const el = railRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      const step = itemWidth + 16;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + step;

      if (next >= maxScroll - 8) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: next, behavior: 'smooth' });
      }
    }, autoPlayInterval);

    return () => window.clearInterval(id);
  }, [autoPlay, autoPlayInterval, itemWidth, reduced, isPaused]);

  const scroll = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const step = itemWidth + 16;
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
    // Restart auto-play countdown
    setIsPaused(false);
  };

  return (
    <div
      className={`carousel-wrapper ${className}`}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
      onFocus={pauseOnHover ? () => setIsPaused(true) : undefined}
      onBlur={pauseOnHover ? () => setIsPaused(false) : undefined}
      onTouchStart={pauseOnHover ? () => setIsPaused(true) : undefined}
      onTouchEnd={pauseOnHover ? () => setIsPaused(false) : undefined}
    >
      <div ref={railRef} className="vip-rail carousel-rail">
        {children}
      </div>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        disabled={!canPrev}
        className="carousel-arrow carousel-arrow--left"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        disabled={!canNext}
        className="carousel-arrow carousel-arrow--right"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
