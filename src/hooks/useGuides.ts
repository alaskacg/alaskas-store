import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedGuides } from '@/services/guidesAPI';

export function useFeaturedGuides() {
  return useQuery({
    queryKey: ['guides', 'featured'],
    queryFn: fetchFeaturedGuides,
  });
}
