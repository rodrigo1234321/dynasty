'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Cookie } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dynasty-cookie-consent');
    if (!consent) {
      // Show banner after 1.5 seconds delay for clean UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('dynasty-cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('dynasty-cookie-consent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-lg z-50 p-4 md:p-6 bg-surface-1/95 backdrop-blur-md border border-border-subtle shadow-2xl rounded-xl"
          aria-label="Consentimiento de cookies"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-surface-2 rounded-lg text-primary flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-sm uppercase tracking-wider text-white">
                  PRIVACIDAD & COOKIES
                </h3>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>

              <p className="text-xs text-text-muted leading-relaxed font-body mb-4">
                Utilizamos cookies técnicas necesarias para mantener tu carrito de compras y tu lista de favoritos. Leé nuestra{' '}
                <Link href="/privacidad" className="text-primary hover:underline font-mono">
                  Política de Privacidad
                </Link>{' '}
                para más información sobre la protección de tus datos.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-mono uppercase tracking-wider transition-colors rounded-md"
                >
                  ACEPTAR TODAS
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="px-4 py-2 bg-surface-2 hover:bg-surface-2/80 text-text-secondary hover:text-white text-xs font-mono uppercase tracking-wider border border-border-subtle transition-colors rounded-md"
                >
                  SOLO NECESARIAS
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
