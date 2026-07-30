'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CategoryChips } from '@/components/shop/CategoryChips';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { PageTransition } from '@/components/motion/PageTransition';
import { Skeleton } from '@/components/ui/Skeleton';
import { products, getProductsByCategory } from '@/lib/products';
import { CATEGORIES } from '@/lib/constants';

function CatalogGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton.Card key={i} />
      ))}
    </div>
  );
}

function CatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = (() => {
    const fromSearchParams = searchParams.get('category');
    if (fromSearchParams && CATEGORIES.some((c) => c.slug === fromSearchParams)) {
      return fromSearchParams;
    }
    if (typeof window !== 'undefined') {
      const fromURL = new URLSearchParams(window.location.search).get('category');
      if (fromURL && CATEGORIES.some((c) => c.slug === fromURL)) {
        return fromURL;
      }
    }
    return 'all';
  })();

  const filteredProducts =
    activeCategory === 'all' ? products : getProductsByCategory(activeCategory);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    const query = params.toString();
    router.replace(query ? `/productos?${query}` : '/productos', { scroll: false });
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="mb-12 md:mb-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-wider uppercase mb-8">
          PRODUCTS
        </h1>

        <CategoryChips
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </header>

      <div className="mb-6 flex justify-between items-center text-sm font-mono text-text-muted">
        <span>{filteredProducts.length} PRODUCTOS</span>
      </div>

      <ProductGrid products={filteredProducts} />

      {filteredProducts.length === 0 && (
        <div className="text-center py-24 text-text-muted">
          No se encontraron productos en esta categoría.
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <PageTransition>
      <Suspense
        fallback={
          <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="mb-12 md:mb-16 text-center">
              <h1 className="font-display text-4xl md:text-6xl tracking-wider uppercase mb-8">
                PRODUCTS
              </h1>
            </div>
            <CatalogGridSkeleton />
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </PageTransition>
  );
}
