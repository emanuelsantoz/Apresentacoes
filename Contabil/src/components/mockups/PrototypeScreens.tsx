import type { ReactNode } from "react";
import { Icon, type IconKey } from "../ui/Icon";

/* Dados das telas do protótipo (preenchidos em src/content/slide-07.ts). */
export interface PrototypeScreensData {
  competence: string;
  files: { name: string; kind: string; icon: IconKey }[];
  readings: { label: string; value: string; source: string; ok: boolean }[];
  questions: { text: string; options: string[] }[];
  pendingNote: string;
  calc: { title: string; lines: { label: string; expr: string }[]; note: string };
  report: {
    summary: { label: string; tone: "ok" | "warn" | "info" }[];
    rows: { item: string; informed: string; expected: string; diff: string; ok: boolean; status: string }[];
    validation: string;
  };
  chat: {
    hello: string;
    read: string;
    missing: string;
    ask: string;
    calc: string;
    done: string;
  };
}

/* ---------- peças pequenas ---------- */

function Tag({ ok, children }: { ok: boolean; children: ReactNode }) {
  return (
    <span className={`status ${ok ? "status-ok" : "status-warn"}`} style={{ fontSize: 15, padding: "5px 12px" }}>
      <Icon name={ok ? "check" : "warn"} size={16} />
      {children}
    </span>
  );
}

function ScreenTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <p className="t-mono" style={{ fontSize: 15, color: "var(--c-core)" }}>
        {kicker}
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 32, letterSpacing: "-0.02em", marginTop: 6 }}>
        {title}
      </p>
    </div>
  );
}

const cell = { padding: "13px 14px", borderBottom: "1px solid var(--n-200)", fontSize: 19 } as const;

/* ---------- WEBSITE ---------- */

export function WebScreen({ step, d }: { step: number; d: PrototypeScreensData }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", height: "100%", color: "var(--c-night)" }}>
      <aside style={{ background: "var(--c-night)", color: "var(--c-mist)", padding: "26px 22px" }}>
        <p className="t-mono" style={{ fontSize: 14, color: "#aab8c8" }}>
          Competência
        </p>
        <p className="t-num" style={{ fontSize: 22, marginTop: 6 }}>
          {d.competence}
        </p>
        <ul style={{ marginTop: 30, display: "grid", gap: 6 }}>
          {["Envio", "Leitura", "Confirmação", "Cálculo", "Relatório"].map((s, i) => (
            <li
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 10,
                fontSize: 19,
                background: i === step ? "rgb(47 125 225 / 0.22)" : "transparent",
                color: i <= step ? "var(--c-mist)" : "#6d7d90",
              }}
            >
              <span className="t-num" style={{ fontSize: 15, color: i === step ? "var(--c-pulse)" : "inherit" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </li>
          ))}
        </ul>
      </aside>
      <main style={{ padding: "28px 36px", overflow: "hidden" }}>
        {step === 0 && (
          <>
            <ScreenTitle kicker="01 · Envio" title="Envie os documentos do mês" />
            <div
              style={{
                border: "2px dashed var(--n-200)",
                borderRadius: 16,
                padding: "26px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "var(--c-mist)",
              }}
            >
              <span style={{ color: "var(--c-core)" }}>
                <Icon name="upload" size={36} />
              </span>
              <div>
                <p style={{ fontSize: 21, fontWeight: 600 }}>Arraste PDF, planilha ou foto</p>
                <p style={{ fontSize: 18, color: "var(--n-600)", marginTop: 4 }}>ou digite os dados manualmente</p>
              </div>
            </div>
            <ul style={{ marginTop: 18, display: "grid", gap: 10 }}>
              {d.files.map((f) => (
                <li
                  key={f.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 16px",
                    border: "1px solid var(--n-200)",
                    borderRadius: 12,
                    fontSize: 19,
                  }}
                >
                  <span style={{ color: "var(--c-core)" }}>
                    <Icon name={f.icon} size={22} />
                  </span>
                  <span className="t-num" style={{ flex: 1 }}>
                    {f.name}
                  </span>
                  <span className="t-mono" style={{ fontSize: 14, color: "var(--n-600)" }}>
                    {f.kind}
                  </span>
                  <Tag ok>Recebido</Tag>
                </li>
              ))}
            </ul>
          </>
        )}

        {step === 1 && (
          <>
            <ScreenTitle kicker="02 · Leitura" title="Dados encontrados nos documentos" />
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {d.readings.map((r) => (
                  <tr key={r.label}>
                    <td style={{ ...cell, fontWeight: 500 }}>{r.label}</td>
                    <td className="t-num" style={{ ...cell, textAlign: "right" }}>
                      {r.value}
                    </td>
                    <td style={{ ...cell, color: "var(--n-600)", fontSize: 17 }}>{r.source}</td>
                    <td style={{ ...cell, textAlign: "right" }}>
                      <Tag ok={r.ok}>{r.ok ? "Lido" : "Falta"}</Tag>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {step === 2 && (
          <>
            <ScreenTitle kicker="03 · Confirmação" title="Antes de calcular, preciso confirmar" />
            <div style={{ display: "grid", gap: 16 }}>
              {d.questions.map((q, qi) => (
                <div key={q.text} style={{ border: "1px solid var(--n-200)", borderRadius: 14, padding: "18px 20px" }}>
                  <p style={{ fontSize: 21, fontWeight: 500 }}>{q.text}</p>
                  <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                    {q.options.map((o, oi) => (
                      <span
                        key={o}
                        style={{
                          padding: "9px 18px",
                          borderRadius: 10,
                          fontSize: 18,
                          fontWeight: 500,
                          border: "1px solid",
                          borderColor: oi === 0 ? "var(--c-core)" : "var(--n-200)",
                          background: oi === 0 && qi === 0 ? "var(--c-core)" : "transparent",
                          color: oi === 0 && qi === 0 ? "var(--c-white)" : oi === 0 ? "var(--c-core)" : "var(--c-night)",
                        }}
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 18, color: "var(--n-600)", display: "flex", gap: 10, alignItems: "center" }}>
                <Icon name="alert" size={20} /> {d.pendingNote}
              </p>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <ScreenTitle kicker="04 · Cálculo" title={d.calc.title} />
            <ol style={{ display: "grid", gap: 10 }}>
              {d.calc.lines.map((l, i) => (
                <li
                  key={l.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "34px 200px 1fr",
                    alignItems: "baseline",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: i === d.calc.lines.length - 1 ? "var(--status-ok-soft)" : "var(--c-mist)",
                    fontSize: 19,
                  }}
                >
                  <span className="t-num" style={{ color: "var(--c-core)", fontSize: 16 }}>
                    {i + 1}
                  </span>
                  <span style={{ fontWeight: 600 }}>{l.label}</span>
                  <span className="t-num" style={{ fontSize: 18 }}>
                    {l.expr}
                  </span>
                </li>
              ))}
            </ol>
            <p className="t-mono" style={{ fontSize: 14, color: "var(--n-600)", marginTop: 16 }}>
              {d.calc.note}
            </p>
          </>
        )}

        {step === 4 && (
          <>
            <ScreenTitle kicker="05 · Relatório" title="Resultado da conferência" />
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              {d.report.summary.map((s) => (
                <span key={s.label} className={`status status-${s.tone}`} style={{ fontSize: 15 }}>
                  {s.label}
                </span>
              ))}
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Item", "Informado", "Esperado", "Diferença", "Situação"].map((h, i) => (
                    <th
                      key={h}
                      className="t-mono"
                      style={{ ...cell, fontSize: 13, color: "var(--n-600)", textAlign: i === 0 ? "left" : i === 4 ? "right" : "right", fontWeight: 600 }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.report.rows.map((r) => (
                  <tr key={r.item}>
                    <td style={{ ...cell, fontWeight: 500 }}>{r.item}</td>
                    <td className="t-num" style={{ ...cell, textAlign: "right", fontSize: 18 }}>
                      {r.informed}
                    </td>
                    <td className="t-num" style={{ ...cell, textAlign: "right", fontSize: 18 }}>
                      {r.expected}
                    </td>
                    <td className="t-num" style={{ ...cell, textAlign: "right", fontSize: 18 }}>
                      {r.diff}
                    </td>
                    <td style={{ ...cell, textAlign: "right" }}>
                      <Tag ok={r.ok}>{r.status}</Tag>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p
              style={{
                marginTop: 16,
                fontSize: 18,
                padding: "12px 16px",
                borderRadius: 12,
                background: "var(--c-night)",
                color: "var(--c-mist)",
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Icon name="shield" size={20} color="var(--c-pulse)" /> {d.report.validation}
            </p>
          </>
        )}
      </main>
    </div>
  );
}

/* ---------- CELULAR (chat) ---------- */

function Bubble({ me = false, children }: { me?: boolean; children: ReactNode }) {
  return (
    <div
      style={{
        alignSelf: me ? "flex-end" : "flex-start",
        maxWidth: "88%",
        padding: "12px 16px",
        borderRadius: me ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: me ? "var(--c-core)" : "var(--c-white)",
        color: me ? "var(--c-white)" : "var(--c-night)",
        border: me ? "none" : "1px solid var(--n-200)",
        fontSize: 18,
        lineHeight: 1.4,
      }}
    >
      {children}
    </div>
  );
}

export function PhoneScreen({ step, d }: { step: number; d: PrototypeScreensData }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", color: "var(--c-night)" }}>
      <div style={{ padding: "4px 20px 14px", borderBottom: "1px solid var(--n-200)" }}>
        <p className="t-mono" style={{ fontSize: 13, color: "var(--c-core)" }}>
          Conferência · {String(step + 1).padStart(2, "0")}/05
        </p>
        <p className="t-num" style={{ fontSize: 17, color: "var(--n-600)", marginTop: 2 }}>
          {d.competence}
        </p>
      </div>
      <div style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-end" }}>
        {step === 0 && (
          <>
            <Bubble>{d.chat.hello}</Bubble>
            <Bubble me>
              <span style={{ display: "grid", gap: 6 }}>
                {d.files.map((f) => (
                  <span key={f.name} className="t-num" style={{ fontSize: 15, display: "flex", gap: 8, alignItems: "center" }}>
                    <Icon name={f.icon} size={16} /> {f.name}
                  </span>
                ))}
              </span>
            </Bubble>
          </>
        )}
        {step === 1 && (
          <>
            <Bubble>{d.chat.read}</Bubble>
            <Bubble>
              <span style={{ display: "flex", gap: 8, alignItems: "flex-start", color: "var(--status-warn)" }}>
                <Icon name="warn" size={18} />
                {d.chat.missing}
              </span>
            </Bubble>
          </>
        )}
        {step === 2 && (
          <>
            <Bubble>{d.chat.ask}</Bubble>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {d.questions[0].options.map((o, i) => (
                <span
                  key={o}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 99,
                    fontSize: 16,
                    border: "1px solid var(--c-core)",
                    background: i === 0 ? "var(--c-core)" : "transparent",
                    color: i === 0 ? "var(--c-white)" : "var(--c-core)",
                  }}
                >
                  {o}
                </span>
              ))}
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <Bubble>{d.chat.calc}</Bubble>
            <Bubble>
              <span style={{ display: "grid", gap: 6 }}>
                {d.calc.lines.slice(-2).map((l) => (
                  <span key={l.label} className="t-num" style={{ fontSize: 15 }}>
                    {l.label}: {l.expr}
                  </span>
                ))}
              </span>
            </Bubble>
          </>
        )}
        {step === 4 && (
          <>
            <Bubble>{d.chat.done}</Bubble>
            {d.report.rows.map((r) => (
              <div
                key={r.item}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 12px",
                  background: "var(--c-white)",
                  border: "1px solid var(--n-200)",
                  borderRadius: 12,
                  fontSize: 16,
                }}
              >
                <span>{r.item}</span>
                <Tag ok={r.ok}>{r.status}</Tag>
              </div>
            ))}
          </>
        )}
      </div>
      <div style={{ padding: "12px 16px 20px", display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ color: "var(--c-core)" }}>
          <Icon name="camera" size={22} />
        </span>
        <span
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 99,
            border: "1px solid var(--n-200)",
            background: "var(--c-white)",
            fontSize: 15,
            color: "var(--n-400)",
          }}
        >
          Escreva ou envie um arquivo
        </span>
      </div>
    </div>
  );
}
