import React from "react";

export default function StatCard({ title, value, children }) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#6b7b8a", fontSize: 13 }}>{title}</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
