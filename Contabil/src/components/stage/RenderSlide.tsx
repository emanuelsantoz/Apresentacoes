import type { SlideDef } from "../../types/slide";
import { SlideFrame } from "./SlideFrame";

interface RenderSlideProps {
  slide: SlideDef<any>;
  index: number;
  total: number;
  step: number;
}

/** Junta conteúdo (data) + layout + moldura comum. */
export function RenderSlide({ slide, index, total, step }: RenderSlideProps) {
  const { Layout } = slide;
  return (
    <SlideFrame tone={slide.tone} index={index} total={total} label={slide.label} bare={index === 0}>
      <Layout data={slide.data} step={step} />
    </SlideFrame>
  );
}
