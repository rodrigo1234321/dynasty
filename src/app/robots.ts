import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH 
    ? `https://rodrigo1234321.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : 'https://rodrigo1234321.github.io/dynasty';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
