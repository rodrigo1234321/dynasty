'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useUIStore } from '@/store/useUIStore';
import { useUserStore } from '@/store/useUserStore';
import { useCartStore } from '@/store/useCartStore';
import { products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export function WishlistDrawer() {
  const { isWishlistOpen, toggleWishlistDrawer, toggleCart } = useUIStore();
  const { wishlist, toggleWishlist } = useUserStore();
  const addItem = useCartStore((state) => state.addItem);

  const favoritedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleAddToCart = (product: typeof products[0]) => {
    const variant = product.variants[0] || { size: 'U', stock: 10 };
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0] || '',
      quantity: 1,
      size: variant.size,
      maxStock: variant.stock,
    });
    toggleWishlistDrawer();
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleWishlistDrawer}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-surface-1 flex flex-col shadow-2xl border-l border-border-subtle"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border-subtle bg-surface-1">
              <h2 className="font-display text-lg tracking-wider text-white flex items-center gap-2">
                <Heart className="w-5 h-5 fill-primary text-primary" />
                MIS FAVORITOS <span className="text-text-muted text-sm font-mono">({favoritedProducts.length})</span>
              </h2>
              <button
                onClick={toggleWishlistDrawer}
                className="p-2 text-text-secondary hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {favoritedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center text-text-muted mb-2">
                    <Heart className="w-8 h-8" />
                  </div>
                  <p className="text-text-primary font-medium">No tenés productos guardados</p>
                  <p className="text-xs text-text-muted font-mono max-w-xs">
                    Tocá el ícono del corazón en cualquier producto para guardarlo en tus favoritos.
                  </p>
                  <Link
                    href="/productos"
                    onClick={toggleWishlistDrawer}
                    className="text-sm font-medium border border-border-subtle px-6 py-3 hover:bg-surface-2 transition-colors uppercase tracking-wider text-text-primary mt-2"
                  >
                    VER CATÁLOGO
                  </Link>
                </div>
              ) : (
                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {favoritedProducts.map((product) => (
                    <motion.li
                      key={product.id}
                      className="flex gap-4 p-3 bg-surface-2/50 border border-border-subtle hover:border-border-hover transition-colors"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 },
                      }}
                      layout
                    >
                      <Link
                        href={`/productos/${product.slug}`}
                        onClick={toggleWishlistDrawer}
                        className="relative w-20 h-24 bg-surface-2 overflow-hidden flex-shrink-0 flex items-center justify-center text-text-muted font-mono text-xs"
                      >
                        {product.images[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            unoptimized={true}
                          />
                        ) : (
                          'DYG'
                        )}
                      </Link>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <Link
                              href={`/productos/${product.slug}`}
                              onClick={toggleWishlistDrawer}
                              className="font-medium text-sm text-white line-clamp-2 hover:text-primary transition-colors"
                            >
                              {product.name}
                            </Link>
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className="text-text-muted hover:text-primary transition-colors p-1"
                              title="Quitar de favoritos"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs font-mono text-primary font-semibold mt-1">
                            {formatPrice(product.price)}
                          </p>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full mt-3 py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/40 transition-colors text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Añadir al carrito
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* Footer */}
            {favoritedProducts.length > 0 && (
              <div className="border-t border-border-subtle p-4 md:p-6 bg-surface-2/30">
                <Link
                  href="/productos"
                  onClick={toggleWishlistDrawer}
                  className="block w-full text-center text-xs font-mono border border-border-subtle py-3 hover:bg-surface-2 text-text-secondary hover:text-white transition-colors uppercase tracking-wider"
                >
                  SEGUIR EXPLORANDO
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
