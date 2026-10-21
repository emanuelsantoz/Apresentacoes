import { useCallback, useEffect, useState } from "react";

export interface DeckPosition {
  index: number;
  step: number;
}

function readHash(stepsOf: (i: number) => number, total: number): DeckPosition {
  const m = window.location.hash.match(/^#\/(\d+)(?:\/(\d+))?/);
  if (!m) return { index: 0, step: 0 };
  const index = Math.min(Math.max(Number(m[1]) - 1, 0), total - 1);
  const step = m[2] ? Math.min(Number(m[2]), stepsOf(index)) : 0;
  return { index, step };
}

/** Estado do deck (slide + passo interno) sincronizado com a URL (#/4 ou #/4/2). */
export function useDeck(total: number, stepsOf: (i: number) => number) {
  const [pos, setPos] = useState<DeckPosition>(() => readHash(stepsOf, total));
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const hash = `#/${pos.index + 1}${pos.step ? `/${pos.step}` : ""}`;
    if (window.location.hash !== hash) window.history.replaceState(null, "", hash);
  }, [pos]);

  useEffect(() => {
    const onHash = () => setPos(readHash(stepsOf, total));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [stepsOf, total]);

  const next = useCallback(() => {
    setDirection(1);
    setPos((p) => {
      if (p.step < stepsOf(p.index)) return { ...p, step: p.step + 1 };
      if (p.index < total - 1) return { index: p.index + 1, step: 0 };
      return p;
    });
  }, [stepsOf, total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setPos((p) => {
      if (p.step > 0) return { ...p, step: p.step - 1 };
      if (p.index > 0) return { index: p.index - 1, step: stepsOf(p.index - 1) };
      return p;
    });
  }, [stepsOf]);

  const goTo = useCallback(
    (index: number, step = 0) => {
      const i = Math.min(Math.max(index, 0), total - 1);
      setPos((p) => {
        setDirection(i >= p.index ? 1 : -1);
        return { index: i, step: Math.min(step, stepsOf(i)) };
      });
    },
    [stepsOf, total],
  );

  return { pos, direction, next, prev, goTo };
}
