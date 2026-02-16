import { allSites } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export function SiteDirectory() {
  const sitesByCategory = allSites.reduce((acc, site) => {
    if (!acc[site.category]) {
      acc[site.category] = [];
    }
    acc[site.category].push(site);
    return acc;
  }, {} as Record<string, typeof allSites>);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketplace Network</h2>
          <p className="text-lg text-gray-600">
            Explore all 14 sites in the Alaska business ecosystem
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(sitesByCategory).map(([category, sites]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded" />
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sites.map((site) => (
                  <Card key={site.id} className="p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${site.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                        {site.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg mb-2">{site.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{site.description}</p>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Visit Site <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
