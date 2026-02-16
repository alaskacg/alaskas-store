import { allSites } from '@/lib/constants';

export function Footer() {
  const sitesByCategory = allSites.reduce((acc, site) => {
    if (!acc[site.category]) {
      acc[site.category] = [];
    }
    acc[site.category].push(site);
    return acc;
  }, {} as Record<string, typeof allSites>);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Alaska's Store</h3>
            <p className="text-sm text-gray-400">
              The premier marketplace aggregator for Alaska's business ecosystem.
            </p>
          </div>

          {/* Sites by Category */}
          {Object.entries(sitesByCategory).map(([category, sites]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-3">{category}</h4>
              <ul className="space-y-2">
                {sites.map((site) => (
                  <li key={site.id}>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {site.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 Alaska's Store. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
