import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { CheckCircle2, ShieldCheck, FileText, Smartphone, Truck, ArrowRight, MessageCircle } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'hindi' | 'english'>('english');

  const steps = [
    {
      step: '01',
      title: 'Select Your Dream Number',
      description: 'Explore our catalog of 100+ verified fancy and VIP mobile numbers. Use filters for specific digits, auspicious sums, or budget preferences.',
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Book & Receive Official UPC Code',
      description: 'Once booked, an official Unique Porting Code (UPC) is generated via telecom operators and sent directly to your mobile phone via SMS and WhatsApp.',
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Choose Network: Jio, Airtel, Vi or BSNL',
      description: 'You have complete freedom to port the number into ANY telecom network of your choice, either as a Prepaid or Postpaid connection.',
      badge: 'Step 3'
    },
    {
      step: '04',
      title: 'Legal KYC Registration in Your Name',
      description: 'Visit your nearest telecom store or opt for our doorstep delivery service. Present your Aadhaar or government ID to legally register the SIM under your name.',
      badge: 'Step 4'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          TRAI & Telecom Compliant MNP Porting
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          VIP Number Purchase Process
        </h1>
        <p className="text-sm text-white/70">
          Learn how seamless and legally compliant it is to buy and activate a VIP mobile number anywhere across India.
        </p>

        {/* Language Toggle */}
        <div className="inline-flex rounded-xl bg-dark-card border border-dark-border p-1 text-xs font-semibold">
          <button
            onClick={() => setSelectedLanguage('english')}
            className={`px-4 py-1.5 rounded-lg transition-colors ${
              selectedLanguage === 'english' ? 'bg-gold text-dark-pure font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            English Guide
          </button>
          <button
            onClick={() => setSelectedLanguage('hindi')}
            className={`px-4 py-1.5 rounded-lg transition-colors ${
              selectedLanguage === 'hindi' ? 'bg-gold text-dark-pure font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            हिंदी में समझें (Hindi)
          </button>
        </div>
      </div>

      {/* Language Overview Banner */}
      {selectedLanguage === 'hindi' ? (
        <div className="rounded-3xl bg-dark-card border border-gold/30 p-8 space-y-4">
          <h2 className="text-xl font-bold text-white">
            VIP नंबर खरीदने और एक्टिवेट करने की सरल प्रक्रिया
          </h2>
          <div className="space-y-3 text-sm text-white/80 leading-relaxed">
            <p>
              1. <strong>नंबर का चयन करें:</strong> हमारी वेबसाइट पर उपलब्ध 100+ वीआईपी और फैंसी नंबरों में से अपना पसंदीदा नंबर चुनें।
            </p>
            <p>
              2. <strong>UPC कोड प्राप्त करें:</strong> बुकिंग के बाद आपको एक यूनिक पोर्टिंग कोड (UPC) तुरंत प्रदान किया जाता है।
            </p>
            <p>
              3. <strong>अपनी पसंद का नेटवर्क चुनें:</strong> आप इस नंबर को Jio, Airtel, Vi या BSNL किसी भी सिम में एक्टिवेट करवा सकते हैं — चाहे वह Prepaid हो या Postpaid।
            </p>
            <p>
              4. <strong>अपने नाम पर लीगल रजिस्ट्रेशन:</strong> अपने नजदीकी ऑपरेटर स्टोर या होम डिलीवरी एजेंट को अपना आधार कार्ड देकर नंबर को 100% कानूनी रूप से अपने नाम पर करवाएं।
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl bg-dark-card border border-dark-border p-8 space-y-4">
          <h2 className="text-xl font-bold text-white">
            The Official MNP (Mobile Number Portability) Route
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Under official Department of Telecommunications (DoT) and TRAI regulations, numbers are transferred using the Mobile Number Portability framework. This ensures that the number becomes 100% your legal property, registered directly under your name and government ID, completely free from any vendor encumbrance.
          </p>
        </div>
      )}

      {/* Step by Step Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">
          Step-by-Step Activation Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map(step => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-gold font-mono">{step.step}</span>
                <span className="px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-xs font-semibold text-white/70">
                  {step.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Rules Checklist */}
      <div className="rounded-3xl bg-dark-surface border border-dark-border p-8 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-gold" />
          <span>Important Rules Regarding Activation & UPC</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/80">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">UPC Code Validity:</strong> An official UPC is valid for 4 days across India. Please use it within the validity period.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Zero Downtime:</strong> The porting takes standard telecom working days without interruption to your existing connections.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">100% Ownership Guarantee:</strong> You receive the SIM registered to your Aadhaar card with official operator receipt.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Full Refund Assurance:</strong> If for any reason the operator rejects the UPC, you receive an immediate 100% full refund.
            </div>
          </div>
        </div>
      </div>

      {/* Direct Action */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          to="/search-results"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-light text-dark-pure font-bold text-sm tracking-wide shadow-gold-sm"
        >
          <span>Choose Your Number Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I want to understand the activation process for a VIP number.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-dark-card border border-dark-border text-white hover:text-gold text-sm font-semibold transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Ask Ranvijay on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
