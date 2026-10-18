import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  ShieldCheck, 
  Truck, 
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export const Footer: React.FC = () => {
  const categoriesList = [
    "0000 Last", "0000 Special", "00000 Last", "000001", "00000abc", "00000X", "00001",
    "2 Couples", "3 Couples", "4 Couples", "Aaabbb Numbers", "abab-*xyxy", "Ababab Numbers",
    "Airtel Fancy Numbers", "Airtel VIP Numbers", "Bill Board Numbers", "BSNL VIP Numbers",
    "Business Mobile Numbers", "Customer Care Numbers", "Doubling (AABBCC)", "Fancy Numbers",
    "Full Symmetry xy*xy", "Golden Numbers", "Hexa Numbers", "Jio Fancy Numbers", "Jio VIP Numbers",
    "Mirror Numbers", "Mirror Ulta-Pulta", "Numerology Numbers", "Octa Numbers", "Penta Last",
    "Penta Numbers", "Pre Booking", "Premium Numbers", "Royal Gold", "Royal Series", "Semi Mirror",
    "Start Tetra", "Super Sale Zone", "Tetra Last", "Tetra Numbers", "Ulta-Pulta"
  ];

  const statesList = [
    "Andhra Pradesh", "Assam", "Bihar", "Chandigarh", "Delhi NCR", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Mumbai", "Navi Mumbai", "Odisha", "Punjab",
    "Rajasthan", "Jaipur", "Tamil Nadu", "Chennai", "Telangana", "Hyderabad", "Uttar Pradesh",
    "Lucknow", "Noida", "Uttarakhand", "West Bengal", "Kolkata"
  ];

  return (
    <footer className="bg-dark-pure border-t border-dark-border text-white/80 transition-colors">
      {/* Trust bar above footer */}
      <div className="border-b border-dark-border/60 bg-dark-surface/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Lowest Price Challenge</h4>
              <p className="text-xs text-white/60 mt-1">Found a lower price elsewhere? We will beat it with our price guarantee.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">100% Money-Back Guarantee</h4>
              <p className="text-xs text-white/60 mt-1">Full refund assurance until your number is legally activated on your ID.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Doorstep Home Delivery</h4>
              <p className="text-xs text-white/60 mt-1">Cash on Delivery available in Mumbai, Delhi, Pune & major metros.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Legal MNP Activation</h4>
              <p className="text-xs text-white/60 mt-1">Official Unique Porting Code (UPC) compliant with Indian telecom laws.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={SITE_INFO.assets.logo}
                alt={SITE_INFO.name}
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  VIP Numbers <span className="text-gold">club</span>
                </span>
                <span className="block text-[11px] text-white/60 font-medium">
                  {SITE_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed">
              Your premium destination for exclusive VIP mobile numbers. Defining digital prestige since 2009 with guaranteed lowest prices, verified MNP activation, and 24*7 support.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">{SITE_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="text-white/80 hover:text-gold transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-white/80 hover:text-gold transition-colors font-medium">
                  {SITE_INFO.phone} (Ranvijay)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white/80 font-mono">GSTIN: {SITE_INFO.gstNumber}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs uppercase font-semibold text-white/60 tracking-wider mb-3">Connect With Us</div>
              <div className="flex items-center gap-2">
                {Object.entries(SITE_INFO.socials).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/40 hover:bg-dark-hover transition-all capitalize text-xs font-semibold"
                    title={name}
                  >
                    {name.slice(0, 2).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/clientele" className="hover:text-gold transition-colors">Clientele</Link></li>
              <li><Link to="/process" className="hover:text-gold transition-colors">Activation Process</Link></li>
              <li><Link to="/prepaid-postpaid" className="hover:text-gold transition-colors">Prepaid / Postpaid</Link></li>
              <li><Link to="/home-delivery" className="hover:text-gold transition-colors">Home Delivery (COD)</Link></li>
              <li><Link to="/general-doubts" className="hover:text-gold transition-colors">General Doubts (FAQ)</Link></li>
              <li><Link to="/contact-us" className="hover:text-gold transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: By Network */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">By Network</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/search-results?network=jio" className="hover:text-gold transition-colors">Jio VIP Numbers</Link></li>
              <li><Link to="/search-results?network=jio" className="hover:text-gold transition-colors">Jio Fancy Numbers</Link></li>
              <li><Link to="/search-results?network=airtel" className="hover:text-gold transition-colors">Airtel VIP Numbers</Link></li>
              <li><Link to="/search-results?network=airtel" className="hover:text-gold transition-colors">Airtel Fancy Numbers</Link></li>
              <li><Link to="/search-results?network=vi" className="hover:text-gold transition-colors">Vi VIP Numbers</Link></li>
              <li><Link to="/search-results?network=vi" className="hover:text-gold transition-colors">Vi Fancy Numbers</Link></li>
              <li><Link to="/search-results?network=bsnl" className="hover:text-gold transition-colors">BSNL VIP Numbers</Link></li>
              <li><Link to="/search-results?network=bsnl" className="hover:text-gold transition-colors">BSNL Fancy Numbers</Link></li>
            </ul>
          </div>

          {/* Column 4: By Type */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">By Type</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/search-results?category=super-sale" className="hover:text-gold transition-colors">Super Sale Zone</Link></li>
              <li><Link to="/search-results?category=vvip-high-end" className="hover:text-gold transition-colors">VVIP Numbers</Link></li>
              <li><Link to="/search-results?category=786-numbers" className="hover:text-gold transition-colors">786 Auspicious</Link></li>
              <li><Link to="/search-results?category=tetra-numbers" className="hover:text-gold transition-colors">Tetra Numbers</Link></li>
              <li><Link to="/search-results?category=penta-numbers" className="hover:text-gold transition-colors">Penta Numbers</Link></li>
              <li><Link to="/search-results?category=mirror-numbers" className="hover:text-gold transition-colors">Mirror Numbers</Link></li>
              <li><Link to="/search-results?category=zero-lovers" className="hover:text-gold transition-colors">0 Lovers (Max Zeros)</Link></li>
              <li><Link to="/numerology-search" className="hover:text-gold transition-colors">Numerology Lucky</Link></li>
            </ul>
          </div>

          {/* Column 5: Policies & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">Policies & Info</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/refund-policy" className="hover:text-gold transition-colors">Refund Policy</Link></li>
              <li><Link to="/general-doubts" className="hover:text-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/general-doubts" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/process" className="hover:text-gold transition-colors">UPC Porting Rules</Link></li>
              <li><Link to="/contact-us" className="hover:text-gold transition-colors">24*7 Office Timings</Link></li>
              <li><Link to="/home-delivery" className="hover:text-gold transition-colors">COD Cities</Link></li>
            </ul>
          </div>
        </div>

        {/* Categories Directory Section */}
        <div className="mt-14 pt-8 border-t border-dark-border/60">
          <h4 className="text-xs uppercase font-bold text-gold tracking-widest text-center mb-4">
            VIP Numbers By Category
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {categoriesList.map(cat => (
              <Link
                key={cat}
                to={`/search-results?q=${encodeURIComponent(cat)}`}
                className="text-xs px-2.5 py-1 rounded-md bg-dark-card/60 hover:bg-gold/15 hover:text-gold text-white/60 border border-dark-border/60 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* States Directory Section */}
        <div className="mt-8 pt-6 border-t border-dark-border/40">
          <h4 className="text-xs uppercase font-bold text-gold tracking-widest text-center mb-4">
            VIP Numbers By State & City
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {statesList.map(state => (
              <Link
                key={state}
                to={`/search-results?city=${encodeURIComponent(state)}`}
                className="text-xs px-2.5 py-1 rounded-md bg-dark-card/40 hover:bg-gold/15 hover:text-gold text-white/50 border border-dark-border/40 transition-colors"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer Bar */}
      <div className="border-t border-dark-border bg-dark-card/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-white/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            Copyright &copy; 2005–2026 <strong className="text-white font-medium">VIP Numbers Club</strong>. All Rights Reserved.
            <div className="text-[11px] text-white/40 mt-1">
              Registered in Jaipur, Rajasthan, India • GSTIN: {SITE_INFO.gstNumber}
            </div>
          </div>
          <div className="text-[11px] text-white/40 max-w-md">
            Disclaimer: All mobile numbers are legally delivered via official Mobile Number Portability (MNP) Unique Porting Code (UPC). Registered strictly in the customer's name with valid Government KYC.
          </div>
        </div>
      </div>
    </footer>
  );
};
