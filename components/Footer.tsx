'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate text-off-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #EFE9E4 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-chestnut tracking-tight mb-2">
              Bandit
            </div>
            <div className="text-xl text-taupe">Innovations</div>
            <div className="text-2xl mt-2 opacity-50">🐾</div>
          </motion.div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <a
              href="#apps"
              className="text-off-white/80 hover:text-terracotta transition-colors duration-300 font-medium"
            >
              Our Apps
            </a>
            <a
              href="#about"
              className="text-off-white/80 hover:text-terracotta transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-off-white/80 hover:text-terracotta transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-off-white/60 text-sm">
              © {currentYear} Bandit Innovations LLC
            </p>
            <p className="text-off-white/40 text-xs mt-1">
              Built with ❤️ and purpose
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-off-white/10 text-center">
          <p className="text-off-white/50 text-sm italic">
            "Every great innovation begins with curiosity and a wagging tail."
          </p>
        </div>
      </div>
    </footer>
  );
}

