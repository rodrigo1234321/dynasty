'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';

export function CartDrawer() {
  const { isCartOpen, toggleCart } = useUIStore();
  const { items, removeItem, updateQuantity, totalPrice, itemCount } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
          
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-surface-1 flex flex-col shadow-2xl border-l border-border-subtle"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border-subtle bg-surface-1">
              <h2 className="font-display text-lg tracking-wider text-white">
                TU CARRITO <span className="text-text-muted text-sm ml-2">({itemCount()})</span>
              </h2>
              <button onClick={toggleCart} className="p-2 text-text-secondary hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-text-secondary font-medium">Tu carrito está vacío</p>
                  <button 
                    onClick={toggleCart}
                    className="text-sm font-medium border border-border-subtle px-6 py-3 hover:bg-surface-2 transition-colors uppercase tracking-wider text-text-primary"
                  >
                    EXPLORAR PRODUCTOS
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.productId}-${item.size}`} className="flex gap-4">
                      <div className="relative w-20 h-24 bg-surface-2 overflow-hidden flex-shrink-0 flex items-center justify-center text-text-muted font-mono text-xs">
                        {item.image ? (
                          <Image 
                            src={item.image} 
                            alt={item.name} 
                            fill 
                            className="object-cover"
                            unoptimized={true}
                          />
                        ) : (
                          'DYG'
                        )}
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-medium text-sm text-white line-clamp-2">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.productId, item.size)}
                            className="text-text-muted hover:text-primary transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <p className="text-text-secondary text-xs mt-1">Talle: {item.size}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-border-subtle">
                            <button 
                              onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                              className="p-1 hover:bg-surface-2 text-text-secondary hover:text-white transition-colors disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-mono">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                              className="p-1 hover:bg-surface-2 text-text-secondary hover:text-white transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <span className="font-mono text-sm">{formatPrice(item.price)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border-subtle p-4 md:p-6 bg-surface-2/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-text-secondary font-medium">Subtotal</span>
                  <span className="text-lg font-mono text-white">{formatPrice(totalPrice())}</span>
                </div>
                
                <Link href="/checkout" onClick={toggleCart} className="block w-full">
                  <button className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-4 transition-colors uppercase tracking-widest text-sm mb-3">
                    IR AL CHECKOUT
                  </button>
                </Link>
                
                <p className="text-center text-xs text-text-muted font-mono">
                  3 cuotas sin interés de <span className="font-mono text-text-secondary">{formatPrice(totalPrice() / 3)}</span>
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
