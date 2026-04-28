"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LogoSection = () => {
  const logos = [
    { name: 'Ethereum', src: '/logos/eth.png' },
    { name: 'Polygon', src: '/logos/polygon.png' },
    { name: 'Arbitrum', src: '/logos/arbitrum.png' },
    { name: 'Optimism', src: '/logos/optimism.png' },
    { name: 'Base', src: '/logos/base.png' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <p className="text-center text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-10">
          Backed by Builders & Ecosystem
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* Fallback to text if image fails to load */}
              <div className="absolute inset-0 flex items-center justify-center font-black text-xl tracking-tighter text-white/20">
                {logo.name}
              </div>
              {/* Actual Image component */}
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                onError={(e) => {
                  // Hide if error
                  (e.target as any).style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
