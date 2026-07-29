import { CartItem } from './cart';

export type ShippingMethod = 'delivery' | 'pickup';
export type PaymentMethod = 'mercadopago' | 'transfer' | 'cash';

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  shippingAddress?: ShippingAddress;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}