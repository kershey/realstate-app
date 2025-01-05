'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % 4);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px]"
      >
        <Image
          src="/images/ny3.jpg"
          alt="New York Skyline"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl font-bold text-white mb-6"
            >
              New York
              <br />
              Real Estate
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="/properties"
                className="bg-white text-black px-8 py-3 rounded-full w-fit hover:bg-gray-100 transition"
              >
                Find properties
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('/images/ny3.jpg')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-2xl text-gray-600 mb-2">
              Discover Excellence in
            </h2>
            <h3 className="text-4xl font-bold mb-16 text-zinc-950">
              Real Estate Services
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left Column - Features */}
              <div className="grid grid-cols-1 gap-8">
                {/* Feature items */}
                {[
                  {
                    title: 'Expert Negotiation',
                    description:
                      'Our skilled team handles all negotiations to ensure you get the best deal possible. We advocate for your interests at every step.',
                  },
                  {
                    title: 'Area Specialists',
                    description:
                      "Benefit from our in-depth knowledge of New York's neighborhoods and market dynamics. Make informed decisions with expert local guidance.",
                  },
                  {
                    title: 'Data-Driven Insights',
                    description:
                      'Access real-time market analytics and trends to make strategic property decisions. Stay ahead with our expert market analysis.',
                  },
                  {
                    title: 'Complete Protection',
                    description:
                      'Secure your investment with comprehensive property insurance coverage. We ensure your real estate assets are fully protected.',
                  },
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-zinc-950">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - CTA Card */}
              <motion.div variants={fadeInUp} className="md:pl-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a365d] text-white p-8 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-4">
                    Experience the ease of finding your ideal home with us!
                  </h4>
                  <Image
                    src="/images/ny3.jpg"
                    alt="New York City"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href="/properties"
                      className="inline-block bg-white text-[#1a365d] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                      Browse Properties
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newest Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-zinc-950"
          >
            Introducing Our{' '}
            <span className="font-black">Newest Properties</span>
          </motion.h2>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {/* Project Cards */}
            {[
              {
                title: 'Serenity Cove Villas',
                description:
                  'Embrace tranquility in these waterfront villas designed for ultimate relaxation.',
                image: '/images/ny-1/16.jpg',
                link: '/properties/serenity-cove',
              },
              {
                title: 'Azure Oasis Estates',
                description:
                  'Discover a sanctuary of luxury living amidst azure skies and lush landscapes.',
                image: '/images/ny-2/1.jpg',
                link: '/properties/azure-oasis',
              },
              {
                title: 'Radiant Horizon Apartments',
                description:
                  'Experience a radiant lifestyle with modern amenities and expansive horizons.',
                image: '/images/ny-3/11.jpg',
                link: '/properties/radiant-horizon',
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="rounded-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-zinc-950">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    Browse Properties
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Dream Home Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="relative h-[500px]">
                <Image
                  src="/images/ny-1/16.jpg"
                  alt="Luxury Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-4 shadow-lg"
                  >
                    <h4 className="font-semibold mb-1 text-zinc-950">
                      Check Latest Price
                    </h4>
                    <p className="text-sm text-gray-600">
                      Browse From Thousands Of Properties
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-2 mb-6">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm"
                >
                  Rent House
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm"
                >
                  Buy A Property
                </motion.span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl font-bold mb-6 text-zinc-950"
              >
                Unlock Your Dream
                <br />
                Home Today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-600 mb-8"
              >
                Unlock Your Dream Home House Rental Made Effortless™ - Our
                innovative approach to house rental removes the hassle and
                stress, ensuring that finding your dream home is a seamless
                experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/properties"
                  className="inline-flex items-center text-sm font-semibold bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  See More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NYC Skyline Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative h-[400px] w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {[
              '/images/ny2.jpg',
              '/images/ny3.jpg',
              '/images/ny4.jpg',
              '/images/ny5.jpg',
            ].map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
                style={{ display: currentImage === index ? 'block' : 'none' }}
              >
                <Image
                  src={image}
                  alt="New York City Skyline"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentImage === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImage(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          onClick={previousImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </motion.section>
    </main>
  );
}
