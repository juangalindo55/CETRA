import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryNav from '@/components/blog/CategoryNav';
import PostCard from '@/components/blog/PostCard';
import { BLOG_CATEGORIES, getCategory, getPostsByCategory } from '@/lib/blog';
import { SITE_NAME, getAbsoluteUrl, getBreadcrumbSchema } from '@/lib/site';

/** Solo las categorías conocidas existen: cualquier otra devuelve un 404 real. */
export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);

  if (!category) {
    return {};
  }

  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: getAbsoluteUrl(`/blog/categoria/${category.slug}`) },
    openGraph: {
      title: `${category.label} | ${SITE_NAME}`,
      description: category.description,
      url: `/blog/categoria/${category.slug}`,
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCategory(categoria);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: category.label },
  ]);

  return (
    <div className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-soft">
            Blog clínico
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            {category.label}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <CategoryNav active={category.slug} />

        {posts.length === 0 ? (
          <p className="mt-16 border-t border-ink pt-10 text-lg leading-8 text-gray-600">
            Todavía no hay artículos publicados en esta categoría.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} priority={index === 0} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
