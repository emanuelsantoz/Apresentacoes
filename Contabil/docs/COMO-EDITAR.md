# Como editar

## Trocar um texto

Abra `src/content/slide-NN.ts` e edite o campo em `data`. Exemplo (slide 4):

```ts
title: "O valor chega pronto. [A explicação, não.]",
```

- `[colchetes]` = destaque na cor do produto (use um por bloco).
- `\n` = quebra de linha forçada no título.
- A fala do apresentador fica em `notes` (parágrafos separados por linha em branco).

Depois rode `npm run roteiro` para atualizar `docs/ROTEIRO.md`.

## Reordenar ou remover

Edite a lista em `src/content/index.ts`. A numeração (`04 · …`, `ES/ · 04/12`) é automática.

## Adicionar um slide

1. Copie um arquivo parecido, ex.: `cp src/content/slide-08.ts src/content/slide-13.ts`.
2. Ajuste `id`, `label`, `title`, `tone` (`"light"` ou `"dark"`), `steps`, `data` e `notes`.
3. Registre em `src/content/index.ts`.

## Layouts disponíveis

| Layout | Uso |
|---|---|
| `CoverLayout` | capa |
| `ProfileLayout` | autoria |
| `ProcessLayout` | etapas horizontais com nó atual |
| `TensionLayout` | problema: dores + documentos espalhados |
| `ObjectiveLayout` | mensagem + card de anatomia |
| `SolutionLayout` | entradas → núcleo → saída (3 passos) |
| `PrototypeLayout` | website + celular mockados (5 passos) |
| `CardsLayout` | até 4 cards numerados |
| `ConversationLayout` | perguntas rápidas × registro formal |
| `ScopeLayout` | contadores + dentro × fora |
| `PilotLayout` | plano + critérios + decisão |
| `ContinuityLayout` | linha do tempo agora → possível |

## Criar um layout

```tsx
// src/components/layouts/QuoteLayout.tsx
import type { LayoutProps } from "../../types/slide";
import { Reveal } from "../ui/Reveal";

export interface QuoteData { quote: string; author: string }

export function QuoteLayout({ data }: LayoutProps<QuoteData>) {
  return (
    <Reveal style={{ position: "absolute", left: 96, top: 300, width: 1400 }}>
      <p className="t-display">{data.quote}</p>
      <p className="t-mono" style={{ marginTop: 32 }}>{data.author}</p>
    </Reveal>
  );
}
```

Regras: coordenadas no palco 1920×1080, área útil entre `top: 140` e `top: 960`, laterais de 96 px; cores sempre por `var(--…)`.

## Telas do protótipo (slide 7)

Os valores estão em `src/content/slide-07.ts → data.screens`. São as premissas do "Caso simulado" do questionário. Para usar dados reais, substitua ali — o layout não precisa mudar.
