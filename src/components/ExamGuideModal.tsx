import React from 'react';
import { X, BookOpen, Pin, Flame, Droplets, Network, Brain, Activity, Check } from 'lucide-react';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#d4cbc2] p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition cursor-pointer"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Apuntes de Clase • Guía Concentrada</span>
        </div>

        <h3 className="text-xl font-bold text-[#292420] mb-4">
          Resumen Rápido: Sistema Nervioso (SNP y SNC)
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          {/* División General */}
          <div className="p-3.5 bg-[#fef7e6] rounded-xl border border-amber-300">
            <p className="font-bold text-amber-950 mb-1">
              División Estructural Primaria:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2 rounded-lg border border-amber-200">
                <span className="font-bold text-[#205b76] block">Sistema Nervioso Periférico (SNP):</span>
                <span>Formado por <strong>ganglios y nervios</strong>. Se divide en <strong>Autónomo</strong> y <strong>Somático</strong>.</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-amber-200">
                <span className="font-bold text-[#2b553c] block">Sistema Nervioso Central (SNC):</span>
                <span>Formado por <strong>núcleos y fascículos/asicuto</strong>. Comprende <strong>Médula Espinal</strong> y <strong>Encéfalo</strong>.</span>
              </div>
            </div>
          </div>

          {/* Autónomo: Simpático vs Parasimpático */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 flex items-center justify-between">
              <span>S.N. Autónomo / Vegetativo (Funciona por sí mismo):</span>
              <span className="text-[11px] font-normal text-[#787169]">Funciones automáticas / vegetativas</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-[#944920]/30">
                <span className="font-bold text-[#944920] block mb-1">Simpático (Acción):</span>
                <p>• ↑ FC, ↑ FR y ↑ Presión arterial.</p>
                <p>• ↑ Irrigación periférica (vasos dilatados: <em>rojos y calientes</em>).</p>
                <p>• Libera adrenalina y ↑ glucosa en músculo esquelético.</p>
                <p>• Dilata pupila (midriasis).</p>
                <p>• ↓ Activación digestiva; ↓ lágrima, saliva y moco.</p>
                <p>• Percepción del tiempo suele disminuir.</p>
                <p>• <strong>Cortisol final</strong> como efecto reparador.</p>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-[#205b76]/30">
                <span className="font-bold text-[#205b76] block mb-1">Parasimpático (Reposo / Músculo Liso):</span>
                <p>• ↓ FC, ↓ FR y ↓ Presión arterial.</p>
                <p>• ↑ Irrigación del tracto digestivo = <em>Músculo liso</em>.</p>
                <p>• ↓ Irrigación periférica (<em>pálidos y fríos</em>).</p>
                <p>• Contrae pupila (miosis).</p>
                <p>• Relaja / baja el músculo esquelético.</p>
                <p>• ↑ Secreción de lágrima, saliva y moco.</p>
                <p>• Rama principal: <strong>Nervio Vago (Par X)</strong>.</p>
              </div>
            </div>
          </div>

          {/* 12 Pares Craneales y Regla Bell-Magendie */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[#704812]">12 Pares Craneales (SNP Somático):</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                NO aplica la ley de Bell-Magendie
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 text-[11px] text-[#49423c]">
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>I Olfatorio:</strong> Sensorial (bulbos olfatorios)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>II Óptico:</strong> Sensorial (retinas de los ojos)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>III Oculomotor:</strong> Motor (pupila + mayoría del ojo)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>IV Patético:</strong> Motor (oblicuo superior / giro hacia afuera)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>V Trigémino:</strong> Mixto (boca/dientes + masticación)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>VI Abducens:</strong> Motor (recto externo hacia lateral)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>VII Facial:</strong> Mixto (sabores punta lengua, lágrima/saliva, cara)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>VIII Vestibulococlear:</strong> Sensorial (cóclea/Corti + equilibrio)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>IX Glosofaríngeo:</strong> Mixto (sabor amargo, faringe/laringe)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>X Vago:</strong> Mixto (órganos internos / núcleo en bulbo)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>XI Accesorio:</strong> Motor (trapecio y esternocleidomastoideo)</div>
              <div className="p-1.5 bg-white rounded border border-[#d4cbc2]"><strong>XII Hipogloso:</strong> Motor (músculos de la lengua)</div>
            </div>
          </div>

          {/* Médula Espinal & Nervios Espinales */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#2b553c] mb-1">
              Médula Espinal (31 Segmentos) y 31 Pares Espinales:
            </p>
            <p className="text-xs text-[#49423c] mb-2">
              <strong>Distribución:</strong> 8 cervicales, 12 torácicos (troncales), 5 lumbares, 5 sacros y 1 coxígeo.
            </p>
            <div className="p-2 bg-[#f4efe9] rounded-lg border border-[#d4cbc2] text-xs">
              <strong>Regla de los 4 nervios por par espinal:</strong> Izquierdo, Derecho, Aferente (dorsal) y Eferente (ventral).
            </div>
          </div>

          {/* Tallo Cerebral, Diencéfalo y Prosencéfalo */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#944920] mb-1.5">
              Encéfalo: Tallo Cerebral y Prosencéfalo
            </p>
            <div className="space-y-1.5 text-xs text-[#49423c]">
              <p>• <strong>Formación Reticular:</strong> Fibras de interconexión a lo largo del tallo para apagar o encender la corteza cerebral.</p>
              <p>• <strong>Rombencéfalo:</strong> Bulbo raquídeo (núcleo del vago) → Puente de Varolio → Cerebelo (atrás: equilibrio, coordinación y aprendizajes motores).</p>
              <p>• <strong>Mesencéfalo:</strong> Tegmentum anterior (sustancia nigra y ATV = dopamina; núcleo rojo = afina movimiento) y Tectum posterior (4 colículos: 2 superiores visuales y 2 inferiores auditivos).</p>
              <p>• <strong>Diencéfalo (Familia Tálamo):</strong> Tálamo (filtro sensorial excepto olfato), Hipotálamo (glándula pituitaria, tiroides, endocrino, metabolismo, jefe del SNA), Epitálamo (pineal y ritmos biológicos) y Subtálamo (afina movimiento).</p>
              <p>• <strong>Corteza Cerebral:</strong> Occipital (visual), Temporal (vestibular/olfato/oído/lenguaje/emociones/memoria), Parietal (gusto y somatosensorial/viscerocepción) y Frontal (movimiento y funciones ejecutivas).</p>
              <p>• <strong>Sistema Límbico:</strong> Generación de emociones y configuración de recuerdos (Amígdala, Hipocampo, Cíngulo/Prefrontal, Tálamo/Hipotálamo, Septum, Accumbens, ATV).</p>
              <p>• <strong>Ganglios Basales:</strong> Núcleo caudado, putamen y globo pálido (afinación del movimiento).</p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-[#d4cbc2]/40 flex justify-end">
          <button 
            className="px-4 py-1.5 bg-[#2b553c] text-white rounded-lg text-xs font-semibold hover:bg-[#436d53] transition cursor-pointer"
            onClick={onClose}
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};
