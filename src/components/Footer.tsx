import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../data/siteInfo';

export const Footer: React.FC = () => {
  const categoriesList = [
    "0000 Last", "0000 Special", "00000 Last", "000001", "00000abc", "00000abcd", "00000X", "00000xy",
    "00001", "0000abcd", "0000X", "0000xy", "0000xyxy", "0001", "1+- Semi Mirror", "2 Couples",
    "2 Times Tetra", "2digit Numbers", "3 Couples", "3digit Numbers", "4 Couple (Joint)", "4 Couples",
    "4 Digits Semi Mirror", "5 Couples", "5 Digits Semi Mirror", "Aaabbb Numbers", "abab-*xyxy",
    "Ababab Numbers", "Abcabc Numbers", "Airtel Fancy Numbers", "Airtel Vip Numbers", "Bill Board Numbers",
    "blaa bla", "Bsnl Vip Numbers", "Business Mobile Numbers", "Customer Care Numbers", "Doubling (AABBCC)",
    "Fancy Numbers", "Full Symmetry xy*xy", "Golden Numbers", "Hexa Numbers", "Jio Fancy Numbers",
    "Jio Vip Numbers", "Mirror", "Mirror Numbers", "Mirror Ulta-Pulta", "Nepta Numbers", "Numerology Numbers",
    "Numerology Special", "Octa Numbers", "Penta Last", "Penta Numbers", "Pre Booking", "Premium Numbers",
    "royal gold", "Royal Series", "Semi Mirror", "Semi Mirror Numbers", "Semi Mirror with 00",
    "Septa Numbers", "Special Penta Last", "Standard Sequences", "Start Tetra", "Super Sale Zone",
    "TATA CATEGORY", "Tetra Last", "Tetra Last (Special)", "Tetra Numbers", "Tetra Numbers - XXXX",
    "Tripplate Semi Mirror", "Ulta-Pulta", "Unique for Customer Care", "Vi Fancy Numbers", "xxxxA",
    "xxxxAB", "xxxxABC", "xxxxABCD", "xxxxxA", "xxxxxAB", "xxxxxABC / ABCD"
  ];

  const statesList = [
    "Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
    "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry",
    "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Ahmedabad", "Bengaluru", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Delhi",
    "Faridabad", "Ghaziabad", "Goa", "Greater Noida", "Gurugram", "Hyderabad", "Indore", "Jaipur",
    "Jamshedpur", "Kanpur", "Kochi", "Kolkata", "Lucknow", "Ludhiana", "Mangalore", "Mumbai", "Mysuru",
    "Nagpur", "Noida", "Patna", "Pune", "Raipur", "Srinagar", "Surat", "Vijayawada", "Vizag"
  ];

  return (
    <footer className="footer-s padding-70">
      <div className="footer-sss padding-50">
        <div className="container">
          <div className="footer-s-in">
            <div className="row">
              {/* Column 1: Brand & Contact Info */}
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="footer-top mb-4">
                  <div className="footer-logo">
                    <Link to="/" className="d-flex align-items-center justify-content-start text-decoration-none">
                      <img
                        src="https://www.vipnumbersclub.com/uploads/settings/Ic5BHdi9XfWg71O19MdZ.png"
                        alt="VIP Numbers club"
                        className="footer-logo-img"
                      />
                      <div className="brand-info ms-2 text-start">
                        <span className="brand-name">VIP Numbers club</span>
                        <span className="brand-tagline">India's Biggest VIP Number Provider</span>
                      </div>
                    </Link>
                  </div>
                  <p className="mt-3 text-muted">
                    Your premium destination for exclusive VIP mobile numbers. We provide the best service and guaranteed lowest prices.
                  </p>
                  <ul className="footer-social justify-content-start mt-3 list-unstyled d-flex gap-3 p-0">
                    <li><a href="https://facebook.com/share/19SUhFDVsE/" target="_blank" rel="noopener noreferrer"><img src="https://www.vipnumbersclub.com/assets/front/img/Facebook.svg" alt="Facebook" /></a></li>
                    <li><a href="https://twitter.com/vip_number_club" target="_blank" rel="noopener noreferrer"><img src="https://www.vipnumbersclub.com/assets/front/img/Twitter.svg" alt="Twitter" /></a></li>
                    <li><a href="https://www.instagram.com/vip.numbers.club?stkn=MWI2d2l3azl1eXphZw==" target="_blank" rel="noopener noreferrer"><img src="https://www.vipnumbersclub.com/assets/front/img/Instagram.svg" alt="Instagram" /></a></li>
                    <li><a href="https://linkedin.com/in/vip-numbers-club-04397640a" target="_blank" rel="noopener noreferrer"><img src="https://www.vipnumbersclub.com/assets/front/img/LinkedIn.svg" alt="LinkedIn" /></a></li>
                    <li><a href="https://youtube.com/shorts/PT33n6uEMas?feature=shared" target="_blank" rel="noopener noreferrer"><img src="https://www.vipnumbersclub.com/assets/front/img/YouTube.svg" alt="YouTube" /></a></li>
                  </ul>
                </div>

                <div className="footer-contactus mt-4">
                  <div className="footer-contactus-itm mb-2">
                    <div className="footer-meta d-flex align-items-start gap-2">
                      <div className="footer-meta-img"><img src="https://www.vipnumbersclub.com/assets/front/img/location-ic.svg" alt="Address" /></div>
                      <div className="footer-meta-con">
                        <div className="footer-contactus-l text-white text-xs">
                          {SITE_INFO.address.full}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-contactus-itm mb-2">
                    <div className="footer-meta d-flex align-items-center gap-2">
                      <div className="footer-meta-img"><img src="https://www.vipnumbersclub.com/assets/front/img/email-ic.svg" alt="Email" /></div>
                      <div className="footer-meta-con">
                        <div className="footer-contactus-l text-white text-xs">
                          <a href={`mailto:${SITE_INFO.email}`} className="text-white text-decoration-none">
                            {SITE_INFO.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-contactus-itm mb-2">
                    <div className="footer-meta d-flex align-items-center gap-2">
                      <div className="footer-meta-img"><img src="https://www.vipnumbersclub.com/assets/front/img/call-ic.svg" alt="Phone" /></div>
                      <div className="footer-meta-con">
                        <div className="footer-contactus-l text-white text-xs">
                          <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-white text-decoration-none font-weight-bold">
                            {SITE_INFO.phone} (Ranvijay)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-contactus-itm">
                    <div className="footer-meta d-flex align-items-center gap-2">
                      <div className="footer-meta-img"><img src="https://www.vipnumbersclub.com/assets/front/img/gst-ic.svg" alt="GST" /></div>
                      <div className="footer-meta-con">
                        <div className="footer-contactus-l text-white text-xs font-mono">
                          GST: {SITE_INFO.gstNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="col-lg-2 col-md-3 col-6 mb-4">
                <div className="footer-links">
                  <h4 className="mb-4 color-orange text-uppercase fw-bold" style={{ color: '#ECAE01', fontSize: '15px' }}>Quick Links</h4>
                  <ul className="footer-link-itms list-unstyled space-y-2">
                    <li><Link to="/about-us" className="text-muted text-decoration-none hover-text-gold">About Us</Link></li>
                    <li><Link to="/services" className="text-muted text-decoration-none hover-text-gold">Services</Link></li>
                    <li><Link to="/clientele" className="text-muted text-decoration-none hover-text-gold">Clientele</Link></li>
                    <li><Link to="/contact-us" className="text-muted text-decoration-none hover-text-gold">Contact Us</Link></li>
                    <li><Link to="/general-doubts" className="text-muted text-decoration-none hover-text-gold">General Doubts</Link></li>
                    <li><Link to="/process" className="text-muted text-decoration-none hover-text-gold">Activation Process</Link></li>
                    <li><Link to="/prepaid-postpaid" className="text-muted text-decoration-none hover-text-gold">Prepaid / Postpaid</Link></li>
                    <li><Link to="/home-delivery" className="text-muted text-decoration-none hover-text-gold">Home Delivery</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 3: By Network */}
              <div className="col-lg-2 col-md-3 col-6 mb-4">
                <div className="footer-links">
                  <h4 className="mb-4 color-orange text-uppercase fw-bold" style={{ color: '#ECAE01', fontSize: '15px' }}>By Network</h4>
                  <ul className="footer-link-itms list-unstyled space-y-2">
                    <li><Link to="/search-results?network=jio" className="text-muted text-decoration-none hover-text-gold">Jio Fancy Number</Link></li>
                    <li><Link to="/search-results?network=jio" className="text-muted text-decoration-none hover-text-gold">Jio VIP Number</Link></li>
                    <li><Link to="/search-results?network=jio" className="text-muted text-decoration-none hover-text-gold">Jio Choice Number</Link></li>
                    <li><Link to="/search-results?network=vi" className="text-muted text-decoration-none hover-text-gold">Vi Fancy Number</Link></li>
                    <li><Link to="/search-results?network=vi" className="text-muted text-decoration-none hover-text-gold">Vi VIP Number</Link></li>
                    <li><Link to="/search-results?network=vi" className="text-muted text-decoration-none hover-text-gold">Vi Choice Number</Link></li>
                    <li><Link to="/search-results?network=airtel" className="text-muted text-decoration-none hover-text-gold">Airtel Fancy Number</Link></li>
                    <li><Link to="/search-results?network=airtel" className="text-muted text-decoration-none hover-text-gold">Airtel VIP Number</Link></li>
                    <li><Link to="/search-results?network=airtel" className="text-muted text-decoration-none hover-text-gold">Airtel Choice Number</Link></li>
                    <li><Link to="/search-results?network=bsnl" className="text-muted text-decoration-none hover-text-gold">BSNL Fancy Number</Link></li>
                    <li><Link to="/search-results?network=bsnl" className="text-muted text-decoration-none hover-text-gold">BSNL VIP Number</Link></li>
                    <li><Link to="/search-results?network=bsnl" className="text-muted text-decoration-none hover-text-gold">BSNL Choice Number</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 4: By Type */}
              <div className="col-lg-2 col-md-3 col-6 mb-4">
                <div className="footer-links">
                  <h4 className="mb-4 color-orange text-uppercase fw-bold" style={{ color: '#ECAE01', fontSize: '15px' }}>By Type</h4>
                  <ul className="footer-link-itms list-unstyled space-y-2">
                    <li><Link to="/search-results?type=vip" className="text-muted text-decoration-none hover-text-gold">VIP Mobile Number</Link></li>
                    <li><Link to="/search-results?type=fancy" className="text-muted text-decoration-none hover-text-gold">Fancy Mobile Number</Link></li>
                    <li><Link to="/search-results?type=choice" className="text-muted text-decoration-none hover-text-gold">Choice Mobile Number</Link></li>
                    <li><Link to="/search-results?type=golden" className="text-muted text-decoration-none hover-text-gold">Golden VIP Mobile Number</Link></li>
                    <li><Link to="/search-results?type=numerology" className="text-muted text-decoration-none hover-text-gold">Numerology Mobile Number</Link></li>
                    <li><Link to="/search-results?type=business" className="text-muted text-decoration-none hover-text-gold">Business VIP Mobile Number</Link></li>
                    <li><Link to="/search-results?type=prepaid" className="text-muted text-decoration-none hover-text-gold">Prepaid VIP Mobile Number</Link></li>
                    <li><Link to="/search-results?type=postpaid" className="text-muted text-decoration-none hover-text-gold">Postpaid VIP Mobile Number</Link></li>
                    <li><Link to="/search-results?type=lucky" className="text-muted text-decoration-none hover-text-gold">Lucky Numerology Number</Link></li>
                    <li><Link to="/search-results?type=lucky" className="text-muted text-decoration-none hover-text-gold">Lucky Mobile Number</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 5: Legal */}
              <div className="col-lg-2 col-md-3 col-6 mb-4">
                <div className="footer-links">
                  <h4 className="mb-4 color-orange text-uppercase fw-bold" style={{ color: '#ECAE01', fontSize: '15px' }}>Policies & Info</h4>
                  <ul className="footer-link-itms list-unstyled space-y-2">
                    <li><Link to="/general-doubts" className="text-muted text-decoration-none hover-text-gold">Privacy Policy</Link></li>
                    <li><Link to="/general-doubts" className="text-muted text-decoration-none hover-text-gold">Terms &amp; Conditions</Link></li>
                    <li><Link to="/refund-policy" className="text-muted text-decoration-none hover-text-gold">Refund Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Sections (Categories & States) */}
      <div className="footer-sss pt-0 pb-5">
        <div className="container">
          {/* Categories */}
          <div className="text-center mb-5">
            <h4 className="mb-4 color-orange text-uppercase fw-bold" style={{ color: '#ECAE01', fontSize: '16px' }}>VIP NUMBERS BY CATEGORY</h4>
            <ul className="footer-link-itms d-flex flex-wrap justify-content-center gap-2 list-unstyled m-0 p-0">
              {categoriesList.map(cat => (
                <li key={cat} className="m-0">
                  <Link
                    to={`/search-results?q=${encodeURIComponent(cat)}`}
                    className="text-decoration-none text-muted text-xs px-2 py-1 bg-dark rounded d-inline-block"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div className="text-center mb-4">
            <h4 className="mb-4 color-orange text-uppercase fw-bold" style={{ color: '#ECAE01', fontSize: '16px' }}>VIP NUMBERS BY STATE</h4>
            <ul className="footer-link-itms d-flex flex-wrap justify-content-center gap-2 list-unstyled m-0 p-0">
              {statesList.map(st => (
                <li key={st} className="m-0">
                  <Link
                    to={`/search-results?city=${encodeURIComponent(st)}`}
                    className="text-decoration-none text-muted text-xs px-2 py-1 bg-dark rounded d-inline-block"
                  >
                    {st}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom text-center py-3 text-muted text-xs border-top border-secondary">
        Copyright &copy; 2005-2026 VIP Numbers Club | All Rights Reserved
      </div>
    </footer>
  );
};
