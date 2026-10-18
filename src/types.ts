export interface VipNumber {
  id: string;
  number: string;
  displayNumber: string;
  originalPrice: string;
  price: string;
  priceNumeric: number;
  sum: number;
  total: number;
  endingDigits: string;
  category: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  superSale?: boolean;
  highlightPrefix?: string;
  timerEnd?: string;
}

export interface FilterState {
  searchQuery: string;
  startWith: number[];
  sort: 'relevance' | 'price_low_to_high' | 'price_high_to_low';
  category: string;
  budgetMin: number | null;
  budgetMax: number | null;
  sum: number | null;
  total: number | null;
  mustContain: string;
  notContain: string;
  startWithText: string;
  endWithText: string;
}

export interface CartItem {
  number: VipNumber;
  simType: 'prepaid' | 'postpaid';
  network: 'jio' | 'airtel' | 'vi' | 'bsnl' | 'any';
  addedAt: number;
}

export interface BookingFormState {
  number: VipNumber | null;
  customerName: string;
  customerPhone: string;
  customerCity: string;
  deliveryOption: 'online_upc' | 'home_delivery';
  simType: 'prepaid' | 'postpaid';
  preferredNetwork: 'jio' | 'airtel' | 'vi' | 'bsnl' | 'any';
}
