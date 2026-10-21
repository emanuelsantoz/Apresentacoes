import type { ComponentType } from "react";
import type { Locale } from "../i18n/locale";

export type Tone = "light" | "dark";

/** Props recebidas por todo layout. `step` vai de 0 até `steps`. */
export interface LayoutProps<D> {
  data: D;
  step: number;
}

/** Texto de um slide em um idioma. */
export interface SlideCopy<D> {
  /** Rótulo curto da seção, exibido na etiqueta mono do topo. */
  label: string;
  /** Título usado na visão geral e no roteiro. */
  title: string;
  /** Indicação de layout para o roteiro (docs/ROTEIRO*.md). */
  layoutNote: string;
  /** Fala do apresentador. Não aparece no slide. */
  notes: string;
  data: D;
}

export interface SlideDef<D = unknown> {
  /** "slide-03" */
  id: string;
  tone: Tone;
  /** Quantos cliques internos (reveals) o slide possui. 0 = nenhum. */
  steps: number;
  Layout: ComponentType<LayoutProps<D>>;
  /** Conteúdo por idioma: mesma estrutura em pt e en. */
  content: Record<Locale, SlideCopy<D>>;
}
