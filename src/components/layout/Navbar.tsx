'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const itemCount = useCartStore((state) => state.itemCount());
  const { toggleCart, toggleMobileMenu } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 h-14 md:h-16 flex items-center transition-colors duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-border-subtle" : "bg-transparent border-transparent"
      )}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 w-full h-full grid grid-cols-3 items-center">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button onClick={toggleMobileMenu} className="p-1 hover:text-primary transition-colors text-white">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="font-display font-black text-xl hidden md:block text-white hover:text-primary transition-colors">
            DYG
          </Link>
        </div>

        {/* Center */}
        <div className="flex justify-center">
          <Link href="/" className="font-display text-lg tracking-[0.2em] text-white">
            DYNASTY
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-3 md:gap-5">
          <button className="p-1 hover:text-primary transition-colors text-white hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-1 hover:text-primary transition-colors text-white hidden sm:block">
            <Heart className="w-5 h-5" />
          </button>
          <button onClick={toggleCart} className="p-1 hover:text-primary transition-colors text-white relative">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
