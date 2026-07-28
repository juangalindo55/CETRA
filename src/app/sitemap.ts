import type { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/mdx';
import { BLOG_CATEGORIES, getAllPosts } from '@/lib/blog';
import { getAbsoluteUrl } from '@/lib/site';

const staticRoutes = [
  '/',
  '/servicios',
  '/especialistas',
  '/contacto',
  '/instalaciones',
  '/investigacion',
  '/nuestra-historia',
  '/preguntas-frecuentes',
  '/blog',
  '/revision/quiz-elegibilidad',
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
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as
      | 'weekly'
      | 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: getAbsoluteUrl(`/servicios/${service.slug}`),
    lastModified: new Date(`${service.frontmatter.lastUpdated}T00:00:00Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const posts = getAllPosts();

  const postEntries = posts.map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.frontmatter.lastUpdated}T00:00:00Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Solo las categorías con artículos publicados: una página vacía en el
  // sitemap es una señal de baja calidad para el rastreador.
  const categoryEntries = BLOG_CATEGORIES.filter((category) =>
    posts.some((post) => post.frontmatter.category === category.slug),
  ).map((category) => ({
    url: getAbsoluteUrl(`/blog/categoria/${category.slug}`),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries, ...categoryEntries];
}
