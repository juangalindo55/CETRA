import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Author } from '@/lib/authors';

interface AuthorCardProps {
  author: Author;
  reviewer: Author;
}

function Credentials({ author }: { author: Author }) {
  return (
    <div className="mt-3 space-y-1">
      {author.cedulas.map((cedula) => (
        <p key={cedula.number} className="text-xs leading-snug text-gray-500">
          Céd. Prof. {cedula.number} · <span className="text-gray-400">{cedula.institution}</span>
        </p>
      ))}
      {author.certification && (
        <p className="text-xs leading-snug text-gray-500">
          Cert. {author.certification.number} ·{' '}
          <span className="text-gray-400">{author.certification.council}</span>
        </p>
      )}
    </div>
  );
}

/**
 * Firma clínica al pie del artículo: quién lo escribió y quién lo validó,
 * con cédula profesional. Requisito de publicidad sanitaria y principal
 * señal de autoridad para buscadores en contenido médico.
 */
export default function AuthorCard({ author, reviewer }: AuthorCardProps) {
  const sameDoctor = author.id === reviewer.id;

  return (
    <section className="mt-16 rounded-[2rem] border border-lavender-line bg-lavender p-8 sm:p-10">
      <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-electric">
        Autoría y revisión clínica
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div className="flex gap-5">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-soft-gray">
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-electric">
              {sameDoctor ? 'Autor y revisor' : 'Autor'}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">{author.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{author.jobTitle}</p>
            <Credentials author={author} />
          </div>
        </div>

        {!sameDoctor && (
          <div className="flex gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-soft-gray">
              <Image
                src={reviewer.image}
                alt={reviewer.name}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-electric">
                Revisado por
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{reviewer.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{reviewer.jobTitle}</p>
              <Credentials author={reviewer} />
            </div>
          </div>
        )}
      </div>

      <Link
        href="/especialistas"
        className="motion-link mt-8 inline-flex items-center gap-2 border-b border-violet-electric/35 pb-1 text-sm font-semibold text-violet-heritage transition-colors hover:border-violet-heritage"
      >
        Conoce al equipo clínico de CETRA
        <ArrowRight className="motion-link-arrow h-4 w-4" />
      </Link>
    </section>
  );
}
