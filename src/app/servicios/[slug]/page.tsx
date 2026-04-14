import { getServiceBySlug, getAllServices } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import { SectionLayout } from '@/components/SectionLayout';
import { Award, ShieldCheck, Stethoscope } from 'lucide-react';
import { ReadingProgress } from '@/components/ReadingProgress';

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#311B92] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[#311B92] transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-[#1a0a3d] font-medium">{service.frontmatter.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#1a0a3d] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] tracking-[0.3em] text-[#a78bfa] uppercase mb-6">Servicio especializado</p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
            {service.frontmatter.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {service.frontmatter.description}
          </p>
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
              prose-headings:font-display prose-headings:text-[#1a0a3d] prose-headings:mt-12 prose-headings:mb-6 prose-headings:font-medium
              prose-h2:text-4xl prose-h3:text-2xl
              prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-600
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-600
              prose-li:mb-2
              prose-strong:text-[#311B92] prose-strong:font-semibold">
              <MDXRemote
                source={service.content}
                components={{ SectionLayout }}
              />
            </article>

            {/* CTA Section */}
            <section className="mt-20 bg-[#f5f3ff] rounded-2xl p-12 text-center border border-[#e8e4f8]">
              <h2 className="font-display text-3xl font-light text-[#1a0a3d] mb-4">
                ¿Eres candidato?
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Solicita una evaluación con nuestros especialistas y conoce si eres candidato para este tratamiento.
              </p>
              <a
                href="https://wa.me/528117781017?text=Hola,%20quisiera%20solicitar%20una%20evaluaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#311B92] text-white font-light tracking-wide rounded-full hover:bg-[#1a0a5e] transition-all duration-300 shadow-lg shadow-[#311B92]/20"
              >
                Solicitar Evaluación
              </a>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
