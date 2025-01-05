'use client';

import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/app/lib/data';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-950 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Available Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-400"
          >
            Discover your perfect property in New York City
          </motion.p>
        </div>
      </motion.section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {properties.map((property) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/properties/${property.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    {/* Property Image */}
                    <motion.div
                      className="relative h-64"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                        {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                      </div>
                    </motion.div>

                    {/* Property Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-zinc-950">
                        {property.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{property.location}</p>

                      {/* Property Features */}
                      <div className="flex items-center gap-4 mb-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <span>{property.bedrooms} beds</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                          </svg>
                          <span>{property.bathrooms} baths</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                          <span>{property.area} sq ft</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="text-2xl font-bold text-zinc-950"
                        >
                          ${property.price.toLocaleString()}
                          {property.type === 'rent' ? '/month' : ''}
                        </motion.span>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="text-zinc-500 group-hover:underline"
                        >
                          View Details
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
