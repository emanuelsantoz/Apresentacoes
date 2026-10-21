import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { useMotionPreset } from "../../hooks/usePresentationMode";

interface OpenFrameProps {
  children?: ReactNode;
  /** Tamanho de cada canto em px. */
  corner?: number;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Moldura aberta: dois cantos opostos (superior esquerdo e inferior direito).
 * Usar com moderação — no máximo três por slide.
 * Linha de 2 px no palco 1920×1080 (equivale a ~1 px após escala de projeção).
 */
export function OpenFrame({ children, corner = 56, delay = 0, style, className }: OpenFrameProps) {
  const { t, still } = useMotionPreset();
  const line = "2px solid var(--frame)";
  const base: CSSProperties = { position: "absolute", width: corner, height: corner, pointerEvents: "none" };
  return (
    <div className={className} style={{ position: "relative", ...style }}>
      <motion.span
        style={{ ...base, top: 0, left: 0, borderTop: line, borderLeft: line, transformOrigin: "top left" }}
        initial={still ? false : { opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={t(delay, 0.48)}
      />
      <motion.span
        style={{ ...base, right: 0, bottom: 0, borderRight: line, borderBottom: line, transformOrigin: "bottom right" }}
        initial={still ? false : { opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={t(delay + 0.12, 0.48)}
      />
      {children}
    </div>
  );
}
