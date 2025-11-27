import React, { useEffect, useState } from "react";
import api from "../api";

export default function Referrals({ user, refresh }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getReferrals(user && user.id);
        setList(res.referrals || []);
      } catch (e) {
        console.error(e);
      }
    }
    if (user) load();
  }, [user]);

  if (!user) return <div className="card">Cargando...</div>;

  return (
    <div>
      <div className="card">
        <div style={{ fontWeight: 700 }}>Tu enlace</div>
        <div style={{ color: "#6b7b8a", marginTop: 8 }}>{user.ref_link}</div>
        <div style={{ marginTop: 12 }}>
          <button className="btn secondary" onClick={() => { navigator.clipboard.writeText(user.ref_link); alert("Copiado"); }}>Copiar enlace</button>
        </div>
      </div>

      <div className="card">
        <div style={{ fontWeight: 700 }}>Referidos ({list.length})</div>
        <div style={{ marginTop: 8 }}>
          {list.length === 0 && <div style={{ color: "#6b7b8a" }}>No tienes referidos aún.</div>}
          {list.map(r => (
            <div key={r} className="list-row">{r}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
