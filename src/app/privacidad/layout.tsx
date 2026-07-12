import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description:
    'Aviso de privacidad de CETRA conforme a la Ley Federal de Protección de Datos Personales (LFPDPPP). Conoce cómo tratamos tus datos personales y de salud.',
  alternates: { canonical: `${SITE_URL}/privacidad` },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Aviso de Privacidad | CETRA',
    description:
      'Política de privacidad y tratamiento de datos personales de CETRA, centro de medicina respiratoria avanzada en Monterrey.',
    url: `${SITE_URL}/privacidad`,
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
