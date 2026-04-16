import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Aviso de Privacidad | ${SITE_NAME}`,
  description:
    'Aviso de privacidad de CETRA para el tratamiento y protección de datos personales y sensibles relacionados con atención médica.',
  alternates: {
    canonical: '/privacidad',
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
