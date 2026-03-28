/* ============================================================
   SUMI & ENJI — main.js
   Shared behaviours: nav, animations, accordion, cart
   ============================================================ */

'use strict';

/* ── Cart State ── */
const cart = {
  items: JSON.parse(localStorage.getItem('se_cart') || '[]'),
  save() { localStorage.setItem('se_cart', JSON.stringify(this.items)); },
  add(id, name, nameJp, price) {
    const existing = this.items.find(i => i.id === id);
    if (existing) { existing.qty++; }
    else { this.items.push({ id, name, nameJp, price, qty: 1 }); }
    this.save();
    this.updateBadge();
    cartNotify(name);
  },
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    this.updateBadge();
  },
  changeQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(0, item.qty + delta);
    if (item.qty === 0) this.remove(id);
    else this.save();
    this.updateBadge();
  },
  total() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      const count = this.count();
      el.textContent = count;
      el.style.display = count ? 'flex' : 'none';
    });
  },
};
cart.updateBadge();

function cartNotify(name) {
  const toast = document.createElement('div');
  toast.className = 'cart-toast';
  toast.innerHTML = `<span class="material-symbols-outlined" style="font-size:1rem;color:var(--gold-dim)">check_circle</span> <strong>${name}</strong> added to order`;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '24px', right: '24px', zIndex: '9999',
    background: 'var(--stone-900)', color: '#fff',
    padding: '12px 20px', fontFamily: 'var(--font-label)',
    fontSize: '0.75rem', letterSpacing: '0.08em',
    display: 'flex', alignItems: 'center', gap: '8px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    transform: 'translateX(120%)', transition: 'transform 0.4s ease',
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(0)';
    setTimeout(() => {
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  });
}

/* ── Sticky Nav ── */
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    if (!nav.classList.contains('scrolled')) {
      nav.style.boxShadow = '';
    } else {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.07)';
    }
  }, { passive: true });

  // Mobile toggle
  const toggle = nav.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) document.body.classList.remove('nav-open');
    });
  }
}

/* ── Fade-Up Observer ── */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.setProperty('--i', el.dataset.delay || i % 4);
  fadeObserver.observe(el);
});

/* ── Accordion ── */
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');
    const isOpen = btn.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.classList.remove('open');
      b.closest('.accordion-item').querySelector('.accordion-content').style.maxHeight = '0';
    });

    if (!isOpen) {
      btn.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

/* ── "Add to Order" buttons ── */
document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
  btn.addEventListener('click', () => {
    const { id, name, nameJp = '', price } = btn.dataset;
    cart.add(id, name, nameJp, parseFloat(price));
  });
});

/* ── Time Slot Selector ── */
document.querySelectorAll('.time-slot').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.time-slots').querySelectorAll('.time-slot').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ── Party Size Counter ── */
const partySizeEl = document.getElementById('party-size-display');
const partyHidden = document.getElementById('party-size');
if (partySizeEl) {
  let count = parseInt(partySizeEl.textContent) || 2;
  document.querySelectorAll('[data-party]').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = btn.dataset.party === '+' ? 1 : -1;
      count = Math.max(1, Math.min(20, count + delta));
      partySizeEl.textContent = count;
      if (partyHidden) partyHidden.value = count;
    });
  });
}

/* ── Delivery / Pickup toggle ── */
document.querySelectorAll('.fulfillment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fulfillment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const info = document.getElementById('fulfillment-info');
    if (info) info.textContent = btn.dataset.info || '';
  });
});

/* ── Smooth anchor scrolling ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Category filter (menu page) ── */
document.querySelectorAll('.cat-filter').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.cat-filter').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const cat = link.dataset.cat;
    document.querySelectorAll('[data-cat]').forEach(card => {
      card.closest('.dish-card-wrap').style.display =
        (!cat || cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
});

/* ── Dietary filter checkboxes ── */
document.querySelectorAll('.dietary-filter').forEach(cb => {
  cb.addEventListener('change', () => {
    const active = [...document.querySelectorAll('.dietary-filter:checked')].map(c => c.value);
    document.querySelectorAll('.dish-card-wrap').forEach(wrap => {
      if (!active.length) { wrap.style.display = ''; return; }
      const dietary = JSON.parse(wrap.dataset.dietary || '[]');
      wrap.style.display = active.every(a => dietary.includes(a)) ? '' : 'none';
    });
  });
});

/* ── Image parallax (hero only) ── */
const heroImg = document.querySelector('.hero__bg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.35;
    heroImg.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}
