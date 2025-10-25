'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Waves,
  Droplets,
  Timer,
  Users,
  Shield,
  Star,
  ChevronRight,
  Play,
  Info,
  AlertCircle,
  Calendar,
  Clock,
  Sun,
  Zap,
  Heart,
  Award,
  TrendingUp,
  MapPin
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const attractions = [
  {
    id: 1,
    name: 'Thunder Wave',
    category: 'Extreme',
    description: 'Heart-pounding 25-meter drop with 360° loops',
    height: '25m',
    speed: '60 km/h',
    duration: '45 sec',
    minAge: 12,
    minHeight: 140,
    image: '/images/water-park/thunder-wave.jpg',
    video: '/videos/thunder-wave.mp4',
    thrillLevel: 5,
    popular: true,
  },
  {
    id: 2,
    name: 'Wave Pool',
    category: 'Family',
    description: 'Giant pool with 6 different wave patterns',
    size: '2,500 m²',
    waveHeight: '1.5m',
    duration: 'Unlimited',
    minAge: 0,
    minHeight: 0,
    image: '/images/water-park/wave-pool.jpg',
    thrillLevel: 2,
    popular: true,
  },
  {
    id: 3,
    name: 'Lazy River',
    category: 'Relaxation',
    description: '500m scenic river journey through tropical landscapes',
    length: '500m',
    speed: '5 km/h',
    duration: '20 min',
    minAge: 0,
    minHeight: 0,
    image: '/images/water-park/lazy-river.jpg',
    thrillLevel: 1,
    popular: false,
  },
  {
    id: 4,
    name: 'Kids Splash Zone',
    category: 'Kids',
    description: 'Safe water playground with mini slides and fountains',
    features: '15+ attractions',
    maxHeight: 120,
    duration: 'Unlimited',
    minAge: 2,
    maxAge: 12,
    image: '/images/water-park/kids-zone.jpg',
    thrillLevel: 1,
    popular: true,
  },
  {
    id: 5,
    name: 'Tornado Twist',
    category: 'Extreme',
    description: 'Massive funnel ride with weightless moments',
    height: '20m',
    speed: '45 km/h',
    duration: '60 sec',
    minAge: 10,
    minHeight: 130,
    image: '/images/water-park/tornado.jpg',
    thrillLevel: 4,
    popular: false,
  },
  {
    id: 6,
    name: 'Adventure Island',
    category: 'Family',
    description: 'Multi-level water fortress with tipping bucket',
    levels: 4,
    features: '30+ water features',
    duration: 'Unlimited',
    minAge: 4,
    minHeight: 0,
    image: '/images/water-park/adventure-island.jpg',
    thrillLevel: 2,
    popular: true,
  },
];

const stats = [
  { icon: Waves, value: '15+', label: 'Water Attractions' },
  { icon: Users, value: '2,000', label: 'Daily Capacity' },
  { icon: Shield, value: '20+', label: 'Certified Lifeguards' },
  { icon: Award, value: '#1', label: 'In East Africa' },
];

const categories = ['All', 'Extreme', 'Family', 'Kids', 'Relaxation'];

export default function WaterParkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAttraction, setSelectedAttraction] = useState<typeof attractions[0] | null>(null);
  
  // Refs for GSAP animations
  const statsRef = useRef<HTMLDivElement>(null);
  const attractionsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // GSAP Animations - using useEffect to avoid conflicts with Framer Motion
  useEffect(() => {
    // Hero content animation with GSAP
    const heroCtx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out',
      });

      // Floating animation for decorative elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5,
      });
    }, heroContentRef);

    // Stats animation with ScrollTrigger
    const statsCtx = gsap.context(() => {
      gsap.from('.stat-card', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, statsRef);

    // Cleanup
    return () => {
      heroCtx.revert();
      statsCtx.revert();
    };
  }, []);

  const filteredAttractions = selectedCategory === 'All' 
    ? attractions 
    : attractions.filter(a => a.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Water Park Adventures"
        subtitle="East Africa's largest and most thrilling water park"
        image="/images/water-park-hero.jpg"
        height="large"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Water Park', href: '/water-park' },
        ]}
      >
        <div ref={heroContentRef}>
          {/* Framer Motion for buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/tickets/day-pass">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                Buy Day Pass
              </motion.button>
            </Link>
            <Link href="#attractions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Explore Attractions
              </motion.button>
            </Link>
          </motion.div>

          {/* GSAP animated decorative elements */}
          <div className="absolute top-20 left-10 float-element">
            <Droplets className="w-8 h-8 text-white/30" />
          </div>
          <div className="absolute top-40 right-20 float-element">
            <Waves className="w-10 h-10 text-white/30" />
          </div>
        </div>
      </PageHero>

      {/* Park Info Banner */}
      <section className="py-8 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-blue-900">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Open 9 AM - 7 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5" />
              <span className="text-sm font-medium">Weather Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Lifeguard Supervised</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Family Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - GSAP Animated */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl"
              >
                <stat.icon className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section - Framer Motion */}
      <section id="attractions" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Waves className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Thrilling{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Water Attractions
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From adrenaline-pumping slides to relaxing pools, experience attractions for every thrill level
            </p>
          </motion.div>

          {/* Category Filter - Framer Motion */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-cyan-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Attractions Grid - Framer Motion */}
          <div ref={attractionsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredAttractions.map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedAttraction(attraction)}
                >
                  <div className="relative h-48">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                    {attraction.popular && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                      {attraction.category}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{attraction.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-neutral-600 mb-4">{attraction.description}</p>
                    
                    {/* Thrill Level */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-neutral-600">Thrill Level:</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Zap
                            key={i}
                            className={`w-4 h-4 ${
                              i < attraction.thrillLevel
                                ? 'text-yellow-500 fill-current'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {attraction.height && (
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-cyan-600" />
                          <span className="text-neutral-600">Height: {attraction.height}</span>
                        </div>
                      )}
                      {attraction.speed && (
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-cyan-600" />
                          <span className="text-neutral-600">{attraction.speed}</span>
                        </div>
                      )}
                      {attraction.minHeight !== undefined && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-cyan-600" />
                          <span className="text-neutral-600">
                            {attraction.minHeight > 0 ? `${attraction.minHeight}cm+` : 'All heights'}
                          </span>
                        </div>
                      )}
                      {attraction.duration && (
                        <div className="flex items-center gap-2">
                          <Timer className="w-4 h-4 text-cyan-600" />
                          <span className="text-neutral-600">{attraction.duration}</span>
                        </div>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Park Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Choose Our Water Park?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Safety First</h3>
              <p className="text-neutral-600">
                International safety standards with certified lifeguards at every attraction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">World-Class Attractions</h3>
              <p className="text-neutral-600">
                State-of-the-art slides and pools designed by international experts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Family Friendly</h3>
              <p className="text-neutral-600">
                Attractions for all ages with dedicated kids areas and family facilities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Droplets className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Make a Splash?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get your tickets now and experience the ultimate water adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tickets/day-pass">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg hover:shadow-lg transition-all"
                >
                  Get Tickets Now
                </motion.button>
              </Link>
              <Link href="/water-park/safety">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Safety Guidelines
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Attraction Detail Modal */}
      <AnimatePresence>
        {selectedAttraction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedAttraction(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64">
                <Image
                  src={selectedAttraction.image}
                  alt={selectedAttraction.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedAttraction(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  {selectedAttraction.name}
                </h3>
                <p className="text-neutral-600 mb-6">{selectedAttraction.description}</p>
                {/* Add more details here */}
                <Link href={`/water-park/${selectedAttraction.category.toLowerCase()}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition-colors"
                  >
                    View More {selectedAttraction.category} Attractions
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}