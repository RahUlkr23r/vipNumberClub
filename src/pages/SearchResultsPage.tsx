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
    return t ? parseInt(t, 10) : null;
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
    if (t !== null) setSelectedTotal(parseInt(t, 10));
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
      const catLower = selectedCategory.toLowerCase();
      result = result.filter(n => 
        n.category.toLowerCase().includes(catLower) || 
        n.tags.some(t => t.toLowerCase().includes(catLower))
      );
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
  }, [searchTerm, selectedPrefixes, selectedCategory, selectedTotal, selectedSum, sortBy]);

  return (
    <div className="main-content py-4">
      <div className="container">
        {/* Search Bar & Filter Modal Trigger */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-4">
          <div className="d-flex align-items-center gap-2 w-100" style={{ maxWidth: '480px' }}>
            <div className="position-relative flex-grow-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Number or Digits..."
                className="form-control"
                style={{
                  background: '#090808',
                  border: '1px solid #404040',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '10px 15px'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="position-absolute end-0 top-50 translate-middle-y me-3 border-0 bg-transparent text-muted"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsFilterModalOpen(true)}
              className="btn btn_primary d-inline-flex align-items-center gap-2"
              style={{
                background: '#ECAE01',
                color: '#000',
                fontWeight: 'bold',
                padding: '10px 18px',
                borderRadius: '10px',
                border: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <img src="https://www.vipnumbersclub.com/assets/front/img/filtermodal-ic.svg" alt="Filter" style={{ width: '16px' }} />
              <span>Filter</span>
            </button>
          </div>

          <div className="text-muted text-xs text-center text-md-end">
            Showing <strong className="text-white">{filteredNumbers.length}</strong> VIP Mobile Numbers
          </div>
        </div>

        {/* Quick Category Tabs */}
        <div className="d-flex gap-2 overflow-auto pb-3 mb-4" style={{ whiteSpace: 'nowrap' }}>
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-warning text-dark font-weight-bold' : 'btn-outline-secondary text-white'}`}
            style={{ borderRadius: '20px' }}
          >
            All Numbers
          </button>
          {POPULAR_CATEGORIES.slice(1).map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn btn-sm ${selectedCategory === cat.id ? 'btn-warning text-dark font-weight-bold' : 'btn-outline-secondary text-white'}`}
              style={{ borderRadius: '20px' }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Number Boxes Grid */}
        <div className="innernumberBox">
          <div className="row g-4">
            {filteredNumbers.length === 0 ? (
              <div className="col-12 text-center py-5">
                <h4 className="text-white">No Numbers Found</h4>
                <p className="text-muted">Try adjusting your filters or search keywords.</p>
                <button type="button" onClick={handleReset} className="btn btn_primary mt-2">
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

        {/* ORIGINAL FILTER MODAL POPUP */}
        {isFilterModalOpen && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 2100 }}
            onClick={() => setIsFilterModalOpen(false)}
          >
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <form
                className="modal-content filterModal"
                onSubmit={(e) => { e.preventDefault(); setIsFilterModalOpen(false); }}
                style={{ background: '#090808', border: '1px solid #404040', borderRadius: '15px' }}
              >
                {/* Header */}
                <div className="filterModal-header d-flex align-items-center justify-content-between p-3 border-bottom border-secondary">
                  <div className="d-flex align-items-center gap-2 text-white fw-bold">
                    <img src="https://www.vipnumbersclub.com/assets/front/img/filtermodal-ic.svg" alt="Filter" />
                    <span>Filter</span>
                  </div>
                  <button
                    type="button"
                    className="btn-close border-0 bg-transparent text-white"
                    onClick={() => setIsFilterModalOpen(false)}
                    aria-label="Close"
                  >
                    <img src="https://www.vipnumbersclub.com/assets/front/img/cross-ic.svg" alt="Close" />
                  </button>
                </div>

                {/* Body with Tabs */}
                <div className="modal-body p-3">
                  <div className="filter-tabs">
                    <ul className="nav nav-tabs border-secondary mb-3">
                      <li className="nav-item">
                        <button
                          type="button"
                          className={`nav-link border-0 ${activeTab === 'startwith' ? 'active bg-transparent text-warning fw-bold border-bottom border-warning' : 'bg-transparent text-white'}`}
                          onClick={() => setActiveTab('startwith')}
                        >
                          Start With
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className={`nav-link border-0 ${activeTab === 'sortbyprice' ? 'active bg-transparent text-warning fw-bold border-bottom border-warning' : 'bg-transparent text-white'}`}
                          onClick={() => setActiveTab('sortbyprice')}
                        >
                          Sort By Price
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className={`nav-link border-0 ${activeTab === 'numerology' ? 'active bg-transparent text-warning fw-bold border-bottom border-warning' : 'bg-transparent text-white'}`}
                          onClick={() => setActiveTab('numerology')}
                        >
                          Numerology
                        </button>
                      </li>
                    </ul>

                    {/* Tab 1: Start With */}
                    {activeTab === 'startwith' && (
                      <div className="p-3">
                        <div className="d-flex gap-4">
                          {[6, 7, 8, 9].map(p => (
                            <div key={p} className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`start${p}`}
                                checked={selectedPrefixes.includes(p)}
                                onChange={() => togglePrefix(p)}
                              />
                              <label className="form-check-label text-white ms-1" htmlFor={`start${p}`}>
                                {p}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Sort By Price */}
                    {activeTab === 'sortbyprice' && (
                      <div className="p-3">
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="sortRadio"
                            id="sortHigh"
                            checked={sortBy === 'price_high_to_low'}
                            onChange={() => setSortBy('price_high_to_low')}
                          />
                          <label className="form-check-label text-white ms-1" htmlFor="sortHigh">
                            Price High to Low
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="sortRadio"
                            id="sortLow"
                            checked={sortBy === 'price_low_to_high'}
                            onChange={() => setSortBy('price_low_to_high')}
                          />
                          <label className="form-check-label text-white ms-1" htmlFor="sortLow">
                            Price Low to High
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Numerology */}
                    {activeTab === 'numerology' && (
                      <div className="p-3 space-y-3">
                        <div className="form-group mb-3">
                          <label className="text-white text-xs mb-1 d-block">Compound Sum</label>
                          <input
                            type="number"
                            className="form-control"
                            style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                            placeholder="e.g. 48, 72"
                            value={selectedSum || ''}
                            onChange={(e) => setSelectedSum(e.target.value ? parseInt(e.target.value, 10) : null)}
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-white text-xs mb-1 d-block">Root Total (1-9)</label>
                          <input
                            type="number"
                            min="1"
                            max="9"
                            className="form-control"
                            style={{ background: '#000', border: '1px solid #404040', color: '#fff' }}
                            placeholder="e.g. 1, 9"
                            value={selectedTotal || ''}
                            onChange={(e) => setSelectedTotal(e.target.value ? parseInt(e.target.value, 10) : null)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Reset and Apply */}
                <div className="filterModal-footer d-flex justify-content-between p-3 border-top border-secondary">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline-secondary text-white btn-sm px-4"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn_primary btn-sm px-4"
                    style={{ background: '#ECAE01', color: '#000', fontWeight: 'bold' }}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
