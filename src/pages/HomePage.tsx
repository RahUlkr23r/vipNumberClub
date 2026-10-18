import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS, POPULAR_CATEGORIES } from '../data/numbers';
import { SITE_INFO } from '../data/siteInfo';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Check, 
  FileText, 
  Truck, 
  Award,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // Filter numbers for specific homepage sections
  const vvipNumbers = VIP_NUMBERS.filter(n => n.priceNumeric >= 50000).slice(0, 6);
  const mostClickedNumbers = VIP_NUMBERS.filter(n => n.trending).slice(0, 6);
  const zeroLoversNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Zero Lovers') || n.number.includes('000')).slice(0, 6);
  const auspicious786Numbers = VIP_NUMBERS.filter(n => n.tags.includes('786 Auspicious') || n.number.includes('786')).slice(0, 6);
  const tetraNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Tetra Numbers') || n.tags.includes('Penta Numbers')).slice(0, 6);
  const budgetNumbers = VIP_NUMBERS.filter(n => n.priceNumeric <= 10000).slice(0, 6);
  const luckyRoot1Numbers = VIP_NUMBERS.filter(n => n.total === 1).slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Authentic Promo Banner Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SITE_INFO.assets.promoBanners.slice(0, 3).map((banner, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-dark-border shadow-xl hover:border-gold/40 transition-all group">
              <img
                src={banner}
                alt={`VIP Numbers Club Promo Banner ${i + 1}`}
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Trending Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Curated Collections</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Trending Categories
            </h2>
          </div>
          <Link
            to="/search-results"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Categories</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-6">
          {POPULAR_CATEGORIES.slice(1, 7).map(cat => (
            <Link
              key={cat.id}
              to={`/search-results?category=${cat.id}`}
              className="p-4 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/50 hover:bg-dark-elevated transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold transition-colors line-clamp-1">
                  {cat.name}
                </h4>
                <span className="text-[11px] text-white/50 mt-1 block">
                  {cat.count}+ Available
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. "My OWN Choice Number" Custom Requirement Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-dark-card via-dark-elevated to-dark-card border border-gold/40 p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Personalized Sourcing
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Looking for Your <span className="text-gold">Own Choice</span> Number?
            </h3>
            <p className="text-sm text-white/70 max-w-xl">
              Have a specific car number match, birthdate sequence, or corporate vanity requirement? Our specialists will source it for you across all telecom circles.
            </p>
          </div>

          <div className="shrink-0 z-10">
            <a
              href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I have a specific custom VIP number requirement: ')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-dark-pure font-bold text-sm tracking-wide shadow-gold-md hover:scale-105 transition-all"
            >
              <span>Submit Specific Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. VVIP HIGH END NUMBERS Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Top-Tier Vanity Digits</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              VVIP High End Numbers
            </h2>
          </div>
          <Link
            to="/search-results?category=vvip-high-end"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All VVIP Numbers</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {vvipNumbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 6. Most Clicked Numbers Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">High Demand</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Most Clicked Numbers
            </h2>
          </div>
          <Link
            to="/search-results?sort=price_high_to_low"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Popular</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {mostClickedNumbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 7. Zero Lovers (Maximum Zeros) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Exclusive Symmetry</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              0 Lovers (Maximum Zeros)
            </h2>
          </div>
          <Link
            to="/search-results?q=000"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Zero Series</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {zeroLoversNumbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 8. 786 Auspicious Series */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Sacred & Blessed Digits</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              786 Auspicious Numbers
            </h2>
          </div>
          <Link
            to="/search-results?q=786"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All 786 Series</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {auspicious786Numbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 9. Tetra & Penta Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Consecutive Repeats</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Tetra & Penta Numbers
            </h2>
          </div>
          <Link
            to="/search-results?category=tetra-numbers"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Tetra/Penta</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tetraNumbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 10. Budget Friendly Numbers (< ₹10,000) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Unbeatable Value</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Budget Friendly Numbers (&lt; ₹10,000)
            </h2>
          </div>
          <Link
            to="/search-results?budgetMax=10000"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Budget Numbers</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {budgetNumbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 11. Numerologically Lucky (Root Sum 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pb-6 border-b border-dark-border">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">Surya / Sun Vibration</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Lucky Numbers (Root Sum 1)
            </h2>
          </div>
          <Link
            to="/search-results?total=1"
            className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Root 1</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {luckyRoot1Numbers.map(number => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
      </section>

      {/* 12. Corporate Clientele & Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-dark-card border border-dark-border p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase font-bold text-gold tracking-widest">
            Trusted By Leading Enterprises & High-Profile Individuals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            VIP Portal Featured On Top Platforms
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">
            From Fortune 500 corporate giants like Flipkart and Quess Corp to celebrated entrepreneurs, celebrities, and public figures across India.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 max-w-3xl mx-auto text-center">
            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border/60">
              <div className="text-xl font-extrabold text-white font-mono">FLIPKART</div>
              <div className="text-[11px] text-white/50 mt-1">Helpline Solutions</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border/60">
              <div className="text-xl font-extrabold text-white font-mono">QUESS CORP</div>
              <div className="text-[11px] text-white/50 mt-1">Corporate Vanity Series</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border/60">
              <div className="text-xl font-extrabold text-gold font-mono">16+ YEARS</div>
              <div className="text-[11px] text-white/50 mt-1">Operational Since 2009</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border/60">
              <div className="text-xl font-extrabold text-emerald-400 font-mono">100% LEGAL</div>
              <div className="text-[11px] text-white/50 mt-1">Official MNP Porting</div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. 3-Step Legal Activation Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase font-bold text-gold tracking-widest">Simple & Transparent</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How VIP Number Porting Works
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto">
            Get your dream number registered legally in your own name within three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-dark-card border border-dark-border p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold border border-gold/30 mx-auto flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-lg font-bold text-white">Choose Your Number</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Explore our verified catalogue of over 100+ genuine VIP mobile numbers or request a custom vanity sequence.
            </p>
          </div>

          <div className="rounded-2xl bg-dark-card border border-dark-border p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold border border-gold/30 mx-auto flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-lg font-bold text-white">Book & Receive UPC</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Complete your booking. We generate an official Unique Porting Code (UPC) and send it directly to your mobile.
            </p>
          </div>

          <div className="rounded-2xl bg-dark-card border border-dark-border p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold border border-gold/30 mx-auto flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-lg font-bold text-white">Activate on Any SIM</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Visit any local Jio, Airtel, Vi, or BSNL store or opt for home delivery to complete Aadhaar/Govt ID verification.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-gold-light transition-colors"
          >
            <span>Read full activation guidelines & operator rules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 14. SEO Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-dark-surface/60 border border-dark-border/60 text-xs text-white/60 space-y-4 leading-relaxed">
          <h3 className="text-sm font-bold text-white">
            Buy VIP Mobile Numbers Online in India with VIP Numbers Club
          </h3>
          <p>
            Welcome to VIP Numbers Club, India's most trusted online destination for exclusive fancy mobile numbers, lucky numerology mobile numbers, and VVIP phone numbers. Established in 2009 in Jaipur, Rajasthan, we provide genuine vanity numbers with official Unique Porting Codes (UPC) compliant with TRAI and telecom guidelines.
          </p>
          <p>
            Whether you are looking for an easy-to-remember business helpline number, a prestigious repetitive sequence (like 0000, 7777, 8888, 9999), an auspicious 786 series, or numbers with custom astrological sums, our extensive inventory guarantees the lowest prices in India backed by our 100% money-back guarantee.
          </p>
        </div>
      </section>
    </div>
  );
};
