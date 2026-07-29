'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function HeroBanner() {
  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-0">
      <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-transparent to-surface-0/20 pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
      >
        <motion.p 
          variants={itemVariants}
          className="font-mono text-xs tracking-[0.3em] text-text-secondary uppercase mb-6"
        >
          TECNOLOGÍA — MAR DEL PLATA
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-wider mb-6"
        >
          BUILT DIFFERENT
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-text-secondary max-w-md mx-auto mb-10 text-lg"
        >
          Tecnología y gadgets diseñados para quienes no siguen tendencias. Elevamos tu setup al próximo nivel.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link href="/productos">
            <Button variant="cta" size="lg">
              EXPLORAR COLECCIÓN
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-text-primary transition-colors flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}