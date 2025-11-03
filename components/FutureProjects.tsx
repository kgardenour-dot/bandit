'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FutureProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-off-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate mb-4 tracking-tight">
            What's Next?
          </h2>
          <p className="text-xl text-taupe">
            The best ideas are still brewing...
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-taupe/20 to-chestnut/20 rounded-3xl p-12 md:p-16 text-center border-4 border-dashed border-slate/20 hover:border-terracotta/50 transition-all duration-500 group">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="text-7xl mb-6 inline-block"
              >
                💡
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate mb-4">
                Next idea loading...
              </h3>

              <p className="text-lg text-taupe mb-8">
                We're always dreaming up new ways to make your digital life more meaningful, 
                delightful, and fun. Stay tuned!
              </p>

              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-terracotta rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/0 to-terracotta/0 group-hover:from-terracotta/5 group-hover:to-chestnut/5 rounded-3xl transition-all duration-500 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

