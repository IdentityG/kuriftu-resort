'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, X, Phone, MapPin, Calendar, User } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: any[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-neutral-100 p-4 flex items-center justify-between">
              <div>
                <h2 className="font-bebas text-2xl text-primary-600">KURIFTU</h2>
                <p className="text-xs text-neutral-600">Resort & Water Park</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-neutral-100 last:border-0"
                >
                  <div className="py-3">
                    {item.megaMenu ? (
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-neutral-900 flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className="px-2 py-0.5 bg-accent-500 text-white text-xs rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-400 transition-transform ${
                            expandedItems.includes(item.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block font-medium text-neutral-900"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Submenu */}
                    <AnimatePresence>
                      {item.megaMenu && expandedItems.includes(item.label) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pl-4 space-y-2">
                            {item.megaMenu.categories.map((category: any) => (
                              <div key={category.title}>
                                <p className="text-xs font-semibold text-neutral-500 uppercase mb-2">
                                  {category.title}
                                </p>
                                {category.links.map((link: any) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 py-2 text-neutral-700 hover:text-primary-600 transition-colors"
                                  >
                                    {link.icon && <span>{link.icon}</span>}
                                    <span className="text-sm">{link.label}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="p-4 space-y-3">
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <User className="w-4 h-4" />
                Login / Register
              </Link>
              <Link
                href="/booking"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-tropical text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-neutral-50 space-y-3">
              <a
                href="tel:+251911234567"
                className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+251 911 234 567</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-700">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bishoftu, Ethiopia</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}