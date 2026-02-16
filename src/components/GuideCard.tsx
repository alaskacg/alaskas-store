import type { Guide } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, DollarSign } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={guide.avatar}
              alt={guide.name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg mb-1">{guide.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{guide.specialty}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{guide.rating}</span>
              </div>
              <span className="text-xs text-gray-500">({guide.reviewCount} reviews)</span>
            </div>

            {/* Location */}
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="h-3 w-3 mr-1" />
              {guide.location}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-2 mb-4">
          {guide.services.slice(0, 3).map((service) => (
            <Badge key={service} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="font-semibold">From ${guide.priceFrom}</span>
            <span className="text-gray-500 ml-1">/day</span>
          </div>
          <Button 
            size="sm" 
            asChild
            className="bg-blue-600 hover:bg-blue-700"
          >
            <a
              href={`https://akguidesearch.com/guide/${guide.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
