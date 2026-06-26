import { getServiceBySlug, getAllServices } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import { SectionLayout } from '@/components/SectionLayout';
import { ProcessPhases } from '@/components/sections/ProcessPhases';
import { RecoveryTimeline } from '@/components/sections/RecoveryTimeline';
import TestimonialExpanded from '@/components/sections/TestimonialExpanded';
import { Award, ShieldCheck, Stethoscope } from 'lucide-react';
import ReadingProgress from '@/components/ReadingProgress';
import type { Metadata } from 'next';
import { SITE_NAME, getAbsoluteUrl } from '@/lib/site';
import { CONTACT_WHATSAPP } from '@/lib/contact';

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

  const title = `${service.frontmatter.title} | ${SITE_NAME}`;
  const keywords = [
    service.frontmatter.primaryKeyword,
    ...(service.frontmatter.secondaryKeywords ?? []),
  ].filter(Boolean) as string[];

  return {
    title,
    description: service.frontmatter.description,
    keywords,
    alternates: {
      canonical: getAbsoluteUrl(`/servicios/${resolvedParams.slug}`),
    },
    openGraph: {
      title,
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

  return (
    <div className="w-full">


      {/* Hero Section */}
      <section className="bg-[#1a0a3d] text-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] tracking-[0.3em] text-[#a78bfa] uppercase mb-6">Servicio especializado</p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            {service.frontmatter.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {service.frontmatter.description}
          </p>
          {(service.frontmatter.reviewedBy || service.frontmatter.lastUpdated) && (
            <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-white/70 mb-8">
              {service.frontmatter.reviewedBy && (
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Revisión clínica: {service.frontmatter.reviewedBy}
                </span>
              )}
              {service.frontmatter.lastUpdated && (
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Actualizado: {service.frontmatter.lastUpdated}
                </span>
              )}
            </div>
          )}
          {/* Excellence Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#a78bfa]">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Award className="w-4 h-4" /> Centro Especializado
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4" /> Protocolos Internacionales
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Stethoscope className="w-4 h-4" /> Junta Médica Multidisciplinaria
            </div>
          </div>
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
            <article className="prose prose-lg max-w-none prose-purple prose-img:rounded-2xl
              prose-headings:font-display prose-headings:mt-16 prose-headings:mb-6
              prose-h2:text-4xl prose-h2:text-[#311B92] prose-h2:font-bold prose-h2:border-b-2 prose-h2:border-[#7C3AED] prose-h2:pb-4 prose-h2:scroll-mt-32
              prose-h3:text-2xl prose-h3:text-[#7C3AED] prose-h3:font-semibold
              prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-600
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-600
              prose-li:mb-2
              prose-strong:text-[#311B92] prose-strong:font-semibold">
              <MDXRemote
                source={service.content}
                components={{ SectionLayout, ProcessPhases, RecoveryTimeline, TestimonialExpanded }}
              />
            </article>

            {/* CTA Section */}
            <section className="mt-20 bg-[#f5f3ff] rounded-2xl p-12 text-center border border-[#e8e4f8]">
              <h2 className="font-display text-3xl font-light text-[#1a0a3d] mb-4">
                ¿Eres candidato?
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Solicita una consulta con nuestros especialistas y conoce si eres candidato para este tratamiento.
              </p>
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#311B92] text-white font-light tracking-wide rounded-full hover:bg-[#1a0a5e] transition-all duration-300 shadow-lg shadow-[#311B92]/20"
              >
                Solicitar una Consulta
              </a>
            </section>

            {Array.isArray(service.frontmatter.relatedServices) &&
              service.frontmatter.relatedServices.length > 0 && (
                <section className="mt-10 rounded-2xl border border-[#e8e4f8] bg-white p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
                    Servicios relacionados
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {service.frontmatter.relatedServices.map((href) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex items-center rounded-full border border-[#d8c9ff] bg-[#faf8ff] px-4 py-2 text-sm font-medium text-[#311B92] transition-colors hover:border-[#7C3AED] hover:bg-[#f5f0ff]"
                      >
                        {serviceTitleBySlug.get(href) ?? href}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
          </main>
        </div>
      </div>
    </div>
  );
}
