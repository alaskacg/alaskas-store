import { useState } from 'react';

const categories = [
  { name: 'Gold & Silver', icon: '🪙', gradient: 'from-yellow-600 to-amber-500', link: '#gold', desc: 'Authentic Alaska gold nuggets, coins & silver bullion' },
  { name: 'Outdoor Gear', icon: '🏔️', gradient: 'from-emerald-600 to-green-500', link: '#outdoor', desc: 'Gear built for Alaska\'s extreme conditions' },
  { name: 'Alaska Art', icon: '🎨', gradient: 'from-purple-600 to-violet-500', link: '#art', desc: 'Native art, photography & handcrafted pieces' },
  { name: 'Gifts & Souvenirs', icon: '🎁', gradient: 'from-rose-600 to-pink-500', link: '#gifts', desc: 'Unique Alaska gifts for every occasion' },
  { name: 'Fishing Gear', icon: '🎣', gradient: 'from-blue-600 to-cyan-500', link: '#fishing', desc: 'Pro fishing tackle for Alaska waters' },
  { name: 'Survival Equipment', icon: '🧭', gradient: 'from-orange-600 to-red-500', link: '#survival', desc: 'Wilderness survival & emergency gear' },
];

const products = [
  { name: 'Alaska Gold Nugget Pendant', price: '$249.99', category: 'Gold & Silver', badge: 'Bestseller' },
  { name: 'Xtratuf Legacy Boots', price: '$124.95', category: 'Outdoor Gear', badge: 'Popular' },
  { name: 'Ulu Knife — Handcrafted', price: '$89.99', category: 'Gifts', badge: 'Handmade' },
  { name: 'Salmon King Rod & Reel Combo', price: '$199.99', category: 'Fishing Gear', badge: 'New' },
  { name: 'Northern Lights Canvas Print', price: '$149.99', category: 'Alaska Art', badge: 'Limited' },
  { name: 'Bear-Proof Food Container', price: '$79.95', category: 'Survival', badge: 'Essential' },
  { name: 'Kenai River Fly Box Set', price: '$64.99', category: 'Fishing Gear', badge: 'Curated' },
  { name: 'Denali Expedition Parka', price: '$349.99', category: 'Outdoor Gear', badge: 'Premium' },
];

const facts = [
  'Alaska has over 3 million lakes',
  'The state is 2.5x the size of Texas',
  'Alaska has more coastline than all other US states combined',
  'Over 100,000 glaciers cover 5% of the state',
  'The Northern Lights are visible 243 nights per year',
];

export function HomePage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
            Alaska's Store
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Authentic Alaska Products & Gear
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            From gold nuggets to survival gear — everything you need from the Last Frontier, shipped nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl font-semibold transition text-lg">
              Shop Now
            </a>
            <a href="#categories" className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-8 py-4 rounded-xl font-semibold transition text-lg">
              Browse Categories
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            🔒 Secure checkout powered by Stripe
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Shop by Category</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Curated collections of authentic Alaska products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <a key={cat.name} href={cat.link} className="group relative overflow-hidden rounded-2xl p-6 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative">
                  <span className="text-4xl mb-4 block">{cat.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-slate-400 text-sm">{cat.desc}</p>
                  <span className="mt-4 inline-block text-emerald-400 text-sm font-medium group-hover:translate-x-1 transition-transform">Browse →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-slate-400 text-center mb-12">Hand-picked favorites from across Alaska</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                  <span className="text-6xl opacity-50 group-hover:opacity-80 transition">🏷️</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded-full">{product.badge}</span>
                  <h3 className="font-bold mt-3 mb-1 group-hover:text-emerald-400 transition">{product.name}</h3>
                  <p className="text-xs text-slate-500 mb-3">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-400">{product.price}</span>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-2 rounded-lg transition font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Promotion */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Alaska Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://alaskametalsexchange.com" className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border border-yellow-700/30 rounded-2xl p-8 hover:border-yellow-600/50 transition group">
              <span className="text-4xl mb-4 block">🪙</span>
              <h3 className="text-xl font-bold mb-2 text-amber-400">Alaska Metals Exchange</h3>
              <p className="text-slate-400 text-sm">Buy and sell Alaska gold, silver, and precious metals at competitive market rates.</p>
              <span className="mt-4 inline-block text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform">Visit Exchange →</span>
            </a>
            <a href="https://alaskaguidelistings.com" className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/30 rounded-2xl p-8 hover:border-blue-600/50 transition group">
              <span className="text-4xl mb-4 block">🧭</span>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Alaska Guide Listings</h3>
              <p className="text-slate-400 text-sm">Book expert fishing, hunting, and adventure guides across the Last Frontier.</p>
              <span className="mt-4 inline-block text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">Find Guides →</span>
            </a>
            <a href="https://alaskadronesurvey.com" className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-700/30 rounded-2xl p-8 hover:border-emerald-600/50 transition group">
              <span className="text-4xl mb-4 block">📸</span>
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Alaska Drone Survey</h3>
              <p className="text-slate-400 text-sm">Stunning aerial photography and professional survey services statewide.</p>
              <span className="mt-4 inline-block text-emerald-400 text-sm font-medium group-hover:translate-x-1 transition-transform">View Gallery →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter + Facts */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-slate-400 mb-8">Get exclusive deals, new product alerts, and Alaska stories delivered to your inbox.</p>
              <form onSubmit={(e) => { e.preventDefault(); setEmail(''); }} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  required
                />
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl font-semibold transition whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime. We respect your privacy.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-amber-400">🏔️ Alaska Facts</h3>
              <ul className="space-y-3">
                {facts.map((fact, i) => (
                  <li key={i} className="text-sm text-slate-400 flex gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">🔒 Secure Checkout</span>
              <span className="flex items-center gap-2">📦 Free Shipping $75+</span>
              <span className="flex items-center gap-2">↩️ 30-Day Returns</span>
              <span className="flex items-center gap-2">⭐ 4.9/5 Rating</span>
            </div>
            <p className="text-sm text-slate-500">© 2024 Alaska's Store. Secure checkout powered by Stripe.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
