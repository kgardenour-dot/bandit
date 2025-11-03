'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface App {
  name: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  logo: string;
  link?: string;
}

const apps: App[] = [
  {
    name: 'PACE',
    tagline: 'Find your rhythm on the trail',
    description: 'A wellness companion for trail runners and hikers. Track your pace, discover new routes, and connect with nature mindfully.',
    color: 'bg-gradient-to-br from-pace-blue to-pace-green',
    accentColor: 'border-pace-blue',
    logo: '/logos/pace-logo-biweb.png',
    link: '#'
  },
  {
    name: 'Echotag',
    tagline: 'Memories that echo',
    description: 'Create beautiful, reflective memory journals. Capture moments, emotions, and stories that matter most to you.',
    color: 'bg-gradient-to-br from-echotag-warm to-chestnut',
    accentColor: 'border-echotag-warm',
    logo: '/logos/echotag-logo-biweb.png',
    link: '#'
  },
  {
    name: 'Poofling',
    tagline: 'Splatter, sploosh, and save Dungtopia!',
    description: 'Poofling is a hilarious physics game where you catapult poo at the villains of cleanliness. Join Splatticus the dung beetle and the Resistance of Reek to splatter, sploosh, and save the messy world of Dungtopia!',
    color: 'bg-gradient-to-br from-poofling-yellow to-poofling-orange',
    accentColor: 'border-poofling-orange',
    logo: '/logos/poofling-logo-biweb.png',
    link: '#'
  }
];

function AppCard({ app, index }: { app: App; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className={`relative overflow-hidden rounded-3xl ${app.color} p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 ${app.accentColor} border-opacity-0 hover:border-opacity-100`}>
        {/* Logo */}
        <motion.div
          className="mb-6 inline-block"
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={app.logo}
            alt={`${app.name} logo`}
            width={200}
            height={80}
            className="h-16 md:h-20 w-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">
          {app.name}
        </h3>
        <p className="text-xl text-white/90 font-medium mb-4 italic">
          {app.tagline}
        </p>
        <p className="text-white/80 text-lg leading-relaxed mb-6">
          {app.description}
        </p>

        {/* Button */}
        <motion.a
          href={app.link}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </motion.a>

        {/* Decorative element */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>
    </motion.div>
  );
}

export default function AppShowcase() {
  return (
    <section id="apps" className="py-20 md:py-32 bg-off-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-taupe/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate mb-4 tracking-tight">
            Our Apps
          </h2>
          <p className="text-xl text-taupe max-w-2xl mx-auto">
            A family of creative apps, each with its own personality and purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

