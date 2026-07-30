import type { MetadataRoute } from 'next';
import { products } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH 
    ? `https://rodrigo1234321.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : 'https://rodrigo1234321.github.io/dynasty';

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/productos/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    '',
    '/productos',
    '/identidad',
    '/devoluciones',
    '/envios',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
