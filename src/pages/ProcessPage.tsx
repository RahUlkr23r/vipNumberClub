import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';
import { TopHeader } from '../components/TopHeader';

export const ProcessPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hindi' | 'english'>('hindi');

  return (
    <div className="process-page" style={{ minHeight: '85vh', backgroundColor: '#000' }}>
      {/* Authentic Top Header */}
      <TopHeader title="VIP Number Purchase Process" />

      {/* Original Page Center Icon */}
      <section className="page-center-ic padding-70">
        <div className="container">
          <div className="page-center-ic-in">
            <img src="https://www.vipnumbersclub.com/assets/front/img/process-page-ic.svg" alt="Process Icon" />
          </div>
        </div>
      </section>

      {/* Original Process Section with tabs and authentic video/card items */}
      <section className="process-sec padding-70">
        <div className="container">
          <div className="process-sec-in">
            <div className="tabing-sec">
              <div className="tabing-heading"><h5>Language</h5></div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'hindi' ? 'active' : ''}`}
                    type="button"
                    onClick={() => setActiveTab('hindi')}
                  >
                    Hindi
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'english' ? 'active' : ''}`}
                    type="button"
                    onClick={() => setActiveTab('english')}
                  >
                    English
                  </button>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="myTabContent" style={{ marginTop: '30px' }}>
              {activeTab === 'hindi' ? (
                <div className="tab-pane fade show active">
                  <div className="process-itms">
                    <div className="row g-4">
                      <div className="col-lg-4 col-md-6">
                        <div className="process-itm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <div className="process-itm-img" style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px', border: '1px solid #404040' }}>
                            <video controls playsInline style={{ width: '100%', height: '220px', objectFit: 'cover' }}>
                              <source src="https://www.vipnumbersclub.com/uploads/banners/cCqP3NUJ8L9shS0SU9w3.mp4" type="video/mp4" />
                            </video>
                          </div>
                          <div className="process-itm-con" style={{ color: '#ECAE01', fontWeight: 700, fontSize: '16px' }}>BASIC DOUBTS</div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="process-itm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <div className="process-itm-img" style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px', border: '1px solid #404040' }}>
                            <video controls playsInline style={{ width: '100%', height: '220px', objectFit: 'cover' }}>
                              <source src="https://www.vipnumbersclub.com/uploads/banners/x9bG3M0ojaLADD0wcL2X.mp4" type="video/mp4" />
                            </video>
                          </div>
                          <div className="process-itm-con" style={{ color: '#ECAE01', fontWeight: 700, fontSize: '16px' }}>SEARCH CHOICE NUMBER ?</div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="process-itm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <div className="process-itm-img" style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px', border: '1px solid #404040' }}>
                            <video controls playsInline style={{ width: '100%', height: '220px', objectFit: 'cover' }}>
                              <source src="https://www.vipnumbersclub.com/uploads/banners/uSxPOztWW8cJTmLKNp1P.mp4" type="video/mp4" />
                            </video>
                          </div>
                          <div className="process-itm-con" style={{ color: '#ECAE01', fontWeight: 700, fontSize: '16px' }}>HOW TO BUY ???</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tab-pane fade show active">
                  <div className="process-itms">
                    <div className="row g-4">
                      <div className="col-lg-4 col-md-6">
                        <div className="process-itm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <div className="process-itm-img" style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px', border: '1px solid #404040' }}>
                            <img src="https://www.vipnumbersclub.com/assets/front/img/vid-process-1.png" alt="How to Buy" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                          </div>
                          <div className="process-itm-con" style={{ color: '#ECAE01', fontWeight: 700, fontSize: '16px' }}>How to Buy</div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="process-itm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <div className="process-itm-img" style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px', border: '1px solid #404040' }}>
                            <img src="https://www.vipnumbersclub.com/assets/front/img/vid-process-2.png" alt="Why Trust Us" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                          </div>
                          <div className="process-itm-con" style={{ color: '#ECAE01', fontWeight: 700, fontSize: '16px' }}>Why Trust Us</div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="process-itm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <div className="process-itm-img" style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px', border: '1px solid #404040' }}>
                            <img src="https://www.vipnumbersclub.com/assets/front/img/vid-process-3.png" alt="Prepaid or Postpaid" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                          </div>
                          <div className="process-itm-con" style={{ color: '#ECAE01', fontWeight: 700, fontSize: '16px' }}>Prepaid or Postpaid</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step-by-Step Porting Guide Box */}
            <div style={{ marginTop: '50px', padding: '35px', background: '#090808', border: '1px solid #404040', borderRadius: '20px', boxShadow: '0px 0px 34px rgba(236,174,1,0.2)' }}>
              <h3 style={{ color: '#ECAE01', fontSize: '22px', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>
                4-Step Legal Porting Process (TRAI & MNP Compliant)
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#000', border: '1px solid #333', borderRadius: '15px', padding: '20px' }}>
                  <div style={{ color: '#ECAE01', fontSize: '28px', fontWeight: 800 }}>01</div>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '8px 0' }}>Select Number</h4>
                  <p style={{ color: '#aaa', fontSize: '12px', margin: 0 }}>
                    Choose your favorite sequence, pattern, or lucky numerology total from our live inventory.
                  </p>
                </div>

                <div style={{ background: '#000', border: '1px solid #333', borderRadius: '15px', padding: '20px' }}>
                  <div style={{ color: '#ECAE01', fontSize: '28px', fontWeight: 800 }}>02</div>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '8px 0' }}>Receive UPC Code</h4>
                  <p style={{ color: '#aaa', fontSize: '12px', margin: 0 }}>
                    Get your official Unique Porting Code (UPC) delivered via SMS and WhatsApp instantly.
                  </p>
                </div>

                <div style={{ background: '#000', border: '1px solid #333', borderRadius: '15px', padding: '20px' }}>
                  <div style={{ color: '#ECAE01', fontSize: '28px', fontWeight: 800 }}>03</div>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '8px 0' }}>Any Telecom Network</h4>
                  <p style={{ color: '#aaa', fontSize: '12px', margin: 0 }}>
                    Activate as Jio, Airtel, Vi, or BSNL. You choose Prepaid or Postpaid as per your preference.
                  </p>
                </div>

                <div style={{ background: '#000', border: '1px solid #333', borderRadius: '15px', padding: '20px' }}>
                  <div style={{ color: '#ECAE01', fontSize: '28px', fontWeight: 800 }}>04</div>
                  <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '8px 0' }}>Legal KYC Activation</h4>
                  <p style={{ color: '#aaa', fontSize: '12px', margin: 0 }}>
                    Visit any local telecom retailer or book home delivery with Aadhaar verification in your own name.
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
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
                  Start Browsing Numbers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
