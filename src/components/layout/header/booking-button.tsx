'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Sparkles } from 'lucide-react';

interface BookingButtonProps {
  isScrolled: boolean;
}

export default function BookingButton({ isScrolled }: BookingButtonProps) {
  return (
    <Link href="/booking">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative px-6 py-2.5 rounded-full font-semibold
          bg-gradient-to-r from-primary-500 to-secondary-500
          text-white shadow-lg hover:shadow-xl
          transition-all duration-300 group overflow-hidden
        `}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500"
          animate={{ x: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ width: '200%' }}
        />

        {/* Sparkle animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                scale: 0 
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <Sparkles className="w-3 h-3 text-white/50" />
            </motion.div>
          ))}
        </motion.div>

        {/* Button content */}
        <span className="relative flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </span>

        {/* Hover ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          whileHover={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
          }}
        />
      </motion.button>
    </Link>
  );
}