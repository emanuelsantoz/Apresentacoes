import { preview } from "vite";

/** Sobe o `vite preview` sobre o build (dist/) e devolve URL + função de encerramento. */
export async function startPreview(port = 4173) {
  const server = await preview({ preview: { port, strictPort: true, open: false }, logLevel: "error" });
  const url = `http://localhost:${port}/`;
  return { url, close: () => new Promise<void>((r) => server.httpServer.close(() => r())) };
}
