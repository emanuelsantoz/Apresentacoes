import { MotionConfig } from "motion/react";
import { slides } from "../../content";
import { PrintContext } from "../../hooks/usePresentationMode";
import { RenderSlide } from "./RenderSlide";

/** Rota ?print=1: todos os slides empilhados, sem animação, passos revelados. */
export function PrintDeck() {
  return (
    <PrintContext.Provider value={true}>
      <MotionConfig transition={{ duration: 0 }}>
        <div data-print-deck>
          {slides.map((s, i) => (
            <div key={s.id} data-print-page style={{ width: 1920, height: 1080, breakAfter: "page", overflow: "hidden" }}>
              <RenderSlide slide={s} index={i} total={slides.length} step={s.steps} />
            </div>
          ))}
        </div>
      </MotionConfig>
    </PrintContext.Provider>
  );
}
