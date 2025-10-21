'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Star, 
  Wifi, 
  Coffee, 
  Car, 
  Bath, 
  Users,
  Sparkles,
  Mountain,
  ChevronDown
} from 'lucide-react';

const amenitiesList = [
  { icon: Wifi, label: 'Free Wi-Fi', count: 45 },
  { icon: Coffee, label: 'Coffee Maker', count: 38 },
  { icon: Bath, label: 'Bathtub', count: 28 },
  { icon: Mountain, label: 'Balcony', count: 32 },
  { icon: Car, label: 'Parking', count: 45 },
  { icon: Sparkles, label: 'Spa Access', count: 15 },
];

interface FilterSidebarProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (amenities: string[]) => void;
}

export default function FilterSidebar({
  priceRange,
  setPriceRange,
  selectedAmenities,
  setSelectedAmenities,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState(['price', 'amenities', 'rating']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(
      selectedAmenities.includes(amenity)
        ? selectedAmenities.filter(a => a !== amenity)
        : [...selectedAmenities, amenity]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
      <h3 className="text-xl font-bold text-neutral-900 mb-6">Filters</h3>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between py-3 text-left"
        >
          <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Price Range
          </h4>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.includes('price') ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.includes('price') && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">${priceRange[0]}</span>
              <span className="text-neutral-600">${priceRange[1]}+</span>
            </div>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-500">Min Price</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-500">Max Price</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-neutral-200 my-6" />

      {/* Amenities */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('amenities')}
          className="w-full flex items-center justify-between py-3 text-left"
        >
          <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Amenities
          </h4>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.includes('amenities') ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.includes('amenities') && (
          <div className="mt-4 space-y-3">
            {amenitiesList.map((amenity) => (
              <label
                key={amenity.label}
                className="flex items-center gap-3 cursor-pointer hover:bg-neutral-50 p-2 rounded-lg transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity.label)}
                  onChange={() => toggleAmenity(amenity.label)}
                  className="w-4 h-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                />
                <amenity.icon className="w-4 h-4 text-neutral-500" />
                <span className="flex-1 text-sm text-neutral-700">{amenity.label}</span>
                <span className="text-xs text-neutral-400">({amenity.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-neutral-200 my-6" />

      {/* Guest Rating */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('rating')}
          className="w-full flex items-center justify-between py-3 text-left"
        >
          <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Guest Rating
          </h4>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.includes('rating') ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.includes('rating') && (
          <div className="mt-4 space-y-2">
            {[5, 4, 3].map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-3 cursor-pointer hover:bg-neutral-50 p-2 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="rating"
                  className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-700">& up</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setPriceRange([0, 2000]);
          setSelectedAmenities([]);
        }}
        className="w-full py-3 border border-neutral-300 rounded-lg text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}