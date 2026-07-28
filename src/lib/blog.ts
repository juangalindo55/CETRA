import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  asFrontmatterObject,
  optionalBoolean,
  optionalStringArray,
  requireHrefPrefix,
  requireIsoDate,
  requireOneOf,
  requireString,
  requireStringArray,
} from '@/lib/frontmatter';
import { AUTHORS, getAuthor, isAuthorId, type Author } from '@/lib/authors';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

/** Palabras por minuto usadas para estimar el tiempo de lectura. */
const WORDS_PER_MINUTE = 200;

export const BLOG_CATEGORIES = [
  {
    slug: 'trasplante-pulmonar',
    label: 'Trasplante pulmonar',
    description:
      'El proceso completo: evaluación, criterios de candidatura, cirugía y seguimiento de por vida.',
  },
  {
    slug: 'enfermedades-respiratorias',
    label: 'Enfermedades respiratorias',
    description:
      'Fibrosis pulmonar, EPOC, hipertensión pulmonar y otras condiciones crónicas explicadas con claridad.',
  },
  {
    slug: 'diagnostico',
    label: 'Diagnóstico y estudios',
    description:
      'Qué mide cada estudio, cómo prepararte y cómo interpretar lo que te dicen los resultados.',
  },
  {
    slug: 'vida-con-la-enfermedad',
    label: 'Vida con la enfermedad',
    description:
      'Rehabilitación, nutrición, acompañamiento emocional y la vida cotidiana del paciente y su familia.',
  },
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type BlogCategorySlug = BlogCategory['slug'];

const CATEGORY_SLUGS = BLOG_CATEGORIES.map((category) => category.slug);

export function getCategory(slug: string): BlogCategory | null {
  return BLOG_CATEGORIES.find((category) => category.slug === slug) ?? null;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  category: BlogCategorySlug;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Id de `@/lib/authors` — quién escribe. */
  author: string;
  /** Id de `@/lib/authors` — quién valida clínicamente. */
  reviewedBy: string;
  publishedAt: string;
  lastUpdated: string;
  coverImage: string;
  coverImageAlt: string;
  relatedServices: string[];
  relatedPosts?: string[];
  /** Los borradores se ven en `npm run dev` pero nunca en producción. */
  draft?: boolean;
}

export interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingMinutes: number;
  author: Author;
  reviewer: Author;
  category: BlogCategory;
}

/**
 * Estima minutos de lectura sobre el texto real: descarta etiquetas JSX,
 * frontmatter ya separado por gray-matter y sintaxis markdown de enlaces.
 */
function estimateReadingMinutes(content: string): number {
  const plain = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*_`>-]/g, ' ');

  const words = plain.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Exige un id válido de `@/lib/authors`, nombrando el archivo si falla. */
function requireAuthorId(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): string {
  const value = requireString(frontmatter, field, filePath);

  if (!isAuthorId(value)) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: "${field}" must be a known author id ` +
        `(${Object.keys(AUTHORS).join(', ')}), received "${value}".`,
    );
  }

  return value;
}

function parsePostFrontmatter(data: unknown, filePath: string): PostFrontmatter {
  const frontmatter = asFrontmatterObject(data, filePath);

  const relatedServices = requireHrefPrefix(
    requireStringArray(frontmatter, 'relatedServices', filePath),
    '/servicios/',
    'relatedServices',
    filePath,
  );

  const relatedPostsRaw = optionalStringArray(frontmatter, 'relatedPosts', filePath);
  const relatedPosts = relatedPostsRaw
    ? requireHrefPrefix(relatedPostsRaw, '/blog/', 'relatedPosts', filePath)
    : undefined;

  const author = requireAuthorId(frontmatter, 'author', filePath);
  const reviewedBy = requireAuthorId(frontmatter, 'reviewedBy', filePath);

  return {
    title: requireString(frontmatter, 'title', filePath),
    description: requireString(frontmatter, 'description', filePath),
    category: requireOneOf(frontmatter, 'category', CATEGORY_SLUGS, filePath),
    primaryKeyword: requireString(frontmatter, 'primaryKeyword', filePath),
    secondaryKeywords: requireStringArray(frontmatter, 'secondaryKeywords', filePath),
    author,
    reviewedBy,
    publishedAt: requireIsoDate(frontmatter, 'publishedAt', filePath),
    lastUpdated: requireIsoDate(frontmatter, 'lastUpdated', filePath),
    coverImage: requireString(frontmatter, 'coverImage', filePath),
    coverImageAlt: requireString(frontmatter, 'coverImageAlt', filePath),
    relatedServices,
    relatedPosts,
    draft: optionalBoolean(frontmatter, 'draft', filePath),
  };
}

/** Lee un artículo sin filtrar borradores — el filtro vive en `getAllPosts`. */
export function getPostBySlug(slug: string): PostData | null {
  const realSlug = slug.replace(/\.mdx$/, '');

  if (realSlug.startsWith('_')) {
    return null;
  }

  const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = parsePostFrontmatter(data, fullPath);
  const category = getCategory(frontmatter.category);

  if (!category) {
    throw new Error(`Invalid frontmatter in ${fullPath}: unknown category "${frontmatter.category}".`);
  }

  return {
    slug: realSlug,
    frontmatter,
    content,
    readingMinutes: estimateReadingMinutes(content),
    author: getAuthor(frontmatter.author),
    reviewer: getAuthor(frontmatter.reviewedBy),
    category,
  };
}

/** Artículos publicables, del más reciente al más antiguo. */
export function getAllPosts(): PostData[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const isProduction = process.env.NODE_ENV === 'production';

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('_'))
    .map((file) => getPostBySlug(file))
    .filter((post): post is PostData => post !== null)
    .filter((post) => !(isProduction && post.frontmatter.draft))
    .sort((a, b) => b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt));
}

export function getPostsByCategory(category: BlogCategorySlug): PostData[] {
  return getAllPosts().filter((post) => post.frontmatter.category === category);
}

/**
 * Relacionados: primero los declarados en el frontmatter, después los de la
 * misma categoría, hasta completar el límite.
 */
export function getRelatedPosts(post: PostData, limit = 3): PostData[] {
  const others = getAllPosts().filter((candidate) => candidate.slug !== post.slug);
  const explicitSlugs = (post.frontmatter.relatedPosts ?? []).map((href) =>
    href.replace(/^\/blog\//, ''),
  );

  const explicit = explicitSlugs
    .map((slug) => others.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is PostData => candidate !== undefined);

  const sameCategory = others.filter(
    (candidate) =>
      candidate.frontmatter.category === post.frontmatter.category &&
      !explicit.some((entry) => entry.slug === candidate.slug),
  );

  return [...explicit, ...sameCategory].slice(0, limit);
}

/** Artículos que enlazan a un servicio dado — alimenta el bloque de las páginas de servicio. */
export function getPostsForService(serviceHref: string): PostData[] {
  return getAllPosts().filter((post) =>
    post.frontmatter.relatedServices.includes(serviceHref),
  );
}

/** Fecha ISO → "15 de abril de 2026". */
export function formatPostDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
