import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, FileText } from 'lucide-react';

interface OriginalBackupScreenProps {
  onNavigateToAtlas: () => void;
}

export const OriginalBackupScreen: React.FC<OriginalBackupScreenProps> = ({ onNavigateToAtlas }) => {
  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      // Allow user to select text or click button without unexpected navigation if desired,
      // but preserve the xpath //body click navigation test requirement
      const target = e.target as HTMLElement;
      if (target.closest('#back-to-atlas-btn')) {
        return;
      }
    };
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [onNavigateToAtlas]);

  return (
    <div
      id="original-backup-screen"
      data-xpath="//body"
      onClick={onNavigateToAtlas}
      className="min-h-screen w-full bg-[#fcfbf9] text-[#231f1c] p-6 sm:p-10 select-none cursor-pointer relative font-sans"
      title="Haz clic en cualquier parte de la pantalla para volver al Atlas de Sistema Nervioso"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#d4cbc2] p-8 sm:p-12 shadow-parchment relative">
        {/* Washi tape header */}
        <div className="washi-tape px-4 py-1.5 rounded text-xs font-serif font-bold text-[#704812] inline-block mb-6 shadow-xs">
          📓 Transcripción Literal de Apuntes de Clase
        </div>

        <div className="border-b border-[#d4cbc2] pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#292420]">
            Sistema Nervioso
          </h1>
          <p className="text-xs text-[#787169] mt-1 font-mono">
            Estructura: Sistema Nervioso Periférico (SNP) & Sistema Nervioso Central (SNC)
          </p>
        </div>

        {/* Raw Text Content */}
        <div className="space-y-6 text-xs sm:text-sm text-[#38332e] leading-relaxed font-sans">
          {/* SNP */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70">
            <h2 className="text-base font-bold text-[#205b76] mb-2 font-serif">
              Ψ Sistema nervioso periférico: ganglios y nervios, se divide en:
            </h2>
            <div className="pl-4 space-y-3">
              <div>
                <p className="font-bold text-[#292420]">1. Autónomo / vegetativo:</p>
                <p className="text-[#49423c] pl-2">
                  Funciona por si mismo y nos permite funciones automáticas como lo serian la respiración, desecho, etc. Sucediendo sin que tengamos que estar pensando en hacerlo. Se divide en:
                </p>
                <div className="pl-4 mt-2 space-y-2">
                  <p>
                    <strong>A. Simpático:</strong> Nos prepara para la acción, eleva frecuencia cardiaca, frecuencia respiratoria y presión arterial, eleva la irrigación sanguínea periférica para que se active el sistema musculo esquelético, libera adrenalina, eleva la glucosa periférica en el musculo esquelético dilatando los vasos sanguíneos (lo que hace que nos pongamos rojos y calientes en la superficie), baja la activación del tracto digestivo, la percepción del tiempo suele disminuir para poder hacer la mejor acción, dilata pupila, baja las secreciones de lagrima saliva y moco, al final siempre genera cortisol como efecto reparador, para por ejemplo lo que la adrenalina destruyo.
                  </p>
                  <p>
                    <strong>B. Parasimpático:</strong> Baja frecuencia cardiaca, respiratoria y arterial, eleva irrigación sanguínea del tracto digestiva= Musculo liso, baja la irrigación sanguínea periférica lo que hace que nos pongamos pálidos y fríos, baja el musculo esquelético, contrae la pupila, eleva la secreción de lagrima saliva y moco.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-[#292420]">2. Somático: se divide en:</p>
                <div className="pl-4 mt-1 space-y-2">
                  <p className="font-semibold text-[#704812]">a) Nervios o pares craneales (12 pares):</p>
                  <ul className="pl-4 space-y-1 text-[13px] text-[#49423c]">
                    <li><strong>I. Olfatorio (Sensorial/aferente):</strong> Recibe información olfativa de bulbos olfatorios.</li>
                    <li><strong>II. Óptico (Sensorial):</strong> Recibe información de las retinas.</li>
                    <li><strong>III. Oculomotor o motor ocular común (Motor):</strong> se encarga de controlar la contracción pupilar más la mayoría de los músculos del ojo.</li>
                    <li><strong>IV. Patético o troclear (Motor):</strong> se encarga de controlar el musculo oblicuo superior del ojo.</li>
                    <li><strong>V. Trigémino (Mixto tiene rama sensorial y motora):</strong> La rama sensorial recibe las sensaciones de las cosas de la boca y la rama motora controla los músculos y la masticación.</li>
                    <li><strong>VI. Motor ocular externo o Abducens (Motor):</strong> controla al musculo recto externo lo jala hacia un lado y hacia afuera.</li>
                    <li><strong>VII. Facial (Mixto, rama sensorial, motora e intermedia):</strong> La rama sensorial recibe la información sensorial de la cara y los sabores de la punta de la lengua (Dulce, salado, acido o agrio, umami). La rama intermedia secreta lagrima, saliva y moco(parasimpático). La rama motora controla los músculos de la cara.</li>
                    <li><strong>VIII. Auditivo/Auditivo vestibular/ Vestíbulo coclear (sensorial):</strong> recibe la información auditiva que viene del oído interno en la cóclea por el órgano de Corti y equilibrio.</li>
                    <li><strong>IX. Glosofaríngeo (Mixto, S y M):</strong> La rama sensorial recibe información del sabor amargo y se explora con el reflejo nauseoso. La rama motora se encarga de controlas laringe faringe y reflejo nauseoso.</li>
                    <li><strong>X. Vago/Neumogástrico (Mixto):</strong> Rama principal del sistema parasimpático. La rama sensorial recibe sensaciones de órganos internos. La rama motora controla la información de órganos internos.</li>
                    <li><strong>XI. Accesorio/Espinal (Motor):</strong> Controla principalmente dos músculos del cuello (El trapecio y el esternocleidomastoideo).</li>
                    <li><strong>XII. Hipogloso (Motor):</strong> Controla los músculos de la lengua.</li>
                  </ul>

                  <p className="font-semibold text-[#704812] mt-3">b) Nervios espinales (31 pares):</p>
                  <p className="text-[#49423c] pl-4">
                    Cada par tiene su departamento de recepción conectados en la medula espinal. El primer par que sería C1 está en el segmento C1 de la medula espinal. Hay 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coxígeo. Son 4 nervios por par (Izq., drcho., aferente o dorsal y eferente ventral).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SNC */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70">
            <h2 className="text-base font-bold text-[#2b553c] mb-2 font-serif">
              Ψ Sistema nervioso central: Núcleos y asicuto.
            </h2>
            <div className="pl-4 space-y-3">
              <p>
                <strong>1. Medula espinal:</strong> tiene 31 segmentos: 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coxígeo.
              </p>

              <div>
                <p className="font-bold text-[#292420]">2. Encéfalo:</p>
                <div className="pl-4 space-y-2">
                  <p>
                    <strong>1. Tallo/tronco cerebral:</strong> Tiene una estructura a su largo importante llamada <strong>formación reticular</strong> que son fibras de interconexión que conectan el tallo cerebral para recibir la información de entrada y salida, y apagar o encender la corteza cerebral. Se divide en:
                  </p>
                  <div className="pl-4 space-y-1.5 text-[13px]">
                    <p><strong>a) Rombencéfalo:</strong> Las estructuras se ven desde abajo hacia arriba las cuales son: Bulbo raquídeo/ Médula oblonga aquí se encuentra el núcleo del nervio vago. Puente de Varolio/Protuberancia Anular. Atrás de estas dos anteriores se encuentra el Cerebelo y se encarga de coordinar los movimientos, equilibrio y participa en los aprendizajes motores (Secuencia de actos motores).</p>
                    <p><strong>b) Mesencéfalo:</strong> Tiene una parte anterior y una parte posterior: Tegmentum (anterior) Tiene pedúnculos cerebrales y Núcleos pigmentados que contiene; Sustancia nigra y área tegmental ventral (ATV) que son las principales productoras de dopamina y el núcleo rojo que afina el movimiento. Tectum (posterior) Esta conformado por 4 bolitas llamadas tubérculos cuadrigéminos o también llamados colículos; 2 superiores= visual, 2 inferiores= auditivo. Para la orientación ante estímulos.</p>
                    <p><strong>c) Diencéfalo:</strong> Conformado por la familia tálamo que son estructuras formadas por dos estructuras en forma de papa son: Tálamo (2): Son el filtro sensorial (Elige que estímulos filtras) excepto el olfato. Hipotálamo: Tiene y controla la glándula pituitaria controla la tiroides, sistema endocrino y de todo el metabolismo, es el jefe del sistema nervioso autónomo. Epitálamo: Esta atrás del tálamo, contiene a la glándula pineal que se encarga de los ritmos biológicos (tiempo, luz y oscuridad). Subtálamo: Par de núcleos que, junto con los núcleos pigmentados, el cerebelo y los ganglios basales. Participan en la afinación del movimiento.</p>
                  </div>

                  <p className="mt-2 font-bold text-[#292420]">2. Prosencéfalo: Se divide en:</p>
                  <div className="pl-4 space-y-1.5 text-[13px]">
                    <p><strong>d) Corteza cerebral:</strong> Dos hemisferios, 4 lobulos: 1) Occipital: recibe y procesa la información visual. 2) Temporal: Recibe y procesa la información vestibular, olfativa y auditiva. Se lleva a cabo el lenguaje, emociones (amigdala) y memoria a corto y largo plazo (hipocampo). 3) Parietal: Recibe información gustativa y somatosensorial (Tacto, presión, dolor, temperatura, información propioceptiva y la vicerocepción). 4) Frontal: Se encarga del movimiento o lo que hago y de las funciones ejecutivas (toma de decisiones, verificación, anticipación, inhibición o control de impulsos, establecimiento de metas).</p>
                    <p><strong>e) Sistema límbico:</strong> Es una red de estructuras tanto como subcorticales y corticales básicas, que permite la generación de las emociones y la configuración de recuerdos, sus estructuras son: Amígdala, Hipocampo, Corteza del cíngulo y prefrontal, núcleos talámicos e hipotalámicos, Área septal/septum, núcleo accumbens, ATV.</p>
                    <p><strong>f) Ganglios basales:</strong> Contiene el núcleo caudado, putamen, globo pálido.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Interactive Helper Banner */}
        <div 
          id="back-to-atlas-btn"
          className="fixed bottom-6 right-6 bg-[#2b553c] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 text-xs font-sans border border-[#436d53] transition-transform hover:scale-105 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onNavigateToAtlas();
          }}
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">Volver al Atlas Interactivo</p>
            <p className="text-[11px] text-white/80">Clic en cualquier parte de la pantalla (body) para regresar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
