'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Users, 
  Maximize, 
  Bed,
  Mountain,
  Check,
  Wifi,
  Coffee,
  Car,
  Bath,
  Shield,
  Clock,
  Calendar,
  Heart,
  Share2,
  Phone,
  MessageCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

interface RoomQuickViewProps {
  room: any;
  onClose: () => void;
}

export default function RoomQuickView({ room, onClose }: RoomQuickViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'amenities' | 'policies'>('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: room.name,
        text: room.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const policies = [
    { icon: Clock, title: 'Check-in', value: '3:00 PM - 11:00 PM' },
    { icon: Clock, title: 'Check-out', value: 'Until 12:00 PM' },
    { icon: Users, title: 'Children Policy', value: 'Children of all ages welcome' },
    { icon: Shield, title: 'Cancellation', value: 'Free cancellation up to 48 hours' },
  ];

  const allAmenities = [
    { category: 'Room Features', items: ['King Size Bed', 'Work Desk', 'Sitting Area', 'Safe Deposit Box'] },
    { category: 'Bathroom', items: ['Private Bathroom', 'Shower', 'Bathtub', 'Hair Dryer', 'Toiletries'] },
    { category: 'Entertainment', items: ['55" Smart TV', 'Netflix', 'Sound System', 'Board Games'] },
    { category: 'Connectivity', items: ['Free Wi-Fi', 'USB Charging Ports', 'International Adapters'] },
    { category: 'Comfort', items: ['Air Conditioning', 'Heating', 'Blackout Curtains', 'Soundproofing'] },
    { category: 'Services', items: ['Room Service', 'Daily Housekeeping', 'Laundry Service', 'Concierge'] },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Side - Images */}
            <div className="lg:w-1/2 relative bg-neutral-900">
              {/* Main Image */}
              <div className="relative h-64 lg:h-full">
                <Image
                  src={room.images[currentImageIndex]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                
                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {room.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'w-8 bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {room.discount > 0 && (
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                      {room.discount}% OFF
                    </span>
                  )}
                  {room.popular && (
                    <span className="px-3 py-1 bg-accent-500 text-white rounded-full text-sm font-semibold">
                      Popular Choice
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {room.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                        index === currentImageIndex ? 'ring-2 ring-white' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="lg:w-1/2 flex flex-col max-h-[90vh] lg:max-h-full">
              {/* Header */}
              <div className="p-6 border-b border-neutral-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">{room.name}</h2>
                    <div className="flex items-center gap-4 text-sm text-neutral-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Up to {room.capacity} guests
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize className="w-4 h-4" />
                        {room.size}m²
                      </span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {room.bedType}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="w-10 h-10 border border-neutral-200 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-neutral-600'}`} />
                    </button>
                    <button
                      onClick={handleShare}
                      className="w-10 h-10 border border-neutral-200 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Rating and View */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold text-neutral-900">{room.rating}</span>
                    </div>
                    <span className="text-neutral-500">({room.reviews} reviews)</span>
                  </div>
                  <span className="flex items-center gap-1 text-neutral-600">
                    <Mountain className="w-4 h-4" />
                    {room.view}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-neutral-200">
                {['overview', 'amenities', 'policies'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab as any)}
                    className={`flex-1 py-3 capitalize font-medium transition-colors ${
                      selectedTab === tab
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {selectedTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">About this room</h3>
                      <p className="text-neutral-600 leading-relaxed">{room.description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {room.amenities.map((amenity: any, index: number) => (
                          <div key={index} className="flex items-center gap-2 text-neutral-600">
                            <amenity.icon className="w-5 h-5 text-primary-500" />
                            <span>{amenity.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Why guests love it</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <p className="text-neutral-600">Stunning views of Lake Bishoftu</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <p className="text-neutral-600">Recently renovated with modern amenities</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <p className="text-neutral-600">Quiet location perfect for relaxation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'amenities' && (
                  <div className="space-y-6">
                    {allAmenities.map((category) => (
                      <div key={category.category}>
                        <h3 className="font-semibold text-neutral-900 mb-3">{category.category}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {category.items.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-neutral-600">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedTab === 'policies' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-4">Hotel Policies</h3>
                      <div className="space-y-4">
                        {policies.map((policy) => (
                          <div key={policy.title} className="flex items-start gap-3">
                            <policy.icon className="w-5 h-5 text-primary-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-neutral-900">{policy.title}</p>
                              <p className="text-sm text-neutral-600">{policy.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Important Information</h3>
                      <ul className="space-y-2 text-sm text-neutral-600">
                        <li>• Valid ID required at check-in</li>
                        <li>• Credit card required for incidentals</li>
                        <li>• Pets are not allowed</li>
                        <li>• Smoking is not permitted in rooms</li>
                        <li>• Extra beds available upon request</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer with Price and CTA */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-neutral-900">${room.price}</span>
                      {room.originalPrice > room.price && (
                        <span className="text-lg text-neutral-400 line-through">${room.originalPrice}</span>
                      )}
                      <span className="text-neutral-600">/night</span>
                    </div>
                    {room.available <= 3 && (
                      <p className="text-sm text-red-600 font-medium mt-1">
                        Only {room.available} rooms left at this price!
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Free cancellation
                    </p>
                    <p className="text-xs text-neutral-500">Until 48 hours before check-in</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`tel:+251911234567`}
                    className="flex-1 py-3 border border-neutral-300 rounded-xl font-semibold text-neutral-700 hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call to Book
                  </a>
                  <Link href={`/booking?room=${room.id}`} className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Now
                    </motion.button>
                  </Link>
                </div>

                <button className="w-full mt-3 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center justify-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Contact us for group bookings
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}