'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Calendar,
  Clock,
  Sunrise,
  Sunset,
  Coffee,
  Wine,
  Waves,
  Sparkles,
  MapPin,
  Users,
  Car,
  Check,
  TrendingUp,
  Zap,
  Gift,
  Phone,
  ArrowRight,
  Moon,
  Sun
} from 'lucide-react';

const weekendPackages = [
  {
    id: 'quick-escape',
    name: 'Quick Escape',
    duration: 'Friday - Sunday',
    nights: 2,
    price: 399,
    originalPrice: 499,
    type: 'Relaxation',
    popular: true,
    includes: [
      'Deluxe Room with lake view',
      'Late checkout (2 PM Sunday)',
      'Welcome drinks on arrival',
      'Saturday dinner for two',
      'Sunday brunch buffet',
      '30-minute spa session',
      'Complimentary Wi-Fi',
      'Pool and gym access',
    ],
    itinerary: {
      friday: ['3 PM Check-in', 'Welcome drinks', 'Sunset viewing', 'Dinner at leisure'],
      saturday: ['Breakfast buffet', 'Pool & activities', 'Spa session', 'Romantic dinner'],
      sunday: ['Late breakfast', 'Relaxation time', '2 PM checkout'],
    },
    ideal: 'Couples & Solo Travelers',
    image: '/images/packages/weekend-quick.jpg',
  },
  {
    id: 'adventure-weekend',
    name: 'Adventure Weekend',
    duration: 'Friday - Sunday',
    nights: 2,
    price: 499,
    originalPrice: 649,
    type: 'Adventure',
    popular: false,
    includes: [
      'Garden View Room',
      'All meals included',
      'Water park unlimited access',
      'Guided hiking tour',
      'Kayaking session',
      'Bonfire night (Saturday)',
      'Picnic basket for two',
      'Bike rental',
      'Photography session',
    ],
    itinerary: {
      friday: ['4 PM Check-in', 'Water park fun', 'BBQ dinner'],
      saturday: ['Morning hike', 'Kayaking', 'Picnic lunch', 'Bonfire night'],
      sunday: ['Bike tour', 'Brunch', '12 PM checkout'],
    },
    ideal: 'Active Couples & Friends',
    image: '/images/packages/weekend-adventure.jpg',
  },
  {
    id: 'wellness-weekend',
    name: 'Wellness Retreat',
    duration: 'Friday - Sunday',
    nights: 2,
    price: 599,
    originalPrice: 799,
    type: 'Wellness',
    popular: false,
    includes: [
      'Spa Suite accommodation',
      'Full board healthy meals',
      '60-minute full body massage',
      'Yoga sessions (morning)',
      'Meditation classes',
      'Detox juice bar access',
      'Steam and sauna',
      'Wellness consultation',
      'Aromatherapy kit',
    ],
    itinerary: {
      friday: ['2 PM Check-in', 'Wellness consultation', 'Spa treatment', 'Healthy dinner'],
      saturday: ['Sunrise yoga', 'Spa breakfast', 'Massage therapy', 'Meditation', 'Detox dinner'],
      sunday: ['Morning meditation', 'Farewell brunch', '1 PM checkout'],
    },
    ideal: 'Wellness Enthusiasts',
    image: '/images/packages/weekend-wellness.jpg',
  },
];

const weekendHighlights = [
  {
    icon: Clock,
    title: 'Short & Sweet',
    description: 'Perfect 2-night escapes designed for busy schedules',
  },
  {
    icon: Zap,
    title: 'Quick Booking',
    description: 'Book until Thursday for the same weekend',
  },
  {
    icon: TrendingUp,
    title: 'Maximum Value',
    description: 'All-inclusive packages at special weekend rates',
  },
  {
    icon: Gift,
    title: 'Extra Perks',
    description: 'Complimentary upgrades based on availability',
  },
];

const activities = [
  { time: 'Friday Evening', icon: Sunset, activity: 'Sunset cocktails by the pool' },
  { time: 'Saturday Morning', icon: Sunrise, activity: 'Sunrise yoga session' },
  { time: 'Saturday Afternoon', icon: Waves, activity: 'Water activities & relaxation' },
  { time: 'Saturday Evening', icon: Wine, activity: 'Live music & entertainment' },
  { time: 'Sunday Morning', icon: Coffee, activity: 'Leisurely brunch' },
  { time: 'Sunday Afternoon', icon: Sun, activity: 'Final relaxation before departure' },
];

export default function WeekendGetawayPage() {
  const [selectedPackage, setSelectedPackage] = useState(weekendPackages[0]);
  const [activeDay, setActiveDay] = useState<'friday' | 'saturday' | 'sunday'>('friday');

  return (
    <>
      <PageHero
        title="Weekend Getaway"
        subtitle="Escape the routine with our perfect weekend packages"
        image="/images/weekend-hero.jpg"
        height="large"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm">2 Nights</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Friday to Sunday</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">All-Inclusive</span>
          </div>
        </motion.div>
      </PageHero>

      {/* Weekend Benefits */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {weekendHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <highlight.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-neutral-900 text-sm mb-1">{highlight.title}</h4>
                <p className="text-xs text-neutral-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Choose Your Weekend{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                Adventure
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Whether you seek relaxation, adventure, or wellness, we have the perfect weekend package for you
            </p>
          </motion.div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {weekendPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPackage(pkg)}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all ${
                  selectedPackage.id === pkg.id ? 'ring-2 ring-purple-500' : ''
                } ${pkg.popular ? 'border-2 border-purple-200' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-xs font-semibold">
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
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-neutral-800">
                      {pkg.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-white/90">{pkg.duration}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-neutral-600 mb-4">
                    Ideal for: <span className="font-semibold">{pkg.ideal}</span>
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.includes.length > 4 && (
                      <p className="text-sm text-purple-600 font-medium mt-2">
                        +{pkg.includes.length - 4} more inclusions
                      </p>
                    )}
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-neutral-100">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-neutral-900">${pkg.price}</span>
                        <span className="text-sm text-neutral-400 line-through">${pkg.originalPrice}</span>
                      </div>
                      <p className="text-xs text-neutral-500">per person</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">
                      Save ${pkg.originalPrice - pkg.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Package Details */}
          {selectedPackage && (
            <motion.div
              key={selectedPackage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Itinerary */}
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                    {selectedPackage.name} Itinerary
                  </h3>
                  
                  <div className="flex gap-2 mb-6">
                    {(['friday', 'saturday', 'sunday'] as const).map((day) => (
                      <button
                        key={day}
                        onClick={() => setActiveDay(day)}
                        className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                          activeDay === day
                            ? 'bg-purple-500 text-white'
                            : 'bg-white text-neutral-600 hover:bg-purple-100'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
                    {selectedPackage.itinerary[activeDay].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-purple-600">{index + 1}</span>
                        </div>
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </motion.div>

                  <div className="mt-8 p-4 bg-white rounded-xl">
                    <h4 className="font-semibold text-neutral-900 mb-3">Full Package Includes:</h4>
                    <ul className="space-y-2">
                      {selectedPackage.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Section */}
                <div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-6">
                      <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                        Book Your Weekend Escape
                      </h4>
                      <p className="text-neutral-600">
                        Available every weekend • Book by Thursday
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between py-3 border-b border-neutral-200">
                        <span className="text-neutral-600">Package Type</span>
                        <span className="font-semibold">{selectedPackage.name}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-neutral-200">
                        <span className="text-neutral-600">Duration</span>
                        <span className="font-semibold">{selectedPackage.nights} Nights</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-neutral-200">
                        <span className="text-neutral-600">Price per person</span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-neutral-900">${selectedPackage.price}</span>
                          <span className="text-sm text-neutral-400 line-through ml-2">${selectedPackage.originalPrice}</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/booking?package=${selectedPackage.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all mb-3"
                      >
                        Book Weekend Package
                      </motion.button>
                    </Link>

                    <p className="text-center text-sm text-neutral-600">
                      Or call{' '}
                      <a href="tel:+251911234567" className="text-purple-600 font-semibold">
                        +251 911 234 567
                      </a>
                    </p>
                  </div>

                  {/* Weekend Activities */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-neutral-900 mb-4">Weekend Schedule</h4>
                    <div className="space-y-3">
                      {activities.map((activity, index) => (
                        <motion.div
                          key={activity.time}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg"
                        >
                          <activity.icon className="w-5 h-5 text-purple-500" />
                          <div className="flex-1">
                            <p className="text-xs text-neutral-500">{activity.time}</p>
                            <p className="text-sm font-medium text-neutral-700">{activity.activity}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Moon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Your Weekend Awaits
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Escape the ordinary this weekend. Book now and save up to 30% on our weekend packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-lg transition-all"
                >
                  Book Your Weekend
                </motion.button>
              </Link>
              <Link href="/offers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  View All Packages
                </motion.button>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Limited availability • Book early to secure your dates
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}