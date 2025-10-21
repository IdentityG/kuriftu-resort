'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { 
  Star, 
  Quote, 
  ThumbsUp, 
  MessageCircle,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'United States',
    date: 'March 2024',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    title: 'Absolutely Magical Experience!',
    content: 'Our family vacation at Kuriftu was beyond amazing. The water park kept the kids entertained for hours, while the spa gave us parents the relaxation we desperately needed. The staff went above and beyond to make our stay memorable.',
    tripType: 'Family Vacation',
    highlights: ['Amazing Water Park', 'Excellent Service', 'Great Food'],
    verified: true,
    helpful: 45,
    images: ['/images/testimonials/review-1.jpg'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'China',
    date: 'February 2024',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    title: 'Perfect Honeymoon Destination',
    content: 'We chose Kuriftu for our honeymoon and it exceeded all expectations. The lake view suite was romantic, the dining options were exceptional, and the sunset views were breathtaking. Highly recommend for couples!',
    tripType: 'Honeymoon',
    highlights: ['Romantic Setting', 'Lake Views', 'Private Dining'],
    verified: true,
    helpful: 38,
  },
  {
    id: 3,
    name: 'Abebe Tadesse',
    location: 'Ethiopia',
    date: 'March 2024',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    title: 'Best Resort in Ethiopia!',
    content: 'As a local, I\'ve visited many resorts, but Kuriftu stands out. The blend of traditional Ethiopian hospitality with modern amenities is perfect. The water park is world-class and the food selection is outstanding.',
    tripType: 'Weekend Getaway',
    highlights: ['Local Cuisine', 'Water Slides', 'Cultural Experience'],
    verified: true,
    helpful: 67,
  },
  {
    id: 4,
    name: 'Emma Williams',
    location: 'United Kingdom',
    date: 'January 2024',
    avatar: '/images/testimonials/avatar-4.jpg',
    rating: 5,
    title: 'Unforgettable Adventure',
    content: 'The water park is incredible! So many slides and attractions for all ages. The lazy river was my favorite spot to relax. Staff was friendly and the resort was spotlessly clean. Will definitely return!',
    tripType: 'Solo Travel',
    highlights: ['Thrilling Slides', 'Clean Facilities', 'Friendly Staff'],
    verified: true,
    helpful: 29,
  },
  {
    id: 5,
    name: 'Ahmed Hassan',
    location: 'UAE',
    date: 'December 2023',
    avatar: '/images/testimonials/avatar-5.jpg',
    rating: 5,
    title: 'Luxury at Its Finest',
    content: 'The presidential suite was spectacular with amazing amenities. The spa treatments were rejuvenating and the private beach access made our stay extra special. Worth every penny!',
    tripType: 'Business & Leisure',
    highlights: ['Luxury Suite', 'Spa Services', 'Business Facilities'],
    verified: true,
    helpful: 52,
  },
];

const stats = [
  { icon: Star, value: '4.8/5', label: 'Average Rating' },
  { icon: MessageCircle, value: '2,500+', label: 'Reviews' },
  { icon: ThumbsUp, value: '98%', label: 'Recommend' },
  { icon: Award, value: '#1', label: 'In Ethiopia' },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<any>(null);

  useGSAP(() => {
    // Animate stats on scroll
    gsap.from('.stat-card', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 80%',
      },
    });

    // Animate testimonial cards
    gsap.from('.testimonial-card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
            GUEST TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            What Our Guests{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our guests have to say about 
            their unforgettable experiences at Kuriftu Resort
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="stat-card bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Featured Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="testimonial-card"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-2xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Verified Badge */}
                {testimonials[activeIndex].verified && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Verified Guest
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-neutral-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <MapPin className="w-3 h-3" />
                      {testimonials[activeIndex].location}
                      <span className="text-neutral-400">•</span>
                      <Calendar className="w-3 h-3" />
                      {testimonials[activeIndex].date}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">{renderStars(testimonials[activeIndex].rating)}</div>
                  <span className="text-sm text-neutral-600 font-medium">
                    {testimonials[activeIndex].tripType}
                  </span>
                </div>

                {/* Title & Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {testimonials[activeIndex].title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonials[activeIndex].highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Helpful */}
                <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{testimonials[activeIndex].helpful} found this helpful</span>
                  </div>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeIndex 
                            ? 'w-8 bg-primary-500' 
                            : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Pagination, EffectCards]}
              effect="cards"
              grabCursor={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex % testimonials.length)}
              className="w-full max-w-md mx-auto"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white h-96">
                    <Quote className="w-12 h-12 text-white/20 mb-4" />
                    <p className="text-lg mb-6 line-clamp-6">
                      {testimonial.content}
                    </p>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-white/80">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex mt-4">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-neutral-600">Rating increased by 15%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-neutral-600">Loved by 50,000+ guests</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Review Platform Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-neutral-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900">4.8/5</div>
            <div className="text-sm text-neutral-600">TripAdvisor</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900">9.2/10</div>
            <div className="text-sm text-neutral-600">Booking.com</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900">4.9/5</div>
            <div className="text-sm text-neutral-600">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900">5.0/5</div>
            <div className="text-sm text-neutral-600">Facebook</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}