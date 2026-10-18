import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SideDashboard } from './components/SideDashboard';
import { LowestPriceModal } from './components/LowestPriceModal';
import { LuckyNumberModal } from './components/LuckyNumberModal';
import { BookingModal } from './components/BookingModal';
import { ToastContainer } from './components/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { NumerologySearchPage } from './pages/NumerologySearchPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ProcessPage } from './pages/ProcessPage';
import { GeneralDoubtsPage } from './pages/GeneralDoubtsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { PrepaidPostpaidPage } from './pages/PrepaidPostpaidPage';
import { HomeDeliveryPage } from './pages/HomeDeliveryPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientelePage } from './pages/ClientelePage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-dark-pure text-white selection:bg-gold selection:text-black">
          {/* Global Header */}
          <Header />

          {/* Main App Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
              <Route path="/search-front" element={<SearchResultsPage />} />
              <Route path="/numerology-search" element={<NumerologySearchPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/general-doubts" element={<GeneralDoubtsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/page/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/prepaid-postpaid" element={<PrepaidPostpaidPage />} />
              <Route path="/home-delivery" element={<HomeDeliveryPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/clientele" element={<ClientelePage />} />
              {/* Fallback to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Modals & Drawers */}
          <SideDashboard />
          <CartDrawer />
          <WishlistDrawer />
          <LowestPriceModal />
          <LuckyNumberModal />
          <BookingModal />
          <ToastContainer />

          {/* Floating Actions (WhatsApp & Live ticker) */}
          <FloatingActions />

          {/* Global Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
