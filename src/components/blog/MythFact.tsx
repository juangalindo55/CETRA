import { CircleX, CircleCheck } from 'lucide-react';

interface MythFactProps {
  /** La creencia común, tal como la diría un paciente. */
  myth: string;
  /** La lectura médica correcta. */
  children: React.ReactNode;
  /** Etiqueta del lado de la creencia (default: "Lo que se suele pensar"). */
  mythLabel?: string;
  /** Etiqueta del lado médico (default: "Lo que realmente significa"). */
  factLabel?: string;
}

/**
 * Bloque "Mito vs. Realidad": contrasta una creencia frecuente con la lectura
 * clínica. Uso en MDX:
 *
 *   <MythFact myth="Qué bueno que el inhalador funciona.">
 *     Explicación médica en una o dos frases.
 *   </MythFact>
 */
export default function MythFact({
  myth,
  children,
  mythLabel = 'Lo que se suele pensar',
  factLabel = 'Lo que realmente significa',
}: MythFactProps) {
  return (
    <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
      <div className="rounded-3xl border border-lavender-line bg-soft-gray p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <CircleX className="h-4 w-4 text-ink/50" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/60">
            {mythLabel}
          </span>
        </div>
        <p className="mt-4 font-display text-xl font-light italic leading-snug text-ink/80">
          “{myth}”
        </p>
      </div>

      <div className="rounded-3xl border border-lavender-line border-l-4 border-l-violet-electric bg-lavender p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <CircleCheck className="h-4 w-4 text-violet-electric" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
            {factLabel}
          </span>
        </div>
        <div className="mt-4 text-base leading-relaxed text-ink/80">{children}</div>
      </div>
    </div>
  );
}
