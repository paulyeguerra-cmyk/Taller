import React, { useState } from 'react';
import { 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  HelpCircle, 
  Smile, 
  Heart, 
  UserCheck, 
  Brain, 
  Eye, 
  Ear, 
  MessageSquare, 
  AlertTriangle, 
  Lightbulb, 
  Bot, 
  Share2, 
  Play,
  Flame,
  Award
} from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

export const InteractiveWorkshop: React.FC = () => {
  // Navigation / Stepper State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [score, setScore] = useState<number>(100);
  const [completedSteps, setCompletedSteps] = useState<{ [step: number]: boolean }>({ 1: false });

  // ------------------ MISIÓN 1: EL RETO DE DAVID MEERMAN SCOTT ------------------
  const [scottChallengeAnswer, setScottChallengeAnswer] = useState<number | null>(null);
  const [scottUnlocked, setScottUnlocked] = useState<boolean>(false);

  // ------------------ MISIÓN 2: GENERADOR DE BUYER PERSONA ------------------
  const [personaName, setPersonaName] = useState('Valeria');
  const [personaAge, setPersonaAge] = useState('26 años');
  const [personaCity, setPersonaCity] = useState('Quito');
  const [personaRole, setPersonaRole] = useState('Diseñadora Gráfica');
  const [personaPayment, setPersonaPayment] = useState('Deuna / QR');
  const [personaChannel, setPersonaChannel] = useState('TikTok');
  const [personaPain, setPersonaPain] = useState('Teme que el champú sólido le reseque el cabello rizado');
  const [personaSolution, setPersonaSolution] = useState('Video tutorial con rutina paso a paso para cabello rizado');

  // ------------------ MISIÓN 3: JUEGO CLASIFICADOR (¿QUIÉN ES vs CÓMO SE SIENTE?) ------------------
  const sortingCards = [
    { id: 1, text: 'Tiene 26 años, vive en Cumbayá y es arquitecto.', type: 'persona', answered: false },
    { id: 2, text: 'Siente desconfianza al ver una web que no muestra opiniones reales.', type: 'empatia', answered: false },
    { id: 3, text: 'Su canal favorito para informarse de marcas sostenibles es TikTok.', type: 'persona', answered: false },
    { id: 4, text: 'Teme que el chocolate se derrita dentro de la moto del courier en Guayaquil.', type: 'empatia', answered: false },
    { id: 5, text: 'Gana $1.500 al mes y suele pagar sus compras online con Deuna o tarjeta.', type: 'persona', answered: false },
    { id: 6, text: 'Se siente orgulloso al saber que su compra apoya a familias Kichwa de Napo.', type: 'empatia', answered: false },
  ];
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [sortingFeedback, setSortingFeedback] = useState<string | null>(null);
  const [sortingCorrectCount, setSortingCorrectCount] = useState<number>(0);

  // ------------------ MISIÓN 4: CANVAS DE POST-ITS DE EMPATÍA ------------------
  const [activeBrand, setActiveBrand] = useState<'pacari' | 'waykana' | 'propia'>('pacari');
  const [stickyNotes, setStickyNotes] = useState<{ [quadrant: string]: string[] }>({
    piensa: ['«Quiero regalar algo de orgullo del Ecuador que sea 100% orgánico»'],
    ve: ['Empaques de lujo de caña de azúcar sin plástico de burbujas'],
    oye: ['Chefs internacionales diciendo que el cacao fino ecuatoriano es el mejor'],
    dice: ['Pregunta por WhatsApp si el empaque resistirá un viaje en avión'],
    dolores: ['Miedo a que el pedido se demore 3 días y llegue derretido'],
    ganancias: ['El halago de la persona que recibe la caja de regalo'],
  });
  const [newStickyText, setNewStickyText] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState('piensa');

  // ------------------ MISIÓN 5: SIMULADOR DEL VIAJE DEL CLIENTE ------------------
  const [journeyStage, setJourneyStage] = useState<number>(1);
  const [frictionSolved, setFrictionSolved] = useState<{ [stage: number]: boolean }>({});

  // Steps Configuration
  const steps = [
    { id: 1, name: 'Misión 1: David M. Scott', icon: '🎯', desc: 'El secreto del contenido' },
    { id: 2, name: 'Misión 2: Plantilla Persona', icon: '👤', desc: 'Arma tu cliente en 1 min' },
    { id: 3, name: 'Misión 3: El Gran Duelo', icon: '⚔️', desc: '¿Quién es o Cómo se siente?' },
    { id: 4, name: 'Misión 4: Canvas de Post-its', icon: '📌', desc: 'Mapa de Empatía en vivo' },
    { id: 5, name: 'Misión 5: Reto del Viaje', icon: '🚀', desc: 'Resuelve las fricciones con IA' },
    { id: 6, name: 'Misión 6: Tu Ficha Final', icon: '🏆', desc: 'Descarga tu trabajo' },
  ];

  // Helper to mark step done
  const finishStep = (stepNumber: number) => {
    setCompletedSteps((prev) => ({ ...prev, [stepNumber]: true }));
    setScore((prev) => prev + 50);
    if (stepNumber < 6) setCurrentStep(stepNumber + 1);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Gamified Top Header Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-5 sm:p-6 shadow-md relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs mb-1">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              Taller Práctico Interactivo · UDLA
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              Aprende Creando: Buyer Persona & Mapa de Empatía
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
              ¡Menos teoría aburrida, más acción! Completa las 6 misiones prácticas para dominar la materia.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shrink-0">
            <Trophy className="w-6 h-6 text-amber-300 animate-bounce" />
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-200 block">Puntos Ganados</span>
              <span className="text-lg font-black text-white">{score} XP</span>
            </div>
          </div>
        </div>

        {/* 6 Step Interactive Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mt-5 pt-4 border-t border-white/20">
          {steps.map((s) => {
            const isActive = currentStep === s.id;
            const isDone = completedSteps[s.id];
            return (
              <button
                key={s.id}
                onClick={() => setCurrentStep(s.id)}
                className={`p-2 rounded-xl text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-emerald-900 shadow-md font-bold ring-2 ring-amber-300 scale-102'
                    : isDone
                    ? 'bg-emerald-800/80 text-emerald-100 hover:bg-emerald-800'
                    : 'bg-white/10 text-emerald-200 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">{s.icon}</span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
                </div>
                <div className="text-[11px] font-bold truncate mt-1">{s.name.split(':')[0]}</div>
                <div className="text-[9px] opacity-75 truncate">{s.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MISIÓN 1: EL RETO DE DAVID MEERMAN SCOTT */}
      {/* ========================================================================= */}
      {currentStep === 1 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Misión 1 de 6 · Enfoque David Meerman Scott
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                ¿Qué aprendemos de David Meerman Scott?
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded-full font-bold">
              +50 XP al resolver
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
              💡 La Idea de Oro (En 10 segundos):
            </span>
            <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              En su aclamado libro <strong>«The New Rules of Marketing and PR»</strong>, Scott demostró que las marcas fracasan cuando lanzan publicidad masiva aburrida. Las que ganan crean contenido que <strong>resuelve los problemas específicos</strong> y <strong>responde a los hábitos de información</strong> del comprador.
            </p>
          </div>

          {/* Interactive Challenge */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Reto Rápido: Tienes una tienda ecuatoriana de cosmética ecológica. ¿Cuál anuncio sigue a David Meerman Scott?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option A */}
              <button
                onClick={() => {
                  setScottChallengeAnswer(0);
                  setScottUnlocked(false);
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  scottChallengeAnswer === 0
                    ? 'border-rose-400 bg-rose-50 text-rose-900'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:border-stone-400'
                }`}
              >
                <div className="font-bold text-xs uppercase text-stone-500 mb-1">Opción A (Publicidad Antigua)</div>
                <p className="text-xs sm:text-sm">
                  «¡COMPRA YA! Champús naturales al 20% de descuento. El mejor producto de belleza del Ecuador. ¡Aprovecha la promoción de fin de mes!»
                </p>
                {scottChallengeAnswer === 0 && (
                  <span className="text-[11px] font-bold text-rose-700 block mt-2">
                    ❌ Incorrecto: Esto es publicidad masiva e intrusiva tradicional sin valor.
                  </span>
                )}
              </button>

              {/* Option B */}
              <button
                onClick={() => {
                  setScottChallengeAnswer(1);
                  setScottUnlocked(true);
                  finishStep(1);
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  scottChallengeAnswer === 1
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:border-emerald-500'
                }`}
              >
                <div className="font-bold text-xs uppercase text-emerald-700 mb-1">Opción B (Estrategia David Meerman Scott)</div>
                <p className="text-xs sm:text-sm">
                  «Video corto en TikTok: "¿Tu champú sólido te deja el cabello rizado seco? Te mostramos los 3 errores comunes y cómo lavarlo con agua tibia para que quede suave y brillante."»
                </p>
                {scottChallengeAnswer === 1 && (
                  <span className="text-[11px] font-bold text-emerald-700 block mt-2">
                    🎉 ¡Correcto! Resuelve un dolor real en el canal donde el cliente busca información.
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Golden Definition Unlocked Card */}
          {scottUnlocked && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-emerald-500/20 border-2 border-amber-500 animate-in zoom-in-95 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-600 text-white text-[11px] font-black uppercase">
                  🏆 Medalla Desbloqueada: Definición Oficial de Scott
                </span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">¡+50 Puntos!</span>
              </div>
              <blockquote className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 italic leading-relaxed">
                «Un buyer persona es un perfil detallado de un comprador que representa a un grupo objetivo específico. Según Scott, las empresas no deben lanzar mensajes masivos, sino entender los problemas específicos, las metas y los hábitos de consumo de información de estos perfiles para crear estrategias de contenidos que resuelvan sus necesidades particulares.»
              </blockquote>
              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md"
                >
                  <span>Ir a la Misión 2: Crear la Ficha</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MISIÓN 2: PLANTILLA RÁPIDA DE BUYER PERSONA */}
      {/* ========================================================================= */}
      {currentStep === 2 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Misión 2 de 6 · Plantilla Interactiva
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Construye tu Buyer Persona Tocando Opciones
              </h2>
            </div>
            <a
              href={HUBSPOT_MAKE_MY_PERSONA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-xs shrink-0"
            >
              <span>Abrir HubSpot Make My Persona</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            En lugar de escribir formularios largos, <strong>toca los botones rápidos</strong> para armar el perfil de un comprador ecuatoriano o personalízalo como quieras:
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-3 bg-stone-50 dark:bg-stone-800/60 rounded-2xl border border-stone-200 dark:border-stone-700">
            <span className="text-xs font-bold text-stone-700 dark:text-stone-200 mr-1">
              Cargar Ejemplo Rápido:
            </span>
            <button
              onClick={() => {
                setPersonaName('Valeria Paredes');
                setPersonaAge('26 años');
                setPersonaCity('Quito');
                setPersonaRole('Diseñadora Gráfica');
                setPersonaPayment('Deuna / QR');
                setPersonaChannel('TikTok');
                setPersonaPain('Miedo a que el champú sólido le reseque el cabello rizado');
                setPersonaSolution('Video en TikTok con guía de adaptación y rutina capilar');
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-stone-700 hover:bg-stone-100 text-stone-800 dark:text-stone-100 border border-stone-300 dark:border-stone-600 transition-all cursor-pointer"
            >
              🌿 Valeria (Zero-Waste)
            </button>
            <button
              onClick={() => {
                setPersonaName('Sebastián Arteaga');
                setPersonaAge('34 años');
                setPersonaCity('Cumbayá / Quito');
                setPersonaRole('Arquitecto Sostenible');
                setPersonaPayment('Tarjeta en línea');
                setPersonaChannel('Google y LinkedIn');
                setPersonaPain('Busca regalos corporativos sin empaques plásticos ni greenwashing');
                setPersonaSolution('Documental corto sobre los agricultores de Pacari en Napo');
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 transition-all cursor-pointer"
            >
              🍫 Sebastián (Caso Pacari®)
            </button>
            <button
              onClick={() => {
                setPersonaName('Lucía Santamaría');
                setPersonaAge('29 años');
                setPersonaCity('Samborondón / Guayaquil');
                setPersonaRole('Líder de Producto Digital');
                setPersonaPayment('Deuna / Tarjeta');
                setPersonaChannel('Instagram y Strava');
                setPersonaPain('Necesita energía para trabajar 9 horas sin la acidez del café');
                setPersonaSolution('Comparativa gráfica de guayusa amazónica vs bebidas sintéticas');
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 transition-all cursor-pointer"
            >
              🍃 Lucía (Caso Waykana®)
            </button>
          </div>

          {/* Interactive Chips Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Interactive Field Selectors */}
            <div className="space-y-3.5">
              {/* City Selection */}
              <div>
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-1">
                  1. Ciudad en Ecuador:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['Quito', 'Guayaquil', 'Cuenca', 'Cumbayá', 'Samborondón'].map((city) => (
                    <button
                      key={city}
                      onClick={() => setPersonaCity(city)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        personaCity === city
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-1">
                  2. Medio de Pago Habitual (Dato BID Ecuador):
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['Deuna / QR', 'Transferencia Pichincha', 'Tarjeta en línea', 'Contra Entrega'].map((pay) => (
                    <button
                      key={pay}
                      onClick={() => setPersonaPayment(pay)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        personaPayment === pay
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      {pay}
                    </button>
                  ))}
                </div>
              </div>

              {/* Channel Selection */}
              <div>
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-1">
                  3. ¿Por dónde consume información? (Scott):
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['TikTok (18.5M en EC)', 'Instagram', 'Google Búsqueda', 'WhatsApp'].map((ch) => (
                    <button
                      key={ch}
                      onClick={() => setPersonaChannel(ch)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        personaChannel === ch
                          ? 'bg-purple-600 text-white font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pain & Solution Quick Inputs */}
              <div>
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-1">
                  4. Su Problema Específico o Dolor:
                </label>
                <input
                  type="text"
                  value={personaPain}
                  onChange={(e) => setPersonaPain(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-1">
                  5. Contenido Inbound para resolverlo (Scott):
                </label>
                <input
                  type="text"
                  value={personaSolution}
                  onChange={(e) => setPersonaSolution(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Right: Live Visual Preview Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 dark:from-stone-800 dark:to-stone-850 border-2 border-blue-400 dark:border-blue-700 space-y-3 self-start shadow-sm">
              <div className="flex items-center justify-between border-b border-blue-200 dark:border-stone-700 pb-2">
                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                  Tarjeta de Buyer Persona
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 font-bold">
                  Enfoque David M. Scott
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-xs">
                  {personaName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 dark:text-white text-base">
                    {personaName}
                  </h4>
                  <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold">
                    {personaRole} · {personaAge} · {personaCity}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white/90 dark:bg-stone-900/90 rounded-xl border border-blue-100 dark:border-stone-700 space-y-1.5 text-xs">
                <div>
                  <span className="text-stone-500 font-medium">Pago preferido:</span>{' '}
                  <strong className="text-emerald-700 dark:text-emerald-400">{personaPayment}</strong>
                </div>
                <div>
                  <span className="text-stone-500 font-medium">Canal de información:</span>{' '}
                  <strong className="text-purple-700 dark:text-purple-400">{personaChannel}</strong>
                </div>
                <div className="pt-1.5 border-t border-stone-100 dark:border-stone-800">
                  <span className="text-stone-500 block font-medium">Dolor específico:</span>
                  <span className="text-rose-700 dark:text-rose-300 font-semibold">{personaPain}</span>
                </div>
                <div className="pt-1.5 border-t border-stone-100 dark:border-stone-800">
                  <span className="text-stone-500 block font-medium">Solución de Contenido (Scott):</span>
                  <span className="text-emerald-800 dark:text-emerald-300 font-semibold">{personaSolution}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setCurrentStep(1)}
              className="text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              ← Volver a Misión 1
            </button>
            <button
              onClick={() => finishStep(2)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>¡Ficha Lista! Ir al Juego del Duelo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MISIÓN 3: JUEGO: ¿QUIÉN ES O CÓMO SE SIENTE? */}
      {/* ========================================================================= */}
      {currentStep === 3 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Misión 3 de 6 · Juego de Clasificación Rápida
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                El Duelo: ¿Buyer Persona o Mapa de Empatía?
              </h2>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              Aciertos: {sortingCorrectCount} / {sortingCards.length}
            </span>
          </div>

          {/* Simple Rule Box */}
          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-center justify-around gap-3 text-center text-xs">
            <div className="font-bold text-blue-700 dark:text-blue-300">
              👤 BUYER PERSONA = Define QUIÉN ES el cliente
            </div>
            <span className="text-stone-300 font-bold hidden sm:inline">vs</span>
            <div className="font-bold text-emerald-700 dark:text-emerald-300">
              💭 MAPA DE EMPATÍA = Define CÓMO SE SIENTE en una situación real
            </div>
          </div>

          {/* Active Card Challenge */}
          {cardIndex < sortingCards.length ? (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800/80 dark:to-stone-900 border-2 border-stone-300 dark:border-stone-700 text-center space-y-4 shadow-sm">
              <span className="text-xs text-stone-500 font-mono">
                Tarjeta {cardIndex + 1} de {sortingCards.length}
              </span>

              <p className="text-base sm:text-lg font-bold text-stone-900 dark:text-white max-w-xl mx-auto py-2">
                «{sortingCards[cardIndex].text}»
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const isCorrect = sortingCards[cardIndex].type === 'persona';
                    if (isCorrect) setSortingCorrectCount((c) => c + 1);
                    setSortingFeedback(isCorrect ? '¡CORRECTO! Habla de QUIÉN ES (Buyer Persona)' : 'Ups... Esta frase describe quién es la persona.');
                    setTimeout(() => {
                      setSortingFeedback(null);
                      setCardIndex((i) => i + 1);
                    }, 1200);
                  }}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Es BUYER PERSONA (Quién es)</span>
                </button>

                <button
                  onClick={() => {
                    const isCorrect = sortingCards[cardIndex].type === 'empatia';
                    if (isCorrect) setSortingCorrectCount((c) => c + 1);
                    setSortingFeedback(isCorrect ? '¡CORRECTO! Habla de CÓMO SE SIENTE (Mapa de Empatía)' : 'Ups... Esta frase describe emociones o vivencias específicas.');
                    setTimeout(() => {
                      setSortingFeedback(null);
                      setCardIndex((i) => i + 1);
                    }, 1200);
                  }}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Es MAPA DE EMPATÍA (Cómo se siente)</span>
                </button>
              </div>

              {sortingFeedback && (
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 animate-in fade-in pt-1">
                  {sortingFeedback}
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 text-center space-y-3">
              <Trophy className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-100">
                ¡Reto Completado! Lograste {sortingCorrectCount} de {sortingCards.length} aciertos
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300">
                ¡Ahora la diferencia te queda clara: <strong>Buyer Persona</strong> es su ficha de identidad y <strong>Mapa de Empatía</strong> es su corazón en una situación de compra!
              </p>
              <button
                onClick={() => finishStep(3)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer shadow-md inline-flex items-center gap-1.5"
              >
                <span>Avanzar al Canvas de Post-its</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MISIÓN 4: CANVAS DE POST-ITS DE EMPATÍA */}
      {/* ========================================================================= */}
      {currentStep === 4 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Misión 4 de 6 · Taller Visual de Post-its
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Lienzo de Empatía para Casos Ecuatorianos Reales
              </h2>
            </div>

            {/* Brand Presets */}
            <div className="flex gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl text-xs font-bold">
              <button
                onClick={() => {
                  setActiveBrand('pacari');
                  setStickyNotes({
                    piensa: ['«Quiero regalar chocolate fino orgánico de clase mundial»'],
                    ve: ['Cajas de caña de azúcar sin plástico y premios internacionales'],
                    oye: ['Chefs elogiando el cacao fino de aroma de Ecuador'],
                    dice: ['Pide en línea y revisa que llegue en empaque térmico'],
                    dolores: ['Temor de que el chocolate se derrita con el sol en la moto'],
                    ganancias: ['Orgullo de regalar algo auténtico que apoya a familias de Napo'],
                  });
                }}
                className={`px-3 py-1 rounded-lg cursor-pointer ${
                  activeBrand === 'pacari' ? 'bg-emerald-600 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                🍫 Pacari® (Quito)
              </button>
              <button
                onClick={() => {
                  setActiveBrand('waykana');
                  setStickyNotes({
                    piensa: ['«Necesito energía limpia para rendir sin taquicardia»'],
                    ve: ['Latas minimalistas y atletas ecuatorianos entrenando'],
                    oye: ['Amigos diciendo que la guayusa no da acidez como el café'],
                    dice: ['Paga con Deuna y lleva su termo a la oficina'],
                    dolores: ['Duda si sabrá demasiado amarga o difícil de preparar'],
                    ganancias: ['Concentración sostenida de 6 horas y sueño tranquilo'],
                  });
                }}
                className={`px-3 py-1 rounded-lg cursor-pointer ${
                  activeBrand === 'waykana' ? 'bg-emerald-600 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                🍃 Waykana® (Tena/Quito)
              </button>
            </div>
          </div>

          <p className="text-xs text-stone-600 dark:text-stone-400">
            ¡Agrega tus propias notas adhesivas al lienzo de <strong>{activeBrand === 'pacari' ? 'Pacari®' : 'Waykana®'}</strong> para ponerte en los zapatos del cliente!
          </p>

          {/* Add Post-it Form */}
          <div className="p-3.5 bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-center gap-2">
            <select
              value={selectedQuadrant}
              onChange={(e) => setSelectedQuadrant(e.target.value)}
              className="px-3 py-2 text-xs rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 font-bold"
            >
              <option value="piensa">🧠 ¿Qué piensa y siente?</option>
              <option value="ve">👀 ¿Qué ve?</option>
              <option value="oye">👂 ¿Qué oye?</option>
              <option value="dice">🗣️ ¿Qué dice y hace?</option>
              <option value="dolores">⚡ Dolores (Pains)</option>
              <option value="ganancias">🌟 Ganancias (Gains)</option>
            </select>

            <input
              type="text"
              placeholder="Escribe una observación del cliente..."
              value={newStickyText}
              onChange={(e) => setNewStickyText(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 outline-none"
            />

            <button
              onClick={() => {
                if (!newStickyText.trim()) return;
                setStickyNotes((prev) => ({
                  ...prev,
                  [selectedQuadrant]: [...(prev[selectedQuadrant] || []), newStickyText.trim()],
                }));
                setNewStickyText('');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer shrink-0"
            >
              + Pegar Post-it
            </button>
          </div>

          {/* 6 Quadrant Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { id: 'piensa', title: '🧠 ¿Qué piensa y siente?', color: 'bg-amber-100 text-amber-900 border-amber-300' },
              { id: 've', title: '👀 ¿Qué ve?', color: 'bg-blue-100 text-blue-900 border-blue-300' },
              { id: 'oye', title: '👂 ¿Qué oye?', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
              { id: 'dice', title: '🗣️ ¿Qué dice y hace?', color: 'bg-purple-100 text-purple-900 border-purple-300' },
              { id: 'dolores', title: '⚡ Dolores (Pains)', color: 'bg-rose-100 text-rose-900 border-rose-300' },
              { id: 'ganancias', title: '🌟 Ganancias (Gains)', color: 'bg-teal-100 text-teal-900 border-teal-300' },
            ].map((q) => (
              <div key={q.id} className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-2">
                <span className="text-xs font-bold text-stone-800 dark:text-stone-200 block">{q.title}</span>
                <div className="space-y-1.5 min-h-[90px]">
                  {stickyNotes[q.id]?.map((note, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-xl text-xs font-medium border shadow-2xs rotate-[-0.5deg] ${q.color}`}
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setCurrentStep(3)}
              className="text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              ← Volver a Misión 3
            </button>
            <button
              onClick={() => finishStep(4)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>¡Lienzo Listo! Ir al Viaje del Cliente</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MISIÓN 5: RETO DEL VIAJE DEL CLIENTE */}
      {/* ========================================================================= */}
      {currentStep === 5 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Misión 5 de 6 · Simulador del Customer Journey
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Las 5 Etapas del Viaje del Cliente en Ecuador
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600">
              Etapa {journeyStage} de 5
            </span>
          </div>

          {/* 5 Stage Horizontal Selector */}
          <div className="grid grid-cols-5 gap-1.5">
            {[
              { id: 1, name: '1. Descubrimiento', mood: 'Curioso' },
              { id: 2, name: '2. Consideración', mood: 'Exigente' },
              { id: 3, name: '3. Compra y Pago', mood: 'Confiado' },
              { id: 4, name: '4. Desempaque', mood: 'Emocionado' },
              { id: 5, name: '5. Fidelización', mood: 'Orgulloso' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setJourneyStage(st.id)}
                className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                  journeyStage === st.id
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                <div className="text-[10px] truncate">{st.name}</div>
                <div className="text-[9px] opacity-80">{st.mood}</div>
              </button>
            ))}
          </div>

          {/* Interactive Stage Simulation Box */}
          <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 space-y-4">
            {journeyStage === 1 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase">
                  Etapa 1 · Descubrimiento (El cliente está Curioso)
                </span>
                <p className="text-sm text-stone-800 dark:text-stone-200">
                  Valeria está en TikTok por la noche y ve un video: «Por qué dejé de usar botellas de plástico en mi baño». Siente curiosidad pero desconfía.
                </p>
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200">
                  ⚡ <strong>Fricción:</strong> Cree que todos los productos "ecológicos" son marketing falso (Greenwashing).
                </div>
                <button
                  onClick={() => setFrictionSolved({ ...frictionSolved, 1: true })}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                >
                  ✓ Resolver con David M. Scott: Mostrar video del laboratorio artesanal y sello de certificación
                </button>
                {frictionSolved[1] && (
                  <p className="text-xs font-bold text-emerald-700">¡Fricción eliminada! Valeria pasa a la siguiente etapa.</p>
                )}
              </div>
            )}

            {journeyStage === 2 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase">
                  Etapa 2 · Consideración (El cliente está Exigente)
                </span>
                <p className="text-sm text-stone-800 dark:text-stone-200">
                  Entra a la página web y revisa ingredientes. Duda si el champú le servirá para cabello rizado.
                </p>
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200">
                  ⚡ <strong>Fricción:</strong> El chatbot genérico de la tienda tarda horas en responder.
                </div>
                <button
                  onClick={() => setFrictionSolved({ ...frictionSolved, 2: true })}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                >
                  ✓ Resolver con IA (RAG): Chatbot que lee la ficha técnica al instante y le recomienda la variante exacta
                </button>
                {frictionSolved[2] && (
                  <p className="text-xs font-bold text-emerald-700">¡Excelente! El asistente IA despeja su duda en 3 segundos.</p>
                )}
              </div>
            )}

            {journeyStage === 3 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase">
                  Etapa 3 · Compra y Pago (El cliente está Confiado)
                </span>
                <p className="text-sm text-stone-800 dark:text-stone-200">
                  Valeria añade el producto al carrito. En Ecuador, el 77% prefiere pagos digitales (BID).
                </p>
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200">
                  ⚡ <strong>Fricción:</strong> Transfiere por Pichincha pero le piden enviar captura y esperar validación manual.
                </div>
                <button
                  onClick={() => setFrictionSolved({ ...frictionSolved, 3: true })}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                >
                  ✓ Resolver con IA (OCR): El sistema escanea el comprobante y aprueba el pedido al instante
                </button>
                {frictionSolved[3] && (
                  <p className="text-xs font-bold text-emerald-700">¡Pedido confirmado en 2 segundos sin esperas!</p>
                )}
              </div>
            )}

            {journeyStage === 4 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                  Etapa 4 · Entrega y Desempaque (El cliente está Emocionado)
                </span>
                <p className="text-sm text-stone-800 dark:text-stone-200">
                  Llega el mensajero a su casa en Quito. Valeria abre el paquete entusiasmada.
                </p>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-300 text-xs text-emerald-950 dark:text-emerald-200 font-medium">
                  🌱 <strong>Solución Sostenible:</strong> Caja de caña de azúcar sin plástico y tarjeta plantable con semillas de manzanilla.
                </div>
              </div>
            )}

            {journeyStage === 5 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase">
                  Etapa 5 · Fidelización (El cliente está Orgulloso)
                </span>
                <p className="text-sm text-stone-800 dark:text-stone-200">
                  El champú le dejó el cabello rizado perfecto. Graba una historia en Instagram recomendando la marca a sus amigas y pide su recarga (refill).
                </p>
                <div className="p-3 bg-emerald-100 rounded-xl text-xs font-bold text-emerald-900">
                  🎉 ¡El viaje fue un éxito total! El cliente se convirtió en promotor leal.
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setCurrentStep(4)}
              className="text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              ← Volver a Misión 4
            </button>
            <button
              onClick={() => finishStep(5)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>¡Misión 5 Superada! Ver Mi Ficha Final</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MISIÓN 6: TU FICHA FINAL Y CERTIFICADO ESTUDIANTIL */}
      {/* ========================================================================= */}
      {currentStep === 6 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="text-center space-y-2 border-b border-stone-100 dark:border-stone-800 pb-5">
            <div className="inline-flex p-3 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100">
              ¡Misiones Completadas con Éxito!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
              Has dominado los conceptos de David Meerman Scott, la plantilla de HubSpot y la diferencia con el Mapa de Empatía para e-commerce en Ecuador.
            </p>
          </div>

          {/* Summary Sheet ready to copy / print */}
          <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border-2 border-emerald-500/50 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-700 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  UDLA · Comercio Electrónico Sostenible
                </span>
                <h3 className="font-extrabold text-stone-900 dark:text-white text-lg">
                  Ficha Resumen: {personaName} ({personaRole})
                </h3>
              </div>
              <button
                onClick={() => {
                  const text = `FICHA DE BUYER PERSONA Y MAPA DE EMPATÍA (UDLA - MÓDULO 5)
Nombre: ${personaName}
Edad y Ciudad: ${personaAge}, ${personaCity} (Ecuador)
Profesión: ${personaRole}
Canales de Información (Scott): ${personaChannel}
Medio de Pago: ${personaPayment}
Dolor / Reto: ${personaPain}
Solución de Contenido (Scott): ${personaSolution}

DIFERENCIA CLAVE:
- Buyer Persona: Define QUIÉN ES el cliente (datos sociodemográficos y canales).
- Mapa de Empatía: Define CÓMO SE SIENTE en situaciones específicas (psicología y emoción).
`;
                  navigator.clipboard.writeText(text);
                  alert('¡Ficha copiada al portapapeles!');
                }}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-stone-700 border border-stone-300 dark:border-stone-600 text-xs font-bold hover:bg-stone-100 cursor-pointer flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Ficha para Tarea</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                <span className="font-bold text-stone-500">1. Quién es (Buyer Persona):</span>
                <p><strong>{personaName}</strong>, {personaAge}, vive en {personaCity}. {personaRole}. Prefiere pagar con {personaPayment} y se informa en {personaChannel}.</p>
              </div>

              <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                <span className="font-bold text-stone-500">2. Estrategia David Meerman Scott:</span>
                <p>Dolor específico: <em>«{personaPain}»</em>. Se resuelve con contenido educativo: <em>«{personaSolution}»</em>.</p>
              </div>
            </div>

            <div className="p-3 bg-emerald-100/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-300 text-xs text-emerald-950 dark:text-emerald-200">
              <strong>Recuerda para tu evaluación:</strong> Pacari® y Waykana® son casos 100% reales en Ecuador que demuestran cómo la sostenibilidad y la transparencia eliminan la desconfianza del comprador.
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setCurrentStep(1);
                setScore(100);
              }}
              className="px-5 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 font-bold text-xs cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reiniciar el Taller</span>
            </button>

            <a
              href={HUBSPOT_MAKE_MY_PERSONA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Generar Ficha en Make My Persona Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
