import { useFeaturedGuides } from '@/hooks/useGuides';
import { GuideCard } from './GuideCard';
import { Loader2 } from 'lucide-react';

export function FeaturedGuides() {
  const { data: guides, isLoading } = useFeaturedGuides();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!guides || guides.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Alaska Guides
          </h2>
          <p className="text-lg text-gray-600">
            Book your next adventure with expert local guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://akguidesearch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Browse All Guides →
          </a>
        </div>
      </div>
    </section>
  );
}
