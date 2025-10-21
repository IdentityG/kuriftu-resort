'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Clock, 
  Shield,
  ChevronLeft,
  ChevronRight,
  Play,
  Info
} from 'lucide-react';

const attractions = [
  {
    id: 1,
    name: 'Thunder Wave',
    category: 'Extreme',
    image: '/images/attractions/thunder-wave.jpg',
    description: 'Experience the ultimate adrenaline rush on our tallest and fastest water slide.',
    height: '25m',
    speed: '60km/h',
    duration: '45 sec',
    minAge: 12,
    thrillLevel: 5,
    video: '/videos/thunder-wave.mp4',
    features: ['Heart-pumping drops', '360° loops', 'LED light effects'],
  },
  {
    id: 2,
    name: 'Lazy River Paradise',
    category: 'Relaxation',
    image: '/images/attractions/lazy-river.jpg',
    description: 'Float along our scenic lazy river surrounded by tropical landscapes.',
    height: 'Ground',
    speed: '5km/h',
    duration: '20 min',
    minAge: 0,
    thrillLevel: 1,
    features: ['Tropical scenery', 'Gentle current', 'Poolside bars'],
  },
  {
    id: 3,
    name: 'Wave Pool',
    category: 'Family',
    image: '/images/attractions/wave-pool.jpg',
    description: 'Enjoy perfect waves every 10 minutes in our giant wave pool.',
    height: 'Various',
    speed: 'Variable',
    duration: 'Unlimited',
    minAge: 0,
    thrillLevel: 2,
    features: ['6 wave patterns', 'Beach area', 'Kids zone'],
  },
  {
    id: 4,
    name: 'Tornado Twist',
    category: 'Extreme',
    image: '/images/attractions/tornado.jpg',
    description: 'Spiral through a massive funnel in this gravity-defying water coaster.',
    height: '20m',
    speed: '45km/h',
    duration: '60 sec',
    minAge: 10,
    thrillLevel: 4,
    features: ['Giant funnel', 'Multi-rider rafts', 'Weightless moments'],
  },
  {
    id: 5,
    name: 'Kids Splash Zone',
    category: 'Kids',
    image: '/images/attractions/kids-zone.jpg',
    description: 'Safe and fun water playground designed especially for our youngest guests.',
    height: 'Low',
    speed: 'Gentle',
    duration: 'Unlimited',
    minAge: 2,
    thrillLevel: 1,
    features: ['Mini slides', 'Water fountains', 'Tipping buckets'],
  },
];

const categories = ['All', 'Extreme', 'Family', 'Kids', 'Relaxation'];

export default function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAttraction, setSelectedAttraction] = useState<typeof attractions[0] | null>(null);
  const swiperRef = useRef<any>(null);

  const filteredAttractions = selectedCategory === 'All' 
    ? attractions 
    : attractions.filter(a => a.category === selectedCategory);

  const getThrillColor = (level: number) => {
    if (level <= 2) return 'text-green-500';
    if (level <= 3) return 'text-yellow-500';
    if (level <= 4) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-600 rounded-full text-sm font-semibold mb-4">
            WATER PARK ADVENTURES
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Thrilling{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
              Water Attractions
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From heart-pounding slides to relaxing pools, discover attractions for every adventure level
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Attractions Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-12"
          >
            <AnimatePresence mode="wait">
              {filteredAttractions.map((attraction) => (
                <SwiperSlide key={attraction.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden group">
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-neutral-800">
                          {attraction.category}
                        </span>
                      </div>

                      {/* Play Button for Video */}
                      {attraction.video && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute inset-0 flex items-center justify-center"
                          onClick={() => setSelectedAttraction(attraction)}
                        >
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </motion.button>
                      )}

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{attraction.name}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: i < attraction.thrillLevel ? 1 : 0.5 }}
                              transition={{ delay: i * 0.1 }}
                              className={`w-2 h-2 rounded-full ${
                                i < attraction.thrillLevel 
                                  ? `bg-white` 
                                  : 'bg-white/30'
                              }`}
                            />
                          ))}
                          <span className="text-white/80 text-sm ml-2">
                            Thrill Level
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-neutral-600 mb-4">
                        {attraction.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Zap className={`w-4 h-4 ${getThrillColor(attraction.thrillLevel)}`} />
                          <span className="text-sm text-neutral-600">Speed: {attraction.speed}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-neutral-600">{attraction.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-secondary-500" />
                          <span className="text-sm text-neutral-600">Age {attraction.minAge}+</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-neutral-600">Lifeguard</span>
                        </div>
                      </div>

                      {/* Features */}
                      {attraction.features && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {attraction.features.map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedAttraction(attraction)}
                        className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                      >
                        <Info className="w-4 h-4" />
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </AnimatePresence>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <ChevronLeft className="w-6 h-6 text-neutral-700" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <ChevronRight className="w-6 h-6 text-neutral-700" />
          </button>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/water-park">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Explore All Attractions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Attraction Detail Modal */}
      <AnimatePresence>
        {selectedAttraction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedAttraction(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{selectedAttraction.name}</h3>
                <p className="text-neutral-600">{selectedAttraction.description}</p>
                {/* Add more details */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}