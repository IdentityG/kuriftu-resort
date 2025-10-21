'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  menu: {
    categories: {
      title: string;
      links: {
        label: string;
        href: string;
        icon?: string;
      }[];
    }[];
    featured?: {
      image: string;
      title: string;
      description: string;
      link: string;
    };
  };
}

export default function MegaMenu({ menu }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl"
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100">
        <div className="grid grid-cols-12 gap-0">
          {/* Menu Categories */}
          <div className="col-span-8 p-8">
            <div className="grid grid-cols-2 gap-8">
              {menu.categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    {category.title}
                    <span className="flex-1 h-px bg-neutral-200" />
                  </h3>
                  <ul className="space-y-2">
                    {category.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-3 p-2 rounded-lg hover:bg-primary-50 transition-all"
                        >
                          {link.icon && (
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {link.icon}
                            </span>
                          )}
                          <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">
                            {link.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-neutral-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          {menu.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-4 bg-gradient-to-br from-primary-50 to-secondary-50 p-6"
            >
              <div className="h-full flex flex-col">
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-ocean opacity-20" />
                  <Image
                    src={menu.featured.image}
                    alt={menu.featured.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-accent-500 text-white text-xs rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {menu.featured.title}
                </h4>
                <p className="text-sm text-neutral-600 mb-4 flex-1">
                  {menu.featured.description}
                </p>
                <Link
                  href={menu.featured.link}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}