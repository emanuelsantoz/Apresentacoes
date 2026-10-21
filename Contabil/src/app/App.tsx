import { Deck } from "../components/stage/Deck";
import { PrintDeck } from "../components/stage/PrintDeck";
import { isPrintRoute } from "../hooks/usePresentationMode";
import { LocaleProvider } from "../i18n/locale";

export function App() {
  const print = isPrintRoute();
  if (print) document.documentElement.classList.add("print-root");
  return <LocaleProvider>{print ? <PrintDeck /> : <Deck />}</LocaleProvider>;
}
