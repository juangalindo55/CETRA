import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import TableOfContents from '@/components/TableOfContents';
import ReadingProgress from '@/components/ReadingProgress';
import { SectionLayout } from '@/components/SectionLayout';
import { ProcessPhases } from '@/components/sections/ProcessPhases';
import { RecoveryTimeline } from '@/components/sections/RecoveryTimeline';
import TestimonialExpanded from '@/components/sections/TestimonialExpanded';
import ButtonCTA from '@/components/ui/ButtonCTA';
import AuthorCard from '@/components/blog/AuthorCard';
import PostCard from '@/components/blog/PostCard';
import PostMeta from '@/components/blog/PostMeta';

import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { getAllServices } from '@/lib/mdx';
import { CONTACT_WHATSAPP_ORIENTACION } from '@/lib/contact';
import { LEYENDA_SANITARIA } from '@/lib/legal';
import { SITE_NAME, getAbsoluteUrl, getArticleSchema, getBreadcrumbSchema } from '@/lib/site';

/**
 * Solo los artículos publicados existen: un slug desconocido —o un borrador
 * en producción— devuelve un 404 real en vez de una página vacía con estado 200.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { frontmatter } = post;
  const keywords = [frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords].filter(Boolean);

  // El template del layout raíz ("%s | CETRA") añade el sufijo al <title>;
  // openGraph no usa template, por eso lleva el sufijo explícito.
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords,
    authors: [{ name: post.author.name, url: getAbsoluteUrl(post.author.profileHref) }],
    alternates: { canonical: getAbsoluteUrl(`/blog/${slug}`) },
    openGraph: {
      type: 'article',
      title: `${frontmatter.title} | ${SITE_NAME}`,
      description: frontmatter.description,
      url: `/blog/${slug}`,
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.lastUpdated,
      authors: [post.author.name],
      images: [frontmatter.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, category, author, reviewer } = post;
  const relatedPosts = getRelatedPosts(post);

  const serviceTitleByHref = new Map(
    getAllServices().map((service) => [`/servicios/${service.slug}`, service.frontmatter.title]),
  );

  const articleSchema = getArticleSchema({
    slug: post.slug,
    title: frontmatter.title,
    description: frontmatter.description,
    categoryLabel: category.label,
    publishedAt: frontmatter.publishedAt,
    lastUpdated: frontmatter.lastUpdated,
    coverImage: frontmatter.coverImage,
    keywords: [frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords],
    author,
    reviewer,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: category.label, path: `/blog/categoria/${category.slug}` },
    { name: frontmatter.title },
  ]);

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs text-white/50">
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/blog/categoria/${category.slug}`}
              className="font-semibold uppercase tracking-[0.25em] text-violet-soft transition-colors hover:text-white"
            >
              {category.label}
            </Link>
          </nav>

          <h1 className="mt-8 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            {frontmatter.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            {frontmatter.description}
          </p>

          <div className="mt-12">
            <PostMeta post={post} tone="dark" />
          </div>
        </div>
      </section>

      {/* Portada */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] bg-soft-gray shadow-xl shadow-ink/10 sm:aspect-[21/9]">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.coverImageAlt}
            fill
            priority
            sizes="(max-width: 1279px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </div>

      <ReadingProgress />

      {/* Contenido + índice */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <TableOfContents />
            </div>
          </aside>

          <main className="md:col-span-2">
            <article className="prose prose-lg max-w-none prose-a:text-violet-heritage prose-a:font-medium
              prose-headings:font-display prose-headings:mt-16 prose-headings:mb-6
              prose-h2:text-4xl prose-h2:text-ink prose-h2:font-light prose-h2:tracking-[-0.025em] prose-h2:border-b prose-h2:border-ink prose-h2:pb-5 prose-h2:scroll-mt-32
              prose-h3:text-2xl prose-h3:text-ink prose-h3:font-semibold
              prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-600
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-600
              prose-li:mb-2 prose-li:marker:text-violet-electric
              prose-strong:text-ink prose-strong:font-semibold">
              <MDXRemote
                source={post.content}
                components={{ SectionLayout, ProcessPhases, RecoveryTimeline, TestimonialExpanded }}
              />
            </article>

            <AuthorCard author={author} reviewer={reviewer} />

            {/* Aviso sanitario: este contenido es informativo, no sustituye consulta. */}
            <p className="mt-8 border-l-2 border-violet-electric/40 pl-4 text-sm leading-7 text-gray-500">
              Este artículo tiene fines informativos y no sustituye una valoración médica
              individual. {LEYENDA_SANITARIA}
            </p>

            {/* CTA */}
            <section className="mt-16 bg-lavender p-10 sm:p-12">
              <h2 className="max-w-xl font-display text-3xl font-light leading-[1.15] tracking-[-0.025em] text-ink">
                ¿Quieres saber si aplica a tu caso?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Cuéntanos tu situación o comparte la indicación de tu médico; te orientamos antes de
                agendar.
              </p>
              <div className="mt-8">
                <ButtonCTA href={CONTACT_WHATSAPP_ORIENTACION} external>
                  Solicitar orientación
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonCTA>
              </div>
            </section>

            {frontmatter.relatedServices.length > 0 && (
              <section className="mt-14 border-t border-ink pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-electric">
                  Servicios relacionados
                </p>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
                  {frontmatter.relatedServices.map((href) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-heritage transition-colors hover:text-ink"
                    >
                      {serviceTitleByHref.get(href) ?? href}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-24 border-t border-ink pt-10">
            <p className="font-display text-lg text-violet-electric">Sigue leyendo</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <PostCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
