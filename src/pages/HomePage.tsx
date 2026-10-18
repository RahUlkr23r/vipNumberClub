import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS } from '../data/numbers';

/* =========================================
   Static content (moved outside component
   so it isn't recreated on every render)
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
  { title: 'royal gold', num: '600002 1008', prefix: '600', q: 'royal-gold' },
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
  { min: 1500, max: 3000, label: '₹1500 to ₹3000' },
  { min: 3000, max: 6000, label: '₹3000 to ₹6000' },
  { min: 6000, max: 10000, label: '₹6000 to ₹10000' },
  { min: 10000, max: 15000, label: '₹10000 to ₹15000' },
  { min: 15000, max: 25000, label: '₹15,000 to ₹25,000' },
  { min: 25000, max: 50000, label: '₹25,000 to ₹50,000' },
  { min: 50000, max: 999999, label: '₹50,000+' },
];

const TRENDING_ENDINGS = [
  { title: 'PENTA ENDING', q: '00000' },
  { title: 'HEXA ENDING', q: '000000' },
  { title: 'SEPTA ENDING', q: '0000000' },
  { title: 'OCTA ENDING', q: '00000000' },
];

const FAMILY_PACKS = [2, 3, 4, 5, 6, 7, 8, 9];

const NUMEROLOGY_TOTALS = [1, 3, 5, 9];

const FEATURED_PLATFORMS = [
  {
    name: 'The India Forbes News',
    href: 'https://www.theindiaforbesnews.co.in/2026/05/vip-numbers-club-defines-excellence.html',
    src: 'https://www.vipnumbersclub.com/uploads/settings/pC2sKXtcN6UtEFtCxil1.png',
  },
  {
    name: 'Featured Platform 2',
    href: null,
    src: 'https://www.vipnumbersclub.com/uploads/settings/IXQH3jgnS0fm3al5orgN.jfif',
  },
  {
    name: 'Featured Platform 3',
    href: null,
    src: 'https://www.vipnumbersclub.com/uploads/settings/tGGZOA01uL6638WmQ53k.jfif',
  },
];

/* =========================================
   Helpers
   ========================================= */

const TETRA_RE = /([0-9])\1{3}/;
const PENTA_RE = /([0-9])\1{4}/;

type VIPNumber = (typeof VIP_NUMBERS)[number];

/* =========================================
   Component
   ========================================= */

export const HomePage: React.FC = () => {
  // Single-pass filter — runs once, not on every render
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
      if (
        (n.tags.includes('Zero Lovers') || n.number.includes('000')) &&
        zeroLovers.length < 10
      )
        zeroLovers.push(n);
      if (
        (n.tags.includes('ABAB Pattern') || n.category.includes('ABAB')) &&
        abab.length < 10
      )
        abab.push(n);
      if (
        (n.category.includes('Helpline') ||
          n.number.startsWith('939000') ||
          n.number.includes('0002') ||
          n.number.includes('0004')) &&
        helpline.length < 8
      )
        helpline.push(n);
      if (
        (n.tags.includes('786 Auspicious') || n.number.includes('786')) &&
        n786.length < 10
      )
        n786.push(n);
      if (
        (n.tags.includes('Tetra Numbers') || TETRA_RE.test(n.number)) &&
        tetra.length < 10
      )
        tetra.push(n);
      if (
        (n.tags.includes('Mirror Series') || n.category.includes('Mirror')) &&
        mirror.length < 10
      )
        mirror.push(n);
      if (
        (n.tags.includes('Penta Numbers') || PENTA_RE.test(n.number)) &&
        penta.length < 8
      )
        penta.push(n);
      if (n.priceNumeric <= 10000 && budget.length < 10) budget.push(n);
      if (n.total === 1 && lucky1.length < 10) lucky1.push(n);
    }

    return {
      vvip,
      mostClicked,
      zeroLovers,
      abab,
      helpline,
      n786,
      tetra,
      mirror,
      penta,
      budget,
      lucky1,
    };
  }, []);

  /* ---------- Reusable sub-renderers ---------- */

  const renderSectionHeading = (title: string, linkTo: string) => (
    <div className="box-heading">
      <div className="box-heading-h2">
        <h2 className="box-heading-h2-in">
          <Link to={linkTo} className="heading-link">
            {title}
          </Link>
        </h2>
      </div>
    </div>
  );

  const renderNumberSection = (
    title: string,
    numbers: VIPNumber[],
    categoryQuery: string,
    showFooter = true,
  ) => (
    <div className="box-sec">
      {renderSectionHeading(title, `/search-results?category=${categoryQuery}`)}

      <div className="number-sld">
        {numbers.map((num) => (
          <div key={num.id} className="item">
            <NumberCard number={num} />
          </div>
        ))}
        <div className="item">
          <div className="number-sld-itm number-box viewmore">
            <Link
              to={`/search-results?category=${categoryQuery}`}
              className="viewmore-link"
              aria-label={`View more ${title.toLowerCase()}`}
            >
              <div className="viewmore-in">
                <div className="viewmore-ic">
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="viewmore-title">VIEW MORE</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {showFooter && (
        <div className="box-footer">
          <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
        </div>
      )}
    </div>
  );

  const renderCategoryCarousel = (title: string, categories: typeof TRENDING_CATEGORIES) => (
    <div className="box-sec">
      {renderSectionHeading(title, '/search-results')}

      <div className="trending-cat-sld">
        {categories.map((cat) => (
          <div key={cat.q} className="item">
            <div className="trending-cat-itm">
              <Link
                to={`/search-results?category=${encodeURIComponent(cat.q)}`}
                className="trending-cat-card-link text-decoration-none"
                aria-label={`Browse ${cat.title}`}
              >
                <div className="trending-cat-itm-con">
                  <h5 className="text-white text-capitalize">{cat.title}</h5>
                  <div className="trending-cat-number font-mono">
                    <span className="prefix-gold">{cat.prefix}</span>
                    {cat.num.slice(cat.prefix.length)}
                  </div>
                  <div className="btn-circle-s">
                    <span className="btn-circle">
                      <img
                        src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="box-footer">
        <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
      </div>
    </div>
  );

  /* ---------- Render ---------- */

  return (
    <div className="main-content">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. PROMOTIONAL SLIDING ADS — scroll-snap carousel */}
      <section className="ads-sec pt-4 pb-4">
        <div className="container">
          <div
            className="ads-sec-in flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: 'none' }}
          >
            {ADS_BANNERS.map((banner, i) => (
              <div
                key={banner}
                className="item flex-shrink-0 snap-start w-[85%] sm:w-[45%] md:w-[32%] lg:w-[24%]"
              >
                <div className="ads-sec-itm">
                  <img
                    src={banner}
                    alt=""
                    className="w-full rounded-2xl object-cover block"
                    style={{ height: 180 }}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING CATEGORIES */}
      <section className="trending-cat padding-70">
        <div className="container">
          <div className="trending-cat-in">
            {renderCategoryCarousel('Trending Categories', TRENDING_CATEGORIES)}
          </div>
        </div>
      </section>

      {/* 4. MY OWN CHOICE NUMBER */}
      <section className="my-ownchoice padding-70">
        <div className="container">
          <Link
            to="/contact-us"
            className="my-ownchoice-in d-block text-decoration-none cursor-pointer"
          >
            <div className="my-ownchoice-con">
              <h2 className="my-ownchoice-heading text-white">
                My OWN <span>Choice Number</span>
              </h2>
              <div className="my-ownchoice-img">
                <img
                  src="https://www.vipnumbersclub.com/assets/front/img/question-mark-icon.svg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="box-footer box-footer-justify d-flex justify-content-between align-items-center">
              <span className="box-footer-a prefix-gold font-bold">Click Here</span>
              <p className="mb-0">For Specific Requirement</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. VVIP HIGH END NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            'VVIP HIGH END NUMBERS',
            groups.vvip,
            'vvip-high-end-numbers',
          )}
        </div>
      </section>

      {/* 6. VIDEO / PROMO SLIDER */}
      <section className="video-s padding-70">
        <div className="container">
          <div className="video-s-in">
            <div
              className="video-slider flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
              style={{ scrollbarWidth: 'none' }}
            >
              {VIDEO_BANNERS.map((vBanner) => (
                <div
                  key={vBanner}
                  className="item flex-shrink-0 snap-start w-[85%] sm:w-[48%] md:w-[38%] lg:w-[30%]"
                >
                  <div className="video-s-itm">
                    <img
                      src={vBanner}
                      alt=""
                      className="w-full rounded-2xl object-cover block"
                      style={{ height: 220 }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOST CLICKED NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            'Most Clicked Numbers',
            groups.mostClicked,
            'most-clicked-numbers',
          )}
        </div>
      </section>

      {/* 8. POPULAR CATEGORIES */}
      <section className="trending-cat popular-cat padding-70">
        <div className="container">
          <div className="trending-cat-in">
            {renderCategoryCarousel('Popular Categories', POPULAR_CATEGORIES)}
          </div>
        </div>
      </section>

      {/* 9. 0 LOVERS (MAXIMUM ZEROS) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            '0 Lovers ( Maximum Zeros )',
            groups.zeroLovers,
            '0-lovers-maximum-zeros',
            false,
          )}
        </div>
      </section>

      {/* 10. NUMEROLOGICALLY LUCKY */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="box-sec">
            {renderSectionHeading('Numerologically Lucky ✨', '/numerology-search')}
            <div className="numerical-sld">
              {NUMEROLOGY_TOTALS.map((num) => (
                <div key={num} className="item">
                  <Link
                    to={`/search-results?total=${num}`}
                    className="numerical-sld-itm text-decoration-none"
                  >
                    <div className="numerical-sld-heading">Total {num}</div>
                    <p>Without 2/4/8</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SEARCH BY BUDGET */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="box-sec">
            {renderSectionHeading('Search By Budget', '/search-results')}
            <div className="budget-sld budget-sld-big">
              {BUDGET_RANGES.map((b) => (
                <div key={b.label} className="item">
                  <Link
                    to={`/search-results?min_budget=${b.min}&max_budget=${b.max}`}
                    className="budget-sld-itm text-decoration-none"
                  >
                    {b.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ALWAYS TRENDING */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="box-sec">
            {renderSectionHeading('Always Trending', '/search-results')}
            <div className="budget-sld">
              {TRENDING_ENDINGS.map((item) => (
                <div key={item.q} className="item">
                  <Link
                    to={`/search-results?q=${item.q}`}
                    className="trending-sld-itm text-decoration-none"
                  >
                    <div className="trending-con">{item.title}</div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer box-footer-black">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. AB-AB-AB ENDING SPECIAL */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            'AB-AB-AB Ending Special',
            groups.abab,
            'ab-ab-ab-ending-special',
            false,
          )}
        </div>
      </section>

      {/* 14. VIP PORTAL FEATURED ON TOP PLATFORMS */}
      <section className="review-s padding-70">
        <div className="container p-0">
          <div className="review-s-in">
            {renderSectionHeading('VIP Portal Featured On Top Platforms', '/search-results')}
            <div className="review-slider">
              {FEATURED_PLATFORMS.map((platform) => (
                <div key={platform.src} className="item">
                  <div className="review-s-itm">
                    {platform.href ? (
                      <a
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${platform.name} (opens in new tab)`}
                      >
                        <img
                          src={platform.src}
                          alt={platform.name}
                          style={{ maxHeight: 80, objectFit: 'contain' }}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ) : (
                      <img
                        src={platform.src}
                        alt={platform.name}
                        style={{ maxHeight: 80, objectFit: 'contain' }}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15. SUPER HELPLINE SERIES (6) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            'Super Helpline Series (6)',
            groups.helpline,
            'super-helpline-series-6',
            false,
          )}
        </div>
      </section>

      {/* 16. 786 NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection('786 Numbers', groups.n786, '786-numbers', false)}
        </div>
      </section>

      {/* 17. TETRA NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection('Tetra Numbers', groups.tetra, 'tetra-numbers', false)}
        </div>
      </section>

      {/* 18. MIRROR NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection('Mirror Numbers', groups.mirror, 'mirror-numbers', false)}
        </div>
      </section>

      {/* 19. PENTA NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection('Penta Numbers', groups.penta, 'penta-numbers', false)}
        </div>
      </section>

      {/* 20. BUDGET FRIENDLY NUMBERS */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            'Budget Friendly Numbers',
            groups.budget,
            'budget-friendly-numbers',
            false,
          )}
        </div>
      </section>

      {/* 21. FAMILY / CORPORATE PACK */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="box-sec">
            {renderSectionHeading('Family/Corporate Pack', '/search-results')}
            <div className="pack-sld">
              {FAMILY_PACKS.map((n) => (
                <div key={n} className="item">
                  <Link
                    to="/search-results?category=family-pack"
                    className="trending-sld-itm pack-itm text-decoration-none"
                  >
                    <div className="trending-con">
                      Pack <span>of</span>{' '}
                      <span className="pack-clr prefix-gold font-extrabold">{n}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 22. LUCKY NUMBERS (ROOT SUM 1) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          {renderNumberSection(
            'Lucky Numbers (Root Sum 1)',
            groups.lucky1,
            'lucky-numbers-root-sum-1',
            true,
          )}
        </div>
      </section>

      {/* 23. INDIA'S BIGGEST INVENTORY STEPS */}
      <section className="steps steps-before-step padding-70">
        <div className="container">
          <div className="steps-itms">
            <div className="row">
              {[
                {
                  img: 'stp1.svg',
                  title: "India's Biggest Inventory",
                  footer: '3,00,000 + VIP Numbers to choose from',
                },
                {
                  img: 'stp2.svg',
                  title: 'Super Fast UPC Delivery',
                  footer: 'Unique Porting Code delivered in minutes',
                },
                {
                  img: 'stp3.svg',
                  title: 'Expert Support',
                  footer: '24*7 Day & Night Dedicated Helpline',
                },
              ].map((step) => (
                <div key={step.img} className="col-xl-4 mt-5">
                  <div className="steps-itm">
                    <div className="steps-itm-con">
                      <div className="steps-itm-img">
                        <img
                          src={`https://www.vipnumbersclub.com/assets/front/img/${step.img}`}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="steps-itm-info">
                        <h4>{step.title}</h4>
                      </div>
                    </div>
                    <div className="step-footer">
                      <p className="mb-0">{step.footer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 24. SEO EDITORIAL COPY */}
      <section className="seo-content padding-70">
        <div className="container">
          <div className="seo-content-in">
            <h2 className="mb-4 prefix-gold text-2xl font-bold">
              Buy VIP Mobile Numbers Online in India with VIP Numbers Club
            </h2>
            <p>
              Looking to upgrade your communication identity with a prestigious, memorable
              mobile number? <strong>VIP Numbers Club</strong> offers India's largest and most
              exclusive collection of fancy mobile numbers, lucky numerology combinations, and
              high-end VVIP numbers across all telecom networks including Reliance Jio, Bharti
              Airtel, Vodafone Idea (Vi), and BSNL.
            </p>
            <p>
              Whether you are an entrepreneur looking for an easy-to-remember business
              helpline, a celebrity seeking an exclusive vanity number, or an individual wanting
              a lucky total based on your date of birth, we provide 100% legal, TRAI-compliant
              ownership transfers via official Mobile Number Portability (MNP) with a complete
              money-back guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};