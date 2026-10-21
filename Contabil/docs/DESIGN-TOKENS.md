# Design tokens

Base: **Emanuel Santos Brand System v0.1** (`emanuel-brand-system/Emanuel-SA`). Fonte da verdade no código: `src/theme/tokens.ts` e `src/styles/tokens.css`.

## Cor

| Token | Hex | Uso |
|---|---|---|
| `--c-night` (Noite) | `#07111F` | fundo escuro, texto principal |
| `--c-deep` (Profundo) | `#164A8A` | reservado |
| `--c-core` (Azul Emanuel) | `#2166C9` | destaque editorial, ações, linhas |
| `--c-pulse` (Pulso) | `#2F7DE1` | destaque sobre Noite, progresso |
| `--c-shirt` (Camisa) | `#B9D8F2` | superfícies suaves |
| `--c-mist` (Névoa) | `#F7FAFC` | fundo claro |
| `--c-white` | `#FFFFFF` | cards |

**Tema de produto provisório** — o MVP não tem identidade própria; `--product-*` aponta para a paleta Emanuel. Quando o produto ganhar cor, troque apenas o bloco `--product-*`.

**Semânticos de conferência** (decisão desta apresentação): `--status-ok` = Azul Emanuel; `--status-warn` = âmbar `#A35A00` sobre `#FDF1E2`. Sempre acompanhados de ícone e texto — cor nunca é o único sinal.

## Tipografia

| Papel | Fonte | Tamanho no palco |
|---|---|---|
| Display (capa) | Space Grotesk 600, tracking −0.04em | 100–112 px |
| Título | Space Grotesk 600 | 64–76 px |
| Card | Space Grotesk 600 | 38–44 px |
| Corpo / apoio | Inter 400–500 | 26–34 px |
| Etiquetas, valores, etapas | JetBrains Mono 500, caixa alta, tracking 0.12em | 20–22 px |

Dentro dos mockups (slide 7) os textos são de interface (15–22 px), como numa tela real.

## Forma e composição

- Grid de 48 px no fundo, com máscara radial.
- Raios: controle 12 · card 20 · editorial 28 · pílula 999.
- **Moldura aberta**: dois cantos opostos, usada em 1–2 pontos por slide (capa, autoria, escopo). Linha de 2 px no palco (≈ 1 px após a escala de projeção).
- Endosso fixo no rodapé: `Criado por Emanuel Santos` + `ES/ · NN/12`.

## Decisões

1. Nenhum elemento, cor, fonte ou frase de terceiros/empregadores. Apresentação independente.
2. Sem nome ou logotipo de produto — "MVP · Conferência contábil" funciona como descritor.
3. Contraste: texto corrido em Noite sobre Névoa; Pulso só em texto grande sobre Noite.
