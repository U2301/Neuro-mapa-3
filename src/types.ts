export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'timeline' | 'disciplines' | 'flashcards';

export interface NeuroNode {
  id: number;
  label: string;
  period: string; // Clasificación / Subnivel anatómico
  category: 'Sistema Nervioso Periférico' | 'Sistema Nervioso Central' | 'Pares Craneales' | 'Tallo Cerebral y Diencéfalo' | 'Prosencéfalo y Corteza' | 'Médula Espinal';
  group: 'snp' | 'snc' | 'pares' | 'tallo' | 'prosencefalo' | 'medula' | 'autonomo';
  desc: string;
  exam: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  year: string; // Etiqueta o subgrupo (ej: 'SNP Autónomo', 'Par III Motor', 'Diencéfalo')
  category: string;
  question: string;
  answer: string;
  examNote: string;
}

export interface TimelineMilestone {
  id: number;
  number: number;
  year: string; // Nivel / Sección (ej: 'Nivel 1', 'Segmento C1-Co1', 'Pares I-XII')
  location: string; // Región anatómica
  title: string;
  badge: string;
  description: string;
  examNote?: string;
  category: 'snp' | 'snc' | 'tallo' | 'prosencefalo';
  highlightColor?: string;
}

export interface CranialNerveItem {
  number: string;
  roman: string;
  name: string;
  alternativeName?: string;
  type: 'Sensorial' | 'Motor' | 'Mixto';
  functionSummary: string;
  details: string[];
  examKey: string;
}

export interface AutonomicEffect {
  organOrSystem: string;
  sympathetic: string;
  parasympathetic: string;
  note?: string;
}
