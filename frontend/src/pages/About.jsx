export default function About() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ paddingTop: 'var(--nav-h)' }}>
        <img className="page-hero__bg" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop" alt="About SUMI & ENJI" />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content fade-up">
          <span className="section-eyebrow" style={{ color: 'var(--gold-dim)' }}>Our Heritage</span>
          <h1 className="page-hero__title">Our Story <span style={{ fontSize: '0.55em', opacity: 0.7 }}>私たちの物語</span></h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2 fade-up" style={{ gap: 'var(--sp-16)', alignItems: 'center' }}>
            <div>
              <div className="section-header mb-8">
                <span className="section-eyebrow">The Beginning</span>
                <h2 className="headline-xl">Rooted in Kyoto <span className="jp-sub">京都に根ざして</span></h2>
                <div className="section-header__divider"></div>
              </div>
              <p className="body-lg text-muted mb-6">At Sumi &amp; Enji, we honour the delicate balance between the deep ink of tradition and the vibrant crimson of modern innovation. Our journey began in the narrow alleys of Kyoto, where the art of the perfect blade stroke is passed down through generations.</p>
              <p className="body-md text-muted mb-6">Every ingredient is sourced with obsessive care — from the mineral-rich waters of the Sea of Japan to the small organic farms of our local producers. We believe the finest meals begin long before they reach the plate.</p>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1583394838336-318e90641973?q=80&w=1974&auto=format&fit=crop" alt="Head Chef" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)', width: 56, height: 56, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span className="material-symbols-outlined">restaurant_menu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="section section--container">
        <div className="container">
          <div className="section-header section-header--center mb-16 fade-up">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="headline-xl">Japanese Philosophy <span className="jp-sub">日本の哲学</span></h2>
            <div className="section-header__divider"></div>
          </div>
          <div className="grid-3 fade-up" data-delay="1" style={{ gap: 'var(--sp-6)' }}>
            {[
              { k: 'Ma (間)', d: 'Negative Space', text: 'The deliberate pause between notes creates the music. We design each dish and experience to breathe — giving space for flavour to resonate.' },
              { k: 'Shizen (自然)', d: 'Nature', text: "Nature's rhythm dictates our menu. We listen to the seasons, embracing micro-changes in ingredients to serve food at its absolute peak." },
              { k: 'Kanso (簡素)', d: 'Simplicity', text: 'Simplicity is not the absence of complexity, but its distillation. We strip away the unnecessary, leaving only true, honest flavour.' },
              { k: 'Seijaku (静寂)', d: 'Tranquility', text: 'An oasis of quiet in a loud world. Our space is designed to calm the mind, allowing guests to fully experience the art on their plate.' },
              { k: 'Wabi-Sabi (侘寂)', d: 'Imperfect Beauty', text: 'We celebrate the beauty of imperfection — handmade ceramics, asymmetric plating — each piece is unique, like a haiku.' },
              { k: 'Omotenashi (おもてなし)', d: 'Hospitality', text: 'Japanese hospitality means anticipating needs before they are expressed. Every guest is treated as an honoured visitor.' },
            ].map((p, i) => (
              <div key={i} className="card fade-up" data-delay={i % 3} style={{ padding: 'var(--sp-8)' }}>
                <h3 className="headline-sm mb-1">{p.k}</h3>
                <p style={{ color: 'var(--secondary)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-label)', marginBottom: 'var(--sp-4)' }}>{p.d}</p>
                <p className="body-sm text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="grid-2 fade-up" style={{ gap: 'var(--sp-16)', alignItems: 'start' }}>
            <div>
              <div className="section-header mb-8">
                <span className="section-eyebrow">Our Journey</span>
                <h2 className="headline-xl">A Decade of Craft <span className="jp-sub">十年の技</span></h2>
                <div className="section-header__divider"></div>
              </div>
              <div className="timeline">
                {[
                  { year: '2013', title: 'Founded in Kyoto', desc: 'Chef Ryō Tanaka opens a 12-seat kappo counter in the Nishiki market district.' },
                  { year: '2016', title: 'First Michelin Recognition', desc: 'Awarded our first Michelin star for exceptional Japanese cuisine and technique.' },
                  { year: '2019', title: 'International Expansion', desc: 'SUMI & ENJI opens its second location, bringing authentic Kyoto flavours to a global audience.' },
                  { year: '2022', title: 'Two Michelin Stars', desc: 'Elevated to two Michelin stars, cementing our reputation as one of the finest Japanese restaurants.' },
                  { year: '2024', title: 'Omakase Lab Opens', desc: 'Launch of our experimental 8-seat Omakase counter, rotating menus every 48 hours.' },
                ].map((t, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-title">{t.title}</div>
                    <div className="timeline-desc">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Awards */}
            <div>
              <div className="section-header mb-8">
                <span className="section-eyebrow">Recognition</span>
                <h2 className="headline-xl">Awards <span className="jp-sub">賞</span></h2>
                <div className="section-header__divider"></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                {[
                  { award: '⭐⭐ Two Michelin Stars', year: '2022–2024', desc: 'Guide Michelin Japan' },
                  { award: '🏆 Asia\'s 50 Best', year: '2023', desc: '#12 Best Restaurant in Asia' },
                  { award: '🍶 Best Omakase', year: '2024', desc: 'Japan Restaurant Awards' },
                  { award: '🌿 Green Star', year: '2024', desc: 'Michelin Sustainable Gastronomy' },
                ].map((a, i) => (
                  <div key={i} className="card fade-up" data-delay={i} style={{ padding: 'var(--sp-5) var(--sp-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, marginBottom: 4 }}>{a.award}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>{a.desc}</div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', color: 'var(--secondary)', letterSpacing: '0.15em' }}>{a.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header section-header--center mb-16 fade-up">
            <span className="section-eyebrow" style={{ color: 'var(--gold-dim)' }}>The Artisans</span>
            <h2 className="headline-xl" style={{ color: '#fff' }}>Meet Our Chefs</h2>
          </div>
          <div className="grid-3 fade-up" style={{ gap: 'var(--sp-8)' }}>
            {[
              { name: 'Ryō Tanaka', role: 'Executive Chef & Founder', img: 'https://images.unsplash.com/photo-1583394838336-318e90641973?q=80&w=400&auto=format&fit=crop', bio: '20 years trained under Kyoto\'s master craftsmen. Specialises in Edomae sushi and kaiseki.' },
              { name: 'Yuki Matsuda', role: 'Head Pastry Chef', img: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=400&auto=format&fit=crop', bio: 'Creates modern Japanese desserts fusing traditional wagashi with French patisserie.' },
              { name: 'Kaito Nakamura', role: 'Ramen & Noodle Master', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop', bio: 'Hand-pulls every noodle to order. His tonkotsu broth is simmered for a minimum of 72 hours.' },
            ].map((chef, i) => (
              <div key={i} className="fade-up" data-delay={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--sp-6)', border: '2px solid var(--primary)' }}>
                  <img src={chef.img} alt={chef.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', color: '#fff', marginBottom: 4 }}>{chef.name}</div>
                <div style={{ color: 'var(--gold-dim)', fontFamily: 'var(--font-label)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>{chef.role}</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>{chef.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
