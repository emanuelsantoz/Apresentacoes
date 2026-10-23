import { AnimatePresence, motion } from 'motion/react';
import { EyeOff } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EditBar } from '../../edit/EditBar';
import { useEditMode } from '../../edit/EditMode';
import { edits, useHiddenSlides } from '../../edit/editsStore';
import { Toast } from '../../edit/notify';
import { TextEditor } from '../../edit/TextEditor';
import { useDeck } from '../../hooks/useDeck';
import { useIdle } from '../../hooks/useIdle';
import { useMotionPreset } from '../../hooks/usePresentationMode';
import { useLocale, useUi } from '../../i18n/locale';
import type { SlideDef } from '../../types/slide';
import { Hud } from './Hud';
import { NotesPanel } from './NotesPanel';
import { Overview } from './Overview';
import { editKeyOf, SlideView } from './SlideView';
import { Stage } from './Stage';

/**
 * Deck: um slide por vez, navegação por teclado, clique, toque e URL.
 * Dois modos (tecla E): apresentação (limpo, só slides ativos) e edição (todos os slides,
 * textos/cards/imagens editáveis, H oculta o slide).
 */
export function Deck({ all, active }: { all: SlideDef<any>[]; active: SlideDef<any>[] }) {
  const { editing, toggle: toggleEdit, setEditing } = useEditMode();
  const list = editing ? all : active;
  const hidden = useHiddenSlides();
  const { index, step, direction, total, next, prev, goTo } = useDeck(list);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const idle = useIdle(2000);
  const { reduced } = useMotionPreset();
  const { locale, toggle: toggleLocale } = useLocale();
  const t = useUi();
  const digits = useRef('');

  const slide = list[index];
  const isHidden = hidden.includes(slide.id);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return; // Ctrl+Z etc. ficam com o editor
      const k = e.key;
      if (/^\d$/.test(k)) {
        digits.current += k;
        return;
      }
      if (k === 'Enter' && digits.current) {
        goTo(Number(digits.current) - 1);
        digits.current = '';
        setOverview(false);
        return;
      }
      digits.current = '';
      switch (k) {
        case 'Escape': setOverview(false); return;
        case 'o': case 'O': setOverview((v) => !v); return;
        case 'n': case 'N': setNotes((v) => !v); return;
        case 'f': case 'F': toggleFullscreen(); return;
        case 'l': case 'L': toggleLocale(); return;
        case 'e': case 'E': toggleEdit(); return;
        case 'h': case 'H': if (editing) edits.toggleHidden(slide.id); return;
      }
      if (overview) return;
      if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') {
        e.preventDefault();
        next();
      } else if (k === 'ArrowLeft' || k === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (k === 'Home') goTo(0);
      else if (k === 'End') goTo(total - 1, true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, next, prev, overview, toggleFullscreen, toggleLocale, toggleEdit, editing, slide.id, total]);

  // Aviso de rolagem em desenvolvimento (regra: nenhum slide pode rolar).
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    const timer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-slide-frame] *').forEach((el) => {
        const cs = getComputedStyle(el);
        if ((cs.overflowY === 'auto' || cs.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
          console.warn(`[overflow] slide ${index + 1}: elemento com rolagem`, el);
        }
      });
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [index]);

  // Swipe no mobile
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null || editing) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const shift = reduced ? 0 : 24;
  const steps = slide.steps;
  const progress = total > 1 ? (index + (steps ? step / (steps + 1) : 0)) / (total - 1) : 1;

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ cursor: idle && !editing ? 'none' : 'default' }}>
      <Stage>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`${slide.id}-${locale}`}
            initial={{ opacity: 0, x: shift * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -shift * direction }}
            transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <SlideView slide={slide} index={index} total={total} step={step} />
          </motion.div>
        </AnimatePresence>

        {/* Zonas de clique laterais — só no modo apresentação (na edição o clique seleciona) */}
        {!editing && (
          <>
            <button aria-label={t.prev} onClick={prev} style={sideZone('left')} />
            <button aria-label={t.next} onClick={next} style={sideZone('right')} />
          </>
        )}
      </Stage>

      <Hud
        index={index}
        total={total}
        progress={progress}
        idle={idle}
        editing={editing}
        hiddenCount={editing ? 0 : all.length - active.length}
        prev={prev}
        next={next}
        toggleEdit={toggleEdit}
        overview={() => setOverview(true)}
        notes={() => setNotes((v) => !v)}
      />

      {editing && !overview && (
        <>
          <EditBar slideId={editKeyOf(slide.id, locale)} hideId={slide.id} locale={locale} onExit={() => setEditing(false)} />
          <TextEditor />
          <Toast />
        </>
      )}

      {editing && isHidden && !overview && (
        <div
          data-editor-ui
          className="no-print"
          style={{
            position: 'fixed', left: 16, bottom: 16, zIndex: 64, display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 10px 8px 16px', borderRadius: 999, background: '#1b2737', color: '#fff', fontSize: 14, fontWeight: 600,
            fontFamily: 'var(--font-body)', boxShadow: '0 8px 24px -8px rgba(0,0,0,.45)',
          }}
        >
          <EyeOff size={16} /> {t.hiddenBanner}
          <button
            onClick={() => edits.setHidden(slide.id, false)}
            style={{ border: 'none', cursor: 'pointer', borderRadius: 999, padding: '5px 12px', background: '#2166c9', color: '#fff', fontWeight: 700, fontSize: 13 }}
          >
            {t.showSlide}
          </button>
        </div>
      )}

      {notes && <NotesPanel slide={slide} index={index} total={total} step={step} />}
      {overview && (
        <Overview
          slides={list}
          current={index}
          hidden={hidden}
          editing={editing}
          onPick={(i) => {
            goTo(i);
            setOverview(false);
          }}
          onToggle={(id) => edits.toggleHidden(id)}
          onClose={() => setOverview(false)}
        />
      )}
    </div>
  );
}

function sideZone(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    [side]: 0,
    width: '9%',
    background: 'transparent',
    border: 0,
    cursor: side === 'left' ? 'w-resize' : 'e-resize',
    zIndex: 5,
  };
}
