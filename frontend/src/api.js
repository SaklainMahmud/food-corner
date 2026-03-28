// ============================================================
//  API Service — connects frontend to backend
//  Falls back to localStorage if backend is offline
// ============================================================

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

let backendOnline = null; // null=unknown, true, false

async function checkBackend() {
  if (backendOnline !== null) return backendOnline;
  try {
    const r = await fetch(`${BASE}/health`, { signal: AbortSignal.timeout(2000) });
    backendOnline = r.ok;
  } catch {
    backendOnline = false;
  }
  return backendOnline;
}

// ── MENU ──────────────────────────────────────────────────────
export async function apiGetMenu(params = {}) {
  try {
    const online = await checkBackend();
    if (!online) return null; // caller uses localStorage fallback
    const qs = new URLSearchParams(params).toString();
    const r = await fetch(`${BASE}/menu${qs ? '?' + qs : ''}`);
    return r.ok ? r.json() : null;
  } catch { return null; }
}

export async function apiCreateMenuItem(data) {
  const r = await fetch(`${BASE}/menu`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error((await r.json()).error || 'Create failed');
  return r.json();
}

export async function apiUpdateMenuItem(id, data) {
  const r = await fetch(`${BASE}/menu/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error((await r.json()).error || 'Update failed');
  return r.json();
}

export async function apiToggleMenuItem(id) {
  const r = await fetch(`${BASE}/menu/${id}/toggle`, { method: 'PATCH' });
  if (!r.ok) throw new Error('Toggle failed');
  return r.json();
}

export async function apiDeleteMenuItem(id) {
  const r = await fetch(`${BASE}/menu/${id}`, { method: 'DELETE' });
  if (!r.ok) throw new Error('Delete failed');
  return r.json();
}

// ── ORDERS ────────────────────────────────────────────────────
export async function apiPlaceOrder(data) {
  try {
    const r = await fetch(`${BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return r.ok ? r.json() : null;
  } catch { return null; }
}

export async function apiGetOrders() {
  try {
    const r = await fetch(`${BASE}/orders`);
    return r.ok ? r.json() : [];
  } catch { return []; }
}

// ── RESERVATIONS ──────────────────────────────────────────────
export async function apiCreateReservation(data) {
  const r = await fetch(`${BASE}/reservations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error((await r.json()).error || 'Failed');
  return r.json();
}

export async function apiGetReservations() {
  try {
    const r = await fetch(`${BASE}/reservations`);
    return r.ok ? r.json() : [];
  } catch { return []; }
}

// ── CONTACT ───────────────────────────────────────────────────
export async function apiSendContact(data) {
  const r = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error((await r.json()).error || 'Failed');
  return r.json();
}

// ── ADMIN OVERVIEW ────────────────────────────────────────────
export async function apiAdminOverview() {
  try {
    const r = await fetch(`${BASE}/admin/overview`);
    return r.ok ? r.json() : null;
  } catch { return null; }
}
