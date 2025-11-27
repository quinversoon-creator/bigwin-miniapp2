import React from "react";

export default function Header({ stars = 0, onNav = () => {} }) {
  return (
    <div className="header">
      <div className="row">
        <div>
          <h2 style={{ margin: 0 }}>BIG WIN</h2>
          <div style={{ fontSize: 13, opacity: 0.9 }}>Dashboard</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, opacity: 0.9 }}>Tus estrellas</div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>{stars} ⭐</div>
        </div>
      </div>
    </div>
  );
}
