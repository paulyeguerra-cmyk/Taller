import React from 'react';
import { BookOpen, ExternalLink, Lightbulb, Sparkles, CheckCircle2, ArrowRight, Target, Compass, Award } from 'lucide-react';
import { HUBSPOT_MAKE_MY_PERSONA_URL } from '../data/moduleFiveData';

export const DavidMeermanScottSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-emerald-500/5 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          Fundamento Teórico & Estrategia de Contenidos
        </div>
        <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
          2007 · The New Rules of Marketing & PR
        </span>
      </div>

      {/* Main Author Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            David Meerman Scott y la revolución del Buyer Persona
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            El estratega de marketing <strong className="text-amber-800 dark:text-amber-300 font-semibold">David Meerman Scott</strong> popularizó 
            el término bajo el enfoque de los negocios y los contenidos en su aclamado libro{' '}
            <em className="text-stone-900 dark:text-white font-medium">«The New Rules of Marketing and PR»</em> (Las nuevas reglas del marketing y las RR.PP.).
          </p>

          {/* Scott's Exact Definition Card */}
          <div className="relative p-5 sm:p-6 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border-l-4 border-amber-500 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-3xl text-amber-500 font-serif leading-none select-none">“</span>
              <div>
                <p className="text-base sm:text-lg font-medium text-stone-900 dark:text-stone-100 italic leading-relaxed">
                  «Un buyer persona es un perfil detallado de un comprador que representa a un grupo objetivo específico. Según Scott, las empresas no deben lanzar mensajes masivos, sino entender los problemas específicos, las metas y los hábitos de consumo de información de estos perfiles para crear estrategias de contenidos que resuelvan sus necesidades particulares.»
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                    S
                  </div>
                  <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                    David Meerman Scott · The New Rules of Marketing & PR
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-stone-600 dark:text-stone-400">
            A diferencia de la segmentación tradicional demográfica (ej: «mujeres de 25 a 40 años»), Scott demostró que las organizaciones exitosas 
            mapean los <strong>hábitos de búsqueda</strong> y las <strong>preguntas sin respuesta</strong> que tiene el cliente antes de comprar. 
            El marketing ya no consiste en interrumpir con anuncios, sino en ofrecer la respuesta exacta cuando el comprador la busca.
          </p>
        </div>

        {/* Timeline / Origins Quick Pill */}
        <div className="lg:col-span-4 bg-white/80 dark:bg-stone-900/80 backdrop-blur rounded-xl p-5 border border-stone-200 dark:border-stone-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-emerald-600" />
            Línea de tiempo histórica
          </div>
          
          <div className="space-y-3 text-xs">
            <div className="pb-2.5 border-b border-stone-100 dark:border-stone-800">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">1985–1999 · Alan Cooper</span>
              <p className="text-stone-600 dark:text-stone-400 mt-0.5">
                Crea personas para diseño de software y distingue entre «user personas» y «buyer personas».
              </p>
            </div>
            <div className="pb-2.5 border-b border-stone-100 dark:border-stone-800">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">2001–2002 · Tony Zambito</span>
              <p className="text-stone-600 dark:text-stone-400 mt-0.5">
                Funda la metodología formal del buyer persona orientada al ciclo de compra B2B.
              </p>
            </div>
            <div>
              <span className="font-bold text-amber-700 dark:text-amber-400 block">2007 · David Meerman Scott</span>
              <p className="text-stone-600 dark:text-stone-400 mt-0.5">
                Populariza el concepto masivamente como pilar fundamental de la estrategia de contenidos e Inbound Marketing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HubSpot Official Tool Recommendation */}
      <div className="mt-8 pt-6 border-t border-amber-200/50 dark:border-amber-900/50">
        <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 rounded-xl p-5 sm:p-6 border border-orange-300 dark:border-orange-800/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-orange-600 text-white text-[11px] font-bold tracking-wide uppercase">
                  Herramienta Oficial Recomendada
                </span>
                <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                  HubSpot Academy
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Make My Persona: Generador Interactivo de HubSpot
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Crea paso a paso una ficha visual descargable con los 3 bloques metodológicos de HubSpot: 
                <strong> Perfil sociodemográfico</strong>, <strong>Necesidades y dolores</strong>, y <strong>Estrategia de contenidos</strong>.
              </p>
            </div>

            <a
              href={HUBSPOT_MAKE_MY_PERSONA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-md hover:shadow-orange-500/25 shrink-0 group"
            >
              <span>Abrir Make My Persona</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* The 3 Blocks breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            <div className="bg-white/90 dark:bg-stone-900/90 rounded-lg p-3.5 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 dark:text-orange-400 mb-1">
                <Target className="w-3.5 h-3.5" />
                1 · Perfil
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Nombre, edad, profesión, ingresos en Ecuador, rol familiar y estilo de vida.
              </p>
            </div>

            <div className="bg-white/90 dark:bg-stone-900/90 rounded-lg p-3.5 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">
                <Lightbulb className="w-3.5 h-3.5" />
                2 · Necesidades
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Puntos de dolor reales, retos cotidianos y barreras (ej. greenwashing y costos de courier).
              </p>
            </div>

            <div className="bg-white/90 dark:bg-stone-900/90 rounded-lg p-3.5 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                <Award className="w-3.5 h-3.5" />
                3 · Solución
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Tipos de contenido inbound según Scott, propuesta de valor transparente y pruebas verificables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
