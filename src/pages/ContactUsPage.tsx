import React, { useState } from 'react';
import { SITE_INFO } from '../data/siteInfo';
import { useApp } from '../context/AppContext';
import { Send, CheckCircle2, MapPin, Building2 } from 'lucide-react';
import { TopHeader } from '../components/TopHeader';

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
    <div className="contact-us-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* Authentic Top Header */}
      <TopHeader title="Contact VIP Numbers Club" />

      {/* Original Page Center Icon */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/contact-page-ic.svg" alt="Contact VIP Numbers Club" />
          </div>
        </div>
      </section>

      {/* Original Contact Section */}
      <section className="contact-sec padding-70">
        <div className="container">
          <div className="contact-sec-in">
            <div className="contact-itms">
              <div className="contact-itm">
                <div className="contact-cn">
                  <div className="contact-nm">Ranvijay</div>
                  <p className="contact-number">9111117777</p>
                </div>
                <div className="contact-meta">
                  <a href={`https://wa.me/${SITE_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/contact-whatsapp-ic.svg" alt="WhatsApp" />
                  </a>
                  <a href={`tel:${SITE_INFO.phoneRaw}`}>
                    <img src="https://www.vipnumbersclub.com/assets/front/img/contact-call-ic.svg" alt="Call" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-footer">
              <p>Office Timings 24*7 ( DAY &amp; NIGHT ) SHIFT</p>
              <p>Monday to Sunday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Coordinates & Online Message Form */}
      <section className="content-sec" style={{ paddingBottom: '70px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Headquarters details */}
            <div style={{ background: '#090808', border: '1px solid #404040', borderRadius: '20px', padding: '30px', boxShadow: '0px 0px 34px rgba(236,174,1,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ECAE01', marginBottom: '20px' }}>
                <Building2 style={{ width: '24px', height: '24px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#fff' }}>Jaipur Headquarters</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px', color: '#aaa' }}>
                <div>
                  <div style={{ color: '#ECAE01', fontWeight: 600 }}>OFFICIAL ADDRESS</div>
                  <div style={{ color: '#fff', marginTop: '4px', lineHeight: '1.6' }}>
                    {SITE_INFO.address.full}
                  </div>
                </div>

                <div>
                  <div style={{ color: '#ECAE01', fontWeight: 600 }}>GST REGISTRATION</div>
                  <div style={{ color: '#fff', marginTop: '4px', fontFamily: 'monospace', fontSize: '14px' }}>
                    {SITE_INFO.gstNumber}
                  </div>
                </div>

                <div>
                  <div style={{ color: '#ECAE01', fontWeight: 600 }}>OFFICIAL EMAIL</div>
                  <a href={`mailto:${SITE_INFO.email}`} style={{ color: '#fff', textDecoration: 'none', display: 'block', marginTop: '4px' }}>
                    {SITE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div style={{ background: '#090808', border: '1px solid #404040', borderRadius: '20px', padding: '30px', boxShadow: '0px 0px 34px rgba(236,174,1,0.2)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                Send Direct Inquiry
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 style={{ width: '48px', height: '48px', color: '#10b981', margin: '0 auto 12px' }} />
                  <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Inquiry Received!</h4>
                  <p style={{ color: '#aaa', fontSize: '13px' }}>Ranvijay will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ background: '#000', border: '1px solid #333', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Your Mobile Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ background: '#000', border: '1px solid #333', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px' }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Your Requirement / Preferred Digits..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ background: '#000', border: '1px solid #333', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', resize: 'none' }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                      color: '#000',
                      fontWeight: 800,
                      padding: '12px',
                      borderRadius: '80px',
                      border: 'none',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      marginTop: '6px'
                    }}
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
