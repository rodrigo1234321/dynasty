'use client';

import { create } from 'zustand';

interface UIState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isNewsletterOpen: boolean;
  isSearchOpen: boolean;
  isWishlistOpen: boolean;
  quickViewSlug: string | null;
  toggleCart: () => void;
  toggleMobileMenu: () => void;
  toggleNewsletter: () => void;
  toggleSearch: () => void;
  toggleWishlistDrawer: () => void;
  setQuickViewSlug: (slug: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  isNewsletterOpen: false,
  isSearchOpen: false,
  isWishlistOpen: false,
  quickViewSlug: null,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  toggleNewsletter: () => set((state) => ({ isNewsletterOpen: !state.isNewsletterOpen })),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  toggleWishlistDrawer: () => set((state) => ({ isWishlistOpen: !state.isWishlistOpen })),
  setQuickViewSlug: (slug) => set({ quickViewSlug: slug }),
}));