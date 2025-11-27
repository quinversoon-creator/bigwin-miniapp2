import React, { useState } from "react";
import api from "../api";

export default function Bonus({ user, refresh }) {
  const [loading, setLoading] = useState(false);

  async function claim() {
    setLoading(true);
    try {
      const res = await api.claimBonus(user && user.id);
      alert(res.message || `Has ganado ${res.amount}⭐`);
      if (refresh) refresh();
    } catch (e) {
      alert("Error reclamando bonus: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <div style={{ fontWeight: 700 }}>Bonus Diario</div>
      <div style={{ color: "#6b7b8a", marginTop: 8 }}>Reclama entre 5 y 15 estrellas diariamente.</div>
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={claim} disabled={loading}>{loading ? "Enviando..." : "Reclamar ahora"}</button>
      </div>
    </div>
  );
}
