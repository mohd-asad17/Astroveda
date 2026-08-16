export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  topic: string;
}

export interface Astrologer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  coverImage?: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  expertise: string[];
  languages: string[];
  feePerMin: number; // e.g. $1.50 or ₹30
  videoFeePerMin: number;
  audioFeePerMin: number;
  chatFeePerMin: number;
  isOnline: boolean;
  isBusy: boolean;
  nextAvailableTime?: string;
  bio: string;
  education: string;
  awards: string[];
  totalConsultations: number;
  location: string;
  reviews: Review[];
  availableSlots: {
    date: string;
    slots: string[];
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  badge?: string;
  color: string;
  features: string[];
}

export interface HoroscopeInfo {
  id: string;
  name: string;
  vedicName: string;
  dateRange: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  rulingPlanet: string;
  overview: string;
  love: string;
  career: string;
  health: string;
  finance: string;
  luckyNumber: number;
  luckyColor: string;
  luckyTime: string;
  compatibility: string;
  mood: string;
  stars: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  reviewText: string;
  problemSolved: string;
  astrologerConsulted: string;
  date: string;
}

export interface TarotCard {
  id: number;
  name: string;
  arcana: 'Major' | 'Minor';
  image: string;
  keywords: string[];
  meaningUpright: string;
  meaningReversed: string;
  advice: string;
  element: string;
}

export interface BookingData {
  astrologerId: string;
  astrologerName: string;
  astrologerAvatar: string;
  clientName: string;
  mobile: string;
  email: string;
  gender: string;
  dob: string;
  tob: string;
  pob: string;
  mode: 'chat' | 'call' | 'video';
  durationMinutes: number;
  date: string;
  timeSlot: string;
  primaryConcern: string;
  promoCode?: string;
  totalAmount: number;
}

export interface KundliResultData {
  summary: {
    name: string;
    dob: string;
    tob: string;
    pob: string;
    gender: string;
    lagna: string;
    moonSign: string;
    sunSign: string;
    nakshatra: string;
    currentDasha: string;
    mangalDosha: string;
    luckyGemstone: string;
    luckyColor: string;
    luckyNumbers: number[];
  };
  houses: {
    houseNumber: number;
    rashi: string;
    planets: string[];
  }[];
  doshaAnalysis: {
    mangalDosha: string;
    kaalSarpDosha: string;
    sadeSatiStatus: string;
  };
  remedies: string[];
}
