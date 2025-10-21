'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  Waves, 
  Sparkles, 
  Shield, 
  MapPin, 
  Wifi, 
  Car,
  Users,
  Clock,
  Award,
  Heart
} from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'Water Park Paradise',
    description: '15+ thrilling water slides, wave pools, and lazy rivers for endless aquatic adventures.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    icon: Sparkles,
    title: 'Luxury Spa & Wellness',
    description: 'Rejuvenate your body and soul with traditional Ethiopian and modern spa treatments.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.1,
  },
  {
    icon: Award,
    title: 'Award-Winning Resort',
    description: 'Recognized as Ethiopia\'s premier resort destination with 5-star hospitality.',
    color: 'from-amber-500 to-orange-500',
    delay: 0.2,
  },
  {
    icon: MapPin,
    title: 'Prime Lake Location',
    description: 'Stunning views of Lake Bishoftu with private beach access and water activities.',
    color: 'from-emerald-500 to-teal-500',
    delay: 0.3,
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Kids clubs, family suites, and activities designed for all ages to enjoy together.',
    color: 'from-indigo-500 to-blue-500',
    delay: 0.4,
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Certified lifeguards, modern safety equipment, and strict hygiene protocols.',
    color: 'from-red-500 to-rose-500',
    delay: 0.5,
  },
];

const stats = [
  { value: '500+', label: 'Rooms & Suites', suffix: '' },
  { value: '15', label: 'Water Attractions', suffix: '+' },
  { value: '98', label: 'Guest Satisfaction', suffix: '%' },
  { value: '24/7', label: 'Concierge Service', suffix: '' },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useGSAP(() => {
    if (!isInView) return;

    // Animate feature cards on scroll
    gsap.from('.feature-card', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    // Animate stats counter
    gsap.from('.stat-item', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 80%',
      },
    });

    // Parallax effect for background elements
    gsap.to('.parallax-element', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-element absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="parallax-element absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            WHY CHOOSE KURIFTU
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Experience the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover a perfect blend of adventure, relaxation, and luxury at Ethiopia's most 
            spectacular resort destination
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="feature-card group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="stats-container bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="stat-item text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-4xl md:text-5xl font-bebas text-white mb-2"
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}