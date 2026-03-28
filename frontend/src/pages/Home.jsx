import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <img className="hero__bg" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" alt="Delicious halal food spread"/>
        <div className="hero__overlay"></div>
        <div className="hero__content fade-up">
          <div className="hero__halal-badge">☪ HALAL CERTIFIED</div>
          <h1 className="display-lg text-white mb-4">ADI ARI HALAL</h1>
          <p className="headline-sm text-white mb-2" style={{letterSpacing: '0.35em', fontStyle: 'normal', opacity: .9}}>FOOD CORNER</p>
          <p className="hero__arabic text-white mb-4">المطعم الحلال الأصيل</p>
          <div className="hero__divider"></div>
          <p className="label-xl text-white mt-4 mb-12" style={{opacity: .85}}>Authentic Halal Cuisine — Fresh & Wholesome</p>
          <div className="flex" style={{gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/reservation" className="btn btn-primary">Reserve Table</Link>
            <Link to="/order" className="btn btn-ghost">Order Online</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ── Halal Assurance Bar ── */}
      <section className="halal-bar">
        <div className="container">
          <div className="halal-bar__items">
            {[
              { icon: '☪', label: '100% Halal Certified' },
              { icon: '🌿', label: 'Fresh Ingredients Daily' },
              { icon: '👨‍🍳', label: 'Expert Chefs' },
              { icon: '🚚', label: 'Fast Delivery' },
              { icon: '⭐', label: 'Top Rated Restaurant' },
            ].map((item, i) => (
              <div key={i} className="halal-bar__item fade-up" data-delay={i}>
                <span className="halal-bar__icon">{item.icon}</span>
                <span className="halal-bar__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="fade-up">
              <div className="section-header mb-8">
                <span className="section-eyebrow">Our Heritage</span>
                <h2 className="headline-xl">Our Story <span className="jp-sub">حكايتنا</span></h2>
                <div className="section-header__divider"></div>
              </div>
              <p className="body-lg text-muted mb-6">At Adi Ari Halal Food Corner, we believe that great food brings people together. Our journey began with a passion for authentic halal cuisine, prepared with the finest halal-certified ingredients sourced from trusted suppliers.</p>
              <p className="body-md text-muted mb-8">Every dish is crafted with care, love, and the highest standards of halal preparation — because we believe you deserve food that is both delicious and wholesome.</p>
              <Link to="/about" className="link-gold">Explore Our Philosophy</Link>
            </div>
            <div className="about-img-wrap fade-up" data-delay="1">
              <img src="https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1974&auto=format&fit=crop" alt="Our Kitchen"/>
              <div className="about-badge"><span className="material-symbols-outlined">restaurant_menu</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Dishes ── */}
      <section className="section section--container featured-dishes">
        <div className="pattern seigaiha-pattern"></div>
        <div className="container" style={{position: 'relative'}}>
          <div className="section-header section-header--center mb-16 fade-up">
            <span className="section-eyebrow">Chef's Selection</span>
            <h2 className="headline-xl">Signature Dishes</h2>
            <div className="section-header__divider" style={{margin: 'var(--sp-4) auto 0'}}></div>
          </div>
          <div className="grid-3 bento-offset">
            {/* Dish 1 */}
            <div className="card dish-card fade-up" data-delay="0">
              <div className="dish-card__img-wrap">
                <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2025&auto=format&fit=crop" alt="Chicken Biryani"/>
                <span className="dish-card__badge">Chef's Choice</span>
                <span className="dish-card__halal">☪ Halal</span>
              </div>
              <div className="dish-card__body">
                <div className="dish-card__meta">
                  <div>
                    <div className="dish-card__name">Chicken Biryani</div>
                    <div className="dish-card__name-jp">بریانی مرغ</div>
                  </div>
                  <span className="dish-card__price">$18</span>
                </div>
                <p className="dish-card__desc">Fragrant basmati rice cooked with tender halal chicken, aromatic spices and saffron.</p>
                <div className="dish-card__actions mt-6">
                  <Link to="/order" className="btn btn-outline-red w-full" style={{justifyContent: 'center'}}>Add to Order</Link>
                </div>
              </div>
            </div>
            {/* Dish 2 */}
            <div className="card dish-card fade-up" data-delay="1">
              <div className="dish-card__img-wrap">
                <img src="https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=2080&auto=format&fit=crop" alt="Lamb Kebab Platter"/>
                <span className="dish-card__halal">☪ Halal</span>
              </div>
              <div className="dish-card__body">
                <div className="dish-card__meta">
                  <div>
                    <div className="dish-card__name">Lamb Kebab Platter</div>
                    <div className="dish-card__name-jp">طبق كباب الضأن</div>
                  </div>
                  <span className="dish-card__price">$26</span>
                </div>
                <p className="dish-card__desc">Juicy halal lamb kebabs marinated with Middle Eastern spices, served with garlic sauce and flatbread.</p>
                <div className="dish-card__actions mt-6">
                  <Link to="/order" className="btn btn-outline-red w-full" style={{justifyContent: 'center'}}>Add to Order</Link>
                </div>
              </div>
            </div>
            {/* Dish 3 */}
            <div className="card dish-card fade-up" data-delay="2">
              <div className="dish-card__img-wrap">
                <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2080&auto=format&fit=crop" alt="Butter Chicken"/>
                <span className="dish-card__halal">☪ Halal</span>
              </div>
              <div className="dish-card__body">
                <div className="dish-card__meta">
                  <div>
                    <div className="dish-card__name">Butter Chicken</div>
                    <div className="dish-card__name-jp">مرغ مکھنی</div>
                  </div>
                  <span className="dish-card__price">$22</span>
                </div>
                <p className="dish-card__desc">Tender halal chicken in a rich, creamy tomato-butter sauce with aromatic spices.</p>
                <div className="dish-card__actions mt-6">
                  <Link to="/order" className="btn btn-outline-red w-full" style={{justifyContent: 'center'}}>Add to Order</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="section section--dark" style={{textAlign: 'center', overflow: 'hidden', position: 'relative'}}>
        <div style={{position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'serif', fontSize: '20rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none'}}>حلال</div>
        <div className="container" style={{position: 'relative'}}>
          <span className="material-symbols-outlined testimonial-icon fade-up" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
          <blockquote className="testimonial-quote fade-up">
            "The most authentic halal food I have ever tasted outside of home. Every dish is bursting with flavour — the chicken biryani alone is worth coming back for again and again."
          </blockquote>
          <div className="testimonial-attr fade-up">
            <div style={{width: '2rem', height: '1px', background: 'var(--secondary)', margin: 'var(--sp-6) auto'}}></div>
            <div className="testimonial-attr__name">Ahmad R. Hassan</div>
            <div className="testimonial-attr__role">Food Blogger, Halal Eats World</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="zen-tray">
            <div className="pattern dot-pattern"></div>
            <div style={{position: 'relative'}}>
              <span className="section-eyebrow">Book Your Table</span>
              <h2 className="headline-xl mb-6">Reserve Your Evening</h2>
              <p className="body-md text-muted mb-10">Experience the warmth of authentic halal hospitality. Our dining room is open for families, gatherings, and special occasions.</p>
              <Link to="/reservation" className="btn btn-dark">Secure Your Seat</Link>
            </div>
            <div className="zen-tray__img">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Restaurant interior"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
