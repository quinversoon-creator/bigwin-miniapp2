import React from "react";
import StatCard from "../components/StatCard";
import GameButtons from "../components/GameButtons";

export default function Home({ user, onNav }) {
  const stars = (user && user.stars) || 0;
  const refLink = (user && user.ref_link) || "Tu enlace aparecerá aquí";

  return (
    <div>
      <StatCard title="Estrellas" value={`${stars} ⭐`}>
        <button className="btn" onClick={() => onNav("bonus")}>Reclamar Bonus</button>
      </StatCard>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: "#6b7b8a", fontSize: 13 }}>Enlace de referido</div>
            <div style={{ fontSize: 14 }}>{refLink}</div>
          </div>
          <div>
            <button className="btn secondary" onClick={() => { navigator.clipboard.writeText(refLink); alert("Enlace copiado"); }}>Copiar</button>
          </div>
        </div>
      </div>

      <GameButtons />

      <div style={{ marginTop: 8 }}>
        <button className="btn" onClick={() => onNav("profile")}>Mi Perfil</button>
        <button className="btn secondary" style={{ marginLeft: 8 }} onClick={() => onNav("ranking")}>Ranking</button>
        <button className="btn secondary" style={{ marginLeft: 8 }} onClick={() => onNav("history")}>Historial</button>
      </div>
    </div>
  );
}
