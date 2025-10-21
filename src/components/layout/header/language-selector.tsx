'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useOnClickOutside } from '../../../hooks/use-click-outside';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  { code: 'om', name: 'Afaan Oromoo', flag: '🇪🇹' },
  { code: 'ti', name: 'ትግርኛ', flag: '🇪🇹' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef as React.RefObject<HTMLElement>, () => setIsOpen(false));

  const handleSelect = (language: typeof languages[0]) => {
    setSelected(language);
    setIsOpen(false);
    // Handle language change
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{selected.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-neutral-100 overflow-hidden"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSelect(language)}
                className="w-full px-4 py-2 flex items-center justify-between hover:bg-primary-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>{language.flag}</span>
                  <span className="text-sm text-neutral-700">{language.name}</span>
                </span>
                {selected.code === language.code && (
                  <Check className="w-4 h-4 text-primary-500" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}