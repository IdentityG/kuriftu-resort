'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  Crown,
  Sparkles,
  Wine,
  Wifi,
  Tv,
  Bath,
  Coffee,
  Users,
  Maximize,
  Mountain,
  Star,
  Check,
  ChevronRight,
  Calendar,
  Gift,
  Shield
} from 'lucide-react';

const deluxeSuites = [
  {
    id: 'dlx-1',
    name: 'Deluxe Lake View Suite',
    category: 'Lake View',
    price: 350,
    originalPrice: 450,
    images: [
      '/images/rooms/deluxe-lake-1.jpg',
      '/images/rooms/deluxe-lake-2.jpg',
      '/images/rooms/deluxe-lake-3.jpg',
      '/images/rooms/deluxe-lake-4.jpg',
    ],
    size: 65,
    capacity: 3,
    features: [
      'Panoramic lake views',
      'Separate living area',
      'Private balcony',
      'King size bed',
      'Marble bathroom',
      'Walk-in closet',
    ],
    amenities: [
      'Complimentary minibar',
      'Nespresso machine',
      '55" Smart TV',
      'Bose sound system',
      'Premium toiletries',
      'Bathrobes & slippers',
      'Twice daily housekeeping',
      'Butler service',
    ],
  },
  {
    id: 'dlx-2',
    name: 'Deluxe Garden Suite',
    category: 'Garden View',
    price: 320,
    originalPrice: 400,
    images: [
      '/images/rooms/deluxe-garden-1.jpg',
      '/images/rooms/deluxe-garden-2.jpg',
      '/images/rooms/deluxe-garden-3.jpg',
    ],
    size: 60,
    capacity: 3,
    features: [
      'Private garden access',
      'Outdoor seating area',
      'Spacious bedroom',
      'King or twin beds',
      'Rain shower',
      'Work desk',
    ],
    amenities: [
      'Welcome fruit basket',
      'Coffee/tea station',
      '50" Smart TV',
      'iPad for guest services',
      'L\'Occitane amenities',
      'Yoga mat',
      'Evening turndown service',
      'Concierge service',
    ],
  },
];

const exclusivePerks = [
  {
    icon: Wine,
    title: 'Welcome Amenities',
    description: 'Complimentary champagne and fresh fruits upon arrival',
  },
  {
    icon: Crown,
    title: 'VIP Treatment',
    description: 'Priority check-in, late checkout, and exclusive lounge access',
  },
  {
    icon: Sparkles,
    title: 'Spa Credits',
    description: '$50 daily spa credit for treatments and wellness services',
  },
  {
    icon: Gift,
    title: 'Special Privileges',
    description: 'Complimentary room upgrade based on availability',
  },
];

export default function DeluxeSuitesPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'gallery'>('overview');

  return (
    <>
      <PageHero
        title="Deluxe Suites"
        subtitle="Indulge in luxury with our spacious suites featuring premium amenities"
        image="/images/deluxe-suites-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodation', href: '/accommodation' },
          { label: 'Deluxe Suites', href: '/accommodation/deluxe' },
        ]}
      />

      {/* Luxury Promise Banner */}
      <section className="py-8 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-amber-900">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Best Rate Guarantee</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-medium">VIP Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-medium">Exclusive Perks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-neutral-100 rounded-full p-1">
              {['overview', 'amenities', 'gallery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-3 rounded-full font-medium capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              {/* Introduction */}
              <div className="max-w-4xl mx-auto text-center">
                <Crown className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-900 mb-4">
                  Experience Elevated Luxury
                </h2>
                <p className="text-lg text-neutral-600">
                  Our Deluxe Suites redefine luxury accommodation with spacious interiors, 
                  stunning views, and personalized service that anticipates your every need.
                </p>
              </div>

              {/* Suite Showcases */}
              {deluxeSuites.map((suite, index) => (
                <div key={suite.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000 }}
                      className="rounded-2xl overflow-hidden"
                    >
                      {suite.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative h-96">
                            <Image
                              src={image}
                              alt={`${suite.name} ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                  >
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                      {suite.category}
                    </span>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-4">{suite.name}</h3>
                    
                    <div className="flex items-center gap-6 text-neutral-600 mb-6">
                      <span className="flex items-center gap-1">
                        <Users className="w-5 h-5" />
                        Up to {suite.capacity} guests
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize className="w-5 h-5" />
                        {suite.size}m²
                      </span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Suite Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {suite.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-neutral-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between p-6 bg-neutral-50 rounded-xl">
                      <div>
                        <p className="text-sm text-neutral-600 mb-1">Starting from</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-neutral-900">${suite.price}</span>
                          <span className="text-lg text-neutral-400 line-through">${suite.originalPrice}</span>
                          <span className="text-neutral-600">/night</span>
                        </div>
                      </div>
                      <Link href={`/booking?room=${suite.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors flex items-center gap-2"
                        >
                          Book Suite
                          <ChevronRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'amenities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Premium Amenities & Services
                </h2>
                <p className="text-lg text-neutral-600">
                  Every detail carefully curated for your comfort
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {deluxeSuites[0].amenities.map((amenity) => (
                  <div key={amenity} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 mt-0.5" />
                    <span className="text-neutral-700">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {exclusivePerks.map((perk) => (
                  <motion.div
                    key={perk.title}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl"
                  >
                    <perk.icon className="w-10 h-10 text-amber-600 mb-4" />
                    <h4 className="font-semibold text-neutral-900 mb-2">{perk.title}</h4>
                    <p className="text-sm text-neutral-600">{perk.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-4"
            >
              {deluxeSuites.flatMap(suite => suite.images).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">
            Upgrade Your Stay to Deluxe
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book now and receive complimentary spa credits and room upgrades
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:shadow-lg transition-all"
            >
              Reserve Your Deluxe Suite
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}