import React from 'react';
import { SITE_INFO } from '../data/siteInfo';
import { ShieldCheck, CheckCircle2, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest">
          100% Money-Back Guarantee
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Refund Policy
        </h1>
        <p className="text-sm text-white/60">
          Transparent, risk-free policies designed to protect our buyers at every step of the transaction.
        </p>
      </div>

      {/* Main Policy Card */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-10 space-y-8 shadow-2xl">
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <span>100% Refund Conditions</span>
          </h2>
          <div className="p-4 rounded-2xl bg-dark-surface border border-dark-border text-sm text-white/80 space-y-2 leading-relaxed">
            <p>
              • <strong>100% Full Refund:</strong> If you do not get the exact same mobile number for which the payment was made.
            </p>
            <p>
              • <strong>Full Refund (100%):</strong> If the order is cancelled by the seller / VIP Numbers Club due to any technical or operator restriction.
            </p>
            <p className="text-red-400/90 text-xs">
              • <strong>Exclusions:</strong> No refunds are provided once the official Unique Porting Code (UPC) has been successfully generated and delivered, or once the number is activated under your name.
            </p>
          </div>
        </div>

        {/* Section 2: Processing Timeline */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-gold" />
            <span>Refund Processing Time</span>
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            All approved refunds are initiated through the original payment channel (Bank Transfer / UPI / Card) and processed within <strong className="text-gold">4 to 7 working days</strong>.
          </p>
        </div>

        {/* Section 3: How to Request */}
        <div className="space-y-4 pt-4 border-t border-dark-border">
          <h2 className="text-xl font-bold text-white">
            How to Request a Refund
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            To request a refund, contact our support team with your Order ID, the booked number, and your payment transaction receipt:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border">
              <div className="text-white/50 uppercase font-semibold">Direct Call or WhatsApp</div>
              <div className="font-bold text-white text-sm mt-1">{SITE_INFO.leadContact} — {SITE_INFO.phone}</div>
              <div className="text-emerald-400 mt-0.5">24*7 Day & Night Helpline</div>
            </div>

            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border">
              <div className="text-white/50 uppercase font-semibold">Email Resolution</div>
              <div className="font-bold text-white text-sm mt-1">{SITE_INFO.email}</div>
              <div className="text-white/50 mt-0.5">Subject: "Refund Request - [Your Number]"</div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Catalogue CTA */}
      <div className="text-center pt-2">
        <Link
          to="/search-results"
          className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-gold-light"
        >
          <span>Return to VIP Number Catalogue</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
