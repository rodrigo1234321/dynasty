'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, ChevronRight, Search, Heart } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useUserStore } from '@/store/useUserStore';
import { useHydration } from '@/hooks/useHydration';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export function MobileMenu() {
  const isHydrated = useHydration();
  const { isMobileMenuOpen, toggleMobileMenu, toggleSearch, toggleWishlistDrawer } = useUIStore();
  const wishlistCount = useUserStore((state) => state.wishlist.length);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen, toggleMobileMenu]);

  const handleOpenSearch = () => {
    toggleMobileMenu();
    toggleSearch();
  };

  const handleOpenWishlist = () => {
    toggleMobileMenu();
    toggleWishlistDrawer();
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          />
          
          {/* Drawer */}
          <motion.div
            className="fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-sm bg-surface-1 flex flex-col shadow-xl border-r border-border-subtle"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border-subtle">
              <span className="font-display text-lg tracking-[0.2em] text-white">
                DYNASTY
              </span>
              <button onClick={toggleMobileMenu} className="p-2 text-text-secondary hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="p-4 border-b border-border-subtle grid grid-cols-2 gap-2 bg-surface-2/30">
              <button
                onClick={handleOpenSearch}
                className="flex items-center justify-center gap-2 p-3 bg-surface-2 border border-border-subtle text-xs font-mono text-white hover:border-primary transition-colors uppercase"
              >
                <Search className="w-4 h-4 text-primary" />
                Buscar
              </button>
              <button
                onClick={handleOpenWishlist}
                className="flex items-center justify-center gap-2 p-3 bg-surface-2 border border-border-subtle text-xs font-mono text-white hover:border-primary transition-colors uppercase relative"
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
                Favoritos
                {isHydrated && wishlistCount > 0 && (
                  <span className="ml-1 bg-primary text-white text-[10px] px-1.5 py-0.2 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-2">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="flex items-center justify-between px-6 py-4 text-text-secondary hover:text-white hover:bg-surface-2 transition-colors uppercase tracking-wider text-sm font-medium"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-border-subtle mt-auto bg-surface-2/50">
              <div className="flex flex-col gap-4 text-sm text-text-muted">
                <p>{BRAND.address}</p>
                <div className="flex gap-4">
                  <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}