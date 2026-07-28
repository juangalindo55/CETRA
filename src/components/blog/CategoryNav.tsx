import Link from 'next/link';
import { BLOG_CATEGORIES, type BlogCategorySlug } from '@/lib/blog';

interface CategoryNavProps {
  /** Categoría activa; `null` en el índice general. */
  active?: BlogCategorySlug | null;
}

const baseChip =
  'inline-flex min-h-11 items-center rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-[160ms]';

/**
 * Enlaces reales a `/blog/categoria/[slug]` en vez de filtros de cliente:
 * cada categoría es una página indexable.
 */
export default function CategoryNav({ active = null }: CategoryNavProps) {
  return (
    <nav aria-label="Categorías del blog" className="flex flex-wrap gap-3">
      <Link
        href="/blog"
        aria-current={active === null ? 'page' : undefined}
        className={`${baseChip} ${
          active === null
            ? 'border-violet-heritage bg-violet-heritage text-white'
            : 'border-lavender-line bg-white text-gray-600 hover:border-violet-electric hover:text-violet-heritage'
        }`}
      >
        Todos
      </Link>

      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/categoria/${category.slug}`}
          aria-current={active === category.slug ? 'page' : undefined}
          className={`${baseChip} ${
            active === category.slug
              ? 'border-violet-heritage bg-violet-heritage text-white'
              : 'border-lavender-line bg-white text-gray-600 hover:border-violet-electric hover:text-violet-heritage'
          }`}
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
}
