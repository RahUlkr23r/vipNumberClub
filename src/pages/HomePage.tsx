import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS } from '../data/numbers';
import { Reveal } from '../components/ui/Reveal';
import { Carousel } from '../components/ui/Carousel';
import { CountUp } from '../components/ui/CountUp';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CursorGlow } from '../components/ui/CursorGlow';
import { TiltCard } from '../components/ui/TiltCard';
import { Marquee } from '../components/ui/Marquee';
import { AnimatedText } from '../components/ui/AnimatedText';
import { MagneticButton } from '../components/ui/MagneticButton';
import { FloatingParticles } from '../components/ui/FloatingParticles';
import { useParallax } from '../hooks/useParallax';

/* =========================================
   Static data
   ========================================= */

const ADS_BANNERS = [
  'https://www.vipnumbersclub.com/uploads/banners/3ijZiUrMQFODuH2slEUQ.jpg',
  'https://www.vipnumbersclub.com/uploads/banners/W5MTlCebysWS6dYphrQO.jpg',
  'https://www.vipnumbersclub.com/uploads/banners/xBzXJve2DFuLbqyfekfM.jpg',
  'https://www.vipnumbersclub.com/uploads/banners/vC5Ow4JNpZogcdVE29Jy.jpg',
  'https://www.vipnumbersclub.com/uploads/banners/HysJNRUc7lu9uWvUUUmj.jpg',
  'https://www.vipnumbersclub.com/uploads/banners/U5jWX2d1JtZG8kjBd6Ww.jpg',
  'https://www.vipnumbersclub.com/uploads/banners/WFejsJgWFhO74PT16PYS.png',
  'https://www.vipnumbersclub.com/uploads/banners/wM7zvSHFVwJ6G81hCcKN.jpg',
];

const VIDEO_BANNERS = [
  'https://www.vipnumbersclub.com/uploads/banners/YuuhxRz95eDQMi2Dw9S6.png',
  'https://www.vipnumbersclub.com/uploads/banners/QSJj2eVZ9RTwAtvXwYXl.png',
  'https://www.vipnumbersclub.com/uploads/banners/YdkVQN78qMPYN5Naqev6.png',
  'https://www.vipnumbersclub.com/uploads/banners/9JRXC8GrFwuwvP5A0v28.png',
  'https://www.vipnumbersclub.com/uploads/banners/oogN9meTtcM0beKmPrUt.png',
];

const TRENDING_CATEGORIES = [
  { title: 'Royal Gold', num: '600002 1008', prefix: '600', q: 'royal-gold' },
  { title: 'Premium Numbers', num: '8055 8 8055 3', prefix: '805', q: 'premium-numbers' },
  { title: 'Bill Board Numbers', num: '89 888 23456', prefix: '89 ', q: 'bill-board-numbers' },
  { title: 'Penta Last', num: '91 383 22222', prefix: '91 ', q: 'penta-last' },
  { title: 'Mirror Ulta-Pulta', num: '9127791277', prefix: '912', q: 'mirror-ulta-pulta' },
  { title: 'Tetra Last', num: '8399909999', prefix: '839', q: 'tetra-last' },
  { title: 'Fancy Numbers', num: '946 111 5 222', prefix: '946', q: 'fancy-numbers' },
  { title: 'Special Penta Last', num: '91 345 99999', prefix: '91 ', q: 'special-penta-last' },
  { title: 'Mirror Numbers', num: '7447474474', prefix: '744', q: 'mirror-numbers' },
  { title: '00000 Last', num: '83005 00000', prefix: '830', q: '00000-last' },
  { title: '0000 Last', num: '96770 00000', prefix: '967', q: '0000-last' },
  { title: '0007 Special', num: '70007 00007', prefix: '700', q: '0007-special' },
  { title: 'XY XY XY Pattern', num: '9012 9012 90', prefix: '901', q: 'xy-xy-xy' },
  { title: 'Doubling Numbers', num: '88 99 77 66 55', prefix: '88', q: 'doubling-numbers' },
  { title: 'Middle Repetitive', num: '98 77777 012', prefix: '98', q: 'middle-repetitive' },
  { title: 'Ending 786', num: '98765 00786', prefix: '987', q: 'ending-786' },
];

const POPULAR_CATEGORIES = [
  { title: 'Royal Gold', num: '600002 1008', prefix: '600', q: 'royal-gold' },
  { title: '786 Specials', num: '9014000786', prefix: '901', q: '786-numbers' },
  { title: 'Hexa Series', num: '9111116971', prefix: '911', q: 'hexa-series' },
  { title: 'Symmetrical Numbers', num: '7770002399', prefix: '777', q: 'symmetrical-numbers' },
  { title: 'Triple Repeating', num: '8877339966', prefix: '887', q: 'triple-repeating' },
  { title: 'Fancy Numbers', num: '9461115222', prefix: '946', q: 'fancy-numbers' },
  { title: 'Penta Last', num: '9138322222', prefix: '913', q: 'penta-last' },
  { title: '00000 Last', num: '8300500000', prefix: '830', q: '00000-last' },
  { title: 'Premium Numbers', num: '8055880553', prefix: '805', q: 'premium-numbers' },
  { title: 'Mirror Numbers', num: '7447474474', prefix: '744', q: 'mirror-numbers' },
];

const BUDGET_RANGES = [
  { min: 1500, max: 3000, label: '₹1,500 – ₹3,000' },
  { min: 3000, max: 6000, label: '₹3,000 – ₹6,000' },
  { min: 6000, max: 10000, label: '₹6,000 – ₹10,000' },
  { min: 10000, max: 15000, label: '₹10,000 – ₹15,000' },
  { min: 15000, max: 25000, label: '₹15,000 – ₹25,000' },
  { min: 25000, max: 50000, label: '₹25,000 – ₹50,000' },
  { min: 50000, max: 999999, label: '₹50,000+' },
];

const TRENDING_ENDINGS = [
  { title: 'PENTA', sub: 'XXXXX', q: '00000' },
  { title: 'HEXA', sub: 'XXXXXX', q: '000000' },
  { title: 'SEPTA', sub: 'XXXXXXX', q: '0000000' },
  { title: 'OCTA', sub: 'XXXXXXXX', q: '00000000' },
];

const FAMILY_PACKS = [2, 3, 4, 5, 6, 7, 8, 9];
const NUMEROLOGY_TOTALS = [1, 3, 5, 9];

const FEATURED_PLATFORMS = [
  {
    name: 'The India Forbes News',
    href: 'https://www.theindiaforbesnews.co.in/2026/05/vip-numbers-club-defines-excellence.html',
    src: 'https://www.vipnumbersclub.com/uploads/settings/pC2sKXtcN6UtEFtCxil1.png',
  },
  { name: 'Featured Platform 2', href: null, src: 'https://www.vipnumbersclub.com/uploads/settings/IXQH3jgnS0fm3al5orgN.jfif' },
  { name: 'Featured Platform 3', href: null, src: 'https://www.vipnumbersclub.com/uploads/settings/tGGZOA01uL6638WmQ53k.jfif' },
];

const STEPS = [
  { img: 'stp1.svg', title: "India's Biggest Inventory", footer: '3,00,000 + VIP Numbers to choose from' },
  { img: 'stp2.svg', title: 'Super Fast UPC Delivery', footer: 'Unique Porting Code delivered in minutes' },
  { img: 'stp3.svg', title: 'Expert Support', footer: '24×7 Day & Night Dedicated Helpline' },
];

const STATS = [
  { end: 300000, suffix: '+', label: 'VIP Numbers Available' },
  { end: 4065, suffix: '+', label: 'Happy Customers' },
  { end: 15, suffix: '+', label: 'Years of Trust' },
  { end: 24, suffix: '×7', label: 'Expert Support' },
];

const GOLD_TICKER = [
  '22K GOLD ₹6,840/g',
  '24K GOLD ₹7,462/g',
  '18K GOLD ₹5,596/g',
  'SILVER ₹92/g',
  'HUID 100% BIS HALLMARKED',
  'GIA CERTIFIED DIAMONDS',
  'TRAI COMPLIANT TRANSFERS',
  'FREE UPC DELIVERY',
  'MONEY-BACK GUARANTEE',
  'SAME-DAY ACTIVATION',
];

const TETRA_RE = /([0-9])\1{3}/;
const PENTA_RE = /([0-9])\1{4}/;
type VIPNumber = (typeof VIP_NUMBERS)[number];

/* =========================================
   Reusable presentational components
   ========================================= */

const SectionHeading = ({
  eyebrow,
  title,
  to,
  cta = 'View All',
}: {
  eyebrow: string;
  title: string;
  to: string;
  cta?: string;
}) => (
  <Reveal>
    <div className="vip-heading">
      <div>
        <span className="vip-heading-eyebrow">{eyebrow}</span>
        <h2>
          <Link to={to}>{title}</Link>
        </h2>
      </div>
      <Link to={to} className="vip-heading-link">
        {cta}
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  </Reveal>
);

const TrustLine = () => (
  <p className="vip-trust">
    <strong>100% Money-Back</strong> Guarantee Until Activation
  </p>
);

const NumberSection = ({
  eyebrow,
  title,
  numbers,
  categoryQuery,
  showFooter = true,
}: {
  eyebrow: string;
  title: string;
  numbers: VIPNumber[];
  categoryQuery: string;
  showFooter?: boolean;
}) => {
  const url = `/search-results?category=${encodeURIComponent(categoryQuery)}`;
  return (
    <div>
      <SectionHeading eyebrow={eyebrow} title={title} to={url} />

      <Carousel ariaLabel={title} itemWidth={280} autoPlay autoPlayInterval={6000}>
        {numbers.map((num) => (
          <div key={num.id} className="vip-number-card w-[260px] sm:w-[280px]">
            <TiltCard maxTilt={6}>
              <NumberCard number={num} />
            </TiltCard>
          </div>
        ))}
        <div className="w-[240px] sm:w-[260px]">
          <Link to={url} className="vip-viewmore" aria-label={`View more ${title}`}>
            <span className="vip-viewmore-icon">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <h3>VIEW ALL</h3>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-1">{title}</span>
          </Link>
        </div>
      </Carousel>

      <p className="vip-swipe-hint">← swipe to see more →</p>
      {showFooter && <TrustLine />}
    </div>
  );
};

const CategoryCarousel = ({
  eyebrow,
  title,
  categories,
}: {
  eyebrow: string;
  title: string;
  categories: typeof TRENDING_CATEGORIES;
}) => (
  <div>
    <SectionHeading eyebrow={eyebrow} title={title} to="/search-results" cta="Browse All" />

    <Carousel ariaLabel={title} itemWidth={300} autoPlay autoPlayInterval={5000}>
      {categories.map((cat) => (
        <Link
          key={cat.q}
          to={`/search-results?category=${encodeURIComponent(cat.q)}`}
          className="vip-cat-card w-[260px] sm:w-[290px]"
          aria-label={`Browse ${cat.title}`}
        >
          <TiltCard maxTilt={5}>
            <div className="vip-cat-card-body">
              <h3 className="vip-cat-title">{cat.title}</h3>
              <div className="vip-cat-number">
                <span className="text-[#ECAE01]">{cat.prefix}</span>
                {cat.num.slice(cat.prefix.length)}
              </div>
              <span className="vip-cat-arrow">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </TiltCard>
        </Link>
      ))}
    </Carousel>

    <p className="vip-swipe-hint">← swipe to see more →</p>
    <TrustLine />
  </div>
);

/* =========================================
   Page
   ========================================= */

export const HomePage: React.FC = () => {
  const groups = useMemo(() => {
    const vvip: VIPNumber[] = [];
    const mostClicked: VIPNumber[] = [];
    const zeroLovers: VIPNumber[] = [];
    const abab: VIPNumber[] = [];
    const helpline: VIPNumber[] = [];
    const n786: VIPNumber[] = [];
    const tetra: VIPNumber[] = [];
    const mirror: VIPNumber[] = [];
    const penta: VIPNumber[] = [];
    const budget: VIPNumber[] = [];
    const lucky1: VIPNumber[] = [];

    for (const n of VIP_NUMBERS) {
      if (n.priceNumeric >= 50000 && vvip.length < 8) vvip.push(n);
      if ((n.trending || n.featured) && mostClicked.length < 8) mostClicked.push(n);
      if ((n.tags.includes('Zero Lovers') || n.number.includes('000')) && zeroLovers.length < 10) zeroLovers.push(n);
      if ((n.tags.includes('ABAB Pattern') || n.category.includes('ABAB')) && abab.length < 10) abab.push(n);
      if ((n.category.includes('Helpline') || n.number.startsWith('939000') || n.number.includes('0002') || n.number.includes('0004')) && helpline.length < 8) helpline.push(n);
      if ((n.tags.includes('786 Auspicious') || n.number.includes('786')) && n786.length < 10) n786.push(n);
      if ((n.tags.includes('Tetra Numbers') || TETRA_RE.test(n.number)) && tetra.length < 10) tetra.push(n);
      if ((n.tags.includes('Mirror Series') || n.category.includes('Mirror')) && mirror.length < 10) mirror.push(n);
      if ((n.tags.includes('Penta Numbers') || PENTA_RE.test(n.number)) && penta.length < 8) penta.push(n);
      if (n.priceNumeric <= 10000 && budget.length < 10) budget.push(n);
      if (n.total === 1 && lucky1.length < 10) lucky1.push(n);
    }

    return { vvip, mostClicked, zeroLovers, abab, helpline, n786, tetra, mirror, penta, budget, lucky1 };
  }, []);

  const blob1Ref = useParallax<HTMLDivElement>(0.12);
  const blob2Ref = useParallax<HTMLDivElement>(0.18);
  const blob3Ref = useParallax<HTMLDivElement>(0.1);
  const dividerRef = useParallax<HTMLDivElement>(0.06);

  return (
    <div className="vip-page relative overflow-hidden">
      {/* ===== Global UI layers ===== */}
      <ScrollProgress />
      <CursorGlow />
      <FloatingParticles count={14} />

      {/* Decorative parallax gold blobs */}
      <div
        ref={blob1Ref}
        aria-hidden="true"
        className="hero-parallax-layer pointer-events-none absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(236,174,1,0.25) 0%, transparent 70%)' }}
      />
      <div
        ref={blob2Ref}
        aria-hidden="true"
        className="hero-parallax-layer pointer-events-none absolute top-[30%] -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(236,174,1,0.2) 0%, transparent 70%)' }}
      />
      <div
        ref={blob3Ref}
        aria-hidden="true"
        className="hero-parallax-layer pointer-events-none absolute bottom-[10%] -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(236,174,1,0.22) 0%, transparent 70%)' }}
      />

      {/* ===================== HERO ===================== */}
      <HeroSlider />

      {/* ===================== LIVE MARQUEE TICKER ===================== */}
      <div className="vip-ticker">
        <Marquee speed={45}>
          {GOLD_TICKER.map((item, i) => (
            <span key={i} className="vip-ticker-item">
              <span className="vip-ticker-dot" />
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===================== STATS BAR ===================== */}
      <section className="vip-section !py-10">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {STATS.map((stat) => (
                <TiltCard key={stat.label} maxTilt={8}>
                  <div className="vip-stat-card rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-6 text-center backdrop-blur-sm hover:border-[#ECAE01]/30 transition-colors">
                    <div className="font-serif text-2xl sm:text-4xl font-bold vip-num-pill-total">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#999]">
                      {stat.label}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== ADS RAIL (auto-moving) ===================== */}
      <section className="vip-section !py-8">
        <div className="container">
          <Reveal>
            <div className="vip-heading">
              <div>
                <span className="vip-heading-eyebrow">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2" />
                  Live Offers
                </span>
                <h2>
                  <AnimatedText text="Featured Deals & Offers" />
                </h2>
              </div>
            </div>
          </Reveal>

          <Carousel ariaLabel="Promotional banners — auto-advancing" itemWidth={360} autoPlay autoPlayInterval={4000}>
            {ADS_BANNERS.map((banner, i) => (
              <div key={`${banner}-${i}`} className="vip-banner vip-banner--hero w-[85%] sm:w-[45%] md:w-[32%] lg:w-[23%]">
                <img
                  src={banner}
                  alt={`Featured offer ${i + 1}`}
                  className="h-[200px] sm:h-[220px]"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="vip-banner-badge">HOT</div>
              </div>
            ))}
          </Carousel>
          <p className="vip-swipe-hint">← swipe or hover to pause →</p>
        </div>
      </section>

      {/* ===================== TRENDING CATEGORIES ===================== */}
      <section className="vip-section">
        <div className="container">
          <CategoryCarousel eyebrow="Curated Collections" title="Trending Categories" categories={TRENDING_CATEGORIES} />
        </div>
      </section>

      {/* ===================== MY OWN CHOICE CTA ===================== */}
      <section className="vip-section">
        <div className="container">
          <Reveal>
            <MagneticButton strength={0.15}>
              <Link to="/contact-us" className="vip-cta-banner vip-sheen">
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                  <div>
                    <p className="vip-heading-eyebrow">Bespoke Request</p>
                    <h2 className="vip-cta-title">
                      My Own <span>Choice Number</span>
                    </h2>
                    <p className="text-sm text-[#999] mt-2 max-w-md">
                      Have a specific number in mind? Tell us the exact sequence or pattern and we'll find it for you.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#ECAE01] text-black font-bold text-sm rounded-full hover:bg-[#f3bb2e] transition-colors self-start sm:self-end whitespace-nowrap">
                    Request Now
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ===================== VVIP HIGH END ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Premium Tier" title="VVIP High-End Numbers" numbers={groups.vvip} categoryQuery="vvip-high-end-numbers" />
        </div>
      </section>

      {/* ===================== VIDEO RAIL ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="As Featured On" title="Watch The Story" to="/search-results" cta="Explore" />
          <Carousel ariaLabel="Video banners — auto-advancing" itemWidth={380} autoPlay autoPlayInterval={5500}>
            {VIDEO_BANNERS.map((vBanner, i) => (
              <div key={`${vBanner}-${i}`} className="vip-banner vip-banner--video w-[85%] sm:w-[48%] md:w-[38%] lg:w-[30%]">
                <img src={vBanner} alt={`Platform feature ${i + 1}`} className="h-[240px]" loading="lazy" decoding="async" />
                <div className="vip-banner-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </Carousel>
          <p className="vip-swipe-hint">← swipe or hover to pause →</p>
        </div>
      </section>

      {/* ===================== MOST CLICKED ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Trending Now" title="Most Clicked Numbers" numbers={groups.mostClicked} categoryQuery="most-clicked-numbers" />
        </div>
      </section>

      {/* ===================== POPULAR CATEGORIES ===================== */}
      <section className="vip-section">
        <div className="container">
          <CategoryCarousel eyebrow="Fan Favourites" title="Popular Categories" categories={POPULAR_CATEGORIES} />
        </div>
      </section>

      {/* ===================== 0 LOVERS ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Zero Lovers" title="Maximum Zeros Collection" numbers={groups.zeroLovers} categoryQuery="0-lovers-maximum-zeros" showFooter={false} />
        </div>
      </section>

      {/* ===================== NUMEROLOGY ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="Numerology" title="Numerologically Lucky ✨" to="/numerology-search" cta="Numerology Search" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NUMEROLOGY_TOTALS.map((num, i) => (
              <Reveal key={num} delay={i * 80}>
                <TiltCard maxTilt={10}>
                  <Link to={`/search-results?total=${num}`} className="vip-num-pill vip-sheen">
                    <div className="vip-num-pill-total">{num}</div>
                    <div className="vip-num-pill-sub">Without 2 / 4 / 8</div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <TrustLine />
        </div>
      </section>

      {/* ===================== BUDGET ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="By Budget" title="Find Your Price Range" to="/search-results" />
          <Carousel ariaLabel="Budget ranges" itemWidth={180} autoPlay autoPlayInterval={4500}>
            {BUDGET_RANGES.map((b) => (
              <Link key={b.label} to={`/search-results?min_budget=${b.min}&max_budget=${b.max}`} className="vip-pill vip-pill--gold">
                {b.label}
              </Link>
            ))}
          </Carousel>
          <TrustLine />
        </div>
      </section>

      {/* ===================== ALWAYS TRENDING ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="Hot Patterns" title="Always Trending" to="/search-results" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRENDING_ENDINGS.map((item, i) => (
              <Reveal key={item.q} delay={i * 80}>
                <TiltCard maxTilt={10}>
                  <Link to={`/search-results?q=${item.q}`} className="vip-num-pill vip-sheen">
                    <div className="vip-num-pill-total text-2xl">{item.title}</div>
                    <div className="vip-num-pill-sub">{item.sub}</div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <TrustLine />
        </div>
      </section>

      {/* ===================== ABAB ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Pattern Series" title="AB-AB-AB Ending Special" numbers={groups.abab} categoryQuery="ab-ab-ab-ending-special" showFooter={false} />
        </div>
      </section>

      {/* ===================== PARALLAX DIVIDER ===================== */}
      <div ref={dividerRef} className="vip-parallax-divider" aria-hidden="true">
        <span>◆</span><span>◆</span><span>◆</span>
      </div>

      {/* ===================== FEATURED PLATFORMS ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="In The Press" title="Featured On Top Platforms" to="/search-results" />
          <Reveal>
            <div className="vip-featured">
              {FEATURED_PLATFORMS.map((platform) =>
                platform.href ? (
                  <a key={platform.src} href={platform.href} target="_blank" rel="noopener noreferrer" aria-label={`${platform.name} (opens in new tab)`}>
                    <img src={platform.src} alt={platform.name} loading="lazy" decoding="async" />
                  </a>
                ) : (
                  <img key={platform.src} src={platform.src} alt={platform.name} loading="lazy" decoding="async" />
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== HELPLINE ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="6 Digits Series" title="Super Helpline Series" numbers={groups.helpline} categoryQuery="super-helpline-series-6" showFooter={false} />
        </div>
      </section>

      {/* ===================== 786 ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Auspicious" title="786 Numbers" numbers={groups.n786} categoryQuery="786-numbers" showFooter={false} />
        </div>
      </section>

      {/* ===================== TETRA ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Pattern Series" title="Tetra Numbers" numbers={groups.tetra} categoryQuery="tetra-numbers" showFooter={false} />
        </div>
      </section>

      {/* ===================== MIRROR ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Pattern Series" title="Mirror Numbers" numbers={groups.mirror} categoryQuery="mirror-numbers" showFooter={false} />
        </div>
      </section>

      {/* ===================== PENTA ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Pattern Series" title="Penta Numbers" numbers={groups.penta} categoryQuery="penta-numbers" showFooter={false} />
        </div>
      </section>

      {/* ===================== BUDGET FRIENDLY ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Under ₹10,000" title="Budget Friendly Numbers" numbers={groups.budget} categoryQuery="budget-friendly-numbers" showFooter={false} />
        </div>
      </section>

      {/* ===================== FAMILY PACKS ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="Multi-Number Bundles" title="Family / Corporate Packs" to="/search-results?category=family-pack" />
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {FAMILY_PACKS.map((n, i) => (
              <Reveal key={n} delay={i * 60}>
                <TiltCard maxTilt={12}>
                  <Link to="/search-results?category=family-pack" className="vip-pack-tile vip-sheen">
                    <span className="vip-pack-label">Pack</span>
                    <span className="vip-pack-num">{n}</span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <TrustLine />
        </div>
      </section>

      {/* ===================== LUCKY ROOT 1 ===================== */}
      <section className="vip-section">
        <div className="container">
          <NumberSection eyebrow="Numerology" title="Lucky Numbers · Root Sum 1" numbers={groups.lucky1} categoryQuery="lucky-numbers-root-sum-1" />
        </div>
      </section>

      {/* ===================== STEPS ===================== */}
      <section className="vip-section">
        <div className="container">
          <SectionHeading eyebrow="Why VIP Numbers Club" title="India's Most Trusted Platform" to="/contact-us" cta="Talk To Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.img} delay={i * 100}>
                <TiltCard maxTilt={8}>
                  <div className="vip-step vip-sheen">
                    <div className="vip-step-icon">
                      <img src={`https://www.vipnumbersclub.com/assets/front/img/${step.img}`} alt="" loading="lazy" decoding="async" />
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.footer}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SEO ===================== */}
      <section className="vip-section">
        <div className="container">
          <Reveal>
            <div className="vip-seo">
              <h2>Buy VIP Mobile Numbers Online in India with VIP Numbers Club</h2>
              <p>
                Looking to upgrade your communication identity with a prestigious, memorable mobile number? <strong>VIP Numbers Club</strong> offers India's largest and most exclusive collection of fancy mobile numbers, lucky numerology combinations, and high-end VVIP numbers across all telecom networks including Reliance Jio, Bharti Airtel, Vodafone Idea (Vi), and BSNL.
              </p>
              <p>
                Whether you are an entrepreneur looking for an easy-to-remember business helpline, a celebrity seeking an exclusive vanity number, or an individual wanting a lucky total based on your date of birth, we provide 100% legal, TRAI-compliant ownership transfers via official Mobile Number Portability (MNP) with a complete money-back guarantee.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;