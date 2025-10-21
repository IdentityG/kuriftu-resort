'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import RoomCard from '@/components/sections/accommodation/room-card';
import { 
  Bed, 
  Users, 
  Maximize, 
  Wifi, 
  Coffee, 
  Tv, 
  Bath,
  Check,
  Star,
  Calendar,
  ArrowRight,
  Phone,
  Award
} from 'lucide-react';

const standardRooms = [
  {
    id: 'std-1',
    name: 'Standard Garden View',
    price: 120,
    originalPrice: 150,
    discount: 20,
    images: [
      '/images/rooms/standard-garden-1.jpg',
      '/images/rooms/standard-garden-2.jpg',
      '/images/rooms/standard-garden-3.jpg',
    ],
    size: 28,
    capacity: 2,
    bedType: 'Queen Bed',
    view: 'Garden View',
    rating: 4.5,
    reviews: 189,
    available: 8,
    description: 'Cozy room with beautiful garden views, perfect for couples.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Coffee/Tea Maker' },
      { icon: Tv, label: '32" TV' },
      { icon: Bath, label: 'Private Bathroom' },
    ],
  },
  {
    id: 'std-2',
    name: 'Standard Twin Room',
    price: 130,
    originalPrice: 160,
    discount: 19,
    images: [
      '/images/rooms/standard-twin-1.jpg',
      '/images/rooms/standard-twin-2.jpg',
      '/images/rooms/standard-twin-3.jpg',
    ],
    size: 30,
    capacity: 2,
    bedType: 'Twin Beds',
    view: 'Courtyard View',
    rating: 4.6,
    reviews: 156,
    available: 6,
    description: 'Comfortable twin room ideal for friends or colleagues traveling together.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Mini Fridge' },
      { icon: Tv, label: '32" TV' },
      { icon: Bath, label: 'Shower' },
    ],
  },
  {
    id: 'std-3',
    name: 'Standard Plus',
    price: 150,
    originalPrice: 180,
    discount: 17,
    images: [
      '/images/rooms/standard-plus-1.jpg',
      '/images/rooms/standard-plus-2.jpg',
      '/images/rooms/standard-plus-3.jpg',
    ],
    size: 32,
    capacity: 3,
    bedType: 'King Bed',
    view: 'Pool View',
    rating: 4.7,
    reviews: 203,
    available: 4,
    description: 'Upgraded standard room with pool views and additional amenities.',
    amenities: [
      { icon: Wifi, label: 'High-Speed Wi-Fi' },
      { icon: Coffee, label: 'Nespresso Machine' },
      { icon: Tv, label: '40" Smart TV' },
      { icon: Bath, label: 'Rain Shower' },
    ],
  },
];

const features = [
  'Daily housekeeping service',
  'Complimentary breakfast',
  'Access to swimming pool',
  '24-hour room service',
  'Air conditioning',
  'Safe deposit box',
  'Complimentary toiletries',
  'Iron and ironing board',
];

export default function StandardRoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState(standardRooms[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Standard Rooms"
        subtitle="Comfortable and affordable accommodation with all essential amenities"
        image="/images/standard-rooms-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodation', href: '/accommodation' },
          { label: 'Standard Rooms', href: '/accommodation/standard' },
        ]}
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Comfort Meets Affordability
            </h2>
            <p className="text-lg text-neutral-600">
              Our standard rooms offer the perfect balance of comfort and value. Each room is thoughtfully 
              designed with modern amenities and cozy furnishings to ensure a pleasant stay.
            </p>
          </motion.div>

          {/* Room Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={selectedRoom.images[activeImageIndex]}
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedRoom.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeImageIndex ? 'w-8 bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Room Selector */}
              <div className="grid grid-cols-3 gap-4">
                {standardRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      setSelectedRoom(room);
                      setActiveImageIndex(0);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedRoom.id === room.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <p className="font-semibold text-sm text-neutral-900">{room.name}</p>
                    <p className="text-xs text-neutral-600 mt-1">{room.bedType}</p>
                    <p className="text-lg font-bold text-primary-600 mt-2">${room.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Room Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{selectedRoom.name}</h3>
                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {selectedRoom.capacity} Guests
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    {selectedRoom.size}m²
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {selectedRoom.bedType}
                  </span>
                </div>
                <p className="text-neutral-600">{selectedRoom.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Room Amenities</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <amenity.icon className="w-5 h-5 text-primary-500" />
                      <span className="text-neutral-600">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Included Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="p-6 bg-neutral-50 rounded-xl">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-neutral-900">${selectedRoom.price}</span>
                      {selectedRoom.originalPrice && (
                        <span className="text-lg text-neutral-400 line-through">
                          ${selectedRoom.originalPrice}
                        </span>
                      )}
                      <span className="text-neutral-600">/night</span>
                    </div>
                  </div>
                  {selectedRoom.discount > 0 && (
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                      Save {selectedRoom.discount}%
                    </span>
                  )}
                </div>
                <Link href={`/booking?room=${selectedRoom.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Book This Room
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Standard Rooms */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Why Choose Our Standard Rooms?
              </h3>
              <p className="text-neutral-600">Perfect for budget-conscious travelers who don't want to compromise on quality</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Excellent Value</h4>
                <p className="text-sm text-neutral-600">
                  Best price-to-quality ratio with all essential amenities included
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Prime Location</h4>
                <p className="text-sm text-neutral-600">
                  Easy access to all resort facilities and attractions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Guest Favorite</h4>
                <p className="text-sm text-neutral-600">
                  Consistently rated 4.5+ stars by our guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Book Your Stay?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Our standard rooms fill up quickly. Book now to secure your preferred dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/accommodation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                View All Rooms
              </motion.button>
            </Link>
            <a href="tel:+251911234567">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call to Reserve
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}