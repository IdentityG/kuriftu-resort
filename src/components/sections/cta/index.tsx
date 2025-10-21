'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  Calendar, 
  Phone, 
  Gift, 
  ArrowRight, 
  Sparkles,
  Star,
  Clock,
  Users
} from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate background gradient
    gsap.to('.cta-gradient', {
      backgroundPosition: '100% 50%',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });

    // Floating animation for icons
    gsap.to('.float-icon', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2,
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Wrapper div for proper spacing */}
      <div className="relative py-24">
        {/* Animated Gradient Background */}
        <div 
          className="cta-gradient absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600"
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 float-icon">
            <Star className="w-12 h-12 text-white/20" />
          </div>
          <div className="absolute top-20 right-20 float-icon">
            <Sparkles className="w-16 h-16 text-white/20" />
          </div>
          <div className="absolute bottom-10 left-1/3 float-icon">
            <Gift className="w-10 h-10 text-white/20" />
          </div>
          <div className="absolute bottom-20 right-10 float-icon">
            <Users className="w-14 h-14 text-white/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Special Offer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8"
            >
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Limited Time Offer</span>
              <span className="px-2 py-1 bg-accent-500 text-white rounded-full text-xs font-bold">
                -30% OFF
              </span>
            </motion.div>

            {/* Main CTA Content */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bebas text-white mb-6"
            >
              Ready for Your Dream Vacation?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              Book now and save up to 30% on your stay. Experience luxury, adventure, 
              and relaxation at Ethiopia's premier resort destination.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Free Cancellation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <Gift className="w-4 h-4" />
                <span className="text-sm">Complimentary Breakfast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <Users className="w-4 h-4" />
                <span className="text-sm">Kids Stay Free</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Stay Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+251911234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +251 911 234 567
              </motion.a>
            </motion.div>

            {/* Urgency Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-sm mt-8"
            >
              ⏰ Offer ends in 48 hours • Only 5 rooms left at this price
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}