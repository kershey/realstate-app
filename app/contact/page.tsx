'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px]"
      >
        <Image
          src="/images/ny4.jpg"
          alt="New York Skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-2xl"
            >
              Get in touch with our real estate experts
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/images/ny3.jpg')] bg-cover bg-fixed bg-center opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold mb-8 text-zinc-950"
              >
                Schedule a Meeting
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                Book a consultation with our real estate experts to discuss your
                property needs and goals.
              </motion.p>
              <motion.form variants={fadeInUp} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileTap={{ scale: 0.99 }} className="relative">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.99 }} className="relative">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </motion.div>
                </div>
                <motion.div whileTap={{ scale: 0.99 }} className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </motion.div>
                <motion.div whileTap={{ scale: 0.99 }} className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </motion.div>
                <motion.div whileTap={{ scale: 0.99 }} className="relative">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
                >
                  Schedule Appointment
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-12"
            >
              {/* Manhattan Office */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-zinc-950">
                  Manhattan Office
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>123 Madison Avenue</p>
                  <p>New York, NY 10016</p>
                  <p>Phone: (212) 555-0123</p>
                  <p>Email: manhattan@horizon.com</p>
                </div>
              </motion.div>

              {/* Brooklyn Office */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-zinc-950">
                  Brooklyn Office
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>456 Atlantic Avenue</p>
                  <p>Brooklyn, NY 11217</p>
                  <p>Phone: (718) 555-0123</p>
                  <p>Email: brooklyn@horizon.com</p>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-zinc-950">
                  Business Hours
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
