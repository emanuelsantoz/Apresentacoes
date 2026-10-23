import { MotionConfig } from 'motion/react';
import { PrintContext } from '../../hooks/usePresentationMode';
import type { SlideDef } from '../../types/slide';
import { SlideView } from './SlideView';

/** Rota ?print=1: slides ativos empilhados, sem animação, passos revelados, com as edições do projeto. */
export function PrintDeck({ slides }: { slides: SlideDef<any>[] }) {
  return (
    <PrintContext.Provider value={true}>
      <MotionConfig transition={{ duration: 0 }}>
        <div data-print-deck>
          {slides.map((s, i) => (
            <div key={s.id} data-print-page style={{ position: 'relative', width: 1920, height: 1080, breakAfter: 'page', overflow: 'hidden' }}>
              <SlideView slide={s} index={i} total={slides.length} step={s.steps} />
            </div>
          ))}
        </div>
      </MotionConfig>
    </PrintContext.Provider>
  );
}
