import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { TopHeader } from '../components/TopHeader';
import { Reveal } from '../components/ui/Reveal';

const CDN = 'https://www.vipnumbersclub.com';

/* =========================================
   Content data (module scope)
   ========================================= */

const OFFICE_SLIDES = [
  {
    image: `${CDN}/assets/front/img/about-page.png`,
    badge: 'Jaipur Corporate HQ',
    title: 'Jaipur Headquarters & Reception',
    description: '110, First Floor, City Centre, Sansar Chandra Road, Jaipur — Established 2009',
    alt: 'VIP Numbers Club Jaipur Corporate Office Headquarters',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    badge: 'Private Concierge',
    title: 'Executive VIP Consultation Lounge',
    description: 'Dedicated private suites for high-net-worth clients, celebrity allocations & bespoke vanity number advisory',
    alt: 'Executive VIP Consultation Lounge',
  },
  {
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    badge: 'Operations Hub',
    title: '70+ Expert Operations & Verification Floor',
    description: 'Specialized telecom teams processing Pan-India MNP porting, inventory checks & fast UPC generation',
    alt: '70-member operations and telecommunications verification floor',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    badge: 'Registered Facility',
    title: 'Corporate Center & Facility Campus',
    description: 'Modern telecommunications corporate infrastructure serving over 16,000 satisfied clients nationwide',
    alt: 'VIP Numbers Club Corporate Center',
  },
  {
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    badge: 'Security & Legal',
    title: 'TRAI Compliance & Secure Data Room',
    description: 'End-to-end legal ownership transfer with strict adherence to telecom guidelines and complete confidentiality',
    alt: 'Secure telecom KYC data center and compliance operations',
  },
];

const HIGHLIGHTS = [
  { title: 'Physical Presence in Jaipur', desc: 'Unlike anonymous online sellers, we are a rooted organization. Our headquarters in Jaipur serves as a testament to our permanence and accountability.' },
  { title: 'Verified Ownership', desc: 'Every number in our inventory is verified and ready for immediate legal transfer. Your data and investment are secure above all else.' },
  { title: 'End-to-End Handholding', desc: 'From selecting your number to final activation on Airtel, Jio, Vi, or BSNL — our team manages the entire lifecycle of the purchase.' },
  { title: 'Legacy of Privacy', desc: 'Our clients value discretion. Every transaction is handled with the highest confidentiality, ensuring your premium identity stays private.' },
];

const STATS = [
  { value: '2009', label: 'Founded in Jaipur' },
  { value: '70+', label: 'Expert Team Members' },
  { value: '16K+', label: 'Numbers Delivered' },
  { value: '100%', label: 'TRAI Compliant' },
];

const SLIDE_DURATION = 5000;

/* =========================================
   Page Component
   ========================================= */

export const AboutUsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = OFFICE_SLIDES.length;

  /* ---- Detect reduced motion ---- */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /* ---- Auto-play with progress bar ---- */
  useEffect(() => {
    if (isPaused || reducedMotion) {
      setProgress(0);
      progressRef.current = 0;
      return;
    }

    lastTimeRef.current = performance.now();

    const tick = (now: number) => {
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      progressRef.current += delta;
      const pct = Math.min(1, progressRef.current / SLIDE_DURATION);
      setProgress(pct);

      if (pct >= 1) {
        progressRef.current = 0;
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setProgress(0);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, reducedMotion, totalSlides]);

  /* ---- Pause when tab hidden ---- */
  useEffect(() => {
    const onVis = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* ---- Navigation ---- */
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    progressRef.current = 0;
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    progressRef.current = 0;
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    progressRef.current = 0;
    setProgress(0);
  }, [totalSlides]);

  /* ---- Keyboard navigation ---- */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  /* ---- Touch swipe ---- */
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prevSlide();
      else nextSlide();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <div className="about-us-page">
      <TopHeader title="About VIP Numbers Club" />

      {/* ========== 1. HERO OFFICE CAROUSEL ========== */}
      <section className="about-hero">
        <div className="container">
          <Reveal>
            <div
              ref={containerRef}
              className="about-hero-banner about-hero-banner--large"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              onKeyDown={onKeyDown}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              role="region"
              aria-roledescription="carousel"
              aria-label="VIP Numbers Club Jaipur Office Carousel"
              tabIndex={0}
            >
              {/* Slides */}
              {OFFICE_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className={`about-hero-slide ${isActive ? 'is-active' : ''}`}
                    aria-hidden={!isActive}
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${totalSlides}: ${slide.title}`}
                  >
                    <div className="about-hero-img-wrap">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                      />
                    </div>
                    <div className="about-hero-overlay" aria-hidden="true" />

                    {/* Caption */}
                    <div className="about-hero-caption">
                      <div className="about-hero-caption-inner">
                        <span className="about-hero-badge">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {slide.badge}
                        </span>
                        <h2 className="about-hero-slide-title">{slide.title}</h2>
                        <p className="about-hero-slide-desc">{slide.description}</p>
                      </div>

                      {/* Counter */}
                      <div className="about-hero-counter" aria-hidden="true">
                        <span className="about-hero-counter-current">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="about-hero-counter-sep">/</span>
                        <span className="about-hero-counter-total">
                          {String(totalSlides).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Arrows */}
              <button
                type="button"
                className="about-hero-nav-btn about-hero-nav-btn--prev"
                onClick={prevSlide}
                aria-label="Previous office photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                className="about-hero-nav-btn about-hero-nav-btn--next"
                onClick={nextSlide}
                aria-label="Next office photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Dots + Progress */}
              <div className="about-hero-dots" role="tablist" aria-label="Slide indicators">
                {OFFICE_SLIDES.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    className={`about-hero-dot ${dotIndex === currentSlide ? 'is-active' : ''}`}
                    onClick={() => goToSlide(dotIndex)}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                    aria-selected={dotIndex === currentSlide}
                    role="tab"
                  >
                    {dotIndex === currentSlide && (
                      <span
                        className="about-hero-dot-fill"
                        style={{ transform: `scaleX(${progress})` }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== 2. MAIN CONTENT (unchanged below) ========== */}
      <section className="vip-section">
        <div className="container">
          <div className="about-content">
            <Reveal>
              <p className="about-eyebrow">Defining Digital Prestige Since 2009</p>
              <h1 className="about-title">
                India&apos;s Definitive Leader in{' '}
                <span className="about-title-accent">VIP Mobile Numbers</span>
              </h1>
              <p className="about-lead">
                In an era where your mobile number is more than just a contact — it is your
                digital identity, your brand&apos;s first impression, and a symbol of your
                status — <strong>VIP Numbers Club</strong> stands as the definitive leader in
                VIP Mobile Number consultancy. Based in the heart of the Pink City, Jaipur,
                we have spent the last 16 years curating the most exclusive, memorable, and
                powerful mobile numbers for India&apos;s elite.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="about-stats">
                {STATS.map((stat) => (
                  <div key={stat.label} className="about-stat">
                    <div className="about-stat-value">{stat.value}</div>
                    <div className="about-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="about-block">
                <h2 className="about-h2">Our Legacy: 16 Years of Excellence</h2>
                <p>
                  Trust is not built overnight; it is forged over decades of consistent
                  service. Since our inception in 2009, we have transitioned from a local
                  mobile service to India&apos;s most trusted marketplace for premium
                  telecommunication identities.
                </p>
                <p>
                  We understand that a VIP number is an investment. Whether it is a{' '}
                  <strong>&quot;Seven Series&quot;</strong> repetitive sequence, a{' '}
                  <strong>&quot;Royal Mirror&quot;</strong> pattern, or a{' '}
                  <strong>&quot;Date of Birth&quot;</strong> specialty number, we have
                  successfully delivered over <strong>16,000+ connections</strong> to
                  satisfied clients across the nation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="about-block">
                <h2 className="about-h2">The Power of 70: A Team Like No Other</h2>
                <p>
                  While many in this industry operate as solo brokers, we believe in the
                  power of an institution. Our strength lies in our dedicated team of{' '}
                  <strong>70 professionals</strong>. This is not just a business; it is a
                  full-scale operation designed to provide you with a seamless experience.
                </p>
                <div className="about-team-grid">
                  <div className="about-team-card">
                    <div className="about-team-icon" aria-hidden="true">📞</div>
                    <h3>Expert Consultants</h3>
                    <p>We help you choose a number that aligns with your numerological preferences or business branding.</p>
                  </div>
                  <div className="about-team-card">
                    <div className="about-team-icon" aria-hidden="true">📋</div>
                    <h3>Documentation Specialists</h3>
                    <p>We handle complex Porting and MNP processes, ensuring 100% TRAI-compliant legal transfer of ownership.</p>
                  </div>
                  <div className="about-team-card">
                    <div className="about-team-icon" aria-hidden="true">🛟</div>
                    <h3>After-Sales Support</h3>
                    <p>Our relationship doesn&apos;t end when the SIM is activated. Any technical or administrative query is resolved instantly.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="about-block">
                <h2 className="about-h2">Why Choose Us</h2>
                <p>In a market often clouded by uncertainty, we bring transparency and security. Here is why thousands of high-net-worth individuals, celebrities, and business tycoons choose us:</p>
                <div className="about-highlights">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h.title} className="about-highlight">
                      <div className="about-highlight-check" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <div>
                        <h3>{h.title}</h3>
                        <p>{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="about-block">
                <h2 className="about-h2">Our Philosophy: Your Identity, Our Passion</h2>
                <p>
                  We believe that a phone number should be as unique as the person who owns it. In a world of ten-digit strings, we provide the <strong>&quot;Golden&quot;</strong> exceptions. We don&apos;t just sell numbers; we help you craft a legacy. A VIP number from VIP Numbers Club is easy to remember for your clients, prestigious for your social circle, and an asset that appreciates in value over time.
                </p>
                <p>
                  As we look toward the future, our mission remains the same: to provide the most exclusive telecommunication assets in India with the integrity of a 16-year-old institution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="about-block">
                <h2 className="about-h2">Join the Elite</h2>
                <p>
                  Whether you are a business looking to increase your marketing recall or an individual looking to stand out, your journey toward a premium identity starts here. Backed by 16 years of experience and a team of 70 experts, we are ready to serve you.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="about-hq">
                <h3 className="about-hq-title">Corporate Headquarters &amp; Registration</h3>
                <div className="about-hq-grid">
                  <div>
                    <div className="about-hq-label">Entity</div>
                    <div className="about-hq-value">VIP Numbers Club</div>
                    <div className="about-hq-sub">GSTIN: {SITE_INFO.gstNumber}</div>
                  </div>
                  <div>
                    <div className="about-hq-label">Address</div>
                    <div className="about-hq-value">{SITE_INFO.address.suite}</div>
                    <div className="about-hq-sub">
                      {SITE_INFO.address.landmark}, {SITE_INFO.address.city},{' '}
                      {SITE_INFO.address.state} – {SITE_INFO.address.pincode}
                    </div>
                  </div>
                  <div>
                    <div className="about-hq-label">Direct Support</div>
                    <div className="about-hq-value">Ranvijay ({SITE_INFO.phone})</div>
                    <div className="about-hq-sub">24×7 Day &amp; Night Shift</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={450}>
              <div className="about-cta-wrap">
                <Link to="/search-results" className="about-cta">
                  Browse VIP Numbers
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;