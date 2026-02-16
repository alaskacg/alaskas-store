import { useMetalPrices } from '@/hooks/useMetals';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MetalsExchangeBanner() {
  const { data: prices, isLoading } = useMetalPrices();

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 rounded-full px-4 py-2 mb-4">
              <Coins className="h-5 w-5 text-yellow-700" />
              <span className="text-sm font-semibold text-yellow-900">Alaska Metals Exchange</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Invest in Precious Metals
            </h2>
            <p className="text-lg text-gray-600">
              Secure your wealth with gold, silver, and platinum
            </p>
          </div>

          {/* Live Prices */}
          {!isLoading && prices && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {prices.map((metal) => (
                <Card key={metal.metal} className="p-4">
                  <div className="text-sm text-gray-600 mb-1">{metal.metal}</div>
                  <div className="text-2xl font-bold mb-2">
                    ${metal.price.toLocaleString()}
                  </div>
                  <div
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium',
                      metal.change >= 0 ? 'text-green-600' : 'text-red-600'
                    )}
                  >
                    {metal.change >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>
                      {metal.change >= 0 ? '+' : ''}
                      {metal.change.toFixed(2)} ({metal.changePercent >= 0 ? '+' : ''}
                      {metal.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Secure Storage</h3>
              <p className="text-sm text-gray-600">Fully insured vault storage available</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-semibold mb-2">Authentic Products</h3>
              <p className="text-sm text-gray-600">All metals certified and guaranteed</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-600">Best rates in Alaska</p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8"
              asChild
            >
              <a href="https://alaskametalsexchange.com" target="_blank" rel="noopener noreferrer">
                Shop Precious Metals →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
