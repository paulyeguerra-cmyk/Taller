import React, { useState } from 'react';
import { UserCheck, HeartHandshake, Check, Sparkles, HelpCircle, Layers, ArrowRight } from 'lucide-react';

export const PersonaVsEmpathyMatrix: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'shampoo' | 'chocolate' | 'guayusa'>('shampoo');

  const scenarios = {
    shampoo: {
      title: 'Cosmética Sólida Zero-Waste',
      personaDesc: 'Valeria, 26 años, diseñadora en Quito, soltera, usuaria activa de Instagram y TikTok, ingresos medios, preocupada por el cambio climático.',
      empathyDesc: 'Frente al botón "Comprar champú en barra $12", siente miedo de que le reseque el cabello rizado, ve empaques bonitos pero duda si el sello ecológico es real, y recuerda a su amiga diciendo que no hacen espuma.',
    },
    chocolate: {
      title: 'Pacari® Chocolate Orgánico Fino',
      personaDesc: 'Sebastián, 34 años, arquitecto LEED en Cumbayá (Quito), ingresos medio-altos, valora comercio justo y origen ecuatoriano con certificación B-Corp.',
      empathyDesc: 'En la tienda online pacari.com al armar una caja de regalo, siente orgullo por regalar lo mejor del Ecuador a sus clientes, teme que el chocolate se derrita con el sol en la entrega del courier y busca empaques de caña de azúcar sin plástico.',
    },
    guayusa: {
      title: 'Waykana® Guayusa Amazónica',
      personaDesc: 'Lucía, 29 años, ejecutiva de fintech y deportista en Samborondón (Guayaquil), paga con Deuna o tarjeta digital, busca energía natural.',
      empathyDesc: 'A las 3:00 PM con pesadez laboral, siente ansiedad de tomar café por el reflujo pero necesita concentración; duda si la infusión fría sabrá amarga y se alivia al leer que las bolsitas son de almidón de maíz biodegradable.',
    },
  };

  return (
    <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            Distinción Metodológica Clave
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Buyer Persona vs. Mapa de Empatía
          </h2>
        </div>
        <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
          Dos lentes complementarios del cliente
        </span>
      </div>

      <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
        Ambas herramientas son hermanas dentro del diseño centrado en las personas, pero responden a preguntas totalmente distintas:
      </p>

      {/* Direct Contrast Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Buyer Persona Card */}
        <div className="relative rounded-2xl p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Estructura & Demografía
              </span>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Buyer Persona
              </h3>
            </div>
          </div>

          <div className="p-3.5 bg-blue-100/70 dark:bg-blue-900/40 rounded-xl mb-4 border border-blue-200 dark:border-blue-800">
            <p className="text-sm sm:text-base font-bold text-blue-950 dark:text-blue-100">
              👉 Define quién es el cliente
            </p>
            <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 mt-1">
              (edad, profesión, canales de comunicación, intereses amplios y nivel socioeconómico).
            </p>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Pregunta central:</strong> ¿Quién es la persona y cuál es su perfil general de vida?</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Temporalidad:</strong> Estable y de mediano plazo (se actualiza anualmente).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Uso principal:</strong> Segmentación, elección de canales y pautas de contenido según David Meerman Scott.</span>
            </li>
          </ul>
        </div>

        {/* Empathy Map Card */}
        <div className="relative rounded-2xl p-6 bg-gradient-to-br from-emerald-50/80 to-teal-50/40 dark:from-emerald-950/30 dark:to-teal-950/20 border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Psicología & Emoción Viva
              </span>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Mapa de Empatía
              </h3>
            </div>
          </div>

          <div className="p-3.5 bg-emerald-100/70 dark:bg-emerald-900/40 rounded-xl mb-4 border border-emerald-200 dark:border-emerald-800">
            <p className="text-sm sm:text-base font-bold text-emerald-950 dark:text-emerald-100">
              👉 Define cómo se siente ese cliente
            </p>
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 mt-1">
              en situaciones específicas de su vida o entorno (su estado psicológico y emocional en un momento concreto).
            </p>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Pregunta central:</strong> ¿Qué siente, piensa, oye, ve, dice y hace frente a esta oferta o fricción?</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Temporalidad:</strong> Situacional y contextual (ante una compra, desempaque o reclamo).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Uso principal:</strong> Diseñar la experiencia del usuario (UX), eliminar miedos y crear empatía auténtica.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Scenario Example Selector */}
      <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Comprobación práctica: El mismo cliente bajo ambos lentes
          </h4>
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-medium">
            <button
              onClick={() => setSelectedScenario('shampoo')}
              className={`px-3 py-1 rounded-md transition-all ${
                selectedScenario === 'shampoo'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Cosmética Sólida
            </button>
            <button
              onClick={() => setSelectedScenario('chocolate')}
              className={`px-3 py-1 rounded-md transition-all ${
                selectedScenario === 'chocolate'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Pacari®
            </button>
            <button
              onClick={() => setSelectedScenario('guayusa')}
              className={`px-3 py-1 rounded-md transition-all ${
                selectedScenario === 'guayusa'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Waykana®
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-50 dark:bg-stone-800/40 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" />
              Lente Buyer Persona (Quién es):
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              {scenarios[selectedScenario].personaDesc}
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5" />
              Lente Mapa de Empatía (Cómo se siente):
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 italic">
              {scenarios[selectedScenario].empathyDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
