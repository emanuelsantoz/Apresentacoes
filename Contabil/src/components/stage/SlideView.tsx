import { useRef } from 'react';
import { NewCardsLayer } from '../../edit/NewCards';
import { useApplyEdits } from '../../edit/useApplyEdits';
import { useLocale, type Locale } from '../../i18n/locale';
import type { SlideDef } from '../../types/slide';
import { SlideFrame } from './SlideFrame';

/** Chave das edições: por slide e por idioma (o texto e o espaço de cada idioma são diferentes). */
export const editKeyOf = (slideId: string, locale: Locale) => (locale === 'pt' ? slideId : `${slideId}@${locale}`);

interface SlideViewProps {
  slide: SlideDef<any>;
  index: number;
  total: number;
  step: number;
}

/** Um slide completo: conteúdo no idioma atual + layout + moldura + edições feitas pela interface. */
export function SlideView({ slide, index, total, step }: SlideViewProps) {
  const { locale } = useLocale();
  const copy = slide.content[locale];
  const { Layout } = slide;
  const editId = editKeyOf(slide.id, locale);
  const root = useRef<HTMLDivElement>(null);
  useApplyEdits(root, editId, step);
  return (
    <div ref={root} data-slide-root data-slide-id={editId} style={{ position: 'absolute', inset: 0 }}>
      <SlideFrame tone={slide.tone} index={index} total={total} label={copy.label} bare={slide.id === 'slide-01'}>
        <Layout data={copy.data} step={step} />
      </SlideFrame>
      <NewCardsLayer slideId={editId} />
    </div>
  );
}
