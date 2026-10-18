import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      {/* Top Banner with original image */}
      <section className="about-page-img-s">
        <div className="container">
          <div className="about-page-img">
            <img src="https://www.vipnumbersclub.com/assets/front/img/about-page.png" alt="About VIP Numbers Club" />
          </div>
        </div>
      </section>

      {/* Main Content Section using exact original classes */}
      <section className="content-sec padding-70">
        <div className="container">
          <div className="content-sec-in">
            <h2 style={{ color: '#ECAE01', fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>
              Defining Digital Prestige Since 2009
            </h2>

            <p>
              In an era where your mobile number is more than just a contact—it is your digital identity, your brand’s first impression, and a symbol of your status—<strong>VIP Numbers Club</strong> stands as the definitive leader in VIP Mobile Number consultancy. Based in the heart of the Pink City, Jaipur, we have spent the last 16 years curating the most exclusive, memorable, and powerful mobile numbers for India’s elite.
            </p>

            <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
              Our Legacy: 16 Years of Excellence
            </h4>
            <p>
              Trust is not built overnight; it is forged over decades of consistent service. Since our inception in 2009, we have transitioned from a local mobile service to India’s most trusted marketplace for premium telecommunication identities.
            </p>

            <p>
              We understand that a VIP number is an investment. Whether it is a "Seven Series" repetitive sequence, a "Royal Mirror" pattern, or a "Date of Birth" specialty number, we have successfully delivered over 16,000+ Numbers connections to satisfied clients across the nation.
            </p>

            <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
              The Power of 70: A Team Like No Other
            </h4>
            <p>
              While many in this industry operate as solo brokers, we believe in the power of an institution. Our strength lies in our dedicated team of 70 professionals. This is not just a business; it is a full-scale operation designed to provide you with a seamless experience.
            </p>

            <p>
              <strong>Expert Consultants:</strong> Our team helps you choose a number that aligns with your numerological preferences or business branding.
            </p>

            <p>
              <strong>Documentation Specialists:</strong> We handle the complex "Porting" and "MNP" processes, ensuring that the legal transfer of ownership is 100% compliant with TRAI regulations. After-Sales Support: Our relationship doesn't end when the SIM is activated.
            </p>

            <p>
              Our large team ensures that any technical or administrative queries are resolved instantly.
            </p>

            <h5>Why Trust Us ???</h5>

            <p>
              In a market often clouded by uncertainty, we bring transparency and security.
            </p>

            <p>
              Here is why thousands of high-net-worth individuals, celebrities, and business tycoons choose us:
            </p>

            <p>
              <strong>Physical Presence in Jaipur:</strong> Unlike anonymous online sellers, we are a rooted organization. Our headquarters in Jaipur serves as a testament to our permanence and accountability.
            </p>

            <p>
              <strong>Verified Ownership:</strong> We ensure every number in our inventory is verified and ready for immediate legal transfer. We prioritize the security of your data and your investment above all else.
            </p>

            <p>
              <strong>End-to-End Handholding:</strong> From selecting your number to the final activation on your preferred network (Airtel, Jio, Vi, or BSNL), our team manages the entire lifecycle of the purchase.
            </p>

            <p>
              <strong>Legacy of Privacy:</strong> We understand that our clients value discretion. We handle every transaction with the highest level of confidentiality, ensuring your premium identity is secured privately.
            </p>

            <p>
              <strong>Our Philosophy: Your Identity, Our Passion</strong>
            </p>

            <p>
              We believe that a phone number should be as unique as the person who owns it. In a world of ten-digit strings, we provide the "Golden" exceptions. We don't just sell numbers; we help you craft a legacy. A VIP number from VIP Numbers Club is easy to remember for your clients, prestigious for your social circle, and an asset that appreciates in value over time.
            </p>

            <p>
              As we look toward the future, our mission remains the same: To provide the most exclusive telecommunication assets in India with the integrity of a 16-year-old institution.
            </p>

            <h5>Join the Elite</h5>

            <p>
              Whether you are a business looking to increase your marketing recall or an individual looking to stand out, your journey toward a premium identity starts here. Backed by 16 years of experience and a team of 70 experts, we are ready to serve you.
            </p>

            {/* Corporate Head Office Details */}
            <div style={{ marginTop: '40px', padding: '30px', background: '#090808', border: '1px solid #404040', borderRadius: '20px', boxShadow: '0px 0px 34px rgba(236,174,1,0.2)' }}>
              <h4 style={{ color: '#ECAE01', fontSize: '18px', fontWeight: 700, marginBottom: '15px' }}>
                Corporate Headquarters & Registration
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', fontSize: '14px', color: '#ccc' }}>
                <div>
                  <div style={{ color: '#777', fontSize: '12px', textTransform: 'uppercase' }}>Entity</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>VIP Numbers Club</div>
                  <div style={{ color: '#999' }}>GSTIN: {SITE_INFO.gstNumber}</div>
                </div>
                <div>
                  <div style={{ color: '#777', fontSize: '12px', textTransform: 'uppercase' }}>Address</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>{SITE_INFO.address.suite}</div>
                  <div style={{ color: '#999' }}>{SITE_INFO.address.landmark}, {SITE_INFO.address.city}, {SITE_INFO.address.state} - {SITE_INFO.address.pincode}</div>
                </div>
                <div>
                  <div style={{ color: '#777', fontSize: '12px', textTransform: 'uppercase' }}>Direct Support</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>Ranvijay ({SITE_INFO.phone})</div>
                  <div style={{ color: '#999' }}>Office Hours: 24*7 Day & Night Shift</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link
                to="/search-results"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(230.05deg, #DBA73E 23.32%, #F7ED9A 44.14%, #A76F29 56.54%, #E0C77D 67.61%)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '15px',
                  padding: '14px 35px',
                  borderRadius: '80px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  boxShadow: '0px 0px 34px rgba(236, 174, 1, 0.4)'
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
