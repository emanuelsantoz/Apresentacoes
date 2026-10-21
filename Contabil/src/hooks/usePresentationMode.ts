import { createContext, useContext } from "react";
import { useReducedMotion } from "motion/react";
import { motionTokens } from "../theme/tokens";

/** true quando a página foi aberta com ?print=1 (exportação PDF). */
export const PrintContext = createContext(false);

export function isPrintRoute(): boolean {
  return new URLSearchParams(window.location.search).get("print") === "1";
}

/**
 * Centraliza o comportamento de movimento:
 * - impressão: sem animação (estado final imediato);
 * - movimento reduzido: só opacidade, sem deslocamento;
 * - padrão: ritmo da marca (480 ms, easing 0.2/0.8/0.2/1, até 16 px).
 */
export function useMotionPreset() {
  const print = useContext(PrintContext);
  const reduced = useReducedMotion() ?? false;
  const still = print;
  const shift = still || reduced ? 0 : motionTokens.shift;
  const t = (delay = 0, duration: number = motionTokens.assemble) =>
    still ? { duration: 0 } : { duration, delay, ease: motionTokens.ease };
  return { print, reduced, still, shift, t };
}
