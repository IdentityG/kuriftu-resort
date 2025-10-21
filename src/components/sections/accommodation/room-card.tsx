'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Star, 
  Users, 
  Maximize, 
  Eye,
  Wifi,
  Coffee,
  Bath,
  Check,
  Clock,
  TrendingDown
} from 'lucide-react';

interface RoomCardProps {
  room: any;
  viewMode: 'grid' | 'list';
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onQuickView: () => void;
}

export default function RoomCard({ 
  room, 
  viewMode, 
  isFavorite, 
  onToggleFavorite, 
  onQuickView 
}: RoomCardProps) {
  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-96 h-64 md:h-auto">
            <Image
              src={room.images[0]}
              alt={room.name}
              fill
              className="object-cover"
            />
            {room.discount > 0 && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                -{room.discount}%
              </div>
            )}
            {room.popular && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white rounded-full text-sm font-semibold">
                Popular
              </div>
            )}
            <button
              onClick={onToggleFavorite}
              className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-neutral-700'}`} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{room.name}</h3>
                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Up to {room.capacity} guests
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    {room.size}m²
                  </span>
                  <span>{room.bedType}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{room.rating}</span>
                  <span className="text-sm text-neutral-500">({room.reviews})</span>
                </div>
                {room.available <= 3 && (
                  <p className="text-sm text-red-600 font-medium">
                    Only {room.available} left!
                  </p>
                )}
              </div>
            </div>

            <p className="text-neutral-600 mb-4 line-clamp-2">{room.description}</p>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3 mb-6">
              {room.amenities.slice(0, 4).map((amenity: any, index: number) => (
                <div key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                  <amenity.icon className="w-4 h-4 text-primary-500" />
                  <span>{amenity.label}</span>
                </div>
              ))}
              {room.amenities.length > 4 && (
                <span className="text-sm text-primary-600 font-medium">
                  +{room.amenities.length - 4} more
                </span>
              )}
            </div>

            {/* Price and Actions */}
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-neutral-900">${room.price}</span>
                  {room.originalPrice > room.price && (
                    <span className="text-lg text-neutral-400 line-through">${room.originalPrice}</span>
                  )}
                  <span className="text-neutral-600">/night</span>
                </div>
                <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                  <Check className="w-4 h-4" />
                  Free cancellation
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={onQuickView}
                  className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Quick View
                </button>
                <Link href={`/booking?room=${room.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover"
        />
        {room.discount > 0 && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold flex items-center gap-1">
            <TrendingDown className="w-3 h-3" />
            {room.discount}% OFF
          </div>
        )}
        {room.popular && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white rounded-full text-sm font-semibold">
            Popular
          </div>
        )}
        <button
          onClick={onToggleFavorite}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-neutral-700'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-neutral-900">{room.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{room.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-neutral-600 mb-3">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {room.capacity}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            {room.size}m²
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {room.view}
          </span>
        </div>

        <p className="text-neutral-600 mb-4 line-clamp-2">{room.description}</p>

        {/* Amenities Preview */}
        <div className="flex gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity: any, index: number) => (
            <div key={index} className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
              <amenity.icon className="w-4 h-4 text-neutral-600" />
            </div>
          ))}
          {room.amenities.length > 3 && (
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-semibold text-primary-600">+{room.amenities.length - 3}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between pt-4 border-t border-neutral-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900">${room.price}</span>
              {room.originalPrice > room.price && (
                <span className="text-sm text-neutral-400 line-through">${room.originalPrice}</span>
              )}
            </div>
            <span className="text-sm text-neutral-600">per night</span>
          </div>
          <motion.button
            onClick={onQuickView}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            View Details
          </motion.button>
        </div>

        {room.available <= 3 && (
          <p className="text-sm text-red-600 font-medium mt-3 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Only {room.available} rooms left!
          </p>
        )}
      </div>
    </motion.div>
  );
}