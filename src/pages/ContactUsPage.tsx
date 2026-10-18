import React, { useState } from 'react';
import { SITE_INFO } from '../data/siteInfo';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, FileText, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.trim().length < 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Enquiry received! Our team will contact you shortly.', 'success');
  };

  const handleWhatsAppDirect = () => {
    const text = `*NEW CONTACT ENQUIRY*
━━━━━━━━━━━━━━━━━━
${name ? `• *Name:* ${name}\n` : ''}• *Phone:* ${phone || 'Not provided'}
${email ? `• *Email:* ${email}\n` : ''}${subject ? `• *Subject:* ${subject}\n` : ''}${message ? `• *Message:* ${message}\n` : ''}━━━━━━━━━━━━━━━━━━
Hello Ranvijay, I would like to get in touch regarding VIP numbers.`;

    window.open(`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          Available 24*7 Day & Night
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Contact VIP Numbers Club
        </h1>
        <p className="text-sm text-white/60">
          Have questions about a VIP number, custom sourcing, or MNP activation? Our executive team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Coordinates Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-8 space-y-6 shadow-2xl">
            <h2 className="text-lg font-bold text-white pb-3 border-b border-dark-border">
              Direct Contact Information
            </h2>

            <div className="space-y-5 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white/50 uppercase font-semibold">Primary Executive & Helpline</div>
                  <div className="text-sm font-bold text-white mt-0.5">{SITE_INFO.leadContact}</div>
                  <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-gold font-mono text-sm font-bold hover:underline">
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/30 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white/50 uppercase font-semibold">Office Hours</div>
                  <div className="text-white font-medium mt-0.5">{SITE_INFO.officeHours}</div>
                  <div className="text-emerald-400 text-[11px] font-semibold mt-0.5">● Always Online & Active</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white/50 uppercase font-semibold">Official Email</div>
                  <a href={`mailto:${SITE_INFO.email}`} className="text-white font-medium hover:text-gold transition-colors mt-0.5 block">
                    {SITE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white/50 uppercase font-semibold">Registered Headquarters</div>
                  <div className="text-white font-medium mt-0.5 leading-relaxed">
                    {SITE_INFO.address.full}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/30 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white/50 uppercase font-semibold">GST Registration</div>
                  <div className="text-white font-mono font-bold mt-0.5">
                    {SITE_INFO.gstNumber}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat with Ranvijay on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Contact & Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-dark-card border border-dark-border p-6 sm:p-8 space-y-6 shadow-2xl">
            <h2 className="text-lg font-bold text-white pb-3 border-b border-dark-border">
              Send an Instant Message
            </h2>

            {submitted ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully</h3>
                <p className="text-xs text-white/60 max-w-xs mx-auto">
                  Thank you for reaching out. Ranvijay or a support specialist will reply to your inquiry shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs text-white hover:bg-dark-hover"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">Email Address (optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">Inquiry Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Booking inquiry or Custom number"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/70">Your Message / Requirement</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the VIP number sequence or doubt you have..."
                    className="w-full bg-dark-surface border border-dark-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gold hover:bg-gold-light text-dark-pure font-bold text-xs uppercase tracking-wider shadow-gold-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border text-xs text-white/80 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
