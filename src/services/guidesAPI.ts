import type { Guide } from '@/types';

const mockGuides: Guide[] = [
  {
    id: 'guide-1',
    username: 'fishmaster',
    name: 'Captain Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    specialty: 'Salmon Fishing',
    rating: 4.9,
    reviewCount: 127,
    priceFrom: 350,
    services: ['Halibut Fishing', 'Salmon Fishing', 'Charter Trips'],
    location: 'Homer, AK',
    featured: true,
  },
  {
    id: 'guide-2',
    username: 'alaskahunter',
    name: 'Tom Richardson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    specialty: 'Big Game Hunting',
    rating: 5.0,
    reviewCount: 89,
    priceFrom: 5000,
    services: ['Moose Hunting', 'Bear Hunting', 'Caribou Hunting'],
    location: 'Fairbanks, AK',
    featured: true,
  },
  {
    id: 'guide-3',
    username: 'glacierguide',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    specialty: 'Glacier Tours',
    rating: 4.8,
    reviewCount: 234,
    priceFrom: 250,
    services: ['Glacier Hiking', 'Ice Climbing', 'Photography Tours'],
    location: 'Juneau, AK',
    featured: true,
  },
  {
    id: 'guide-4',
    username: 'riveradventures',
    name: 'Dave Martinez',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    specialty: 'River Rafting',
    rating: 4.7,
    reviewCount: 156,
    priceFrom: 180,
    services: ['Whitewater Rafting', 'Scenic Float Trips', 'Multi-day Expeditions'],
    location: 'Denali, AK',
    featured: true,
  },
];

export async function fetchFeaturedGuides(): Promise<Guide[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockGuides.filter(g => g.featured);
}

export async function searchGuides(query: string): Promise<Guide[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const lowerQuery = query.toLowerCase();
  return mockGuides.filter(g => 
    g.name.toLowerCase().includes(lowerQuery) ||
    g.specialty.toLowerCase().includes(lowerQuery) ||
    g.services.some(s => s.toLowerCase().includes(lowerQuery))
  );
}
