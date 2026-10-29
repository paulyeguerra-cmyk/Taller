import React, { useState } from 'react';
import { 
  User, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  RotateCcw, 
  ExternalLink, 
  Layers, 
  Heart, 
  ShieldCheck, 
  Building 
} from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

export const InteractivePersonaBuilder: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Form State
  const [name, setName] = useState('Valeria Paredes');
  const [role, setRole] = useState('Diseñadora Gráfica & Creadora de Contenido');
  const [age, setAge] = useState('26');
  const [city, setCity] = useState('Quito (Sector La Carolina)');
  const [income, setIncome] = useState('$900 - $1.400 USD');
  const [paymentMethod, setPaymentMethod] = useState('Deuna / Tarjeta de débito digital');
  const [channels, setChannels] = useState('TikTok, Instagram, Google Búsqueda');
  const [problem, setProblem] = useState(
    'Busca productos de cuidado personal libres de plástico de un solo uso, pero teme que le resequen el cabello rizado o que la marca haga greenwashing.'
  );
  const [infoHabits, setInfoHabits] = useState(
    'Busca reseñas en video de usuarias con cabello similar en TikTok; revisa sellos de certificación y pregunta por WhatsApp cómo empacan el pedido.'
  );
  const [contentSolution, setContentSolution] = useState(
    'Guía visual paso a paso: "Cómo cuidar el cabello rizado con champú sólido sin sulfatos", con video de desempaque 100% compostable.'
  );
  const [quote, setQuote] = useState(
    '«Quiero cuidar el planeta, pero necesito que el producto realmente funcione y no me complique la vida.»'
  );

  const loadPreset = (preset: 'valeria' | 'sebastian' | 'lucia' | 'mateo') => {
    if (preset === 'valeria') {
      setName('Valeria Paredes');
      setRole('Diseñadora Gráfica & Creadora de Contenido');
      setAge('26');
      setCity('Quito (Sector La Carolina)');
      setIncome('$900 - $1.400 USD');
      setPaymentMethod('Deuna / Tarjeta de débito digital');
      setChannels('TikTok, Instagram, Google Búsqueda');
      setProblem('Teme que los productos ecológicos no funcionen bien o cobren sobreprecio injustificado.');
      setInfoHabits('Sigue influencers eco-friendly en TikTok e Instagram, lee comentarios reales.');
      setContentSolution('Video tutorial de adaptación al champú sólido y garantía de satisfacción 30 días.');
      setQuote('«Quiero cuidar el planeta, pero necesito que el producto realmente funcione y no me complique la vida.»');
    } else if (preset === 'sebastian') {
      setName('Sebastián Arteaga (Caso Pacari®)');
      setRole('Arquitecto bioclimático & Consultor LEED');
      setAge('34');
      setCity('Cumbayá, Quito');
      setIncome('$2.000 - $3.200 USD');
      setPaymentMethod('Tarjeta de crédito en línea / Factura con RUC');
      setChannels('LinkedIn, Instagram, Google Maps, Medios de gastronomía');
      setProblem('Necesita regalos corporativos y familiares de alto nivel que transmitan valores de sostenibilidad real sin plástico.');
      setInfoHabits('Investiga sellos B-Corp y comercio directo con agricultores; desconfía del marketing superficial.');
      setContentSolution('Documental breve sobre los agricultores de Napo y guía de maridaje con café de Loja.');
      setQuote('«Un regalo debe representar lo mejor de nuestra tierra y dejar un impacto positivo real.»');
    } else if (preset === 'lucia') {
      setName('Lucía Santamaría (Caso Waykana®)');
      setRole('Líder de Producto Digital & Crossfitter');
      setAge('29');
      setCity('Samborondón, Guayaquil');
      setIncome('$1.600 - $2.500 USD');
      setPaymentMethod('Deuna / Transferencia bancaria directa');
      setChannels('Instagram, TikTok, WhatsApp, Strava');
      setProblem('Necesita energía sostenida para trabajar 9 horas y entrenar, pero el café le genera acidez y las bebidas sintéticas le dan taquicardia.');
      setInfoHabits('Lee estudios de fitoterapia y nutrición en blogs de salud y busca testimonios de atletas.');
      setContentSolution('Calculadora de cafeína limpia y comparativa gráfica de L-teanina vs bebidas energéticas.');
      setQuote('«Quiero energía limpia de la Amazonía ecuatoriana que respete mi cuerpo y la naturaleza.»');
    } else if (preset === 'mateo') {
      setName('Mateo Vásconez (Caso Sweet & Coffee®)');
      setRole('Consultor de Estrategia Digital');
      setAge('27');
      setCity('Quito / Guayaquil');
      setIncome('$1.100 - $1.800 USD');
      setPaymentMethod('App Sweet & Coffee Club / Deuna');
      setChannels('Instagram, App móvil, Spotify, Google Maps');
      setProblem('Busca un espacio agradable con buen café e internet para trabajar sin perder tiempo en filas en horas pico.');
      setInfoHabits('Notificaciones de la app con promociones matutinas y recomendaciones de amigos.');
      setContentSolution('Función de pedido anticipado en 1 clic y contenido sobre los cafetales de Loja.');
      setQuote('«Mi tiempo vale oro; si puedo pedir mi café lojano desde el celular y retirarlo listo, ya ganaron mi lealtad.»');
    }
  };

  const copyToClipboard = () => {
    const text = `FICHA DE BUYER PERSONA (Enfoque David Meerman Scott)
Nombre: ${name}
Rol/Profesión: ${role}
Edad: ${age} años
Ubicación: ${city}
Nivel de Ingresos: ${income}
Medio de Pago Habitual: ${paymentMethod}
Canales de Información: ${channels}
Cita Textual: "${quote}"

PROBLEMAS ESPECÍFICOS (Scott):
${problem}

HÁBITOS DE CONSUMO DE INFORMACIÓN (Scott):
${infoHabits}

SOLUCIÓN DE CONTENIDO INBOUND (Scott):
${contentSolution}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Taller Práctico Interactivo
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Generador de Ficha de Buyer Persona
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Construye una ficha completa con los 3 bloques metodológicos de HubSpot y el enfoque de contenidos de David Meerman Scott.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={HUBSPOT_MAKE_MY_PERSONA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold transition-all shadow-xs"
          >
            <span>HubSpot Make My Persona</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 text-xs font-semibold transition-all border border-stone-200 dark:border-stone-700"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 dark:text-emerald-400">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Ficha</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-800">
        <span className="text-xs font-bold text-stone-600 dark:text-stone-300 mr-2 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          Cargar Caso Ecuatoriano:
        </span>
        <button
          onClick={() => loadPreset('valeria')}
          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-stone-700 hover:bg-stone-100 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-600 transition-all"
        >
          Valeria (Zero-Waste)
        </button>
        <button
          onClick={() => loadPreset('sebastian')}
          className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-all"
        >
          Sebastián (Pacari®)
        </button>
        <button
          onClick={() => loadPreset('lucia')}
          className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 transition-all"
        >
          Lucía (Waykana®)
        </button>
        <button
          onClick={() => loadPreset('mateo')}
          className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 transition-all"
        >
          Mateo (Sweet & Coffee®)
        </button>
      </div>

      {/* Form Fields & Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
                Nombre de la Persona
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
                Edad y Rol Familiar
              </label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Ej. 26 años, soltera"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
                Ciudad / Ubicación en Ecuador
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
                Profesión y Ocupación
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
                Nivel de Ingresos Mensuales
              </label>
              <input
                type="text"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
                Medio de Pago Preferido (Ecuador)
              </label>
              <input
                type="text"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
              Canales de Información y Redes
            </label>
            <input
              type="text"
              value={channels}
              onChange={(e) => setChannels(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Scott Focus Inputs */}
          <div>
            <label className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1 block flex items-center justify-between">
              <span>Problema Específico & Obstáculos (David Meerman Scott)</span>
              <span className="text-[10px] text-stone-500">¿Qué dolor o reto no resuelto tiene?</span>
            </label>
            <textarea
              rows={2}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-amber-300 dark:border-amber-900 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-1 block flex items-center justify-between">
              <span>Hábitos de Consumo de Información (David Meerman Scott)</span>
              <span className="text-[10px] text-stone-500">¿Dónde y cómo busca respuestas?</span>
            </label>
            <textarea
              rows={2}
              value={infoHabits}
              onChange={(e) => setInfoHabits(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-blue-300 dark:border-blue-900 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1 block flex items-center justify-between">
              <span>Solución de Contenido Inbound (David Meerman Scott)</span>
              <span className="text-[10px] text-stone-500">¿Qué recurso resolverá su dolor?</span>
            </label>
            <textarea
              rows={2}
              value={contentSolution}
              onChange={(e) => setContentSolution(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-emerald-300 dark:border-emerald-900 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 block">
              Cita Textual Representativa
            </label>
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 outline-none italic"
            />
          </div>
        </div>

        {/* Live Visual Card Preview */}
        <div className="lg:col-span-5 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-800/80 dark:to-stone-900/80 rounded-2xl p-5 sm:p-6 border-2 border-stone-300 dark:border-stone-700 space-y-4 shadow-sm self-start">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-700">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Vista Previa de la Ficha
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              Metodología HubSpot + Scott
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              {name.charAt(0)}
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 dark:text-stone-100 text-base">
                {name || 'Nombre del Cliente'}
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                {role || 'Profesión'} · {age || 'Edad'} años
              </p>
            </div>
          </div>

          <div className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-stone-500">Ubicación:</span>
              <span className="font-semibold text-stone-800 dark:text-stone-200">{city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Ingresos:</span>
              <span className="font-semibold text-stone-800 dark:text-stone-200">{income}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Pago habitual:</span>
              <span className="font-semibold text-stone-800 dark:text-stone-200">{paymentMethod}</span>
            </div>
            <div className="pt-1.5 border-t border-stone-100 dark:border-stone-700">
              <span className="text-stone-500 block mb-1">Canales:</span>
              <span className="font-medium text-stone-700 dark:text-stone-300">{channels}</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1 text-xs">
            <span className="font-bold text-amber-800 dark:text-amber-300 block">
              Problema a Resolver (Scott):
            </span>
            <p className="text-stone-700 dark:text-stone-300">{problem}</p>
          </div>

          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1 text-xs">
            <span className="font-bold text-blue-800 dark:text-blue-300 block">
              Hábitos de Información (Scott):
            </span>
            <p className="text-stone-700 dark:text-stone-300">{infoHabits}</p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1 text-xs">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 block">
              Solución de Contenido Inbound:
            </span>
            <p className="text-stone-700 dark:text-stone-300">{contentSolution}</p>
          </div>

          <blockquote className="p-3 bg-white/70 dark:bg-stone-800/70 rounded-xl border-l-3 border-blue-600 text-xs italic text-stone-700 dark:text-stone-300">
            «{quote}»
          </blockquote>
        </div>
      </div>
    </section>
  );
};
