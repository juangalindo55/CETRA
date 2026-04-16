import type { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/mdx';
import { getAbsoluteUrl } from '@/lib/site';

const staticRoutes = [
  '/',
  '/servicios',
  '/especialistas',
  '/contacto',
  '/investigacion',
  '/privacidad',
  '/terminos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getAllServices().filter(
    (service): service is NonNullable<ReturnType<typeof getAllServices>[number]> =>
      Boolean(service),
  );

  const staticEntries = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as
      | 'weekly'
      | 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: getAbsoluteUrl(`/servicios/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...serviceEntries];
}
