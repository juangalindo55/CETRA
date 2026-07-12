import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import EligibilityQuiz from '@/components/sections/EligibilityQuiz';

export const metadata: Metadata = {
  title: 'Quiz de Elegibilidad de Trasplante Pulmonar',
  description:
    'Realiza nuestro breve quiz de orientación para entender si eres un posible candidato para evaluación de trasplante pulmonar en CETRA Monterrey.',
  alternates: {
    canonical: `${SITE_URL}/revision/quiz-elegibilidad`,
  },
  openGraph: {
    title: 'Quiz de Elegibilidad de Trasplante Pulmonar | CETRA',
    description:
      'Realiza nuestro breve quiz de orientación para entender si eres un posible candidato para evaluación de trasplante pulmonar en CETRA Monterrey.',
    url: `${SITE_URL}/revision/quiz-elegibilidad`,
  },
};

export default function QuizElegibilidadPage() {
  return (
    <div className="w-full pt-20 bg-white">
      <EligibilityQuiz />
    </div>
  );
}
