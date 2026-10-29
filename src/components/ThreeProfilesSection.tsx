import React, { useState } from 'react';
import { Users, AlertTriangle, ShieldAlert, Heart, CreditCard, DollarSign, MapPin, Smartphone } from 'lucide-react';
import { BUYER_PROFILES, BuyerProfile } from '../data/moduleFiveData';

export const ThreeProfilesSection: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState<string>('valeria');

  const activeProfile = BUYER_PROFILES.find((p) => p.id === activeProfileId) || BUYER_PROFILES[0];

  return (
    <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            Segmentación Vivencial en Ecuador
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Tres Perfiles de Comprador en Ecuador
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            <strong>Mismo producto, tres clientes distintos:</strong> cambian el canal, el medio de pago, el ticket y lo que consideran un buen servicio.
          </p>
        </div>

        <span className="text-xs text-stone-500 font-mono">
          Quito · Guayaquil · Cuenca
        </span>
      </div>

      {/* Profile Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {BUYER_PROFILES.map((p) => {
          const isSelected = p.id === activeProfileId;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProfileId(p.id)}
              className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3.5 ${
                isSelected
                  ? 'border-purple-600 bg-purple-50/70 dark:bg-purple-950/40 shadow-sm ring-2 ring-purple-500/20'
                  : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/30 hover:border-stone-300'
              }`}
            >
              <img
                src={p.avatar}
                alt={p.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-stone-700 shadow-xs shrink-0"
              />
              <div className="min-w-0">
                <span className="text-xs font-bold text-stone-900 dark:text-stone-100 block truncate">
                  {p.name}
                </span>
                <span className="text-[11px] text-purple-700 dark:text-purple-300 block truncate font-medium">
                  {p.archetype}
                </span>
                <span className="text-[10px] text-stone-400 block truncate">
                  {p.city}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Profile Detailed Sheet */}
      <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-3">
            <img
              src={activeProfile.avatar}
              alt={activeProfile.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-sm"
            />
            <div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                {activeProfile.name}
              </h3>
              <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-semibold">
                {activeProfile.archetype} · {activeProfile.age} años
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              {activeProfile.city}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-stone-500" />
              {activeProfile.paymentPreference}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              Ticket: {activeProfile.averageTicket}
            </span>
          </div>
        </div>

        {/* Habits, Pains, Fears Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Habits */}
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
            <span className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider block">
              📱 Hábitos de Compra & Canales
            </span>
            <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
              {activeProfile.habits.map((h, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-purple-600">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pains */}
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/40 space-y-2">
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider block flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              Dolores y Fricciones (Pains)
            </span>
            <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
              {activeProfile.pains.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-500">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fears & Eco Motivation */}
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-amber-200 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" />
              Miedos & Motivación Ecológica
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-300">
              <strong>Miedos:</strong> {activeProfile.fears.join(' ')}
            </p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold pt-1">
              <strong>Motivación verde:</strong> {activeProfile.ecoMotivation}
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border-l-4 border-purple-600 text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200 italic">
          {activeProfile.quote}
        </blockquote>
      </div>
    </section>
  );
};
