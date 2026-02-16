import { useQuery } from '@tanstack/react-query';
import { fetchMetalPrices } from '@/services/metalsAPI';

export function useMetalPrices() {
  return useQuery({
    queryKey: ['metals', 'prices'],
    queryFn: fetchMetalPrices,
    refetchInterval: 60000, // Refetch every minute
  });
}
