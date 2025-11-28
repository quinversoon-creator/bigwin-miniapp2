import React from "react";
export default function Header({stars,onNav}){
  return(<div style={{padding:"12px",background:"#071227",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <strong>BIG WIN ⭐ {stars}</strong>
    <div style={{display:"flex",gap:8}}>
      <button className="button" onClick={()=>onNav("home")}>🏠</button>
      <button className="button" onClick={()=>onNav("profile")}>👤</button>
    </div>
  </div>);
}
