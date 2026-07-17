import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/produk/${product.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/produk`, lastModified: new Date() },
    ...productRoutes,
  ];
}
