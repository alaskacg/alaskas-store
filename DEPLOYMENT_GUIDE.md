# Alaska's Store - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   ```bash
   gh repo create alaskas-store --public --source=. --remote=origin
   git push -u origin master
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy on push to `main`/`master`

3. **Set Environment Secrets**
   - Go to Settings → Secrets and variables → Actions
   - Add secrets:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`

4. **Configure Custom Domain (Optional)**
   - In Settings → Pages → Custom domain
   - Add: `alaskasstore.com`
   - Update DNS with CNAME record

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY

# Deploy to production
vercel --prod
```

### Option 3: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist

# Set environment variables in Netlify UI
# Build settings → Environment variables
```

## 🗄️ Supabase Setup (Backend)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Note your:
   - Project URL
   - Anon/Public API key

### 2. Database Schema

Create tables for product aggregation:

```sql
-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  image TEXT,
  category TEXT,
  source TEXT,
  source_url TEXT,
  location TEXT,
  condition TEXT,
  seller TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Guides table
CREATE TABLE guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar TEXT,
  specialty TEXT,
  rating DECIMAL(2,1),
  review_count INTEGER DEFAULT 0,
  price_from DECIMAL(10,2),
  services TEXT[],
  location TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Metal prices table (for caching)
CREATE TABLE metal_prices (
  metal TEXT PRIMARY KEY,
  price DECIMAL(10,2),
  change DECIMAL(10,2),
  change_percent DECIMAL(5,2),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE metal_prices ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access" ON guides FOR SELECT USING (true);
CREATE POLICY "Public read access" ON metal_prices FOR SELECT USING (true);
```

### 3. Update Environment Variables

Copy `.env.example` to `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 🔗 API Integration

### Alaska Metals Exchange Integration

To pull live products:

```typescript
// src/services/metalsAPI.ts - Update with real API
export async function fetchMetalProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('source', 'Alaska Metals Exchange')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}
```

### Alaska Guide Search Integration

```typescript
// src/services/guidesAPI.ts - Update with real API
export async function fetchGuides() {
  const { data, error } = await supabase
    .from('guides')
    .select('*')
    .eq('featured', true)
    .order('rating', { ascending: false });
  
  if (error) throw error;
  return data;
}
```

## 📊 Analytics Setup

### Google Analytics

Add to `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Click Tracking

Already implemented in ProductCard.tsx and GuideCard.tsx. Enable tracking:

```typescript
// src/lib/analytics.ts
export function trackClick(category: string, action: string, label: string) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}
```

## 🔒 Security Checklist

- [ ] Set up environment variables (never commit `.env`)
- [ ] Enable HTTPS on custom domain
- [ ] Configure CORS in Supabase
- [ ] Set up rate limiting (Vercel Edge Config or Cloudflare)
- [ ] Review and set Row Level Security policies
- [ ] Enable DDoS protection (Cloudflare recommended)
- [ ] Set up monitoring (Sentry, LogRocket, etc.)

## 🎨 Customization

### Update Brand Colors

Edit `src/index.css`:

```css
:root {
  --primary: 210 90% 45%;  /* Blue */
  --gold: 43 96% 56%;      /* Gold accent */
  /* ... other colors */
}
```

### Update Partner Sites

Edit `src/lib/constants.ts`:

```typescript
export const allSites: SiteInfo[] = [
  {
    id: 'metals',
    name: 'Alaska Metals Exchange',
    url: 'https://alaskametalsexchange.com',
    // ... rest of config
  },
  // Add or modify sites
];
```

## 📱 PWA Setup (Optional)

Install PWA plugin:

```bash
npm install -D vite-plugin-pwa
```

Update `vite.config.ts`:

```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Alaska's Store",
        short_name: 'Alaska Store',
        description: 'Premier Alaska marketplace',
        theme_color: '#2563eb',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Test on mobile (expose to network)
npm run dev -- --host
```

## 📈 Performance Optimization

- [x] Code splitting by route
- [x] Image lazy loading
- [x] React Query caching
- [ ] Add service worker for offline support
- [ ] Implement CDN for static assets
- [ ] Enable Brotli compression
- [ ] Set up image optimization service (e.g., Cloudinary)

## 🔄 Continuous Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. Builds on push to main/master
2. Runs TypeScript checks
3. Builds production bundle
4. Deploys to GitHub Pages

**Manual deployment:**

```bash
git add .
git commit -m "Update: description"
git push origin master
```

## 📞 Support

For issues or questions:
- Email: dev@alaskasstore.com
- Documentation: https://docs.alaskasstore.com

## ✅ Launch Checklist

- [ ] Supabase project created and configured
- [ ] Environment variables set in hosting platform
- [ ] Custom domain configured (DNS + SSL)
- [ ] Analytics tracking installed
- [ ] Partner site data populated
- [ ] SEO metadata verified
- [ ] Mobile responsiveness tested
- [ ] Performance score > 90 (Lighthouse)
- [ ] All external links tested
- [ ] Social media preview images set
- [ ] Sitemap submitted to Google Search Console
- [ ] Error monitoring configured

---

**Ready to launch Alaska's flagship marketplace! 🚀**
