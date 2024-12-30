"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ServicesSection } from '@/components/services-section';
import { AnimatedText } from '@/components/animated-text';
import { FadeInWhenVisible } from '@/components/fade-in-when-visible';
import { ParallaxImage } from '@/components/parallax-image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80"
          alt="Tattoo Studio"
        />
        <div className="relative z-10 text-center text-white">
          <AnimatedText
            text="Ink Your Story"
            className="text-5xl md:text-7xl font-bold mb-4"
            highlightClass="text-[#87CEEB]"
            highlightWords={["Ink"]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Premium tattoo artistry that brings your vision to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <Button 
              size="lg"
              className="bg-[#87CEEB] text-black hover:bg-[#87CEEB]/80 hover:scale-105 transition-transform"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Book Your Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <FadeInWhenVisible>
        <ServicesSection />
      </FadeInWhenVisible>

      {/* Featured Work */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Featured Work"
            className="text-4xl font-bold text-center mb-12"
            highlightClass="text-[#87CEEB]"
            highlightWords={["Work"]}
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80'
            ].map((src, index) => (
              <motion.div
                key={index}
                className="relative h-80 group overflow-hidden rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Featured work ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="flex items-center justify-center h-full">
                    <p className="text-[#87CEEB] text-lg font-semibold">View Details</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}