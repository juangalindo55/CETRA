/**
 * Validadores de frontmatter compartidos por las colecciones MDX
 * (`src/content/servicios` y `src/content/blog`).
 *
 * Todos lanzan `Error` con el path del archivo: un frontmatter inválido
 * rompe el build en vez de publicar una página corrupta.
 */

export function requireString(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): string {
  const value = frontmatter[field];

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Invalid frontmatter in ${filePath}: "${field}" must be a non-empty string.`);
  }

  return value;
}

export function optionalString(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): string | undefined {
  const value = frontmatter[field];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: "${field}" must be a non-empty string when present.`,
    );
  }

  return value;
}

export function requireStringArray(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): string[] {
  const value = frontmatter[field];

  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== 'string' || item.trim().length === 0)
  ) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: "${field}" must be a non-empty list of strings.`,
    );
  }

  return value as string[];
}

export function optionalStringArray(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): string[] | undefined {
  if (frontmatter[field] === undefined) {
    return undefined;
  }

  return requireStringArray(frontmatter, field, filePath);
}

export function optionalBoolean(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): boolean | undefined {
  const value = frontmatter[field];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    throw new Error(`Invalid frontmatter in ${filePath}: "${field}" must be a boolean when present.`);
  }

  return value;
}

/** Exige una fecha en formato YYYY-MM-DD que además exista en el calendario. */
export function requireIsoDate(
  frontmatter: Record<string, unknown>,
  field: string,
  filePath: string,
): string {
  const value = requireString(frontmatter, field, filePath);
  const parsed = new Date(`${value}T00:00:00Z`);

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== value
  ) {
    throw new Error(`Invalid frontmatter in ${filePath}: "${field}" must use the YYYY-MM-DD format.`);
  }

  return value;
}

/** Exige que todos los hrefs de una lista empiecen con el prefijo de su colección. */
export function requireHrefPrefix(
  values: string[],
  prefix: string,
  field: string,
  filePath: string,
): string[] {
  if (values.some((href) => !href.startsWith(prefix))) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: "${field}" entries must start with "${prefix}".`,
    );
  }

  return values;
}

/** Exige que el valor pertenezca a una lista cerrada de opciones. */
export function requireOneOf<T extends string>(
  frontmatter: Record<string, unknown>,
  field: string,
  allowed: readonly T[],
  filePath: string,
): T {
  const value = requireString(frontmatter, field, filePath);

  if (!allowed.includes(value as T)) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: "${field}" must be one of ${allowed.join(', ')}.`,
    );
  }

  return value as T;
}

/** Normaliza el objeto que devuelve gray-matter antes de validarlo campo a campo. */
export function asFrontmatterObject(data: unknown, filePath: string): Record<string, unknown> {
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new Error(`Invalid frontmatter in ${filePath}: expected an object.`);
  }

  return data as Record<string, unknown>;
}
