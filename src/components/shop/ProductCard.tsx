"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn, formatPrice, formatInstallments } from '@/lib/utils';
import { Product, Size } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';
import { useUserStore } from '@/store/useUserStore';
import { Badge } from '@/components/ui/Badge';

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useUIStore((state) => state.toggleCart);
  const { toggleWishlist, isInWishlist } = useUserStore();
  const isWishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent, size: Size) => {
    e.preventDefault();
    e.stopPropagation();
    
    const variant = product.variants.find(v => v.size === size);
    if (!variant || !variant.inStock) return;
    
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0] || '',
      quantity: 1,
      size,
      maxStock: variant.stock,
    });
    toggleCart();
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const currentImage = isHovered && product.images[1] ? product.images[1] : product.images[0];
  const comparePrice = product.compareAtPrice;

  return (
    <Link 
      href={`/productos/${product.slug}`}
      className="group block relative bg-surface-1 border border-border-subtle hover:border-border-hover transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
        {currentImage ? (
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-transform duration-300",
              isHovered ? "scale-[1.03]" : "scale-100"
            )}
            unoptimized={true}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted text-sm text-center px-4">
            {product.name}
          </div>
        )}

        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge status={product.badge} />
          </div>
        )}

        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 z-10 p-2 bg-surface-1/50 backdrop-blur-sm rounded-full hover:bg-surface-1 transition-colors"
        >
          <Heart
            size={18}
            className={cn(
              "transition-colors",
              isWishlisted ? "fill-primary text-primary" : "text-text-primary"
            )}
          />
        </button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-md flex flex-col gap-2 z-20"
            >
              <span className="text-xs font-mono text-center text-text-secondary uppercase tracking-wider mb-1">
                SELECCIONÁ TU TALLE
              </span>
              <div className="flex justify-center gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.size}
                    onClick={(e) => handleQuickAdd(e, variant.size)}
                    disabled={!variant.inStock}
                    className={cn(
                      "w-10 h-10 flex items-center justify-center text-xs font-mono transition-colors border",
                      variant.inStock
                        ? "bg-surface-1 text-text-primary border-border-subtle hover:bg-primary hover:text-white hover:border-primary"
                        : "bg-surface-2/50 text-text-muted border-transparent opacity-40 cursor-not-allowed line-through"
                    )}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-sm font-medium uppercase tracking-wide text-text-primary truncate">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mt-1">
          {comparePrice && (
            <span className="text-xs text-text-muted line-through font-mono">
              {formatPrice(comparePrice)}
            </span>
          )}
          <span className="text-sm font-mono text-primary">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <p className="text-[11px] text-text-muted font-mono mt-1">
          {formatInstallments(product.price)}
        </p>
      </div>
    </Link>
  );
}