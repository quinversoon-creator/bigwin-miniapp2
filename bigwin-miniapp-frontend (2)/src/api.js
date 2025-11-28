const BACKEND = import.meta.env.VITE_BACKEND_URL;

async function call(path, opts = {}) {
  const r = await fetch(BACKEND + path, {
    headers: { "Content-Type": "application/json" },
    ...opts
  });
  return r.json();
}

export default {
  getProfile: (id) => call(`/user/profile?user_id=${id}`),
  claimBonus: (id) => call(`/user/bonus`, { method:"POST", body: JSON.stringify({ user_id:id }) })
};
