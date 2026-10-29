import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Target, 
  BookOpen, 
  ExternalLink, 
  Menu, 
  X, 
  FileCode, 
  Sparkles,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onToggleRawMarkdown: () => void;
  showRawMarkdown: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onToggleRawMarkdown,
  showRawMarkdown,
}) => {
  const [showObjectives, setShowObjectives] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'scott', label: 'David M. Scott & Origen' },
    { id: 'hubspot', label: 'Make My Persona' },
    { id: 'matriz', label: 'Persona vs. Empatía' },
    { id: 'casos-ecuador', label: 'Casos Reales Ecuador' },
    { id: 'dimensiones', label: '4 Dimensiones' },
    { id: 'perfiles', label: '3 Perfiles Ecuador' },
    { id: 'datos-ecuador', label: 'Datos Ecuador' },
    { id: 'canvas-empatia', label: 'Canvas de Empatía' },
    { id: 'journey', label: 'Viaje del Cliente (5 Etapas)' },
    { id: 'taller', label: 'Taller Interactivo' },
    { id: 'quiz', label: 'Autoevaluación' },
    { id: 'glosario', label: 'Glosario' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur border-b border-stone-200 dark:border-stone-800 shadow-xs">
      {/* Top Banner with Course Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 text-xs">
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
          <span className="font-extrabold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-[11px] tracking-wide">
            UDLA
          </span>
          <span className="text-stone-400">·</span>
          <span className="font-medium text-stone-700 dark:text-stone-300 hidden sm:inline">
            Comercio Electrónico Sostenible
          </span>
          <span className="text-stone-400 hidden sm:inline">·</span>
          <span className="font-bold text-stone-900 dark:text-white">
            Módulo 5: Buyer persona y viaje del cliente
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-stone-500 font-mono text-[11px]">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>35 min</span>
          </div>

          <button
            onClick={() => setShowObjectives(!showObjectives)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-[11px] transition-all cursor-pointer"
          >
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>Objetivos</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showObjectives ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={onToggleRawMarkdown}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
              showRawMarkdown
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
            }`}
            title="Ver / ocultar código Markdown original"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Código Markdown</span>
          </button>

          <a
            href={HUBSPOT_MAKE_MY_PERSONA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-[11px] transition-all"
          >
            <span>HubSpot</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Expandable Objectives Drawer */}
      {showObjectives && (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-200 dark:border-emerald-900/60 p-4 transition-all animate-in fade-in">
          <div className="max-w-7xl mx-auto space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              Al terminar este módulo podrás:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-stone-800 dark:text-stone-200">
              <div className="flex items-start gap-2 bg-white/70 dark:bg-stone-900/70 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Explicar qué es un buyer persona (David Meerman Scott) y qué dimensiones lo definen.</span>
              </div>
              <div className="flex items-start gap-2 bg-white/70 dark:bg-stone-900/70 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Leer y diseñar un mapa de empatía (diferenciando quién es vs cómo se siente).</span>
              </div>
              <div className="flex items-start gap-2 bg-white/70 dark:bg-stone-900/70 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Recorrer las cinco etapas del viaje del cliente en e-commerce sostenible.</span>
              </div>
              <div className="flex items-start gap-2 bg-white/70 dark:bg-stone-900/70 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Identificar dónde la IA (OCR, RAG) y la sostenibilidad reducen fricciones en Ecuador.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-2">
          {/* Scrollable Nav for Desktop */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 text-xs font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <span className="text-xs font-bold text-stone-700 dark:text-stone-300">
              Sección activa: <span className="text-emerald-700 dark:text-emerald-400 capitalize">{activeSection.replace('-', ' ')}</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-1.5 text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-2 rounded-lg text-left font-medium ${
                  activeSection === item.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
