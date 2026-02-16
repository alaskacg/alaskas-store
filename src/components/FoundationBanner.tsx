import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trees, Mountain, Waves } from 'lucide-react';

export function FoundationBanner() {
  const impacts = [
    { icon: Trees, title: 'Forest Conservation', amount: '50,000 acres protected' },
    { icon: Mountain, title: 'Wildlife Habitat', amount: '12 species supported' },
    { icon: Waves, title: 'Clean Water', amount: '8 watersheds restored' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
              <Heart className="h-5 w-5 text-red-600 fill-red-600" />
              <span className="text-sm font-semibold text-red-900">Alaska Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Alaska's Wilderness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Support conservation efforts to preserve Alaska's pristine wilderness for future generations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {impacts.map((impact) => (
              <Card key={impact.title} className="p-6 text-center border-2 border-green-200">
                <impact.icon className="h-12 w-12 mx-auto mb-3 text-green-600" />
                <h3 className="font-semibold mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600">{impact.amount}</p>
              </Card>
            ))}
          </div>

          {/* Donation Tiers */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { amount: 25, impact: 'Plant 10 trees' },
              { amount: 100, impact: 'Protect 1 acre' },
              { amount: 500, impact: 'Support wildlife' },
              { amount: 1000, impact: 'Major conservation' },
            ].map((tier) => (
              <Card key={tier.amount} className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-2xl font-bold text-green-600 mb-2">${tier.amount}</div>
                <div className="text-sm text-gray-600">{tier.impact}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
              asChild
            >
              <a href="https://alaskafoundation.org" target="_blank" rel="noopener noreferrer">
                Make a Donation →
              </a>
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              Tax-deductible • 100% goes to conservation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
