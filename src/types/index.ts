export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  source: string;
  sourceUrl: string;
  location?: string;
  condition?: string;
  seller?: string;
  featured?: boolean;
  createdAt: Date;
}

export interface Guide {
  id: string;
  username: string;
  name: string;
  avatar?: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  services: string[];
  location: string;
  featured?: boolean;
}

export interface SiteInfo {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  icon: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  slug: string;
  color: string;
}

export interface MetalPrice {
  metal: string;
  price: number;
  change: number;
  changePercent: number;
}
