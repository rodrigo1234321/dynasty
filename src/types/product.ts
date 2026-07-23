export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductVariant {
  size: Size;
  inStock: boolean;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: 'hoodies' | 'tees' | 'accessories' | 'pants';
  images: string[];
  variants: ProductVariant[];
  badge?: 'new-drop' | 'limited' | 'sold-out' | 'restock' | 'exclusive';
  featured?: boolean;
  createdAt: string;
}

export type Category = Product['category'];
