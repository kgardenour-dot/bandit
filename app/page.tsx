'use client';

import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import About from '@/components/About';
import FutureProjects from '@/components/FutureProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AppShowcase />
      <About />
      <FutureProjects />
      <Contact />
      <Footer />
    </main>
  );
}
