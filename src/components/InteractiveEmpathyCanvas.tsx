import React, { useState } from 'react';
import { 
  Brain, 
  Eye, 
  Ear, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Sparkles, 
  HeartHandshake, 
  RotateCcw,
  Layers
} from 'lucide-react';
import { EMPATHY_QUADRANTS } from '../data/moduleFiveData';

export const InteractiveEmpathyCanvas: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'valeria' | 'pacari' | 'waykana'>('valeria');
  const [customNotes, setCustomNotes] = useState<{ [quadrantId: string]: string[] }>({});
  const [newNoteText, setNewNoteText] = useState<{ [quadrantId: string]: string }>({});

  const addNote = (quadrantId: string) => {
    const text = newNoteText[quadrantId]?.trim();
    if (!text) return;
    setCustomNotes((prev) => ({
      ...prev,
      [quadrantId]: [...(prev[quadrantId] || []), text],
    }));
    setNewNoteText((prev) => ({ ...prev, [quadrantId]: '' }));
  };

  const removeNote = (quadrantId: string, index: number) => {
    setCustomNotes((prev) => ({
      ...prev,
      [quadrantId]: prev[quadrantId].filter((_, i) => i !== index),
    }));
  };

  const getQuadrantNotes = (q: typeof EMPATHY_QUADRANTS[0]) => {
    let preset: string[] = [];
    if (selectedCase === 'valeria') preset = q.valeriaExample;
    else if (selectedCase === 'pacari') preset = q.pacariExample;
    else if (selectedCase === 'waykana') preset = q.waykanaExample;

    const extras = customNotes[q.id] || [];
    return [...preset, ...extras];
  };

  return (
    <section className="bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            Lienzo de Design Thinking
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Canvas Interactivo: Mapa de Empatía
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Explora las 6 dimensiones psicológicas y emocionales del cliente. Selecciona un caso de estudio real ecuatoriano o añade tus propias notas adhesivas.
          </p>
        </div>

        {/* Case Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
          <button
            onClick={() => setSelectedCase('valeria')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCase === 'valeria'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Valeria (Cosmética Sólida)
          </button>
          <button
            onClick={() => setSelectedCase('pacari')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCase === 'pacari'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Sebastián (Pacari® Quito)
          </button>
          <button
            onClick={() => setSelectedCase('waykana')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCase === 'waykana'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Lucía (Waykana® GYE)
          </button>
        </div>
      </div>

      {/* Visual Canvas Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {EMPATHY_QUADRANTS.map((quadrant) => {
          const notes = getQuadrantNotes(quadrant);
          const isPainsOrGains = quadrant.id === 'dolores-esfuerzos' || quadrant.id === 'ganancias-resultados';

          return (
            <div
              key={quadrant.id}
              className={`rounded-2xl p-5 border transition-all flex flex-col justify-between bg-white dark:bg-stone-900 shadow-xs ${
                isPainsOrGains
                  ? quadrant.id === 'dolores-esfuerzos'
                    ? 'border-rose-300 dark:border-rose-900/60 lg:col-span-1 md:col-span-1'
                    : 'border-emerald-300 dark:border-emerald-900/60 lg:col-span-2 md:col-span-1'
                  : 'border-stone-200 dark:border-stone-800'
              }`}
            >
              <div>
                {/* Quadrant Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      {quadrant.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                      {quadrant.guidingQuestion}
                    </p>
                  </div>
                </div>

                {/* Sticky Notes List */}
                <div className="space-y-2 mb-4">
                  {notes.map((note, index) => {
                    const isExtra = index >= (selectedCase === 'valeria' ? quadrant.valeriaExample.length : selectedCase === 'pacari' ? quadrant.pacariExample.length : quadrant.waykanaExample.length);
                    return (
                      <div
                        key={index}
                        className={`group relative p-2.5 rounded-xl text-xs leading-relaxed transition-all flex items-start justify-between gap-2 ${
                          isExtra
                            ? 'bg-amber-100/80 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 border border-amber-300'
                            : quadrant.id === 'dolores-esfuerzos'
                            ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-900/40'
                            : quadrant.id === 'ganancias-resultados'
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900/40'
                            : 'bg-stone-50 dark:bg-stone-800/60 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700'
                        }`}
                      >
                        <span>{note}</span>
                        {isExtra && (
                          <button
                            onClick={() => removeNote(quadrant.id, index - (selectedCase === 'valeria' ? quadrant.valeriaExample.length : selectedCase === 'pacari' ? quadrant.pacariExample.length : quadrant.waykanaExample.length))}
                            className="opacity-0 group-hover:opacity-100 text-stone-400 hover:text-rose-600 transition-opacity p-0.5"
                            title="Eliminar nota"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add Custom Note Input */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center gap-1.5">
                <input
                  type="text"
                  placeholder="Añadir nota observada..."
                  value={newNoteText[quadrant.id] || ''}
                  onChange={(e) =>
                    setNewNoteText({ ...newNoteText, [quadrant.id]: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') addNote(quadrant.id);
                  }}
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  onClick={() => addNote(quadrant.id)}
                  className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shrink-0"
                  title="Agregar nota"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
