import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "../../content";
import { useDeck } from "../../hooks/useDeck";
import { useIdle } from "../../hooks/useIdle";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import { useLocale, useUi } from "../../i18n/locale";
import { LanguageSwitch } from "./LanguageSwitch";
import { Overview } from "./Overview";
import { NotesPanel } from "./NotesPanel";
import { RenderSlide } from "./RenderSlide";
import { Stage } from "./Stage";

const stepsOf = (i: number) => slides[i]?.steps ?? 0;

export function Deck() {
  const total = slides.length;
  const { pos, direction, next, prev, goTo } = useDeck(total, stepsOf);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const idle = useIdle(2000);
  const { reduced } = useMotionPreset();
  const digits = useRef("");
  const { locale, toggle: toggleLocale } = useLocale();
  const t = useUi();

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (/^\d$/.test(k)) {
        digits.current += k;
        return;
      }
      if (k === "Enter" && digits.current) {
        goTo(Number(digits.current) - 1);
        digits.current = "";
        setOverview(false);
        return;
      }
      digits.current = "";
      if (k === "Escape") return setOverview(false);
      if (k === "o" || k === "O") return setOverview((v) => !v);
      if (k === "n" || k === "N") return setNotes((v) => !v);
      if (k === "f" || k === "F") return toggleFullscreen();
      if (k === "l" || k === "L") return toggleLocale();
      if (overview) return;
      if (k === "ArrowRight" || k === " " || k === "PageDown") {
        e.preventDefault();
        next();
      } else if (k === "ArrowLeft" || k === "PageUp") {
        e.preventDefault();
        prev();
      } else if (k === "Home") goTo(0);
      else if (k === "End") goTo(total - 1, stepsOf(total - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, next, prev, overview, toggleFullscreen, toggleLocale, total]);

  // Swipe no mobile
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const slide = slides[pos.index];
  const shift = reduced ? 0 : 24;
  const progress = (pos.index + (stepsOf(pos.index) ? pos.step / (stepsOf(pos.index) + 1) : 0)) / (total - 1);

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Stage>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`${slide.id}-${locale}`}
            initial={{ opacity: 0, x: shift * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -shift * direction }}
            transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <RenderSlide slide={slide} index={pos.index} total={total} step={pos.step} />
          </motion.div>
        </AnimatePresence>

        {/* Zonas de clique laterais */}
        <button aria-label={t.prev} onClick={prev} style={sideZone("left")} />
        <button aria-label={t.next} onClick={next} style={sideZone("right")} />
      </Stage>

      {/* Barra de progresso */}
      <div
        className={`deck-ui ${idle ? "is-idle" : ""}`}
        style={{ position: "fixed", left: 0, right: 0, bottom: 0, height: 4, background: "rgb(185 216 242 / 0.15)" }}
      >
        <div
          style={{
            height: "100%",
            width: `${Math.max(progress, 0.01) * 100}%`,
            background: "var(--c-pulse)",
            transition: "width 480ms var(--ease)",
          }}
        />
      </div>

      <div
        className={`deck-ui ${idle ? "is-idle" : ""}`}
        style={{
          position: "fixed",
          right: 16,
          bottom: 14,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.08em",
          color: "#91a0b2",
          background: "rgb(7 17 31 / 0.72)",
          padding: "6px 10px",
          borderRadius: 8,
        }}
      >
        {t.hint}
      </div>

      <LanguageSwitch hidden={idle && !overview} />

      {notes && <NotesPanel slide={slide} index={pos.index} total={total} step={pos.step} />}
      {overview && (
        <Overview
          current={pos.index}
          onPick={(i) => {
            goTo(i);
            setOverview(false);
          }}
          onClose={() => setOverview(false)}
        />
      )}
    </div>
  );
}

function sideZone(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: 0,
    bottom: 0,
    [side]: 0,
    width: "9%",
    background: "transparent",
    border: 0,
    cursor: side === "left" ? "w-resize" : "e-resize",
    zIndex: 5,
  };
}
