import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import ButtonCTA from '@/components/ui/ButtonCTA';
import CategoryNav from '@/components/blog/CategoryNav';
import PostCard from '@/components/blog/PostCard';
import { getAllPosts } from '@/lib/blog';
import { CONTACT_WHATSAPP_ORIENTACION } from '@/lib/contact';
import { LEYENDA_SANITARIA } from '@/lib/legal';
import { SITE_NAME, getAbsoluteUrl } from '@/lib/site';

const description =
  'Artículos sobre trasplante pulmonar, enfermedades respiratorias y estudios diagnósticos, escritos y revisados por el equipo médico de CETRA en Monterrey.';

export const metadata: Metadata = {
  title: 'Blog',
  description,
  alternates: {
    canonical: getAbsoluteUrl('/blog'),
    types: { 'application/rss+xml': getAbsoluteUrl('/blog/rss.xml') },
  },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description,
    url: '/blog',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-soft">
            Blog clínico
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            Entender tu diagnóstico es el primer paso
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            {description}
          </p>
        </div>
      </section>

      {/* Categorías + artículos */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <CategoryNav />

        {posts.length === 0 ? (
          <p className="mt-16 border-t border-ink pt-10 text-lg leading-8 text-gray-600">
            Estamos preparando los primeros artículos. Mientras tanto, puedes consultar nuestras{' '}
            <a
              href="/preguntas-frecuentes"
              className="font-semibold text-violet-heritage underline-offset-4 hover:underline"
            >
              preguntas frecuentes
            </a>{' '}
            o escribirnos directamente.
          </p>
        ) : (
          <>
            <div className="mt-12">
              <PostCard post={featured} featured priority />
            </div>

            {rest.length > 0 && (
              <>
                <div className="mt-20 flex items-center gap-5 border-b border-ink pb-5">
                  <p className="font-display text-lg text-violet-electric">Todos los artículos</p>
                  <span className="h-px flex-1 bg-lavender-line" />
                  <span className="text-sm text-gray-500">
                    {posts.length} {posts.length === 1 ? 'artículo' : 'artículos'}
                  </span>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>

      {/* CTA */}
      <section className="bg-lavender">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-display text-lg text-violet-electric">Tu siguiente paso</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl">
                ¿Tu caso no aparece en ningún artículo?
              </h2>
            </div>

            <div className="border-t border-ink pt-7">
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                Ningún texto sustituye una valoración médica. Cuéntanos tu situación o comparte la
                indicación de tu médico y te orientamos sobre el punto de entrada adecuado.
              </p>

              <div className="mt-8">
                <ButtonCTA href={CONTACT_WHATSAPP_ORIENTACION} external size="lg">
                  Solicitar orientación
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonCTA>
              </div>

              <p className="mt-6 text-xs text-gray-500">{LEYENDA_SANITARIA}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
