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
    stage/                Stage (1920×1080 escalado), Deck, SlideView, SlideFrame, Hud, Overview, NotesPanel, PrintDeck, LanguageSwitch
    layouts/              um layout por arquétipo (Cover, Process, Tension, ...)
    mockups/              BrowserMock, PhoneMock e telas do protótipo
    ui/                   Reveal, OpenFrame, Heading, Rich, Icon
  content/                slide-01.ts … slide-12.ts + index.ts (ordem)
  hooks/                  useDeck, useIdle, usePresentationMode
  i18n/                   locale.tsx (idioma via ?lang=), ui.ts (textos fixos PT/EN)
  edit/                   modo edição (ver docs/EDICAO.md)
  lib/localStore.ts       IndexedDB: edições e imagens deste navegador
public/
  edicoes.json            edições salvas no projeto (valem para todos e para o PDF)
  images/                 imagens permanentes (ex.: retrato-emanuel.jpg)
  styles/                 fonts.css, tokens.css, global.css
  theme/tokens.ts         tokens em TS
  types/slide.ts          contrato SlideDef / LayoutProps
```

## Fluxo

```
content/slide-NN.ts  ──►  SlideDef { Layout, steps, content: { pt, en } }
        │
content/index.ts (ordem)
        │
LocaleProvider (?lang=en)
        │
App: initEdits() → slides ativos (sem os ocultos)
        │
Deck (estado slide/passo + URL, modo edição) ──► SlideView (content[locale] + edições + cards novos) ──► SlideFrame (fundo, etiqueta, endosso)
                                                   └► Layout({ data, step })
```

## Decisões

- **Palco fixo 1920×1080** escalado com `transform: scale()`; `html, body { overflow: hidden }`. Nenhum slide rola.
- **Conteúdo separado do layout**: o texto vive em `src/content`, tipado pelo `Data` exportado por cada layout.
- **Sem dependências externas em tempo de execução**: fontes via `@fontsource` (empacotadas no build), ícones `lucide-react`, nenhuma chamada de rede.
- **Impressão determinística**: `?print=1` renderiza todos os slides no estado final, sem animação (`PrintContext`).
- **Estado**: posição no hash (`#/7/2`), idioma em `?lang=en`. As edições ficam no IndexedDB do navegador (conveniência) e, de forma permanente, em `public/edicoes.json`; o último modo (edição/apresentação) é lembrado no navegador.
- **Bilíngue por contrato**: `content: Record<Locale, SlideCopy<D>>` obriga PT e EN a terem a mesma estrutura.
