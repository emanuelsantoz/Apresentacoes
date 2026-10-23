import { AlertTriangle, Check, Download, Eye, EyeOff, FolderDown, Loader2, Pencil, Plus, Redo2, Trash2, Undo2, Upload } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { edits, useEditsMeta, useHiddenSlides } from './editsStore';
import { notify } from './notify';

const time = (t?: number) => (t ? new Date(t).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '');

/** Faixa do topo no modo edição: status do salvamento, histórico e ações. */
/**
 * `slideId` = chave das edições (por idioma: `slide-03` em PT, `slide-03@en` em EN);
 * `hideId` = id do slide para ocultar/mostrar (vale para os dois idiomas).
 */
export function EditBar({ slideId, hideId, locale, onExit }: { slideId: string; hideId: string; locale: string; onExit: () => void }) {
  const meta = useEditsMeta();
  const hidden = useHiddenSlides();
  const isHidden = hidden.includes(hideId);
  const input = useRef<HTMLInputElement>(null);
  const [, tick] = useState(0);
  const here = edits.count(slideId);
  const total = edits.count();

  // atualiza o “salvo há …”
  useEffect(() => {
    const id = window.setInterval(() => tick((n) => n + 1), 30000);
    return () => window.clearInterval(id);
  }, []);

  const undo = () => { const l = edits.undo(); notify(l ? `Desfeito: ${l}` : 'Nada para desfazer'); };
  const redo = () => { const l = edits.redo(); notify(l ? `Refeito: ${l}` : 'Nada para refazer'); };
  const addCard = () => {
    const id = edits.addCard(slideId);
    window.dispatchEvent(new CustomEvent('editor:novo-card', { detail: { slideId, id } }));
  };
  const saveProject = async () => {
    try {
      await edits.flush();
      await edits.saveToProject();
      notify('✓ Salvo em public/edicoes.json');
    } catch {
      notify('Não foi possível gravar no projeto — use Exportar');
    }
  };

  return (
    <div data-editor-ui className="no-print" style={wrap}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#164A8A', background: '#DCEBFB', padding: '5px 12px', borderRadius: 6 }}>
        <Pencil size={15} /> Modo edição
      </span>
      <span title="As edições de texto e os cards novos valem só para o idioma aberto" style={{ fontWeight: 700, letterSpacing: '.06em', opacity: 0.85 }}>
        {locale.toUpperCase()}
      </span>

      <div style={group}>
        <button style={iconBtn} onClick={undo} disabled={!meta.undoLabel} title={meta.undoLabel ? `Desfazer: ${meta.undoLabel} (Ctrl+Z)` : 'Nada para desfazer'}>
          <Undo2 size={16} />
        </button>
        <button style={iconBtn} onClick={redo} disabled={!meta.redoLabel} title={meta.redoLabel ? `Refazer: ${meta.redoLabel} (Ctrl+Y)` : 'Nada para refazer'}>
          <Redo2 size={16} />
        </button>
      </div>

      <button style={{ ...btn, background: '#243448' }} onClick={addCard} title="Cria um card com texto no centro do slide">
        <Plus size={15} /> Card de texto
      </button>

      <button
        style={{ ...btn, ...(isHidden ? { background: '#1B2737', outline: '1px solid #9AA0A8' } : {}) }}
        onClick={() => { edits.toggleHidden(hideId); notify(isHidden ? 'Slide de volta na apresentação' : 'Slide oculto da apresentação · Ctrl+Z desfaz'); }}
        title="Oculta ou mostra este slide no modo apresentação e no PDF (H)"
      >
        {isHidden ? <><Eye size={15} /> Mostrar slide</> : <><EyeOff size={15} /> Ocultar slide</>}
      </button>
      {hidden.length > 0 && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, opacity: 0.85 }}>
          <b>{hidden.length}</b> oculto{hidden.length > 1 ? 's' : ''}
          <button style={{ ...btn, padding: '3px 8px', fontSize: 12 }} onClick={() => { edits.showAll(); notify('Todos os slides de volta · Ctrl+Z desfaz'); }} title="Devolve todos os slides à apresentação">
            Mostrar todos
          </button>
        </span>
      )}

      <SaveStatus status={meta.status} savedAt={meta.savedAt} />
      <span style={{ opacity: 0.7 }}>
        <b>{here}</b> neste slide · <b>{total}</b> no total
      </span>

      <span style={{ flex: 1 }} />

      {import.meta.env.DEV && (
        <button
          style={{ ...btn, ...(meta.pendingProject ? { background: '#B45309' } : {}) }}
          onClick={() => void saveProject()}
          title="Grava public/edicoes.json no projeto (vale para todos e para o PDF)"
        >
          <FolderDown size={15} /> {meta.pendingProject ? 'Salvar no projeto' : 'Projeto em dia'}
        </button>
      )}
      <button style={btn} onClick={() => { edits.exportFile(); notify('edicoes.json baixado'); }} title="Baixa edicoes.json — salve em public/ para fixar no projeto">
        <Download size={15} /> Exportar
      </button>
      <button style={btn} onClick={() => input.current?.click()} title="Carrega um edicoes.json"><Upload size={15} /> Importar</button>
      <button style={btn} disabled={!here} onClick={() => { edits.resetSlide(slideId); notify('Slide restaurado · Ctrl+Z desfaz'); }} title="Remove todas as edições e cards novos deste slide">
        <Trash2 size={15} /> Restaurar slide
      </button>
      <button style={{ ...btn, background: '#2166C9', color: '#fff' }} onClick={onExit} title="Voltar ao modo apresentação (E)">
        <Eye size={15} /> Apresentar
      </button>
      <input
        ref={input} type="file" accept="application/json,.json" hidden
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = '';
          if (!f) return;
          try { await edits.importFile(f); notify('Edições importadas · Ctrl+Z desfaz'); } catch { notify('Arquivo inválido'); }
        }}
      />
    </div>
  );
}

function SaveStatus({ status, savedAt }: { status: string; savedAt?: number }) {
  const map = {
    carregando: { icon: <Loader2 size={14} className="spin" />, text: 'Carregando…', color: '#DCEBFB' },
    salvando: { icon: <Loader2 size={14} className="spin" />, text: 'Salvando…', color: '#DCEBFB' },
    salvo: { icon: <Check size={14} />, text: savedAt ? `Salvo neste navegador · ${time(savedAt)}` : 'Tudo salvo', color: '#B9D8F2' },
    erro: { icon: <AlertTriangle size={14} />, text: 'Erro ao salvar — exporte o arquivo', color: '#FCA5A5' },
  } as const;
  const s = map[status as keyof typeof map] ?? map.salvo;
  return (
    <span role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 99, background: 'rgba(255,255,255,0.06)', color: s.color, fontWeight: 600 }}>
      {s.icon} {s.text}
    </span>
  );
}

const wrap: CSSProperties = {
  position: 'fixed', left: 0, right: 0, top: 0, zIndex: 65, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', flexWrap: 'wrap',
  background: '#0D1A2A', color: '#fff', fontSize: 13, fontFamily: 'var(--font-body)', borderBottom: '1px solid #1B2737',
};
const btn: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 11px', borderRadius: 8, border: 'none', cursor: 'pointer',
  background: '#1B2737', color: '#fff', fontSize: 13, fontWeight: 600,
};
const group: CSSProperties = { display: 'inline-flex', gap: 2, padding: 2, borderRadius: 9, background: '#1B2737' };
const iconBtn: CSSProperties = { ...btn, padding: '5px 8px', background: 'transparent' };
