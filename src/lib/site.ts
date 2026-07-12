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

export function getFullFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué estudio necesito según mis síntomas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende de lo que experimentes. Si tienes tos persistente, falta de aire o sospecha de asma/EPOC, empieza por espirometría. Si ronquidos, pausas al dormir o somnolencia, es un estudio del sueño. En tu consulta inicial nuestro equipo te orienta sobre el mejor estudio para tu caso.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo me preparo para una espirometría?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No necesitas ayuno ni preparación especial. Evita ejercicio intenso 1 hora antes. Usa ropa cómoda que permita respirar libremente. Toma tus medicamentos normales, excepto broncodilatadores (inhaladores) que debes suspender 4 horas antes. La prueba dura unos 20 minutos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto dura una pletismografía?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aproximadamente 45 minutos. Es una prueba cómoda y no duele. Entras en una cámara cerrada (cabina) que mide tus volúmenes pulmonares con precisión. La mayoría de pacientes la tolera muy bien. No hay radiación ni efectos secundarios.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es DLCO y para qué sirve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DLCO (capacidad de difusión pulmonar) mide cómo tus pulmones transfieren oxígeno a la sangre. Es clave para diagnosticar fibrosis pulmonar, enfisema, problemas vasculares pulmonares y otras enfermedades. Complementa la espirometría dando un diagnóstico más completo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Para qué sirve el FeNO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El FeNO (óxido nítrico exhalado) detecta inflamación eosinofílica en tus vías aéreas, lo que ayuda a confirmar asma y a guiar el tratamiento. Es rápido, no invasivo (solo respiras en un tubo especial durante 10 segundos) y sin riesgos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo agendo un estudio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Muy fácil: contacta por WhatsApp al +52 81 1778 1017 o llama al mismo número. Nuestro equipo te pregunta sobre tus síntomas y propone el estudio ideal para ti. Generalmente te vemos dentro de 1-2 semanas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo venir sin derivación médica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, absolutamente. No necesitas una referencia de otro médico. Puedes contactarnos directamente. Aunque si tu médico ya te refirió, nos coordinaremos con él para compartir resultados y recomendaciones.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona el pago y cobertura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aceptamos la mayoría de seguros médicos privados. Si tienes seguro, verifica cobertura con nosotros. Para pacientes sin seguro, ofrecemos opciones de pago accesibles y planes. No rechazamos a nadie por falta de recursos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo me preparo para un estudio del sueño?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Polisomnografía: duermes una noche en nuestra clínica con electrodos. Come normal ese día, evita cafeína/alcohol después de las 4pm. Trae pijama cómoda. Noche dividida: mitad diagnóstico, mitad ajuste de máquina CPAP. El equipo te explica todo antes de empezar.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el programa de rehabilitación pulmonar en CETRA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es un programa integral supervisado por neumólogos y técnicos expertos. Combina entrenamiento físico aeróbico, fuerza y ejercicios respiratorios específicos para mejorar la capacidad funcional. Con el fin de brindar una atención verdaderamente holística, el programa incluye 2 consultas de nutrición clínica y 2 consultas de psicología (aplican restricciones).',
        },
      },
      {
        '@type': 'Question',
        name: '¿En qué consiste el acompañamiento de psicología y nutrición en la rehabilitación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La salud pulmonar de alta especialidad requiere un enfoque integral. Las 2 consultas de nutrición clínica ayudan a optimizar la masa muscular y adaptar la alimentación al esfuerzo metabólico respiratorio. Las 2 consultas de psicología clínica proveen herramientas cognitivo-conductuales para el manejo de la ansiedad asociada a la falta de aire (disnea) y el afrontamiento de la enfermedad pulmonar (aplican restricciones).',
        },
      },
    ],
  };
}
