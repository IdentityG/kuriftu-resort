import AccommodationPreview from '@/components/sections/accommodation';
import Attractions from '@/components/sections/attractions';
import CTA from '@/components/sections/cta';
import Features from '@/components/sections/features';
import Gallery from '@/components/sections/gallery';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import { Contact } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Attractions />
      <Gallery />
      <AccommodationPreview />
      <Testimonials />
      <CTA />
      {/* Other sections will go here */}
    </main>
  );
}