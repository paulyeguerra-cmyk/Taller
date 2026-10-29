import React, { useState } from 'react';
import { 
  Sparkles, 
  Target, 
  Heart, 
  UserCheck, 
  Compass, 
  Smile, 
  Frown, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Download, 
  Copy, 
  Check, 
  ExternalLink,
  Lightbulb,
  Building2,
  Share2,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

export const DesignThinkingWorkshopGuide: React.FC = () => {
  // Workshop active step: 1 = Norte, 2 = Buyer Persona, 3 = Mapa Empatía, 4 = Customer Journey, 5 = Entrega
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedCasePreset, setSelectedCasePreset] = useState<'pacari' | 'waykana' | 'propio'>('pacari');

  // STEP 1: DEFINE TU NORTE (from HubSpot PDF page 2)
  const [targetSegment, setTargetSegment] = useState('jóvenes profesionales de 25 a 35 años en Quito y Guayaquil');
  const [targetGoal, setTargetGoal] = useState('diseñar una tienda online de productos sostenibles sin greenwashing que facilite pagos digitales');

  // STEP 2: BUYER PERSONA CANVAS (HubSpot Persona Slides 2-6)
  const [persona, setPersona] = useState({
    nombre: 'Sebastián Arteaga',
    rol: 'Arquitecto Sostenible & Consultor',
    edad: '34 años',
    ciudad: 'Cumbayá, Quito (Ecuador)',
    ingresos: '$2.200 USD mensuales',
    personalidad: 'Decisor reflexivo · Valora origen y ética',
    // Necesidades
    dolorInterno: 'Frustración al ver productos que fingen ser ecológicos (greenwashing)',
    dolorExterno: 'Dificultad para encontrar regalos corporativos ecuatorianos de lujo sin empaque plástico',
    dolorFilosofico: 'Cree que el consumo debe apoyar directamente a las familias campesinas del país',
    // Solución según Scott
    tipoContenido: 'Mini-documental sobre agricultores de Napo y guía de cata de cacao fino',
    habitoInfo: 'Lee blogs de gastronomía, busca en Google y consulta perfiles de Instagram de marcas B-Corp',
    medioPago: 'Deuna / Tarjeta de crédito en línea',
    mensajeClave: '«Del árbol a la barra: chocolate fino 100% orgánico que regenera la Amazonía ecuatoriana.»',
  });

  // STEP 3: MAPA DE EMPATÍA (HubSpot Empathy Map PDF pages 5-12)
  const [empathyMap, setEmpathyMap] = useState({
    piensaSiente: [
      '«Quiero regalar algo de orgullo del Ecuador que sea 100% orgánico y ético»',
      '«Me preocupa que el chocolate sufra con el calor en la entrega de courier»',
    ],
    ve: [
      'Empaques elegantes de caña de azúcar sin plástico de burbujas',
      'Redes sociales de Pacari mostrando capacitaciones a familias agricultoras',
    ],
    oye: [
      'A chefs internacionales elogiando la calidad del cacao fino ecuatoriano',
      'Amigos recomendando Pacari como el mejor souvenir del país',
    ],
    diceHace: [
      'Pide en línea y solicita factura con RUC de inmediato',
      'Comparte fotos en Instagram del empaque compostable',
    ],
    obstaculos: [
      'Costo de envío elevado si solo compra dos barras para consumo personal',
      'Falta de stock temporal de sabores de colección en temporada alta',
    ],
    resultados: [
      'Orgullo sincero al entregar un regalo gourmet ecuatoriano de clase mundial',
      'La tranquilidad de un empaque 100% compostable que no contamina',
    ],
  });

  // STEP 4: CUSTOMER JOURNEY MAP (HubSpot Journey PDF page 1)
  const [journeyExperience, setJourneyExperience] = useState<{ [stage: string]: 'positiva' | 'neutra' | 'negativa' }>({
    reconocimiento: 'neutra',
    consideracion: 'positiva',
    decision: 'positiva',
    retencion: 'positiva',
    deleitar: 'positiva',
  });

  const [journeyNotes, setJourneyNotes] = useState({
    reconocimiento: {
      accion: 'Navega en TikTok y ve video de cata de chocolate orgánico.',
      touchpoint: 'Reels / TikTok / Búsqueda Google',
      dolor: 'Duda si el sello orgánico es auditado o simple publicidad.',
      solucion: 'Video transparente mostrando la finca y la certificación B-Corp (David M. Scott).',
    },
    consideracion: {
      accion: 'Visita la tienda pacari.com y compara packs de regalo.',
      touchpoint: 'Ficha de producto / Chat web',
      dolor: 'No sabe qué porcentaje de cacao elegir para quien recibe el regalo.',
      solucion: 'Guía interactiva de maridaje y asistente chatbot con RAG.',
    },
    decision: {
      accion: 'Agrega al carrito y selecciona pago con Deuna o tarjeta.',
      touchpoint: 'Checkout / Pasarela Kushki',
      dolor: 'Páginas lentas o formularios de envío eternos.',
      solucion: 'Checkout en un clic con factura electrónica instantánea.',
    },
    retencion: {
      accion: 'Recibe el paquete en su domicilio en caja de caña de azúcar.',
      touchpoint: 'Repartidor / Caja de caña de azúcar',
      dolor: 'Temor a que el chocolate llegue golpeado o derretido.',
      solucion: 'Empaque térmico biodegradable y tarjeta plantable con semillas.',
    },
    deleitar: {
      accion: 'Prueba la barra y comparte con sus invitados en una cena.',
      touchpoint: 'Instagram / Recompra mensual',
      dolor: 'Quedarse sin producto antes de tiempo.',
      solucion: 'Suscripción mensual de cacao gourmet con descuento exclusivo.',
    },
  });

  const loadPreset = (preset: 'pacari' | 'waykana') => {
    setSelectedCasePreset(preset);
    if (preset === 'pacari') {
      setTargetSegment('amantes del buen café y chocolate orgánico en Quito y Guayaquil');
      setTargetGoal('regalar productos ecuatorianos de alto valor sin empaques plásticos contaminantes');
      setPersona({
        nombre: 'Sebastián Arteaga',
        rol: 'Arquitecto Sostenible & Consultor',
        edad: '34 años',
        ciudad: 'Cumbayá, Quito (Ecuador)',
        ingresos: '$2.200 USD mensuales',
        personalidad: 'Decisor reflexivo · Valora origen y ética',
        dolorInterno: 'Frustración al ver productos que fingen ser ecológicos (greenwashing)',
        dolorExterno: 'Dificultad para encontrar regalos corporativos de lujo sin plástico',
        dolorFilosofico: 'Cree que el consumo debe apoyar directamente a familias campesinas',
        tipoContenido: 'Mini-documental sobre agricultores de Napo y guía de cata',
        habitoInfo: 'Consulta Instagram de marcas B-Corp y busca en Google',
        medioPago: 'Deuna / Tarjeta de crédito en línea',
        mensajeClave: '«Del árbol a la barra: chocolate fino 100% orgánico que regenera la Amazonía.»',
      });
    } else {
      setTargetSegment('jóvenes profesionales y deportistas en Guayaquil y Quito');
      setTargetGoal('reemplazar bebidas energéticas sintéticas por infusiones naturales de la Amazonía');
      setPersona({
        nombre: 'Lucía Santamaría',
        rol: 'Líder de Producto Digital & Atleta amateur',
        edad: '29 años',
        ciudad: 'Samborondón, Guayaquil (Ecuador)',
        ingresos: '$1.800 USD mensuales',
        personalidad: 'Dinámica, orientada al rendimiento y la salud',
        dolorInterno: 'Culpa y ansiedad por consumir bebidas azucaradas con taquicardia',
        dolorExterno: 'El café le causa acidez durante sus 9 horas de trabajo en oficina',
        dolorFilosofico: 'Quiere consumir productos endémicos que preserven la selva ecuatoriana',
        tipoContenido: 'Comparativa gráfica entre L-teanina de la guayusa vs taurina sintética',
        habitoInfo: 'TikTok, grupos de WhatsApp y podcasts de entrenamiento funcional',
        medioPago: 'Deuna / Transferencia Banco Guayaquil',
        mensajeClave: '«Energía limpia y enfoque mental sostenido directo desde las chakras Kichwa.»',
      });
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Workshop Top Banner (HubSpot + Design Thinking Aesthetic) */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-stone-800 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
                🎨 Taller de Design Thinking · UDLA
              </span>
              <span className="text-xs text-stone-400 font-mono">Basado en Plantillas Oficiales HubSpot</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Guía Visual de Empatía & Customer Journey
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Diseña la experiencia de compra de tu cliente en <strong>4 pasos visuales</strong>. Completa las plantillas interactivas y descarga tu trabajo listo para presentar en clase.
            </p>
          </div>

          {/* Quick Case Switcher */}
          <div className="bg-stone-800/80 p-2 rounded-2xl border border-stone-700 space-y-1.5 shrink-0">
            <span className="text-[10px] uppercase font-bold text-stone-400 block px-2">
              Cargar Caso Ecuatoriano:
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={() => loadPreset('pacari')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCasePreset === 'pacari'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                🍫 Pacari® (Quito)
              </button>
              <button
                onClick={() => loadPreset('waykana')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCasePreset === 'waykana'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                🍃 Waykana® (Tena)
              </button>
            </div>
          </div>
        </div>

        {/* 4 Workshop Steps Navigation (Design Thinking Flow) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 pt-5 border-t border-stone-800">
          {[
            { id: 1, title: 'Paso 1: Define tu Norte', desc: 'Objetivo y Segmento', icon: '🎯' },
            { id: 2, title: 'Paso 2: Buyer Persona', desc: 'Demografía & Scott', icon: '👤' },
            { id: 3, title: 'Paso 3: Mapa de Empatía', desc: 'Silueta de 6 Cuadrantes', icon: '💭' },
            { id: 4, title: 'Paso 4: Customer Journey', desc: '5 Etapas & Emoción', icon: '🛤️' },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setActiveStep(st.id)}
              className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
                activeStep === st.id
                  ? 'bg-orange-500 text-white shadow-lg ring-2 ring-orange-300 scale-102 font-bold'
                  : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
              }`}
            >
              <div className="text-base mb-1">{st.icon}</div>
              <div className="text-xs font-bold">{st.title}</div>
              <div className="text-[10px] opacity-80">{st.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PASO 1: DEFINE TU NORTE (HubSpot PDF Slide 2) */}
      {/* ========================================================================= */}
      {activeStep === 1 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Fase 1 de Design Thinking · Claridad de Proyecto
              </span>
              <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Define tu Norte: ¿A quién y para qué?
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full font-bold">
              Plantilla HubSpot Pág. 2
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 space-y-2">
              <div className="text-xs font-black text-stone-400 uppercase tracking-wider">01</div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                ¿Cuál es tu objetivo concreto?
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                ¿Lanzar un producto eco-friendly? ¿Mejorar las ventas de un e-commerce en Ecuador? ¿Reducir la fricción en transferencias bancarias?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 space-y-2">
              <div className="text-xs font-black text-stone-400 uppercase tracking-wider">02</div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                ¿Quién es tu cliente ideal?
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                No diseñes para "todo el mundo". Elige un perfil específico con ubicación, hábitos de información e ingresos reales.
              </p>
            </div>
          </div>

          {/* Practical Fill-in-the-Blank Sentence (Exact from PDF) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-800 dark:to-stone-850 border-2 border-orange-300 dark:border-orange-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-orange-600" />
              Ejercicio Práctico de Clase (Completa la frase):
            </div>

            <div className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed">
              «Estoy creando este mapa para entender mejor a{' '}
              <input
                type="text"
                value={targetSegment}
                onChange={(e) => setTargetSegment(e.target.value)}
                className="inline-block px-3 py-1 font-bold text-orange-700 dark:text-orange-300 bg-white dark:bg-stone-900 rounded-lg border border-orange-300 dark:border-orange-700 outline-none w-full sm:w-auto my-1 focus:ring-2 focus:ring-orange-500"
                placeholder="[SEGMENTO ESPECÍFICO]"
              />{' '}
              porque quiero{' '}
              <input
                type="text"
                value={targetGoal}
                onChange={(e) => setTargetGoal(e.target.value)}
                className="inline-block px-3 py-1 font-bold text-orange-700 dark:text-orange-300 bg-white dark:bg-stone-900 rounded-lg border border-orange-300 dark:border-orange-700 outline-none w-full sm:w-auto my-1 focus:ring-2 focus:ring-orange-500"
                placeholder="[OBJETIVO CONCRETO]"
              />
              .»
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Ir al Paso 2: Ficha Buyer Persona</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PASO 2: FICHA VISUAL DE BUYER PERSONA (HubSpot Persona Slides 2-6) */}
      {/* ========================================================================= */}
      {activeStep === 2 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Fase 2 · Estructura de la Ficha
              </span>
              <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Ficha del Buyer Persona: ¿Quién es el Cliente?
              </h2>
            </div>
            <a
              href={HUBSPOT_MAKE_MY_PERSONA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-xs"
            >
              <span>Abrir Make My Persona HubSpot</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Visual Presentation Card with 3 Columns (Demografía, Necesidades, Solución Scott) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Column 1: Demografía (HubSpot Slide 2) */}
            <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-stone-800/60 border border-blue-200 dark:border-stone-700 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300 uppercase">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                Demografía & Perfil
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">Nombre:</label>
                  <input
                    type="text"
                    value={persona.nombre}
                    onChange={(e) => setPersona({ ...persona, nombre: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-stone-700 bg-white dark:bg-stone-900 font-bold"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">Ocupación / Rol:</label>
                  <input
                    type="text"
                    value={persona.rol}
                    onChange={(e) => setPersona({ ...persona, rol: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block">Edad:</label>
                    <input
                      type="text"
                      value={persona.edad}
                      onChange={(e) => setPersona({ ...persona, edad: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block">Ubicación:</label>
                    <input
                      type="text"
                      value={persona.ciudad}
                      onChange={(e) => setPersona({ ...persona, ciudad: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">Ingresos:</label>
                  <input
                    type="text"
                    value={persona.ingresos}
                    onChange={(e) => setPersona({ ...persona, ingresos: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Necesidades en 3 Dimensiones (HubSpot Slide 3) */}
            <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-stone-800/60 border border-amber-200 dark:border-stone-700 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">2</span>
                Necesidades & Dolores
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Dolor Interno (Emoción):
                  </label>
                  <textarea
                    rows={2}
                    value={persona.dolorInterno}
                    onChange={(e) => setPersona({ ...persona, dolorInterno: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Dolor Externo (Problema visible):
                  </label>
                  <textarea
                    rows={2}
                    value={persona.dolorExterno}
                    onChange={(e) => setPersona({ ...persona, dolorExterno: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Dolor Filosófico (Valores):
                  </label>
                  <textarea
                    rows={2}
                    value={persona.dolorFilosofico}
                    onChange={(e) => setPersona({ ...persona, dolorFilosofico: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>
              </div>
            </div>

            {/* Column 3: Solución según David Meerman Scott (HubSpot Slides 4-6) */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-stone-800/60 border border-emerald-200 dark:border-stone-700 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">3</span>
                Estrategia Scott & Contenidos
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Hábitos de Información (Dónde busca):
                  </label>
                  <input
                    type="text"
                    value={persona.habitoInfo}
                    onChange={(e) => setPersona({ ...persona, habitoInfo: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Medio de Pago en Ecuador:
                  </label>
                  <input
                    type="text"
                    value={persona.medioPago}
                    onChange={(e) => setPersona({ ...persona, medioPago: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 dark:border-stone-700 bg-white dark:bg-stone-900 font-semibold"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Contenido Inbound que resuelve su dolor:
                  </label>
                  <textarea
                    rows={2}
                    value={persona.tipoContenido}
                    onChange={(e) => setPersona({ ...persona, tipoContenido: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 dark:border-stone-700 bg-white dark:bg-stone-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block">
                    Mensaje Clave de Marketing:
                  </label>
                  <input
                    type="text"
                    value={persona.mensajeClave}
                    onChange={(e) => setPersona({ ...persona, mensajeClave: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-emerald-200 dark:border-stone-700 bg-white dark:bg-stone-900 italic"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveStep(1)}
              className="text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              ← Volver al Paso 1
            </button>
            <button
              onClick={() => setActiveStep(3)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Ir al Paso 3: Mapa de Empatía Gráfico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PASO 3: MAPA DE EMPATÍA GRÁFICO (HubSpot Empathy Map PDF Slides 5-12) */}
      {/* ========================================================================= */}
      {activeStep === 3 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Fase 3 · Lienzo de Psicología y Emoción
              </span>
              <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Lienzo del Mapa de Empatía: ¿Cómo se siente?
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-full font-bold">
              6 Cuadrantes de Design Thinking
            </span>
          </div>

          <div className="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200">
            <strong>Regla clave de clase:</strong> Mientras el <em>Buyer Persona</em> definió que es {persona.nombre} ({persona.rol}), aquí mapeamos su <strong>estado psicológico y emocional</strong> frente a la decisión de compra en Ecuador.
          </div>

          {/* Graphical Quadrants Layout with Center Avatar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. ¿Qué piensa y siente? (Cerebro) */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-stone-800/60 border-2 border-amber-300 dark:border-amber-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase flex items-center gap-1.5">
                  🧠 1. ¿Qué piensa y siente?
                </span>
                <span className="text-[10px] text-stone-400">Emociones & Aspiraciones</span>
              </div>
              <p className="text-[11px] text-stone-500">¿Qué le quita el sueño? ¿Qué miedos tiene? (HubSpot Pág. 6)</p>
              <div className="space-y-1.5 pt-1">
                {empathyMap.piensaSiente.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-amber-200 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. ¿Qué ve? (Ojos) */}
            <div className="p-5 rounded-2xl bg-blue-50 dark:bg-stone-800/60 border-2 border-blue-300 dark:border-blue-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-blue-800 dark:text-blue-300 uppercase flex items-center gap-1.5">
                  👀 2. ¿Qué ve en su entorno?
                </span>
                <span className="text-[10px] text-stone-400">Entorno Visual</span>
              </div>
              <p className="text-[11px] text-stone-500">¿Qué ve en tiendas, TikTok y en su círculo cercano? (HubSpot Pág. 7)</p>
              <div className="space-y-1.5 pt-1">
                {empathyMap.ve.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-blue-200 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. ¿Qué oye? (Oídos) */}
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-stone-800/60 border-2 border-emerald-300 dark:border-emerald-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase flex items-center gap-1.5">
                  👂 3. ¿Qué oye de otros?
                </span>
                <span className="text-[10px] text-stone-400">Voces & Amigos</span>
              </div>
              <p className="text-[11px] text-stone-500">¿Qué dicen sus amigos, familia y colegas sobre la marca? (HubSpot Pág. 8)</p>
              <div className="space-y-1.5 pt-1">
                {empathyMap.oye.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-emerald-200 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. ¿Qué dice y hace? (Boca y Manos) */}
            <div className="p-5 rounded-2xl bg-purple-50 dark:bg-stone-800/60 border-2 border-purple-300 dark:border-purple-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-800 dark:text-purple-300 uppercase flex items-center gap-1.5">
                  🗣️ 4. ¿Qué dice y qué hace?
                </span>
                <span className="text-[10px] text-stone-400">Comportamiento Real</span>
              </div>
              <p className="text-[11px] text-stone-500">¿Cómo actúa en público y qué comparte en redes? (HubSpot Pág. 9)</p>
              <div className="space-y-1.5 pt-1">
                {empathyMap.diceHace.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-purple-200 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Obstáculos (Esfuerzos/Pains) vs Resultados (Deseos/Gains) */}
            <div className="p-5 rounded-2xl bg-rose-50 dark:bg-stone-800/60 border-2 border-rose-300 dark:border-rose-700 space-y-2">
              <span className="text-xs font-black text-rose-800 dark:text-rose-300 uppercase block">
                ⚡ Obstáculos & Dolores (Esfuerzos)
              </span>
              <p className="text-[11px] text-stone-500">Miedos, costos y barreras para comprar (HubSpot Pág. 11)</p>
              <div className="space-y-1.5 pt-1">
                {empathyMap.obstaculos.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-rose-200 dark:border-stone-700 text-xs text-rose-950 dark:text-rose-200">
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-teal-50 dark:bg-stone-800/60 border-2 border-teal-300 dark:border-teal-700 space-y-2">
              <span className="text-xs font-black text-teal-800 dark:text-teal-300 uppercase block">
                🌟 Resultados & Deseos (Beneficios)
              </span>
              <p className="text-[11px] text-stone-500">Qué espera lograr y cómo define el éxito (HubSpot Pág. 12)</p>
              <div className="space-y-1.5 pt-1">
                {empathyMap.resultados.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-teal-200 dark:border-stone-700 text-xs text-teal-950 dark:text-teal-200">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveStep(2)}
              className="text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              ← Volver al Paso 2
            </button>
            <button
              onClick={() => setActiveStep(4)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Ir al Paso 4: Customer Journey Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PASO 4: CUSTOMER JOURNEY MAP VISUAL (HubSpot Journey PDF Page 1) */}
      {/* ========================================================================= */}
      {activeStep === 4 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Fase 4 · Recorrido del Comprador
              </span>
              <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100 mt-1">
                Customer Journey Map (Ruta del Cliente)
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full font-bold">
              Plantilla HubSpot Oficial (5 Etapas)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Mapea la experiencia de compra en las 5 fases oficiales de HubSpot: 
            <strong> Reconocimiento</strong> ➔ <strong>Consideración</strong> ➔ <strong>Decisión</strong> ➔ <strong>Retención</strong> ➔ <strong>Deleitar</strong>.
          </p>

          {/* Emotional Curve Visual Indicator */}
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-3">
            <span className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
              Curva Emocional del Cliente en cada Fase (Toca para cambiar la vivencia):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { id: 'reconocimiento', label: '1. Reconocimiento' },
                { id: 'consideracion', label: '2. Consideración' },
                { id: 'decision', label: '3. Decisión' },
                { id: 'retencion', label: '4. Retención' },
                { id: 'deleitar', label: '5. Deleitar' },
              ].map((st) => {
                const currentMood = journeyExperience[st.id];
                return (
                  <div key={st.id} className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 text-center space-y-1.5">
                    <span className="text-[11px] font-bold block truncate">{st.label}</span>
                    <button
                      onClick={() => {
                        const nextMood = currentMood === 'positiva' ? 'neutra' : currentMood === 'neutra' ? 'negativa' : 'positiva';
                        setJourneyExperience({ ...journeyExperience, [st.id]: nextMood });
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        currentMood === 'positiva'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : currentMood === 'neutra'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      {currentMood === 'positiva' ? '😊 Positiva' : currentMood === 'neutra' ? '😐 Neutra' : '😣 Negativa'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Matrix Grid (Exact from PDF Page 1) */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-stone-200 dark:border-stone-800">
              <thead>
                <tr className="bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white font-bold">
                  <th className="p-3 border border-stone-200 dark:border-stone-700 w-28">Fila / Etapa</th>
                  <th className="p-3 border border-stone-200 dark:border-stone-700">Reconocimiento</th>
                  <th className="p-3 border border-stone-200 dark:border-stone-700">Consideración</th>
                  <th className="p-3 border border-stone-200 dark:border-stone-700">Decisión</th>
                  <th className="p-3 border border-stone-200 dark:border-stone-700">Retención</th>
                  <th className="p-3 border border-stone-200 dark:border-stone-700">Deleitar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                {/* Row 1: Acciones */}
                <tr>
                  <td className="p-3 font-bold bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-700">
                    Acciones del cliente
                  </td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700">{journeyNotes.reconocimiento.accion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700">{journeyNotes.consideracion.accion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700">{journeyNotes.decision.accion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700">{journeyNotes.retencion.accion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700">{journeyNotes.deleitar.accion}</td>
                </tr>

                {/* Row 2: Puntos de contacto */}
                <tr>
                  <td className="p-3 font-bold bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-700">
                    Puntos de contacto
                  </td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-purple-700 dark:text-purple-300 font-medium">{journeyNotes.reconocimiento.touchpoint}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-purple-700 dark:text-purple-300 font-medium">{journeyNotes.consideracion.touchpoint}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-purple-700 dark:text-purple-300 font-medium">{journeyNotes.decision.touchpoint}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-purple-700 dark:text-purple-300 font-medium">{journeyNotes.retencion.touchpoint}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-purple-700 dark:text-purple-300 font-medium">{journeyNotes.deleitar.touchpoint}</td>
                </tr>

                {/* Row 3: Puntos de dolor */}
                <tr>
                  <td className="p-3 font-bold bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-700 text-rose-700">
                    Puntos de dolor (Fricción)
                  </td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-rose-900 dark:text-rose-200">{journeyNotes.reconocimiento.dolor}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-rose-900 dark:text-rose-200">{journeyNotes.consideracion.dolor}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-rose-900 dark:text-rose-200">{journeyNotes.decision.dolor}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-rose-900 dark:text-rose-200">{journeyNotes.retencion.dolor}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-rose-900 dark:text-rose-200">{journeyNotes.deleitar.dolor}</td>
                </tr>

                {/* Row 4: Soluciones */}
                <tr>
                  <td className="p-3 font-bold bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-700 text-emerald-700">
                    Soluciones (Scott / IA)
                  </td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-emerald-950 dark:text-emerald-200 font-medium">{journeyNotes.reconocimiento.solucion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-emerald-950 dark:text-emerald-200 font-medium">{journeyNotes.consideracion.solucion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-emerald-950 dark:text-emerald-200 font-medium">{journeyNotes.decision.solucion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-emerald-950 dark:text-emerald-200 font-medium">{journeyNotes.retencion.solucion}</td>
                  <td className="p-3 border border-stone-200 dark:border-stone-700 text-emerald-950 dark:text-emerald-200 font-medium">{journeyNotes.deleitar.solucion}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Export Workshop Summary */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-orange-500/10 border-2 border-emerald-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                🎉 Taller Completado con Éxito
              </span>
              <h4 className="text-base font-bold text-stone-900 dark:text-white">
                Ficha de Design Thinking lista para entregar
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300">
                Copia el reporte estructurado de tu Buyer Persona, Mapa de Empatía y Customer Journey Map.
              </p>
            </div>

            <button
              onClick={() => {
                const report = `TALLER DE DESIGN THINKING - MÓDULO 5 (UDLA)
===================================================
1. NORTE DEL PROYECTO:
"Estoy creando este mapa para entender mejor a ${targetSegment} porque quiero ${targetGoal}."

2. BUYER PERSONA:
- Nombre: ${persona.nombre} (${persona.rol})
- Edad y Ciudad: ${persona.edad}, ${persona.ciudad}
- Ingresos: ${persona.ingresos}
- Dolor Interno: ${persona.dolorInterno}
- Dolor Externo: ${persona.dolorExterno}
- Dolor Filosófico: ${persona.dolorFilosofico}
- Estrategia Scott: ${persona.tipoContenido}
- Medio de Pago: ${persona.medioPago}

3. MAPA DE EMPATÍA (6 CUADRANTES):
- ¿Qué piensa y siente?: ${empathyMap.piensaSiente.join('; ')}
- ¿Qué ve?: ${empathyMap.ve.join('; ')}
- ¿Qué oye?: ${empathyMap.oye.join('; ')}
- ¿Qué dice y hace?: ${empathyMap.diceHace.join('; ')}
- Obstáculos (Pains): ${empathyMap.obstaculos.join('; ')}
- Resultados (Gains): ${empathyMap.resultados.join('; ')}

4. CUSTOMER JOURNEY MAP (5 ETAPAS):
- Reconocimiento: ${journeyNotes.reconocimiento.accion} -> Solución: ${journeyNotes.reconocimiento.solucion}
- Consideración: ${journeyNotes.consideracion.accion} -> Solución: ${journeyNotes.consideracion.solucion}
- Decisión: ${journeyNotes.decision.accion} -> Solución: ${journeyNotes.decision.solucion}
- Retención: ${journeyNotes.retencion.accion} -> Solución: ${journeyNotes.retencion.solucion}
- Deleitar: ${journeyNotes.deleitar.accion} -> Solución: ${journeyNotes.deleitar.solucion}

5. NOTA METODOLÓGICA:
Buyer Persona define QUIÉN ES el cliente; Mapa de Empatía define CÓMO SE SIENTE en situaciones específicas.
Casos reales de negocio ecuatoriano verificados: Pacari® Chocolates y Waykana® Guayusa.
`;
                navigator.clipboard.writeText(report);
                alert('¡Informe del taller copiado al portapapeles con éxito!');
              }}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2 shrink-0"
            >
              <Copy className="w-4 h-4" />
              <span>Copiar Informe Completo de Clase</span>
            </button>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveStep(3)}
              className="text-xs text-stone-500 hover:text-stone-800 font-semibold cursor-pointer"
            >
              ← Volver al Paso 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
