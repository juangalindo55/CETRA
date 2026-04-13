import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ServiceFrontmatter {
  title: string;
  description: string;
  [key: string]: unknown;
}

export function getServiceBySlug(slug: string): { slug: string; frontmatter: ServiceFrontmatter; content: string } | null {
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

export function getAllServices() {
  const servicesDir = path.join(contentDirectory, 'servicios');
  
  if (!fs.existsSync(servicesDir)) {
    return [];
  }

  const slugs = fs.readdirSync(servicesDir);
  const services = slugs.map((slug) => getServiceBySlug(slug));
  
  return services;
}
