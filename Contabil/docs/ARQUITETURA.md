# Arquitetura

```
content-source/           texto original recebido (não editar)
docs/                     documentação
exports/                  PDF, PNGs e PPTX gerados
scripts/
  serve.ts                sobe o vite preview para os scripts
  export-pdf.ts           PDF + PNG via Playwright
  export-pptx.py          PPTX a partir dos PNGs + falas (opcional, Python)
  check-overflow.ts       garante que nada sai do palco
  gerar-roteiro.ts        gera docs/ROTEIRO.md
src/
  app/App.tsx             escolhe Deck (padrão) ou PrintDeck (?print=1)
  components/
    stage/                Stage (1920×1080 escalado), Deck, SlideFrame, Overview, NotesPanel, PrintDeck
    layouts/              um layout por arquétipo (Cover, Process, Tension, ...)
    mockups/              BrowserMock, PhoneMock e telas do protótipo
    ui/                   Reveal, OpenFrame, Heading, Rich, Icon
  content/                slide-01.ts … slide-12.ts + index.ts (ordem)
  hooks/                  useDeck, useIdle, usePresentationMode
  styles/                 fonts.css, tokens.css, global.css
  theme/tokens.ts         tokens em TS
  types/slide.ts          contrato SlideDef / LayoutProps
```

## Fluxo

```
content/slide-NN.ts  ──►  SlideDef { data, Layout, steps, notes }
        │
content/index.ts (ordem)
        │
Deck (estado slide/passo + URL) ──► RenderSlide ──► SlideFrame (fundo, etiqueta, endosso)
                                                   └► Layout({ data, step })
```

## Decisões

- **Palco fixo 1920×1080** escalado com `transform: scale()`; `html, body { overflow: hidden }`. Nenhum slide rola.
- **Conteúdo separado do layout**: o texto vive em `src/content`, tipado pelo `Data` exportado por cada layout.
- **Sem dependências externas em tempo de execução**: fontes via `@fontsource` (empacotadas no build), ícones `lucide-react`, nenhuma chamada de rede.
- **Impressão determinística**: `?print=1` renderiza todos os slides no estado final, sem animação (`PrintContext`).
- **Sem `localStorage`**: posição fica no estado React e no hash da URL.
