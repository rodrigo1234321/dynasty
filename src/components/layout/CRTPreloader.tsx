'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CRTPreloaderProps {
  onComplete?: () => void;
}

const BOOT_TEXTS = [
  'INITIALIZING DYNASTY SYSTEM...',
  'LOADING ARCHIVE COLLECTION...',
  'BUILT DIFFERENT'
];

export function CRTPreloader({ onComplete }: CRTPreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem('dynasty_visited');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasVisited || prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const textInterval = setInterval(() => {
      setTextIndex(prev => Math.min(prev + 1, BOOT_TEXTS.length - 1));
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    const timeout = setTimeout(() => {
      sessionStorage.setItem('dynasty_visited', 'true');
      setIsVisible(false);
      onComplete?.();
    }, 2800);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black overflow-hidden pointer-events-none"
          initial={{ scaleY: 0.005, opacity: 1 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0.005, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* CRT Scanlines Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-10 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 3px, #000 4px)' }}
          />

          <motion.div
            className="relative z-20 flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-black text-white tracking-widest" style={{ textShadow: '0 0 20px #FF1A1A, 0 0 10px #FF1A1A' }}>
              DYG
            </h1>
            
            <div className="flex flex-col items-center space-y-4 w-64 md:w-80">
              <p className="font-mono text-xs text-white/80 h-4">
                {BOOT_TEXTS[textIndex]}
              </p>
              
              <div className="w-full h-1 bg-white/20 rounded overflow-hidden">
                <motion.div 
                  className="h-full bg-white shadow-[0_0_8px_#fff]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
