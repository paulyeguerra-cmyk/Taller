import React, { useState } from 'react';
import { 
  Puzzle, 
  UserCheck, 
  CreditCard, 
  AlertCircle, 
  Leaf, 
  HelpCircle, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DIMENSIONS, DimensionItem } from '../data/moduleFiveData';

export const FourDimensionsSection: React.FC = () => {
  const [selectedDimensionId, setSelectedDimensionId] = useState<string>('contexto');

  const selectedDim = DIMENSIONS.find((d) => d.id === selectedDimensionId) || DIMENSIONS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Puzzle className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Puzzle className="w-3.5 h-3.5" />
            Estructura de la Ficha
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Las Cuatro Dimensiones de la Ficha
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Toca cada dimensión para ver su pregunta guía, sus puntos de comprobación y su contexto específico en Ecuador.
          </p>
        </div>

        <span className="text-xs text-stone-500 font-mono">
          4 Dimensiones Integradas
        </span>
      </div>

      {/* 4 Dimension Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {DIMENSIONS.map((dim) => {
          const isSelected = dim.id === selectedDimensionId;
          return (
            <button
              key={dim.id}
              onClick={() => setSelectedDimensionId(dim.id)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/40 shadow-sm ring-2 ring-emerald-500/20'
                  : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/30 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-400'}`}>
                  {dim.number}
                </span>
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-emerald-600 text-white' : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300'}`}>
                  {getIcon(dim.icon)}
                </div>
              </div>
              <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-emerald-950 dark:text-emerald-100' : 'text-stone-800 dark:text-stone-200'}`}>
                {dim.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Dimension Detail Card */}
      <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Dimensión {selectedDim.number}
            </span>
            <span className="text-stone-400">·</span>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              {selectedDim.title}
            </h3>
          </div>
        </div>

        {/* Guiding Question Callout */}
        <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
            Pregunta Guía:
          </span>
          <p className="text-base font-semibold text-stone-900 dark:text-stone-100 italic">
            «{selectedDim.guidingQuestion}»
          </p>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-2">
            {selectedDim.description}
          </p>
        </div>

        {/* Real Ecuadorian Context & Checkpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
            <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Contexto en Ecuador:
            </span>
            <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              {selectedDim.ecuadorContext}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Puntos de Verificación de Datos:
            </span>
            <ul className="space-y-1.5 text-xs text-stone-800 dark:text-stone-200">
              {selectedDim.checkpoints.map((cp, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{cp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
