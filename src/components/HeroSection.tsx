import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium">Alaska's Premier Marketplace</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The <span className="text-yellow-400">Amazon</span> of Alaska
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Shop Alaska's Largest Marketplace
          </p>
          
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            Discover products, services, and opportunities across our entire Alaska business ecosystem. 
            From precious metals to outdoor adventures, boats to mining equipment.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search across 10,000+ products & services..."
                  className="pl-12 h-14 text-lg bg-white text-gray-900 border-0 shadow-xl"
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-yellow-400">14</div>
              <div className="text-sm text-blue-200">Partner Sites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">10,000+</div>
              <div className="text-sm text-blue-200">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">$50M+</div>
              <div className="text-sm text-blue-200">Inventory Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
