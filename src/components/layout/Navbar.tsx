'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';
import { useUserStore } from '@/store/useUserStore';
import { useHydration } from '@/hooks/useHydration';

export function Navbar() {
  const isHydrated = useHydration();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const itemCount = useCartStore((state) => state.itemCount());
  const wishlistCount = useUserStore((state) => state.wishlist.length);
  const { toggleCart, toggleMobileMenu, toggleSearch, toggleWishlistDrawer } = useUIStore();

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
          <button onClick={toggleMobileMenu} className="p-1 hover:text-primary transition-colors text-white" aria-label="Menú navegación">
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
          <button 
            onClick={toggleSearch} 
            className="p-1 hover:text-primary transition-colors text-white flex items-center justify-center"
            title="Buscar productos"
            aria-label="Buscar productos"
          >
            <Search className="w-5 h-5" />
          </button>

          <button 
            onClick={toggleWishlistDrawer} 
            className="p-1 hover:text-primary transition-colors text-white relative flex items-center justify-center"
            title="Ver favoritos"
            aria-label="Ver favoritos"
          >
            <Heart className="w-5 h-5" />
            <AnimatePresence>
              {isHydrated && wishlistCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={wishlistCount}
                  className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button 
            onClick={toggleCart} 
            className="p-1 hover:text-primary transition-colors text-white relative flex items-center justify-center"
            title="Ver carrito"
            aria-label="Ver carrito"
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {isHydrated && itemCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={itemCount}
                  className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.header>
  );
}