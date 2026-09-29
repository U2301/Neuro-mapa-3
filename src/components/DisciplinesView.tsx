import React, { useState } from 'react';
import { 
  Activity, 
  Brain, 
  Sparkles, 
  Eye, 
  Ear, 
  Flame, 
  ShieldCheck, 
  Heart, 
  Wind, 
  Droplets, 
  Layers, 
  Network, 
  Check, 
  Info,
  Workflow,
  ChevronRight
} from 'lucide-react';
import { cranialNervesList, autonomicComparisonTable, spinalSegmentsInfo } from '../data/neuroData';
import { CranialNerveItem } from '../types';

export const DisciplinesView: React.FC = () => {
  const [cranialFilter, setCranialFilter] = useState<'Todos' | 'Sensorial' | 'Motor' | 'Mixto'>('Todos');
  const [selectedNerve, setSelectedNerve] = useState<CranialNerveItem>(cranialNervesList[0]);
  const [activeSubTab, setActiveSubTab] = useState<'autonomo' | 'pares' | 'espinal' | 'encefalo'>('autonomo');

  const filteredNerves = cranialNervesList.filter(n => {
    if (cranialFilter === 'Todos') return true;
    return n.type === cranialFilter;
  });

  return (
    <section id="view-disciplines" className="block space-y-8 font-sans">
      {/* 1. Header and Quick Navigation Sub-Tabs */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2b553c]/10 text-[#2b553c]">
              <Network className="w-3 h-3 text-[#2b553c]" />
              <span>Estructura Anatómica y Funcional</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292420]">
              Sistema Nervioso: SNP y SNC
            </h2>
            <p className="text-xs sm:text-sm text-[#787169]">
              SNP (Ganglios y Nervios) • SNC (Núcleos y Fascículos) • Organización por sistemas
            </p>
          </div>

          {/* Quick Subtab Selector */}
          <div className="flex items-center gap-1.5 bg-[#f5efe9] p-1.5 rounded-xl border border-[#d4cbc2]/70 flex-wrap">
            <button
              onClick={() => setActiveSubTab('autonomo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'autonomo'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Autónomo (Simpático/Parasimpático)
            </button>
            <button
              onClick={() => setActiveSubTab('pares')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'pares'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              12 Pares Craneales
            </button>
            <button
              onClick={() => setActiveSubTab('espinal')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'espinal'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Médula & Nervios Espinales
            </button>
            <button
              onClick={() => setActiveSubTab('encefalo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'encefalo'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Encéfalo & Tallo
            </button>
          </div>
        </div>

        {/* Dual Pillar Overview Cards */}
        <div className="mt-6 pt-6 border-t border-[#d4cbc2]/60 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f0f6f9] p-4 sm:p-5 rounded-2xl border border-[#205b76]/30">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#205b76]/15 flex items-center justify-center text-[#205b76]">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#0c3b52]">Sistema Nervioso Periférico (SNP)</h3>
                <span className="text-[11px] text-[#205b76] font-semibold">Ganglios y Nervios</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#315263] leading-relaxed">
              Conecta los centros nerviosos con los efectores y receptores periféricos. Se divide en:
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#205b76]/20">
                <span className="font-bold text-[#0c3b52] block">1. Autónomo / Vegetativo</span>
                <span className="text-[11px] text-[#556975]">Involuntario: Simpático y Parasimpático</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#205b76]/20">
                <span className="font-bold text-[#0c3b52] block">2. Somático</span>
                <span className="text-[11px] text-[#556975]">Voluntario: 12 pares craneales y 31 pares espinales</span>
              </div>
            </div>
          </div>

          <div className="bg-[#edf5f0] p-4 sm:p-5 rounded-2xl border border-[#2b553c]/30">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2b553c]/15 flex items-center justify-center text-[#2b553c]">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#162e21]">Sistema Nervioso Central (SNC)</h3>
                <span className="text-[11px] text-[#2b553c] font-semibold">Núcleos y Fascículos (Asicuto)</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#274835] leading-relaxed">
              Centro integrador de procesamiento superior y reflejo. Comprende dos grandes porciones:
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#2b553c]/20">
                <span className="font-bold text-[#162e21] block">1. Médula Espinal</span>
                <span className="text-[11px] text-[#3d5e4b]">31 segmentos (8C, 12T, 5L, 5S, 1Co)</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-[#2b553c]/20">
                <span className="font-bold text-[#162e21] block">2. Encéfalo</span>
                <span className="text-[11px] text-[#3d5e4b]">Tallo Cerebral y Prosencéfalo (Corteza/Límbico)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUBTAB: AUTÓNOMO (SIMPÁTICO VS PARASIMPÁTICO) */}
      {activeSubTab === 'autonomo' && (
        <div className="space-y-6">
          {/* Card explicativa inicial */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#292420]">
                  ¿Por qué se llama Autónomo o Vegetativo?
                </h3>
                <p className="text-xs sm:text-sm text-[#49423c] mt-1 leading-relaxed">
                  <strong>Funciona por sí mismo</strong> y nos permite funciones automáticas como lo serían la respiración, el desecho, etc., sucediendo sin que tengamos que estar pensando en hacerlo. Se le conoce como <em>vegetativo</em> porque se encarga de las funciones tan básicas como las de una planta, sin la necesidad de conciencia, manteniéndonos con vida.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Dual Cards: Simpático vs Parasimpático */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Simpático */}
            <div className="bg-white rounded-2xl border-2 border-[#944920]/40 p-5 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#944920]/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#944920] text-white">
                  S.N. Simpático
                </span>
                <span className="text-xs font-semibold text-[#944920]">
                  Nos prepara para la acción
                </span>
              </div>
              <p className="text-xs text-[#49423c] mb-4">
                Activa los recursos corporales para la huida, lucha o acción rápida mediante liberación de <strong>adrenalina</strong> y respuesta metabólica.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fdf5ee] border border-[#944920]/20">
                  <Heart className="w-4 h-4 text-[#944920] flex-shrink-0" />
                  <span><strong>Cardiovascular:</strong> Eleva frecuencia cardíaca (FC), respiratoria (FR) y presión arterial (PA).</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fdf5ee] border border-[#944920]/20">
                  <Flame className="w-4 h-4 text-[#944920] flex-shrink-0" />
                  <span><strong>Músculo y piel:</strong> Eleva irrigación sanguínea periférica para músculo-esquelético. Dilata vasos (nos ponemos <em>rojos y calientes</em> en la superficie).</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fdf5ee] border border-[#944920]/20">
                  <Activity className="w-4 h-4 text-[#944920] flex-shrink-0" />
                  <span><strong>Metabolismo:</strong> Libera adrenalina y eleva glucosa periférica en el músculo esquelético.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fdf5ee] border border-[#944920]/20">
                  <Eye className="w-4 h-4 text-[#944920] flex-shrink-0" />
                  <span><strong>Ojo y secreciones:</strong> Dilata pupila. Baja secreciones de lágrima, saliva y moco.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fdf5ee] border border-[#944920]/20">
                  <Wind className="w-4 h-4 text-[#944920] flex-shrink-0" />
                  <span><strong>Digestión y tiempo:</strong> Baja activación digestiva. La percepción del tiempo suele disminuir para hacer la mejor acción.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#fef7e6] border border-amber-300 text-amber-950 font-medium">
                  <strong>Efecto reparador final:</strong> Siempre genera <strong>cortisol</strong> para reparar, por ejemplo, lo que la adrenalina destruyó.
                </div>
              </div>
            </div>

            {/* Parasimpático */}
            <div className="bg-white rounded-2xl border-2 border-[#205b76]/40 p-5 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#205b76]/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#205b76] text-white">
                  S.N. Parasimpático
                </span>
                <span className="text-xs font-semibold text-[#205b76]">
                  Reposo, Músculo Liso y Digestión
                </span>
              </div>
              <p className="text-xs text-[#49423c] mb-4">
                Conserva energía y promueve el mantenimiento visceral. Su vía principal es el <strong>Nervio Vago (Par X)</strong>.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f0f6f9] border border-[#205b76]/20">
                  <Heart className="w-4 h-4 text-[#205b76] flex-shrink-0" />
                  <span><strong>Cardiovascular:</strong> Baja frecuencia cardíaca, frecuencia respiratoria y presión arterial.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f0f6f9] border border-[#205b76]/20">
                  <Droplets className="w-4 h-4 text-[#205b76] flex-shrink-0" />
                  <span><strong>Tracto digestivo:</strong> Eleva irrigación sanguínea del tracto digestivo = <em>Músculo liso</em>.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f0f6f9] border border-[#205b76]/20">
                  <Flame className="w-4 h-4 text-[#205b76] flex-shrink-0" />
                  <span><strong>Periferia y músculo:</strong> Baja la irrigación periférica (nos ponemos <em>pálidos y fríos</em>). Relaja/baja el músculo esquelético.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f0f6f9] border border-[#205b76]/20">
                  <Eye className="w-4 h-4 text-[#205b76] flex-shrink-0" />
                  <span><strong>Pupila:</strong> Contrae la pupila (miosis).</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f0f6f9] border border-[#205b76]/20">
                  <Droplets className="w-4 h-4 text-[#205b76] flex-shrink-0" />
                  <span><strong>Secreciones:</strong> Eleva la secreción de lágrima, saliva y moco.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f0f6f9] border border-[#205b76]/30 text-[#0c3b52] font-medium">
                  <strong>Estructura clave:</strong> La rama principal del sistema parasimpático es el <strong>Nervio Vago / Neumogástrico (Par X)</strong>, cuyo núcleo está en el bulbo raquídeo.
                </div>
              </div>
            </div>
          </div>

          {/* Full Systematic Table */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <h3 className="text-base font-bold text-[#292420] mb-3">
              Tabla Comparativa de Respuestas Autónomas
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#f5efe9] border-b border-[#d4cbc2]">
                    <th className="p-3 font-bold text-[#292420]">Órgano / Parámetro</th>
                    <th className="p-3 font-bold text-[#944920]">Simpático (Acción)</th>
                    <th className="p-3 font-bold text-[#205b76]">Parasimpático (Reposo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d4cbc2]/60">
                  {autonomicComparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#fbf8f5] transition">
                      <td className="p-3 font-semibold text-[#292420] whitespace-nowrap">{row.organOrSystem}</td>
                      <td className="p-3 text-[#702d08]">{row.sympathetic}</td>
                      <td className="p-3 text-[#134257]">{row.parasympathetic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUBTAB: 12 PARES CRANEALES */}
      {activeSubTab === 'pares' && (
        <div className="space-y-6">
          {/* Header notice */}
          <div className="bg-[#fef7e6] border border-amber-300 p-4 rounded-xl flex items-center justify-between gap-3">
            <div>
              <p className="font-bold text-xs sm:text-sm text-amber-950">
                Punto Clave de Clase:
              </p>
              <p className="text-xs text-amber-900 mt-0.5">
                En los nervios craneales <strong>NO aplica la ley de Bell-Magendie</strong> (pueden ser exclusivamente sensoriales, motores o combinaciones mixtas).
              </p>
            </div>
            <div className="flex items-center gap-1">
              {(['Todos', 'Sensorial', 'Motor', 'Mixto'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setCranialFilter(f)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer ${
                    cranialFilter === f
                      ? 'bg-[#2b553c] text-white'
                      : 'bg-white text-[#49423c] border border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid + Inspector Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* List of 12 nerves */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredNerves.map(nerve => {
                const isSelected = selectedNerve.roman === nerve.roman;
                return (
                  <div
                    key={nerve.roman}
                    onClick={() => setSelectedNerve(nerve)}
                    className={`p-3.5 rounded-xl border transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#f4efe9] border-[#2b553c] ring-1 ring-[#2b553c]'
                        : 'bg-white border-[#d4cbc2] hover:border-[#b8aba0] hover:bg-[#faf7f4]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#2b553c] text-white text-xs font-bold flex items-center justify-center font-serif">
                          {nerve.roman}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-[#292420]">
                          {nerve.name}
                        </h4>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        nerve.type === 'Sensorial' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : nerve.type === 'Motor' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {nerve.type}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#49423c] line-clamp-2">
                      {nerve.functionSummary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Detailed Dossier of Selected Nerve */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs space-y-4">
              <div className="border-b border-[#d4cbc2]/60 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#787169] uppercase tracking-wider">
                    Par Craneal {selectedNerve.roman} ({selectedNerve.number} de 12)
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                    selectedNerve.type === 'Sensorial' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : selectedNerve.type === 'Motor' 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedNerve.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#292420] mt-1">
                  {selectedNerve.name}
                </h3>
                {selectedNerve.alternativeName && (
                  <p className="text-xs text-[#787169] italic">
                    También conocido como: {selectedNerve.alternativeName}
                  </p>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-2">
                  Detalles y Ramas en Clase:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#231f1c]">
                  {selectedNerve.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#fbf8f5] p-2 rounded-lg border border-[#d4cbc2]/50">
                      <ChevronRight className="w-3.5 h-3.5 text-[#2b553c] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[#fef7e6] border border-amber-300 rounded-xl text-xs text-amber-950">
                <p className="font-bold text-amber-900 mb-1">
                  Resumen de Examen:
                </p>
                <p>{selectedNerve.examKey}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SUBTAB: MÉDULA & NERVIOS ESPINALES */}
      {activeSubTab === 'espinal' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Médula Espinal (31 Segmentos) */}
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#2b553c]/15 text-[#2b553c] flex items-center justify-center font-bold text-sm">
                  31
                </div>
                <h3 className="font-bold text-base text-[#292420]">
                  Médula Espinal (31 Segmentos)
                </h3>
              </div>
              <p className="text-xs text-[#49423c] leading-relaxed mb-4">
                Tiene 31 segmentos conectados directamente en la médula espinal donde se alojan los departamentos de recepción para cada par de nervios:
              </p>

              <div className="space-y-2">
                {spinalSegmentsInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fbf8f5] border border-[#d4cbc2]/60 text-xs">
                    <div>
                      <span className="font-bold text-[#292420]">{item.region}</span>
                      <p className="text-[11px] text-[#787169]">{item.function}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white font-bold text-[#2b553c] border border-[#d4cbc2]">
                      {item.segments} {item.segments === 1 ? 'segmento' : 'segmentos'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 31 Pares de Nervios Espinales */}
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#944920]/15 text-[#944920] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h3 className="font-bold text-base text-[#292420]">
                    31 Pares de Nervios Espinales
                  </h3>
                </div>
                <p className="text-xs text-[#49423c] leading-relaxed mb-3">
                  Cada par tiene su departamento de recepción conectado en la médula espinal. El primer par, que sería <strong>C1</strong>, está en el segmento <strong>C1</strong> de la médula espinal.
                </p>

                {/* 4 nerves per pair golden rule */}
                <div className="p-4 bg-[#fdf5ee] border-2 border-[#944920]/30 rounded-xl mb-4">
                  <span className="text-[11px] font-bold text-[#944920] uppercase tracking-wider block mb-1">
                    Regla Anatómica de Examen:
                  </span>
                  <p className="text-sm font-bold text-[#522510] mb-2">
                    Son 4 nervios por cada par:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-[#944920]/20 font-semibold text-[#522510]">
                      1. Izquierdo
                    </div>
                    <div className="bg-white p-2 rounded border border-[#944920]/20 font-semibold text-[#522510]">
                      2. Derecho
                    </div>
                    <div className="bg-white p-2 rounded border border-[#944920]/20 font-semibold text-[#522510]">
                      3. Aferente o Dorsal (Sensorial)
                    </div>
                    <div className="bg-white p-2 rounded border border-[#944920]/20 font-semibold text-[#522510]">
                      4. Eferente Ventral (Motor)
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#edf5f0] border border-[#2b553c]/30 rounded-xl text-xs text-[#162e21]">
                <strong>Resumen numérico:</strong> 8 cervicales + 12 torácicos + 5 lumbares + 5 sacros + 1 coxígeo = <strong>31 pares de nervios espinales</strong>.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SUBTAB: ENCÉFALO, TALLO & PROSENCÉFALO */}
      {activeSubTab === 'encefalo' && (
        <div className="space-y-6">
          {/* Tallo Cerebral y Formación Reticular */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#8c5e3c]/15 text-[#8c5e3c]">
                Eje Troncal
              </span>
              <h3 className="text-base font-bold text-[#292420]">
                Tallo / Tronco Cerebral & Formación Reticular
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed mb-4">
              Tiene una estructura a su largo importante llamada <strong>formación reticular</strong>: son fibras de interconexión que conectan el tallo cerebral para recibir la información de entrada y salida, y <strong>apagar o encender la corteza cerebral</strong>.
            </p>

            {/* Divisiones del Tallo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Rombencéfalo */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <span className="text-xs font-bold text-[#8c5e3c] block mb-1">
                  1. Rombencéfalo (Abajo hacia arriba)
                </span>
                <ul className="space-y-1.5 text-xs text-[#49423c]">
                  <li>• <strong>Bulbo raquídeo / Médula oblonga:</strong> Aquí se encuentra el núcleo del nervio vago.</li>
                  <li>• <strong>Puente de Varolio / Protuberancia Anular.</strong></li>
                  <li>• <strong>Cerebelo (atrás):</strong> Coordina movimientos, equilibrio y participa en aprendizajes motores (secuencia de actos motores).</li>
                </ul>
              </div>

              {/* Mesencéfalo */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <span className="text-xs font-bold text-[#944920] block mb-1">
                  2. Mesencéfalo (Anterior y Posterior)
                </span>
                <ul className="space-y-1.5 text-xs text-[#49423c]">
                  <li>• <strong>Tegmentum (anterior):</strong> Pedúnculos cerebrales y núcleos pigmentados con <em>Sustancia Nigra</em> y <em>ATV</em> (productoras de dopamina) y <em>Núcleo Rojo</em> (afina el movimiento).</li>
                  <li>• <strong>Tectum (posterior):</strong> 4 bolitas llamadas tubérculos cuadrigéminos / colículos (2 superiores visuales, 2 inferiores auditivos) para orientación ante estímulos.</li>
                </ul>
              </div>

              {/* Diencéfalo */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <span className="text-xs font-bold text-[#704812] block mb-1">
                  3. Diencéfalo (Familia Tálamo)
                </span>
                <ul className="space-y-1.5 text-xs text-[#49423c]">
                  <li>• <strong>Tálamo (2):</strong> Filtro sensorial (elige qué estímulos filtras) <em>excepto el olfato</em>.</li>
                  <li>• <strong>Hipotálamo:</strong> Controla pituitaria, tiroides, endocrino y metabolismo; jefe del SNA.</li>
                  <li>• <strong>Epitálamo:</strong> Glándula pineal y ritmos biológicos (tiempo, luz y oscuridad).</li>
                  <li>• <strong>Subtálamo:</strong> Par de núcleos que afinan el movimiento junto con cerebelo, ganglios basales y núcleos pigmentados.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prosencéfalo: Corteza, Límbico y Basales */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <h3 className="text-base font-bold text-[#292420] mb-3">
              Prosencéfalo: Corteza Cerebral, Sistema Límbico y Ganglios Basales
            </h3>

            {/* 4 Lóbulos Corticales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#f0f6f9] border border-[#205b76]/30">
                <span className="font-bold text-xs text-[#0c3b52] block mb-1">Lóbulo Occipital</span>
                <p className="text-xs text-[#315263]">
                  Recibe y procesa la información visual exclusivamente.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#fdf5ee] border border-[#944920]/30">
                <span className="font-bold text-xs text-[#522510] block mb-1">Lóbulo Temporal</span>
                <p className="text-xs text-[#522510]">
                  Vestibular, olfativa, auditiva. Lenguaje, emociones (amígdala) y memoria corto/largo plazo (hipocampo).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#faf3e6] border border-[#8c5e3c]/30">
                <span className="font-bold text-xs text-[#451a03] block mb-1">Lóbulo Parietal</span>
                <p className="text-xs text-[#451a03]">
                  Gusto y somatosensorial (tacto, presión, dolor, temperatura, información propioceptiva y viscerocepción).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#edf5f0] border border-[#2b553c]/30">
                <span className="font-bold text-xs text-[#162e21] block mb-1">Lóbulo Frontal</span>
                <p className="text-xs text-[#162e21]">
                  Movimiento o "lo que hago" y funciones ejecutivas (decisiones, verificación, anticipación, control impulsos, metas).
                </p>
              </div>
            </div>

            {/* Sistema Límbico & Ganglios Basales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <span className="font-bold text-xs text-[#944920] block mb-1">
                  Sistema Límbico (Emociones y Recuerdos)
                </span>
                <p className="text-xs text-[#49423c] mb-2 leading-relaxed">
                  Red de estructuras subcorticales y corticales básicas que permite la generación de emociones y la configuración de recuerdos.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {['Amígdala', 'Hipocampo', 'Corteza del cíngulo', 'Prefrontal', 'Núcleos talámicos', 'Hipotálamo', 'Área septal/septum', 'Núcleo accumbens', 'ATV'].map((item, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white border border-[#d4cbc2] rounded text-[#292420]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <span className="font-bold text-xs text-[#2b553c] block mb-1">
                  Ganglios Basales (Afinación del Movimiento)
                </span>
                <p className="text-xs text-[#49423c] mb-2 leading-relaxed">
                  Estructuras subcorticales que participan en la regulación motora junto al cerebelo, el subtálamo y los núcleos pigmentados.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {['Núcleo caudado', 'Putamen', 'Globo pálido'].map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border border-[#2b553c]/30 font-bold rounded text-[#2b553c]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
