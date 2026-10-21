# Animações

Ritmo da marca: montagem **480 ms**, interação **240 ms**, easing `cubic-bezier(0.2, 0.8, 0.2, 1)`, deslocamento máximo **16 px**. Centralizado em `useMotionPreset()` (`src/hooks/usePresentationMode.ts`).

| Slide | Movimento principal | Passos |
|---|---|---|
| 01 | moldura aberta se monta; linha vertical cresce; etapas acendem uma a uma | 0 |
| 02 | assinatura ES/ e cards entram em sequência | 0 |
| 03 | linha do processo se desenha; nós aparecem em ordem | 0 |
| 04 | documentos "caem" girados; balões de dúvida surgem | 0 |
| 05 | card de anatomia monta campo a campo | 0 |
| 06 | conectores SVG se desenham (`pathLength`) | 2 |
| 07 | telas trocam no website e no celular ao mesmo tempo; stepper marca etapas | 4 |
| 08 | cards em stagger | 0 |
| 09 | balões entram; lista formal entra no clique | 1 |
| 10 | contadores e colunas em sequência | 0 |
| 11 | plano em stagger; critérios + faixa de decisão no clique | 1 |
| 12 | linha do tempo tracejada se estende | 0 |

Transição entre slides: fade + 24 px, 420 ms (`Deck.tsx`).

## Ajustar

- Atrasos: prop `delay` do `<Reveal>` (segundos).
- Passos: campo `steps` no conteúdo + condição `show={step >= N}` no layout.
- **Movimento reduzido**: com `prefers-reduced-motion`, o deslocamento vira 0 (só opacidade).
- **Impressão**: `?print=1` desliga toda animação e mostra o último passo.
