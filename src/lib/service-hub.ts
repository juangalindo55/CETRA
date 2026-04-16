export type ServiceHubItem = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  items: ServiceHubItem[];
};

export const featuredServices: ServiceHubItem[] = [
  {
    slug: '/servicios/trasplante-pulmonar',
    title: 'Trasplante pulmonar',
    summary:
      'Evaluación, preparación, cirugía y seguimiento para pacientes con enfermedad pulmonar avanzada.',
    tag: 'Alta complejidad',
  },
  {
    slug: '/servicios/evaluacion-pretrasplante',
    title: 'Evaluación pretrasplante',
    summary:
      'Valoración clínica integral para identificar candidaturas y definir la ruta terapéutica.',
    tag: 'Selección clínica',
  },
  {
    slug: '/servicios/diagnostico-funcional-respiratorio',
    title: 'Diagnóstico funcional respiratorio',
    summary:
      'Espirometría, DLCO, pletismografía, FeNO y pruebas de fuerza respiratoria.',
    tag: 'Función pulmonar',
  },
  {
    slug: '/servicios/rehabilitacion-pulmonar',
    title: 'Rehabilitación pulmonar',
    summary:
      'Programas para recuperar capacidad física, respiratoria y tolerancia al esfuerzo.',
    tag: 'Recuperación',
  },
  {
    slug: '/servicios/diagnostico-del-sueno',
    title: 'Diagnóstico del sueño',
    summary:
      'Estudios para apnea, ronquido y alteraciones respiratorias nocturnas.',
    tag: 'Sueño',
  },
  {
    slug: '/servicios/pruebas-de-esfuerzo',
    title: 'Pruebas de esfuerzo',
    summary:
      'Prueba de caminata, CPET y evaluación de capacidad funcional real.',
    tag: 'Capacidad funcional',
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Alta complejidad',
    description: 'Servicios para decisiones clínicas de mayor impacto.',
    items: featuredServices.filter((service) =>
      [
        '/servicios/trasplante-pulmonar',
        '/servicios/evaluacion-pretrasplante',
      ].includes(service.slug),
    ),
  },
  {
    title: 'Estudios diagnósticos',
    description: 'Pruebas que ayudan a entender función, sueño y esfuerzo.',
    items: featuredServices.filter((service) =>
      [
        '/servicios/diagnostico-funcional-respiratorio',
        '/servicios/diagnostico-del-sueno',
        '/servicios/pruebas-de-esfuerzo',
      ].includes(service.slug),
    ),
  },
  {
    title: 'Recuperación y seguimiento',
    description: 'Intervenciones para mejorar capacidad y sostener resultados.',
    items: featuredServices.filter((service) =>
      ['/servicios/rehabilitacion-pulmonar'].includes(service.slug),
    ),
  },
];
