import { HeroSection } from '@/components/HeroSection';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { MetalsExchangeBanner } from '@/components/MetalsExchangeBanner';
import { FeaturedGuides } from '@/components/FeaturedGuides';
import { DroneSurveyBanner } from '@/components/DroneSurveyBanner';
import { FoundationBanner } from '@/components/FoundationBanner';
import { SiteDirectory } from '@/components/SiteDirectory';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <MetalsExchangeBanner />
      <FeaturedGuides />
      <DroneSurveyBanner />
      <FoundationBanner />
      <SiteDirectory />
      <TrustSection />
      <Footer />
    </div>
  );
}
