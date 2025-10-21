'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MapPin,
  Calendar,
  User,
  Waves,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import MobileMenu from './mobile-menu';
import MegaMenu from './mega-menu';
import BookingButton from './booking-button';
import LanguageSelector from './language-selector';

const navItems = [
  {
    label: 'Home',
    href: '/',
    highlight: false,
  },
  {
    label: 'Accommodation',
    href: '/accommodation',
    highlight: false,
    megaMenu: {
      categories: [
        {
          title: 'Room Types',
          links: [
            { label: 'Standard Rooms', href: '/accommodation/standard', icon: '🛏️' },
            { label: 'Deluxe Suites', href: '/accommodation/deluxe', icon: '✨' },
            { label: 'Lake View Villas', href: '/accommodation/villas', icon: '🏡' },
            { label: 'Presidential Suite', href: '/accommodation/presidential', icon: '👑' },
          ],
        },
        {
          title: 'Special Packages',
          links: [
            { label: 'Honeymoon Package', href: '/packages/honeymoon', icon: '💕' },
            { label: 'Family Package', href: '/packages/family', icon: '👨‍👩‍👧‍👦' },
            { label: 'Weekend Getaway', href: '/packages/weekend', icon: '🌴' },
          ],
        },
      ],
      featured: {
        image: '/images/featured-room.jpg',
        title: 'Summer Special',
        description: 'Get 20% off on all lake view villas',
        link: '/offers/summer',
      },
    },
  },
  {
    label: 'Water Park',
    href: '/water-park',
    highlight: true,
    badge: 'NEW',
    megaMenu: {
      categories: [
        {
          title: 'Attractions',
          links: [
            { label: 'Wave Pool', href: '/water-park/wave-pool', icon: '🌊' },
            { label: 'Water Slides', href: '/water-park/slides', icon: '🎢' },
            { label: 'Lazy River', href: '/water-park/lazy-river', icon: '🏊' },
            { label: "Kids' Zone", href: '/water-park/kids', icon: '🧒' },
            { label: 'Adventure Island', href: '/water-park/adventure', icon: '🏝️' },
          ],
        },
        {
          title: 'Tickets & Passes',
          links: [
            { label: 'Day Pass', href: '/tickets/day-pass', icon: '🎟️' },
            { label: 'Season Pass', href: '/tickets/season', icon: '🎫' },
            { label: 'Group Bookings', href: '/tickets/groups', icon: '👥' },
            { label: 'Birthday Parties', href: '/tickets/parties', icon: '🎉' },
          ],
        },
      ],
    },
  },
  {
    label: 'Dining',
    href: '/dining',
    megaMenu: {
      categories: [
        {
          title: 'Restaurants',
          links: [
            { label: 'Lakeview Restaurant', href: '/dining/lakeview', icon: '🍽️' },
            { label: 'Poolside Grill', href: '/dining/poolside', icon: '🍖' },
            { label: 'Ethiopian Traditional', href: '/dining/traditional', icon: '🥘' },
            { label: 'Coffee Ceremony', href: '/dining/coffee', icon: '☕' },
          ],
        },
        {
          title: 'Bars & Lounges',
          links: [
            { label: 'Sunset Bar', href: '/dining/sunset-bar', icon: '🍹' },
            { label: 'Pool Bar', href: '/dining/pool-bar', icon: '🍺' },
            { label: 'Sky Lounge', href: '/dining/sky-lounge', icon: '🥂' },
          ],
        },
      ],
    },
  },
  {
    label: 'Spa & Wellness',
    href: '/spa',
    megaMenu: {
      categories: [
        {
          title: 'Treatments',
          links: [
            { label: 'Massage Therapy', href: '/spa/massage', icon: '💆' },
            { label: 'Facial Treatments', href: '/spa/facial', icon: '🧖' },
            { label: 'Body Treatments', href: '/spa/body', icon: '🧴' },
            { label: 'Steam & Sauna', href: '/spa/steam', icon: '🧖‍♂️' },
          ],
        },
        {
          title: 'Wellness Programs',
          links: [
            { label: 'Yoga Classes', href: '/wellness/yoga', icon: '🧘' },
            { label: 'Meditation', href: '/wellness/meditation', icon: '🕉️' },
            { label: 'Fitness Center', href: '/wellness/fitness', icon: '💪' },
          ],
        },
      ],
    },
  },
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  
  const { scrollY } = useScroll();

  // Handle scroll visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    
    if (currentScrollY < 10) {
      setIsScrolled(false);
      setIsVisible(true);
    } else {
      setIsScrolled(true);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    
    lastScrollY.current = currentScrollY;
  });

  // GSAP Animations
  useGSAP(() => {
    // Initial load animation
    const tl = gsap.timeline();
    
    tl.from(logoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(navRef.current?.querySelectorAll('.nav-item') || [], {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.4")
    .from('.header-cta', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // Hover animations for nav items
    const navItems = navRef.current?.querySelectorAll('.nav-item');
    navItems?.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.nav-underline'), {
          scaleX: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
      
      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
          gsap.to(item.querySelector('.nav-underline'), {
            scaleX: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -120,
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          ${isScrolled ? 'backdrop-blur-lg shadow-lg' : ''}
        `}
      >
        {/* Top Bar */}
        <motion.div 
          initial={{ opacity: 1, height: 'auto' }}
          animate={{ 
            opacity: isScrolled ? 0 : 1,
            height: isScrolled ? 0 : 'auto',
          }}
          transition={{ duration: 0.2 }}
          className="bg-primary-600 text-white overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center gap-6">
                <a href="tel:+251911234567" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
                  <Phone className="w-3 h-3" />
                  <span>+251 911 234 567</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>Bishoftu, Ethiopia</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <LanguageSelector />
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Navigation */}
        <nav className="relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div ref={logoRef} className="flex items-center">
                <Link href="/" className="group flex items-center gap-3">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: isScrolled ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
                    >
                      <Waves className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary-400 rounded-full opacity-30 blur-xl"
                    />
                  </div>
                  <div>
                    <h1 className={`font-bebas text-2xl ${isScrolled ? 'text-primary-600' : 'text-white'} transition-colors`}>
                      KURIFTU
                    </h1>
                    <p className={`text-xs ${isScrolled ? 'text-neutral-600' : 'text-white/80'} transition-colors`}>
                      Resort & Water Park
                    </p>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div ref={navRef} className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <div
                    key={item.href}
                    className="nav-item relative"
                    onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className={`
                        relative py-2 flex items-center gap-1 font-medium transition-colors
                        ${pathname === item.href ? 'active' : ''}
                        ${isScrolled 
                          ? pathname === item.href 
                            ? 'text-primary-600' 
                            : 'text-neutral-700 hover:text-primary-600'
                          : pathname === item.href
                            ? 'text-white'
                            : 'text-white/90 hover:text-white'
                        }
                      `}
                    >
                      {item.label}
                      {item.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-4 px-1.5 py-0.5 bg-accent-500 text-white text-xs rounded-full"
                        >
                          {item.badge}
                        </motion.span>
                      )}
                      {item.megaMenu && (
                        <ChevronDown className={`w-3 h-3 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                      )}
                      <span className="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 origin-left" />
                    </Link>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {item.megaMenu && activeMenu === item.label && (
                        <MegaMenu menu={item.megaMenu} />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="header-cta hidden lg:flex items-center gap-4">
                <Link
                  href="/login"
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full transition-all
                    ${isScrolled
                      ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white hover:bg-white/10'
                    }
                  `}
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                
                <BookingButton isScrolled={isScrolled} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`
                  lg:hidden p-2 rounded-lg transition-colors
                  ${isScrolled 
                    ? 'text-neutral-700 hover:bg-neutral-100' 
                    : 'text-white hover:bg-white/10'
                  }
                `}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Water Wave Animation */}
          {!isScrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
              <motion.div
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full bg-gradient-to-r from-transparent via-secondary-400 to-transparent"
                style={{ width: '200%' }}
              />
            </div>
          )}
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Header Spacer */}
      <div className="h-20" />
    </>
  );
}