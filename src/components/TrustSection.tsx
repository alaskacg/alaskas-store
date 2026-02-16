import { Card } from '@/components/ui/card';
import { Shield, Lock, CheckCircle, Award } from 'lucide-react';

export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All purchases handled on secure partner sites',
    },
    {
      icon: Lock,
      title: 'SSL Encrypted',
      description: 'Your data is protected with industry-standard encryption',
    },
    {
      icon: CheckCircle,
      title: 'Verified Sellers',
      description: 'All marketplace sellers are verified and trusted',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Products and services meet our high standards',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop with Confidence</h2>
          <p className="text-lg text-gray-600">Your security and satisfaction are our priorities</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 text-center">
              <feature.icon className="h-10 w-10 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Questions? Contact us at <a href="mailto:support@alaskasstore.com" className="text-blue-600 hover:underline">support@alaskasstore.com</a></p>
        </div>
      </div>
    </section>
  );
}
