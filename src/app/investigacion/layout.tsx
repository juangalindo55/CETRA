import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Investigación y Vanguardia | ${SITE_NAME}`,
  description:
    'Conoce las líneas de investigación, colaboración académica y enfoque científico de CETRA en trasplante pulmonar y medicina respiratoria.',
  alternates: {
    canonical: '/investigacion',
  },
  openGraph: {
    title: `Investigación y Vanguardia | ${SITE_NAME}`,
    description:
      'Líneas de investigación, colaboración académica y enfoque científico de CETRA.',
    url: '/investigacion',
  },
};

export default function InvestigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
