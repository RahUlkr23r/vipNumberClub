import React, { createContext, useContext, useState, useEffect } from 'react';
import { VipNumber, CartItem } from '../types';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  cart: CartItem[];
  favorites: string[];
  addToCart: (number: VipNumber, simType?: 'prepaid' | 'postpaid', network?: any) => void;
  removeFromCart: (numberId: string) => void;
  clearCart: () => void;
  toggleFavorite: (numberId: string) => void;
  isFavorite: (numberId: string) => boolean;
  isSideDashboardOpen: boolean;
  setIsSideDashboardOpen: (open: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isLowestPriceModalOpen: boolean;
  setIsLowestPriceModalOpen: (open: boolean) => void;
  isLuckyCalcModalOpen: boolean;
  setIsLuckyCalcModalOpen: (open: boolean) => void;
  bookingTargetNumber: VipNumber | null;
  openBookingModal: (num: VipNumber) => void;
  closeBookingModal: () => void;
  toasts: ToastState[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vip_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vip_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isSideDashboardOpen, setIsSideDashboardOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLowestPriceModalOpen, setIsLowestPriceModalOpen] = useState(false);
  const [isLuckyCalcModalOpen, setIsLuckyCalcModalOpen] = useState(false);
  const [bookingTargetNumber, setBookingTargetNumber] = useState<VipNumber | null>(null);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('vip_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('vip_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addToCart = (number: VipNumber, simType: 'prepaid' | 'postpaid' = 'prepaid', network: any = 'any') => {
    setCart(prev => {
      const existing = prev.find(item => item.number.id === number.id);
      if (existing) {
        showToast(`Number ${number.displayNumber} is already in your cart`, 'info');
        return prev;
      }
      showToast(`Added ${number.displayNumber} to cart!`, 'success');
      return [...prev, { number, simType, network, addedAt: Date.now() }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (numberId: string) => {
    setCart(prev => prev.filter(item => item.number.id !== numberId));
    showToast('Removed number from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (numberId: string) => {
    setFavorites(prev => {
      const exists = prev.includes(numberId);
      if (exists) {
        showToast('Removed from favorites', 'info');
        return prev.filter(id => id !== numberId);
      } else {
        showToast('Saved to favorites! ❤️', 'success');
        return [...prev, numberId];
      }
    });
  };

  const isFavorite = (numberId: string) => favorites.includes(numberId);

  const openBookingModal = (num: VipNumber) => {
    setBookingTargetNumber(num);
  };

  const closeBookingModal = () => {
    setBookingTargetNumber(null);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        clearCart,
        toggleFavorite,
        isFavorite,
        isSideDashboardOpen,
        setIsSideDashboardOpen,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isLowestPriceModalOpen,
        setIsLowestPriceModalOpen,
        isLuckyCalcModalOpen,
        setIsLuckyCalcModalOpen,
        bookingTargetNumber,
        openBookingModal,
        closeBookingModal,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
