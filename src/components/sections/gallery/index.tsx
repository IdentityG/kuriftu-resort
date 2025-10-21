'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  Instagram, 
  Heart, 
  MessageCircle, 
  Bookmark,
  Grid3x3,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Maximize2
} from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/images/g1.jpg',
    thumbnail: '/images/g1.jpg',
    caption: 'Sunset views from our infinity pool 🌅',
    likes: 1234,
    comments: 45,
    category: 'Pool',
    instagramUrl: '#',
  },
  {
    id: 2,
    type: 'video',
    src: '/video/water.mp4',
    thumbnail: '/images/g2.jpg',
    caption: 'Thrilling water slide adventures! 🎢',
    likes: 2341,
    comments: 89,
    category: 'Water Park',
    instagramUrl: '#',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/g3.webp',
    thumbnail: '/images/g3.webp',
    caption: 'Dining with a view at our lakeside restaurant 🍽️',
    likes: 892,
    comments: 23,
    category: 'Dining',
    instagramUrl: '#',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/g4.jpg',
    thumbnail: '/images/g4.jpg',
    caption: 'Rejuvenate at our world-class spa 💆‍♀️',
    likes: 1567,
    comments: 67,
    category: 'Spa',
    instagramUrl: '#',
  },
  {
    id: 5,
    type: 'image',
    src: '/images/g5.jpg',
    thumbnail: '/images/g5.jpg',
    caption: 'Wake up to paradise every morning 🏝️',
    likes: 3421,
    comments: 123,
    category: 'Rooms',
    instagramUrl: '#',
  },
  {
    id: 6,
    type: 'image',
    src: '/images/g6.jpg',
    thumbnail: '/images/g6.jpg',
    caption: 'Fun for the whole family! 👨‍👩‍👧‍👦',
    likes: 1876,
    comments: 54,
    category: 'Family',
    instagramUrl: '#',
  },
  {
    id: 7,
    type: 'video',
    src: '/video/kuriftu.mp4',
    thumbnail: '/images/g7.jpg',
    caption: 'Bird\'s eye view of paradise 🦅',
    likes: 4532,
    comments: 234,
    category: 'Aerial',
    instagramUrl: '#',
  },
  {
    id: 8,
    type: 'image',
    src: '/images/g8.jpg',
    thumbnail: '/images/g8.jpg',
    caption: 'Magical nights at Kuriftu ✨',
    likes: 2109,
    comments: 76,
    category: 'Night',
    instagramUrl: '#',
  },
  {
    id: 9,
    type: 'image',
    src: '/images/g2.jpg',
    thumbnail: '/images/g2.jpg',
    caption: 'Your dream wedding destination 💍',
    likes: 5234,
    comments: 312,
    category: 'Events',
    instagramUrl: '#',
  },
];

const categories = ['All', 'Water Park', 'Pool', 'Dining', 'Spa', 'Rooms', 'Events'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Stagger animation for gallery items
    gsap.from('.gallery-item', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: {
        amount: 0.8,
        grid: [3, 3],
        from: 'center',
      },
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    // Parallax effect for background
    gsap.to('.gallery-bg', {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="gallery-bg absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            INSTAGRAM GALLERY
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Share Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              #KuriftuMoments
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Follow us on Instagram and share your amazing experiences using #KuriftuResort
          </p>

          {/* Instagram Follow Button */}
          <motion.a
            href="https://instagram.com/kuriftu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow @kuriftu
          </motion.a>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`gallery-item relative aspect-square rounded-2xl overflow-hidden cursor-pointer group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image/Video Thumbnail */}
                <Image
                  src={item.thumbnail}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Video Indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                )}

                {/* Hover Content */}
                <AnimatePresence>
                  {hoveredId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 p-4 flex flex-col justify-end"
                    >
                      <p className="text-white text-sm mb-3 line-clamp-2">
                        {item.caption}
                      </p>
                      <div className="flex items-center gap-4 text-white">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{item.comments}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 text-white rounded-full font-semibold hover:bg-neutral-800 transition-colors"
          >
            <Grid3x3 className="w-5 h-5" />
            Load More Photos
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption and Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg mb-3">{selectedImage.caption}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white">
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{selectedImage.likes.toLocaleString()}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{selectedImage.comments}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-white hover:text-neutral-300 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-neutral-300 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-neutral-300 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}