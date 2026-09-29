import { NeuroNode, NeuroEdge, Flashcard, TimelineMilestone, CranialNerveItem, AutonomicEffect } from '../types';

/* =========================================================================
   1. NODOS DEL GRAFO INTERACTIVO DE CONOCIMIENTO (VIS.JS)
   ========================================================================= */
export const neuroNodes: NeuroNode[] = [
  // Raíz
  {
    id: 1,
    label: "Sistema Nervioso (SN)",
    period: "Estructura General",
    category: "Sistema Nervioso Central",
    group: "snc",
    desc: "Estructura maestra de control y comunicación del organismo. Se organiza anatómicamente en Sistema Nervioso Periférico (SNP: ganglios y nervios) y Sistema Nervioso Central (SNC: núcleos y fascículos/asicuto).",
    exam: "División primaria: SNP (ganglios y nervios) y SNC (núcleos y fascículos).",
    colorGroup: "#2b553c"
  },

  // SNP y ramas principales
  {
    id: 2,
    label: "S. N. Periférico (SNP)",
    period: "Ganglios y Nervios",
    category: "Sistema Nervioso Periférico",
    group: "snp",
    desc: "Compuesto por ganglios y nervios que conectan el SNC con el resto del cuerpo. Se divide en Sistema Autónomo (vegetativo) y Sistema Somático.",
    exam: "Componentes fundamentales: Ganglios y nervios. Se divide en Autónomo/Vegetativo y Somático.",
    colorGroup: "#205b76"
  },
  {
    id: 3,
    label: "SNC: Encéfalo y Médula",
    period: "Núcleos y Fascículos",
    category: "Sistema Nervioso Central",
    group: "snc",
    desc: "Centro integrador compuesto por núcleos y fascículos (asicuto). Comprende la Médula Espinal (31 segmentos) y el Encéfalo (Tallo/Tronco cerebral y Prosencéfalo).",
    exam: "Compuesto por núcleos y tractos/fascículos. Incluye Médula Espinal y Encéfalo.",
    colorGroup: "#2b553c"
  },

  // SNP Autónomo
  {
    id: 4,
    label: "Autónomo / Vegetativo",
    period: "Funciones Involuntarias",
    category: "Sistema Nervioso Periférico",
    group: "autonomo",
    desc: "Funciona por sí mismo sin que tengamos que tener conciencia o voluntad. Se le conoce como vegetativo porque se encarga de las funciones tan básicas como las de una planta, sin necesidad de conciencia, manteniéndonos con vida (respiración, desecho, etc.). Se divide en Simpático y Parasimpático.",
    exam: "Funciona automáticamente (sin pensar). Se divide en: Simpático (acción) y Parasimpático (reposo/ahorro).",
    colorGroup: "#8c5e3c"
  },
  {
    id: 5,
    label: "S. N. Simpático",
    period: "Nos prepara para la acción",
    category: "Sistema Nervioso Periférico",
    group: "autonomo",
    desc: "Nos prepara para la acción. Eleva frecuencia cardíaca (FC), respiratoria (FR) y presión arterial (PA). Eleva la irrigación sanguínea periférica para activar el sistema músculo-esquelético. Libera adrenalina. Eleva glucosa periférica dilatando vasos sanguíneos (pone la piel roja y caliente en la superficie). Baja activación del tracto digestivo. Disminuye la percepción del tiempo para hacer la mejor acción. Dilata la pupila. Baja secreciones de lágrima, saliva y moco. Al final siempre genera cortisol como efecto reparador de lo que la adrenalina destruyó.",
    exam: "Efectos: ↑FC, ↑FR, ↑PA, vasodilatación muscular periférica (rojo/caliente), midriasis (dilata pupila), libera adrenalina, genera cortisol reparador final, ↓digestión, ↓secreciones.",
    colorGroup: "#944920"
  },
  {
    id: 6,
    label: "S. N. Parasimpático",
    period: "Recuperación y Músculo Liso",
    category: "Sistema Nervioso Periférico",
    group: "autonomo",
    desc: "Reduce el gasto energético y favorece la digestión. Baja frecuencia cardíaca, respiratoria y arterial. Eleva la irrigación sanguínea del tracto digestivo (músculo liso). Baja irrigación sanguínea periférica (hace que nos pongamos pálidos y fríos). Baja/relaja el músculo esquelético. Contrae la pupila (miosis). Eleva la secreción de lágrima, saliva y moco.",
    exam: "Efectos: ↓FC, ↓FR, ↓PA, ↑irrigación digestiva (músculo liso), vasoconstricción periférica (pálido y frío), miosis (contrae pupila), ↑lágrima, saliva y moco. Rama principal: Nervio Vago (Par X).",
    colorGroup: "#205b76"
  },

  // SNP Somático
  {
    id: 7,
    label: "S. N. Somático",
    period: "Control Voluntario",
    category: "Sistema Nervioso Periférico",
    group: "snp",
    desc: "Control voluntario y consciente de la musculatura y recepción sensorial. Se divide en: 12 Pares de Nervios Craneales y 31 Pares de Nervios Espinales. (Nota de clase: en los nervios craneales no aplica la ley de Bell-Magendie).",
    exam: "Control voluntario y consciente. Comprende: 12 pares craneales (no aplica Bell-Magendie) y 31 pares espinales conectados a la médula.",
    colorGroup: "#2b553c"
  },
  {
    id: 8,
    label: "12 Pares Craneales",
    period: "Nervios de Cabeza y Cuello",
    category: "Pares Craneales",
    group: "pares",
    desc: "12 pares de nervios que emergen del encéfalo y tallo cerebral. Pueden ser Sensoriales/aferentes, Motores o Mixtos (con ramas sensoriales, motoras e intermedias). En ellos no aplica la ley de Bell-Magendie.",
    exam: "12 pares numerados del I al XII. Sensoriales (I, II, VIII), Motores (III, IV, VI, XI, XII), Mixtos (V, VII, IX, X).",
    colorGroup: "#704812"
  },
  {
    id: 9,
    label: "31 Pares Espinales",
    period: "Conexión Medular",
    category: "Médula Espinal",
    group: "medula",
    desc: "Cada par tiene su departamento de recepción conectado a la médula espinal. El primer par (C1) se conecta en el segmento C1. Distribución: 8 cervicales, 12 torácicos (troncales/dorsales), 5 lumbares, 5 sacros y 1 coxígeo. Son 4 nervios por par: Izquierdo, Derecho, Aferente (dorsal) y Eferente (ventral).",
    exam: "Total: 31 pares (8C + 12T + 5L + 5S + 1Co). Regla de 4 nervios por par: izquierdo, derecho, aferente/dorsal y eferente/ventral.",
    colorGroup: "#704812"
  },

  // Los 12 Pares Craneales
  {
    id: 10,
    label: "Par I: Olfatorio",
    period: "Sensorial / Aferente",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio sensorial/aferente. Recibe información olfativa directamente de los bulbos olfatorios.",
    exam: "Tipo: Sensorial. Función: Información olfativa de los bulbos olfatorios.",
    colorGroup: "#2b553c"
  },
  {
    id: 11,
    label: "Par II: Óptico",
    period: "Sensorial",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio sensorial. Recibe información visual de las retinas (órganos visuales).",
    exam: "Tipo: Sensorial. Función: Información visual proveniente de las retinas.",
    colorGroup: "#2b553c"
  },
  {
    id: 12,
    label: "Par III: Oculomotor",
    period: "Motor Ocular Común",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio motor (motor ocular común). Se encarga de controlar la contracción pupilar más la mayoría de los músculos del ojo.",
    exam: "Tipo: Motor. Función: Contracción pupilar y la mayoría de los movimientos del ojo.",
    colorGroup: "#944920"
  },
  {
    id: 13,
    label: "Par IV: Patético / Troclear",
    period: "Motor",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio motor. Se encarga de controlar el músculo oblicuo superior del ojo. Permite girar el ojo y hacer el barrido ocular con giro hacia afuera.",
    exam: "Tipo: Motor. Inerva: Músculo oblicuo superior del ojo (giro hacia afuera).",
    colorGroup: "#944920"
  },
  {
    id: 14,
    label: "Par V: Trigémino",
    period: "Mixto (Sensorial y Motor)",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio mixto con dos ramas principales: la rama sensorial recibe sensaciones de las cosas de la boca (encías, dientes y lengua); la rama motora controla los músculos y la masticación.",
    exam: "Tipo: Mixto. Rama sensorial: encías, dientes, boca y lengua. Rama motora: músculos de masticación.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 15,
    label: "Par VI: Abducens",
    period: "Motor Ocular Externo",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio motor (motor ocular externo). Controla al músculo recto externo: lo jala hacia un lado y hacia afuera (movimiento externo horizontal y seguimiento ocular).",
    exam: "Tipo: Motor. Inerva: Músculo recto externo (lo jala hacia afuera/lateral).",
    colorGroup: "#944920"
  },
  {
    id: 16,
    label: "Par VII: Facial",
    period: "Mixto (Sensorial, Motor e Intermedia)",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio mixto con 3 ramas: 1) Sensorial: información sensorial de la cara (párpado) y sabores de la punta de la lengua (dulce, salado, ácido/agrio, umami). 2) Intermedia (parasimpático): secreta lágrima, saliva y moco. 3) Motora: controla los músculos de la cara.",
    exam: "Tipo: Mixto (3 ramas). Sensorial: sabores punta de la lengua y párpado. Intermedia: lágrimas, saliva, moco. Motora: músculos faciales.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 17,
    label: "Par VIII: Auditivo / Vestibulococlear",
    period: "Sensorial",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio sensorial (Auditivo vestibular / Vestíbulo coclear). Recibe la información auditiva proveniente del oído interno en la cóclea por el órgano de Corti, y además controla el equilibrio.",
    exam: "Tipo: Sensorial. Función: Audición (cóclea y órgano de Corti) y control del equilibrio.",
    colorGroup: "#2b553c"
  },
  {
    id: 18,
    label: "Par IX: Glosofaríngeo",
    period: "Mixto (Sensorial y Motor)",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio mixto (S y M): la rama sensorial recibe información del sabor amargo y se explora con el reflejo nauseoso (faringe y laringe); la rama motora se encarga de controlar laringe, faringe y el reflejo nauseoso.",
    exam: "Tipo: Mixto. Sensorial: sabor amargo y reflejo nauseoso. Motor: laringe y faringe.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 19,
    label: "Par X: Vago / Neumogástrico",
    period: "Mixto (Rama principal parasimpática)",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio mixto y rama principal del sistema parasimpático. La rama sensorial recibe sensaciones de los órganos internos y tracto digestivo. La rama motora controla la información y motilidad de los órganos internos. Su núcleo se localiza en el bulbo raquídeo.",
    exam: "Punto clave: Rama principal del parasimpático. Sensorial: sensaciones vísceras. Motor: motilidad órganos internos. Núcleo: Bulbo raquídeo.",
    colorGroup: "#205b76"
  },
  {
    id: 20,
    label: "Par XI: Accesorio / Espinal",
    period: "Motor",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio motor. Controla principalmente dos grandes músculos del cuello: el músculo Trapecio y el Esternocleidomastoideo.",
    exam: "Tipo: Motor. Inerva: Músculo trapecio y esternocleidomastoideo (movimientos del cuello).",
    colorGroup: "#944920"
  },
  {
    id: 21,
    label: "Par XII: Hipogloso",
    period: "Motor",
    category: "Pares Craneales",
    group: "pares",
    desc: "Nervio motor. Se encarga del control motor de los músculos de la lengua.",
    exam: "Tipo: Motor. Función: Control directo de los músculos de la lengua.",
    colorGroup: "#944920"
  },

  // SNC: Médula Espinal
  {
    id: 22,
    label: "Médula Espinal (31 Segmentos)",
    period: "Eje Medular",
    category: "Médula Espinal",
    group: "medula",
    desc: "Porción caudal del SNC. Consta de 31 segmentos anatómicos: 8 cervicales, 12 torácicos (o troncales/dorsales), 5 lumbares, 5 sacros y 1 coxígeo. Conecta con los 31 pares de nervios espinales.",
    exam: "31 segmentos: 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coxígeo.",
    colorGroup: "#704812"
  },

  // SNC: Encéfalo
  {
    id: 23,
    label: "Encéfalo",
    period: "Porción Craneal del SNC",
    category: "Sistema Nervioso Central",
    group: "snc",
    desc: "Estructura encefálica superior que se divide en Tallo/Tronco Cerebral y Prosencéfalo.",
    exam: "Se divide en: 1) Tallo/Tronco cerebral (con formación reticular, rombencéfalo, mesencéfalo, diencéfalo) y 2) Prosencéfalo (corteza, límbico, ganglios basales).",
    colorGroup: "#2b553c"
  },

  // Tallo Cerebral y Formación Reticular
  {
    id: 24,
    label: "Tallo / Tronco Cerebral",
    period: "Conexión e Interruptor",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Posee a todo lo largo una estructura crucial: la Formación Reticular. Se divide en Rombencéfalo, Mesencéfalo y Diencéfalo.",
    exam: "Estructura longitudinal: Formación Reticular. Divisiones: Rombencéfalo, Mesencéfalo y Diencéfalo.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 25,
    label: "Formación Reticular",
    period: "A lo largo del tallo",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Fibras de interconexión dispuestas a lo largo del tallo cerebral que conectan la estructura para recibir información de entrada y salida, con la función esencial de apagar o encender la corteza cerebral.",
    exam: "Función vital: Fibras de interconexión para entrada/salida y 'apagar o encender' la corteza cerebral.",
    colorGroup: "#944920"
  },

  // Rombencéfalo
  {
    id: 26,
    label: "Rombencéfalo",
    period: "De abajo hacia arriba",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Las estructuras se organizan de abajo hacia arriba: Bulbo raquídeo / Médula oblonga, Puente de Varolio / Protuberancia anular, y atrás de ellas el Cerebelo.",
    exam: "Estructuras de abajo a arriba: 1) Bulbo raquídeo, 2) Puente de Varolio, 3) Cerebelo (atrás).",
    colorGroup: "#8c5e3c"
  },
  {
    id: 27,
    label: "Bulbo Raquídeo / Médula Oblonga",
    period: "Base del Rombencéfalo",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Estructura inferior del rombencéfalo; aquí se encuentra el núcleo del nervio vago (Par X).",
    exam: "Dato crítico de examen: Aquí se ubica el núcleo del nervio vago (Par X).",
    colorGroup: "#8c5e3c"
  },
  {
    id: 28,
    label: "Puente de Varolio / Protuberancia",
    period: "Porción Media del Rombencéfalo",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Protuberancia anular situada sobre el bulbo raquídeo, puente de vías ascendentes y descendentes.",
    exam: "Situado entre bulbo y mesencéfalo, anterior al cerebelo.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 29,
    label: "Cerebelo",
    period: "Coordinación y Aprendizaje Motor",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Ubicado atrás del bulbo y del puente. Se encarga de coordinar los movimientos, el equilibrio y participa en los aprendizajes motores (secuencia de actos motores).",
    exam: "Funciones: Coordinación motora, equilibrio y aprendizajes motores (secuencia de actos motores).",
    colorGroup: "#2b553c"
  },

  // Mesencéfalo
  {
    id: 30,
    label: "Mesencéfalo",
    period: "Parte Anterior y Posterior",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Porción media del tallo que tiene una parte anterior (Tegmentum) y una parte posterior (Tectum).",
    exam: "División: Tegmentum (anterior: dopamina y afina movimiento) y Tectum (posterior: 4 colículos de orientación).",
    colorGroup: "#8c5e3c"
  },
  {
    id: 31,
    label: "Tegmentum (Anterior)",
    period: "Dopamina y Núcleo Rojo",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Parte anterior del mesencéfalo. Posee pedúnculos cerebrales y núcleos pigmentados que contienen: Sustancia Nigra y Área Tegmental Ventral (ATV) —principales productoras de dopamina— y el Núcleo Rojo, que afina el movimiento.",
    exam: "Contiene: Sustancia nigra y ATV (principales productoras de dopamina) + Núcleo rojo (afina el movimiento).",
    colorGroup: "#944920"
  },
  {
    id: 32,
    label: "Tectum (Posterior)",
    period: "4 Colículos / Cuadrigéminos",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Parte posterior del mesencéfalo conformada por 4 bolitas llamadas tubérculos cuadrigéminos o colículos: 2 superiores (visual) y 2 inferiores (auditivo), para la orientación ante estímulos.",
    exam: "4 tubérculos: 2 superiores = orientación visual; 2 inferiores = orientación auditiva.",
    colorGroup: "#205b76"
  },

  // Diencéfalo
  {
    id: 33,
    label: "Diencéfalo (Familia Tálamo)",
    period: "Estructuras en forma de papa",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Conformado por la familia tálamo, que son dos estructuras pareadas con forma de papa: Tálamo, Hipotálamo, Epitálamo y Subtálamo.",
    exam: "La familia tálamo: Tálamo (filtro sensorial), Hipotálamo (endocrino y SNA), Epitálamo (ritmos) y Subtálamo (movimiento).",
    colorGroup: "#704812"
  },
  {
    id: 34,
    label: "Tálamo (2)",
    period: "Filtro Sensorial",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Par de estructuras con forma de papa que actúan como el filtro sensorial supremo: elige qué estímulos filtras, excepto el olfato.",
    exam: "Punto crítico: Filtro sensorial general (elige qué estímulos filtra) EXCEPTO EL OLFATO.",
    colorGroup: "#2b553c"
  },
  {
    id: 35,
    label: "Hipotálamo",
    period: "Jefe del S. N. Autónomo",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Tiene y controla la glándula pituitaria; controla la tiroides, el sistema endocrino y todo el metabolismo. Es el jefe del sistema nervioso autónomo.",
    exam: "Punto crítico: Controla glándula pituitaria, tiroides, sistema endocrino y metabolismo. Es el JEFE del SNA.",
    colorGroup: "#944920"
  },
  {
    id: 36,
    label: "Epitálamo",
    period: "Glándula Pineal y Ritmos",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Situado atrás del tálamo, contiene a la glándula pineal, encargada de la regulación de los ritmos biológicos (tiempo, luz y oscuridad).",
    exam: "Contiene: Glándula pineal. Función: Ritmos biológicos (tiempo, ciclos de luz y oscuridad).",
    colorGroup: "#8c5e3c"
  },
  {
    id: 37,
    label: "Subtálamo",
    period: "Afinación del Movimiento",
    category: "Tallo Cerebral y Diencéfalo",
    group: "tallo",
    desc: "Par de núcleos que, junto con los núcleos pigmentados, el cerebelo y los ganglios basales, participan activamente en la afinación del movimiento.",
    exam: "Par de núcleos que afina el movimiento junto con núcleos pigmentados, cerebelo y ganglios basales.",
    colorGroup: "#8c5e3c"
  },

  // Prosencéfalo
  {
    id: 38,
    label: "Prosencéfalo",
    period: "Cerebro Anterior",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Estructura superior que comprende la Corteza Cerebral (dos hemisferios y 4 lóbulos), el Sistema Límbico y los Ganglios Basales.",
    exam: "Se divide en: Corteza Cerebral (4 lóbulos), Sistema Límbico y Ganglios Basales.",
    colorGroup: "#2b553c"
  },
  {
    id: 39,
    label: "Corteza Cerebral (4 Lóbulos)",
    period: "Dos Hemisferios",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Manto superficial dividido en dos hemisferios y cuatro lóbulos especializados: Occipital, Temporal, Parietal y Frontal.",
    exam: "Dos hemisferios, 4 lóbulos especializados: Occipital (visión), Temporal (oído/memoria), Parietal (somatosensorial) y Frontal (motor/ejecutivo).",
    colorGroup: "#2b553c"
  },
  {
    id: 40,
    label: "Lóbulo Occipital",
    period: "Visión",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Recibe y procesa exclusivamente la información visual.",
    exam: "Función exclusiva: Recibir y procesar la información visual.",
    colorGroup: "#205b76"
  },
  {
    id: 41,
    label: "Lóbulo Temporal",
    period: "Audición, Memoria y Emoción",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Recibe y procesa información vestibular, olfativa y auditiva. En él se lleva a cabo el lenguaje, las emociones (asociadas a la amígdala) y la memoria a corto y largo plazo (asociada al hipocampo).",
    exam: "Funciones: Vestibular, olfativa, auditiva, lenguaje, emociones (amígdala) y memoria corto/largo plazo (hipocampo).",
    colorGroup: "#704812"
  },
  {
    id: 42,
    label: "Lóbulo Parietal",
    period: "Somatosensorial y Viscerocepción",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Recibe información gustativa y somatosensorial: tacto, presión, dolor, temperatura, información propioceptiva y la viscerocepción.",
    exam: "Funciones: Gusto + Somatosensorial (tacto, presión, dolor, temperatura, propiocepción y viscerocepción).",
    colorGroup: "#8c5e3c"
  },
  {
    id: 43,
    label: "Lóbulo Frontal",
    period: "Movimiento y Funciones Ejecutivas",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Se encarga del movimiento o 'lo que hago', y de las funciones ejecutivas: toma de decisiones, verificación, anticipación, inhibición o control de impulsos, y establecimiento de metas.",
    exam: "Funciones: Movimiento ('lo que hago') + Funciones ejecutivas (decisiones, verificación, anticipación, control de impulsos, metas).",
    colorGroup: "#944920"
  },
  {
    id: 44,
    label: "Sistema Límbico",
    period: "Emociones y Recuerdos",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Red de estructuras tanto subcorticales como corticales básicas que permite la generación de las emociones y la configuración de recuerdos. Sus estructuras son: Amígdala, Hipocampo, Corteza del cíngulo y prefrontal, núcleos talámicos e hipotalámicos, Área septal / septum, núcleo accumbens y ATV.",
    exam: "Función: Generación de emociones y configuración de recuerdos. Estructuras: Amígdala, Hipocampo, Cíngulo/Prefrontal, Tálamo/Hipotálamo, Área Septal, Accumbens y ATV.",
    colorGroup: "#944920"
  },
  {
    id: 45,
    label: "Ganglios Basales",
    period: "Afinación Motora",
    category: "Prosencéfalo y Corteza",
    group: "prosencefalo",
    desc: "Estructuras subcorticales que contienen el núcleo caudado, el putamen y el globo pálido. Participan en el control y afinación de los movimientos.",
    exam: "Contiene: Núcleo caudado, putamen y globo pálido. Participan en la afinación del movimiento.",
    colorGroup: "#8c5e3c"
  }
];

/* =========================================================================
   2. CONEXIONES DEL GRAFO (ARISTAS / RELACIONES)
   ========================================================================= */
export const neuroEdges: NeuroEdge[] = [
  // División Principal
  { from: 1, to: 2, label: "ganglios y nervios" },
  { from: 1, to: 3, label: "núcleos y fascículos" },

  // SNP -> Autónomo y Somático
  { from: 2, to: 4, label: "automático/vegetativo" },
  { from: 2, to: 7, label: "control voluntario" },

  // Autónomo -> Simpático y Parasimpático
  { from: 4, to: 5, label: "prepara para la acción" },
  { from: 4, to: 6, label: "reposo y músculo liso" },

  // Somático -> Pares Craneales y Nervios Espinales
  { from: 7, to: 8, label: "12 pares (sin Bell-Magendie)" },
  { from: 7, to: 9, label: "31 pares espinales" },

  // 12 Pares Craneales
  { from: 8, to: 10, label: "I: Olfato" },
  { from: 8, to: 11, label: "II: Visión" },
  { from: 8, to: 12, label: "III: Músculos ojo/pupila" },
  { from: 8, to: 13, label: "IV: Oblicuo superior" },
  { from: 8, to: 14, label: "V: Boca y masticación" },
  { from: 8, to: 15, label: "VI: Recto externo" },
  { from: 8, to: 16, label: "VII: Cara, sabores, lágrimas" },
  { from: 8, to: 17, label: "VIII: Cóclea y equilibrio" },
  { from: 8, to: 18, label: "IX: Amargo y deglución" },
  { from: 8, to: 19, label: "X: Órganos internos" },
  { from: 8, to: 20, label: "XI: Trapecio/Esternocleido" },
  { from: 8, to: 21, label: "XII: Lengua" },

  // SNC -> Médula y Encéfalo
  { from: 3, to: 22, label: "31 segmentos" },
  { from: 3, to: 23, label: "porción superior" },

  // Conexión Médula y Nervios Espinales
  { from: 22, to: 9, label: "departamento de recepción" },

  // Encéfalo -> Tallo y Prosencéfalo
  { from: 23, to: 24, label: "tallo / tronco" },
  { from: 23, to: 38, label: "cerebro anterior" },

  // Tallo Cerebral
  { from: 24, to: 25, label: "a todo lo largo (fibras)" },
  { from: 24, to: 26, label: "de abajo a arriba" },
  { from: 24, to: 30, label: "anterior y posterior" },
  { from: 24, to: 33, label: "familia tálamo" },

  // Rombencéfalo
  { from: 26, to: 27, label: "base (núcleo vago)" },
  { from: 26, to: 28, label: "protuberancia" },
  { from: 26, to: 29, label: "atrás (equilibrio/motor)" },

  // Mesencéfalo
  { from: 30, to: 31, label: "tegmentum anterior" },
  { from: 30, to: 32, label: "tectum posterior" },

  // Diencéfalo
  { from: 33, to: 34, label: "filtro sensorial" },
  { from: 33, to: 35, label: "jefe del SNA" },
  { from: 33, to: 36, label: "glándula pineal" },
  { from: 33, to: 37, label: "par de núcleos" },

  // Conexión funcional: Hipotálamo es jefe del SNA
  { from: 35, to: 4, label: "controla y regula" },

  // Conexión funcional: Bulbo aloja núcleo del Vago
  { from: 27, to: 19, label: "aloja núcleo del vago" },

  // Prosencéfalo -> Corteza, Límbico, Ganglios
  { from: 38, to: 39, label: "2 hemisferios" },
  { from: 38, to: 44, label: "emoción y memoria" },
  { from: 38, to: 45, label: "caudado/putamen/globo" },

  // Corteza -> 4 Lóbulos
  { from: 39, to: 40, label: "visión" },
  { from: 39, to: 41, label: "oído/lenguaje/memoria" },
  { from: 39, to: 42, label: "somatosensorial/gusto" },
  { from: 39, to: 43, label: "movimiento/ejecutivo" },

  // Conexión Formación Reticular con Corteza
  { from: 25, to: 39, label: "apaga o enciende" },

  // Afinación de movimiento cruzada (Subtálamo, Cerebelo, Ganglios, Núcleos pigmentados)
  { from: 37, to: 45, label: "afinan movimiento" },
  { from: 29, to: 37, label: "coordinación motora" },
  { from: 31, to: 44, label: "ATV y dopamina" }
];

/* =========================================================================
   3. TABLA COMPARATIVA DIRECTA: SIMPÁTICO VS PARASIMPÁTICO
   ========================================================================= */
export const autonomicComparisonTable: AutonomicEffect[] = [
  {
    organOrSystem: "Objetivo General",
    sympathetic: "Nos prepara para la acción",
    parasympathetic: "Reduce gasto energético, reposo y funciones del músculo liso",
    note: "El SNA funciona por sí mismo sin que tengamos que estar pensando en hacerlo."
  },
  {
    organOrSystem: "Frecuencia Cardíaca (FC)",
    sympathetic: "Eleva frecuencia cardíaca",
    parasympathetic: "Baja frecuencia cardíaca",
    note: "Efecto antagónico directo sobre el corazón."
  },
  {
    organOrSystem: "Frecuencia Respiratoria (FR)",
    sympathetic: "Eleva frecuencia respiratoria",
    parasympathetic: "Baja frecuencia respiratoria",
    note: "Aporte rápido de oxígeno para músculos esqueléticos."
  },
  {
    organOrSystem: "Presión Arterial (PA)",
    sympathetic: "Eleva presión arterial",
    parasympathetic: "Baja presión arterial",
    note: "Aumenta la fuerza de bombeo en situaciones de acción."
  },
  {
    organOrSystem: "Irrigación Periférica y Músculo Esquelético",
    sympathetic: "Eleva irrigación sanguínea periférica para activar sistema músculo-esquelético",
    parasympathetic: "Baja irrigación sanguínea periférica, baja el músculo esquelético",
    note: "Simpático: vasos dilatados en músculo. Parasimpático: relajación muscular."
  },
  {
    organOrSystem: "Piel y Temperatura Superficial",
    sympathetic: "Nos ponemos rojos y calientes en la superficie (dilata vasos sanguíneos)",
    parasympathetic: "Nos ponemos pálidos y fríos (baja la irrigación sanguínea periférica)",
    note: "Contraste visual evidente descrito en clase."
  },
  {
    organOrSystem: "Glucosa Periférica",
    sympathetic: "Eleva glucosa periférica en el músculo esquelético",
    parasympathetic: "No eleva glucosa periférica; conserva energía",
    note: "Combustible metabólico inmediato para responder a la acción."
  },
  {
    organOrSystem: "Tracto Digestivo",
    sympathetic: "Baja la activación del tracto digestivo",
    parasympathetic: "Eleva irrigación sanguínea del tracto digestivo = Músculo liso",
    note: "Digestión y motilidad visceral se reactivan en reposo."
  },
  {
    organOrSystem: "Pupila",
    sympathetic: "Dilata pupila (midriasis)",
    parasympathetic: "Contrae la pupila (miosis)",
    note: "Mayor entrada de luz para enfocar la acción."
  },
  {
    organOrSystem: "Secreciones (Lágrima, Saliva y Moco)",
    sympathetic: "Baja las secreciones de lágrima, saliva y moco",
    parasympathetic: "Eleva la secreción de lágrima, saliva y moco",
    note: "Boca seca durante acción simpática; salivación activa en parasimpático."
  },
  {
    organOrSystem: "Percepción del Tiempo",
    sympathetic: "Suele disminuir para poder hacer la mejor acción",
    parasympathetic: "Percepción habitual y de calma",
    note: "Agudeza cognitiva durante estados de alerta."
  },
  {
    organOrSystem: "Mediadores Químicos Clave",
    sympathetic: "Libera adrenalina; al final siempre genera cortisol como efecto reparador",
    parasympathetic: "Vía parasimpática principal mediada por el Nervio Vago (Par X)",
    note: "El cortisol repara, por ejemplo, lo que la adrenalina destruyó."
  }
];

/* =========================================================================
   4. LISTA COMPLETA DE LOS 12 PARES CRANEALES
   ========================================================================= */
export const cranialNervesList: CranialNerveItem[] = [
  {
    number: "1",
    roman: "I",
    name: "Nervio Olfatorio",
    type: "Sensorial",
    functionSummary: "Recibe información olfativa directamente de los bulbos olfatorios.",
    details: [
      "Clasificación: Sensorial / aferente.",
      "Origen y receptor: Bulbos olfatorios.",
      "Función: Conducción del sentido del olfato hacia centros cerebrales.",
      "Excepción talámica: Es el único sentido que NO pasa por el filtro del tálamo."
    ],
    examKey: "Sensorial/aferente: Recibe información olfativa de los bulbos olfatorios."
  },
  {
    number: "2",
    roman: "II",
    name: "Nervio Óptico",
    type: "Sensorial",
    functionSummary: "Recibe información visual proveniente de las retinas de ambos ojos.",
    details: [
      "Clasificación: Sensorial.",
      "Origen: Retinas de los órganos visuales.",
      "Proyección: Vía visual hacia el lóbulo occipital y colículos superiores del tectum mesencefálico."
    ],
    examKey: "Sensorial: Recibe información de las retinas / órganos visuales."
  },
  {
    number: "3",
    roman: "III",
    name: "Nervio Oculomotor",
    alternativeName: "Motor Ocular Común",
    type: "Motor",
    functionSummary: "Controla la contracción pupilar y la mayoría de los músculos del ojo.",
    details: [
      "Clasificación: Motor.",
      "Función pupilar: Inervación de la contracción pupilar (constricción).",
      "Función muscular: Controla la mayoría de los músculos extrínsecos del ojo."
    ],
    examKey: "Motor: Controla contracción pupilar + la mayoría de músculos del ojo."
  },
  {
    number: "4",
    roman: "IV",
    name: "Nervio Patético",
    alternativeName: "Troclear",
    type: "Motor",
    functionSummary: "Controla el músculo oblicuo superior del ojo (giro y barrido ocular hacia afuera).",
    details: [
      "Clasificación: Motor.",
      "Músculo inervado: Músculo oblicuo superior del ojo.",
      "Acción motora: Capacidad de girar el ojo, barrido de ojos con giro hacia afuera."
    ],
    examKey: "Motor: Controla el músculo oblicuo superior del ojo (giro hacia afuera)."
  },
  {
    number: "5",
    roman: "V",
    name: "Nervio Trigémino",
    type: "Mixto",
    functionSummary: "Sensibilidad de boca, encías y lengua; control motor de músculos de masticación.",
    details: [
      "Clasificación: Mixto (rama sensorial y rama motora).",
      "Rama sensorial: Recibe sensaciones de las cosas de la boca, encías, dientes y lengua.",
      "Rama motora: Controla los músculos y la acción de la masticación."
    ],
    examKey: "Mixto: Sensorial recibe boca/dientes/lengua; Motora controla masticación."
  },
  {
    number: "6",
    roman: "VI",
    name: "Nervio Abducens",
    alternativeName: "Motor Ocular Externo",
    type: "Motor",
    functionSummary: "Controla el músculo recto externo: lo jala hacia un lado y hacia afuera.",
    details: [
      "Clasificación: Motor.",
      "Músculo inervado: Recto externo del globo ocular.",
      "Función: Movimiento externo horizontal del ojo y seguimiento ocular."
    ],
    examKey: "Motor: Controla al músculo recto externo (lo jala hacia afuera/lateral)."
  },
  {
    number: "7",
    roman: "VII",
    name: "Nervio Facial",
    type: "Mixto",
    functionSummary: "Cara, párpado, sabores de la punta lingual, secreción de lágrimas/saliva/moco y mímica.",
    details: [
      "Clasificación: Mixto (rama sensorial, motora e intermedia).",
      "Rama sensorial: Sensaciones de la cara (párpado) y sabores de la punta de la lengua (dulce, salado, ácido o agrio, umami).",
      "Rama intermedia (parasimpático): Secreta lágrima, saliva y moco.",
      "Rama motora: Controla los músculos de la cara y la expresión."
    ],
    examKey: "Mixto: Sensorial (punta lengua 4 sabores), Intermedia (lágrima/saliva/moco), Motor (músculos de la cara)."
  },
  {
    number: "8",
    roman: "VIII",
    name: "Nervio Vestibulococlear",
    alternativeName: "Auditivo / Auditivo Vestibular",
    type: "Sensorial",
    functionSummary: "Recibe información auditiva (cóclea / órgano de Corti) y controla el equilibrio.",
    details: [
      "Clasificación: Sensorial.",
      "Rama auditiva: Información auditiva del oído interno en la cóclea por el órgano de Corti.",
      "Rama vestibular: Control y mantenimiento del equilibrio corporal."
    ],
    examKey: "Sensorial: Audición de cóclea por órgano de Corti + control del equilibrio."
  },
  {
    number: "9",
    roman: "IX",
    name: "Nervio Glosofaríngeo",
    type: "Mixto",
    functionSummary: "Sabor amargo, reflejo nauseoso y control motor de faringe y laringe.",
    details: [
      "Clasificación: Mixto (S y M).",
      "Rama sensorial: Recibe información del sabor amargo y se explora con el reflejo nauseoso.",
      "Rama motora: Controla la laringe, la faringe y el reflejo nauseoso."
    ],
    examKey: "Mixto: Sensorial recibe sabor amargo (reflejo nauseoso); Motor controla laringe y faringe."
  },
  {
    number: "10",
    roman: "X",
    name: "Nervio Vago",
    alternativeName: "Neumogástrico",
    type: "Mixto",
    functionSummary: "Rama principal del parasimpático. Sensaciones y motilidad de órganos internos.",
    details: [
      "Clasificación: Mixto y rama principal del sistema parasimpático.",
      "Rama sensorial: Recibe sensaciones viscerales de órganos internos y tracto digestivo.",
      "Rama motora: Controla la información motora y motilidad de los órganos internos.",
      "Localización de su núcleo: Bulbo raquídeo / médula oblonga."
    ],
    examKey: "Punto crítico: Rama principal del parasimpático. Núcleo en el bulbo raquídeo. Control de órganos internos."
  },
  {
    number: "11",
    roman: "XI",
    name: "Nervio Accesorio",
    alternativeName: "Espinal",
    type: "Motor",
    functionSummary: "Controla dos músculos esenciales del cuello: trapecio y esternocleidomastoideo.",
    details: [
      "Clasificación: Motor.",
      "Músculos inervados: Músculo Trapecio y Músculo Esternocleidomastoideo.",
      "Acción: Movimientos del cuello, hombros y postura cefálica."
    ],
    examKey: "Motor: Controla principalmente trapecio y esternocleidomastoideo."
  },
  {
    number: "12",
    roman: "XII",
    name: "Nervio Hipogloso",
    type: "Motor",
    functionSummary: "Controla directamente todos los movimientos y músculos de la lengua.",
    details: [
      "Clasificación: Motor.",
      "Músculos inervados: Musculatura intrínseca y extrínseca de la lengua.",
      "Función: Movilidad de la lengua para deglución, articulación y habla."
    ],
    examKey: "Motor: Controla los músculos de la lengua."
  }
];

/* =========================================================================
   5. NIVELES ANATÓMICOS Y HITOS JERÁRQUICOS (TIMELINE / ROADMAP)
   ========================================================================= */
export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 1,
    number: 1,
    year: "Eje Periférico",
    location: "Sistema Nervioso Periférico",
    title: "SNP: Ganglios y Nervios",
    badge: "SNP",
    description: "Formado por ganglios y nervios que conectan el centro con la periferia. Se bifurca en: 1) Autónomo/vegetativo (involuntario) y 2) Somático (voluntario y consciente).",
    examNote: "Componentes: Ganglios y nervios. Divisiones: Autónomo y Somático.",
    category: "snp",
    highlightColor: "#205b76"
  },
  {
    id: 2,
    number: 2,
    year: "Involuntario",
    location: "SNP Autónomo",
    title: "Sistema Autónomo: Simpático vs Parasimpático",
    badge: "Autónomo",
    description: "Funciona por sí mismo permitiendo funciones automáticas (respiración, desecho) como las funciones básicas de una planta sin necesidad de conciencia. Simpático prepara para la acción (adrenalina, cortisol, ↑FC, ↑FR, ↑PA, vasodilatación muscular, midriasis). Parasimpático reposa (vago, ↓FC, digestión, músculo liso, miosis, ↑secreciones).",
    examNote: "Simpático: acción / adrenalina / cortisol. Parasimpático: reposo / músculo liso / nervio vago.",
    category: "snp",
    highlightColor: "#944920"
  },
  {
    id: 3,
    number: 3,
    year: "Pares I a XII",
    location: "SNP Somático",
    title: "12 Pares Craneales (Sin Ley Bell-Magendie)",
    badge: "Pares Craneales",
    description: "Control voluntario y consciente de cabeza y cuello. Los pares craneales no se rigen por la ley de Bell-Magendie. Incluyen nervios sensoriales (I, II, VIII), motores (III, IV, VI, XI, XII) y mixtos (V, VII, IX, X).",
    examNote: "12 pares. No aplica la ley de Bell-Magendie en nervios craneales.",
    category: "snp",
    highlightColor: "#704812"
  },
  {
    id: 4,
    number: 4,
    year: "31 Pares / Segmentos",
    location: "Médula Espinal",
    title: "Médula Espinal y Nervios Espinales",
    badge: "Eje Medular",
    description: "La médula consta de 31 segmentos: 8 cervicales, 12 torácicos (troncales), 5 lumbares, 5 sacros y 1 coxígeo. Conectados a ella están 31 pares de nervios espinales (C1 en segmento C1). Son 4 nervios por par: Izquierdo, Derecho, Aferente (dorsal) y Eferente (ventral).",
    examNote: "Distribución: 8C, 12T, 5L, 5S, 1Co. Regla de 4 nervios por par.",
    category: "snc",
    highlightColor: "#704812"
  },
  {
    id: 5,
    number: 5,
    year: "Tronco Encefálico",
    location: "Tallo Cerebral",
    title: "Formación Reticular: El Interruptor de la Corteza",
    badge: "Tallo Cerebral",
    description: "A lo largo de todo el tallo se extienden fibras de interconexión que reciben la información de entrada y salida, con la función determinante de apagar o encender la corteza cerebral.",
    examNote: "Formación reticular: fibras de interconexión para apagar o encender la corteza cerebral.",
    category: "tallo",
    highlightColor: "#8c5e3c"
  },
  {
    id: 6,
    number: 6,
    year: "De abajo a arriba",
    location: "Rombencéfalo",
    title: "Rombencéfalo: Bulbo, Puente y Cerebelo",
    badge: "Rombencéfalo",
    description: "Vistas de abajo hacia arriba: 1) Bulbo raquídeo / médula oblonga (aquí se encuentra el núcleo del nervio vago), 2) Puente de Varolio / protuberancia anular, y 3) Atrás de ambas, el Cerebelo, que coordina movimientos, equilibrio y participa en aprendizajes motores (secuencia de actos motores).",
    examNote: "Bulbo aloja núcleo del vago. Cerebelo coordina movimientos, equilibrio y secuencias de actos motores.",
    category: "tallo",
    highlightColor: "#2b553c"
  },
  {
    id: 7,
    number: 7,
    year: "Anterior y Posterior",
    location: "Mesencéfalo",
    title: "Mesencéfalo: Tegmentum y Tectum",
    badge: "Mesencéfalo",
    description: "Tegmentum (anterior): pedúnculos cerebrales y núcleos pigmentados con Sustancia Nigra y ATV (principales productoras de dopamina) y Núcleo Rojo (afina el movimiento). Tectum (posterior): 4 colículos o tubérculos cuadrigéminos (2 superiores visuales, 2 inferiores auditivos) para orientación ante estímulos.",
    examNote: "Tegmentum: Sustancia nigra + ATV (dopamina) y núcleo rojo. Tectum: 2 colículos visuales + 2 auditivos.",
    category: "tallo",
    highlightColor: "#944920"
  },
  {
    id: 8,
    number: 8,
    year: "Familia Tálamo",
    location: "Diencéfalo",
    title: "Diencéfalo: Tálamo, Hipotálamo, Epitálamo y Subtálamo",
    badge: "Diencéfalo",
    description: "Dos estructuras en forma de papa. 1) Tálamo (2): filtro sensorial (excepto olfato). 2) Hipotálamo: controla glándula pituitaria, tiroides, sistema endocrino y metabolismo; jefe del SNA. 3) Epitálamo: glándula pineal para ritmos biológicos (tiempo, luz y oscuridad). 4) Subtálamo: par de núcleos que afina el movimiento junto con cerebelo, ganglios basales y núcleos pigmentados.",
    examNote: "Tálamo = filtro (sin olfato); Hipotálamo = jefe SNA; Epitálamo = pineal y ritmos; Subtálamo = afina movimiento.",
    category: "tallo",
    highlightColor: "#704812"
  },
  {
    id: 9,
    number: 9,
    year: "2 Hemisferios",
    location: "Corteza Cerebral",
    title: "Corteza Cerebral: 4 Lóbulos Especializados",
    badge: "Corteza",
    description: "Dos hemisferios y 4 lóbulos: 1) Occipital: visual. 2) Temporal: vestibular, olfativo, auditivo, lenguaje, emociones (amígdala) y memoria (hipocampo). 3) Parietal: gustativo y somatosensorial (tacto, presión, dolor, temp, propiocepción, viscerocepción). 4) Frontal: movimiento o 'lo que hago' y funciones ejecutivas (decisiones, verificación, anticipación, control de impulsos, metas).",
    examNote: "Occipital = visual; Temporal = oído/memoria/emoción; Parietal = somatosensorial/viscerocepción; Frontal = motor/ejecutivo.",
    category: "prosencefalo",
    highlightColor: "#2b553c"
  },
  {
    id: 10,
    number: 10,
    year: "Red Emocional y Motora",
    location: "Prosencéfalo Subcortical",
    title: "Sistema Límbico y Ganglios Basales",
    badge: "Límbico y Basales",
    description: "Sistema Límbico: red subcortical y cortical básica para generar emociones y configurar recuerdos (Amígdala, Hipocampo, Corteza del cíngulo y prefrontal, núcleos talámicos e hipotalámicos, Área septal/septum, núcleo accumbens y ATV). Ganglios Basales: núcleo caudado, putamen y globo pálido (afinación del movimiento).",
    examNote: "Límbico = emociones y recuerdos. Ganglios Basales = Caudado, putamen y globo pálido.",
    category: "prosencefalo",
    highlightColor: "#944920"
  }
];

/* =========================================================================
   6. TARJETAS DE REPASO (FLASHCARDS PARA EXAMEN)
   ========================================================================= */
export const flashcardsData: Flashcard[] = [
  {
    id: "fc-1",
    year: "Estructura SN",
    category: "Bases del Sistema Nervioso",
    question: "¿Cómo se divide estructuralmente el Sistema Nervioso?",
    answer: "Se divide en Sistema Nervioso Periférico (SNP: formado por ganglios y nervios) y Sistema Nervioso Central (SNC: formado por núcleos y fascículos/asicuto).",
    examNote: "Punto clave: SNP = ganglios y nervios. SNC = núcleos y fascículos."
  },
  {
    id: "fc-2",
    year: "SNP Autónomo",
    category: "Sistema Autónomo",
    question: "¿Qué es el Sistema Autónomo o Vegetativo y cómo se divide?",
    answer: "Es el sistema que funciona por sí mismo permitiendo funciones automáticas (respiración, desecho, etc.) sin que tengamos que estar pensando en hacerlo (como las funciones básicas de una planta). Se divide en Sistema Simpático y Sistema Parasimpático.",
    examNote: "Involuntario: mantiene con vida al organismo. Se divide en Simpático y Parasimpático."
  },
  {
    id: "fc-3",
    year: "SNP Autónomo",
    category: "Simpático",
    question: "¿Cuáles son las respuestas corporales del Sistema Nervioso Simpático?",
    answer: "Nos prepara para la acción: eleva la frecuencia cardíaca, respiratoria y presión arterial; eleva la irrigación periférica hacia el músculo esquelético; libera adrenalina; eleva glucosa periférica dilatando vasos (piel roja y caliente); dilata pupilas; baja digestión; baja lágrimas, saliva y moco; disminuye percepción del tiempo y genera cortisol reparador final.",
    examNote: "Regla mnemotécnica: Acción, adrenalina, cortisol, rojo/caliente, midriasis, bajo gasto digestivo."
  },
  {
    id: "fc-4",
    year: "SNP Autónomo",
    category: "Parasimpático",
    question: "¿Cuáles son las respuestas corporales del Sistema Nervioso Parasimpático?",
    answer: "Baja la frecuencia cardíaca, respiratoria y arterial; eleva irrigación del tracto digestivo (músculo liso); baja irrigación periférica (pone la piel pálida y fría); relaja el músculo esquelético; contrae la pupila (miosis); y eleva secreción de lágrima, saliva y moco.",
    examNote: "Regla mnemotécnica: Calma, digestión (músculo liso), pálido/frío, miosis, secreciones elevadas."
  },
  {
    id: "fc-5",
    year: "SNP Somático",
    category: "Somático",
    question: "¿Qué controla el Sistema Nervioso Somático y qué particularidad tienen los pares craneales?",
    answer: "Ejerce el control voluntario y consciente. Se divide en 12 pares de nervios craneales y 31 pares de nervios espinales. Particularidad de examen: en los nervios craneales NO aplica la ley de Bell-Magendie.",
    examNote: "Control consciente. En los 12 pares craneales no aplica Bell-Magendie."
  },
  {
    id: "fc-6",
    year: "Pares I y II",
    category: "Pares Craneales Sensoriales",
    question: "¿Qué funciones tienen el Par I (Olfatorio) y el Par II (Óptico)?",
    answer: "Par I Olfatorio (sensorial/aferente): recibe información olfativa de los bulbos olfatorios. Par II Óptico (sensorial): recibe información visual de las retinas.",
    examNote: "Ambos sensoriales: I = Bulbos olfatorios; II = Retinas de los ojos."
  },
  {
    id: "fc-7",
    year: "Pares III, IV y VI",
    category: "Pares Craneales Motores Oculares",
    question: "¿Qué músculos del ojo inervan los pares III (Oculomotor), IV (Patético) y VI (Abducens)?",
    answer: "Par III (Oculomotor): contracción pupilar y la mayoría de músculos del ojo. Par IV (Patético/Troclear): músculo oblicuo superior (girar el ojo y barrido hacia afuera). Par VI (Motor ocular externo/Abducens): músculo recto externo (lo jala hacia un lado y hacia afuera).",
    examNote: "III = contracción pupilar y mayoría; IV = oblicuo superior; VI = recto externo."
  },
  {
    id: "fc-8",
    year: "Par V",
    category: "Trigémino",
    question: "¿Cuáles son las ramas y funciones del Par V (Nervio Trigémino)?",
    answer: "Es mixto: la rama sensorial recibe sensaciones de las cosas de la boca, encías, dientes y lengua; la rama motora controla los músculos y la masticación.",
    examNote: "Mixto: Sensorial (boca, encías, dientes, lengua) + Motor (masticación)."
  },
  {
    id: "fc-9",
    year: "Par VII",
    category: "Facial",
    question: "¿Cuáles son las 3 ramas del Par VII (Nervio Facial)?",
    answer: "1) Sensorial: información de la cara (párpado) y sabores de la punta de la lengua (dulce, salado, ácido/agrio, umami). 2) Intermedia (parasimpático): secreta lágrima, saliva y moco. 3) Motora: controla los músculos de la cara.",
    examNote: "3 ramas: Sensorial (punta lengua 4 sabores), Intermedia (lágrima/saliva/moco) y Motora (mímica facial)."
  },
  {
    id: "fc-10",
    year: "Pares VIII y IX",
    category: "Pares Craneales",
    question: "¿Qué funciones tienen el Par VIII (Auditivo/Vestibulococlear) y el Par IX (Glosofaríngeo)?",
    answer: "Par VIII (Sensorial): audición proveniente de la cóclea por el órgano de Corti y equilibrio. Par IX (Mixto): rama sensorial recibe sabor amargo (reflejo nauseoso); rama motora controla laringe, faringe y reflejo nauseoso.",
    examNote: "VIII = cóclea/Corti + equilibrio. IX = sabor amargo + laringe/faringe/náusea."
  },
  {
    id: "fc-11",
    year: "Par X",
    category: "Vago / Neumogástrico",
    question: "¿Por qué es crucial el Par X (Nervio Vago / Neumogástrico) y dónde se ubica su núcleo?",
    answer: "Es la rama principal del sistema parasimpático (mixto): su rama sensorial recibe sensaciones de órganos internos y digestivos; su rama motora controla la información y motilidad de los órganos internos. Su núcleo se ubica en el bulbo raquídeo.",
    examNote: "Rama principal parasimpática. Núcleo en bulbo raquídeo."
  },
  {
    id: "fc-12",
    year: "Pares XI y XII",
    category: "Pares Craneales Motores",
    question: "¿Qué inervan el Par XI (Accesorio/Espinal) y el Par XII (Hipogloso)?",
    answer: "Par XI (Motor): controla dos músculos del cuello: el trapecio y el esternocleidomastoideo. Par XII (Motor): controla los músculos de la lengua.",
    examNote: "XI = Trapecio y Esternocleidomastoideo. XII = Músculos de la lengua."
  },
  {
    id: "fc-13",
    year: "Médula y Nervios Espinales",
    category: "Médula Espinal",
    question: "¿Cómo se organizan los 31 pares de nervios espinales y la regla de 4 nervios por par?",
    answer: "Hay 31 pares: 8 cervicales, 12 torácicos (troncales), 5 lumbares, 5 sacros y 1 coxígeo. El primer par C1 conecta en el segmento C1. Son 4 nervios por par: Izquierdo, Derecho, Aferente (dorsal) y Eferente (ventral).",
    examNote: "Fórmula: 8C + 12T + 5L + 5S + 1Co = 31 pares. 4 nervios: Izq, Der, Dorsal/aferente, Ventral/eferente."
  },
  {
    id: "fc-14",
    year: "Tallo Cerebral",
    category: "Formación Reticular",
    question: "¿Qué es y qué función cumple la Formación Reticular en el tallo cerebral?",
    answer: "Es una estructura extendida a lo largo del tallo compuesta por fibras de interconexión para recibir la información de entrada y salida, con la función esencial de apagar o encender la corteza cerebral.",
    examNote: "Fibras de interconexión que apagan o encienden la corteza cerebral."
  },
  {
    id: "fc-15",
    year: "Rombencéfalo",
    category: "Estructuras de Abajo hacia Arriba",
    question: "¿Cuáles son las estructuras del Rombencéfalo de abajo hacia arriba y qué función tiene el Cerebelo?",
    answer: "De abajo hacia arriba: 1) Bulbo raquídeo / médula oblonga (núcleo del nervio vago), 2) Puente de Varolio / protuberancia anular, y 3) Atrás de ambas, el Cerebelo: coordina movimientos, equilibrio y participa en aprendizajes motores (secuencia de actos motores).",
    examNote: "Bulbo (vago) -> Puente -> Cerebelo (equilibrio y secuencia de actos motores)."
  },
  {
    id: "fc-16",
    year: "Mesencéfalo",
    category: "Tegmentum vs Tectum",
    question: "¿Qué compone el Tegmentum (anterior) y el Tectum (posterior) en el mesencéfalo?",
    answer: "Tegmentum (anterior): pedúnculos cerebrales y núcleos pigmentados con Sustancia Nigra y ATV (productoras de dopamina) y Núcleo Rojo (afina el movimiento). Tectum (posterior): 4 colículos (2 superiores visuales y 2 inferiores auditivos) para orientación ante estímulos.",
    examNote: "Tegmentum = Sustancia nigra, ATV (dopamina) y núcleo rojo. Tectum = 4 colículos (2 visuales + 2 auditivos)."
  },
  {
    id: "fc-17",
    year: "Diencéfalo",
    category: "Familia Tálamo",
    question: "¿Cuáles son las 4 estructuras de la familia tálamo y sus funciones?",
    answer: "1) Tálamo (2 estructuras con forma de papa): filtro sensorial de estímulos, excepto el olfato. 2) Hipotálamo: controla glándula pituitaria, tiroides, endocrino, metabolismo y es jefe del SNA. 3) Epitálamo: glándula pineal para ritmos biológicos (tiempo, luz, oscuridad). 4) Subtálamo: par de núcleos que afina movimiento.",
    examNote: "Tálamo = filtro (sin olfato). Hipotálamo = jefe SNA. Epitálamo = pineal. Subtálamo = afina movimiento."
  },
  {
    id: "fc-18",
    year: "Corteza Cerebral",
    category: "Lóbulos Occipital y Temporal",
    question: "¿Qué funciones tienen el Lóbulo Occipital y el Lóbulo Temporal?",
    answer: "Lóbulo Occipital: recibe y procesa la información visual. Lóbulo Temporal: información vestibular, olfativa y auditiva; en él se lleva a cabo el lenguaje, emociones (amígdala) y memoria a corto y largo plazo (hipocampo).",
    examNote: "Occipital = visión. Temporal = vestibular/olfato/oído + lenguaje, amígdala y memoria/hipocampo."
  },
  {
    id: "fc-19",
    year: "Corteza Cerebral",
    category: "Lóbulos Parietal y Frontal",
    question: "¿Qué funciones tienen el Lóbulo Parietal y el Lóbulo Frontal?",
    answer: "Lóbulo Parietal: recibe información gustativa y somatosensorial (tacto, presión, dolor, temperatura, propiocepción y viscerocepción). Lóbulo Frontal: se encarga del movimiento ('lo que hago') y de las funciones ejecutivas (toma de decisiones, verificación, anticipación, control de impulsos, metas).",
    examNote: "Parietal = tacto/presión/dolor/temp/propiocepción/viscerocepción/gusto. Frontal = movimiento y ejecutivas."
  },
  {
    id: "fc-20",
    year: "Sistema Límbico",
    category: "Emociones y Recuerdos",
    question: "¿Qué es el Sistema Límbico y cuáles son sus estructuras?",
    answer: "Red de estructuras subcorticales y corticales básicas que permite la generación de emociones y configuración de recuerdos. Estructuras: Amígdala, Hipocampo, Corteza del cíngulo y prefrontal, núcleos talámicos e hipotalámicos, Área septal / septum, núcleo accumbens y ATV.",
    examNote: "Generación de emociones y configuración de recuerdos. 7 estructuras clave."
  },
  {
    id: "fc-21",
    year: "Ganglios Basales",
    category: "Afinación Motora",
    question: "¿Qué estructuras componen los Ganglios Basales y cuál es su función?",
    answer: "Contienen el núcleo caudado, el putamen y el globo pálido. Participan activamente en el control y la afinación del movimiento (junto con subtálamo, cerebelo y núcleos pigmentados).",
    examNote: "Componentes: Caudado, Putamen y Globo Pálido. Función: afinación del movimiento."
  }
];

/* =========================================================================
   7. RESUMEN DE SEGMENTOS MEDULARES
   ========================================================================= */
export const spinalSegmentsInfo = [
  { region: "Cervicales", segments: 8, nerves: "8 pares (C1 a C8)", function: "Inervación cuello, diafragma y miembros superiores" },
  { region: "Torácicos / Troncales", segments: 12, nerves: "12 pares (T1 a T12)", function: "Inervación tórax, abdomen y tronco" },
  { region: "Lumbares", segments: 5, nerves: "5 pares (L1 a L5)", function: "Inervación zona lumbar y miembros inferiores" },
  { region: "Sacros", segments: 5, nerves: "5 pares (S1 a S5)", function: "Inervación pelvis, genitales y región glútea/posterior" },
  { region: "Coxígeo", segments: 1, nerves: "1 par (Co1)", function: "Inervación área coxígea" }
];
