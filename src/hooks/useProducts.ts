import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts, fetchFeaturedProducts, fetchProductsByCategory, searchProducts } from '@/services/productAggregator';

export function useAllProducts() {
  return useQuery({
    queryKey: ['products', 'all'],
    queryFn: fetchAllProducts,
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: fetchFeaturedProducts,
  });
}

export function useProductsByCategory(category: string) {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
  });
}

export function useProductSearch(query: string) {
  return useQuery({
    queryKey: ['products', 'search', query],
    queryFn: () => searchProducts(query),
    enabled: query.length > 0,
  });
}
