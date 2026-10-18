import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { VIP_NUMBERS, POPULAR_CATEGORIES } from '../data/numbers';
import { NumberCard } from '../components/NumberCard';

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedPrefixes, setSelectedPrefixes] = useState<number[]>(() => {
    const s = searchParams.get('start_with');
    return s ? s.split(',').map(Number) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [selectedTotal, setSelectedTotal] = useState<number | null>(() => {
    const t = searchParams.get('total');
    if (!t) return null;
    const value = parseInt(t, 10);
    return Number.isNaN(value) ? null : value;
  });
  const [selectedSum, setSelectedSum] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'relevance' | 'price_low_to_high' | 'price_high_to_low'>(
    (searchParams.get('sort') as any) || 'relevance'
  );

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'startwith' | 'sortbyprice' | 'numerology'>('startwith');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setSearchTerm(q);

    const cat = searchParams.get('category');
    if (cat !== null) setSelectedCategory(cat);

    const t = searchParams.get('total');
    if (t !== null) {
      const total = parseInt(t, 10);
      setSelectedTotal(Number.isNaN(total) ? null : total);
    }
  }, [searchParams]);

  const togglePrefix = (p: number) => {
    setSelectedPrefixes(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedPrefixes([]);
    setSelectedCategory('all');
    setSelectedTotal(null);
    setSelectedSum(null);
    setSortBy('relevance');
    setSearchParams({});
    setIsFilterModalOpen(false);
  };

  const filteredNumbers = useMemo(() => {
    let result = [...VIP_NUMBERS];

    if (searchTerm.trim()) {
      const clean = searchTerm.trim().replace(/\D/g, '');
      const raw = searchTerm.trim().toLowerCase();
      result = result.filter(n => {
        if (clean && n.number.includes(clean)) return true;
        if (n.category.toLowerCase().includes(raw)) return true;
        if (n.tags.some(t => t.toLowerCase().includes(raw))) return true;
        return false;
      });
    }

    if (selectedPrefixes.length > 0) {
      result = result.filter(n => selectedPrefixes.includes(parseInt(n.number.charAt(0), 10)));
    }

    if (selectedCategory && selectedCategory !== 'all') {
      const catLower = selectedCategory.toLowerCase().replace(/-/g, ' ');
      result = result.filter(n => 
        n.category.toLowerCase().includes(catLower) || 
        n.tags.some(t => t.toLowerCase().includes(catLower))
      );
    }

    const minBudget = searchParams.get('min_budget');
    const maxBudget = searchParams.get('max_budget');
    if (minBudget) {
      const min = parseInt(minBudget, 10);
      if (!Number.isNaN(min)) result = result.filter(n => n.priceNumeric >= min);
    }
    if (maxBudget) {
      const max = parseInt(maxBudget, 10);
      if (!Number.isNaN(max)) result = result.filter(n => n.priceNumeric <= max);
    }

    if (selectedTotal !== null) {
      result = result.filter(n => n.total === selectedTotal);
    }

    if (selectedSum !== null) {
      result = result.filter(n => n.sum === selectedSum);
    }

    if (sortBy === 'price_low_to_high') {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price_high_to_low') {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return result;
  }, [searchTerm, selectedPrefixes, selectedCategory, selectedTotal, selectedSum, sortBy, searchParams]);

  return (
    <div className="search-results-page">
      {/* 1. TOP SEARCH & FILTER BAR (.familyPack-top) */}
      <section className="familyPack-top padding-70 pb-0" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="familyPack-top-in">
            {/* Direct Search Input */}
            <div style={{ maxWidth: '600px', margin: '0 auto 20px auto', position: 'relative' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search number sequence (e.g. 786, 000, 8055)..."
                className="form-control"
                style={{
                  background: '#090808',
                  border: '1px solid #ECAE01',
                  borderRadius: '30px',
                  color: '#fff',
                  padding: '12px 24px',
                  fontSize: '15px',
                  boxShadow: '0 0 20px rgba(236, 174, 1, 0.2)'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#aaa',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Meta Buttons: Reset Filter & Filter Trigger */}
            <div className="familyPack-top-meta filter-meta" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <button
                type="button"
                onClick={handleReset}
                className="familyPack-top-meta-itm text-decoration-none"
                style={{ background: 'none', border: '1px solid #404040', color: '#aaa', borderRadius: '20px', padding: '6px 18px', cursor: 'pointer' }}
              >
                Reset Filter
              </button>
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(true)}
                className="familyPack-top-meta-itm"
                style={{
                  background: '#ECAE01',
                  color: '#000',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: '20px',
                  padding: '6px 22px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <span>Filter</span>
                <img src="https://www.vipnumbersclub.com/assets/front/img/filter-icon.svg" alt="Filter" style={{ width: '16px', height: '16px', filter: 'brightness(0)' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY HORIZONTAL PILLS */}
      <section style={{ padding: '20px 0 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              style={{
                background: selectedCategory === 'all' ? '#ECAE01' : '#111',
                color: selectedCategory === 'all' ? '#000' : '#ccc',
                fontWeight: selectedCategory === 'all' ? 700 : 500,
                border: '1px solid #404040',
                borderRadius: '20px',
                padding: '6px 18px',
                fontSize: '13px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              All Numbers ({VIP_NUMBERS.length})
            </button>
            {POPULAR_CATEGORIES.slice(1).map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? '#ECAE01' : '#111',
                  color: selectedCategory === cat.id ? '#000' : '#ccc',
                  fontWeight: selectedCategory === cat.id ? 700 : 500,
                  border: '1px solid #404040',
                  borderRadius: '20px',
                  padding: '6px 18px',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUMBERS GRID (.inner-number-box) */}
      <section className="inner-number-box padding-70" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div style={{ marginBottom: '20px', color: '#888', fontSize: '13px' }}>
            Showing <strong style={{ color: '#ECAE01' }}>{filteredNumbers.length}</strong> VIP Mobile Numbers
          </div>

          <div className="innernumberBox">
            <div className="row g-4">
              {filteredNumbers.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <h4 style={{ color: '#fff' }}>No Numbers Found</h4>
                  <p style={{ color: '#888' }}>Try adjusting your search sequence or resetting your filters.</p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn_primary"
                    style={{ marginTop: '10px' }}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                filteredNumbers.map(number => (
                  <div key={number.id} className="col-xl-4 col-lg-6 col-md-6">
                    <NumberCard number={number} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTHENTIC FILTER MODAL (#filtermodal) */}
      {isFilterModalOpen && (
        <div
          className="modal fade show"
          id="filtermodal"
          tabIndex={-1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.85)',
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            padding: '15px'
          }}
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '480px', width: '100%', margin: 'auto' }}>
            <div
              className="modal-content filterModal"
              style={{
                background: '#090808',
                border: '1px solid #ECAE01',
                borderRadius: '20px',
                boxShadow: '0px 0px 34px rgba(236, 174, 1, 0.28)'
              }}
            >
              <div
                className="filterModal-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 25px',
                  borderBottom: '1px solid #222'
                }}
              >
                <div className="filterModal-header-title" style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>
                  Filter
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsFilterModalOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 1 }}
                >
                  <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                </button>
              </div>

              <div className="modal-body" style={{ padding: '25px' }}>
                {/* Tabs: Start With, Sort By Price, Numerology */}
                <div className="tabing-sec" style={{ marginBottom: '20px' }}>
                  <ul className="nav nav-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #333' }}>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'startwith' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setActiveTab('startwith')}
                        style={{
                          background: activeTab === 'startwith' ? '#ECAE01' : 'transparent',
                          color: activeTab === 'startwith' ? '#000' : '#fff',
                          fontWeight: 600,
                          borderRadius: '10px 10px 0 0',
                          border: 'none',
                          padding: '8px 16px',
                          cursor: 'pointer'
                        }}
                      >
                        Start With
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'sortbyprice' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setActiveTab('sortbyprice')}
                        style={{
                          background: activeTab === 'sortbyprice' ? '#ECAE01' : 'transparent',
                          color: activeTab === 'sortbyprice' ? '#000' : '#fff',
                          fontWeight: 600,
                          borderRadius: '10px 10px 0 0',
                          border: 'none',
                          padding: '8px 16px',
                          cursor: 'pointer'
                        }}
                      >
                        Sort By Price
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'numerology' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setActiveTab('numerology')}
                        style={{
                          background: activeTab === 'numerology' ? '#ECAE01' : 'transparent',
                          color: activeTab === 'numerology' ? '#000' : '#fff',
                          fontWeight: 600,
                          borderRadius: '10px 10px 0 0',
                          border: 'none',
                          padding: '8px 16px',
                          cursor: 'pointer'
                        }}
                      >
                        Numerology
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Tab 1: Start With Digits */}
                {activeTab === 'startwith' && (
                  <div>
                    <p style={{ color: '#888', fontSize: '13px', marginBottom: '15px' }}>
                      Filter by starting digit (6, 7, 8, 9):
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                      {[6, 7, 8, 9].map(p => {
                        const isSelected = selectedPrefixes.includes(p);
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => togglePrefix(p)}
                            style={{
                              background: isSelected ? '#ECAE01' : '#111',
                              color: isSelected ? '#000' : '#fff',
                              border: isSelected ? '1px solid #ECAE01' : '1px solid #333',
                              borderRadius: '10px',
                              padding: '12px 0',
                              fontSize: '18px',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tab 2: Sort By Price */}
                {activeTab === 'sortbyprice' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { key: 'relevance', label: 'Default / Relevance' },
                      { key: 'price_low_to_high', label: 'Price: Low to High' },
                      { key: 'price_high_to_low', label: 'Price: High to Low' }
                    ].map(opt => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setSortBy(opt.key as any)}
                        style={{
                          background: sortBy === opt.key ? 'rgba(236,174,1,0.15)' : '#111',
                          color: sortBy === opt.key ? '#ECAE01' : '#ccc',
                          border: sortBy === opt.key ? '1px solid #ECAE01' : '1px solid #333',
                          borderRadius: '12px',
                          padding: '12px 18px',
                          textAlign: 'left',
                          fontSize: '14px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Tab 3: Numerology Root Sum */}
                {activeTab === 'numerology' && (
                  <div>
                    <p style={{ color: '#888', fontSize: '13px', marginBottom: '15px' }}>
                      Select single-digit destiny root total (1 - 9):
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => {
                        const isSelected = selectedTotal === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTotal(isSelected ? null : t)}
                            style={{
                              background: isSelected ? '#ECAE01' : '#111',
                              color: isSelected ? '#000' : '#fff',
                              border: isSelected ? '1px solid #ECAE01' : '1px solid #333',
                              borderRadius: '10px',
                              padding: '10px 0',
                              fontSize: '16px',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Filter Modal Footer */}
              <div
                className="filterModal-footer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 25px',
                  borderTop: '1px solid #222',
                  background: '#060606',
                  borderRadius: '0 0 20px 20px'
                }}
              >
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#888',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  Clear All
                </button>
                <button
                  type="button"
                  onClick={() => setIsFilterModalOpen(false)}
                  className="btn btn_primary"
                  style={{ padding: '8px 24px' }}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
