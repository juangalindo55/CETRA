import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ServiceFrontmatter {
  title: string;
  description: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  relatedServices?: string[];
  reviewedBy?: string;
  lastUpdated?: string;
  [key: string]: unknown;
}

export interface ServiceData {
  slug: string;
  frontmatter: ServiceFrontmatter;
  content: string;
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
    frontmatter: data as ServiceFrontmatter,
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
