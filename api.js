const BACKEND = "https://bigwin-backend-k44g.onrender.com";

async function call(path, opts = {}) {
  const url = `${BACKEND}${path}`;

  const r = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...opts
  });

  if (!r.ok) {
    const text = await r.text();
    throw new Error(`API ${r.status}: ${text}`);
  }

  return r.json();
}

export default {
  getProfile: (userId) =>
    call(`/user/profile${userId ? `?user_id=${encodeURIComponent(userId)}` : ""}`),

  claimBonus: (userId) =>
    call(`/user/bonus`, {
      method: "POST",
      body: JSON.stringify({ user_id: userId })
    }),

  getRanking: () => call(`/ranking`),

  getHistory: (userId) =>
    call(`/user/history${userId ? `?user_id=${encodeURIComponent(userId)}` : ""}`),

  getReferrals: (userId) =>
    call(`/user/referrals${userId ? `?user_id=${encodeURIComponent(userId)}` : ""}`)
};
