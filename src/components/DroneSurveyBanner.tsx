import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Map, Building, Film } from 'lucide-react';

export function DroneSurveyBanner() {
  const services = [
    { icon: Camera, title: 'Aerial Photography', desc: 'Stunning high-resolution imagery' },
    { icon: Map, title: 'Land Surveying', desc: 'Precise topographic mapping' },
    { icon: Building, title: 'Construction Monitoring', desc: 'Progress documentation' },
    { icon: Film, title: 'Cinematography', desc: 'Professional video production' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-2xl">🚁</span>
              <span className="text-sm font-semibold">Alaska Drone Survey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Aerial Services
            </h2>
            <p className="text-lg text-blue-200">
              Cutting-edge drone technology for surveying, photography, and mapping
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {services.map((service) => (
              <Card key={service.title} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                <service.icon className="h-10 w-10 mx-auto mb-3 text-purple-300" />
                <h3 className="font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-blue-200">{service.desc}</p>
              </Card>
            ))}
          </div>

          {/* Featured Projects Preview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80"
                alt="Aerial view"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                alt="Mountain landscape"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                alt="Coastline"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8"
              asChild
            >
              <a href="https://alaskadronesurvey.com" target="_blank" rel="noopener noreferrer">
                Request a Quote →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
