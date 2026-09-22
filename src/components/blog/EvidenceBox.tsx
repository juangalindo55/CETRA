import { BookOpenCheck, ArrowUpRight } from 'lucide-react';

interface EvidenceBoxProps {
  /** Revista y año, p. ej. "New England Journal of Medicine · 2000". */
  journal: string;
  /** Qué demostró el estudio, en lenguaje de paciente. */
  children: React.ReactNode;
  /** Cita bibliográfica formal. */
  citation: string;
  /** Enlace a la fuente (DOI o PubMed). */
  href?: string;
}

/**
 * Recuadro de evidencia científica: certifica ante el lector de dónde sale
 * el dato clínico principal del artículo. Uso en MDX:
 *
 *   <EvidenceBox journal="…" citation="…" href="https://doi.org/…">
 *     Hallazgo explicado en una o dos frases.
 *   </EvidenceBox>
 */
export default function EvidenceBox({ journal, children, citation, href }: EvidenceBoxProps) {
  return (
    <aside className="not-prose my-10 rounded-3xl border border-lavender-line border-l-4 border-l-violet-electric bg-lavender p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <BookOpenCheck className="h-4 w-4 text-violet-electric" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
          Evidencia científica
        </span>
      </div>

      <p className="mt-2 font-display text-lg font-medium text-ink">{journal}</p>

      <div className="mt-4 text-base leading-relaxed text-ink/80">{children}</div>

      <p className="mt-6 border-t border-lavender-line pt-4 text-xs leading-relaxed text-ink/60">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-1 transition-colors hover:text-violet-heritage"
          >
            <span>{citation}</span>
            <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
          </a>
        ) : (
          citation
        )}
      </p>
    </aside>
  );
}
