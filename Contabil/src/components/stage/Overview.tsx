import { Eye, EyeOff } from 'lucide-react';
import { PrintContext } from '../../hooks/usePresentationMode';
import { useLocale, useUi } from '../../i18n/locale';
import type { SlideDef } from '../../types/slide';
import { SlideView } from './SlideView';

interface OverviewProps {
  slides: SlideDef<any>[];
  current: number;
  hidden: string[];
  editing: boolean;
  onPick: (index: number) => void;
  onToggle: (id: string) => void;
  onClose: () => void;
}

/**
 * Visão geral (tecla O): miniaturas no estado final, já com as edições.
 * No modo edição, o olho de cada miniatura oculta/mostra o slide na apresentação.
 */
export function Overview({ slides, current, hidden, editing, onPick, onToggle, onClose }: OverviewProps) {
  const { locale } = useLocale();
  const t = useUi();
  const cols = 4;
  const scale = Math.min((window.innerWidth - 80 - (cols - 1) * 20) / (cols * 1920), 0.2);
  const nHidden = slides.filter((s) => hidden.includes(s.id)).length;

  return (
    <div
      data-editor-ui
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgb(7 17 31 / 0.97)', zIndex: 70, overflow: 'auto', padding: '24px 40px 40px' }}
    >
      <div style={{ color: '#f7fafc', fontSize: 14, marginBottom: 18, display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-body)' }}>
        <b style={{ fontSize: 16 }}>{t.overviewTitle}</b>
        <span style={{ opacity: 0.75 }}>{editing ? t.overviewEditing(slides.length - nHidden, nHidden) : t.overviewActive(slides.length)}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, ${1920 * scale}px)`, gap: 20, justifyContent: 'center' }}>
        <PrintContext.Provider value={true}>
          {slides.map((s, i) => {
            const off = hidden.includes(s.id);
            return (
              <div key={s.id} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPick(i);
                  }}
                  title={t.goTo(i + 1)}
                  style={{ all: 'unset', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 8 }}
                >
                  <div
                    style={{
                      width: 1920 * scale,
                      height: 1080 * scale,
                      overflow: 'hidden',
                      borderRadius: 10,
                      position: 'relative',
                      outline: i === current ? '3px solid #2f7de1' : '1px solid #243448',
                      opacity: off ? 0.35 : 1,
                      filter: off ? 'grayscale(1)' : 'none',
                      transition: 'opacity .2s, filter .2s',
                    }}
                  >
                    <div style={{ position: 'absolute', width: 1920, height: 1080, transform: `scale(${scale})`, transformOrigin: '0 0', pointerEvents: 'none' }}>
                      <SlideView slide={s} index={i} total={slides.length} step={s.steps} />
                    </div>
                  </div>
                  <span style={{ color: off ? '#91a0b2' : '#f7fafc', fontSize: 13, fontFamily: 'var(--font-body)', textDecoration: off ? 'line-through' : 'none' }}>
                    <b style={{ color: off ? '#91a0b2' : '#2f7de1', fontFamily: 'var(--font-mono)' }}>{String(i + 1).padStart(2, '0')}</b> · {s.content[locale].title}
                  </span>
                </button>
                {off && (
                  <span style={{ position: 'absolute', left: 10, top: 10, display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 9px', borderRadius: 99, background: '#1b2737', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                    <EyeOff size={13} /> {t.hiddenBadge}
                  </span>
                )}
                {editing && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle(s.id);
                    }}
                    title={off ? t.showSlide : t.hideSlide}
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'grid',
                      placeItems: 'center',
                      background: off ? '#2166c9' : 'rgb(27 39 55 / 0.88)',
                      color: '#fff',
                    }}
                  >
                    {off ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                )}
              </div>
            );
          })}
        </PrintContext.Provider>
      </div>
    </div>
  );
}
