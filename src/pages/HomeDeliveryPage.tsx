import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { Truck, CheckCircle2, ShieldCheck, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export const HomeDeliveryPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  const supportedCities = [
    { city: 'Mumbai', advance: '₹500', days: '3-5 Working Days' },
    { city: 'Navi Mumbai', advance: '₹500', days: '3-5 Working Days' },
    { city: 'Thane', advance: '₹500', days: '3-5 Working Days' },
    { city: 'Pune', advance: '₹500', days: '3-5 Working Days' },
    { city: 'Delhi NCR (Delhi, Gurgaon, Noida)', advance: '₹500', days: '3-5 Working Days' },
    { city: 'Jaipur', advance: '₹500', days: '1-3 Working Days (HQ Metro)' },
    { city: 'Ahmedabad', advance: '₹750', days: '4-5 Working Days' },
    { city: 'Bengaluru (Bangalore)', advance: '₹750', days: '4-5 Working Days' },
    { city: 'Hyderabad', advance: '₹750', days: '4-5 Working Days' },
    { city: 'Kolkata', advance: '₹1000', days: '5 Working Days' },
    { city: 'Chennai', advance: '₹1000', days: '5 Working Days' },
    { city: 'Lucknow', advance: '₹750', days: '4-5 Working Days' },
    { city: 'Indore', advance: '₹750', days: '4-5 Working Days' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest">
          Doorstep Verification & Activation
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Cash On Delivery (Home Delivery)
        </h1>
        <p className="text-sm text-white/60">
          Get your VIP SIM card delivered to your home or office address with doorstep biometric KYC.
        </p>
      </div>

      {/* Main Delivery Terms Card */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-10 space-y-8 shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Truck className="w-5 h-5 text-gold" />
            <span>How Home Delivery (COD) Works</span>
          </h2>
          <div className="p-4 rounded-2xl bg-dark-surface border border-dark-border text-sm text-white/80 space-y-3 leading-relaxed">
            <p>
              • <strong>Advance Delivery Fee:</strong> An advance booking charge of <strong className="text-gold">₹500 to ₹1000</strong> is required to dispatch the telecom logistics agent to your address.
            </p>
            <p>
              • <strong>Balance On Delivery:</strong> The remaining balance of the VIP number plus the standard SIM recharge is collected at the time of doorstep biometric KYC verification.
            </p>
            <p>
              • <strong>Activation Period:</strong> Standard activation timeline is <strong className="text-white">3 to 5 working days</strong> from the date of physical biometric verification.
            </p>
          </div>
        </div>

        {/* City Selector */}
        <div className="space-y-4 pt-4 border-t border-dark-border">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span>Select Your City for Delivery Availability</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {supportedCities.map(item => (
              <button
                key={item.city}
                type="button"
                onClick={() => setSelectedCity(item.city)}
                className={`p-4 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                  selectedCity === item.city
                    ? 'bg-gold/15 border-gold text-white shadow-gold-sm'
                    : 'bg-dark-surface border-dark-border/80 text-white/70 hover:text-white hover:border-gold/30'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white">{item.city}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">{item.days}</div>
                </div>
                <div className="text-xs font-mono font-bold text-gold shrink-0">
                  {item.advance} Adv
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected City summary box */}
        <div className="p-5 rounded-2xl bg-dark-surface border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-white/60">Selected Delivery Destination:</div>
            <div className="text-base font-bold text-white mt-0.5">{selectedCity}</div>
            <div className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Doorstep agent service available
            </div>
          </div>

          <a
            href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Ranvijay, I would like to book home delivery (COD) for a VIP number in ${selectedCity}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book COD for {selectedCity}</span>
          </a>
        </div>
      </div>

      <div className="text-center pt-2">
        <Link
          to="/search-results"
          className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-gold-light"
        >
          <span>Choose Your Number from Catalogue</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
