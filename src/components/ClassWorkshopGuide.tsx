import React, { useState } from 'react';
import { 
  Play, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Copy, 
  Check, 
  Lightbulb, 
  User, 
  Heart, 
  Compass, 
  Sparkles,
  ShoppingBag,
  Eye,
  Ear,
  Brain,
  MessageSquare,
  AlertCircle,
  Award,
  Share2
} from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

export const ClassWorkshopGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyerPersona' | 'empathyMap' | 'casosEcuador' | 'journey'>('buyerPersona');
  const [copied, setCopied] = useState(false);

  // Post-its for Buyer Persona Section
  const [personaNotes, setPersonaNotes] = useState({
    demografia: [
      'Nombre: Sebastián Arteaga (34 años)',
      'Vive en Quito (Sector Cumbayá)',
      'Ocupación: Arquitecto sustentable',
      'Ingresos: $2.200 USD mensuales',
      'Paga con Deuna y tarjeta en línea',
    ],
    necesidades: [
      'Dolor Interno: Siente culpa al ver tanto plástico de un solo uso en regalos',
      'Dolor Externo: No encuentra opciones gourmet locales con empaque biodegradable',
      'Dolor Filosófico: Desea que su dinero apoye a comunidades agrícolas ecuatorianas',
    ],
    solucionScott: [
      'Regla de Scott: No enviar spam masivo, resolver su duda con contenido útil',
      'Canales: Lee en Google, blogs gastronómicos e Instagram',
      'Contenido Inbound: Video de 60s sobre agricultores de Napo y guía de maridaje',
    ],
  });

  // Post-its for Empathy Map Section
  const [empathyPostIts, setEmpathyPostIts] = useState({
    piensaSiente: [
      '«Quiero regalar algo de orgullo del Ecuador que sea 100% orgánico»',
      '«Me preocupa que el chocolate se derrita con el calor durante el envío»',
    ],
    ve: [
      'Empaques elegantes de caña de azúcar sin plástico',
      'Fotos en redes sociales de familias cacaoteras en Napo y Vinces',
    ],
    oye: [
      'A chefs internacionales diciendo que el cacao ecuatoriano es el mejor',
      'Amigos recomendando Pacari como el mejor souvenir del país',
    ],
    diceHace: [
      'Pide por la página web oficial y solicita factura con RUC',
      'Sube fotos del desempaque ecológico a sus historias de Instagram',
    ],
    dolores: [
      'Costo de flete alto si solo compra 2 o 3 barras para consumo personal',
      'Temor a caer en greenwashing de marcas que fingen ser verdes',
    ],
    ganancias: [
      'La felicitación sincera de quien recibe la caja de regalo',
      'Tranquilidad de saber que el empaque es 100% compostable',
    ],
  });

  // New Post-it input state
  const [newPostItText, setNewPostItText] = useState('');
  const [newPostItCategory, setNewPostItCategory] = useState('piensaSiente');
  const [newPostItColor, setNewPostItColor] = useState('yellow');

  // Customer Journey Emotional Curve state
  const [journeyPoints, setJourneyPoints] = useState<{ [stage: string]: 'alta' | 'media' | 'baja' }>({
    reconocimiento: 'media',
    consideracion: 'alta',
    decision: 'alta',
    retencion: 'alta',
    deleitar: 'alta',
  });

  const addEmpathyPostIt = () => {
    if (!newPostItText.trim()) return;
    setEmpathyPostIts((prev) => ({
      ...prev,
      [newPostItCategory]: [...(prev[newPostItCategory as keyof typeof prev] || []), newPostItText.trim()],
    }));
    setNewPostItText('');
  };

  const removeEmpathyPostIt = (category: string, index: number) => {
    setEmpathyPostIts((prev) => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].filter((_, i) => i !== index),
    }));
  };

  const copyWorkshopSummary = () => {
    const text = `TALLER PRÁCTICO: BUYER PERSONA & MAPA DE EMPATÍA
===================================================
1. BUYER PERSONA (ENFOQUE DAVID MEERMAN SCOTT):
"Un buyer persona es un perfil detallado de un comprador que representa a un grupo objetivo específico. Según Scott, las empresas no deben lanzar mensajes masivos, sino entender los problemas específicos, las metas y los hábitos de consumo de información de estos perfiles para crear estrategias de contenidos que resuelvan sus necesidades particulares."

2. DISTINCIÓN FUNDAMENTAL:
- Buyer Persona: Define QUIÉN ES el cliente (edad, profesión, canales de comunicación, intereses amplios).
- Mapa de Empatía: Define CÓMO SE SIENTE ese cliente en situaciones específicas de su vida o entorno (su estado psicológico y emocional).

3. CASOS REALES DE NEGOCIO EN ECUADOR:
- Pacari® Chocolates (Quito, Ecuador): Empresa B, empaques compostables de caña de azúcar, tienda online pacari.com.
- República del Cacao® (Ecuador): Empresa B, chocolatería fina de aroma de origen, tienda online delivery republicadelcacaodelivery.com.

4. MAPA DE EMPATÍA (POST-ITS):
- Piensa y Siente: ${empathyPostIts.piensaSiente.join(' | ')}
- Ve: ${empathyPostIts.ve.join(' | ')}
- Oye: ${empathyPostIts.oye.join(' | ')}
- Dice y Hace: ${empathyPostIts.diceHace.join(' | ')}
- Dolores (Pains): ${empathyPostIts.dolores.join(' | ')}
- Ganancias (Gains): ${empathyPostIts.ganancias.join(' | ')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16">
      
      {/* Visual Workshop Banner with Action Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              Guía Práctica de Taller · Material de Clase
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-xs">
              Taller Práctico: Buyer Persona & Mapa de Empatía
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
              Trabaja con post-its visuales, videos explicativos y plantillas oficiales. Aprende a definir a tu cliente y a ponerte en sus zapatos en el comercio electrónico real.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
            <button
              onClick={copyWorkshopSummary}
              className="px-4 py-2.5 rounded-2xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Resumen de Clase'}</span>
            </button>

            <a
              href={HUBSPOT_MAKE_MY_PERSONA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-stone-900/40 hover:bg-stone-900/60 border border-white/30 text-white font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Plantilla HubSpot Make My Persona</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Clean Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 pt-5 border-t border-white/20">
          <button
            onClick={() => setActiveTab('buyerPersona')}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
              activeTab === 'buyerPersona'
                ? 'bg-white text-stone-900 font-black shadow-lg scale-102'
                : 'bg-white/10 text-white hover:bg-white/20 font-bold'
            }`}
          >
            <div className="text-sm sm:text-base">👤 1. Buyer Persona</div>
            <div className="text-[10px] opacity-80 font-normal">Video + David M. Scott</div>
          </button>

          <button
            onClick={() => setActiveTab('empathyMap')}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
              activeTab === 'empathyMap'
                ? 'bg-white text-stone-900 font-black shadow-lg scale-102'
                : 'bg-white/10 text-white hover:bg-white/20 font-bold'
            }`}
          >
            <div className="text-sm sm:text-base">💭 2. Mapa de Empatía</div>
            <div className="text-[10px] opacity-80 font-normal">Video + Post-its en vivo</div>
          </button>

          <button
            onClick={() => setActiveTab('casosEcuador')}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
              activeTab === 'casosEcuador'
                ? 'bg-white text-stone-900 font-black shadow-lg scale-102'
                : 'bg-white/10 text-white hover:bg-white/20 font-bold'
            }`}
          >
            <div className="text-sm sm:text-base">🇪🇨 3. Casos Reales</div>
            <div className="text-[10px] opacity-80 font-normal">Pacari® y República del Cacao®</div>
          </button>

          <button
            onClick={() => setActiveTab('journey')}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
              activeTab === 'journey'
                ? 'bg-white text-stone-900 font-black shadow-lg scale-102'
                : 'bg-white/10 text-white hover:bg-white/20 font-bold'
            }`}
          >
            <div className="text-sm sm:text-base">🛤️ 4. Customer Journey</div>
            <div className="text-[10px] opacity-80 font-normal">5 Etapas & Emociones</div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN 1: BUYER PERSONA & DAVID MEERMAN SCOTT + VIDEO */}
      {/* ========================================================================= */}
      {activeTab === 'buyerPersona' && (
        <div className="space-y-6 animate-in fade-in">
          
          {/* Video 1 Embed Card */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-red-600 text-white shadow-xs">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 dark:text-stone-100 text-base sm:text-lg">
                    Video de Clase: ¿Qué es un Buyer Persona y cómo crearlo?
                  </h3>
                  <p className="text-xs text-stone-500">
                    Mira el video antes de hacer el ejercicio práctico (YouTube)
                  </p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=-xm2vgPHdHg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1 self-start sm:self-center"
              >
                <span>Ver directo en YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube Responsive Embed */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-xm2vgPHdHg"
                title="¿Qué es un Buyer Persona?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* David Meerman Scott Callout Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-850 rounded-3xl p-6 sm:p-8 border-2 border-amber-400 dark:border-amber-700 space-y-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-black uppercase tracking-wider">
                Estratega de Marketing Fundamental
              </span>
              <span className="text-xs text-stone-600 dark:text-stone-300 font-semibold">
                David Meerman Scott · «The New Rules of Marketing and PR»
              </span>
            </div>

            <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed">
              El estratega de marketing <strong>David Meerman Scott</strong> popularizó el término bajo el enfoque de los negocios y los contenidos en su aclamado libro <em>"The New Rules of Marketing and PR"</em> (Las nuevas reglas del marketing y las RR.PP.).
            </p>

            {/* Scott's Exact Definition Highlight */}
            <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border-l-4 border-amber-500 shadow-xs space-y-2">
              <span className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                Definición Oficial de David Meerman Scott:
              </span>
              <blockquote className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 italic leading-relaxed">
                «Un buyer persona es un perfil detallado de un comprador que representa a un grupo objetivo específico. Según Scott, las empresas no deben lanzar mensajes masivos, sino entender los problemas específicos, las metas y los hábitos de consumo de información de estos perfiles para crear estrategias de contenidos que resuelvan sus necesidades particulares.»
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Usa la herramienta oficial gratuita recomendada para construirlo paso a paso:
              </p>
              <a
                href={HUBSPOT_MAKE_MY_PERSONA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>🛠️ Crear en HubSpot Make My Persona</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Graphical Post-it Board: Ficha del Buyer Persona (Basado en PDF HubSpot) */}
          <div className="bg-stone-100 dark:bg-stone-900/60 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Plantilla de Clase en Post-its
                </span>
                <h3 className="text-xl font-black text-stone-900 dark:text-stone-100">
                  Ficha Visual: Las 3 Dimensiones del Buyer Persona
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 rounded-full">
                Estilo Pizarra de Trabajo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Post-it 1: Demografía (Yellow Post-it) */}
              <div className="p-5 rounded-2xl bg-amber-100 dark:bg-amber-950/70 border-2 border-amber-300 dark:border-amber-800 shadow-md rotate-[-1deg] space-y-3">
                <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-800 pb-2">
                  <span className="font-black text-amber-900 dark:text-amber-200 text-xs uppercase tracking-wider">
                    📌 1. Demografía (Perfil)
                  </span>
                  <span className="text-[10px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-2 py-0.5 rounded-full font-bold">
                    Quién es
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-950 dark:text-amber-100 font-medium">
                  {personaNotes.demografia.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Post-it 2: Necesidades en 3 dimensiones (Pink Post-it) */}
              <div className="p-5 rounded-2xl bg-rose-100 dark:bg-rose-950/70 border-2 border-rose-300 dark:border-rose-800 shadow-md rotate-[1deg] space-y-3">
                <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-800 pb-2">
                  <span className="font-black text-rose-900 dark:text-rose-200 text-xs uppercase tracking-wider">
                    📌 2. Necesidades & Dolores
                  </span>
                  <span className="text-[10px] bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200 px-2 py-0.5 rounded-full font-bold">
                    3 Niveles
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-rose-950 dark:text-rose-100 font-medium">
                  {personaNotes.necesidades.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Post-it 3: Solución de Contenidos Scott (Cyan/Mint Post-it) */}
              <div className="p-5 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 border-2 border-emerald-300 dark:border-emerald-800 shadow-md rotate-[-0.5deg] space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800 pb-2">
                  <span className="font-black text-emerald-900 dark:text-emerald-200 text-xs uppercase tracking-wider">
                    📌 3. Solución (David M. Scott)
                  </span>
                  <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    Contenidos
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-emerald-950 dark:text-emerald-100 font-medium">
                  {personaNotes.solucionScott.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECCIÓN 2: MAPA DE EMPATÍA CON VIDEO + POST-ITS EN VIVO */}
      {/* ========================================================================= */}
      {activeTab === 'empathyMap' && (
        <div className="space-y-6 animate-in fade-in">
          
          {/* Video 2 Embed Card */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-red-600 text-white shadow-xs">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 dark:text-stone-100 text-base sm:text-lg">
                    Video de Clase: ¿Cómo hacer un Mapa de Empatía paso a paso?
                  </h3>
                  <p className="text-xs text-stone-500">
                    Aprende la técnica de los 6 cuadrantes antes de llenar los post-its (YouTube)
                  </p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=KTGEtavfv8w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1 self-start sm:self-center"
              >
                <span>Ver directo en YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube Responsive Embed */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KTGEtavfv8w"
                title="¿Cómo hacer un Mapa de Empatía?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Distinction Callout: Buyer Persona vs Mapa de Empatía */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-400 dark:border-blue-800 space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                <h4 className="font-black text-blue-900 dark:text-blue-100 text-sm uppercase">
                  Buyer Persona
                </h4>
              </div>
              <p className="text-sm font-bold text-blue-950 dark:text-blue-200">
                Define quién es el cliente
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                (edad, profesión, canales de comunicación, intereses amplios y nivel socioeconómico).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-400 dark:border-emerald-800 space-y-2">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-emerald-600" />
                <h4 className="font-black text-emerald-900 dark:text-emerald-100 text-sm uppercase">
                  Mapa de Empatía
                </h4>
              </div>
              <p className="text-sm font-bold text-emerald-950 dark:text-emerald-200">
                Define cómo se siente ese cliente
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                en situaciones específicas de su vida o entorno (su estado psicológico y emocional ante una compra).
              </p>
            </div>
          </div>

          {/* Interactive Post-it Creator Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center gap-2 shadow-xs">
            <select
              value={newPostItCategory}
              onChange={(e) => setNewPostItCategory(e.target.value)}
              className="px-3 py-2 text-xs font-bold rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800"
            >
              <option value="piensaSiente">🧠 ¿Qué piensa y siente?</option>
              <option value="ve">👀 ¿Qué ve?</option>
              <option value="oye">👂 ¿Qué oye?</option>
              <option value="diceHace">🗣️ ¿Qué dice y hace?</option>
              <option value="dolores">⚡ Dolores (Pains)</option>
              <option value="ganancias">🌟 Ganancias (Gains)</option>
            </select>

            <input
              type="text"
              placeholder="Escribe una observación en tu post-it adhesivo..."
              value={newPostItText}
              onChange={(e) => setNewPostItText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') addEmpathyPostIt();
              }}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 outline-none"
            />

            <button
              onClick={addEmpathyPostIt}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs cursor-pointer shadow-xs shrink-0 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Pegar Post-it</span>
            </button>
          </div>

          {/* Visual Post-it Canvas Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Cuadrante 1: Piensa y Siente */}
            <div className="p-5 rounded-3xl bg-amber-50/80 dark:bg-stone-900/80 border-2 border-amber-300 dark:border-amber-800 space-y-3 shadow-xs">
              <span className="font-black text-amber-900 dark:text-amber-200 text-xs uppercase block">
                🧠 1. ¿Qué piensa y siente?
              </span>
              <p className="text-[11px] text-stone-500">Lo que le preocupa o emociona en privado</p>
              <div className="space-y-2">
                {empathyPostIts.piensaSiente.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-amber-200/90 dark:bg-amber-900/60 border border-amber-300 text-xs font-semibold text-amber-950 dark:text-amber-100 shadow-sm rotate-[-0.8deg] flex items-start justify-between gap-1.5"
                  >
                    <span>{note}</span>
                    <button
                      onClick={() => removeEmpathyPostIt('piensaSiente', idx)}
                      className="opacity-0 group-hover:opacity-100 text-amber-800 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadrante 2: Ve */}
            <div className="p-5 rounded-3xl bg-blue-50/80 dark:bg-stone-900/80 border-2 border-blue-300 dark:border-blue-800 space-y-3 shadow-xs">
              <span className="font-black text-blue-900 dark:text-blue-200 text-xs uppercase block">
                👀 2. ¿Qué ve?
              </span>
              <p className="text-[11px] text-stone-500">Su entorno, tiendas, precios y redes sociales</p>
              <div className="space-y-2">
                {empathyPostIts.ve.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-blue-200/90 dark:bg-blue-900/60 border border-blue-300 text-xs font-semibold text-blue-950 dark:text-blue-100 shadow-sm rotate-[0.7deg] flex items-start justify-between gap-1.5"
                  >
                    <span>{note}</span>
                    <button
                      onClick={() => removeEmpathyPostIt('ve', idx)}
                      className="opacity-0 group-hover:opacity-100 text-blue-800 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadrante 3: Oye */}
            <div className="p-5 rounded-3xl bg-emerald-50/80 dark:bg-stone-900/80 border-2 border-emerald-300 dark:border-emerald-800 space-y-3 shadow-xs">
              <span className="font-black text-emerald-900 dark:text-emerald-200 text-xs uppercase block">
                👂 3. ¿Qué oye?
              </span>
              <p className="text-[11px] text-stone-500">Lo que dicen amigos, familiares e influencers</p>
              <div className="space-y-2">
                {empathyPostIts.oye.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-emerald-200/90 dark:bg-emerald-900/60 border border-emerald-300 text-xs font-semibold text-emerald-950 dark:text-emerald-100 shadow-sm rotate-[-0.5deg] flex items-start justify-between gap-1.5"
                  >
                    <span>{note}</span>
                    <button
                      onClick={() => removeEmpathyPostIt('oye', idx)}
                      className="opacity-0 group-hover:opacity-100 text-emerald-800 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadrante 4: Dice y Hace */}
            <div className="p-5 rounded-3xl bg-purple-50/80 dark:bg-stone-900/80 border-2 border-purple-300 dark:border-purple-800 space-y-3 shadow-xs">
              <span className="font-black text-purple-900 dark:text-purple-200 text-xs uppercase block">
                🗣️ 4. ¿Qué dice y hace?
              </span>
              <p className="text-[11px] text-stone-500">Su comportamiento público y cómo actúa</p>
              <div className="space-y-2">
                {empathyPostIts.diceHace.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-purple-200/90 dark:bg-purple-900/60 border border-purple-300 text-xs font-semibold text-purple-950 dark:text-purple-100 shadow-sm rotate-[0.9deg] flex items-start justify-between gap-1.5"
                  >
                    <span>{note}</span>
                    <button
                      onClick={() => removeEmpathyPostIt('diceHace', idx)}
                      className="opacity-0 group-hover:opacity-100 text-purple-800 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadrante 5: Dolores (Pains) */}
            <div className="p-5 rounded-3xl bg-rose-50/80 dark:bg-stone-900/80 border-2 border-rose-300 dark:border-rose-800 space-y-3 shadow-xs">
              <span className="font-black text-rose-900 dark:text-rose-200 text-xs uppercase block">
                ⚡ Dolores & Obstáculos (Pains)
              </span>
              <p className="text-[11px] text-stone-500">Frustraciones, miedos y riesgos percibidos</p>
              <div className="space-y-2">
                {empathyPostIts.dolores.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-rose-200/90 dark:bg-rose-900/60 border border-rose-300 text-xs font-semibold text-rose-950 dark:text-rose-100 shadow-sm rotate-[-0.6deg] flex items-start justify-between gap-1.5"
                  >
                    <span>{note}</span>
                    <button
                      onClick={() => removeEmpathyPostIt('dolores', idx)}
                      className="opacity-0 group-hover:opacity-100 text-rose-800 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadrante 6: Ganancias (Gains) */}
            <div className="p-5 rounded-3xl bg-teal-50/80 dark:bg-stone-900/80 border-2 border-teal-300 dark:border-teal-700 space-y-3 shadow-xs">
              <span className="font-black text-teal-900 dark:text-teal-200 text-xs uppercase block">
                🌟 Ganancias & Deseos (Gains)
              </span>
              <p className="text-[11px] text-stone-500">Lo que considera un éxito y le genera orgullo</p>
              <div className="space-y-2">
                {empathyPostIts.ganancias.map((note, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-teal-200/90 dark:bg-teal-900/60 border border-teal-300 text-xs font-semibold text-teal-950 dark:text-teal-100 shadow-sm rotate-[0.5deg] flex items-start justify-between gap-1.5"
                  >
                    <span>{note}</span>
                    <button
                      onClick={() => removeEmpathyPostIt('ganancias', idx)}
                      className="opacity-0 group-hover:opacity-100 text-teal-800 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECCIÓN 3: CASOS REALES DE NEGOCIO EN ECUADOR (PACARI Y WAYKANA) */}
      {/* ========================================================================= */}
      {activeTab === 'casosEcuador' && (
        <div className="space-y-6 animate-in fade-in">
          
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 space-y-2">
            <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100">
              Dos Casos de Negocio Ecuatoriano
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
              Ejemplos prácticos de marcas ecuatorianas con tiendas en línea activas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Caso 1: Pacari */}
            <div className="bg-white dark:bg-stone-900 rounded-3xl border-2 border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="h-44 rounded-2xl bg-gradient-to-br from-stone-900 to-amber-950 relative overflow-hidden flex items-center justify-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&auto=format&fit=crop&q=80"
                    alt="Pacari Chocolate Fino"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="relative z-10 text-center text-white">
                    <span className="text-xs uppercase tracking-widest font-bold text-amber-300 block">Quito, Ecuador · Desde 2002</span>
                    <h3 className="text-2xl font-black">Pacari® Chocolates</h3>
                    <span className="text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full mt-1 inline-block">Empresa B Certificada · Orgánico</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  <p><strong>Fundadores:</strong> Santiago Peralta y Carla Barboto.</p>
                  <p><strong>Propuesta:</strong> Comercio directo con más de 4.000 familias cacaoteras en Napo y la Costa ecuatoriana.</p>
                  <p><strong>Tienda Online:</strong> E-commerce con catálogo completo <em>(pacari.com)</em>, pagos digitales y empaques biodegradables a base de caña de azúcar.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                  <span className="font-black block uppercase text-[10px]">Su Buyer Persona:</span>
                  <p><strong>Sebastián (34 años, Quito)</strong>, busca regalos ecuatorianos de clase mundial sin empaques plásticos contaminantes y paga con tarjeta en línea.</p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 dark:bg-stone-800/50 border-t border-stone-200 dark:border-stone-800 flex justify-end">
                <a
                  href="https://www.pacari.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 hover:underline"
                >
                  <span>Visitar tienda online pacari.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Caso 2: República del Cacao */}
            <div className="bg-white dark:bg-stone-900 rounded-3xl border-2 border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="h-44 rounded-2xl bg-gradient-to-br from-amber-950 to-stone-900 relative overflow-hidden flex items-center justify-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&auto=format&fit=crop&q=80"
                    alt="República del Cacao Tienda Online"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="relative z-10 text-center text-white">
                    <span className="text-xs uppercase tracking-widest font-bold text-amber-300 block">Ecuador · Chocolatería Fina</span>
                    <h3 className="text-2xl font-black">República del Cacao®</h3>
                    <span className="text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full mt-1 inline-block">Empresa B Certificada · Cacao Fino de Aroma</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  <p><strong>Origen:</strong> Chocolatería fina de aroma vinculada a comunidades campesinas aliadas en Vinces y Los Ríos.</p>
                  <p><strong>Propuesta:</strong> Gastronomía de autor, maridajes sostenibles y rescate del cacao patrimonial ecuatoriano.</p>
                  <p><strong>Tienda Online Delivery:</strong> Tienda en línea oficial directa con delivery en Ecuador <em>(republicadelcacaodelivery.com)</em> con venta de barras de origen, bombones finos, repostería y envíos a domicilio.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                  <span className="font-black block uppercase text-[10px]">Su Buyer Persona:</span>
                  <p><strong>Camila (32 años, Guayaquil / Quito)</strong>, profesional que busca detalles gastronómicos de lujo de origen ecuatoriano para obsequiar a colegas o amigos.</p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 dark:bg-stone-800/50 border-t border-stone-200 dark:border-stone-800 flex justify-end">
                <a
                  href="https://republicadelcacaodelivery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 hover:underline"
                >
                  <span>Visitar tienda online republicadelcacaodelivery.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECCIÓN 4: CUSTOMER JOURNEY MAP CON CURVA EMOCIONAL (PDF HUBSPOT) */}
      {/* ========================================================================= */}
      {activeTab === 'journey' && (
        <div className="space-y-6 animate-in fade-in">
          
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-black uppercase tracking-wider">
              Plantilla Oficial de Customer Journey Map
            </span>
            <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100">
              Recorrido del Comprador en 5 Etapas
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
              Observa las acciones, puntos de contacto, dolores y soluciones en cada fase: 
              <strong> Reconocimiento</strong> ➔ <strong>Consideración</strong> ➔ <strong>Decisión</strong> ➔ <strong>Retención</strong> ➔ <strong>Deleitar</strong>.
            </p>
          </div>

          {/* Interactive Emotional Curve Simulator */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-850 border border-stone-200 dark:border-stone-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase">
                Curva de Satisfacción Emocional:
              </span>
              <span className="text-[11px] text-stone-500 font-medium">Toca cada punto para calibrar</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { key: 'reconocimiento', label: '1. Reconocimiento' },
                { key: 'consideracion', label: '2. Consideración' },
                { key: 'decision', label: '3. Decisión' },
                { key: 'retencion', label: '4. Retención' },
                { key: 'deleitar', label: '5. Deleitar' },
              ].map((stage) => {
                const currentVal = journeyPoints[stage.key];
                return (
                  <div key={stage.key} className="p-3 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 text-center space-y-1.5 shadow-2xs">
                    <span className="text-[11px] font-bold block truncate">{stage.label}</span>
                    <button
                      onClick={() => {
                        const next = currentVal === 'alta' ? 'media' : currentVal === 'media' ? 'baja' : 'alta';
                        setJourneyPoints({ ...journeyPoints, [stage.key]: next });
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                        currentVal === 'alta'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : currentVal === 'media'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      {currentVal === 'alta' ? '😊 Positiva' : currentVal === 'media' ? '😐 Neutra' : '😣 Negativa'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Matrix Table */}
          <div className="overflow-x-auto rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white font-black text-xs">
                  <th className="p-4 border-b border-stone-200 dark:border-stone-700 w-32">Fila</th>
                  <th className="p-4 border-b border-stone-200 dark:border-stone-700">Reconocimiento</th>
                  <th className="p-4 border-b border-stone-200 dark:border-stone-700">Consideración</th>
                  <th className="p-4 border-b border-stone-200 dark:border-stone-700">Decisión</th>
                  <th className="p-4 border-b border-stone-200 dark:border-stone-700">Retención</th>
                  <th className="p-4 border-b border-stone-200 dark:border-stone-700">Deleitar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                <tr>
                  <td className="p-4 font-bold bg-stone-50 dark:bg-stone-850">Acciones</td>
                  <td className="p-4">Ve un reel en TikTok o busca en Google.</td>
                  <td className="p-4">Compara precios e ingredientes en la web.</td>
                  <td className="p-4">Paga con Deuna o tarjeta digital.</td>
                  <td className="p-4">Recibe el paquete en caja de caña de azúcar.</td>
                  <td className="p-4">Publica un unboxing y pide su recarga (refill).</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold bg-stone-50 dark:bg-stone-850 text-purple-700 dark:text-purple-300">Puntos de contacto</td>
                  <td className="p-4">TikTok / Instagram</td>
                  <td className="p-4">Ficha de producto (PDP)</td>
                  <td className="p-4">Pasarela / WhatsApp</td>
                  <td className="p-4">Courier / Repartidor</td>
                  <td className="p-4">Comunidad / Email</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold bg-stone-50 dark:bg-stone-850 text-rose-700 dark:text-rose-300">Puntos de dolor</td>
                  <td className="p-4">Sospecha de greenwashing publicitario.</td>
                  <td className="p-4">Duda si el producto realmente funciona.</td>
                  <td className="p-4">Demora al validar comprobante bancario.</td>
                  <td className="p-4">Temor a que el producto llegue derretido.</td>
                  <td className="p-4">Falta de incentivos para recomprar.</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold bg-stone-50 dark:bg-stone-850 text-emerald-700 dark:text-emerald-300">Solución (Scott / IA)</td>
                  <td className="p-4 font-semibold text-emerald-900 dark:text-emerald-200">Video transparente de la finca real.</td>
                  <td className="p-4 font-semibold text-emerald-900 dark:text-emerald-200">Chatbot con RAG que responde dudas técnicas.</td>
                  <td className="p-4 font-semibold text-emerald-900 dark:text-emerald-200">OCR inteligente que aprueba el pago en 2s.</td>
                  <td className="p-4 font-semibold text-emerald-900 dark:text-emerald-200">Empaque térmico y tarjeta con semillas.</td>
                  <td className="p-4 font-semibold text-emerald-900 dark:text-emerald-200">Suscripción automática con descuento.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
