'use client';

import { useState } from 'react';
import { CategoryChips } from '@/components/shop/CategoryChips';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { PageTransition } from '@/components/motion/PageTransition';
import { products, getProductsByCategory } from '@/lib/products';

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : getProductsByCategory(activeCategory);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        <header className="mb-12 md:mb-16 text-center">
          <h1 className="font-display text-4xl md:text-6xl tracking-wider uppercase mb-8">
            PRODUCTS
          </h1>
          
          <CategoryChips 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
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
    </PageTransition>
  );
}
