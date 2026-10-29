import React, { useState } from 'react';
import { 
  BarChart3, 
  Smartphone, 
  CreditCard, 
  Search, 
  TrendingUp, 
  ExternalLink,
  ShieldAlert,
  Bot,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const EcuadorianStatsCard: React.FC = () => {
  const [activeFrictionTab, setActiveFrictionTab] = useState<'ocr' | 'rag' | 'reverseLogistics'>('ocr');

  return (
    <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md border border-stone-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            Radiografía Digital Ecuador
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Los Canales y Pagos de tus Personas, en Datos
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            Fundamenta tus buyer personas ecuatorianos en métricas auditadas, no en suposiciones.
          </p>
        </div>

        <div className="text-right text-[11px] text-stone-400 font-mono">
          Fuentes: Mentinno (Estado Digital Ecuador) & BID
        </div>
      </div>

      {/* 4 Key Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* TikTok */}
        <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-2">
          <div className="text-2xl sm:text-3xl font-extrabold text-pink-400 font-mono">
            18,5 M
          </div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <span>🎵 Usuarios alcanzables en TikTok</span>
            <span className="text-[10px] text-emerald-400 font-mono">+18,8%</span>
          </div>
          <p className="text-[11px] text-stone-400">
            Canal rey en Ecuador para descubrimiento orgánico y viralización de productos de moda, belleza y bienestar.
          </p>
        </div>

        {/* Google & YouTube */}
        <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-2">
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
            19,22 M
          </div>
          <div className="text-xs font-bold text-white">
            🌐 Dispositivos en Google & YouTube
          </div>
          <p className="text-[11px] text-stone-400">
            El 98% del ecosistema conectado consulta Google para validar credenciales, reseñas y tiendas antes de comprar.
          </p>
        </div>

        {/* Organic Search vs Social Traffic */}
        <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-2">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
            52,8% · 4,4%
          </div>
          <div className="text-xs font-bold text-white">
            🔎 Búsqueda Orgánica vs Redes
          </div>
          <p className="text-[11px] text-stone-400">
            El 52,8% del tráfico efectivo a tiendas llega por Google orgánico (SEO Inbound); las redes sociales representan el 4,4% directo.
          </p>
        </div>

        {/* Digital Payments (IDB) */}
        <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-2">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
            77%
          </div>
          <div className="text-xs font-bold text-white">
            💳 Prefiere Pagos Digitales
          </div>
          <p className="text-[11px] text-stone-400">
            Estudio del BID «Más allá del efectivo»: Deuna, transferencias directas y tarjetas dominan las preferencias en Ecuador.
          </p>
        </div>
      </div>

      {/* AI & Sustainability Friction Reducer Simulator */}
      <div className="p-5 rounded-xl bg-stone-800/50 border border-stone-700 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">
              ¿Cómo la IA y la Sostenibilidad resuelven fricciones reales en Ecuador?
            </h4>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-stone-900 rounded-lg text-xs">
            <button
              onClick={() => setActiveFrictionTab('ocr')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFrictionTab === 'ocr' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              OCR Bancario
            </button>
            <button
              onClick={() => setActiveFrictionTab('rag')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFrictionTab === 'rag' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Chatbot RAG
            </button>
            <button
              onClick={() => setActiveFrictionTab('reverseLogistics')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFrictionTab === 'reverseLogistics' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Logística Inversa
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-700/60 text-xs sm:text-sm space-y-2">
          {activeFrictionTab === 'ocr' && (
            <div>
              <div className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-4 h-4" />
                OCR de Comprobantes Bancarios (Pichincha / Guayaquil / Deuna)
              </div>
              <p className="text-stone-300 leading-relaxed">
                <strong>Fricción ecuatoriana:</strong> El comprador transfiere por banca móvil, pero debe enviar captura por WhatsApp y esperar hasta 4 horas para que validen manualmente su pedido.
                <br />
                <strong>Solución IA:</strong> Un modelo OCR lee la foto del comprobante en 2 segundos, coteja el número de transacción y monto en la base de datos y aprueba el despacho automáticamente.
              </p>
            </div>
          )}

          {activeFrictionTab === 'rag' && (
            <div>
              <div className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-4 h-4" />
                Chatbot RAG contra la sospecha de Greenwashing
              </div>
              <p className="text-stone-300 leading-relaxed">
                <strong>Fricción ecuatoriana:</strong> Los clientes conscientes dudan si el producto realmente es orgánico o si los empaques son verdaderamente compostables en Ecuador.
                <br />
                <strong>Solución IA:</strong> Un asistente RAG indexa las fichas técnicas y certificados B-Corp para responder con datos exactos: «Nuestra barra Pacari es biodegradable en 180 días según norma EN 13432».
              </p>
            </div>
          )}

          {activeFrictionTab === 'reverseLogistics' && (
            <div>
              <div className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-4 h-4" />
                Economía Circular y Refill Inteligente
              </div>
              <p className="text-stone-300 leading-relaxed">
                <strong>Fricción ecuatoriana:</strong> El cliente acumula botellas de vidrio o latas y le cuesta llevarlas a un punto de reciclaje lejano.
                <br />
                <strong>Solución IA & Eco:</strong> Al pedir un refill online, el sistema coordina con el courier para retirar los envases vacíos de su domicilio y le acredita $1,50 en saldo digital para su próxima compra.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
