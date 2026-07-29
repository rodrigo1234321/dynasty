"use client";

import { useRef } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

export function RelatedProducts({ products, title = 'TAMBIÉN TE PUEDE INTERESAR' }: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!products?.length) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl md:text-2xl uppercase tracking-wider text-text-primary">
          {title}
        </h2>
        
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 flex items-center justify-center border border-border-subtle hover:border-primary hover:text-primary transition-colors bg-surface-1 text-text-secondary"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 flex items-center justify-center border border-border-subtle hover:border-primary hover:text-primary transition-colors bg-surface-1 text-text-secondary"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {products.map(product => (
          <div key={product.id} className="min-w-[240px] w-[240px] md:min-w-[280px] md:w-[280px] snap-start shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}