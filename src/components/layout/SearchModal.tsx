'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useUIStore } from '@/store/useUIStore';
import { products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export function SearchModal() {
  const { isSearchOpen, toggleSearch } = useUIStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        toggleSearch();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isSearchOpen, toggleSearch]);

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter((p) => {
        const q = query.toLowerCase().trim();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      });

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSearch}
          />

          {/* Search Container */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="bg-surface-1 border border-border-subtle shadow-2xl rounded-xl overflow-hidden">
              {/* Search Bar Input */}
              <div className="p-4 md:p-6 border-b border-border-subtle flex items-center gap-4">
                <Search className="w-6 h-6 text-primary flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="BUSCAR PRODUCTOS, CATEGORÍAS..."
                  className="w-full bg-transparent text-white font-mono placeholder:text-text-muted outline-none text-base md:text-lg uppercase"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 text-text-muted hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  onClick={toggleSearch}
                  className="p-2 text-text-secondary hover:text-white transition-colors border-l border-border-subtle pl-4"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Results Container */}
              <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6">
                {query.trim() === '' ? (
                  <div className="py-6 text-center text-text-muted">
                    <p className="text-sm font-mono uppercase tracking-wider mb-3">
                      Sugerencias de búsqueda
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['audio', 'jbl', 'magsafe', 'gaming', 'cinema', 'drones'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1 bg-surface-2 border border-border-subtle hover:border-primary text-xs font-mono uppercase text-text-secondary hover:text-white transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="py-12 text-center text-text-muted">
                    <p className="text-base font-medium text-white mb-1">
                      No se encontraron resultados para &quot;{query}&quot;
                    </p>
                    <p className="text-xs font-mono">
                      Probá buscar por otra palabra clave como &quot;audio&quot;, &quot;jbl&quot;, &quot;cargador&quot; o &quot;gaming&quot;.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono text-text-muted mb-2">
                      <span>RESULTADOS ({filteredProducts.length})</span>
                    </div>
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/productos/${product.slug}`}
                        onClick={toggleSearch}
                        className="flex items-center gap-4 p-3 bg-surface-2/40 hover:bg-surface-2 border border-border-subtle hover:border-border-hover transition-all group"
                      >
                        <div className="relative w-14 h-16 bg-surface-2 overflow-hidden flex-shrink-0 flex items-center justify-center">
                          {product.images[0] ? (
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                              unoptimized={true}
                            />
                          ) : (
                            <span className="text-[10px] font-mono text-text-muted">DYG</span>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white truncate group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-text-muted truncate font-mono mt-0.5">
                            División: {product.category.toUpperCase()}
                          </p>
                          <span className="text-sm font-mono text-primary font-semibold mt-1 block">
                            {formatPrice(product.price)}
                          </span>
                        </div>

                        <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
