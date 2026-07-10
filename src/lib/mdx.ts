import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
}

export interface ServiceData {
  slug: string;
  frontmatter: ServiceFrontmatter;
  content: string;
}

function getRequiredString(
  frontmatter: Record<string, unknown>,
  field: keyof Pick<ServiceFrontmatter, 'title' | 'description' | 'primaryKeyword' | 'reviewedBy' | 'lastUpdated' | 'icon'>,
  filePath: string,
) {
  const value = frontmatter[field];

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Invalid frontmatter in ${filePath}: "${field}" must be a non-empty string.`);
  }

  return value;
}

function getRequiredStringArray(
  frontmatter: Record<string, unknown>,
  field: 'secondaryKeywords' | 'relatedServices',
  filePath: string,
) {
  const value = frontmatter[field];

  if (!Array.isArray(value) || value.length === 0 || value.some((item) => typeof item !== 'string' || item.trim().length === 0)) {
    throw new Error(`Invalid frontmatter in ${filePath}: "${field}" must be a non-empty list of strings.`);
  }

  return value;
}

function parseServiceFrontmatter(data: unknown, filePath: string): ServiceFrontmatter {
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new Error(`Invalid frontmatter in ${filePath}: expected an object.`);
  }

  const frontmatter = data as Record<string, unknown>;
  const lastUpdated = getRequiredString(frontmatter, 'lastUpdated', filePath);
  const parsedDate = new Date(`${lastUpdated}T00:00:00Z`);

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(lastUpdated) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== lastUpdated
  ) {
    throw new Error(`Invalid frontmatter in ${filePath}: "lastUpdated" must use the YYYY-MM-DD format.`);
  }

  const relatedServices = getRequiredStringArray(frontmatter, 'relatedServices', filePath);
  if (relatedServices.some((href) => !href.startsWith('/servicios/'))) {
    throw new Error(`Invalid frontmatter in ${filePath}: "relatedServices" entries must start with "/servicios/".`);
  }

  return {
    title: getRequiredString(frontmatter, 'title', filePath),
    description: getRequiredString(frontmatter, 'description', filePath),
    primaryKeyword: getRequiredString(frontmatter, 'primaryKeyword', filePath),
    secondaryKeywords: getRequiredStringArray(frontmatter, 'secondaryKeywords', filePath),
    relatedServices,
    reviewedBy: getRequiredString(frontmatter, 'reviewedBy', filePath),
    lastUpdated,
    icon: getRequiredString(frontmatter, 'icon', filePath),
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
