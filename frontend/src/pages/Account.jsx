import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Account() {
  const [tab, setTab] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <section className="section" style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: 'var(--surface-container-low)', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: 480 }}>
          <div className="section-header section-header--center mb-8 fade-up">
            <span className="section-eyebrow">Welcome Back</span>
            <h1 className="headline-xl">My Account</h1>
          </div>
          <div className="card fade-up" style={{ padding: 'var(--sp-10)' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--outline-variant)', marginBottom: 'var(--sp-8)' }}>
              {['login', 'register'].map(t => (
                <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: 'var(--sp-4)', fontFamily: 'var(--font-label)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', border: 'none', background: 'none', color: tab === t ? 'var(--primary)' : 'var(--on-surface-variant)', borderBottom: tab === t ? '2px solid var(--primary)' : '2px solid transparent', marginBottom: -1 }}>
                  {t === 'login' ? 'Sign In' : 'Register'}
                </button>
              ))}
            </div>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              {tab === 'register' && (
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" required className="form-input" placeholder="Ryō Tanaka" />
                </div>
              )}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" required className="form-input" placeholder="hello@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" required className="form-input" placeholder="••••••••" />
              </div>
              {tab === 'register' && (
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" required className="form-input" placeholder="••••••••" />
                </div>
              )}
              {tab === 'login' && (
                <a href="#" style={{ color: 'var(--secondary)', fontSize: '0.75rem', textAlign: 'right', fontFamily: 'var(--font-label)' }}>Forgot password?</a>
              )}
              <button type="submit" className="btn btn-primary w-full mt-2" style={{ justifyContent: 'center' }}>
                {tab === 'login' ? 'Sign In →' : 'Create Account →'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginTop: 'var(--sp-4)' }}>
                {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button type="button" onClick={() => setTab(tab === 'login' ? 'register' : 'login')} style={{ color: 'var(--primary)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
                  {tab === 'login' ? 'Register' : 'Sign In'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Dashboard
  const NAV_ITEMS = [
    { id: 'overview', icon: 'dashboard', label: 'Overview' },
    { id: 'orders', icon: 'receipt_long', label: 'Order History' },
    { id: 'reservations', icon: 'event_seat', label: 'Reservations' },
    { id: 'loyalty', icon: 'star', label: 'Loyalty Points' },
    { id: 'profile', icon: 'manage_accounts', label: 'Profile Settings' },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: 'var(--background)' }}>
      <div className="container" style={{ paddingTop: 'var(--sp-8)', paddingBottom: 'var(--sp-16)', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 'var(--sp-8)', alignItems: 'start' }}>
        {/* Sidebar */}
        <aside style={{ position: 'sticky', top: 'calc(var(--nav-h) + var(--sp-8))', background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', padding: 'var(--sp-6) 0' }}>
          <div style={{ padding: '0 var(--sp-6) var(--sp-6)', borderBottom: '1px solid var(--outline-variant)', marginBottom: 'var(--sp-4)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-headline)', fontWeight: 700, marginBottom: 'var(--sp-3)' }}>RT</div>
            <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}>Ryō Tanaka</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Gold Member • 2,450 pts</div>
          </div>
          {NAV_ITEMS.map(n => (
            <button key={n.id} onClick={() => setActiveSection(n.id)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', padding: 'var(--sp-3) var(--sp-6)', background: activeSection === n.id ? 'var(--primary-fixed)' : 'none', color: activeSection === n.id ? 'var(--primary)' : 'var(--on-surface-variant)', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-label)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'left', transition: 'all 0.2s', borderLeft: activeSection === n.id ? '3px solid var(--primary)' : '3px solid transparent' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>{n.icon}</span>
              {n.label}
            </button>
          ))}
          <div style={{ padding: 'var(--sp-4) var(--sp-6)', marginTop: 'var(--sp-4)', borderTop: '1px solid var(--outline-variant)' }}>
            <button onClick={() => setLoggedIn(false)} style={{ color: 'var(--error)', fontFamily: 'var(--font-label)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>logout</span> Sign Out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main>
          {activeSection === 'overview' && (
            <div>
              <h1 className="headline-lg mb-8">Welcome back, Ryō 👋</h1>
              <div className="grid-3 mb-8" style={{ gap: 'var(--sp-4)' }}>
                {[
                  { label: 'Total Orders', val: '14', icon: 'receipt_long' },
                  { label: 'Reservations', val: '3', icon: 'event_seat' },
                  { label: 'Loyalty Points', val: '2,450', icon: 'star' },
                ].map((m, i) => (
                  <div key={i} className="metric-card">
                    <div className="metric-eyebrow">{m.label}</div>
                    <div className="metric-value">{m.val}</div>
                  </div>
                ))}
              </div>
              <div className="card" style={{ padding: 'var(--sp-8)' }}>
                <h2 className="headline-sm mb-4">Recent Activity</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                  {[
                    { act: 'Order #1041 placed', sub: 'Omakase Box × 2', time: '2 days ago', icon: 'shopping_cart' },
                    { act: 'Reservation Confirmed', sub: 'Mar 30 · 7:00 PM · 4 guests', time: '3 days ago', icon: 'event_seat' },
                    { act: '250 Loyalty Points Earned', sub: 'From Order #1041', time: '2 days ago', icon: 'star' },
                  ].map((a, i) => (
                    <div key={i} style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'center', padding: 'var(--sp-3) 0', borderBottom: '1px solid var(--outline-variant)' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>{a.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{a.act}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>{a.sub}</div>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeSection === 'loyalty' && (
            <div>
              <h1 className="headline-lg mb-8">Loyalty Program <span className="jp-sub">ロイヤルティ</span></h1>
              <div className="card" style={{ padding: 'var(--sp-10)', marginBottom: 'var(--sp-6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-6)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginBottom: 4 }}>Current Balance</div>
                    <div style={{ fontFamily: 'var(--font-headline)', fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>2,450</div>
                    <div style={{ color: 'var(--secondary)', fontFamily: 'var(--font-label)', fontSize: '0.65rem' }}>GOLD TIER MEMBER</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--gold)', fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div style={{ marginBottom: 'var(--sp-2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: 'var(--sp-2)' }}>
                    <span>Gold</span><span>Platinum (5,000 pts)</span>
                  </div>
                  <div className="loyalty-bar"><div className="loyalty-bar__fill" style={{ width: '49%' }}></div></div>
                </div>
                <p className="text-muted text-sm">2,550 points to Platinum tier</p>
              </div>
              <div className="grid-2" style={{ gap: 'var(--sp-4)' }}>
                {[
                  { reward: 'Free Dessert', pts: 500, icon: 'cake' },
                  { reward: '10% Off Next Order', pts: 1000, icon: 'local_offer' },
                  { reward: 'Complimentary Sake', pts: 1500, icon: 'wine_bar' },
                  { reward: 'Omakase Upgrade', pts: 2000, icon: 'upgrade' },
                ].map((r, i) => (
                  <div key={i} className="card" style={{ padding: 'var(--sp-6)', display: 'flex', alignItems: 'center', gap: 'var(--sp-4)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--gold)' }}>{r.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700 }}>{r.reward}</div>
                      <div style={{ color: 'var(--secondary)', fontFamily: 'var(--font-label)', fontSize: '0.65rem' }}>{r.pts} pts</div>
                    </div>
                    <button className="btn btn-outline" style={{ fontSize: '0.6rem', padding: '0.4rem 1rem' }} disabled={2450 < r.pts}>Redeem</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {(activeSection === 'orders' || activeSection === 'reservations' || activeSection === 'profile') && (
            <div>
              <h1 className="headline-lg mb-8">{NAV_ITEMS.find(n => n.id === activeSection)?.label}</h1>
              <div className="card" style={{ padding: 'var(--sp-12)', textAlign: 'center', color: 'var(--on-surface-variant)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--sp-4)' }}>construction</span>
                <p className="body-md">This section will be powered by the backend API.</p>
                <p className="body-sm mt-4">Backend integration in progress — connecting to Node.js / Express server.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
