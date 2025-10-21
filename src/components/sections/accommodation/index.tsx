'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Bed, 
  Users, 
  Wifi, 
  Coffee, 
  Tv, 
  Wind,
  Bath,
  Mountain,
  ArrowRight,
  Star,
  Check
} from 'lucide-react';

const accommodations = [
  {
    id: 1,
    name: 'Deluxe Lake View Suite',
    category: 'Suite',
    price: 350,
    image: '/images/rooms/deluxe-suite.jpg',
    gallery: ['/images/rooms/deluxe-1.jpg', '/images/rooms/deluxe-2.jpg'],
    size: 65,
    capacity: 3,
    view: 'Lake View',
    rating: 4.9,
    reviews: 127,
    description: 'Spacious suite with panoramic lake views and private balcony.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Coffee Maker' },
      { icon: Tv, label: 'Smart TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Jacuzzi' },
      { icon: Mountain, label: 'Lake View' },
    ],
    features: [
      'King-size bed',
      'Private balcony',
      'Mini bar',
      'Work desk',
      'Safe deposit box',
      'Room service 24/7',
    ],
  },
  {
    id: 2,
    name: 'Family Villa',
    category: 'Villa',
    price: 550,
    image: '/images/rooms/family-villa.jpg',
    size: 120,
    capacity: 6,
    view: 'Garden View',
    rating: 4.8,
    reviews: 89,
    description: 'Perfect for families with separate living area and kids room.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Kitchen' },
      { icon: Tv, label: 'Smart TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Private Pool' },
      { icon: Users, label: 'Family Room' },
    ],
    features: [
      '2 Bedrooms',
      'Private pool',
      'Full kitchen',
      'Living room',
      'Dining area',
      'Garden access',
    ],
  },
  {
    id: 3,
    name: 'Standard Room',
    category: 'Room',
    price: 150,
    image: '/images/rooms/standard.jpg',
    size: 35,
    capacity: 2,
    view: 'Garden View',
    rating: 4.6,
    reviews: 234,
    description: 'Comfortable room with modern amenities and garden views.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Coffee Maker' },
      { icon: Tv, label: 'TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Shower' },
      { icon: Mountain, label: 'Garden View' },
    ],
    features: [
      'Queen-size bed',
      'Work desk',
      'Mini fridge',
      'Safe',
      'Bathroom amenities',
      'Daily housekeeping',
    ],
  },
];

export default function AccommodationPreview() {
  const [selectedRoom, setSelectedRoom] = useState(accommodations[0]);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            LUXURY ACCOMMODATION
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Stay in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Comfort & Style
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose from our selection of elegantly appointed rooms, suites, and villas 
            with stunning views and world-class amenities
          </p>
        </motion.div>

        {/* Room Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden group">
              <Image
                src={selectedRoom.image}
                alt={selectedRoom.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Price Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                <p className="text-2xl font-bold text-neutral-900">
                  ${selectedRoom.price}
                  <span className="text-sm font-normal text-neutral-600">/night</span>
                </p>
              </div>

              {/* Rating */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-neutral-900">{selectedRoom.rating}</span>
                <span className="text-sm text-neutral-600">({selectedRoom.reviews} reviews)</span>
              </div>
            </div>

            {/* Room Type Tabs */}
            <div className="grid grid-cols-3 gap-4">
              {accommodations.map((room, index) => (
                <motion.button
                  key={room.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRoom(room)}
                  className={`relative h-24 rounded-xl overflow-hidden ${
                    selectedRoom.id === room.id 
                      ? 'ring-4 ring-primary-500' 
                      : 'ring-2 ring-neutral-200'
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white font-semibold text-sm">{room.category}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Room Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Room Title */}
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                {selectedRoom.name}
              </h3>
              <div className="flex items-center gap-4 text-neutral-600">
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  {selectedRoom.size}m²
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Up to {selectedRoom.capacity} guests
                </span>
                <span className="flex items-center gap-1">
                  <Mountain className="w-4 h-4" />
                  {selectedRoom.view}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-600 text-lg leading-relaxed">
              {selectedRoom.description}
            </p>

            {/* Amenities */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Room Amenities</h4>
              <div className="grid grid-cols-3 gap-4">
                {selectedRoom.amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-neutral-600"
                  >
                    <amenity.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm">{amenity.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Room Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedRoom.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-neutral-600"
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <Link href={`/booking?room=${selectedRoom.id}`} className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/accommodation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 border-2 border-neutral-300 text-neutral-700 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-600 transition-all"
                >
                  View All Rooms
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Early Bird Special</h3>
          <p className="text-xl mb-6 text-white/90">
            Book 30 days in advance and save up to 25% on your stay
          </p>
          <Link href="/offers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View Offer Details
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}