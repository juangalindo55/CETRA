'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { CONTACT_WHATSAPP } from '@/lib/contact';

const questions = [
  {
    id: 1,
    question: '¿Has sido diagnosticado con enfermedad pulmonar avanzada o terminal?',
    hint: 'EPOC, fibrosis pulmonar, u otra enfermedad respiratoria grave',
  },
  {
    id: 2,
    question: '¿Tu edad está entre 18 y 65 años?',
    hint: 'Pueden considerarse excepciones fuera de este rango',
  },
  {
    id: 3,
    question: '¿Tienes capacidad para comprometerte con medicamentos y seguimiento de por vida?',
    hint: 'El cumplimiento médico es fundamental para el éxito',
  },
  {
    id: 4,
    question: '¿Actualmente no tienes infecciones activas graves?',
    hint: 'Las infecciones activas pueden impedir la evaluación',
  },
];

export default function EligibilityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const yesCount = answers.filter(a => a).length;
  const percentage = (yesCount / questions.length) * 100;
  const isCandidate = yesCount >= 3;

  if (showResult) {
    return (
      <section className="py-20 w-full bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="text-6xl mb-4">{isCandidate ? '✓' : '?'}</div>
            </motion.div>

            <h3 className="font-display text-3xl font-semibold text-[#1a0a3d] mb-4">
              {isCandidate ? '¡Podrías ser candidato!' : 'Evaluación recomendada'}
            </h3>

            <div className="bg-gray-100 rounded-lg p-4 mb-8 inline-block">
              <p className="text-2xl font-semibold text-[#7C3AED]">{yesCount} de {questions.length} criterios cumplidos</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
              {isCandidate
                ? 'Basado en tus respuestas, podrías calificar para una evaluación completa. El siguiente paso es agendar una consulta con nuestros especialistas.'
                : 'Algunos criterios no se cumplen completamente. Te recomendamos que aún así agendes una consulta para una evaluación exhaustiva y personalizada.'}
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#311B92] text-white font-light tracking-wide rounded-full hover:bg-[#1a0a5e] transition-all duration-300"
              >
                Agendar Evaluación
              </a>
              <button
                onClick={handleReset}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-light rounded-full hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300"
              >
                Volver a intentar
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 w-full bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] text-[#7C3AED] uppercase mb-4">Evaluación inicial</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a0a3d] leading-tight">
            ¿Podrías ser candidato?
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-500">
              Pregunta {currentQuestion + 1} de {questions.length}
            </p>
            <p className="text-sm font-semibold text-[#7C3AED]">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#311B92]"
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#f5f3ff] rounded-2xl p-8 border border-[#e8e4f8]"
        >
          <h3 className="font-display text-2xl font-semibold text-[#1a0a3d] mb-3">
            {questions[currentQuestion].question}
          </h3>
          <p className="text-sm text-gray-600 mb-8">{questions[currentQuestion].hint}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 py-4 px-6 bg-[#7C3AED] text-white font-medium rounded-lg hover:bg-[#6D28D9] transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-0.5"
            >
              Sí
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 py-4 px-6 border-2 border-[#7C3AED] text-[#7C3AED] font-medium rounded-lg hover:bg-[#f5f3ff] transition-all duration-300"
            >
              No
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
