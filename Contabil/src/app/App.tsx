import { Deck } from "../components/stage/Deck";
import { PrintDeck } from "../components/stage/PrintDeck";
import { isPrintRoute } from "../hooks/usePresentationMode";

export function App() {
  if (isPrintRoute()) {
    document.documentElement.classList.add("print-root");
    return <PrintDeck />;
  }
  return <Deck />;
}
