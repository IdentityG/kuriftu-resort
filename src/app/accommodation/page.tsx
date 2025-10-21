'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search,
  Filter,
  Grid,
  List,
  Bed,
  Users,
  Wifi,
  Coffee,
  Tv,
  Wind,
  Bath,
  Mountain,
  Star,
  Heart,
  ChevronRight,
  Check,
  X,
  SlidersHorizontal,
  MapPin,
  Calendar,
  DollarSign,
  Sparkles,
  Award,
  Shield,
  Clock
} from 'lucide-react';
import PageHero from '../../components/ui/page-hero';
import RoomCard from '../../components/sections/accommodation/room-card';
import RoomQuickView from '../../components/sections/accommodation/room-quick-view';
import FilterSidebar from '../../components/sections/accommodation/filter-sidebar';

// Room data
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    category: 'Room',
    price: 150,
    originalPrice: 200,
    discount: 25,
    images: [
      '/images/rooms/standard-1.jpg',
      '/images/rooms/standard-2.jpg',
      '/images/rooms/standard-3.jpg',
    ],
    size: 32,
    capacity: 2,
    bedType: 'Queen Bed',
    view: 'Garden View',
    rating: 4.6,
    reviews: 234,
    description: 'Comfortable and well-appointed room with modern amenities and garden views.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Coffee Maker' },
      { icon: Tv, label: 'Smart TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Private Bathroom' },
    ],
    popular: false,
    available: 5,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    category: 'Room',
    price: 250,
    originalPrice: 300,
    discount: 17,
    images: [
      '/images/rooms/deluxe-1.jpg',
      '/images/rooms/deluxe-2.jpg',
      '/images/rooms/deluxe-3.jpg',
    ],
    size: 42,
    capacity: 3,
    bedType: 'King Bed',
    view: 'Lake View',
    rating: 4.8,
    reviews: 189,
    description: 'Spacious room featuring premium furnishings and stunning lake views.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Minibar' },
      { icon: Tv, label: 'Smart TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Bathtub' },
      { icon: Mountain, label: 'Balcony' },
    ],
    popular: true,
    available: 3,
  },
  {
    id: 3,
    name: 'Junior Suite',
    category: 'Suite',
    price: 350,
    originalPrice: 400,
    discount: 13,
    images: [
      '/images/rooms/junior-suite-1.jpg',
      '/images/rooms/junior-suite-2.jpg',
      '/images/rooms/junior-suite-3.jpg',
    ],
    size: 55,
    capacity: 3,
    bedType: 'King Bed + Sofa Bed',
    view: 'Lake View',
    rating: 4.9,
    reviews: 156,
    description: 'Elegant suite with separate living area and panoramic lake views.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Kitchen' },
      { icon: Tv, label: '55" Smart TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Jacuzzi' },
      { icon: Mountain, label: 'Private Balcony' },
    ],
    popular: true,
    available: 2,
  },
  {
    id: 4,
    name: 'Executive Suite',
    category: 'Suite',
    price: 500,
    originalPrice: 600,
    discount: 17,
    images: [
      '/images/rooms/executive-1.jpg',
      '/images/rooms/executive-2.jpg',
      '/images/rooms/executive-3.jpg',
    ],
    size: 75,
    capacity: 4,
    bedType: 'King Bed + Twin Beds',
    view: 'Panoramic Lake View',
    rating: 5.0,
    reviews: 98,
    description: 'Luxurious suite with separate bedroom, living room, and dining area.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Full Kitchen' },
      { icon: Tv, label: '65" Smart TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Spa Bath' },
      { icon: Mountain, label: 'Wraparound Balcony' },
    ],
    popular: false,
    available: 1,
  },
  {
    id: 5,
    name: 'Family Villa',
    category: 'Villa',
    price: 750,
    originalPrice: 900,
    discount: 17,
    images: [
      '/images/rooms/family-villa-1.jpg',
      '/images/rooms/family-villa-2.jpg',
      '/images/rooms/family-villa-3.jpg',
    ],
    size: 120,
    capacity: 6,
    bedType: '2 King Beds + 2 Twin Beds',
    view: 'Garden & Lake View',
    rating: 4.9,
    reviews: 67,
    description: 'Private villa perfect for families with private pool and garden.',
    amenities: [
      { icon: Wifi, label: 'Free Wi-Fi' },
      { icon: Coffee, label: 'Full Kitchen' },
      { icon: Tv, label: 'Multiple TVs' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Private Pool' },
      { icon: Mountain, label: 'Private Garden' },
    ],
    popular: true,
    available: 2,
  },
  {
    id: 6,
    name: 'Presidential Suite',
    category: 'Suite',
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    images: [
      '/images/rooms/presidential-1.jpg',
      '/images/rooms/presidential-2.jpg',
      '/images/rooms/presidential-3.jpg',
    ],
    size: 150,
    capacity: 4,
    bedType: 'Master King Bed + Guest Room',
    view: '360° Panoramic View',
    rating: 5.0,
    reviews: 45,
    description: 'The ultimate luxury experience with butler service and exclusive amenities.',
    amenities: [
      { icon: Wifi, label: 'Premium Wi-Fi' },
      { icon: Coffee, label: 'Private Bar' },
      { icon: Tv, label: 'Home Theater' },
      { icon: Wind, label: 'Climate Control' },
      { icon: Bath, label: 'Private Spa' },
      { icon: Mountain, label: 'Rooftop Terrace' },
    ],
    popular: false,
    available: 1,
  },
];

const categories = ['All Rooms', 'Room', 'Suite', 'Villa'];
const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function AccommodationPage() {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [selectedCategory, setSelectedCategory] = useState('All Rooms');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [sortBy, setSortBy] = useState('recommended');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Filter and sort rooms
  useEffect(() => {
    let filtered = [...rooms];

    // Category filter
    if (selectedCategory !== 'All Rooms') {
      filtered = filtered.filter(room => room.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(room =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(room => 
      room.price >= priceRange[0] && room.price <= priceRange[1]
    );

    // Amenities filter
    if (selectedAmenities.length > 0) {
      filtered = filtered.filter(room =>
        selectedAmenities.every(amenity =>
          room.amenities.some(a => a.label === amenity)
        )
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    setFilteredRooms(filtered);
  }, [selectedCategory, sortBy, searchQuery, priceRange, selectedAmenities]);

  const toggleFavorite = (roomId: number) => {
    setFavorites(prev =>
      prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Luxury Accommodation"
        subtitle="Choose from our collection of elegantly appointed rooms, suites, and villas"
        image="/images/accommodation-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodation', href: '/accommodation' },
        ]}
      />

      {/* Main Content */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search rooms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-neutral-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white text-primary-600 shadow-sm' : 'text-neutral-600'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white text-primary-600 shadow-sm' : 'text-neutral-600'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Toggle (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-3 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div className="flex gap-8">
            {/* Filter Sidebar (Desktop) */}
            <aside className="hidden lg:block w-80">
              <FilterSidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedAmenities={selectedAmenities}
                setSelectedAmenities={setSelectedAmenities}
              />
            </aside>

            {/* Room Grid/List */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-neutral-600">
                  Showing <span className="font-semibold text-neutral-900">{filteredRooms.length}</span> rooms
                </p>
                {filteredRooms.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Shield className="w-4 h-4" />
                    Free cancellation available
                  </div>
                )}
              </div>

              {/* Room Cards */}
              <AnimatePresence mode="popLayout">
                {filteredRooms.length > 0 ? (
                  <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
                    {filteredRooms.map((room, index) => (
                      <motion.div
                        key={room.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <RoomCard
                          room={room}
                          viewMode={viewMode}
                          isFavorite={favorites.includes(room.id)}
                          onToggleFavorite={() => toggleFavorite(room.id)}
                          onQuickView={() => setSelectedRoom(room)}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-12 h-12 text-neutral-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">No rooms found</h3>
                    <p className="text-neutral-600">Try adjusting your filters or search criteria</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Special Offer: Book 3 Nights, Get 1 Free!</h2>
            <p className="text-xl mb-8 text-white/90">
              Limited time offer. Book your extended stay and save up to 25%
            </p>
            <Link href="/offers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                View All Offers
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Room Quick View Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <RoomQuickView
            room={selectedRoom}
            onClose={() => setSelectedRoom(null)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Filter Sidebar */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedAmenities={selectedAmenities}
                setSelectedAmenities={setSelectedAmenities}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}