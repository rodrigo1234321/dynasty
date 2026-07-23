"use client";

import { Size, ProductVariant } from '@/types/product';
import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  variants: ProductVariant[];
  selectedSize: Size | null;
  onSizeChange: (size: Size) => void;
}

export function SizeSelector({ variants, selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {variants.map((variant) => {
        const isSelected = selectedSize === variant.size;
        const isAvailable = variant.inStock;

        return (
          <button
            key={variant.size}
            onClick={() => isAvailable && onSizeChange(variant.size)}
            disabled={!isAvailable}
            className={cn(
              "min-w-[48px] h-10 px-3 flex items-center justify-center text-sm font-mono uppercase transition-all duration-200 border",
              isSelected && isAvailable
                ? "bg-primary text-white border-primary"
                : "",
              !isSelected && isAvailable
                ? "bg-surface-2 text-text-primary border-border-subtle hover:border-border-hover hover:bg-surface-3"
                : "",
              !isAvailable
                ? "bg-surface-2 text-text-muted border-border-subtle line-through cursor-not-allowed opacity-40"
                : ""
            )}
          >
            {variant.size}
          </button>
        );
      })}
    </div>
  );
}
