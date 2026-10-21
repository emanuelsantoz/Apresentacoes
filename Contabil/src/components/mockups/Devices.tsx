import type { CSSProperties, ReactNode } from "react";

/** Moldura de navegador (website mockado). */
export function BrowserMock({ children, url, style }: { children: ReactNode; url: string; style?: CSSProperties }) {
  return (
    <div
      style={{
        borderRadius: 20,
        background: "var(--c-white)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-soft)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div
        style={{
          height: 52,
          flex: "none",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 20px",
          background: "var(--n-100)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 13, height: 13, borderRadius: 99, background: "var(--n-200)" }} />
        ))}
        <span
          className="t-num"
          style={{
            marginLeft: 20,
            flex: 1,
            maxWidth: 520,
            padding: "6px 16px",
            borderRadius: 8,
            background: "var(--c-white)",
            fontSize: 16,
            color: "var(--n-600)",
          }}
        >
          {url}
        </span>
      </div>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>{children}</div>
    </div>
  );
}

/** Moldura de celular (app mockado). */
export function PhoneMock({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        borderRadius: 52,
        background: "var(--c-night)",
        padding: 12,
        boxShadow: "var(--shadow-soft)",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 42,
          background: "var(--c-mist)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ height: 40, flex: "none", display: "grid", placeItems: "center" }}>
          <span style={{ width: 96, height: 24, borderRadius: 99, background: "var(--c-night)" }} />
        </div>
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>{children}</div>
      </div>
    </div>
  );
}
