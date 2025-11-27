import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Referrals from "./pages/Referrals";
import Ranking from "./pages/Ranking";
import Bonus from "./pages/Bonus";
import History from "./pages/History";
import api from "./api";

const views = { HOME: "home", PROFILE: "profile", REF: "referrals", RANK: "ranking", BONUS: "bonus", HIST: "history" };

export default function App() {
  const [view, setView] = useState(views.HOME);
  const [user, setUser] = useState(null);
  const [tg, setTg] = useState(null);

  useEffect(() => {
    try {
      const Telegram = window.Telegram?.WebApp || null;
      if (Telegram) {
        setTg(Telegram);
        Telegram.ready();
      }
    } catch (e) {
      console.warn("Telegram WebApp not found", e);
    }
    fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      const params = new URLSearchParams(window.location.search);
      const userId = params.get("user_id") || params.get("start") || null;
      const res = await api.getProfile(userId);
      setUser(res);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="app">
      <Header stars={(user && user.stars) || 0} onNav={(v) => setView(v)} />
      <div className="container">
        {view === views.HOME && <Home user={user} onNav={setView} />}
        {view === views.PROFILE && <Profile user={user} refresh={fetchProfile} />}
        {view === views.REF && <Referrals user={user} refresh={fetchProfile} />}
        {view === views.RANK && <Ranking />}
        {view === views.BONUS && <Bonus user={user} refresh={fetchProfile} />}
        {view === views.HIST && <History user={user} />}
      </div>
      <footer className="footer">
        <small>BIG WIN • Integrado con Telegram</small>
      </footer>
    </div>
  );
}
