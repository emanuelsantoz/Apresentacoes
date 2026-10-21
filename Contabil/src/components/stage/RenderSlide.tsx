import { useLocale } from "../../i18n/locale";
import type { SlideDef } from "../../types/slide";
import { SlideFrame } from "./SlideFrame";

interface RenderSlideProps {
  slide: SlideDef<any>;
  index: number;
  total: number;
  step: number;
}

/** Junta conteúdo (no idioma atual) + layout + moldura comum. */
export function RenderSlide({ slide, index, total, step }: RenderSlideProps) {
  const { locale } = useLocale();
  const copy = slide.content[locale];
  const { Layout } = slide;
  return (
    <SlideFrame tone={slide.tone} index={index} total={total} label={copy.label} bare={index === 0}>
      <Layout data={copy.data} step={step} />
    </SlideFrame>
  );
}
