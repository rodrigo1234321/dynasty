export const BRAND = {
  name: 'DYNASTY',
  slogan: 'BUILT DIFFERENT',
  monogram: 'DYG',
  description: 'Streetwear brand from Mar del Plata, Argentina. For those who refuse to conform.',
  address: 'Calle 39 y Edison, Mar del Plata, Buenos Aires, Argentina',
  postalCode: '7600',
  phone: '+54 223 500 0000',
  email: 'info@dynasty.ar',
  whatsapp: '5492235000000',
  instagram: 'https://instagram.com/dynasty.ar',
  url: 'https://dynasty.ar',
} as const;

export const CATEGORIES = [
  { slug: 'all', label: 'ALL PRODUCTS' },
  { slug: 'hoodies', label: 'HOODIES & SWEATSHIRTS' },
  { slug: 'tees', label: 'TEES' },
  { slug: 'pants', label: 'PANTS' },
  { slug: 'accessories', label: 'ACCESSORIES' },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/productos', label: 'ALL PRODUCTS' },
  { href: '/productos?category=hoodies', label: 'HOODIES & SWEATSHIRTS' },
  { href: '/productos?category=tees', label: 'TEES' },
  { href: '/productos?category=accessories', label: 'ACCESSORIES' },
  { href: '/identidad', label: 'OUR IDENTITY' },
] as const;

export const FREE_SHIPPING_THRESHOLD = 120000; // $120,000 ARS
export const TRANSFER_DISCOUNT = 0.15; // 15% off
