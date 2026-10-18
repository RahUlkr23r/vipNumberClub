import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { SITE_INFO } from '../data/siteInfo';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, ShieldCheck } from 'lucide-react';

export const GeneralDoubtsPage: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold text-gold tracking-widest">
          Transparent & Verified Answers
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-white/60">
          Everything you need to know about purchasing, porting, and legally owning a VIP mobile number in India.
        </p>

        {/* Search Input for FAQs */}
        <div className="relative max-w-md mx-auto pt-2">
          <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. legal, refund, jio, postpaid)..."
            className="w-full bg-dark-card border border-dark-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      {/* Accordion FAQ Items */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-white/60 bg-dark-card rounded-2xl border border-dark-border">
            No questions found matching "{searchQuery}". Try a different keyword or contact our 24*7 support.
          </div>
        ) : (
          filteredFaqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-dark-card border border-dark-border overflow-hidden transition-all duration-200 hover:border-gold/30"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-gold transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-mono shrink-0">
                      {faq.id}
                    </span>
                    <span>{faq.question.replace(/^\d+\.\s*/, '')}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/40 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-dark-border/40 animate-fade-in pl-14">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still have questions card */}
      <div className="rounded-3xl bg-dark-surface border border-gold/30 p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Still Have a General Doubt?</h3>
        <p className="text-xs text-white/60 max-w-md mx-auto">
          Ranvijay and our VIP number specialists are available 24 hours a day, 7 days a week to answer your specific queries.
        </p>
        <a
          href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Ranvijay, I have a doubt regarding VIP Numbers: ')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat with Support on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
