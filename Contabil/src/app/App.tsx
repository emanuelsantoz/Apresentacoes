import { useEffect, useMemo, useState } from 'react';
import { Deck } from '../components/stage/Deck';
import { PrintDeck } from '../components/stage/PrintDeck';
import { slides } from '../content';
import { EditModeProvider } from '../edit/EditMode';
import { initEdits, useHiddenSlides } from '../edit/editsStore';
import { isPrintRoute } from '../hooks/usePresentationMode';
import { LocaleProvider } from '../i18n/locale';

/** `?todos` na URL ignora os slides ocultos (apresentação e PDF com todos). */
const showAll = () => new URLSearchParams(window.location.search).has('todos');

export function App() {
  const print = isPrintRoute();
  // espera as edições carregarem: a lista de ocultos decide quais slides a apresentação abre
  const [ready, setReady] = useState(false);
  useEffect(() => {
    void initEdits().finally(() => setReady(true));
  }, []);
  const hidden = useHiddenSlides();
  const active = useMemo(() => {
    if (showAll()) return slides;
    const list = slides.filter((s) => !hidden.includes(s.id));
    return list.length ? list : slides; // nunca abre vazio
  }, [hidden]);

  if (print) document.documentElement.classList.add('print-root');
  if (!ready) return null;
  return (
    <LocaleProvider>
      <EditModeProvider>{print ? <PrintDeck slides={active} /> : <Deck all={slides} active={active} />}</EditModeProvider>
    </LocaleProvider>
  );
}
