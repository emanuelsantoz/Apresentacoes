import type { ComponentType } from "react";

export type Tone = "light" | "dark";

/** Props recebidas por todo layout. `step` vai de 0 até `steps`. */
export interface LayoutProps<D> {
  data: D;
  step: number;
}

export interface SlideDef<D = unknown> {
  /** "slide-03" */
  id: string;
  /** Rótulo curto da seção, exibido na etiqueta mono do topo. */
  label: string;
  /** Título usado na visão geral e no roteiro. */
  title: string;
  tone: Tone;
  /** Quantos cliques internos (reveals) o slide possui. 0 = nenhum. */
  steps: number;
  /** Indicação de layout para o roteiro (docs/ROTEIRO.md). */
  layoutNote: string;
  /** Fala do apresentador. Não aparece no slide. */
  notes: string;
  data: D;
  Layout: ComponentType<LayoutProps<D>>;
}
