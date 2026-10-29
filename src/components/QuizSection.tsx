import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/moduleFiveData';

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = answeredCount === QUIZ_QUESTIONS.length;
  const score = calculateScore();

  return (
    <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            Autoevaluación de Aprendizaje UDLA
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Cuestionario de Validación: Módulo 5
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Valida tu dominio sobre David Meerman Scott, la distinción entre Buyer Persona y Mapa de Empatía, y los casos ecuatorianos.
          </p>
        </div>

        {submitted && (
          <div className="flex items-center gap-3 bg-stone-100 dark:bg-stone-800 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700">
            <div className="text-right">
              <span className="text-xs text-stone-500 block">Puntaje obtenido</span>
              <span className="text-lg font-extrabold text-stone-900 dark:text-white">
                {score} / {QUIZ_QUESTIONS.length}
              </span>
            </div>
            <button
              onClick={resetQuiz}
              className="p-2 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:bg-stone-300"
              title="Reiniciar cuestionario"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6 pt-2">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/30 dark:bg-emerald-950/20 dark:border-emerald-900/60'
                    : 'border-rose-300 bg-rose-50/30 dark:bg-rose-950/20 dark:border-rose-900/60'
                  : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/30'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                  {q.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2 pl-9">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userChoice === optIdx;
                  const isThisCorrect = optIdx === q.correctIndex;

                  let optionStyle = 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:border-blue-400';

                  if (submitted) {
                    if (isThisCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-100 font-semibold';
                    } else if (isSelected && !isThisCorrect) {
                      optionStyle = 'border-rose-400 bg-rose-100/70 dark:bg-rose-900/50 text-rose-900 dark:text-rose-100';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold ring-1 ring-blue-500';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation upon submit */}
              {submitted && (
                <div className="mt-4 ml-9 p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600" />
                    )}
                    <span>{isCorrect ? '¡Respuesta Correcta!' : 'Retroalimentación Pedagógica:'}</span>
                  </div>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      {!submitted && (
        <div className="flex justify-end pt-4 border-t border-stone-200 dark:border-stone-800">
          <button
            onClick={() => setSubmitted(true)}
            disabled={!isComplete}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
              isComplete
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                : 'bg-stone-300 dark:bg-stone-800 text-stone-500 cursor-not-allowed'
            }`}
          >
            {isComplete ? 'Comprobar Respuestas' : `Responde las ${QUIZ_QUESTIONS.length - answeredCount} preguntas pendientes`}
          </button>
        </div>
      )}
    </section>
  );
};
