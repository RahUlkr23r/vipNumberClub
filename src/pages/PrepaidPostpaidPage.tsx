import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const PrepaidPostpaidPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          Flexibility Guaranteed
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          VIP Numbers for Prepaid & Postpaid
        </h1>
        <p className="text-sm text-white/60">
          Total freedom to activate your VIP number as a Prepaid or Postpaid connection on any major Indian telecom network.
        </p>
      </div>

      {/* Main Comparison & Rules Card */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-10 space-y-8 shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">
            Will the VIP Number Be Prepaid or Postpaid?
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            <strong className="text-gold">It is completely your choice.</strong> When you receive the official Unique Porting Code (UPC) from VIP Numbers Club and submit it for activation at your operator store or to the doorstep agent, you specify whether you want the SIM issued as a <strong className="text-white">Prepaid</strong> plan or a <strong className="text-white">Postpaid</strong> billing account.
          </p>
        </div>

        {/* Feature comparison boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border space-y-3">
            <div className="text-gold font-bold text-base flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <span>Prepaid Option</span>
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Recharge on demand with any standard pack</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>No recurring monthly rental obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Instant activation within 2-4 working days</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border space-y-3">
            <div className="text-gold font-bold text-base flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <span>Postpaid Option</span>
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ideal for corporate billing & GST input claims</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Priority operator customer care and family sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Available across Jio, Airtel, and Vodafone Idea (Vi)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Which Telecom Network */}
        <div className="space-y-4 pt-4 border-t border-dark-border">
          <h2 className="text-xl font-bold text-white">
            Which Telecom Network Will I Get the Number In?
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            You can port the number into <strong className="text-white">Jio, Airtel, Vi, or BSNL</strong>. The Unique Porting Code (UPC) is universally accepted by all registered telecom operators across all Indian telecom circles.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-bold text-white">
            <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">Reliance Jio</div>
            <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">Bharti Airtel</div>
            <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">Vodafone Idea (Vi)</div>
            <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">BSNL India</div>
          </div>
        </div>

        {/* Future switching */}
        <div className="space-y-3 pt-4 border-t border-dark-border text-xs text-white/70 leading-relaxed">
          <h3 className="text-sm font-bold text-white">Can I Switch from Prepaid to Postpaid (or vice-versa) Later?</h3>
          <p>
            Yes. As per standard TRAI (Telecom Regulatory Authority of India) guidelines, after completing 90 days with your chosen plan, you can freely migrate your VIP number between prepaid and postpaid without losing ownership or changing your number.
          </p>
        </div>
      </div>

      <div className="text-center pt-2">
        <Link
          to="/search-results"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-light text-dark-pure font-bold text-sm tracking-wide shadow-gold-sm hover:scale-105 transition-all"
        >
          <span>Find Your VIP Number</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
