import Link from 'next/link';
import { formatCedulas } from '@/lib/authors';
import { formatPostDate, type PostData } from '@/lib/blog';

interface PostMetaProps {
  post: PostData;
  /** `dark` para el hero sobre `bg-ink`; `light` para fondos claros. */
  tone?: 'dark' | 'light';
}

/**
 * Fila de metadatos de autoría clínica: quién escribe, quién revisa y cuándo.
 * Es la señal E-E-A-T que Google evalúa en contenido de salud.
 */
export default function PostMeta({ post, tone = 'dark' }: PostMetaProps) {
  const { frontmatter, author, reviewer, readingMinutes } = post;
  const wasUpdated = frontmatter.lastUpdated !== frontmatter.publishedAt;

  const containerTone =
    tone === 'dark' ? 'border-white/20 text-white/60' : 'border-lavender-line text-gray-500';
  const linkTone =
    tone === 'dark'
      ? 'text-white/85 hover:text-white'
      : 'text-violet-heritage hover:text-ink';

  return (
    <div
      className={`flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-6 text-sm ${containerTone}`}
    >
      <span>
        Por{' '}
        <Link
          href={author.profileHref}
          className={`font-medium underline-offset-4 transition-colors hover:underline ${linkTone}`}
        >
          {author.name}
        </Link>
      </span>

      <span>
        Revisión clínica:{' '}
        <Link
          href={reviewer.profileHref}
          className={`font-medium underline-offset-4 transition-colors hover:underline ${linkTone}`}
        >
          {reviewer.name}
        </Link>{' '}
        · {formatCedulas(reviewer)}
      </span>

      <span>
        <time dateTime={frontmatter.publishedAt}>{formatPostDate(frontmatter.publishedAt)}</time>
      </span>

      {wasUpdated && (
        <span>
          Actualizado:{' '}
          <time dateTime={frontmatter.lastUpdated}>{formatPostDate(frontmatter.lastUpdated)}</time>
        </span>
      )}

      <span>{readingMinutes} min de lectura</span>
    </div>
  );
}
