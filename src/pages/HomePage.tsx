import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS } from '../data/numbers';

export const HomePage: React.FC = () => {
  // Extract number groups matching the original sections
  const vvipNumbers = VIP_NUMBERS.filter(n => n.priceNumeric >= 50000).slice(0, 8);
  const mostClickedNumbers = VIP_NUMBERS.filter(n => n.trending).slice(0, 8);
  const zeroLoversNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Zero Lovers') || n.number.includes('000')).slice(0, 8);
  const ababNumbers = VIP_NUMBERS.filter(n => n.tags.includes('ABAB Pattern')).slice(0, 8);
  const helplineNumbers = VIP_NUMBERS.filter(n => n.category.includes('Helpline') || n.number.startsWith('939000')).slice(0, 8);
  const numbers786 = VIP_NUMBERS.filter(n => n.tags.includes('786 Auspicious') || n.number.includes('786')).slice(0, 8);
  const tetraNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Tetra Numbers')).slice(0, 8);
  const mirrorNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Mirror Series')).slice(0, 8);
  const pentaNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Penta Numbers')).slice(0, 8);
  const budgetNumbers = VIP_NUMBERS.filter(n => n.priceNumeric <= 10000).slice(0, 8);
  const luckyRoot1 = VIP_NUMBERS.filter(n => n.total === 1).slice(0, 8);

  const adsBanners = [
    "https://www.vipnumbersclub.com/uploads/banners/3ijZiUrMQFODuH2slEUQ.jpg",
    "https://www.vipnumbersclub.com/uploads/banners/W5MTlCebysWS6dYphrQO.jpg",
    "https://www.vipnumbersclub.com/uploads/banners/xBzXJve2DFuLbqyfekfM.jpg",
    "https://www.vipnumbersclub.com/uploads/banners/vC5Ow4JNpZogcdVE29Jy.jpg",
    "https://www.vipnumbersclub.com/uploads/banners/HysJNRUc7lu9uWvUUUmj.jpg",
    "https://www.vipnumbersclub.com/uploads/banners/U5jWX2d1JtZG8kjBd6Ww.jpg",
    "https://www.vipnumbersclub.com/uploads/banners/WFejsJgWFhO74PT16PYS.png",
    "https://www.vipnumbersclub.com/uploads/banners/wM7zvSHFVwJ6G81hCcKN.jpg"
  ];

  const videoBanners = [
    "https://www.vipnumbersclub.com/uploads/banners/YuuhxRz95eDQMi2Dw9S6.png",
    "https://www.vipnumbersclub.com/uploads/banners/QSJj2eVZ9RTwAtvXwYXl.png",
    "https://www.vipnumbersclub.com/uploads/banners/YdkVQN78qMPYN5Naqev6.png",
    "https://www.vipnumbersclub.com/uploads/banners/9JRXC8GrFwuwvP5A0v28.png",
    "https://www.vipnumbersclub.com/uploads/banners/oogN9meTtcM0beKmPrUt.png"
  ];

  const trendingCategories = [
    { title: "royal gold", num: "600002 1008", prefix: "600", q: "royal-gold" },
    { title: "Premium Numbers", num: "8055 8 8055 3", prefix: "805", q: "premium-numbers" },
    { title: "Bill Board Numbers", num: "89 888 23456", prefix: "89 ", q: "bill-board-numbers" },
    { title: "Penta Last", num: "91 383 22222", prefix: "91 ", q: "penta-last" },
    { title: "Mirror Ulta-Pulta", num: "9127791277", prefix: "912", q: "mirror-ulta-pulta" },
    { title: "Tetra Last", num: "8399909999", prefix: "839", q: "tetra-last" },
    { title: "Fancy Numbers", num: "946 111 5 222", prefix: "946", q: "fancy-numbers" },
    { title: "Special Penta Last", num: "91 345 99999", prefix: "91 ", q: "special-penta-last" },
    { title: "Mirror Numbers", num: "7447474474", prefix: "744", q: "mirror-numbers" },
    { title: "00000 Last", num: "83005 00000", prefix: "830", q: "00000-last" }
  ];

  // Helper renderer for VIP Section with original .box-sec and .box-heading-h2 classes
  const renderNumberSection = (title: string, numbers: typeof VIP_NUMBERS, linkQuery?: string) => (
    <section className="vip-highend-number padding-70 py-4">
      <div className="container">
        <div className="vip-highend-number box-sec">
          <div className="box-heading">
            <div className="box-heading-h2">
              <h2 className="box-heading-h2-in">
                <Link to={`/search-results?category=${linkQuery || 'all'}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {title}
                </Link>
              </h2>
            </div>
          </div>

          <div className="number-sld">
            {numbers.map(num => (
              <div key={num.id} className="item">
                <NumberCard number={num} />
              </div>
            ))}
          </div>

          <div className="box-footer">
            <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="main-content">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. ADS BANNERS SECTION (.ads-sec) */}
      <section className="ads-sec pt-4 pb-4">
        <div className="container">
          <div className="ads-sec-in">
            {adsBanners.map((banner, i) => (
              <div key={i} className="item">
                <div className="ads-sec-itm">
                  <img
                    src={banner}
                    alt={`VIP Numbers Banner ${i + 1}`}
                    className="w-100 rounded-4 d-block object-fit-cover"
                    style={{ height: '180px', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING CATEGORIES SECTION (.trending-cat) */}
      <section className="trending-cat padding-70 py-4">
        <div className="container">
          <div className="trending-cat-in box-sec">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">
                  <Link to="/search-results" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Trending Categories
                  </Link>
                </h2>
              </div>
            </div>

            <div className="trending-cat-sld">
              {trendingCategories.map((cat, i) => (
                <div key={i} className="item">
                  <div className="trending-cat-itm">
                    <Link
                      to={`/search-results?category=${encodeURIComponent(cat.q)}`}
                      className="trending-cat-card-link text-decoration-none"
                    >
                      <div className="trending-cat-itm-con">
                        <h5 className="text-white text-capitalize">{cat.title}</h5>
                        <div className="trending-cat-number font-mono">
                          <span style={{ color: '#ECAE01' }}>{cat.prefix}</span>
                          {cat.num.slice(cat.prefix.length)}
                        </div>
                        <div className="btn-circle-s">
                          <span className="btn-circle">
                            <img src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg" alt="arrow" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "MY OWN CHOICE NUMBER" BANNER (.my-ownchoice) */}
      <section className="my-ownchoice padding-70 py-4">
        <div className="container">
          <Link
            to="/contact-us"
            className="my-ownchoice-in d-block text-decoration-none cursor-pointer"
            style={{ color: 'inherit' }}
          >
            <div className="my-ownchoice-con">
              <h2 className="my-ownchoice-heading text-white">
                My OWN <span>Choice Number</span>
              </h2>
              <div className="my-ownchoice-img">
                <img src="https://www.vipnumbersclub.com/assets/front/img/question-mark-icon.svg" alt="Question Mark" />
              </div>
            </div>
            <div className="box-footer box-footer-justify d-flex justify-content-between align-items-center">
              <span className="box-footer-a" style={{ color: '#ECAE01', fontWeight: 'bold' }}>Click Here</span>
              <p className="mb-0">For Specific Requirement</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. VVIP HIGH END NUMBERS */}
      {renderNumberSection("VVIP HIGH END NUMBERS", vvipNumbers, "vvip-high-end")}

      {/* 6. VIDEO / PROMO SLIDER (.video-s) */}
      <section className="video-s padding-70 py-4">
        <div className="container">
          <div className="video-s-in">
            <div className="video-slider">
              {videoBanners.map((vBanner, i) => (
                <div key={i} className="item">
                  <div className="video-s-itm">
                    <img
                      src={vBanner}
                      alt={`Platform showcase ${i + 1}`}
                      className="w-100 rounded-4 d-block object-fit-cover"
                      style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOST CLICKED NUMBERS */}
      {renderNumberSection("Most Clicked Numbers", mostClickedNumbers, "super-sale-zone")}

      {/* 8. 0 LOVERS (MAXIMUM ZEROS) */}
      {renderNumberSection("0 Lovers ( Maximum Zeros )", zeroLoversNumbers, "0-lovers")}

      {/* 9. AB-AB-AB ENDING SPECIAL */}
      {renderNumberSection("AB-AB-AB Ending Special", ababNumbers, "abab-ending")}

      {/* 10. SUPER HELPLINE SERIES (6) */}
      {renderNumberSection("Super Helpline Series (6)", helplineNumbers.length > 0 ? helplineNumbers : vvipNumbers, "super-helpline")}

      {/* 11. 786 NUMBERS */}
      {renderNumberSection("786 Numbers", numbers786, "786-numbers")}

      {/* 12. TETRA NUMBERS */}
      {renderNumberSection("Tetra Numbers", tetraNumbers, "tetra-numbers")}

      {/* 13. MIRROR NUMBERS */}
      {renderNumberSection("Mirror Numbers", mirrorNumbers, "mirror-numbers")}

      {/* 14. PENTA NUMBERS */}
      {renderNumberSection("Penta Numbers", pentaNumbers, "penta-numbers")}

      {/* 15. BUDGET FRIENDLY NUMBERS */}
      {renderNumberSection("Budget Friendly Numbers", budgetNumbers, "budget-friendly")}

      {/* 16. LUCKY NUMBERS (ROOT SUM 1) */}
      {renderNumberSection("Lucky Numbers (Root Sum 1)", luckyRoot1, "lucky-sum-1")}

      {/* 17. 3-STEP ACTIVATION STEPS (.steps) */}
      <section className="steps steps-before-step padding-70 py-5">
        <div className="container">
          <div className="steps-itms">
            <div className="row">
              <div className="col-xl-4 col-md-4 mt-3">
                <div
                  className="steps-itm p-4 rounded-4"
                  style={{ background: '#090808', border: '1px solid #404040', borderRadius: '15px' }}
                >
                  <div className="steps-itm-con text-center mb-3">
                    <div className="steps-itm-img mb-3">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/stp1.svg" alt="Step 1" style={{ height: '70px' }} />
                    </div>
                    <div className="steps-itm-info">
                      <h4 className="text-white fw-bold">India’s Biggest Inventory</h4>
                    </div>
                  </div>
                  <div className="step-footer text-center pt-2 border-top border-secondary">
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>3,00,000 + VIP Numbers to choose from</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mt-3">
                <div
                  className="steps-itm p-4 rounded-4"
                  style={{ background: '#090808', border: '1px solid #404040', borderRadius: '15px' }}
                >
                  <div className="steps-itm-con text-center mb-3">
                    <div className="steps-itm-img mb-3">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/stp2.svg" alt="Step 2" style={{ height: '70px' }} />
                    </div>
                    <div className="steps-itm-info">
                      <h4 className="text-white fw-bold">Super Fast UPC Delivery</h4>
                    </div>
                  </div>
                  <div className="step-footer text-center pt-2 border-top border-secondary">
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>100% Legal MNP Code Delivered on Mobile</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mt-3">
                <div
                  className="steps-itm p-4 rounded-4"
                  style={{ background: '#090808', border: '1px solid #404040', borderRadius: '15px' }}
                >
                  <div className="steps-itm-con text-center mb-3">
                    <div className="steps-itm-img mb-3">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/stp3.svg" alt="Step 3" style={{ height: '70px' }} />
                    </div>
                    <div className="steps-itm-info">
                      <h4 className="text-white fw-bold">Expert Support (24*7)</h4>
                    </div>
                  </div>
                  <div className="step-footer text-center pt-2 border-top border-secondary">
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Ranvijay Helpline & Doorstep Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. SEO CONTENT SECTION (.seo-content) */}
      <section className="seo-content padding-70 py-4">
        <div className="container">
          <div
            className="p-4 rounded-4 text-muted text-xs leading-relaxed"
            style={{ background: '#090808', border: '1px solid #2a2a2a', fontSize: '13px', lineHeight: '1.8' }}
          >
            <h3 className="text-white fw-bold mb-3" style={{ fontSize: '18px' }}>
              Buy VIP Mobile Numbers Online in India with VIP Numbers Club
            </h3>
            <p className="mb-2">
              Welcome to VIP Numbers Club, India's most trusted online destination for exclusive fancy mobile numbers, lucky numerology mobile numbers, and VVIP phone numbers. Established in 2009 in Jaipur, Rajasthan, we provide genuine vanity numbers with official Unique Porting Codes (UPC) compliant with TRAI and telecom guidelines.
            </p>
            <p className="mb-0">
              Whether you are looking for an easy-to-remember business helpline number, a prestigious repetitive sequence (like 0000, 7777, 8888, 9999), an auspicious 786 series, or numbers with custom astrological sums, our extensive inventory guarantees the lowest prices in India backed by our 100% money-back guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
