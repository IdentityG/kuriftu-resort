'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
  centered?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs = [],
  height = 'medium',
  overlay = true,
  centered = true,
  children,
}: PageHeroProps) {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setParallaxY(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'h-[40vh] min-h-[300px]';
      case 'large':
        return 'h-[80vh] min-h-[600px]';
      default:
        return 'h-[60vh] min-h-[400px]';
    }
  };

  return (
    <section className={`relative ${getHeightClass()} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay Gradients */}
        {overlay && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20" />
          </>
        )}
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 ${centered ? 'text-center' : ''}`}>
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex flex-wrap items-center justify-center gap-2 text-white/80">
              <li>
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-white/50" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bebas text-white mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Additional Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full" />
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full h-12 fill-white"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d="M0,48 L60,42 C120,36,240,24,360,20 C480,16,600,20,720,22 C840,24,960,24,1080,22 C1200,20,1320,16,1380,14 L1440,12 L1440,48 L1380,48 C1320,48,1200,48,1080,48 C960,48,840,48,720,48 C600,48,480,48,360,48 C240,48,120,48,60,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}