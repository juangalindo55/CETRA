/**
 * Datos legales/regulatorios del establecimiento — fuente única.
 * Requisitos de publicidad sanitaria (Ley General de Salud + Reglamento
 * de Publicidad; trámite COFEPRIS-02-001-A para prestación de servicios de salud).
 */

export const RESPONSABLE_SANITARIO = {
  name: 'Dr. Sergio Saúl Sánchez Salazar',
  /** Cédula profesional — pendiente de recibir; no se muestra hasta tenerla. */
  cedula: null as string | null,
};

/**
 * Número de permiso de publicidad COFEPRIS.
 * null = trámite pendiente → el bloque del footer no muestra número
 * (nunca publicar un número inexistente).
 */
export const COFEPRIS_PERMISO_PUBLICIDAD: string | null = null;

/** Leyenda obligatoria en publicidad de servicios de salud. */
export const LEYENDA_SANITARIA = 'Consulte a su médico.';
