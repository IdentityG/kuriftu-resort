'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Heart, 
  Sparkles, 
  Wine, 
  Flower, 
  Music,
  Sunset,
  Camera,
  Gift,
  Star,
  Calendar,
  Check,
  Phone,
  MessageCircle,
  Moon,
  Coffee,
  Bath,
  Users,
  ArrowRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const honeymoonPackages = [
  {
    id: 'romantic-escape',
    name: 'Romantic Escape',
    duration: '3 Nights / 4 Days',
    price: 1299,
    originalPrice: 1599,
    popular: true,
    includes: [
      'Deluxe Lake View Suite',
      'Candlelit dinner on the beach',
      'Couples spa treatment (90 min)',
      'Sunset boat cruise',
      'Daily breakfast in bed',
      'Bottle of champagne on arrival',
      'Rose petal turndown service',
      'Late checkout (2 PM)',
    ],
    image: '/images/packages/honeymoon-romantic.jpg',
  },
  {
    id: 'luxury-romance',
    name: 'Luxury Romance',
    duration: '5 Nights / 6 Days',
    price: 2199,
    originalPrice: 2699,
    popular: false,
    includes: [
      'Presidential Suite',
      'Private dining experiences (3 times)',
      'Full day spa package for two',
      'Private yacht sunset cruise',
      'Professional photoshoot session',
      'In-room couples massage',
      'Personalized butler service',
      'Airport transfers (both ways)',
      'Daily breakfast & dinner',
    ],
    image: '/images/packages/honeymoon-luxury.jpg',
  },
  {
    id: 'weekend-romance',
    name: 'Weekend Romance',
    duration: '2 Nights / 3 Days',
    price: 799,
    originalPrice: 999,
    popular: false,
    includes: [
      'Garden View Suite',
      'Welcome fruit basket & chocolates',
      'Romantic dinner for two',
      '60-minute couples massage',
      'Breakfast in restaurant',
      'Complimentary minibar',
      'Late checkout (1 PM)',
    ],
    image: '/images/packages/honeymoon-weekend.jpg',
  },
];

const experiences = [
  {
    icon: Sunset,
    title: 'Private Beach Dinner',
    description: 'Exclusive dining setup on our private beach with personal chef and waiter',
    image: '/images/experiences/beach-dinner.jpg',
  },
  {
    icon: Wine,
    title: 'Wine Tasting',
    description: 'Curated selection of Ethiopian and international wines in our cellar',
    image: '/images/experiences/wine-tasting.jpg',
  },
  {
    icon: Bath,
    title: 'Couples Spa Retreat',
    description: 'Side-by-side treatments in our exclusive couples spa suite',
    image: '/images/experiences/couples-spa.jpg',
  },
  {
    icon: Camera,
    title: 'Photography Session',
    description: 'Professional photoshoot at stunning locations around the resort',
    image: '/images/experiences/photoshoot.jpg',
  },
];

const testimonials = [
  {
    name: 'Sarah & Michael',
    location: 'USA',
    text: 'Our honeymoon at Kuriftu was absolutely magical. Every detail was perfect, from the rose petals to the private dinner on the beach.',
    rating: 5,
    image: '/images/testimonials/couple-1.jpg',
  },
  {
    name: 'Amara & Daniel',
    location: 'Ethiopia',
    text: 'The staff went above and beyond to make our stay special. The spa treatments and sunset cruise were unforgettable!',
    rating: 5,
    image: '/images/testimonials/couple-2.jpg',
  },
];

export default function HoneymoonPackagePage() {
  const [selectedPackage, setSelectedPackage] = useState(honeymoonPackages[0]);
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      {/* Hero Section with Parallax */}
      <PageHero
        title="Honeymoon Packages"
        subtitle="Begin your forever in paradise"
        image="/images/honeymoon-hero.jpg"
        height="large"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Link href="#packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all"
            >
              View Packages
            </motion.button>
          </Link>
          <Link href="#inquiry">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Plan Your Honeymoon
            </motion.button>
          </Link>
        </motion.div>
      </PageHero>

      {/* Romance Banner */}
      <section className="py-8 bg-gradient-to-r from-pink-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-pink-900">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Romantic Settings</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Personalized Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-medium">Special Surprises</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 fill-current" />
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Choose Your Perfect{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                Romance Package
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Each package is thoughtfully curated to create unforgettable moments and memories that will last a lifetime
            </p>
          </motion.div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {honeymoonPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-pink-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-pink-500 text-white rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="relative h-48">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-white/90">{pkg.duration}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.slice(0, 5).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{item}</span>
                        </li>
                      ))}
                      {pkg.includes.length > 5 && (
                        <li className="text-sm text-primary-600 font-medium pl-6">
                          +{pkg.includes.length - 5} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Starting from</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-neutral-900">${pkg.price}</span>
                        <span className="text-lg text-neutral-400 line-through">${pkg.originalPrice}</span>
                      </div>
                      <p className="text-xs text-neutral-500">per couple</p>
                    </div>
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
                      Save ${pkg.originalPrice - pkg.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Select Package
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Package Details */}
          {selectedPackage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-pink-50 to-red-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    {selectedPackage.name} Package Selected
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Ready to book your romantic getaway? Our wedding specialists will help you 
                    customize every detail to make your honeymoon perfect.
                  </p>
                  <div className="space-y-3 mb-8">
                    {selectedPackage.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                    <p className="text-sm text-neutral-600 mb-2">Total Package Price</p>
                    <p className="text-4xl font-bold text-neutral-900 mb-6">${selectedPackage.price}</p>
                    <Link href={`/booking?package=${selectedPackage.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all mb-3"
                      >
                        Book This Package
                      </motion.button>
                    </Link>
                    <button
                      onClick={() => setShowInquiry(true)}
                      className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                    >
                      Customize Package
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Romantic Experiences */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Enhance Your Romance
            </h2>
            <p className="text-lg text-neutral-600">
              Add these special experiences to make your honeymoon even more memorable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <exp.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">{exp.title}</h4>
                  <p className="text-sm text-neutral-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Love Stories from Our Couples</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-pink-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-neutral-700 italic mb-4">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inquiry" className="py-16 bg-gradient-to-r from-pink-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 fill-current" />
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Start Planning Your Dream Honeymoon
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Let our romance specialists create the perfect honeymoon experience tailored just for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+251911234567">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Our Specialists
                </motion.button>
              </a>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Request Custom Package
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}