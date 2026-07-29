"use client";

import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface CategoryChipsProps {
  activeCategory: string;
}

export function CategoryChips({ activeCategory }: CategoryChipsProps) {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar touch-pan-x snap-x snap-mandatory">
      <div className="flex items-center justify-center gap-3 py-4 min-w-max px-4 md:px-0">
        {CATEGORIES.map((category) => {
          const href = category.slug === 'all' ? '/productos' : `/productos?category=${category.slug}`;
          const isActive = activeCategory === category.slug;
          return (
            <Link
              key={category.slug}
              href={href}
              scroll={false}
              className={cn(
                "px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-full snap-start whitespace-nowrap border border-transparent",
                isActive
                  ? "bg-primary text-white border-primary glow-red-sm"
                  : "bg-surface-2 text-text-secondary border-border-subtle hover:bg-surface-3 hover:text-text-primary hover:border-border-hover"
              )}
            >
              {category.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}