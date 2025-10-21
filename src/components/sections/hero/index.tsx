'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronDown, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Calendar,
  Users,
  MapPin,
  Star,
  Sparkles,
  Waves,
  ArrowRight
} from 'lucide-react';
import HeroSlider from './hero-slider';
import BookingWidget from './booking-widget';
import AnimatedText from './animated-text';
import WaterWaveEffect from './water-wave-effect';

// Choose background type: 'video' or 'slider'
const HERO_TYPE = 'video'; // Change to 'slider' to use image slider instead

const heroStats = [
  { icon: Star, value: '4.8', label: 'Guest Rating' },
  { icon: Users, value: '50K+', label: 'Happy Guests' },
  { icon: Waves, value: '15+', label: 'Water Slides' },
  { icon: MapPin, value: 'Bishoftu', label: 'Lake View' },
];

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate hero content on load
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.4')
    .from('.hero-cta', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1,
    }, '-=0.3')
    .from('.hero-stat', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.2');

    // Floating animation for decorative elements
    gsap.to('.float-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.2,
        from: 'random',
      },
    });
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Video or Slider */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0 hero-bg"
      >
        {HERO_TYPE === 'video' ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              poster="/images/hero-poster.jpg"
            >
              <source src="/video/kuriftu.mp4" type="video/mp4" />
              <source src="/videos/hero-video.webm" type="video/webm" />
            </video>
            
            {/* Video Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </>
        ) : (
          <HeroSlider />
        )}
        
        {/* Animated Gradient Overlay */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0,118,230,0.3) 0%, rgba(0,188,212,0.3) 100%)',
              'linear-gradient(45deg, rgba(0,188,212,0.3) 0%, rgba(0,118,230,0.3) 100%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Water Wave Effect */}
      <WaterWaveEffect />

      {/* Hero Content */}
      <motion.div 
        ref={contentRef}
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-medium">Ethiopia's Premier Water Park Resort</span>
            <Sparkles className="w-4 h-4 text-secondary-400" />
          </motion.div>

          {/* Main Title */}
          <h1 className="hero-title">
            <AnimatedText
              text="Welcome to Paradise"
              className="font-bebas text-6xl md:text-7xl lg:text-8xl text-white mb-2 leading-tight"
              delay={0.3}
            />
            <AnimatedText
              text="Kuriftu Resort & Spa"
              className="font-playfair text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300"
              delay={0.5}
            />
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience luxury accommodation, thrilling water adventures, and rejuvenating spa treatments 
            at the shores of beautiful Lake Bishoftu
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-cta"
            >
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Your Stay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-cta"
            >
              <Link
                href="/water-park"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <Waves className="w-5 h-5" />
                Explore Water Park
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Quick Booking Widget */}
          <BookingWidget />

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="hero-stat text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-full mb-2">
                  <stat.icon className="w-6 h-6 text-secondary-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Video Controls - Only show if using video */}
      {HERO_TYPE === 'video' && (
        <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleVideoToggle}
            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
          >
            {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMuteToggle}
            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </motion.button>
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm font-medium">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 float-element">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-2 border-secondary-400/30 rounded-full"
        />
      </div>
      
      <div className="absolute top-40 right-20 float-element">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-2 border-primary-400/30 rounded-full"
        />
      </div>
    </section>
  );
}