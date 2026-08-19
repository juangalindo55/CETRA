/**
 * Registro de médicos de CETRA — fuente única.
 *
 * Consolida los datos que antes vivían duplicados en `src/lib/site.ts`
 * (JSON-LD de especialistas) y `src/components/sections/Specialists.tsx`
 * (tarjetas del equipo). Mismo criterio que `@/lib/contact` y `@/lib/legal`:
 * los datos regulatorios (cédula profesional, certificación de consejo) se
 * declaran en un solo lugar.
 *
 * Los artículos del blog referencian a estos médicos por `id` en su
 * frontmatter (`author` y `reviewedBy`).
 */

export interface AuthorCedula {
  number: string;
  institution: string;
}

export interface AuthorCertification {
  number: string;
  council: string;
}

export interface Author {
  /** Identificador usado en el frontmatter de los artículos. */
  id: string;
  name: string;
  /** Rol corto, para el kicker de la tarjeta. */
  role: string;
  /** Título completo, para el JSON-LD. */
  jobTitle: string;
  /** Valor de `medicalSpecialty` en Schema.org. */
  medicalSpecialty: string;
  specialty?: string;
  subspecialty?: string;
  image: string;
  cedulas: AuthorCedula[];
  certification?: AuthorCertification;
  profileHref: string;
}

export const AUTHORS = {
  uriel: {
    id: 'uriel',
    name: 'Dr. Uriel Chavarría Martínez',
    role: 'Neumólogo',
    jobTitle: 'Neumólogo · Neumólogo Intensivista',
    medicalSpecialty: 'Pulmonary Medicine',
    specialty: 'Neumología',
    subspecialty: 'Neumología Intensivista',
    image: '/images/specialists/uriel-chavarria.webp',
    cedulas: [
      { number: '7796468', institution: 'UANL' },
      { number: '7757598', institution: 'UANL' },
    ],
    certification: { number: 'CNN-445', council: 'Consejo Nacional de Neumología, A.C.' },
    profileHref: '/especialistas',
  },
  wong: {
    id: 'wong',
    name: 'Dr. Manuel Wong Jaen',
    role: 'Cirujano Cardiotorácico',
    jobTitle: 'Cirujano Cardiotorácico — Especialista en Trasplante Pulmonar',
    medicalSpecialty: 'Thoracic Surgery',
    specialty: 'Especialista en Trasplante Pulmonar y Cirugía por Mínima Invasión',
    image: '/images/specialists/manuel-wong.webp',
    cedulas: [
      {
        number: '10359772',
        institution: 'Ministerio de Educación, Cultura y Deporte — Madrid, España',
      },
    ],
    certification: { number: '506', council: 'Consejo Nacional de Cirugía del Tórax, A.C.' },
    profileHref: '/especialistas',
  },
  sergio: {
    id: 'sergio',
    name: 'Dr. Sergio Saúl Sánchez Salazar',
    role: 'Neumólogo',
    jobTitle: 'Neumólogo',
    medicalSpecialty: 'Pulmonary Medicine',
    image: '/images/specialists/drsergios1.webp',
    cedulas: [{ number: '11207367', institution: 'UANL' }],
    certification: { number: 'CNN-1215', council: 'Consejo Nacional de Neumología, A.C.' },
    profileHref: '/especialistas',
  },
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof AUTHORS;

/** Orden de presentación del equipo médico (tarjetas y JSON-LD). */
export const AUTHOR_ORDER: AuthorId[] = ['uriel', 'wong', 'sergio'];

export const AUTHOR_LIST: Author[] = AUTHOR_ORDER.map((id) => AUTHORS[id]);

export function isAuthorId(value: string): value is AuthorId {
  return Object.prototype.hasOwnProperty.call(AUTHORS, value);
}

/** Devuelve el médico o lanza — un id inválido debe romper el build. */
export function getAuthor(id: string): Author {
  if (!isAuthorId(id)) {
    throw new Error(
      `Unknown author id "${id}". Valid ids: ${Object.keys(AUTHORS).join(', ')}.`,
    );
  }

  return AUTHORS[id];
}

/** Cédulas en una línea, para el pie de autoría: "Céd. Prof. 1150280 · 6433235". */
export function formatCedulas(author: Author): string {
  return `Céd. Prof. ${author.cedulas.map((cedula) => cedula.number).join(' · ')}`;
}
