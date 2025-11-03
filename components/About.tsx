'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate to-chestnut relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-taupe/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-off-white mb-8 tracking-tight">
            About Bandit Innovations
          </h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <motion.p
              className="text-xl md:text-2xl text-off-white/90 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We're a small, independent studio building apps that span the full spectrum of human experience.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              From helping people navigate their wellness journey with compassion, to keeping loved ones connected through 
              thoughtful moments, to unleashing pure chaos and laughter — we don't believe apps have to be just one thing. 
              They can be serious and silly, heartfelt and hilarious, meaningful and messy.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-off-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Every app we create is designed with intention and joy — because technology should be thoughtful, beautiful, human, 
              and sometimes just plain fun. That's the Bandit Innovations way.
            </motion.p>

            {/* Decorative paw prints */}
            <motion.div
              className="mt-8 text-4xl opacity-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              🐾
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

