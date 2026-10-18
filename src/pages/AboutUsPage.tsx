import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight, MapPin, Building2, Clock } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          Defining Digital Prestige Since 2009
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About VIP Numbers Club
        </h1>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          In an era where your mobile number is more than just a contact—it is your digital identity, your brand’s first impression, and a symbol of your status.
        </p>
      </div>

      {/* Origin Story Card */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-8 sm:p-12 space-y-6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm text-white/80 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">
              16+ Years of Excellence from the Pink City
            </h2>
            <p>
              Based in the heart of Jaipur, Rajasthan at The Elysian, Swej Farm Circle, Civil Lines, <strong className="text-gold">VIP Numbers Club</strong> has spent the last 16 years curating the most exclusive collection of fancy, repetitive, and numerologically aligned mobile numbers in India.
            </p>
            <p>
              Under the leadership of Ranvijay, what started as a specialized consultancy has grown into India's largest and most reliable portal for verified VIP numbers. We have served thousands of satisfied clients—ranging from corporate leaders and high-net-worth individuals to celebrities, politicians, and leading enterprises such as Flipkart and Quess Corp.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-dark-surface border border-dark-border text-center space-y-2">
              <div className="text-3xl font-extrabold text-gold font-mono">16+</div>
              <div className="text-xs text-white/60 font-medium">Years in Business (Since 2009)</div>
            </div>

            <div className="p-5 rounded-2xl bg-dark-surface border border-dark-border text-center space-y-2">
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
              <div className="text-xs text-white/60 font-medium">Legal MNP Activation</div>
            </div>

            <div className="p-5 rounded-2xl bg-dark-surface border border-dark-border text-center space-y-2">
              <div className="text-3xl font-extrabold text-white font-mono">24*7</div>
              <div className="text-xs text-white/60 font-medium">Support Shifts (Day & Night)</div>
            </div>

            <div className="p-5 rounded-2xl bg-dark-surface border border-dark-border text-center space-y-2">
              <div className="text-3xl font-extrabold text-gold font-mono">08...</div>
              <div className="text-xs text-white/60 font-medium">GST Registered Entity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values & Commitments */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">
          Our Four Non-Negotiable Commitments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_INFO.guarantees.map((g, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-dark-card border border-dark-border/80 space-y-2">
              <div className="flex items-center gap-2.5 text-gold font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span>{g.title}</span>
              </div>
              <div className="text-xs font-semibold text-white/50">{g.subtitle}</div>
              <p className="text-xs text-white/70 leading-relaxed pt-1">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Registration & Head Office */}
      <div className="rounded-3xl bg-dark-surface border border-dark-border p-8 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-gold" />
          <span>Registered Corporate Credentials</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/80">
          <div>
            <div className="text-white/40 uppercase font-semibold">Registered Entity</div>
            <div className="font-bold text-white mt-1">VIP Numbers Club</div>
            <div className="text-white/60 mt-0.5">GSTIN: {SITE_INFO.gstNumber}</div>
          </div>
          <div>
            <div className="text-white/40 uppercase font-semibold">Headquarters</div>
            <div className="font-bold text-white mt-1">{SITE_INFO.address.suite}</div>
            <div className="text-white/60 mt-0.5">{SITE_INFO.address.landmark}, {SITE_INFO.address.city}, {SITE_INFO.address.state} - {SITE_INFO.address.pincode}</div>
          </div>
          <div>
            <div className="text-white/40 uppercase font-semibold">Executive Contact</div>
            <div className="font-bold text-white mt-1">{SITE_INFO.leadContact}</div>
            <div className="text-white/60 mt-0.5">{SITE_INFO.phone} (24*7 Day & Night)</div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <Link
          to="/search-results"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-light text-dark-pure font-bold text-sm tracking-wide shadow-gold-md hover:scale-105 transition-all"
        >
          <span>Explore VIP Number Catalogue</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
