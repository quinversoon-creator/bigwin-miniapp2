import React, { useEffect, useState } from "react";
import api from "../api";

export default function Ranking() {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const r = await api.getRanking();
        setRank(r.top || []);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  return (
    <div className="card">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Top jugadores</div>
      {rank.length === 0 && <div className="muted">No hay jugadores todavía.</div>}
      {rank.map((p, i) => (
        <div key={p.id || i} className="list-row">
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#eaf4fb", display: "flex", alignItems: "center", justifyContent: "center" }}>{i+1}</div>
            <div>
              <div style={{ fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "#6b7b8a" }}>{p.id}</div>
            </div>
          </div>
          <div style={{ fontWeight: 700 }}>{p.stars} ⭐</div>
        </div>
      ))}
    </div>
  );
}
