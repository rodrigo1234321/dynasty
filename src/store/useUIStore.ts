'use client';

import { create } from 'zustand';

interface UIState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isNewsletterOpen: boolean;
  quickViewSlug: string | null;
  toggleCart: () => void;
  toggleMobileMenu: () => void;
  toggleNewsletter: () => void;
  setQuickViewSlug: (slug: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  isNewsletterOpen: false,
  quickViewSlug: null,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  toggleNewsletter: () => set((state) => ({ isNewsletterOpen: !state.isNewsletterOpen })),
  setQuickViewSlug: (slug) => set({ quickViewSlug: slug }),
}));
