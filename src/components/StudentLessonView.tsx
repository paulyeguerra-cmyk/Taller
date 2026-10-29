import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft, 
  Lightbulb, 
  HelpCircle, 
  Target, 
  Heart, 
  UserCheck, 
  Compass, 
  Sparkles, 
  Building2, 
  Copy, 
  Check, 
  Award,
  Layers,
  Leaf
} from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

export const StudentLessonView: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<number>(1);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Simple state for interactive exercises
  const [selectedCase, setSelectedCase] = useState<'pacari' | 'waykana'>('pacari');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const lessons = [
    {
      id: 1,
      tag: 'Lección 1',
      title: '¿Qué es un Buyer Persona y David Meerman Scott?',
      subtitle: 'El origen, la definición clave y por qué no es un cliente imaginario.',
    },
    {
      id: 2,
      tag: 'Lección 2',
      title: 'Herramienta Make My Persona de HubSpot',
      subtitle: 'Cómo usar el generador oficial paso a paso en 3 bloques.',
    },
    {
      id: 3,
      tag: 'Lección 3',
      title: 'La Gran Diferencia: Buyer Persona vs. Mapa de Empatía',
      subtitle: '¿Quién es el cliente? vs. ¿Cómo se siente en una situación real?',
    },
    {
      id: 4,
      tag: 'Lección 4',
      title: 'Dos Casos de Negocio Ecuatoriano 100% Reales',
      subtitle: 'Pacari® y Waykana®: marcas reales verificadas en Ecuador.',
    },
    {
      id: 5,
      tag: 'Lección 5',
      title: 'El Viaje del Cliente (Customer Journey)',
      subtitle: 'Las 5 etapas de compra en un e-commerce sostenible.',
    },
    {
      id: 6,
      tag: 'Lección 6',
      title: 'Resumen para Examen y Autoevaluación',
      subtitle: 'Preguntas clave para fijar el aprendizaje.',
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Student Progress Header */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                Guía Didáctica para Estudiantes · UDLA
              </span>
              <span className="text-xs text-stone-400">·</span>
              <span className="text-xs text-stone-500 font-medium">35 minutos de lectura</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              Módulo 5: Buyer Persona y Viaje del Cliente
            </h1>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
              Paso {currentLesson} de {lessons.length}
            </span>
            <div className="w-36 h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
                style={{ width: `${(currentLesson / lessons.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quick Lesson Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setCurrentLesson(lesson.id)}
              className={`p-2 rounded-xl text-center text-xs font-semibold transition-all cursor-pointer ${
                currentLesson === lesson.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-stone-50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              <div className="text-[10px] opacity-80">{lesson.tag}</div>
              <div className="font-bold truncate mt-0.5">{lesson.title.split(':')[0]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ----------------- LECCIÓN 1: DEFINICIÓN & DAVID MEERMAN SCOTT ----------------- */}
      {currentLesson === 1 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Lección 1 · Concepto Fundamental
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              ¿Qué es un Buyer Persona y de dónde viene?
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Comprende por qué el marketing moderno ya no se basa en enviar publicidad masiva a todo el mundo.
            </p>
          </div>

          {/* Simple Explanation */}
          <div className="space-y-4 text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
            <p>
              Un <strong>Buyer Persona</strong> es una representación semi-ficticia de tu cliente ideal. No es un promedio frío de una encuesta ni una persona inventada al azar: se construye observando a clientes reales, entrevistándolos y analizando datos.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Regla para recordar:
              </span>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                <strong>No es un promedio estadístico.</strong> Un promedio diría: «Cliente de 33,4 años con 1,2 hijos». Un buyer persona tiene rostro, nombre y motivaciones reales: «Valeria, 26 años, diseñadora en Quito, que busca champú sin plástico pero le preocupa que le reseque el cabello rizado».
              </p>
            </div>
          </div>

          {/* David Meerman Scott Spotlight */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-emerald-500/5 border-2 border-amber-500/30 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-600 text-white text-xs font-bold uppercase">
                Autor Clave para el Curso
              </span>
              <span className="text-xs text-stone-500 font-mono">Año 2007</span>
            </div>

            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              David Meerman Scott y «The New Rules of Marketing and PR»
            </h3>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              El estratega de marketing <strong>David Meerman Scott</strong> popularizó el término bajo el enfoque de los negocios y los contenidos en su aclamado libro <em>«The New Rules of Marketing and PR»</em> (Las nuevas reglas del marketing y las RR.PP.).
            </p>

            {/* Official Definition Box */}
            <div className="p-4 rounded-xl bg-white dark:bg-stone-800 border border-amber-300 dark:border-amber-700/60 shadow-xs space-y-2">
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 block uppercase">
                🎓 Definición de David Meerman Scott (Memorizar para el examen):
              </span>
              <blockquote className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 italic leading-relaxed">
                «Un buyer persona es un perfil detallado de un comprador que representa a un grupo objetivo específico. Según Scott, las empresas no deben lanzar mensajes masivos, sino entender los problemas específicos, las metas y los hábitos de consumo de información de estos perfiles para crear estrategias de contenidos que resuelvan sus necesidades particulares.»
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-white/80 dark:bg-stone-800/80 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
                <span className="font-bold text-stone-900 dark:text-white block mb-0.5">1. Problemas Específicos</span>
                <span className="text-stone-600 dark:text-stone-400">¿Qué le duele o qué quiere solucionar hoy?</span>
              </div>
              <div className="bg-white/80 dark:bg-stone-800/80 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
                <span className="font-bold text-stone-900 dark:text-white block mb-0.5">2. Hábitos de Información</span>
                <span className="text-stone-600 dark:text-stone-400">¿Dónde busca respuestas (TikTok, Google, amigos)?</span>
              </div>
              <div className="bg-white/80 dark:bg-stone-800/80 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
                <span className="font-bold text-stone-900 dark:text-white block mb-0.5">3. Contenido como Solución</span>
                <span className="text-stone-600 dark:text-stone-400">No le vendas; dale la respuesta que necesita.</span>
              </div>
            </div>
          </div>

          {/* Quick Historical Line */}
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-2">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
              Línea de tiempo rápida:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-700 dark:text-stone-300">
              <div>
                <strong>1985–1999 · Alan Cooper:</strong> Crea personas para diseño de software (user vs buyer).
              </div>
              <div>
                <strong>2001–2002 · Tony Zambito:</strong> Funda el concepto para ventas complejas B2B.
              </div>
              <div>
                <strong>2007 · David Meerman Scott:</strong> Lo populariza masivamente en marketing digital y contenidos.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- LECCIÓN 2: MAKE MY PERSONA DE HUBSPOT ----------------- */}
      {currentLesson === 2 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Lección 2 · Herramienta Oficial de Trabajo
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              Make My Persona de HubSpot
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              La plataforma interactiva que los estudiantes deben utilizar para crear y descargar la ficha de su cliente ideal.
            </p>
          </div>

          {/* Action Box to Open Tool */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border-2 border-orange-400 dark:border-orange-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase tracking-wider">
                Herramienta Práctica Oficial
              </span>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Generador Gratuito «Make My Persona»
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-xl">
                Al hacer clic se abrirá la herramienta interactiva de HubSpot en español. Te guiará paso a paso para crear un avatar y exportar tu ficha en PDF o imagen.
              </p>
            </div>

            <a
              href={HUBSPOT_MAKE_MY_PERSONA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md transition-all shrink-0"
            >
              <span>Abrir Make My Persona</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* The 3 Practical Steps */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
              Los 3 bloques que debes llenar en la plantilla de HubSpot:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  Perfil del Cliente
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  ¿Cómo se llama? Edad, profesión, ingresos en dólares (USD), ciudad en Ecuador (ej. Quito, Guayaquil, Cuenca) y redes sociales favoritas.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  Necesidades y Retos
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  ¿Qué problema busca resolver? ¿Qué le molesta del mercado actual? ¿Por qué desconfía del greenwashing o de los envíos retrasados?
                </p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  Solución de Contenido
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Siguiendo a Scott: ¿Qué contenido educativo le vas a dar para resolver sus dudas antes de pedirle que saque su tarjeta de crédito?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- LECCIÓN 3: BUYER PERSONA VS MAPA DE EMPATÍA ----------------- */}
      {currentLesson === 3 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Lección 3 · Pregunta Clave de Examen
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              Buyer Persona vs. Mapa de Empatía
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Muchos estudiantes confunden ambas herramientas. Aprende la diferencia exacta en dos líneas:
            </p>
          </div>

          {/* Simple Side by Side Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Buyer Persona */}
            <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border-2 border-blue-400 dark:border-blue-800 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-blue-600 text-white">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase">Herramienta 1</span>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Buyer Persona</h3>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-blue-200 dark:border-blue-900">
                <p className="text-sm sm:text-base font-bold text-blue-950 dark:text-blue-200">
                  👉 Define QUIÉN ES el cliente
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  (edad, profesión, canales de comunicación, intereses amplios y nivel económico).
                </p>
              </div>

              <div className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                <p><strong>Ejemplo:</strong> Valeria, 26 años, diseñadora en Quito, usa TikTok, gana $1.200 al mes y busca reducir plásticos.</p>
              </div>
            </div>

            {/* Mapa de Empatía */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border-2 border-emerald-400 dark:border-emerald-800 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-600 text-white">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase">Herramienta 2</span>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Mapa de Empatía</h3>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-emerald-200 dark:border-emerald-900">
                <p className="text-sm sm:text-base font-bold text-emerald-950 dark:text-emerald-200">
                  👉 Define CÓMO SE SIENTE ese cliente
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  en situaciones específicas de su vida o entorno (su estado psicológico y emocional en un momento concreto).
                </p>
              </div>

              <div className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                <p><strong>Ejemplo:</strong> Frente a un champú sólido en la web, Valeria siente miedo de que le reseque el cabello rizado y duda de la promesa ecológica.</p>
              </div>
            </div>
          </div>

          {/* Quick Summary Note */}
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300">
            <strong>¿Cómo se complementan?</strong> Primero creas el <em>Buyer Persona</em> para saber a quién te diriges (su identidad). Luego usas el <em>Mapa de Empatía</em> para ponerte en sus zapatos en el momento exacto en que va a comprar o probar tu producto.
          </div>
        </div>
      )}

      {/* ----------------- LECCIÓN 4: DOS CASOS REALES DE ECUADOR ----------------- */}
      {currentLesson === 4 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Lección 4 · Aplicación Práctica en Ecuador
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              Dos Casos de Negocio Ecuatoriano 100% Reales
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Para evitar confusiones con marcas inventadas o inexistentes, estos son <strong>negocios reales y verificables en Ecuador</strong> que puedes visitar en internet hoy mismo.
            </p>
          </div>

          {/* Case Toggle Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCase('pacari')}
              className={`flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCase === 'pacari'
                  ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-200'
                  : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50'
              }`}
            >
              <span className="text-xs block text-stone-500 font-normal">Caso 1</span>
              🍫 Pacari® Chocolates (Quito)
            </button>

            <button
              onClick={() => setSelectedCase('waykana')}
              className={`flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCase === 'waykana'
                  ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-200'
                  : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50'
              }`}
            >
              <span className="text-xs block text-stone-500 font-normal">Caso 2</span>
              🍃 Waykana® Guayusa Amazónica (Tena/Quito)
            </button>
          </div>

          {/* Pacari Case Study Card */}
          {selectedCase === 'pacari' && (
            <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200 dark:border-stone-700">
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                    Empresa Ecuatoriana Real Verificada
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                    Pacari® Chocolates (SKS Farm Cía. Ltda.)
                  </h3>
                  <p className="text-xs text-stone-500">
                    Fundadores: Santiago Peralta y Carla Barboto · Sede: Quito · Web oficial: pacari.com
                  </p>
                </div>
                <a
                  href="https://www.pacari.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>Visitar pacari.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                  <span className="font-bold text-blue-700 dark:text-blue-400 block text-sm">
                    👤 Su Buyer Persona: Sebastián (34 años)
                  </span>
                  <p><strong>Quién es:</strong> Arquitecto sustentable en Cumbayá (Quito), ingresos medio-altos ($2.500), paga con tarjeta en línea y factura con RUC.</p>
                  <p><strong>Problema específico:</strong> Busca regalos corporativos y familiares de alto nivel sin plástico ni greenwashing.</p>
                </div>

                <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 block text-sm">
                    💭 Su Mapa de Empatía (En la web):
                  </span>
                  <p><strong>Qué siente:</strong> Orgullo al regalar cacao fino de aroma de Ecuador, pero teme que el chocolate se derrita con el sol en la entrega del courier.</p>
                  <p><strong>Qué ve:</strong> Empaques ecológicos de caña de azúcar sin plástico que lo tranquilizan.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
                <strong>Estrategia de Scott:</strong> Pacari no publica anuncios molestos; crea videos cortos mostrando a los agricultores de Napo y guías de maridaje de chocolate con café lojano.
              </div>
            </div>
          )}

          {/* Waykana Case Study Card */}
          {selectedCase === 'waykana' && (
            <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200 dark:border-stone-700">
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                    Empresa Ecuatoriana Real Verificada
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                    Waykana® Guayusa Amazónica (Waykana Herbs Cía. Ltda.)
                  </h3>
                  <p className="text-xs text-stone-500">
                    Fundadores: Demetrio Santander y Juan David Gómez · Sede: Tena (Napo) y Quito · Web oficial: waykana.com
                  </p>
                </div>
                <a
                  href="https://www.waykana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>Visitar waykana.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                  <span className="font-bold text-blue-700 dark:text-blue-400 block text-sm">
                    👤 Su Buyer Persona: Lucía (29 años)
                  </span>
                  <p><strong>Quién es:</strong> Líder de producto digital en Samborondón (Guayaquil), aficionada al crossfit, paga con Deuna o tarjeta.</p>
                  <p><strong>Problema específico:</strong> Necesita energía para trabajar 9 horas pero el café le causa acidez y las bebidas energéticas le dan taquicardia.</p>
                </div>

                <div className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 block text-sm">
                    💭 Su Mapa de Empatía (A las 3:00 PM):
                  </span>
                  <p><strong>Qué siente:</strong> Cansancio mental, busca una bebida natural pero duda si sabrá amarga o si las bolsitas tienen microplásticos.</p>
                  <p><strong>Qué ve:</strong> Certificación orgánica y pirámides de almidón de maíz biodegradable.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
                <strong>Estrategia de Scott:</strong> Waykana comparte comparativas científicas de cómo la L-teanina de la guayusa da energía sin taquicardias y recetas de bebidas frías en TikTok.
              </div>
            </div>
          )}
        </div>
      )}

      {/* ----------------- LECCIÓN 5: CUSTOMER JOURNEY ----------------- */}
      {currentLesson === 5 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Lección 5 · El Recorrido del Cliente
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              Las 5 Etapas del Viaje del Cliente (Customer Journey)
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Qué vive el cliente antes, durante y después de comprar en un e-commerce sostenible:
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Descubrimiento (Curioso)</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">Ve un video en TikTok o busca en Google «alternativas de champú sin plástico». Detecta la necesidad.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Consideración (Exigente)</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">Revisa la web, compara precios, ingredientes y costos de envío a su ciudad. Teme al greenwashing.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Compra y Pago (Confiado)</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">Paga con Deuna, transferencia o tarjeta. El OCR inteligente lee su comprobante en 2 segundos.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">4</span>
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Entrega y Desempaque (Emocionado)</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">Abre la caja de caña de azúcar sin plástico y encuentra una tarjeta de papel semilla para plantar.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-xs shrink-0">5</span>
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Fidelización (Orgulloso)</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400">Recomienda la marca a sus amigos, compra recargas (refill) y devuelve los envases vacíos.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- LECCIÓN 6: RESUMEN PARA EXAMEN Y AUTOEVALUACIÓN ----------------- */}
      {currentLesson === 6 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Lección 6 · Comprobación de Aprendizaje
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
              Resumen para Examen y Autoevaluación
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Repasa los puntos clave y responde la pregunta de control:
            </p>
          </div>

          {/* Quick Key Takeaways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-1">
              <span className="font-bold text-emerald-700 dark:text-emerald-300 block">1. David Meerman Scott:</span>
              <p>Popularizó el buyer persona en <em>«The New Rules of Marketing & PR»</em> para crear contenidos que resuelvan dudas reales sin publicidad masiva.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-1">
              <span className="font-bold text-blue-700 dark:text-blue-300 block">2. ¿Quién es vs. Cómo se siente?:</span>
              <p>El <strong>Buyer Persona</strong> define <em>quién es</em> el cliente; el <strong>Mapa de Empatía</strong> define <em>cómo se siente</em> en situaciones concretas.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-1">
              <span className="font-bold text-orange-700 dark:text-orange-300 block">3. Herramienta Make My Persona:</span>
              <p>Generador interactivo de HubSpot que estructura el perfil en 3 bloques: Perfil, Necesidades y Solución.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-1">
              <span className="font-bold text-purple-700 dark:text-purple-300 block">4. Casos Reales en Ecuador:</span>
              <p>Pacari® (chocolate biodinámico) y Waykana® (guayusa amazónica), con empaques biodegradables y comercio justo.</p>
            </div>
          </div>

          {/* Quick Question */}
          <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
              Pregunta de Control:
            </span>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              ¿Cuál es la diferencia exacta entre el Buyer Persona y el Mapa de Empatía?
            </p>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setQuizAnswer(0);
                  setQuizSubmitted(true);
                }}
                className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${
                  quizSubmitted && quizAnswer === 0
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-500'
                }`}
              >
                <strong>A)</strong> El Buyer Persona define quién es el cliente (edad, profesión, canales), mientras que el Mapa de Empatía define cómo se siente en situaciones específicas (su estado emocional).
              </button>

              <button
                onClick={() => {
                  setQuizAnswer(1);
                  setQuizSubmitted(true);
                }}
                className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${
                  quizSubmitted && quizAnswer === 1
                    ? 'border-rose-600 bg-rose-50 text-rose-900 font-semibold'
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-500'
                }`}
              >
                <strong>B)</strong> El Buyer Persona solo se usa en empresas extranjeras y el Mapa de Empatía solo en Ecuador.
              </button>
            </div>

            {quizSubmitted && (
              <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 text-xs font-medium">
                {quizAnswer === 0 ? '¡Exacto! Esa es la distinción fundamental que se evalúa en el curso.' : 'Respuesta incorrecta. Recuerda: Buyer Persona = Quién es; Mapa de Empatía = Cómo se siente.'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons (Anterior / Siguiente) */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setCurrentLesson((prev) => Math.max(prev - 1, 1))}
          disabled={currentLesson === 1}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            currentLesson === 1
              ? 'opacity-40 cursor-not-allowed text-stone-400'
              : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 hover:bg-stone-50 cursor-pointer shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Lección Anterior</span>
        </button>

        <span className="text-xs text-stone-500 font-mono">
          {currentLesson} / {lessons.length}
        </span>

        <button
          onClick={() => setCurrentLesson((prev) => Math.min(prev + 1, lessons.length))}
          disabled={currentLesson === lessons.length}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
            currentLesson === lessons.length
              ? 'opacity-40 cursor-not-allowed bg-stone-300 text-stone-500'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
          }`}
        >
          <span>Siguiente Lección</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
