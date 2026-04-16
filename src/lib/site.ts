import { CETRA_LOCATION, CONTACT_EMAIL, CONTACT_PHONE_TEL } from '@/lib/contact';

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
        openingHours: ['Mo-Fr 09:00-19:00'],
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
