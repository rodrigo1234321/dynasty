import { Size } from './product';

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  size: Size;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: Size) => void;
  updateQuantity: (productId: string, size: Size, quantity: number) => void;
  clearCart: () => void;
  itemCount: () => number;
  totalPrice: () => number;
}
