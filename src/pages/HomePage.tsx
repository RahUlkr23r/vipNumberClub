import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS } from '../data/numbers';

export const HomePage: React.FC = () => {
  // Extract number groups matching the exact 12 number sections
  const vvipNumbers = VIP_NUMBERS.filter(n => n.priceNumeric >= 50000).slice(0, 8);
  const mostClickedNumbers = VIP_NUMBERS.filter(n => n.trending || n.featured).slice(0, 8);
  const zeroLoversNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Zero Lovers') || n.number.includes('000')).slice(0, 10);
  const ababNumbers = VIP_NUMBERS.filter(n => n.tags.includes('ABAB Pattern') || n.category.includes('ABAB')).slice(0, 10);
  const helplineNumbers = VIP_NUMBERS.filter(n => n.category.includes('Helpline') || n.number.startsWith('939000') || n.number.includes('0002') || n.number.includes('0004')).slice(0, 8);
  const numbers786 = VIP_NUMBERS.filter(n => n.tags.includes('786 Auspicious') || n.number.includes('786')).slice(0, 10);
  const tetraNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Tetra Numbers') || /([0-9])\1{3}/.test(n.number)).slice(0, 10);
  const mirrorNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Mirror Series') || n.category.includes('Mirror')).slice(0, 10);
  const pentaNumbers = VIP_NUMBERS.filter(n => n.tags.includes('Penta Numbers') || /([0-9])\1{4}/.test(n.number)).slice(0, 8);
  const budgetNumbers = VIP_NUMBERS.filter(n => n.priceNumeric <= 10000).slice(0, 10);
  const luckyRoot1 = VIP_NUMBERS.filter(n => n.total === 1).slice(0, 10);

  // 8 promotional ad banners
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

  // 5 platform promotional video banners
  const videoBanners = [
    "https://www.vipnumbersclub.com/uploads/banners/YuuhxRz95eDQMi2Dw9S6.png",
    "https://www.vipnumbersclub.com/uploads/banners/QSJj2eVZ9RTwAtvXwYXl.png",
    "https://www.vipnumbersclub.com/uploads/banners/YdkVQN78qMPYN5Naqev6.png",
    "https://www.vipnumbersclub.com/uploads/banners/9JRXC8GrFwuwvP5A0v28.png",
    "https://www.vipnumbersclub.com/uploads/banners/oogN9meTtcM0beKmPrUt.png"
  ];

  // 26 Trending Categories from the original site
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
    { title: "00000 Last", num: "83005 00000", prefix: "830", q: "00000-last" },
    { title: "0000 Last", num: "96770 00000", prefix: "967", q: "0000-last" },
    { title: "0007 Special", num: "70007 00007", prefix: "700", q: "0007-special" },
    { title: "XY XY XY Pattern", num: "9012 9012 90", prefix: "901", q: "xy-xy-xy" },
    { title: "Doubling Numbers", num: "88 99 77 66 55", prefix: "88", q: "doubling-numbers" },
    { title: "Middle Repetitive", num: "98 77777 012", prefix: "98", q: "middle-repetitive" },
    { title: "Ending 786", num: "98765 00786", prefix: "987", q: "ending-786" }
  ];

  // 10 Popular Categories
  const popularCategories = [
    { title: "blaa bla", num: "7860000005", prefix: "786", q: "blaa-bla" },
    { title: "royal gold", num: "600002 1008", prefix: "600", q: "royal-gold" },
    { title: "Bill Board Numbers", num: "89 888 23456", prefix: "89 ", q: "bill-board-numbers" },
    { title: "Penta Last", num: "91 383 22222", prefix: "91 ", q: "penta-last" },
    { title: "Mirror Ulta-Pulta", num: "9127791277", prefix: "912", q: "mirror-ulta-pulta" },
    { title: "Tetra Numbers - XXXX", num: "8399909999", prefix: "839", q: "tetra-numbers" },
    { title: "786 Specials", num: "9014000786", prefix: "901", q: "786-numbers" },
    { title: "Hexa Series", num: "9111116971", prefix: "911", q: "hexa-series" },
    { title: "Symmetrical Numbers", num: "7770002399", prefix: "777", q: "symmetrical-numbers" },
    { title: "Triple Repeating", num: "8877339966", prefix: "887", q: "triple-repeating" }
  ];

  // Helper renderer for VIP Number sections with exact .box-sec, .number-sld, and .viewmore card
  const renderNumberSection = (title: string, numbers: typeof VIP_NUMBERS, categoryQuery: string) => (
    <section className="vip-highend-number padding-70">
      <div className="container">
        <div className="vip-highend-number box-sec">
          <div className="box-heading">
            <div className="box-heading-h2">
              <h2 className="box-heading-h2-in">
                <Link to={`/search-results?category=${categoryQuery}`} style={{ color: 'inherit', textDecoration: 'none' }}>
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
            <div className="item">
              <div className="number-sld-itm number-box viewmore">
                <Link to={`/search-results?category=${categoryQuery}`} className="viewmore-link">
                  <div className="viewmore-in">
                    <div className="viewmore-ic">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/btn-arrow.svg" alt="view more" />
                    </div>
                    <h4>VIEW MORE</h4>
                  </div>
                </Link>
              </div>
            </div>
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
      {/* 1. HERO SLIDER (.home-slider) */}
      <HeroSlider />

      {/* 2. PROMOTIONAL SLIDING ADS (.ads-sec) */}
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
      <section className="trending-cat padding-70">
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
      <section className="my-ownchoice padding-70">
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
      {renderNumberSection("VVIP HIGH END NUMBERS", vvipNumbers, "vvip-high-end-numbers")}

      {/* 6. VIDEO / PROMO SLIDER (.video-s) */}
      <section className="video-s padding-70">
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
                      style={{ height: '220px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOST CLICKED NUMBERS */}
      {renderNumberSection("Most Clicked Numbers", mostClickedNumbers, "most-clicked-numbers")}

      {/* 8. POPULAR CATEGORIES HORIZONTAL SLIDER (.popular-cat) */}
      <section className="trending-cat popular-cat padding-70">
        <div className="container">
          <div className="trending-cat-in box-sec">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">
                  <Link to="/search-results" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Popular Categories
                  </Link>
                </h2>
              </div>
            </div>

            <div className="trending-cat-sld">
              {popularCategories.map((cat, i) => (
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

      {/* 9. 0 LOVERS (MAXIMUM ZEROS) */}
      {renderNumberSection("0 Lovers ( Maximum Zeros )", zeroLoversNumbers, "0-lovers-maximum-zeros")}

      {/* 10. NUMEROLOGICALLY LUCKY ✨ (.numerical-sld) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="vip-highend-number box-sec">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">
                  <Link to="/numerology-search" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Numerologically Lucky ✨
                  </Link>
                </h2>
              </div>
            </div>
            <div className="numerical-sld">
              {[1, 3, 5, 9].map(num => (
                <div key={num} className="item">
                  <Link to={`/search-results?total=${num}`} className="numerical-sld-itm text-decoration-none">
                    <div className="numerical-sld-heading">Total {num}</div>
                    <p>Without 2/4/8</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SEARCH BY BUDGET (.budget-sld-big) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="vip-highend-number box-sec">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">
                  <Link to="/search-results" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Search By Budget
                  </Link>
                </h2>
              </div>
            </div>
            <div className="budget-sld budget-sld-big">
              {[
                { min: 1500, max: 3000, label: '₹1500 to ₹3000' },
                { min: 3000, max: 6000, label: '₹3000 to ₹6000' },
                { min: 6000, max: 10000, label: '₹6000 to ₹10000' },
                { min: 10000, max: 15000, label: '₹10000 to ₹15000' },
                { min: 15000, max: 25000, label: '₹15,000 to ₹25,000' },
                { min: 25000, max: 50000, label: '₹25,000 to ₹50,000' },
                { min: 50000, max: 999999, label: '₹50,000+' }
              ].map((b, i) => (
                <div key={i} className="item">
                  <Link
                    to={`/search-results?min_budget=${b.min}&max_budget=${b.max}`}
                    className="budget-sld-itm text-decoration-none"
                  >
                    {b.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ALWAYS TRENDING (.trending-sld-itm) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="vip-highend-number box-sec">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">
                  <Link to="/search-results" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Always Trending
                  </Link>
                </h2>
              </div>
            </div>
            <div className="budget-sld">
              {[
                { title: "PENTA ENDING", q: "00000" },
                { title: "HEXA ENDING", q: "000000" },
                { title: "SEPTA ENDING", q: "0000000" },
                { title: "OCTA ENDING", q: "00000000" }
              ].map((item, i) => (
                <div key={i} className="item">
                  <Link to={`/search-results?q=${item.q}`} className="trending-sld-itm text-decoration-none">
                    <div className="trending-con">{item.title}</div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer box-footer-black">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. AB-AB-AB ENDING SPECIAL */}
      {renderNumberSection("AB-AB-AB Ending Special", ababNumbers, "ab-ab-ab-ending-special")}

      {/* 14. VIP PORTAL FEATURED ON TOP PLATFORMS (.review-s) */}
      <section className="review-s padding-70">
        <div className="container p-0">
          <div className="review-s-in">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">VIP Portal Featured On Top Platforms</h2>
              </div>
            </div>
            <div className="review-slider">
              <div className="item">
                <div className="review-s-itm">
                  <a
                    href="https://www.theindiaforbesnews.co.in/2026/05/vip-numbers-club-defines-excellence.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://www.vipnumbersclub.com/uploads/settings/pC2sKXtcN6UtEFtCxil1.png"
                      alt="The India Forbes News"
                      style={{ maxHeight: '80px', objectFit: 'contain' }}
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="review-s-itm">
                  <img
                    src="https://www.vipnumbersclub.com/uploads/settings/IXQH3jgnS0fm3al5orgN.jfif"
                    alt="Featured Platform 2"
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="item">
                <div className="review-s-itm">
                  <img
                    src="https://www.vipnumbersclub.com/uploads/settings/tGGZOA01uL6638WmQ53k.jfif"
                    alt="Featured Platform 3"
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. SUPER HELPLINE SERIES (6) */}
      {renderNumberSection("Super Helpline Series (6)", helplineNumbers, "super-helpline-series-6")}

      {/* 16. 786 NUMBERS */}
      {renderNumberSection("786 Numbers", numbers786, "786-numbers")}

      {/* 17. TETRA NUMBERS */}
      {renderNumberSection("Tetra Numbers", tetraNumbers, "tetra-numbers")}

      {/* 18. MIRROR NUMBERS */}
      {renderNumberSection("Mirror Numbers", mirrorNumbers, "mirror-numbers")}

      {/* 19. PENTA NUMBERS */}
      {renderNumberSection("Penta Numbers", pentaNumbers, "penta-numbers")}

      {/* 20. BUDGET FRIENDLY NUMBERS */}
      {renderNumberSection("Budget Friendly Numbers", budgetNumbers, "budget-friendly-numbers")}

      {/* 21. FAMILY / CORPORATE PACK (.pack-sld) */}
      <section className="vip-highend-number padding-70">
        <div className="container">
          <div className="vip-highend-number box-sec">
            <div className="box-heading">
              <div className="box-heading-h2">
                <h2 className="box-heading-h2-in">Family/Corporate Pack</h2>
              </div>
            </div>
            <div className="pack-sld">
              {[2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                <div key={n} className="item">
                  <Link to="/search-results?category=family-pack" className="trending-sld-itm pack-itm text-decoration-none">
                    <div className="trending-con">
                      Pack <span>of</span> <span className="pack-clr" style={{ color: '#ECAE01', fontWeight: 800 }}>{n}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="box-footer">
              <p className="mb-0">100% Money-Back Guarantee Until Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 22. LUCKY NUMBERS (ROOT SUM 1) */}
      {renderNumberSection("Lucky Numbers (Root Sum 1)", luckyRoot1, "lucky-numbers-root-sum-1")}

      {/* 23. INDIA'S BIGGEST INVENTORY STEPS (.steps) */}
      <section className="steps steps-before-step padding-70">
        <div className="container">
          <div className="steps-itms">
            <div className="row">
              <div className="col-xl-4 mt-5">
                <div className="steps-itm">
                  <div className="steps-itm-con">
                    <div className="steps-itm-img">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/stp1.svg" alt="India's Biggest Inventory" />
                    </div>
                    <div className="steps-itm-info">
                      <h4>India’s Biggest Inventory</h4>
                    </div>
                  </div>
                  <div className="step-footer">
                    <p className="mb-0">3,00,000 + VIP Numbers to choose from</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 mt-5">
                <div className="steps-itm">
                  <div className="steps-itm-con">
                    <div className="steps-itm-img">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/stp2.svg" alt="Super Fast UPC Delivery" />
                    </div>
                    <div className="steps-itm-info">
                      <h4>Super Fast UPC Delivery</h4>
                    </div>
                  </div>
                  <div className="step-footer">
                    <p className="mb-0">Unique Porting Code delivered in minutes</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 mt-5">
                <div className="steps-itm">
                  <div className="steps-itm-con">
                    <div className="steps-itm-img">
                      <img src="https://www.vipnumbersclub.com/assets/front/img/stp3.svg" alt="Expert Support" />
                    </div>
                    <div className="steps-itm-info">
                      <h4>Expert Support</h4>
                    </div>
                  </div>
                  <div className="step-footer">
                    <p className="mb-0">24*7 Day &amp; Night Dedicated Helpline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24. SEO EDITORIAL COPY (.seo-content) */}
      <section className="seo-content padding-70">
        <div className="container">
          <div className="seo-content-in">
            <h2 className="mb-4" style={{ color: '#ECAE01', fontSize: '24px', fontWeight: 'bold' }}>
              Buy VIP Mobile Numbers Online in India with VIP Numbers Club
            </h2>
            <p>
              Looking to upgrade your communication identity with a prestigious, memorable mobile number? <strong>VIP Numbers Club</strong> offers India's largest and most exclusive collection of fancy mobile numbers, lucky numerology combinations, and high-end VVIP numbers across all telecom networks including Reliance Jio, Bharti Airtel, Vodafone Idea (Vi), and BSNL.
            </p>
            <p>
              Whether you are an entrepreneur looking for an easy-to-remember business helpline, a celebrity seeking an exclusive vanity number, or an individual wanting a lucky total based on your date of birth, we provide 100% legal, TRAI-compliant ownership transfers via official Mobile Number Portability (MNP) with a complete money-back guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
