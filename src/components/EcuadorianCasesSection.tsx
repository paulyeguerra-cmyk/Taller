import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Heart, 
  FileText, 
  TrendingUp, 
  Package, 
  Leaf,
  Brain,
  CreditCard,
  PhoneCall
} from 'lucide-react';
import { ECUADORIAN_CASES, RealEcuadorianCase } from '../data/moduleFiveData';

export const EcuadorianCasesSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>('pacari');
  const [activeTab, setActiveTab] = useState<'persona' | 'empathy' | 'scott' | 'sustainability'>('persona');

  const activeCase = ECUADORIAN_CASES.find((c) => c.id === activeCaseId) || ECUADORIAN_CASES[0];

  return (
    <section className="bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
      {/* Section Header with Verifiability Callout */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Casos de Negocio Ecuatoriano 100% Reales y Verificados
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Casos de Estudio: Ecuador en el Mundo Real
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            A diferencia de marcas inventadas o ficticias sin existencia legal, estos casos analizan empresas formalmente constituidas en Ecuador, 
            líderes en comercio electrónico sostenible y modelos de cliente reconocidos en la academia (UDLA) e industria.
          </p>
        </div>

        {/* Case Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-2 bg-stone-200/70 dark:bg-stone-800 p-1.5 rounded-xl">
          {ECUADORIAN_CASES.map((c) => {
            const isSelected = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-300 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{c.brandName}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-mono">
                  {c.foundationYear}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Details Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden shadow-sm">
        {/* Top Case Hero */}
        <div className="p-6 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>RUC / Razón Social: {activeCase.legalEntity}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {activeCase.brandName}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl">
                {activeCase.shortDescription}
              </p>
            </div>

            <a
              href={activeCase.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all shrink-0 self-start sm:self-center"
            >
              <span>Ver sitio oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Meta Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/10 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fundación: <strong>{activeCase.foundationYear}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fundadores: <strong>{activeCase.founder}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sede: <strong>{activeCase.headquarters}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certificación: <strong>Empresa B (B Corp)</strong></span>
            </div>
          </div>

          {/* Verified Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {activeCase.verifiedBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Inner Subtabs for Case Study */}
        <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 px-6 py-2.5 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('persona')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'persona'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            1. Buyer Persona Ecuatoriano
          </button>

          <button
            onClick={() => setActiveTab('empathy')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'empathy'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            2. Mapa de Empatía en Situación Real
          </button>

          <button
            onClick={() => setActiveTab('scott')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'scott'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            3. Estrategia de Contenidos (David M. Scott)
          </button>

          <button
            onClick={() => setActiveTab('sustainability')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'sustainability'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            4. E-commerce, IA & Empaques
          </button>
        </div>

        {/* Tab 1: Buyer Persona Details */}
        {activeTab === 'persona' && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Persona Summary Card */}
              <div className="md:col-span-5 bg-stone-50 dark:bg-stone-800/40 rounded-xl p-5 border border-stone-200 dark:border-stone-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    {activeCase.buyerPersona.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                      {activeCase.buyerPersona.name}
                    </h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {activeCase.buyerPersona.archetype}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-200 dark:border-stone-700">
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">Edad:</span>
                    <span>{activeCase.buyerPersona.age} años</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">Ubicación:</span>
                    <span>{activeCase.buyerPersona.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">Ocupación:</span>
                    <span>{activeCase.buyerPersona.jobTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">Nivel de ingresos:</span>
                    <span>{activeCase.buyerPersona.socioEconomic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">Pago habitual:</span>
                    <span>{activeCase.buyerPersona.paymentMethod}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-stone-700">
                  <span className="text-[11px] font-bold text-stone-700 dark:text-stone-300 block mb-1">
                    Canales de Información:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {activeCase.buyerPersona.channelsAndMedia.map((ch, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-[10px] font-medium border border-blue-200 dark:border-blue-800">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Persona Needs & Scott's angle */}
              <div className="md:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Problema específico del comprador (Scott)
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    {activeCase.buyerPersona.coreProblem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Hábitos de consumo de información (Scott)
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    {activeCase.buyerPersona.informationHabitsScott}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Ángulo de contenido que resuelve su necesidad
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    {activeCase.buyerPersona.scottContentAngle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Empathy Map */}
        {activeTab === 'empathy' && (
          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                  Mapa de Empatía: Vivencia real de compra en {activeCase.brandName}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Exploración de su estado psicológico y emocional ante la decisión de compra en Ecuador.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                6 Cuadrantes Design Thinking
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Thinks & Feels */}
              <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 space-y-2">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-300 block">
                  🧠 ¿Qué piensa y siente?
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {activeCase.empathyMap.thinksAndFeels.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sees */}
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 space-y-2">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-300 block">
                  👀 ¿Qué ve en el entorno?
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {activeCase.empathyMap.sees.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hears */}
              <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 space-y-2">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">
                  👂 ¿Qué oye de otros?
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {activeCase.empathyMap.hears.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Says & Does */}
              <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/30 space-y-2">
                <span className="text-xs font-bold text-purple-800 dark:text-purple-300 block">
                  🗣️ ¿Qué dice y hace?
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {activeCase.empathyMap.saysAndDoes.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-purple-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pains */}
              <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 space-y-2">
                <span className="text-xs font-bold text-rose-800 dark:text-rose-300 block">
                  ⚡ Dolores y Miedos (Pains)
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {activeCase.empathyMap.pains.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gains */}
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/30 space-y-2">
                <span className="text-xs font-bold text-teal-800 dark:text-teal-300 block">
                  🌟 Ganancias y Deseos (Gains)
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {activeCase.empathyMap.gains.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-teal-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Scott Strategy */}
        {activeTab === 'scott' && (
          <div className="p-6 space-y-4">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400">
                <Sparkles className="w-4 h-4" />
                Regla de Oro de David Meerman Scott Aplicada
              </div>
              <p className="text-sm font-medium text-stone-800 dark:text-stone-200 italic">
                «{activeCase.scottStrategy.rule}»
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1.5">
                <span className="text-xs text-stone-500 dark:text-stone-400 font-semibold uppercase block">
                  Formato de Contenido Inbound
                </span>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {activeCase.scottStrategy.contentFormat}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1.5">
                <span className="text-xs text-stone-500 dark:text-stone-400 font-semibold uppercase block">
                  Ejemplo de Título / Tema de Contenido
                </span>
                <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {activeCase.scottStrategy.exampleTitle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1.5">
                <span className="text-xs text-stone-500 dark:text-stone-400 font-semibold uppercase block">
                  Llamada a la Acción (CTA) Transparente
                </span>
                <p className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">
                  {activeCase.scottStrategy.callToAction}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Sustainability & Tech */}
        {activeTab === 'sustainability' && (
          <div className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4" />
                  Credenciales de Sostenibilidad Reales
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  {activeCase.sustainabilityCredentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                  <Package className="w-4 h-4" />
                  Innovación en Empaque y Modelo E-Commerce
                </h5>
                <div className="p-3.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <p><strong>Innovación de Empaque:</strong> {activeCase.packagingInnovation}</p>
                  <p><strong>Logística & E-Commerce:</strong> {activeCase.eCommerceModel}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
