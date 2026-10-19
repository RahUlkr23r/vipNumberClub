import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { TopHeader } from '../components/TopHeader';

export const ClientelePage: React.FC = () => {
  return (
    <div className="clientele-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* Authentic Top Header */}
      <TopHeader title="Our Esteemed Clientele" />

      {/* Original Page Center Icon */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/brand-trust.svg" alt="Brand Trust" />
          </div>
        </div>
      </section>

      {/* Original Clientele Steps Section */}
      <section className="steps brand-page steps-before-step padding-70">
        <div className="container">
          <div className="steps-itms">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6">
                <div className="steps-itm">
                  <div className="steps-itm-con">
                    <div className="steps-itm-img" style={{ background: '#fff', borderRadius: '15px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                      <img src="https://www.vipnumbersclub.com/uploads/settings/y2zi3NQjm8mZWAjmR2do.png" alt="FLIPKART" style={{ maxHeight: '70px', objectFit: 'contain' }} />
                    </div>
                  </div>
                  <div className="step-footer">
                    <p style={{ color: '#ECAE01', fontWeight: 700, fontSize: '18px', margin: '10px 0 0' }}>FLIPKART</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="steps-itm">
                  <div className="steps-itm-con">
                    <div className="steps-itm-img" style={{ background: '#fff', borderRadius: '15px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                      <img src="https://www.vipnumbersclub.com/uploads/settings/wJciO4iUY8CAET5X5KL8.png" alt="QUESS CORP" style={{ maxHeight: '70px', objectFit: 'contain' }} />
                    </div>
                  </div>
                  <div className="step-footer">
                    <p style={{ color: '#ECAE01', fontWeight: 700, fontSize: '18px', margin: '10px 0 0' }}>QUESS CORP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discretion Box */}
          <div style={{ marginTop: '50px', padding: '30px', background: '#090808', border: '1px solid #404040', borderRadius: '20px', textAlign: 'center', boxShadow: '0px 0px 34px rgba(236,174,1,0.2)' }}>
            <div style={{ color: '#ECAE01', display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <ShieldCheck style={{ width: '36px', height: '36px' }} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              100% Strict Client Privacy & Discretion
            </h3>
            <p style={{ color: '#aaa', fontSize: '13px', maxWidth: '640px', margin: '0 auto 20px', lineHeight: '1.6' }}>
              While we proudly serve leading corporations, executives, celebrities, and public figures across India, we maintain strict non-disclosure compliance. Individual customer identities and their allocated VIP numbers are held completely private.
            </p>
            <Link
              to="/search-results"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                color: '#000',
                fontWeight: 800,
                fontSize: '13px',
                padding: '12px 30px',
                borderRadius: '80px',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}
            >
              Browse Available VIP Numbers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
