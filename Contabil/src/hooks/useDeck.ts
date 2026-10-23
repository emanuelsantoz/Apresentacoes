import { useCallback, useEffect, useState } from 'react';
import type { SlideDef } from '../types/slide';

/** `#/4` ou `#/4/2` (slide 4, passo 2). */
function readHash(slides: SlideDef<any>[]) {
  const m = window.location.hash.match(/^#\/(\d+)(?:\/(\d+))?/);
  if (!m) return { index: 0, step: 0 };
  const index = Math.min(Math.max(Number(m[1]) - 1, 0), slides.length - 1);
  const step = m[2] ? Math.min(Number(m[2]), slides[index]?.steps ?? 0) : 0;
  return { index, step };
}

/**
 * Estado do deck: slide atual + passo interno, sincronizado com a URL.
 * A lista pode mudar (modo edição mostra todos; apresentação só os ativos, ou um slide foi ocultado):
 * mantém o mesmo slide na tela; se ele saiu da lista, vai para o próximo que continua nela.
 */
export function useDeck(slides: SlideDef<any>[]) {
  const total = slides.length;
  const [pos, setPos] = useState(() => readHash(slides));
  const [direction, setDirection] = useState<1 | -1>(1);
  const stepsOf = useCallback((i: number) => slides[i]?.steps ?? 0, [slides]);

  // ajuste durante o render: evita mostrar o slide errado por um quadro
  const [prevSlides, setPrevSlides] = useState(slides);
  if (prevSlides !== slides) {
    const old = prevSlides;
    let i = -1;
    for (let k = Math.min(pos.index, old.length - 1); k < old.length && i < 0; k++) i = slides.findIndex((s) => s.id === old[k].id);
    for (let k = Math.min(pos.index, old.length - 1); k >= 0 && i < 0; k--) i = slides.findIndex((s) => s.id === old[k].id);
    setPrevSlides(slides);
    setPos({ index: Math.max(0, Math.min(i, total - 1)), step: 0 });
  }
  const index = Math.min(pos.index, total - 1);
  const step = pos.step;

  const goTo = useCallback(
    (i: number, atEnd = false) => {
      const target = Math.min(Math.max(i, 0), total - 1);
      setDirection(target >= index ? 1 : -1);
      setPos({ index: target, step: atEnd ? stepsOf(target) : 0 });
    },
    [index, total, stepsOf],
  );

  const next = useCallback(() => {
    setDirection(1);
    if (step < stepsOf(index)) setPos({ index, step: step + 1 });
    else if (index < total - 1) setPos({ index: index + 1, step: 0 });
  }, [step, index, total, stepsOf]);

  const prev = useCallback(() => {
    setDirection(-1);
    if (step > 0) setPos({ index, step: step - 1 });
    else if (index > 0) setPos({ index: index - 1, step: stepsOf(index - 1) });
  }, [step, index, stepsOf]);

  useEffect(() => {
    const target = `#/${index + 1}${step ? `/${step}` : ''}`;
    if (window.location.hash !== target) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${target}`);
  }, [index, step]);

  useEffect(() => {
    const onHash = () => setPos(readHash(slides));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [slides]);

  return { index, step, direction, total, next, prev, goTo };
}
