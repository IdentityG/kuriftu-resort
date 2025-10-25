'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import { 
  Waves,
  Clock,
  Users,
  Shield,
  AlertTriangle,
  Info,
  Calendar,
  ChevronRight,
  Droplets,
  Timer,
  Heart,
  Star
} from 'lucide-react';

const wavePatterns = [
  { name: 'Gentle Ripples', height: '0.5m', duration: '5 min', intensity: 1 },
  { name: 'Rolling Waves', height: '1m', duration: '5 min', intensity: 2 },
  { name: 'Ocean Swells', height: '1.5m', duration: '5 min', intensity: 3 },
  { name: 'Storm Surge', height: '2m', duration: '3 min', intensity: 4 },
  { name: 'Tsunami Mode', height: '2.5m', duration: '2 min', intensity: 5 },
  { name: 'Random Mix', height: 'Variable', duration: '10 min', intensity: 3 },
];

const schedule = [
  { time: '09:00 - 10:00', pattern: 'Gentle Morning Waves' },
  { time: '10:00 - 12:00', pattern: 'Mixed Wave Sessions' },
  { time: '12:00 - 13:00', pattern: 'Calm Period (Lunch)' },
  { time: '13:00 - 15:00', pattern: 'High Intensity Waves' },
  { time: '15:00 - 17:00', pattern: 'Family Wave Time' },
  { time: '17:00 - 19:00', pattern: 'Sunset Sessions' },
];

export default function WavePoolPage() {
  const waveRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP wave animation
    const waveCtx = gsap.context(() => {
      gsap.to('.wave-line', {
        x: 100,
        duration: 2,
        repeat: -1,
        ease: 'none',
        stagger: 0.2,
      });
    }, waveRef);

    // Features animation
    const featuresCtx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, featuresRef);

    return () => {
      waveCtx.revert();
      featuresCtx.revert();
    };
  }, []);

  return (
    <>
      <PageHero
        title="Wave Pool"
        subtitle="Experience the ocean's power in our giant wave pool"
        image="/images/water-park/wave-pool-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Water Park', href: '/water-park' },
          { label: 'Wave Pool', href: '/water-park/wave-pool' },
        ]}
      />

      {/* Wave Animation Background */}
      <div ref={waveRef} className="relative h-20 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
        <svg className="absolute inset-0 w-full h-full">
          {[0, 1, 2].map((index) => (
            <path
              key={index}
              className="wave-line"
              d={`M0,${10 + index * 20} Q${25},${5 + index * 20} 50,${10 + index * 20} T100,${10 + index * 20}`}
              stroke="rgba(6, 182, 212, 0.2)"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Waves className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Ride the Waves
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our 2,500m² wave pool generates six different wave patterns, from gentle ripples 
              to thrilling 2.5-meter waves, providing ocean-like experiences for all ages.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Waves, value: '2,500 m²', label: 'Pool Size' },
              { icon: Timer, value: '10 min', label: 'Wave Cycles' },
              { icon: Users, value: '500', label: 'Capacity' },
              { icon: Shield, value: '8', label: 'Lifeguards' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-cyan-50 rounded-2xl"
              >
                <stat.icon className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Wave Patterns */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Wave Patterns</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wavePatterns.map((pattern, index) => (
                <motion.div
                  key={pattern.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-cyan-100"
                >
                  <h4 className="font-semibold text-neutral-900 mb-3">{pattern.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Wave Height:</span>
                      <span className="font-medium">{pattern.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Duration:</span>
                      <span className="font-medium">{pattern.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Intensity:</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Droplets
                            key={i}
                            className={`w-4 h-4 ${
                              i < pattern.intensity ? 'text-cyan-500' : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="bg-cyan-50 rounded-3xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Daily Wave Schedule</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {schedule.map((slot, index) => (
                <motion.div
                  key={slot.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg"
                >
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-neutral-900">{slot.time}</p>
                    <p className="text-sm text-neutral-600">{slot.pattern}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">All Ages Welcome</h4>
              <p className="text-sm text-neutral-600">
                Shallow and deep areas for swimmers of all skill levels
              </p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Maximum Safety</h4>
              <p className="text-sm text-neutral-600">
                8 certified lifeguards on duty at all times
              </p>
            </div>
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Beach Experience</h4>
              <p className="text-sm text-neutral-600">
                Sandy beach area for relaxation between wave sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-neutral-900">Safety Guidelines</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-3">
                {[
                  'Children under 12 must be accompanied by adults',
                  'Follow lifeguard instructions at all times',
                  'No diving in shallow areas',
                  'Wave intensity announcements before each session',
                  'Life jackets available free of charge',
                  'Swimming ability assessment required for deep areas',
                ].map((guideline, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Info className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{guideline}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Waves className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Ride the Waves?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Experience the thrill of ocean waves in the heart of Ethiopia
            </p>
            <Link href="/tickets/day-pass">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg hover:shadow-lg transition-all"
              >
                Get Your Day Pass
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}