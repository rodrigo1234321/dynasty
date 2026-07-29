'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export function MobileMenu() {
  const { isMobileMenuOpen, toggleMobileMenu } = useUIStore();

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
            
            {/* Links */}
            <div className="flex-1 overflow-y-auto py-4">
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