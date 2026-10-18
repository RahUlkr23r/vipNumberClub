import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { Award, Building2, Users, Star, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ClientelePage: React.FC = () => {
  const corporateClients = [
    {
      name: 'FLIPKART',
      industry: 'E-Commerce & Logistics',
      description: 'Acquired specialized helpline & vanity routing numbers for high-volume customer recall across pan-India operations.'
    },
    {
      name: 'QUESS CORP',
      industry: 'Business Services & Staffing',
      description: 'Sourced corporate executive number series for senior leadership and nationwide workforce communication.'
    },
    {
      name: 'REAL ESTATE CONGLOMERATES',
      industry: 'Luxury Properties (NCR & Mumbai)',
      description: 'Acquired prestigious 0000 and 7777 billboard vanity numbers for premium commercial and residential towers.'
    },
    {
      name: 'VENTURE CAPITAL & TECH FOUNDERS',
      industry: 'Startup Ecosystem (Bengaluru & Gurugram)',
      description: 'Personal numerologically lucky numbers (Root sums 1, 5, and 6) matching high-profile founder birthdays.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          Industry Trust & Reputation
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Our Esteemed Clientele
        </h1>
        <p className="text-sm text-white/60">
          Over 16 years of delivering digital prestige to India's most distinguished enterprises, founders, and public icons.
        </p>
      </div>

      {/* Featured Corporate Proof */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {corporateClients.map((client, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-dark-border">
              <span className="text-xl font-mono font-extrabold text-white tracking-wider">
                {client.name}
              </span>
              <span className="text-[11px] uppercase font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-md">
                Verified Client
              </span>
            </div>
            <div className="text-xs text-white/50 font-medium">{client.industry}</div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {client.description}
            </p>
          </div>
        ))}
      </div>

      {/* Confidentiality Commitment */}
      <div className="rounded-3xl bg-dark-surface border border-dark-border p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold border border-gold/30 mx-auto flex items-center justify-center">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white">100% Strict Client Privacy & Discretion</h3>
        <p className="text-xs text-white/60 max-w-lg mx-auto leading-relaxed">
          While we proudly serve celebrities, politicians, and high-net-worth investors across India, we maintain strict non-disclosure compliance. Individual customer identities and their allocated VIP numbers are never made public.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-2">
        <Link
          to="/search-results"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-light text-dark-pure font-bold text-sm tracking-wide shadow-gold-sm hover:scale-105 transition-all"
        >
          <span>Browse Available VIP Numbers</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
