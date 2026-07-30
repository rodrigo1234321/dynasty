'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import { formatPrice, formatInstallments } from '@/lib/utils';
import { ProductGallery } from '@/components/shop/ProductGallery';
import { SizeSelector } from '@/components/shop/SizeSelector';
import { ShippingCalculator } from '@/components/shop/ShippingCalculator';
import { RelatedProducts } from '@/components/shop/RelatedProducts';
import { SizeGuideModal } from '@/components/shop/SizeGuideModal';
import { PageTransition } from '@/components/motion/PageTransition';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';
import { useUserStore } from '@/store/useUserStore';
import { Size } from '@/types/product';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);

  // Products with a single "U" (unique) variant aren't real size choices —
  // pre-select it so the customer doesn't have to tap a redundant option.
  const [selectedSize, setSelectedSize] = useState<Size | null>(
    product && product.variants.length === 1 ? product.variants[0].size : null
  );
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const { addItem } = useCartStore();
  const { toggleCart } = useUIStore();
  const { addToRecentlyViewed } = useUserStore();

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product.slug);
    }
  }, [product, addToRecentlyViewed]);

  if (!product) {
    notFound();
  }

  const isAllSoldOut = product.variants.every((v) => !v.inStock);
  const hasRealSizes = product.variants.length > 1 || product.variants[0]?.size !== 'U';

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      image: product.images[0] || '',
    });
    toggleCart();
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <PageTransition>
      <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="lg:sticky lg:top-24 h-fit">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              {product.badge && (
                <Badge status={product.badge} className="mb-4" />
              )}
              
              <h1 className="text-2xl md:text-3xl font-display uppercase tracking-wider mb-4">
                {product.name}
              </h1>
              
              <div className="mb-6">
                <p className="text-xl font-mono">{formatPrice(product.price)}</p>
                <p className="text-sm text-primary-glow mt-1">
                  {formatInstallments(product.price)}
                </p>
              </div>

              <div className="prose prose-invert prose-sm text-text-secondary">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="h-px bg-border-subtle my-8" />

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono uppercase text-text-secondary">Talle</span>
                {hasRealSizes && (
                  <button 
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-xs font-mono text-text-muted hover:text-white underline underline-offset-4"
                  >
                    GUÍA DE TALLES
                  </button>
                )}
              </div>
              <SizeSelector 
                variants={product.variants} 
                selectedSize={selectedSize} 
                onSizeChange={setSelectedSize} 
              />
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              fullWidth 
              disabled={!selectedSize || isAllSoldOut}
              onClick={handleAddToCart}
              className="mb-8"
            >
              {isAllSoldOut ? 'AGOTADO' : !selectedSize ? 'SELECCIONAR TALLE' : 'AGREGAR AL CARRITO'}
            </Button>

            <ShippingCalculator />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}

        {hasRealSizes && (
          <SizeGuideModal 
            isOpen={isSizeGuideOpen} 
            onClose={() => setIsSizeGuideOpen(false)} 
          />
        )}
      </div>
    </PageTransition>
  );
}
