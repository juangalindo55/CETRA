import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Términos y Condiciones`,
  description:
    'Términos de uso del sitio web de CETRA, alcance informativo del contenido y condiciones generales de navegación.',
  alternates: {
    canonical: '/terminos',
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
