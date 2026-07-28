import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatPostDate, type PostData } from '@/lib/blog';

interface PostCardProps {
  post: PostData;
  /** El artículo destacado ocupa el ancho completo con la portada al costado. */
  featured?: boolean;
  /** `true` solo en la primera portada visible, para priorizar su carga. */
  priority?: boolean;
}

/**
 * Tarjeta de artículo. La portada usa `next/image` directamente (no `PhotoFrame`)
 * porque el recorte de esquinas lo aplica la tarjeta con `overflow-hidden`,
 * igual que las tarjetas de equipo en `Specialists.tsx`.
 */
export default function PostCard({ post, featured = false, priority = false }: PostCardProps) {
  const { frontmatter, category, readingMinutes, slug } = post;
  const href = `/blog/${slug}`;

  const badge = (
    <span className="inline-block rounded-full border border-violet-soft bg-lavender px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-heritage">
      {category.label}
    </span>
  );

  const meta = (
    <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
      <time dateTime={frontmatter.publishedAt}>{formatPostDate(frontmatter.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes} min de lectura</span>
    </p>
  );

  if (featured) {
    return (
      <article className="group grid overflow-hidden rounded-[2rem] border border-lavender-line bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-violet-soft hover:shadow-lg hover:shadow-violet-heritage/10 lg:grid-cols-2">
        <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-soft-gray lg:aspect-auto lg:min-h-[24rem]">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.coverImageAlt}
            fill
            priority={priority}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]"
          />
        </Link>

        <div className="flex flex-col justify-center p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
              Lo más reciente
            </span>
            {badge}
          </div>

          <h2 className="mt-6 font-display text-3xl font-light leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl">
            <Link href={href} className="transition-colors hover:text-violet-heritage">
              {frontmatter.title}
            </Link>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">{frontmatter.description}</p>

          {meta}

          <Link
            href={href}
            className="motion-link mt-6 inline-flex items-center gap-2 self-start border-b border-violet-electric/35 pb-1 text-sm font-semibold text-violet-heritage transition-colors hover:border-violet-heritage"
          >
            Leer artículo
            <ArrowRight className="motion-link-arrow h-4 w-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-lavender-line bg-white shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:border-violet-soft hover:shadow-lg hover:shadow-violet-heritage/10 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1">
      <Link href={href} className="relative block aspect-[16/9] overflow-hidden bg-soft-gray">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.coverImageAlt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-7">
        {badge}

        <h3 className="mt-5 text-xl font-semibold leading-7 text-ink">
          <Link href={href} className="transition-colors hover:text-violet-heritage">
            {frontmatter.title}
          </Link>
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">{frontmatter.description}</p>

        {meta}
      </div>
    </article>
  );
}
