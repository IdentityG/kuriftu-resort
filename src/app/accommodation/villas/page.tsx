'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Home,
  Trees,
  Utensils,
  Users,
  Maximize,
  Car,
  Wifi,
  Star,
  Shield,
  ChefHat,
  Waves,
  Sun,
  Moon,
  Heart,
  Calendar
} from 'lucide-react';

const villas = [
  {
    id: 'villa-1',
    name: 'Lakefront Villa',
    price: 850,
    size: 150,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 3,
    images: [
      '/images/villas/lakefront-1.jpg',
      '/images/villas/lakefront-2.jpg',
      '/images/villas/lakefront-3.jpg',
      '/images/villas/lakefront-4.jpg',
    ],
    features: [
      'Private beach access',
      'Infinity pool',
      'Outdoor BBQ area',
      'Full kitchen',
      'Living & dining rooms',
      'Private garden',
      'Butler service',
      'Golf cart',
    ],
    highlight: 'Perfect for families',
  },
  {
    id: 'villa-2',
    name: 'Garden Villa',
    price: 750,
    size: 120,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    images: [
      '/images/villas/garden-1.jpg',
      '/images/villas/garden-2.jpg',
      '/images/villas/garden-3.jpg',
    ],
    features: [
      'Private garden',
      'Plunge pool',
      'Outdoor shower',
      'Kitchenette',
      'Sunken lounge',
      'Fire pit',
      'Daily breakfast',
      'Bikes included',
    ],
    highlight: 'Romantic retreat',
  },
];

const villaPerks = [
  { icon: ChefHat, label: 'Private Chef', desc: 'On request' },
  { icon: Car, label: 'Airport Transfer', desc: 'Complimentary' },
  { icon: Waves, label: 'Water Sports', desc: 'Free access' },
  { icon: Shield, label: '24/7 Security', desc: 'Gated compound' },
];

export default function VillasPage() {
  const [selectedVilla, setSelectedVilla] = useState(villas[0]);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <PageHero
        title="Lake View Villas"
        subtitle="Ultimate privacy and luxury in your own private villa"
        image="/images/villas-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodation', href: '/accommodation' },
          { label: 'Lake View Villas', href: '/accommodation/villas' },
        ]}
      />

      {/* Villa Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Home className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Your Private Paradise
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Experience the ultimate in privacy and luxury with our exclusive villas. 
              Each villa offers spacious living, private pools, and stunning lake views.
            </p>
          </motion.div>

          {/* Villa Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {villas.map((villa) => (
              <motion.button
                key={villa.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedVilla(villa);
                  setImageIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedVilla.id === villa.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {villa.name}
              </motion.button>
            ))}
          </div>

          {/* Villa Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image Gallery */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div
                key={selectedVilla.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-96 rounded-2xl overflow-hidden"
              >
                <Image
                  src={selectedVilla.images[imageIndex]}
                  alt={selectedVilla.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedVilla.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === imageIndex ? 'w-8 bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-4">
                {selectedVilla.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImageIndex(idx)}
                    className={`relative h-24 rounded-lg overflow-hidden ${
                      idx === imageIndex ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${selectedVilla.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Villa Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-3">
                  {selectedVilla.highlight}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {selectedVilla.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-200">
                  <div>
                    <p className="text-sm text-neutral-600">Bedrooms</p>
                    <p className="text-lg font-semibold">{selectedVilla.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600">Bathrooms</p>
                    <p className="text-lg font-semibold">{selectedVilla.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600">Size</p>
                    <p className="text-lg font-semibold">{selectedVilla.size}m²</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600">Guests</p>
                    <p className="text-lg font-semibold">Up to {selectedVilla.capacity}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Villa Features</h4>
                <div className="space-y-2">
                  {selectedVilla.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-neutral-900">
                    ${selectedVilla.price}
                  </span>
                  <span className="text-neutral-600">/night</span>
                </div>
                <Link href={`/booking?villa=${selectedVilla.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Reserve This Villa
                  </motion.button>
                </Link>
                <p className="text-xs text-neutral-600 mt-3 text-center">
                  Minimum 3 nights stay required
                </p>
              </div>
            </div>
          </div>

          {/* Villa Perks */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {villaPerks.map((perk) => (
              <motion.div
                key={perk.label}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-1">{perk.label}</h4>
                <p className="text-sm text-neutral-600">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}