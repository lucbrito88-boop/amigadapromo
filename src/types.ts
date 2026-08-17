export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'BadgePercent' | 'TrendingUp' | 'Star' | 'BellRing';
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: 'Smartphone' | 'Sparkles' | 'ShoppingBag';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SampleDeal {
  id: string;
  title: string;
  store: string;
  originalPrice?: string;
  promoPrice: string;
  discountPercentage?: string;
  cupom?: string;
  highlights: string[];
  timeAgo: string;
  verifiedRating: string;
  reviewsCount: string;
  category: string;
}

export type AnalyticsEvent = 
  | { name: 'whatsapp_click'; source: 'hero' | 'floating_bar' | 'bottom_banner' | 'mockup' | 'footer' }
  | { name: 'telegram_click'; source: 'hero' | 'bottom_banner' | 'footer' }
  | { name: 'faq_view'; questionId: string }
  | { name: 'how_it_works_view' }
  | { name: 'terms_modal_open'; doc: 'privacy' | 'terms' };
