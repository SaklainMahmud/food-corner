import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadMenu } from '../menuData';

const CATEGORIES_ALL = ['all', 'Starters', 'Sushi', 'Ramen', 'Mains', 'Desserts'];
const DIETS = ['All', 'GF'];

export default function Menu() {
  const [cat, setCat]       = useState('all');
  const [diet, setDiet]     = useState('All');
  const [search, setSearch] = useState('');
  const [menu, setMenu]     = useState([]);

  // Reload menu from localStorage every visit (so admin edits appear)
  useEffect(() => {
    setMenu(loadMenu().filter(i => i.available));
  }, []);

  const filtered = menu.filter(item => {
    const matchCat    = cat === 'all' || item.cat === cat;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                        item.jp.includes(search);
    return matchCat && matchSearch;
  });

  const CAT_LABELS = {
    all: { label: 'All', jp: 'すべて / الكل' },
    Starters: { label: 'Starters', jp: '前菜 · المقبلات' },
    Sushi:    { label: 'Sushi',    jp: '寿司' },
    Ramen:    { label: 'Ramen',    jp: 'ラーメン' },
    Mains:    { label: 'Mains',    jp: 'メイン · الأطباق' },
    Desserts: { label: 'Desserts', jp: 'デザート · الحلويات' },
  };

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ paddingTop: 'var(--nav-h)' }}>
        <img className="page-hero__bg"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Halal Japanese Menu" />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content fade-up">
          <span className="section-eyebrow" style={{ color: 'var(--gold-dim)' }}>☪ 100% Halal Certified</span>
          <h1 className="page-hero__title">
            Our Menu
            <span style={{ fontSize: '0.5em', opacity: 0.7, display: 'block', marginTop: 4 }}>
              お品書き · قائمة الطعام
            </span>
          </h1>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-12)' }}>
        <div className="container">

          {/* ── Filters ── */}
          <div className="menu-filters fade-up">
            {/* Category Tabs */}
            <div className="menu-cats">
              {CATEGORIES_ALL.map(c => (
                <button key={c} onClick={() => setCat(c)} className="btn menu-cat-btn"
                  style={{
                    background: cat === c ? 'var(--primary)' : 'transparent',
                    color:      cat === c ? '#fff' : 'var(--on-surface-variant)',
                    borderColor: cat === c ? 'var(--primary)' : 'var(--outline-variant)',
                  }}>
                  {CAT_LABELS[c].label}
                  <span className="menu-cat-jp">{CAT_LABELS[c].jp}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="menu-search-wrap">
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', color: 'var(--on-surface-variant)' }}>search</span>
              <input type="search" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search dishes…"
                className="menu-search-input" />
            </div>
          </div>

          {/* Count */}
          <p className="text-muted body-sm mb-8 fade-up">
            {filtered.length} dish{filtered.length !== 1 ? 'es' : ''} found
            {cat !== 'all' && <span> in <strong>{cat}</strong></span>}
          </p>

          {/* ── Grid ── */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--sp-24) 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--outline)', display: 'block', marginBottom: 'var(--sp-4)' }}>search_off</span>
              <p className="headline-md text-muted">No dishes found</p>
              <button onClick={() => { setCat('all'); setDiet('All'); setSearch(''); }} className="btn btn-outline mt-8">Clear Filters</button>
            </div>
          ) : (
            <div className="menu-grid">
              {filtered.map((item, i) => (
                <div key={item.id} className="card dish-card fade-up" data-delay={i % 3}>
                  <div className="dish-card__img-wrap">
                    <img src={item.img} alt={item.name} loading="lazy"
                      style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop'; }} />
                    {item.badge && <span className="dish-card__badge">{item.badge}</span>}
                    {item.halal && <span className="dish-card__halal">☪ Halal</span>}
                  </div>
                  <div className="dish-card__body">
                    <div className="dish-card__meta">
                      <div>
                        <div className="dish-card__name">{item.name}</div>
                        <div className="dish-card__name-jp">{item.jp}</div>
                      </div>
                      <span className="dish-card__price">${item.price}</span>
                    </div>
                    <p className="dish-card__desc">{item.desc}</p>
                    <div className="dish-card__cat-tag">{item.cat}</div>
                    <div className="dish-card__actions mt-6">
                      <Link to="/order" className="btn btn-outline-red w-full" style={{ justifyContent: 'center' }}>
                        Add to Order
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
