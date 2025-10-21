'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Crown,
  Gem,
  Sparkles,
  Phone,
  Calendar,
  Check,
  Star
} from 'lucide-react';

const features = [
  'Private elevator access',
  'Personal butler 24/7',
  'Private spa room',
  'Home theater system',
  'Grand piano',
  'Wine cellar',
  'Private gym',
  'Helicopter landing',
];

const services = [
  'Rolls-Royce airport transfer',
  'Personal chef on demand',
  'Private yacht access',
  'Exclusive beach area',
  'Personal shopper service',
  'In-room spa treatments',
];

export default function PresidentialSuitePage() {
  return (
    <>
      <PageHero
        title="Presidential Suite"
        subtitle="The pinnacle of luxury and exclusivity"
        image="/images/presidential-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodation', href: '/accommodation' },
          { label: 'Presidential Suite', href: '/accommodation/presidential' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Crown className="w-20 h-20 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-4">
              Beyond Extraordinary
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              450m² of pure luxury with panoramic views, private facilities, and services 
              that redefine hospitality excellence.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden"
              >
                <Image
                  src={`/images/presidential/gallery-${i}.jpg`}
                  alt={`Presidential Suite ${i}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Features & Services */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Gem className="w-6 h-6 text-amber-500" />
                Suite Features
              </h3>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                Exclusive Services
              </h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-500" />
                    <span className="text-neutral-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Request Availability
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              The Presidential Suite is available by special request only. 
              Contact our concierge team for availability and personalized arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+251911234567">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Concierge
                </motion.button>
              </a>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full font-semibold hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Inquire Online
                </motion.button>
              </Link>
            </div>
            <p className="text-sm text-neutral-600 mt-6">
              Starting from $2,500 per night • Minimum 2 nights stay
            </p>
          </div>
        </div>
      </section>
    </>
  );
}