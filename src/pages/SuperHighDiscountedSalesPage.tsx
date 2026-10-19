import React, { useMemo } from 'react';
import { TopHeader } from '../components/TopHeader';
import { NumberCard } from '../components/NumberCard';
import { VIP_NUMBERS } from '../data/numbers';

export const SuperHighDiscountedSalesPage: React.FC = () => {
  // Filter numbers for super sale / high discounts
  const saleNumbers = useMemo(() => {
    return VIP_NUMBERS.filter(
      (n) => n.superSale || n.category === 'super-sale-zone' || n.category === 'budget-friendly'
    );
  }, []);

  return (
    <div className="super-high-discount-page">
      {/* 1. Authentic Top Header */}
      <TopHeader
        centerIcon="https://www.vipnumbersclub.com/assets/front/img/high-stars.svg"
      />

      {/* 2. Main Page Heading */}
      <div className="page-heading padding-70" style={{ paddingBottom: '10px' }}>
        <div className="container text-center">
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 700 }}>
            Super High Discount VIP Number Sale
          </h1>
        </div>
      </div>

      {/* 3. Center Page Icon */}
      <section className="page-center-ic">
        <div className="container">
          <div className="page-center-ic-in">
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/high-tdiscount-page-ic.svg"
              alt="High Discount"
            />
          </div>
        </div>
      </section>

      {/* 4. Subheading Badge */}
      <div className="page-subheading padding-20" style={{ paddingTop: '15px', paddingBottom: '25px' }}>
        <div className="container">
          <div className="page-subheading-in text-center">
            <img
              src="https://www.vipnumbersclub.com/assets/front/img/available-for-fwehr.svg"
              alt="Available for few hours"
              style={{ maxWidth: '320px', width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* 5. Number Grid */}
      <section className="inner-number-box padding-70" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="innernumberBox">
            <div className="row g-4">
              {saleNumbers.map((num) => (
                <div key={num.id} className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <NumberCard number={num} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
