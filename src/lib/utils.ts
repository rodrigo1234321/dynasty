import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatInstallments(price: number, installments: number = 3): string {
  const installmentPrice = Math.ceil(price / installments);
  return `${installments}x ${formatPrice(installmentPrice)} sin interés`;
}

export function getImagePath(src: string): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (basePath && src.startsWith('/') && !src.startsWith(basePath)) {
    return `${basePath}${src}`;
  }
  return src;
}