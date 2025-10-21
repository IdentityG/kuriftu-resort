'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Users, 
  Baby, 
  Gamepad2, 
  Pizza,
  Waves,
  PartyPopper,
  Shield,
  Home,
  Calendar,
  Check,
  Star,
  Heart,
  Phone,
  Utensils,
  Activity,
  Palette,
  Music,
  TreePalm,
  Sun
} from 'lucide-react';

const familyPackages = [
  {
    id: 'family-fun',
    name: 'Family Fun Package',
    duration: '4 Nights / 5 Days',
    price: 1899,
    originalPrice: 2399,
    familySize: '2 Adults + 2 Kids',
    popular: true,
    includes: [
      'Family Suite or 2 Connected Rooms',
      'All-day water park passes',
      'Kids eat free at all restaurants',
      'Daily breakfast buffet',
      'Kids club access (9 AM - 9 PM)',
      'Family game night package',
      'Babysitting service (4 hours)',
      'Welcome gifts for kids',
      'Family photoshoot session',
    ],
    activities: [
      'Water park adventures',
      'Kids treasure hunt',
      'Family movie nights',
      'Arts & crafts workshops',
      'Mini golf tournament',
    ],
    image: '/images/packages/family-fun.jpg',
  },
  {
    id: 'adventure-family',
    name: 'Adventure Family',
    duration: '3 Nights / 4 Days',
    price: 1499,
    originalPrice: 1899,
    familySize: '2 Adults + 2 Kids',
    popular: false,
    includes: [
      'Garden View Family Room',
      'Water park day passes',
      'Breakfast and dinner included',
      'Kids activity schedule',
      'Family bike rental',
      'Poolside cabana (1 day)',
      'Ice cream vouchers',
      'Kids welcome amenities',
    ],
    activities: [
      'Guided nature walks',
      'Family kayaking',
      'Beach volleyball',
      'Campfire stories',
      'Star gazing night',
    ],
    image: '/images/packages/family-adventure.jpg',
  },
  {
    id: 'weekend-family',
    name: 'Weekend Family Escape',
    duration: '2 Nights / 3 Days',
    price: 999,
    originalPrice: 1299,
    familySize: '2 Adults + 2 Kids',
    popular: false,
    includes: [
      'Standard Family Room',
      'Water park access',
      'Breakfast buffet',
      'Kids club (half day)',
      'Family pizza night',
      'Pool floaties & toys',
      'Kids movie collection',
    ],
    activities: [
      'Pool games',
      'Family trivia',
      'Dance party',
      'Face painting',
    ],
    image: '/images/packages/family-weekend.jpg',
  },
];

const kidsActivities = [
  {
    icon: Gamepad2,
    title: 'Kids Club',
    age: 'Ages 4-12',
    description: 'Supervised fun activities, games, and entertainment',
    times: '9 AM - 9 PM',
  },
  {
    icon: Waves,
    title: 'Water Park',
    age: 'All ages',
    description: 'Slides, pools, and splash zones for every age',
    times: '9 AM - 7 PM',
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    age: 'Ages 5+',
    description: 'Creative workshops and painting sessions',
    times: '10 AM & 3 PM',
  },
  {
    icon: Activity,
    title: 'Adventure Zone',
    age: 'Ages 8+',
    description: 'Rock climbing, zip-line, and obstacle courses',
    times: '10 AM - 6 PM',
  },
  {
    icon: Pizza,
    title: 'Kids Dining',
    age: 'All ages',
    description: 'Special kids menu and themed dinner nights',
    times: 'All day',
  },
  {
    icon: Music,
    title: 'Entertainment',
    age: 'All ages',
    description: 'Magic shows, puppet shows, and movie nights',
    times: 'Evening shows',
  },
];

const familyAmenities = [
  'Baby cots and high chairs',
  'Kids toiletries',
  'Bottle warmers',
  'Baby monitoring service',
  'Stroller rental',
  'Kids TV channels',
  'Game consoles',
  'Board games library',
];

export default function FamilyPackagePage() {
  const [selectedPackage, setSelectedPackage] = useState(familyPackages[0]);
  const [activeTab, setActiveTab] = useState<'packages' | 'activities' | 'amenities'>('packages');

  return (
    <>
      <PageHero
        title="Family Packages"
        subtitle="Unforgettable adventures for the whole family"
        image="/images/family-hero.jpg"
        height="large"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-8 text-white"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Child-Safe Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">Family Rooms</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <PartyPopper className="w-5 h-5" />
            <span className="text-sm">Kids Activities</span>
          </div>
        </motion.div>
      </PageHero>

      {/* Family Features Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-blue-900">
              <Baby className="w-5 h-5" />
              <span className="text-sm font-medium">Baby-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-blue-900">
              <Gamepad2 className="w-5 h-5" />
              <span className="text-sm font-medium">Kids Club</span>
            </div>
            <div className="flex items-center gap-2 text-blue-900">
              <Utensils className="w-5 h-5" />
              <span className="text-sm font-medium">Kids Eat Free</span>
            </div>
            <div className="flex items-center gap-2 text-blue-900">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Certified Lifeguards</span>
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
              {['packages', 'activities', 'amenities'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
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
          {activeTab === 'packages' && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
                  Family Vacation{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                    Made Easy
                  </span>
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  All-inclusive packages designed for family fun, with activities for every age 
                  and memories to last a lifetime
                </p>
              </motion.div>

              {/* Package Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {familyPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                      pkg.popular ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
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
                        <p className="text-sm text-white/90">{pkg.duration} • {pkg.familySize}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold text-neutral-900 mb-3">Package Includes:</h4>
                        <ul className="space-y-2">
                          {pkg.includes.slice(0, 5).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-neutral-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {pkg.includes.length > 5 && (
                          <p className="text-sm text-primary-600 font-medium mt-2">
                            +{pkg.includes.length - 5} more benefits
                          </p>
                        )}
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-neutral-900 mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pkg.activities.slice(0, 3).map((activity, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-neutral-900">${pkg.price}</span>
                            <span className="text-lg text-neutral-400 line-through">${pkg.originalPrice}</span>
                          </div>
                          <p className="text-xs text-neutral-500">Total package price</p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                      >
                        Select Package
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Selected Package CTA */}
              {selectedPackage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 text-center"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Ready to Book {selectedPackage.name}?
                  </h3>
                  <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                    Create magical memories with your family at Kuriftu Resort
                  </p>
                  <Link href={`/booking?package=${selectedPackage.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Book Family Package
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </>
          )}

          {activeTab === 'activities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-12">
                <PartyPopper className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Kids Activities & Entertainment
                </h2>
                <p className="text-lg text-neutral-600">
                  Fun-filled activities to keep your little ones happy and engaged
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kidsActivities.map((activity, index) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 mb-1">{activity.title}</h4>
                        <p className="text-sm text-blue-600 font-medium mb-2">{activity.age}</p>
                        <p className="text-sm text-neutral-600 mb-2">{activity.description}</p>
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          <Sun className="w-3 h-3" />
                          {activity.times}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'amenities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <Home className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Family-Friendly Amenities
                </h2>
                <p className="text-lg text-neutral-600">
                  Everything you need for a comfortable family stay
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-2xl p-8">
                  <Baby className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Baby & Toddler</h3>
                  <ul className="space-y-3">
                    {familyAmenities.slice(0, 4).map((amenity) => (
                      <li key={amenity} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-neutral-700">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-8">
                  <Gamepad2 className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Entertainment</h3>
                  <ul className="space-y-3">
                    {familyAmenities.slice(4).map((amenity) => (
                      <li key={amenity} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-neutral-700">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <TreePalm className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Start Your Family Adventure
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book now and get exclusive access to our Kids Club and water park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Family Package
              </motion.button>
            </Link>
            <a href="tel:+251911234567">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Speak to Family Specialist
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}