import { slides } from "../../content";
import { PrintContext } from "../../hooks/usePresentationMode";
import { useLocale } from "../../i18n/locale";
import { RenderSlide } from "./RenderSlide";

interface OverviewProps {
  current: number;
  onPick: (index: number) => void;
  onClose: () => void;
}


/** Grade de miniaturas (tecla O). Miniaturas sem animação, no estado final. */
export function Overview({ current, onPick, onClose }: OverviewProps) {
  const { locale } = useLocale();
  // 4 colunas × 3 linhas cabendo na janela
  const SCALE = Math.min((window.innerWidth - 48 - 60) / (4 * 1920), (window.innerHeight - 48 - 40) / (3 * 1080), 0.2);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgb(7 17 31 / 0.96)",
        zIndex: 30,
        display: "grid",
        placeItems: "center",
        overflow: "auto",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: `repeat(4, ${1920 * SCALE}px)`, gap: 20, padding: 24, alignContent: "center" }}>
        <PrintContext.Provider value={true}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={(e) => {
                e.stopPropagation();
                onPick(i);
              }}
              title={s.content[locale].title}
              style={{
                width: 1920 * SCALE,
                height: 1080 * SCALE,
                padding: 0,
                border: i === current ? "3px solid #2f7de1" : "1px solid #243448",
                borderRadius: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: "#07111f",
                position: "relative",
              }}
            >
              <div style={{ transform: `scale(${SCALE})`, transformOrigin: "top left", width: 1920, height: 1080, pointerEvents: "none" }}>
                <RenderSlide slide={s} index={i} total={slides.length} step={s.steps} />
              </div>
            </button>
          ))}
        </PrintContext.Provider>
      </div>
    </div>
  );
}
