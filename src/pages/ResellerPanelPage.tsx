import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ResellerPanelPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useApp();

  const [selectedRole, setSelectedRole] = useState('Numerologists');
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    shopOrFirmName: '',
    city: '',
    state: 'Rajasthan',
    yearsInBusiness: '2-5 years',
    docNumber: ''
  });

  const roles = [
    'Numerologists',
    'Airtel Store Executives',
    'Jio Store Executives',
    'BSNL Shop Owners',
    'Telecom Partners',
    'Mobile Shop Owners',
    'Sim Delivery Guys',
    'Activation Experts'
  ];

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowApplicationModal(true);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobileNumber.trim() || !formData.shopOrFirmName.trim()) {
      showToast('Please fill in your name, mobile, and firm details.', 'error');
      return;
    }
    setShowApplicationModal(false);
    showToast(
      `Application submitted for ${formData.shopOrFirmName}! Our onboarding manager will call ${formData.mobileNumber} within 24 hours.`,
      'success'
    );
  };

  return (
    <div className="reseller-panel-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* 1. Header with Close Icon */}
      <section className="header-sec" style={{ borderBottom: '1px solid #1c1c1c', padding: '16px 0' }}>
        <div className="container">
          <div className="header-inner d-flex justify-content-between align-items-center">
            <div className="header-l">
              <div className="header-login d-flex align-items-center gap-3">
                <span
                  className="login-ic"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#0F0F0F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="https://www.vipnumbersclub.com/assets/front/img/reseller.svg"
                    alt="Reseller"
                    style={{ width: '22px', height: '22px' }}
                  />
                </span>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '20px', fontWeight: 700 }}>
                  Reseller Panel
                </h4>
              </div>
            </div>

            <div className="close_wrap">
              <Link to="/" className="close" style={{ opacity: 1, textDecoration: 'none' }}>
                <img
                  src="https://www.vipnumbersclub.com/assets/front/img/close.svg"
                  alt="Close"
                  style={{ width: '18px', height: '18px' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Page Title */}
      <div className="page-heading padding-70 pb-0" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="container text-center">
          <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>
            Become a VIP Partner
          </h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '6px' }}>
            Select your professional profile to access B2B bulk catalog & distributor margins
          </p>
        </div>
      </div>

      {/* 3. Original Reseller Form Options */}
      <section className="reseller-page padding-70" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
        <div className="container">
          <form onSubmit={handleInitialSubmit} className="reseller-pannel-in">
            <div
              className="reseller-pannel-itms"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxWidth: '360px',
                margin: '0 auto'
              }}
            >
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="reseller-pannel-itm form-check"
                  onClick={() => setSelectedRole(role)}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    background: selectedRole === role ? '#ECAE01' : '#0F0F0F',
                    border: selectedRole === role ? '1px solid #ECAE01' : '1px solid #282828',
                    borderRadius: '50px',
                    padding: '14px 20px',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedRole === role ? '0 0 18px rgba(236, 174, 1, 0.3)' : 'none'
                  }}
                >
                  <label
                    className="form-check-label w-100"
                    style={{
                      cursor: 'pointer',
                      color: selectedRole === role ? '#000' : '#fff',
                      fontWeight: selectedRole === role ? 700 : 500,
                      fontSize: '15px',
                      display: 'block',
                      margin: 0
                    }}
                  >
                    {role}
                  </label>
                </div>
              ))}
            </div>

            {/* Verification Notice */}
            <div
              className="reseller-pannel-para mt-5"
              style={{
                maxWidth: '560px',
                margin: '35px auto 0',
                background: '#0B0B0B',
                border: '1px solid #ECAE01',
                borderRadius: '16px',
                padding: '18px 24px',
                textAlign: 'center'
              }}
            >
              <div style={{ color: '#ECAE01', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
                <ShieldCheck size={20} />
                <span style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Manual Security Verification
                </span>
              </div>
              <p style={{ color: '#ccc', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                Our Team Will Verify business documents Manually, after that only we will register you in reseller panel.
              </p>
            </div>

            {/* Submit Action */}
            <div className="submit-wrp mt-4 text-center">
              <button
                type="submit"
                className="btn btn_primary px-5 py-3"
                style={{
                  background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '14px',
                  borderRadius: '50px',
                  border: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 20px rgba(236, 174, 1, 0.3)'
                }}
              >
                Continue Application ({selectedRole})
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Complete Application Modal */}
      {showApplicationModal && (
        <div
          className="modal fade show"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            padding: '15px'
          }}
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '520px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content"
              style={{
                background: '#0F0F0F',
                border: '1px solid #ECAE01',
                borderRadius: '24px',
                boxShadow: '0px 0px 40px rgba(236, 174, 1, 0.3)'
              }}
            >
              <div className="modal-body" style={{ position: 'relative', padding: '30px 25px' }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowApplicationModal(false)}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                </button>

                <div className="text-center mb-4">
                  <span
                    style={{
                      background: 'rgba(236, 174, 1, 0.15)',
                      color: '#ECAE01',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 700
                    }}
                  >
                    Role: {selectedRole}
                  </span>
                  <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginTop: '10px' }}>
                    Reseller Onboarding Form
                  </h4>
                  <p style={{ color: '#888', fontSize: '12px', margin: 0 }}>
                    Please enter your store/agency credentials for verification
                  </p>
                </div>

                <form onSubmit={handleApplicationSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label style={{ color: '#aaa', fontSize: '12px', marginBottom: '4px', display: 'block' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Vikramaditya Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '10px 14px' }}
                        required
                      />
                    </div>

                    <div className="col-md-6 col-12">
                      <label style={{ color: '#aaa', fontSize: '12px', marginBottom: '4px', display: 'block' }}>
                        Direct Mobile / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="10-digit mobile"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '10px 14px' }}
                        required
                      />
                    </div>

                    <div className="col-md-6 col-12">
                      <label style={{ color: '#aaa', fontSize: '12px', marginBottom: '4px', display: 'block' }}>
                        Shop / Firm / Agency Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Firm or Agency name"
                        value={formData.shopOrFirmName}
                        onChange={(e) => setFormData({ ...formData, shopOrFirmName: e.target.value })}
                        style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '10px 14px' }}
                        required
                      />
                    </div>

                    <div className="col-md-6 col-12">
                      <label style={{ color: '#aaa', fontSize: '12px', marginBottom: '4px', display: 'block' }}>
                        City *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Jaipur, Delhi, Pune"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '10px 14px' }}
                        required
                      />
                    </div>

                    <div className="col-md-6 col-12">
                      <label style={{ color: '#aaa', fontSize: '12px', marginBottom: '4px', display: 'block' }}>
                        GST or Aadhaar / Store ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Registration or Employee ID"
                        value={formData.docNumber}
                        onChange={(e) => setFormData({ ...formData, docNumber: e.target.value })}
                        style={{ background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '10px', padding: '10px 14px' }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="submit"
                      className="btn btn_primary w-100"
                      style={{
                        background: 'linear-gradient(270deg, #D18800 0%, #FDC700 100%)',
                        color: '#000',
                        fontWeight: 700,
                        padding: '12px 20px',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '14px',
                        textTransform: 'uppercase'
                      }}
                    >
                      Submit For Document Verification
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
