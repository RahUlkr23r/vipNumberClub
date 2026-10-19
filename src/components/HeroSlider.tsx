import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParallax } from '../hooks/useParallax';

const QUICK_SEARCHES = ['786', '000', '8055', '99999', '1111'];

const TRUST_BADGES = [
  { icon: '⭐', text: 'Since 2009' },
  { icon: '🛡️', text: '100% TRAI Compliant' },
  { icon: '⚡', text: 'Same-Day Activation' },
];

const HERO_STATS = [
  { value: '3L+', label: 'VIP Numbers' },
  { value: '16K+', label: 'Happy Clients' },
  { value: '24×7', label: 'Live Support' },
  { value: '70+', label: 'Expert Team' },
];

const SUPER_SALE_ITEMS = [
  {
    number: '8055 8 8055 3',
    originalPrice: '₹45,625',
    salePrice: '₹36,500',
    discount: '20%',
    href: '/search-results?q=8055',
  },
  {
    number: '91 383 22222',
    originalPrice: '₹28,000',
    salePrice: '₹21,000',
    discount: '25%',
    href: '/search-results?q=22222',
  },
  {
    number: '98765 00786',
    originalPrice: '₹65,000',
    salePrice: '₹52,000',
    discount: '20%',
    href: '/search-results?q=786',
  },
  {
    number: '600002 1008',
    originalPrice: '₹35,000',
    salePrice: '₹26,250',
    discount: '25%',
    href: '/search-results?q=1008',
  },
];

export const HeroSlider: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [saleIndex, setSaleIndex] = useState(0);

  const blob1Ref = useParallax<HTMLDivElement>(0.08);
  const blob2Ref = useParallax<HTMLDivElement>(0.14);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSaleIndex((prev) => (prev + 1) % SUPER_SALE_ITEMS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const q = query.trim();
      navigate(q ? `/search-results?q=${encodeURIComponent(q)}` : '/search-results');
    },
    [query, navigate],
  );

  const handleQuickSearch = (term: string) => {
    navigate(`/search-results?q=${encodeURIComponent(term)}`);
  };

  const currentSale = SUPER_SALE_ITEMS[saleIndex];

  return (
    <section className="hero-vip" aria-labelledby="hero-title">
      {/* Background layers */}
      <div className="hero-vip-bg">
        <div className="hero-vip-grid" aria-hidden="true" />
        <div ref={blob1Ref} aria-hidden="true" className="hero-vip-blob hero-vip-blob--1" />
        <div ref={blob2Ref} aria-hidden="true" className="hero-vip-blob hero-vip-blob--2" />
        <div className="hero-vip-vignette" aria-hidden="true" />
      </div>

      <div className="container hero-vip-inner">
        <div className="hero-vip-grid-layout">
          {/* LEFT: Content */}
          <div className={`hero-vip-content ${mounted ? 'is-visible' : ''}`}>
            <div className="hero-vip-badges">
              {TRUST_BADGES.map((badge, i) => (
                <span
                  key={badge.text}
                  className="hero-vip-badge"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </div>

            <p className="hero-vip-eyebrow">
              <span aria-hidden="true">✦</span>
              India&apos;s Biggest VIP Number Provider
            </p>

            <h1 id="hero-title" className="hero-vip-title">
              Buy <span className="hero-vip-title-gold">VIP &amp; Fancy</span>
              <br />
              Mobile Numbers
              <br />
              <span className="hero-vip-title-accent">Online in India</span>
            </h1>

            <p className="hero-vip-subtitle">
              Stand out from the crowd with exclusive, easy-to-remember, premium mobile
              numbers.{' '}
              <span className="hero-vip-subtitle-strong">
                Your identity deserves a touch of luxury.
              </span>
            </p>

            <form onSubmit={handleSearch} className="hero-vip-search" role="search">
              <div className="hero-vip-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Your Number Here..."
                className="hero-vip-search-input"
                aria-label="Search VIP numbers"
              />
              <button type="submit" className="hero-vip-search-btn">
                <span>Search</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>

            <div className="hero-vip-quick">
              <span className="hero-vip-quick-label">Try:</span>
              {QUICK_SEARCHES.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => handleQuickSearch(term)}
                  className="hero-vip-quick-chip"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="hero-vip-stats">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="hero-vip-stat">
                  <div className="hero-vip-stat-value">{stat.value}</div>
                  <div className="hero-vip-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Super Sale Card */}
          <div className={`hero-vip-sale ${mounted ? 'is-visible' : ''}`}>
            <a href={currentSale.href} className="hero-vip-sale-card">
              <div className="hero-vip-sale-glow" aria-hidden="true" />

              <div className="hero-vip-sale-badge">
                <span className="hero-vip-sale-badge-dot" aria-hidden="true" />
                HOT DEAL
              </div>

              <div className="hero-vip-phone">
                <div className="hero-vip-phone-notch" aria-hidden="true" />
                <div className="hero-vip-phone-screen">
                  <div className="hero-vip-phone-label">Super Sale Zone</div>
                  <div className="hero-vip-phone-number">{currentSale.number}</div>
                  <div className="hero-vip-phone-prices">
                    <span className="hero-vip-phone-price-old">
                      {currentSale.originalPrice}
                    </span>
                    <span className="hero-vip-phone-price-new">
                      {currentSale.salePrice}
                    </span>
                  </div>
                  <div className="hero-vip-phone-save">Save {currentSale.discount}</div>
                </div>
              </div>

              <div className="hero-vip-sale-cta">
                <span>View All Deals</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </a>

            <div className="hero-vip-float hero-vip-float--1" aria-hidden="true">
              <span>🎯</span> Featured
            </div>
            <div className="hero-vip-float hero-vip-float--2" aria-hidden="true">
              <span>⚡</span> Instant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
