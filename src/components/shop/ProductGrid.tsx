"use client";

import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { StaggerContainer, staggerItemVariants } from '@/components/motion/StaggerContainer';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <StaggerContainer
      className={cn(
        "grid grid-cols-2 gap-3 md:gap-4",
        columns === 3 && "md:grid-cols-3",
        columns === 4 && "md:grid-cols-3 lg:grid-cols-4"
      )}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={staggerItemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </StaggerContainer>
  );
}