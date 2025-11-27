import React from "react";

export default function Profile({ user, refresh }) {
  if (!user) return <div className="card">Cargando perfil...</div>;
  return (
    <div>
      <div className="card">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: "#eaf4fb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{user.name ? user.name[0] : "?"}</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{user.name}</div>
            <div style={{ color: "#6b7b8a" }}>Jugador desde: {user.joined ? new Date(user.joined).toLocaleDateString() : "-"}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <div style={{ color: "#6b7b8a" }}>Juegos totales</div>
            <div style={{ fontWeight: 700 }}>{user.games_total || 0}</div>
          </div>
          <div>
            <div style={{ color: "#6b7b8a" }}>Referidos</div>
            <div style={{ fontWeight: 700 }}>{(user.referrals && user.referrals.length) || 0}</div>
          </div>
        </div>
      </div>

      <button className="btn" onClick={refresh}>Actualizar</button>
    </div>
  );
}
