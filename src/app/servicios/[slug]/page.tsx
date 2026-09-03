import Image from 'next/image';
import { getServiceBySlug, getAllServices } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import { SectionLayout } from '@/components/SectionLayout';
import { ProcessPhases } from '@/components/sections/ProcessPhases';
import { RecoveryTimeline } from '@/components/sections/RecoveryTimeline';
import TestimonialExpanded from '@/components/sections/TestimonialExpanded';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ReadingProgress from '@/components/ReadingProgress';
import type { Metadata } from 'next';
import { SITE_NAME, getAbsoluteUrl } from '@/lib/site';
import { CONTACT_WHATSAPP_ORIENTACION } from '@/lib/contact';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { getPostsForService } from '@/lib/blog';

/**
 * Solo los servicios publicados existen: un slug desconocido
 * devuelve un 404 real en vez de una página vacía con estado 200.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {};
  }

  // El template del layout raíz ("%s | CETRA") añade el sufijo al <title>;
  // openGraph no usa template, por eso lleva el sufijo explícito.
  const keywords = [
    service.frontmatter.primaryKeyword,
    ...(service.frontmatter.secondaryKeywords ?? []),
  ].filter(Boolean) as string[];

  return {
    title: service.frontmatter.title,
    description: service.frontmatter.description,
    keywords,
    alternates: {
      canonical: getAbsoluteUrl(`/servicios/${resolvedParams.slug}`),
    },
    openGraph: {
      title: `${service.frontmatter.title} | ${SITE_NAME}`,
      description: service.frontmatter.description,
      url: `/servicios/${resolvedParams.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  const allServices = getAllServices().filter(Boolean);
  const serviceTitleBySlug = new Map(
    allServices.map((entry) => [
      `/servicios/${entry?.slug}`,
      entry?.frontmatter.title ?? entry?.slug ?? '',
    ]),
  );

  if (!service) {
    notFound();
  }

  const isTransplantHero = resolvedParams.slug === 'trasplante-pulmonar';
  const relatedPosts = getPostsForService(`/servicios/${resolvedParams.slug}`).slice(0, 3);

  return (
    <div className="w-full">


      {/* Hero Section */}
      <section className="bg-ink text-white">
        <div
          className={`mx-auto max-w-7xl ${
            service.frontmatter.heroImage ? 'grid lg:grid-cols-[1.05fr_0.95fr]' : ''
          }`}
        >
          <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-soft">
              Servicio especializado
            </p>
            <h1 className="mt-8 max-w-3xl font-display text-5xl font-light leading-[1.05] tracking-[-0.025em] md:text-6xl">
              {service.frontmatter.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              {service.frontmatter.description}
            </p>

            {service.frontmatter.heroImage && (
              <div
                className={`relative mt-10 overflow-hidden lg:hidden ${
                  isTransplantHero ? 'aspect-[874/422]' : 'aspect-[16/9]'
                }`}
              >
                <Image
                  src={service.frontmatter.heroImage}
                  alt={service.frontmatter.heroImageAlt ?? service.frontmatter.title}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 1px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </div>
            )}

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/60">
              <span>Centro especializado</span>
              <span>Protocolos internacionales</span>
              <span>Junta médica multidisciplinaria</span>
              {service.frontmatter.reviewedBy && (
                <span>Revisión clínica: {service.frontmatter.reviewedBy}</span>
              )}
              {service.frontmatter.lastUpdated && (
                <span>Actualizado: {service.frontmatter.lastUpdated}</span>
              )}
            </div>
          </div>

          {service.frontmatter.heroImage && (
            <div
              className={`relative hidden overflow-hidden lg:block ${
                isTransplantHero
                  ? 'mx-6 aspect-[874/422] self-center border border-white/15'
                  : 'min-h-[28rem] border-l border-white/15'
              }`}
            >
              <Image
                src={service.frontmatter.heroImage}
                alt={service.frontmatter.heroImageAlt ?? service.frontmatter.title}
                fill
                priority
                sizes="42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <TableOfContents />
            </div>
          </aside>

          {/* Main Content */}
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
                source={service.content}
                components={{ SectionLayout, ProcessPhases, RecoveryTimeline, TestimonialExpanded }}
              />
            </article>

            {/* CTA Section */}
            <section className="mt-20 bg-lavender p-10 sm:p-12">
              <h2 className="max-w-xl font-display text-3xl font-light leading-[1.15] tracking-[-0.025em] text-ink">
                ¿Es este el servicio que necesitas?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Cuéntanos tu caso o comparte la indicación de tu médico; te orientamos antes de agendar.
              </p>
              <div className="mt-8">
                <ButtonCTA href={CONTACT_WHATSAPP_ORIENTACION} external>
                  Solicitar orientación
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonCTA>
              </div>
            </section>

            {Array.isArray(service.frontmatter.relatedServices) &&
              service.frontmatter.relatedServices.length > 0 && (
                <section className="mt-14 border-t border-ink pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-electric">
                    Servicios relacionados
                  </p>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
                    {service.frontmatter.relatedServices.map((href) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-violet-heritage transition-colors hover:text-ink"
                      >
                        {serviceTitleBySlug.get(href) ?? href}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

            {relatedPosts.length > 0 && (
              <section className="mt-14 border-t border-ink pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-electric">
                  Artículos sobre este servicio
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-violet-heritage transition-colors hover:text-ink"
                      >
                        {post.frontmatter.title}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
