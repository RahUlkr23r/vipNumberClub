import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { Sparkles, Building2, PhoneCall, Users, Search, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Numerology & Astrological Numbers',
      description: 'Rare digits harmonized with your birthdate, life path number, and ruling planet (Sun, Venus, Jupiter, Mercury) to attract prosperity, success, and leadership energy.'
    },
    {
      icon: Building2,
      title: 'Corporate & Business Numbers',
      description: 'Prestigious, easy-to-remember mobile numbers designed to elevate corporate brand recall, enhance advertising ROI, and build instant trust with prospects.'
    },
    {
      icon: PhoneCall,
      title: 'Helpline & Customer Care Series',
      description: 'Vanity repetitive digits (e.g. ending in 000, 1111, 2222) engineered specifically for high-volume customer helplines, support centers, and direct sales lines.'
    },
    {
      icon: Users,
      title: 'Family & Executive Sets',
      description: 'Matching pairs (couples) and sequential sets (3, 4, or 5 consecutive numbers) ideal for family members, founding teams, or corporate board executives.'
    },
    {
      icon: Search,
      title: 'Private Custom Sourcing',
      description: 'Need a specific date of birth, luxury car registration match (e.g., 0001, 0007, 8055), or exclusive series? Our team accesses private telecom lots to find it.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          Tailored VIP Sourcing & Consultancy
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Premium VIP Number Services
        </h1>
        <p className="text-sm text-white/60">
          We provide rare, memorable digits designed for high-profile individuals and enterprises seeking a competitive edge.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold border border-gold/20 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Ranvijay, I am interested in your ${srv.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-light transition-colors"
                >
                  <span>Inquire for {srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise Consultation Card */}
      <div className="rounded-3xl bg-dark-surface border border-gold/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Need an Enterprise Bulk Consultation?</h3>
          <p className="text-xs text-white/60 max-w-md">
            Connect directly with Ranvijay for bulk company sets, GST invoicing, and customized operator porting.
          </p>
        </div>
        <a
          href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I would like to discuss corporate VIP number sourcing.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat with Ranvijay</span>
        </a>
      </div>
    </div>
  );
};
