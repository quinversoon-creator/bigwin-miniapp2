import React, { useEffect, useState } from "react";
import api from "../api";

export default function History({ user }) {
  const [hist, setHist] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const r = await api.getHistory(user && user.id);
        setHist(r.history || []);
      } catch (e) {
        console.error(e);
      }
    }
    if (user) load();
  }, [user]);

  return (
    <div className="card">
      <div style={{ fontWeight: 700 }}>Historial</div>
      {hist.length === 0 && <div style={{ color: "#6b7b8a", marginTop: 8 }}>No hay movimientos todavía.</div>}
      {hist.map((h, i) => (
        <div key={i} className="list-row">
          <div>{new Date(h.ts).toLocaleString()}</div>
          <div>{h.game} → +{h.prize}⭐</div>
        </div>
      ))}
    </div>
  );
}
