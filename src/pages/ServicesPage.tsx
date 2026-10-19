import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Briefcase,
  PhoneCall,
  LifeBuoy,
  Users,
  Megaphone,
  Star,
  Landmark,
  Target,
  Trophy,
  Zap,
  Rocket,
  RefreshCw,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { SITE_INFO } from '../data/siteInfo';
import { TopHeader } from '../components/TopHeader';
import { Reveal } from '../components/ui/Reveal';

const CDN = 'https://www.vipnumbersclub.com';

/* =========================================
   Content data (module scope)
   ========================================= */

const SERVICES = [
  { Icon: Sparkles,   title: 'Numerology Numbers',        desc: 'Numbers aligned with your destiny root, date of birth, and astrological preference.' },
  { Icon: Briefcase,  title: 'Business Numbers',          desc: 'Memorable sequences that stick in customer minds — perfect for marketing recall.' },
  { Icon: PhoneCall,  title: 'Customer Care Numbers',     desc: 'Vanity helplines that build instant trust with your callers.' },
  { Icon: LifeBuoy,   title: 'Helpline Numbers',          desc: 'Easy-to-dial support numbers for high-volume customer interactions.' },
  { Icon: Users,      title: 'Family Sequences',          desc: 'Linked numbers for your entire family — easy to remember, easy to share.' },
  { Icon: Megaphone,  title: 'Toll-Free Numbers',         desc: 'Nationwide 1800-series numbers for enterprise-grade customer service.' },
  { Icon: Star,       title: 'High-End Display Numbers',  desc: 'Premium VVIP patterns for celebrities, executives, and public figures.' },
  { Icon: Landmark,   title: 'Political Numbers',         desc: 'Bespoke patterns that resonate with your constituency and public image.' },
  { Icon: Target,     title: 'Custom Requirements',       desc: 'Have a specific pattern in mind? We source bespoke sequences on request.' },
];

const FEATURES = [
  {
    Icon: Trophy,
    title: 'Biggest Inventory in India',
    body: 'Get premium VIP and fancy mobile numbers across all major networks — Jio, Airtel, Vi & BSNL. Find rare patterns and budget-friendly sequences in our massive inventory.',
  },
  {
    Icon: Zap,
    title: 'Super Simple Process',
    body: 'Browse our live catalog, select your preferred sequence, and proceed to our secure payment checkout. We then assist with MNP from any nearby store until activation.',
  },
  {
    Icon: Rocket,
    title: 'Fast Activation',
    body: 'Eliminate wait times. We provide your Unique Porting Code (UPC) faster than any other vendor — most numbers activate the same day.',
  },
  {
    Icon: RefreshCw,
    title: 'Super Fast Porting',
    body: 'Port your new VIP number by sharing your UPC with the store executive. We handle the technical transition seamlessly — no service interruptions.',
  },
  {
    Icon: ShieldCheck,
    title: 'Money-Back Guarantee',
    body: 'We take full responsibility for your number and payment until activation. A dedicated account manager is assigned to you on day one.',
  },
  {
    Icon: MessageCircle,
    title: 'End-to-End Support',
    body: 'Expert assistance via phone, chat, or WhatsApp — from initial inquiry to final setup. Clear guidance at every step.',
  },
];

/* =========================================
   Page
   ========================================= */

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Premium VIP Number Services | VIP Numbers Club';
  }, []);

  return (
    <div className="services-page">
      <TopHeader title="Premium VIP Number Services" />

      {/* ========== 1. HERO ========== */}
      <section className="services-hero">
        <div className="container">
          <Reveal>
            <div className="services-hero-banner">
              <div className="services-hero-icon" aria-hidden="true">
                <img
                  src={`${CDN}/assets/front/img/services-page-ic.svg`}
                  alt=""
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="services-hero-content">
                <span className="services-hero-eyebrow">Premium Concierge</span>
                <h1 className="services-hero-title">
                  Welcome To{' '}
                  <span className="services-hero-accent">VIP Number Services</span>
                </h1>
                <p className="services-hero-lead">
                  We provide rare, memorable digits designed for high-profile individuals
                  and businesses seeking a competitive edge. Secure a high-value number
                  today to enhance your brand recall and ensure you always stand out.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== 2. SERVICES GRID ========== */}
      <section className="vip-section">
        <div className="container">
          <Reveal>
            <div className="vip-heading">
              <div>
                <span className="vip-heading-eyebrow">What We Offer</span>
                <h2>
                  <span>Premium Number Categories</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="services-grid">
            {SERVICES.map((service, i) => {
              const Icon = service.Icon;
              return (
                <Reveal key={service.title} delay={i * 60}>
                  <div className="services-card">
                    <div className="services-card-icon" aria-hidden="true">
                      <Icon className="w-6 h-6 text-[#ecae01]" />
                    </div>
                    <h3 className="services-card-title">{service.title}</h3>
                    <p className="services-card-desc">{service.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 3. WHY CHOOSE US ========== */}
      <section className="vip-section">
        <div className="container">
          <Reveal>
            <div className="vip-heading">
              <div>
                <span className="vip-heading-eyebrow">Why Choose Us</span>
                <h2>
                  <span>The VIP Numbers Club Advantage</span>
                </h2>
                <p className="services-section-lead">
                  Choose VIP Numbers Club for a seamless, secure way to acquire premium VIP
                  numbers. We handle everything from selection to activation — ensuring you
                  get a memorable number that builds instant credibility.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="services-features">
            {FEATURES.map((feature, i) => {
              const Icon = feature.Icon;
              return (
                <Reveal key={feature.title} delay={i * 80}>
                  <div className="services-feature">
                    <div className="services-feature-icon" aria-hidden="true">
                      <Icon className="w-5 h-5 text-[#ecae01]" />
                    </div>
                    <div className="services-feature-content">
                      <h3 className="services-feature-title">{feature.title}</h3>
                      <p className="services-feature-body">{feature.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 4. CTA ========== */}
      <section className="vip-section">
        <div className="container">
          <Reveal>
            <div className="services-cta-wrap">
              <h2 className="services-cta-title">Ready to Claim Your Number?</h2>
              <p className="services-cta-desc">
                Browse our live inventory of rare patterns, VVIP sequences, and
                numerology-aligned numbers.
              </p>
              <div className="services-cta-actions">
                <Link to="/search-results" className="services-cta">
                  Browse VIP Numbers
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
                </Link>
                <a href={`tel:${SITE_INFO.phone}`} className="services-cta services-cta--ghost">
                  Talk To Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
