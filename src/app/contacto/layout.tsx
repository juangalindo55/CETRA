import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacto, ubicación, horario y medios de atención de CETRA en Monterrey. Agenda una cita, valida tu cobertura o solicita orientación.',
  alternates: { canonical: `${SITE_URL}/contacto` },
  openGraph: {
    title: `Contacto | ${SITE_NAME}`,
    description:
      'Ubicación, horarios y medios de contacto del Centro de Trasplante Pulmonar y Medicina Respiratoria Avanzada en Monterrey.',
    url: `${SITE_URL}/contacto`,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
