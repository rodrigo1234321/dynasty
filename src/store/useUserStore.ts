'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  wishlist: string[];
  recentlyViewed: string[];
  toggleWishlist: (productId: string) => void;
  addToRecentlyViewed: (productSlug: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      recentlyViewed: [],
      toggleWishlist: (productId: string) => {
        set((state) => {
          const exists = state.wishlist.includes(productId);
          if (exists) {
            return { wishlist: state.wishlist.filter(id => id !== productId) };
          }
          return { wishlist: [...state.wishlist, productId] };
        });
      },
      addToRecentlyViewed: (productSlug: string) => {
        set((state) => {
          const filtered = state.recentlyViewed.filter(slug => slug !== productSlug);
          return {
            recentlyViewed: [productSlug, ...filtered].slice(0, 10),
          };
        });
      },
      isInWishlist: (productId: string) => {
        return get().wishlist.includes(productId);
      },
    }),
    {
      name: 'dynasty-user',
    }
  )
);