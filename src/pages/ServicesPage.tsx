import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';

export const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      {/* Original Page Center Icon */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/services-page-ic.svg" alt="VIP Number Services" />
          </div>
        </div>
      </section>

      {/* Original Content Section */}
      <section className="content-sec padding-70">
        <div className="container">
          <div className="content-sec-in">
            <div className="content-head">
              <h4 style={{ color: '#fff', fontSize: '26px', fontWeight: 700, marginBottom: '15px' }}>
                Welcome To <div className="content-head-block" style={{ display: 'inline' }}><span style={{ color: '#ECAE01' }}>VIP Number</span> Services!</div>
              </h4>
              <p>
                We provide rare, memorable digits designed for high-profile individuals and businesses seeking a competitive edge. Secure a high-value number today to enhance your brand recall and ensure you always stand out.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>- Numerology numbers</li>
              <li>- Business numbers</li>
              <li>- Customer care numbers</li>
              <li>- Helpline numbers</li>
              <li>- Sequence number for family</li>
              <li>- Toll free numbers</li>
              <li>- High end display numbers</li>
              <li>- Numbers for politicians</li>
              <li>- etc</li>
            </ul>

            <h5>Why choose our services ???</h5>
            <p>
              Choose VIP Numbers Club for a seamless, secure way to acquire premium VIP numbers. We handle everything from selection to activation, ensuring you get a memorable number that builds instant credibility. Save time and elevate your brand with a unique phone number that stands out on every call, text, and advertisement.
            </p>

            <h5>Biggest INVENTORY IN INDIA</h5>
            <p>
              Get premium VIP and fancy mobile numbers across all major networks like Jio, Airtel, Vi &amp; BSNL. Find rare patterns and budget-friendly sequences in our massive inventory.
            </p>

            <h5>Super simple process</h5>
            <p>
              Browse our live catalog, select your preferred sequence, and proceed to our secure payment checkout, followed by an MNP (Mobile Number Portability) process from any nearby store/shop fully assisted by our team members until activation. ☺️
            </p>

            <h5>Fast activation</h5>
            <p>
              Many clients fear long waits. Eliminate wait times with us. We provide your Unique Porting Code (UPC) superfast as compared to other vendors, which helps you complete the process the same day.
            </p>

            <h5>SUPER FAST PORTING</h5>
            <p>
              Easily port your new VIP number by sharing your UPC with the store executive. We handle the technical transition seamlessly, ensuring no service interruptions while you upgrade to your new VIP Number.
            </p>

            <h5>Money back guarantee until activation</h5>
            <p>
              After payment, a dedicated account manager is assigned to you. Our specialists provide expert assistance via phone, chat, or WhatsApp to address your questions instantly. We offer clear, end-to-end guidance from your initial inquiry to the final setup, ensuring a seamless experience with your new Choice Mobile Number.
            </p>
            <p>
              We take full responsibility for your number and payment until your number gets activated ✅️
            </p>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link
                to="/search-results"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '12px 32px',
                  borderRadius: '80px',
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}
              >
                Browse VIP Numbers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
