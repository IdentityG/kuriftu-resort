'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Zap,
  TrendingUp,
  Timer,
  Users,
  AlertCircle,
  ChevronRight,
  Play,
  Shield,
  Star,
  Info,
  Activity
} from 'lucide-react';

const slides = [
  {
    id: 1,
    name: 'Thunder Drop',
    type: 'Free Fall',
    height: '25m',
    speed: '65 km/h',
    duration: '8 seconds',
    thrillLevel: 5,
    minHeight: 140,
    description: 'Near-vertical drop that will take your breath away',
    image: '/images/slides/thunder-drop.jpg',
    features: ['Trap door launch', 'LED light show', 'Speed timer display'],
  },
  {
    id: 2,
    name: 'Cobra Twist',
    type: 'Tube Slide',
    height: '18m',
    speed: '45 km/h',
    duration: '25 seconds',
    thrillLevel: 4,
    minHeight: 120,
    description: 'Snake through tight turns and sudden drops',
    image: '/images/slides/cobra-twist.jpg',
    features: ['360° loops', 'Transparent sections', 'Single or double tubes'],
  },
  {
    id: 3,
    name: 'Rainbow Racer',
    type: 'Mat Racing',
    height: '15m',
    lanes: 6,
    duration: '12 seconds',
    thrillLevel: 3,
    minHeight: 100,
    description: 'Race your friends down colorful parallel lanes',
    image: '/images/slides/rainbow-racer.jpg',
    features: ['6 racing lanes', 'Electronic timing', 'Winner announcement'],
  },
  {
    id: 4,
    name: 'Tornado Alley',
    type: 'Funnel Slide',
    height: '20m',
    speed: '50 km/h',
    duration: '35 seconds',
    thrillLevel: 4,
    minHeight: 130,
    description: 'Spin through a massive funnel before splashdown',
    image: '/images/slides/tornado-alley.jpg',
    features: ['Giant funnel', '4-person rafts', 'Weightless moments'],
  },
  {
    id: 5,
    name: 'Kids Rapids',
    type: 'Family Slides',
    height: '5m',
    speed: '15 km/h',
    duration: '20 seconds',
    thrillLevel: 1,
    minHeight: 0,
    maxHeight: 120,
    description: 'Safe and fun slides designed for younger adventurers',
    image: '/images/slides/kids-rapids.jpg',
    features: ['Gentle slopes', 'Shallow landing', 'Colorful themes'],
  },
];

export default function WaterSlidesPage() {
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate slide cards on scroll
      gsap.from('.slide-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: slidesRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        title="Water Slides"
        subtitle="From gentle slopes to extreme drops - thrills for every adventurer"
        image="/images/water-park/slides-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Water Park', href: '/water-park' },
          { label: 'Water Slides', href: '/water-park/slides' },
        ]}
      />

      {/* Slides Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Adrenaline-Pumping Slides
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Experience the ultimate rush on our collection of world-class water slides
            </p>
          </motion.div>

          {/* Slides Grid */}
          <div ref={slidesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="slide-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:-translate-y-2"
                onClick={() => setSelectedSlide(slide)}
              >
                <div className="relative h-48">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold">
                    {slide.type}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{slide.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">{slide.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <span>{slide.height}</span>
                    </div>
                    {slide.speed && (
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span>{slide.speed}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-orange-500" />
                      <span>{slide.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{slide.minHeight}cm+</span>
                    </div>
                  </div>

                  {/* Thrill Level */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Thrill Level</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Activity
                          key={i}
                          className={`w-4 h-4 ${
                            i < slide.thrillLevel 
                              ? 'text-orange-500 fill-current' 
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Slide Detail */}
          {selectedSlide && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    {selectedSlide.name}
                  </h3>
                  <p className="text-lg text-neutral-700 mb-6">
                    {selectedSlide.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-neutral-900">Features:</h4>
                    {selectedSlide.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-orange-500" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      <h4 className="font-semibold text-neutral-900">Requirements:</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      <li>• Minimum height: {selectedSlide.minHeight}cm</li>
                      {selectedSlide.maxHeight && (
                        <li>• Maximum height: {selectedSlide.maxHeight}cm</li>
                      )}
                      <li>• Must be able to swim</li>
                      <li>• Follow all safety instructions</li>
                    </ul>
                  </div>
                </div>

                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={selectedSlide.image}
                    alt={selectedSlide.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}