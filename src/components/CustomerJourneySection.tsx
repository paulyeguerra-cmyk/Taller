import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  AlertCircle, 
  Sparkles, 
  Package, 
  CreditCard, 
  Search, 
  Heart, 
  Bot, 
  Cpu,
  ArrowRight,
  TrendingUp,
  Smile
} from 'lucide-react';
import { JOURNEY_STAGES, JourneyStage } from '../data/moduleFiveData';

export const CustomerJourneySection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage = JOURNEY_STAGES.find((s) => s.id === activeStageId) || JOURNEY_STAGES[0];

  return (
    <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            Recorrido Vivencial del Comprador
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            El Viaje del Cliente en 5 Etapas de E-Commerce Sostenible
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Desde la curiosidad inicial hasta el desempaque ecológico y la recomendación orgullosa. Descubre dónde la IA y la sostenibilidad eliminan fricciones.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
          Metodología HubSpot Adaptada a E-Commerce
        </span>
      </div>

      {/* 5 Stepper Progress Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
        {JOURNEY_STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/30'
                  : 'bg-stone-50 dark:bg-stone-800/40 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span>0{stage.id}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
                  }`}
                >
                  {stage.mindset}
                </span>
              </div>
              <div className="text-xs font-semibold truncate">{stage.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Details (HubSpot Framework: Acciones, Experiencia, Touchpoints, Fricciones, Soluciones IA) */}
      <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-700">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Etapa {activeStage.id} de 5 · Estado mental: {activeStage.mindset}
            </span>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">
              {activeStage.name}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md">
            {activeStage.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Actions */}
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
            <span className="text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5 uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Acciones del Cliente
            </span>
            <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
              {activeStage.clientActions.map((act, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-blue-500">•</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Touchpoints */}
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
            <span className="text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-purple-600" />
              Puntos de Contacto (Touchpoints)
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeStage.touchpoints.map((tp, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-[11px] font-medium border border-purple-200 dark:border-purple-800"
                >
                  {tp}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 pt-2 italic">
              Vivencia: {activeStage.customerExperience}
            </p>
          </div>

          {/* Frictions */}
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/40 space-y-2">
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5 uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              Puntos de Dolor & Fricciones
            </span>
            <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
              {activeStage.typicalFrictions.map((fric, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-500">•</span>
                  <span>{fric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & Eco Solutions */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-300 dark:border-emerald-800 space-y-2">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5 text-emerald-600" />
              Solución IA + Sostenibilidad
            </span>
            <ul className="space-y-1.5 text-xs text-stone-800 dark:text-stone-200">
              {activeStage.aiAndEcoSolutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlight for Packaging in Stage 4 */}
        {activeStage.id === 4 && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 flex items-center gap-3">
            <Package className="w-8 h-8 text-emerald-600 shrink-0" />
            <div className="text-xs text-emerald-950 dark:text-emerald-100">
              <span className="font-bold block text-sm">Empaque ecológico con caja de caña de azúcar y papel semilla</span>
              En el e-commerce ecuatoriano sostenible (como Pacari®), el desempaque sustituye el plástico de burbujas por cajas de residuo de caña de azúcar y tarjetas con semillas de manzanilla o albahaca que el cliente puede plantar en una maceta.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
