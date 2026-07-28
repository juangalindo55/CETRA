import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  asFrontmatterObject,
  optionalString,
  requireHrefPrefix,
  requireIsoDate,
  requireString,
  requireStringArray,
} from '@/lib/frontmatter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ServiceFrontmatter {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  relatedServices: string[];
  reviewedBy: string;
  lastUpdated: string;
  icon: string;
  /** Foto del hero split (opcional); sin ella el hero se renderiza solo texto. */
  heroImage?: string;
  heroImageAlt?: string;
}

export interface ServiceData {
  slug: string;
  frontmatter: ServiceFrontmatter;
  content: string;
}

function parseServiceFrontmatter(data: unknown, filePath: string): ServiceFrontmatter {
  const frontmatter = asFrontmatterObject(data, filePath);

  const relatedServices = requireHrefPrefix(
    requireStringArray(frontmatter, 'relatedServices', filePath),
    '/servicios/',
    'relatedServices',
    filePath,
  );

  return {
    title: requireString(frontmatter, 'title', filePath),
    description: requireString(frontmatter, 'description', filePath),
    primaryKeyword: requireString(frontmatter, 'primaryKeyword', filePath),
    secondaryKeywords: requireStringArray(frontmatter, 'secondaryKeywords', filePath),
    relatedServices,
    reviewedBy: requireString(frontmatter, 'reviewedBy', filePath),
    lastUpdated: requireIsoDate(frontmatter, 'lastUpdated', filePath),
    icon: requireString(frontmatter, 'icon', filePath),
    heroImage: optionalString(frontmatter, 'heroImage', filePath),
    heroImageAlt: optionalString(frontmatter, 'heroImageAlt', filePath),
  };
}

export function getServiceBySlug(slug: string): ServiceData | null {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `servicios/${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: parseServiceFrontmatter(data, fullPath),
    content,
  };
}

export function getAllServices(): ServiceData[] {
  const servicesDir = path.join(contentDirectory, 'servicios');

  if (!fs.existsSync(servicesDir)) {
    return [];
  }

  const slugs = fs.readdirSync(servicesDir);
  const services = slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is ServiceData => service !== null);

  return services;
}
