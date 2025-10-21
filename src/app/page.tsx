import AccommodationPreview from '@/components/sections/accommodation';
import Attractions from '@/components/sections/attractions';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero';

export default function HomePage() {
  return (
    <>
      <Hero />
       <Features />
      <Attractions />
      <AccommodationPreview />
      {/* Other sections will go here */}
    </>
  );
}