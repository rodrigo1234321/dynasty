export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'U';

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
  category: 'audio' | 'energia' | 'gaming' | 'sistemas' | 'cinema' | 'drones' | string;
  images: string[];
  variants: ProductVariant[];
  badge?: 'new-drop' | 'limited' | 'sold-out' | 'restock' | 'exclusive';
  featured?: boolean;
  createdAt: string;
}

export type Category = Product['category'];