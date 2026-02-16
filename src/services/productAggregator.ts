import type { Product } from '@/types';

// Mock data - in production, this would fetch from actual APIs
const mockProducts: Product[] = [
  // Alaska Metals Exchange
  {
    id: 'metal-1',
    title: '1 oz American Gold Eagle',
    description: 'Brilliant Uncirculated American Gold Eagle coin',
    price: 2150,
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80',
    category: 'Precious Metals',
    source: 'Alaska Metals Exchange',
    sourceUrl: 'https://alaskametalsexchange.com',
    condition: 'New',
    featured: true,
    createdAt: new Date('2025-01-15'),
  },
  {
    id: 'metal-2',
    title: '10 oz Silver Bar',
    description: '.999 Fine Silver Bar - Sunshine Mint',
    price: 285,
    image: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=800&q=80',
    category: 'Precious Metals',
    source: 'Alaska Metals Exchange',
    sourceUrl: 'https://alaskametalsexchange.com',
    condition: 'New',
    featured: true,
    createdAt: new Date('2025-01-14'),
  },
  {
    id: 'metal-3',
    title: 'Canadian Maple Leaf 1 oz Gold',
    description: '24K Pure Gold Maple Leaf Coin',
    price: 2180,
    image: 'https://images.unsplash.com/photo-1621516969000-9d41048b5f8d?w=800&q=80',
    category: 'Precious Metals',
    source: 'Alaska Metals Exchange',
    sourceUrl: 'https://alaskametalsexchange.com',
    condition: 'New',
    createdAt: new Date('2025-01-13'),
  },
  // Alaskan Boats
  {
    id: 'boat-1',
    title: '32ft Fishing Vessel',
    description: 'Commercial fishing boat with all gear included',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    category: 'Boats & Marine',
    source: 'Alaskan Boats',
    sourceUrl: 'https://alaskanboats.com',
    location: 'Homer, AK',
    condition: 'Excellent',
    featured: true,
    createdAt: new Date('2025-01-12'),
  },
  {
    id: 'boat-2',
    title: '24ft Aluminum Jet Boat',
    description: 'Perfect for Alaska rivers and shallow water',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    category: 'Boats & Marine',
    source: 'Alaskan Boats',
    sourceUrl: 'https://alaskanboats.com',
    location: 'Anchorage, AK',
    condition: 'Good',
    featured: true,
    createdAt: new Date('2025-01-11'),
  },
  // Alaska Mining Equipment
  {
    id: 'equipment-1',
    title: 'Cat D8 Bulldozer',
    description: 'Heavy-duty dozer, low hours, ready to work',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    category: 'Mining Equipment',
    source: 'Alaska Mining Equipment',
    sourceUrl: 'https://alaskaminingequipment.com',
    location: 'Fairbanks, AK',
    condition: 'Good',
    featured: true,
    createdAt: new Date('2025-01-10'),
  },
  {
    id: 'equipment-2',
    title: 'Gold Trommel with Sluice',
    description: 'Complete placer mining setup',
    price: 28500,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    category: 'Mining Equipment',
    source: 'Alaska Mining Equipment',
    sourceUrl: 'https://alaskaminingequipment.com',
    location: 'Nome, AK',
    condition: 'Excellent',
    featured: true,
    createdAt: new Date('2025-01-09'),
  },
  // General Listings
  {
    id: 'listing-1',
    title: 'Alaska Cabin - Off Grid',
    description: '2BR cabin on 10 acres, solar power, well water',
    price: 175000,
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80',
    category: 'Real Estate',
    source: 'Alaska Listings',
    sourceUrl: 'https://alaskalistings.com',
    location: 'Talkeetna, AK',
    createdAt: new Date('2025-01-08'),
  },
  {
    id: 'listing-2',
    title: 'ATV - Polaris Sportsman 850',
    description: 'Low miles, winch, heated grips',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&q=80',
    category: 'Vehicles',
    source: 'Anchorage Listings',
    sourceUrl: 'https://anchoragelistings.com',
    location: 'Anchorage, AK',
    condition: 'Excellent',
    createdAt: new Date('2025-01-07'),
  },
  {
    id: 'listing-3',
    title: 'Commercial Fishing Permit',
    description: 'Bristol Bay salmon permit',
    price: 225000,
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80',
    category: 'Business',
    source: 'BB Listings',
    sourceUrl: 'https://bblistings.com',
    location: 'Bristol Bay, AK',
    createdAt: new Date('2025-01-06'),
  },
];

export async function fetchAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts;
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockProducts.filter(p => p.category === category);
}

export async function fetchProductsBySource(source: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockProducts.filter(p => p.source === source);
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockProducts.filter(p => p.featured);
}

export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
}
