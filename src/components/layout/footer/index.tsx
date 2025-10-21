'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Waves
} from 'lucide-react';

const footerLinks = {
  resort: [
    { label: 'Accommodation', href: '/accommodation' },
    { label: 'Dining', href: '/dining' },
    { label: 'Spa & Wellness', href: '/spa' },
    { label: 'Events & Meetings', href: '/events' },
  ],
  waterPark: [
    { label: 'Attractions', href: '/water-park' },
    { label: 'Tickets & Passes', href: '/tickets' },
    { label: 'Group Bookings', href: '/groups' },
    { label: 'Safety Guidelines', href: '/safety' },
  ],
  information: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Careers', href: '/careers' },
  ],
  policies: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cancellation Policy', href: '/cancellation' },
    { label: 'FAQs', href: '/faqs' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/kuriftu', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/kuriftu', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/kuriftu', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/kuriftu', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-3xl mb-4">Stay Updated</h3>
              <p className="text-white/70 mb-8">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-secondary-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <Waves className="w-8 h-8 text-secondary-400" />
                <div>
                  <h2 className="font-bebas text-2xl">KURIFTU</h2>
                  <p className="text-xs text-white/70">Resort & Water Park</p>
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/70 mb-6">
              Your ultimate destination for luxury accommodation and thrilling water adventures in Bishoftu.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Resort</h4>
            <ul className="space-y-2">
              {footerLinks.resort.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Water Park</h4>
            <ul className="space-y-2">
              {footerLinks.waterPark.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+251911234567"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-secondary-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +251 911 234 567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kuriftu.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-secondary-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@kuriftu.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Lake Bishoftu<br />
                  Bishoftu, Ethiopia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2024 Kuriftu Resort & Spa. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.policies.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-secondary-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}