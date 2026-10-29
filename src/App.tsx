import React from 'react';
import { ClassWorkshopGuide } from './components/ClassWorkshopGuide';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-amber-500 selection:text-white">
      {/* Clean Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur border-b border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
            <h1 className="text-sm sm:text-base font-black text-stone-900 dark:text-white tracking-tight">
              Taller: Buyer Persona & Mapa de Empatía
            </h1>
          </div>

          <div className="text-xs font-bold text-stone-500 dark:text-stone-400">
            Guía Práctica con Post-its y Videos
          </div>
        </div>
      </header>

      {/* Main Workshop Workspace */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <ClassWorkshopGuide />
      </main>
    </div>
  );
}
