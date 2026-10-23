import { ImageUp, Trash2 } from 'lucide-react';
import { useRef, useState, type DragEvent, type ReactNode } from 'react';
import { usePrint } from '../../hooks/usePrintImage';
import { useContext } from 'react';
import { PrintContext } from '../../hooks/usePresentationMode';
import { useEditMode } from '../../edit/EditMode';

interface Props {
  /** Nome do arquivo em public/images/<id>.(png|jpg|webp). */
  id: string;
  label: string;
  fit?: 'cover' | 'contain';
  position?: string;
  /** Cor de fundo atrás da imagem (modo contain). */
  bg?: string;
  /** Filtro aplicado à imagem (ex.: 'grayscale(1)'). */
  filter?: string;
  /** Conteúdo exibido enquanto não há imagem (padrão: hachura). */
  fallback?: ReactNode;
}

/**
 * Área de imagem. Sem arquivo, mostra a hachura cinza (o “xadrez” da referência).
 * No MODO EDIÇÃO: arraste uma imagem por cima ou use o botão. Para fixar no projeto, salve em public/images/<id>.jpg.
 */
export function ImageSlot({ id, label, fit = 'cover', position = 'center', bg, filter, fallback }: Props) {
  const exts = ['jpg', 'jpeg', 'png', 'webp'];
  const paths = exts.map((e) => `images/${id}.${e}`);
  const { src, source, save, remove } = usePrint(`img-${id}`, paths);
  const print = useContext(PrintContext);
  const { editing } = useEditMode();
  const canEdit = editing && !print;
  const [hover, setHover] = useState(false);
  const [drag, setDrag] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith('image/')) void save(f);
  };

  return (
    <div
      data-print-slot={id}
      className={src || fallback ? undefined : 'img-hatch'}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 'inherit', background: src ? bg : undefined }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onDragOver={(e) => { if (!canEdit) return; e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={onDrop}
    >
      {!src && fallback}
      {src && <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: fit, objectPosition: position, display: 'block', filter }} />}
      {canEdit && (
        <div
          className="no-print"
          style={{
            position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', gap: 10,
            background: drag ? 'rgba(33,102,201,0.55)' : 'transparent', opacity: drag || hover ? 1 : 0, transition: 'opacity .2s',
            pointerEvents: drag || hover ? 'auto' : 'none',
          }}
        >
          {drag ? (
            <span style={{ color: '#fff', fontSize: 28, fontWeight: 700 }}>Solte a imagem</span>
          ) : (
            <span style={{ display: 'inline-flex', gap: 8 }}>
              <button onClick={() => input.current?.click()} style={btn(true)} title={`public/images/${id}.jpg`}>
                <ImageUp size={20} /> {src ? 'Trocar' : 'Enviar'} imagem
              </button>
              {source === 'upload' && (
                <button onClick={() => void remove()} style={btn(false)} title="Remover imagem enviada"><Trash2 size={20} /></button>
              )}
            </span>
          )}
          <input ref={input} type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) void save(f); e.target.value = ''; }} />
        </div>
      )}
    </div>
  );
}

const btn = (primary: boolean) => ({
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 12, border: 'none', cursor: 'pointer',
  fontSize: 18, fontWeight: 600, background: primary ? 'var(--c-core)' : '#fff', color: primary ? '#fff' : '#B91C1C',
  boxShadow: '0 8px 24px -8px rgba(0,0,0,.4)',
});
