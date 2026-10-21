import { useEffect, useState, type ReactNode } from "react";
import { stage } from "../../theme/tokens";

/** Palco lógico 1920×1080 escalado para caber na janela (letterbox). */
export function Stage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / stage.width, window.innerHeight / stage.height));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--c-night)",
        overflow: "hidden",
      }}
    >
      <div
        data-stage
        style={{
          width: stage.width,
          height: stage.height,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
