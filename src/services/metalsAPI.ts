import type { MetalPrice } from '@/types';

export async function fetchMetalPrices(): Promise<MetalPrice[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return [
    { metal: 'Gold', price: 2158.50, change: 12.30, changePercent: 0.57 },
    { metal: 'Silver', price: 28.45, change: -0.15, changePercent: -0.52 },
    { metal: 'Platinum', price: 1045.20, change: 5.80, changePercent: 0.56 },
    { metal: 'Palladium', price: 987.30, change: -8.50, changePercent: -0.85 },
  ];
}
