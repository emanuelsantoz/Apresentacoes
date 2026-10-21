import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { useMotionPreset } from "../../hooks/usePresentationMode";

interface RevealProps {
  children: ReactNode;
  /** Atraso de entrada em segundos. */
  delay?: number;
  /** Controla a visibilidade por passo (step). Padrão: visível. */
  show?: boolean;
  /** Direção do deslocamento de entrada. */
  from?: "bottom" | "left" | "right";
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "span";
}

/** Entrada por opacidade + deslocamento curto (assinatura de movimento). */
export function Reveal({ children, delay = 0, show = true, from = "bottom", className, style, as = "div" }: RevealProps) {
  const { shift, t, still } = useMotionPreset();
  const offset = from === "bottom" ? { y: shift } : { x: from === "left" ? -shift : shift };
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      style={style}
      initial={still ? false : { opacity: 0, ...offset }}
      animate={show ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={t(show ? delay : 0, 0.48)}
    >
      {children}
    </Comp>
  );
}
