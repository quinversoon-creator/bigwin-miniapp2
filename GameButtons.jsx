import React from "react";

export default function GameButtons() {
  const groups = [
    { k: "dice", label: "Dados", url: "https://t.me/dicebw" },
    { k: "darts", label: "Dardos", url: "https://t.me/dartsbw" },
    { k: "bowling", label: "Bolos", url: "https://t.me/bowlingbw" },
    { k: "slot", label: "Tragamonedas", url: "https://t.me/slotbw" }
  ];
  return (
    <div className="card">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {groups.map(g => (
          <a key={g.k} className="btn secondary" href={g.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', textAlign: 'center' }}>
            {g.label}
          </a>
        ))}
      </div>
    </div>
  );
}
