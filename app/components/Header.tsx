'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white border-b fixed w-full z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 w-[200px]"
          >
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white"></div>
            </div>
            <Link href="/" className="text-lg font-semibold text-zinc-950">
              Horizon
            </Link>
          </motion.div>

          {/* Main Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/properties', label: 'Properties' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-end space-x-6 w-[200px]"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button whileTap={{ scale: 0.95 }} className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
