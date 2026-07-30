export const BRAND = {
  name: 'DYNASTY',
  slogan: 'BUILT DIFFERENT.',
  monogram: 'DYG',
  description: 'Tech & gadgets con criterio retro-táctico. Mar del Plata, Argentina.',
  address: 'Mar del Plata, Argentina',
  postalCode: '7600',
  phone: '+54 9 223 675-1309',
  email: 'dynasty.nett@gmail.com',
  whatsapp: '5492236751309',
  instagram: 'https://instagram.com/dynasty.arg',
  url: 'https://dynasty.ar',
} as const;

export const CATEGORIES = [
  { slug: 'all', label: 'TODAS LAS DIVISIONES' },
  { slug: 'audio', label: 'DIVISION_AUDIO' },
  { slug: 'energia', label: 'DIVISION_ENERGÍA' },
  { slug: 'gaming', label: 'DIVISION_GAMING' },
  { slug: 'sistemas', label: 'DIVISION_SISTEMAS' },
  { slug: 'cinema', label: 'DIVISION_CINEMA' },
  { slug: 'drones', label: 'DIVISION_DRONES' },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/productos', label: 'CATÁLOGO' },
  { href: '/productos?category=audio', label: 'AUDIO' },
  { href: '/productos?category=energia', label: 'ENERGÍA' },
  { href: '/productos?category=gaming', label: 'GAMING' },
  { href: '/productos?category=sistemas', label: 'SISTEMAS' },
  { href: '/identidad', label: 'MANIFIESTO' },
] as const;

export const FREE_SHIPPING_THRESHOLD = 120000; // $120,000 ARS
export const TRANSFER_DISCOUNT = 0.15; // 15% off