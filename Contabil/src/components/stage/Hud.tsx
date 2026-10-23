import { ChevronLeft, ChevronRight, Eye, EyeOff, LayoutGrid, Maximize, Pencil, StickyNote } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useUi } from '../../i18n/locale';
import { LanguageSwitch } from './LanguageSwitch';

interface HudProps {
  index: number;
  total: number;
  progress: number;
  idle: boolean;
  editing: boolean;
  /** Slides ocultos fora desta apresentação (só informativo). */
  hiddenCount: number;
  prev: () => void;
  next: () => void;
  toggleEdit: () => void;
  overview: () => void;
  notes: () => void;
}

/**
 * Controles discretos: barra de progresso + cápsula com Editar/Apresentar, navegação,
 * visão geral, notas, tela cheia e idioma. Some após 2 s sem mouse (no modo edição fica visível, embaixo).
 */
export function Hud({ index, total, progress, idle, editing, hiddenCount, prev, next, toggleEdit, overview, notes }: HudProps) {
  const t = useUi();
  const hide = idle && !editing;
  return (
    <div data-editor-ui className="no-print">
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, height: 4, background: 'rgb(185 216 242 / 0.15)', zIndex: 40 }}>
        <div style={{ height: '100%', width: `${Math.max(progress, 0.01) * 100}%`, background: 'var(--c-pulse)', transition: 'width 480ms var(--ease)' }} />
      </div>

      <div
        style={{
          position: 'fixed',
          right: 16,
          top: editing ? 'auto' : 14,
          bottom: editing ? 16 : 'auto',
          zIndex: 66,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: 4,
          borderRadius: 999,
          background: 'rgb(7 17 31 / 0.86)',
          border: '1px solid #243448',
          opacity: hide ? 0 : 1,
          pointerEvents: hide ? 'none' : 'auto',
          transition: 'opacity 480ms var(--ease)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <button
          onClick={toggleEdit}
          title={`${editing ? t.present : t.edit} (E)`}
          style={{ ...pill, background: editing ? '#DCEBFB' : '#2166C9', color: editing ? '#164A8A' : '#fff' }}
        >
          {editing ? <><Eye size={15} /> {t.present}</> : <><Pencil size={15} /> {t.edit}</>}
        </button>
        <button style={icon} onClick={prev} title={`${t.prev} (←)`}><ChevronLeft size={19} /></button>
        <span style={{ color: '#f7fafc', fontSize: 13, fontFamily: 'var(--font-mono)', padding: '0 4px', fontVariantNumeric: 'tabular-nums' }}>
          {index + 1}/{total}
        </span>
        {hiddenCount > 0 && (
          <span title={t.hiddenInfo(hiddenCount)} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#91a0b2', fontSize: 12, fontWeight: 600 }}>
            <EyeOff size={14} /> {hiddenCount}
          </span>
        )}
        <button style={icon} onClick={next} title={`${t.next} (→)`}><ChevronRight size={19} /></button>
        <button style={icon} onClick={overview} title={`${t.overview} (O)`}><LayoutGrid size={17} /></button>
        <button style={icon} onClick={notes} title={`${t.notes} (N)`}><StickyNote size={17} /></button>
        <button
          style={icon}
          onClick={() => (document.fullscreenElement ? void document.exitFullscreen() : void document.documentElement.requestFullscreen?.())}
          title={`${t.fullscreen} (F)`}
        >
          <Maximize size={17} />
        </button>
        <LanguageSwitch />
      </div>
    </div>
  );
}

const icon: CSSProperties = {
  all: 'unset',
  cursor: 'pointer',
  width: 34,
  height: 34,
  display: 'grid',
  placeItems: 'center',
  borderRadius: 999,
  color: '#f7fafc',
};
const pill: CSSProperties = {
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  height: 32,
  padding: '0 14px',
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 600,
};
