import {
  CETRA_LOCATION,
  CETRA_WEEKDAY_HOURS,
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
} from '@/lib/contact';

export const SITE_NAME = 'CETRA';
export const SITE_TITLE = 'CETRA | Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada';
export const SITE_DESCRIPTION =
  'Centro de trasplante pulmonar y medicina respiratoria avanzada en Monterrey. Atención especializada, evaluación integral y seguimiento clínico.';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://cetrapulmonar.com';

export const SITE_URL_OBJECT = new URL(SITE_URL);

export function getAbsoluteUrl(pathname = '/') {
  return new URL(pathname, SITE_URL_OBJECT).toString();
}

export function getCanonicalPath(pathname = '/') {
  return pathname === '/' ? SITE_URL : getAbsoluteUrl(pathname);
}

export function getClinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': `${SITE_URL}#medical-clinic`,
        name: SITE_NAME,
        alternateName: 'Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada',
        url: SITE_URL,
        telephone: CONTACT_PHONE_TEL,
        email: CONTACT_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CETRA_LOCATION.address,
          addressLocality: 'Monterrey',
          addressRegion: 'Nuevo León',
          addressCountry: 'MX',
        },
        areaServed: 'Monterrey, Nuevo León, México',
        openingHours: [CETRA_WEEKDAY_HOURS.schema],
        priceRange: '$$',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: CONTACT_PHONE_TEL,
            contactType: 'appointments',
            areaServed: 'MX',
            availableLanguage: ['es'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: {
          '@id': `${SITE_URL}#medical-clinic`,
        },
      },
    ],
  };
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Necesito saber qué estudio requiero antes de contactar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Puedes escribirnos con tu indicación médica o contarnos brevemente qué necesitas. El equipo te ayudará a identificar el punto de entrada adecuado; la decisión clínica final depende de la valoración correspondiente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo acudir si otro médico solicitó el estudio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Si cuentas con una solicitud, resultados previos o información clínica relevante, tráelos contigo. Esto ayuda a realizar el estudio indicado y a mantener continuidad con tu médico tratante.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo debo prepararme?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La preparación cambia según el estudio. Al confirmar tu cita recibirás indicaciones específicas sobre alimentos, actividad física, ropa y medicamentos. No suspendas tratamientos sin indicación médica.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde se encuentra CETRA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Estamos en Monterrey, Nuevo León, en Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Centro, 64060. Consulta el mapa y los medios de contacto en cetrapulmonar.com/contacto.',
        },
      },
    ],
  };
}

export function getSpecialistsSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      '@id': `${SITE_URL}#specialist-uriel`,
      name: 'Dr. Uriel Chavarría Martínez',
      jobTitle: 'Neumólogo · Neumólogo Intensivista',
      medicalSpecialty: 'Pulmonary Medicine',
      worksFor: { '@id': `${SITE_URL}#medical-clinic` },
      identifier: [
        { '@type': 'PropertyValue', name: 'Cédula Profesional', value: '7796468' },
        { '@type': 'PropertyValue', name: 'Cédula Profesional', value: '7757598' },
        { '@type': 'PropertyValue', name: 'Certificación', value: 'CNN-445 Consejo Nacional de Neumología' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      '@id': `${SITE_URL}#specialist-wong`,
      name: 'Dr. Manuel Wong Jaen',
      jobTitle: 'Cirujano Cardiotorácico — Especialista en Trasplante Pulmonar',
      medicalSpecialty: 'Thoracic Surgery',
      worksFor: { '@id': `${SITE_URL}#medical-clinic` },
      identifier: [
        { '@type': 'PropertyValue', name: 'Cédula Profesional', value: '10359772' },
        { '@type': 'PropertyValue', name: 'Certificación', value: '506 Consejo Nacional de Cirugía del Tórax' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      '@id': `${SITE_URL}#specialist-sergio`,
      name: 'Dr. Sergio Saúl Sánchez Salazar',
      jobTitle: 'Neumólogo',
      medicalSpecialty: 'Pulmonary Medicine',
      worksFor: { '@id': `${SITE_URL}#medical-clinic` },
      identifier: [
        { '@type': 'PropertyValue', name: 'Cédula Profesional', value: '11207367' },
        { '@type': 'PropertyValue', name: 'Certificación', value: 'CNN-1215 Consejo Nacional de Neumología' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      '@id': `${SITE_URL}#specialist-galindo`,
      name: 'Dr. Juan O. Galindo Galindo',
      jobTitle: 'Neumólogo — Doctor en Medicina',
      medicalSpecialty: 'Pulmonary Medicine',
      worksFor: { '@id': `${SITE_URL}#medical-clinic` },
      identifier: [
        { '@type': 'PropertyValue', name: 'Cédula Profesional', value: '1150280' },
        { '@type': 'PropertyValue', name: 'Cédula Profesional', value: '6433235' },
      ],
    },
  ];
}
