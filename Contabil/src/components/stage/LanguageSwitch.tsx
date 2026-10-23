import { LOCALES, useLocale, useUi, type Locale } from '../../i18n/locale';
import { FlagBR, FlagUS } from '../ui/Flags';

const FLAGS: Record<Locale, () => JSX.Element> = {
  pt: () => <FlagBR />,
  en: () => <FlagUS />,
};

/** Seletor PT/EN com bandeiras (dentro da cápsula de controles). Também responde à tecla L. */
export function LanguageSwitch() {
  const { locale, setLocale } = useLocale();
  const t = useUi();
  return (
    <div role="group" aria-label={t.language} title={`${t.language} (L)`} style={{ display: 'flex', gap: 2, marginLeft: 4, padding: 2, borderRadius: 999, background: 'rgb(255 255 255 / 0.06)' }}>
      {LOCALES.map((l) => {
        const active = l === locale;
        const Flag = FLAGS[l];
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={l === 'pt' ? 'Português' : 'English'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '4px 11px 4px 4px',
              borderRadius: 999,
              border: 0,
              cursor: active ? 'default' : 'pointer',
              background: active ? '#2166c9' : 'transparent',
              color: active ? '#ffffff' : '#aab8c8',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              transition: 'background 240ms var(--ease), color 240ms var(--ease)',
            }}
          >
            <Flag />
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
