'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-taupe/30 to-off-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 tracking-tight">
            Let's Connect
          </h2>

          <p className="text-xl md:text-2xl text-taupe mb-12 leading-relaxed">
            Have a question, idea, or just want to say hi? We'd love to hear from you.
          </p>

          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:hello@banditinnovations.com"
                className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-chestnut to-terracotta text-white rounded-2xl hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-8 h-8 group-hover:rotate-12 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-xl font-medium">hello@banditinnovations.com</span>
              </motion.a>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-taupe mb-4 font-medium">Or find us on social media</p>
                <div className="flex justify-center gap-4">
                  {[
                    { name: 'Twitter', icon: '𝕏', href: '#' },
                    { name: 'LinkedIn', icon: '💼', href: '#' },
                    { name: 'GitHub', icon: '💻', href: 'https://github.com/kgardenour-dot/bandit.git' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-14 h-14 flex items-center justify-center bg-slate/5 hover:bg-slate/10 rounded-full text-2xl transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="mt-8 text-taupe/70 italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            "Innovation starts with a conversation."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

