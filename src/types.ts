export interface PricingPackage {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  colorScheme: 'indigo' | 'electric' | 'violet';
  timeframe: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  packageId: string;
  description: string;
}

export interface PillarFeature {
  title: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaLink: string;
  type: 'business' | 'marketing';
}
