/**
 * Tokens do tema — Emanuel Santos Brand System v0.1 (paleta principal).
 * O MVP ainda não tem identidade própria: o tema de produto usa a paleta
 * Emanuel de forma provisória. Para trocar, edite apenas `productTheme`
 * e o bloco `--product-*` em src/styles/tokens.css.
 */
export const brand = {
  night: "#07111F",
  deep: "#164A8A",
  core: "#2166C9",
  pulse: "#2F7DE1",
  shirt: "#B9D8F2",
  mist: "#F7FAFC",
  white: "#FFFFFF",
} as const;

export const neutral = {
  950: "#07111F",
  800: "#1B2737",
  600: "#526174",
  400: "#91A0B2",
  200: "#DCE4EC",
  100: "#EDF2F7",
  50: "#F7FAFC",
} as const;

export const productTheme = {
  primary: brand.core,
  primaryStrong: brand.deep,
  primarySoft: brand.shirt,
  onPrimary: brand.white,
  accent: brand.pulse,
  onAccent: brand.night,
} as const;

export const font = {
  display: '"Space Grotesk", "Inter", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

/** Ritmo de movimento da marca (segundos, para o motion). */
export const motionTokens = {
  fast: 0.12,
  standard: 0.24,
  assemble: 0.48,
  ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
  /** deslocamento máximo de entrada, em px */
  shift: 16,
} as const;

export const stage = { width: 1920, height: 1080 } as const;
