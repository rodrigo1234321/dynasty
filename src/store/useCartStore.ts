'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState } from '@/types/cart';
import { Size } from '@/types/product';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem: CartItem) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.productId === newItem.productId && item.size === newItem.size
          );
          
          if (existingItemIndex > -1) {
            const currentItem = state.items[existingItemIndex];

            // Check stock limit if maxStock is provided
            const nextQuantity = currentItem.quantity + newItem.quantity;
            const clampedQuantity =
              currentItem.maxStock !== undefined && nextQuantity > currentItem.maxStock
                ? currentItem.maxStock
                : nextQuantity;

            const newItems = [...state.items];
            newItems[existingItemIndex] = { ...currentItem, quantity: clampedQuantity };

            return { items: newItems };
          }
          
          // Ensure we don't add more than maxStock initially
          if (newItem.maxStock !== undefined && newItem.quantity > newItem.maxStock) {
            newItem.quantity = newItem.maxStock;
          }
          return { items: [...state.items, newItem] };
        });
      },
      removeItem: (productId: string, size: Size) => {
        set((state) => ({
          items: state.items.filter((item) => !(item.productId === productId && item.size === size)),
        }));
      },
      updateQuantity: (productId: string, size: Size, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.productId === productId && item.size === size) {
              let nextQuantity = Math.max(1, quantity);
              if (item.maxStock !== undefined && nextQuantity > item.maxStock) {
                nextQuantity = item.maxStock;
              }
              return { ...item, quantity: nextQuantity };
            }
            return item;
          }),
        }));
      },
      clearCart: () => set({ items: [] }),
      itemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
      totalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'dynasty-cart',
    }
  )
);