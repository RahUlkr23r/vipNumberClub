import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SITE_INFO } from '../data/siteInfo';
import { X, MessageCircle, PhoneCall, ShieldCheck, CheckCircle2, Truck, FileText } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { bookingTargetNumber, closeBookingModal, showToast } = useApp();

  const [simType, setSimType] = useState<'prepaid' | 'postpaid'>('prepaid');
  const [network, setNetwork] = useState<'jio' | 'airtel' | 'vi' | 'bsnl' | 'any'>('any');
  const [deliveryType, setDeliveryType] = useState<'online_upc' | 'home_delivery'>('online_upc');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!bookingTargetNumber) return null;

  const handleWhatsAppBooking = () => {
    const text = `*VIP NUMBER BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━
• *Number:* ${bookingTargetNumber.displayNumber}
• *Price:* ${bookingTargetNumber.price} (MRP: ${bookingTargetNumber.originalPrice})
• *ID:* ${bookingTargetNumber.id}
• *Sim Type:* ${simType.toUpperCase()}
• *Preferred Network:* ${network.toUpperCase()}
• *Fulfillment:* ${deliveryType === 'online_upc' ? 'Instant Online UPC Code' : 'Doorstep COD Delivery'}
${name ? `• *Customer Name:* ${name}` : ''}
${phone ? `• *Contact Phone:* ${phone}` : ''}
${city ? `• *City:* ${city}` : ''}
━━━━━━━━━━━━━━━━━━
Hello Ranvijay, I would like to book this VIP number immediately. Please confirm availability and next steps.`;

    const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showToast('Connecting with Ranvijay on WhatsApp...', 'success');
    closeBookingModal();
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.trim().length < 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Callback request registered! Ranvijay will call you shortly.', 'success');
    setTimeout(() => {
      setIsSubmitted(false);
      closeBookingModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-5 right-5 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Booking Request Received</h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto">
              Our executive Ranvijay has received your interest for <strong className="text-gold font-mono">{bookingTargetNumber.displayNumber}</strong>. We will call you within 15 minutes.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header with target number */}
            <div className="text-center pb-4 border-b border-dark-border space-y-2">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                Direct Booking & Activation
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-bold tracking-wider text-white">
                {bookingTargetNumber.displayNumber}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-sm text-white/40 line-through">
                  {bookingTargetNumber.originalPrice}
                </span>
                <span className="text-2xl font-extrabold text-gold">
                  {bookingTargetNumber.price}
                </span>
              </div>
            </div>

            {/* Connection Type: Prepaid vs Postpaid */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-white/70 tracking-wider">
                1. Select Connection Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSimType('prepaid')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    simType === 'prepaid'
                      ? 'bg-gold/15 border-gold text-gold'
                      : 'bg-dark-surface border-dark-border text-white/70 hover:text-white'
                  }`}
                >
                  Prepaid SIM
                </button>
                <button
                  type="button"
                  onClick={() => setSimType('postpaid')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    simType === 'postpaid'
                      ? 'bg-gold/15 border-gold text-gold'
                      : 'bg-dark-surface border-dark-border text-white/70 hover:text-white'
                  }`}
                >
                  Postpaid SIM
                </button>
              </div>
            </div>

            {/* Preferred Network */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-white/70 tracking-wider">
                2. Select Telecom Network
              </label>
              <div className="grid grid-cols-5 gap-2">
                {(['jio', 'airtel', 'vi', 'bsnl', 'any'] as const).map(net => (
                  <button
                    key={net}
                    type="button"
                    onClick={() => setNetwork(net)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold uppercase transition-all border ${
                      network === net
                        ? 'bg-gold/15 border-gold text-gold'
                        : 'bg-dark-surface border-dark-border text-white/60 hover:text-white'
                    }`}
                  >
                    {net}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Option */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-white/70 tracking-wider">
                3. Activation / Delivery Option
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType('online_upc')}
                  className={`p-3 rounded-xl text-left border transition-all flex items-start gap-2.5 ${
                    deliveryType === 'online_upc'
                      ? 'bg-gold/10 border-gold text-white'
                      : 'bg-dark-surface border-dark-border text-white/60 hover:text-white'
                  }`}
                >
                  <FileText className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Instant UPC Code</div>
                    <div className="text-[11px] text-white/50">Online code, activate at any store</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('home_delivery')}
                  className={`p-3 rounded-xl text-left border transition-all flex items-start gap-2.5 ${
                    deliveryType === 'home_delivery'
                      ? 'bg-gold/10 border-gold text-white'
                      : 'bg-dark-surface border-dark-border text-white/60 hover:text-white'
                  }`}
                >
                  <Truck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Home Delivery (COD)</div>
                    <div className="text-[11px] text-white/50">Doorstep KYC verification</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Optional Contact Inputs */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold"
                />
                <input
                  type="tel"
                  placeholder="Your Mobile Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book Instantly on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCallbackSubmit}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dark-surface hover:bg-dark-elevated text-white/80 hover:text-white font-medium text-xs border border-dark-border transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold" />
                <span>Request 15-Minute Call Back from Ranvijay</span>
              </button>
            </div>

            {/* Guarantees micro-copy */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-white/50 pt-2 border-t border-dark-border/40">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" /> 100% Legal MNP
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full Refund Protection
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
