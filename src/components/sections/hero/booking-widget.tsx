'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Search, ChevronDown, Minus, Plus, X } from 'lucide-react';
import { format, addDays, isAfter, isBefore, startOfDay } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useOnClickOutside } from '@/hooks/use-click-outside';

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(addDays(new Date(), 1));
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const checkInRef = useRef<HTMLDivElement>(null);
  const checkOutRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useOnClickOutside(checkInRef, () => setShowCheckIn(false));
  useOnClickOutside(checkOutRef, () => setShowCheckOut(false));
  useOnClickOutside(guestsRef, () => setShowGuests(false));

  const updateGuests = (type: keyof typeof guests, increment: boolean) => {
    setGuests(prev => {
      const newValue = increment ? prev[type] + 1 : prev[type] - 1;
      
      // Validation rules
      if (type === 'adults' && newValue < 1) return prev; // At least 1 adult
      if (type === 'children' && newValue < 0) return prev; // Can't be negative
      if (type === 'rooms' && newValue < 1) return prev; // At least 1 room
      if (newValue > 10) return prev; // Max 10 for any field
      
      return {
        ...prev,
        [type]: newValue
      };
    });
  };

  const handleCheckInSelect = (date: Date | undefined) => {
    if (date) {
      setCheckIn(date);
      // Auto-adjust checkout if needed
      if (isAfter(date, checkOut) || !isAfter(checkOut, date)) {
        setCheckOut(addDays(date, 1));
      }
      setShowCheckIn(false);
      // Auto-open checkout picker
      setTimeout(() => setShowCheckOut(true), 300);
    }
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    if (date && isAfter(date, checkIn)) {
      setCheckOut(date);
      setShowCheckOut(false);
    }
  };

  const handleSearch = () => {
    // Close any open dropdowns
    setShowCheckIn(false);
    setShowCheckOut(false);
    setShowGuests(false);
    
    // Navigate to booking page with params
    const params = new URLSearchParams({
      checkIn: format(checkIn, 'yyyy-MM-dd'),
      checkOut: format(checkOut, 'yyyy-MM-dd'),
      adults: guests.adults.toString(),
      children: guests.children.toString(),
      rooms: guests.rooms.toString(),
    });
    
    window.location.href = `/booking?${params.toString()}`;
  };

  const totalGuests = guests.adults + guests.children;
  const guestText = `${totalGuests} ${totalGuests === 1 ? 'Guest' : 'Guests'}, ${guests.rooms} ${guests.rooms === 1 ? 'Room' : 'Rooms'}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="hero-description bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Check In */}
        <div ref={checkInRef} className="relative">
          <label className="block text-xs text-white/70 mb-1">Check In</label>
          <button 
            onClick={() => {
              setShowCheckIn(!showCheckIn);
              setShowCheckOut(false);
              setShowGuests(false);
            }}
            className="w-full px-4 py-3 bg-white/10 rounded-lg text-left text-white hover:bg-white/20 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary-400" />
              <span className="font-medium">{format(checkIn, 'MMM dd, yyyy')}</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${showCheckIn ? 'rotate-180' : ''}`} />
          </button>

          {/* Check In Date Picker */}
          <AnimatePresence>
            {showCheckIn && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full mt-2 bg-white rounded-xl shadow-2xl p-4 z-40 left-0 md:left-auto"
              >
                <DayPicker
                  mode="single"
                  selected={checkIn}
                  onSelect={handleCheckInSelect}
                  disabled={(date) => isBefore(date, startOfDay(new Date()))}
                  fromMonth={new Date()}
                  toMonth={addDays(new Date(), 365)}
                  modifiersClassNames={{
                    selected: 'bg-primary-500 text-white hover:bg-primary-600',
                    today: 'text-primary-600 font-bold',
                  }}
                  className="text-neutral-900"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Check Out */}
        <div ref={checkOutRef} className="relative">
          <label className="block text-xs text-white/70 mb-1">Check Out</label>
          <button 
            onClick={() => {
              setShowCheckOut(!showCheckOut);
              setShowCheckIn(false);
              setShowGuests(false);
            }}
            className="w-full px-4 py-3 bg-white/10 rounded-lg text-left text-white hover:bg-white/20 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary-400" />
              <span className="font-medium">{format(checkOut, 'MMM dd, yyyy')}</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${showCheckOut ? 'rotate-180' : ''}`} />
          </button>

          {/* Check Out Date Picker */}
          <AnimatePresence>
            {showCheckOut && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full mt-2 bg-white rounded-xl shadow-2xl p-4 z-40 left-0 md:left-auto"
              >
                <DayPicker
                  mode="single"
                  selected={checkOut}
                  onSelect={handleCheckOutSelect}
                  disabled={(date) => !isAfter(date, checkIn)}
                  fromMonth={checkIn}
                  toMonth={addDays(checkIn, 365)}
                  modifiersClassNames={{
                    selected: 'bg-primary-500 text-white hover:bg-primary-600',
                    today: 'text-primary-600 font-bold',
                  }}
                  className="text-neutral-900"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Guests */}
        <div ref={guestsRef} className="relative">
          <label className="block text-xs text-white/70 mb-1">Guests & Rooms</label>
          <button
            onClick={() => {
              setShowGuests(!showGuests);
              setShowCheckIn(false);
              setShowCheckOut(false);
            }}
            className="w-full px-4 py-3 bg-white/10 rounded-lg text-left text-white hover:bg-white/20 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary-400" />
              <span className="font-medium text-sm md:text-base">{guestText}</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${showGuests ? 'rotate-180' : ''}`} />
          </button>

          {/* Guests Dropdown */}
          <AnimatePresence>
            {showGuests && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full mt-2 w-full min-w-[280px] bg-white rounded-xl shadow-2xl p-5 z-40 right-0 md:right-auto"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowGuests(false)}
                  className="absolute top-3 right-3 p-1 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-500" />
                </button>

                {/* Adults */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-neutral-900">Adults</p>
                    <p className="text-xs text-neutral-500">Ages 13 or above</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateGuests('adults', false)}
                      disabled={guests.adults <= 1}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4 text-neutral-600" />
                    </button>
                    <span className="w-8 text-center font-semibold text-neutral-900">
                      {guests.adults}
                    </span>
                    <button
                      onClick={() => updateGuests('adults', true)}
                      disabled={guests.adults >= 10}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4 text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-neutral-900">Children</p>
                    <p className="text-xs text-neutral-500">Ages 0-12</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateGuests('children', false)}
                      disabled={guests.children <= 0}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4 text-neutral-600" />
                    </button>
                    <span className="w-8 text-center font-semibold text-neutral-900">
                      {guests.children}
                    </span>
                    <button
                      onClick={() => updateGuests('children', true)}
                      disabled={guests.children >= 10}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4 text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-neutral-900">Rooms</p>
                    <p className="text-xs text-neutral-500">Number of rooms</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateGuests('rooms', false)}
                      disabled={guests.rooms <= 1}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4 text-neutral-600" />
                    </button>
                    <span className="w-8 text-center font-semibold text-neutral-900">
                      {guests.rooms}
                    </span>
                    <button
                      onClick={() => updateGuests('rooms', true)}
                      disabled={guests.rooms >= 10}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4 text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Done Button */}
                <button
                  onClick={() => setShowGuests(false)}
                  className="w-full py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Done
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSearch}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 py-3 md:mt-5"
        >
          <Search className="w-5 h-5" />
          <span>Check Availability</span>
        </motion.button>
      </div>
    </motion.div>
  );
}