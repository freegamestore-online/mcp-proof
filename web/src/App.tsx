import { useState } from "react";
import { GameShell, GameTopbar, GameAuth } from "@freegamestore/games";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <GameShell topbar={<GameTopbar title="MCP Proof" score={count} />}>
      <GameAuth />
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "Fraunces, serif" }}
          data-marker="E2E-VERIFIED"
        >
          MCP Proof ✓
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Built and redeployed end-to-end through the FreeGameStore MCP.
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-5 py-2 rounded-xl font-semibold"
          style={{ background: "var(--accent)", color: "#000", border: "none", cursor: "pointer" }}
        >
          Clicks: {count}
        </button>
      </div>
    </GameShell>
  );
}
