import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { TopHeader } from '../components/TopHeader';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="refund-policy-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* Authentic Top Header */}
      <TopHeader title="Refund Policy" />

      {/* Original Page Center Icon */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/refund-page-ic.svg" alt="Refund Policy" />
          </div>
        </div>
      </section>

      {/* Original Content Section */}
      <section className="content-sec padding-70">
        <div className="container">
          <div className="content-sec-in">
            <h2 style={{ color: '#ECAE01', fontSize: '28px', fontWeight: 700, marginBottom: '25px', textAlign: 'center' }}>
              Refund Policy
            </h2>

            <h5>100% Refund</h5>
            <p>
              - If you do not get the same number you paid for.<br />
              - If the order cancelled by the seller.
            </p>

            <h5>No Refund</h5>
            <p>
              - After UPC generated no refund.
            </p>

            <h5>Refund time</h5>
            <p>
              - 4 to 7 working days.
            </p>

            {/* Assistance Box */}
            <div style={{ marginTop: '40px', padding: '25px', background: '#090808', border: '1px solid #404040', borderRadius: '15px', boxShadow: '0px 0px 34px rgba(236,174,1,0.2)' }}>
              <h5 style={{ color: '#ECAE01', marginBottom: '10px' }}>Need Assistance?</h5>
              <p style={{ color: '#ccc', margin: 0 }}>
                For any queries regarding refunds or payment status, contact our 24*7 support helpline: <strong style={{ color: '#fff' }}>Ranvijay ({SITE_INFO.phone})</strong> or email at <strong style={{ color: '#fff' }}>{SITE_INFO.email}</strong>.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link
                to="/search-results"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '12px 30px',
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
