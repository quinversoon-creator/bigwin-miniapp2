import React, { useEffect, useState } from "react";
import api from "./api";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("user_id") || params.get("start") || "unknown";
    api.getProfile(id).then(setUser);
  }, []);

  return (
    <div className="app">
      <h1>BIG WIN 🎰</h1>
      {user ? (
        <div className="card">
          <p><b>Usuario:</b> {user.name}</p>
          <p><b>Estrellas:</b> {user.stars}</p>
        </div>
      ) : (
        <p>Cargando…</p>
      )}
    </div>
  );
}
