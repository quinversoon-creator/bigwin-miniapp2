async function fetchProfile() {
  try {
    const params = new URLSearchParams(window.location.search);

    // 1️⃣ Obtener desde URL (por si estás probando en navegador)
    let userId = params.get("user_id") || params.get("start") || null;

    // 2️⃣ Si estás en Telegram, obtener desde initDataUnsafe
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (tgUser?.id) {
      userId = String(tgUser.id);
    }

    console.log("USER ID DETECTADO →", userId);

    if (!userId) {
      console.warn("❌ No se pudo obtener user_id");
      return;
    }

    const res = await api.getProfile(userId);
    setUser(res);

  } catch (e) {
    console.error("Error obteniendo perfil:", e);
  }
}
