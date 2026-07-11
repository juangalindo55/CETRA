import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Especialistas`,
  description:
    'Conoce al equipo médico y técnico de CETRA, sus perfiles, experiencia y enfoque multidisciplinario en salud respiratoria avanzada.',
  alternates: {
    canonical: '/especialistas',
  },
  openGraph: {
    title: `Especialistas | ${SITE_NAME}`,
    description:
      'Equipo médico y técnico del Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada.',
    url: '/especialistas',
  },
};

export default function SpecialistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
