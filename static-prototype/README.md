# SUMI & ENJI 🍱 — Japanese Restaurant Website

> **Traditional Craft, Modern Palate** — A complete HTML/CSS/JS multi-page website for a premium Japanese restaurant.

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| Homepage | [`index.html`](index.html) | Hero, About preview, Featured dishes, Testimonial, CTA |
| Menu | [`menu.html`](menu.html) | Category + dietary filters, dish grid, add-to-cart |
| Online Order | [`order.html`](order.html) | Delivery/Pickup toggle, menu grid, live cart sidebar |
| Reservation | [`reservation.html`](reservation.html) | Date picker, time slot grid, party size, form |
| About Us | [`about.html`](about.html) | Story, philosophy, timeline, team, awards |
| Contact | [`contact.html`](contact.html) | Contact form, FAQ accordion, map, hours |
| Login / Register | [`login.html`](login.html) | Tabbed auth form with social login |
| User Account | [`account.html`](account.html) | Dashboard, orders, reservations, loyalty |
| Admin Portal | [`admin.html`](admin.html) | Metrics, orders table, kitchen insights |

---

## 💻 Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styles | **Vanilla CSS** — fully custom design system in `style.css` |
| Scripts | **Vanilla JavaScript** — `main.js` (no frameworks) |
| Fonts | Google Fonts: Playfair Display, Noto Serif JP, Inter, Work Sans |
| Icons | Google Material Symbols |
| Images | Unsplash (CDN — replace with real photography for production) |

---

## 🎨 Design System: "Lacquer & Stone"

Defined in **`style.css`** as CSS custom properties.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#9e0027` | CTAs, active states, accents |
| `--primary-dark` | `#73001a` | Gradient start for lacquer buttons |
| `--secondary` | `#735c00` | Gold — section eyebrows, prices |
| `--gold` | `#D4AF37` | Premium highlights |
| `--stone-900` | `#1c1917` | Footer, dark sections, cart header |
| `--surface` | `#f9f9f9` | Page background |
| `--on-surface` | `#1a1c1c` | Primary text |

### Typography

| Role | Font | Notes |
|------|------|-------|
| Display | Playfair Display *(italic)* | Brand name, hero headings |
| Headline | Noto Serif JP | Section titles, Japanese subtitles |
| Body | Inter | Readable body copy |
| Label | Work Sans | ALL CAPS + wide letter-spacing for metadata |

### Design Principles (Wa, Kanso, Seijaku, Shizen)
- **No rounded corners** — clean sharp lines
- **Seigaiha wave pattern** as subtle texture overlays
- **Negative space ("Ma")** as a design element, never filled unnecessarily
- **Japanese subtitles** paired with every English heading
- **Glassmorphism navbar** — `rgba(249,249,249,0.82)` + `backdrop-filter: blur(16px)`
- **Lacquer gradient CTAs** — `135deg, #73001a → #9e0027`

---

## 📁 Project Structure

```
p:/ahsam/
├── index.html          # Homepage
├── menu.html           # Menu page
├── order.html          # Online ordering
├── reservation.html    # Table reservation
├── about.html          # About us
├── contact.html        # Contact & FAQ
├── login.html          # Login / Register
├── account.html        # User account dashboard
├── admin.html          # Admin management portal
├── 404.html            # Error page
├── assets/
│   ├── css/
│   │   └── style.css   # Full design system & all component styles
│   ├── js/
│   │   └── main.js     # Shared JS (nav, cart, animations, filters)
│   └── img/            # Static image assets
├── task.md             # Project checklist tracking
└── README.md           # This file
```

---

## ⚙️ Key Features

### 🛒 Persistent Cart
- State stored in `localStorage` — survives page refreshes
- Cart badge updates across all pages
- Toast notifications on add

### 🔍 Menu Filtering
- **Category filter** — client-side show/hide by data attribute
- **Dietary filter** — supports `vegan`, `spicy`, `gf` combinations
- **Live search** — filters by name/description as you type

### 📅 Reservation Form
- Date picker with today as minimum
- Animated time slot selector grid
- Party size counter (1–20)
- Hidden input syncs selected time

### 🎬 Animations
- `IntersectionObserver`-based fade-up on scroll
- Staggered delays via CSS `--i` variable
- Hero image parallax on scroll
- Dish card image zoom on hover

### 📱 Responsive Design
- Mobile-first breakpoints at 768px and 1024px
- Mobile nav toggle (hamburger → slide-down links)
- Cart sidebar collapses to full-width on mobile
- Admin sidebar hides on mobile

---

## 🚀 Getting Started

### Option 1: Open directly in browser
Just open `index.html` in any modern browser — no server needed.

### Option 2: Serve locally (recommended)
```bash
# Using Python (built-in)
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```
Then visit `http://localhost:8080`

---

## 🗄️ Database Schema (for backend integration)

See the full SQL schema in the Design PRD. Key tables:

```sql
users · menu_items · orders · order_items · reservations · addresses · reviews
```

---

## 🔌 Backend Integration Points

| Feature | Integration |
|---------|-------------|
| Reservation form | `POST /api/reservations` |
| Order checkout | `POST /api/orders` + Stripe/PayPal |
| Auth (login/register) | JWT or session-based |
| Menu data | `GET /api/menu-items` |
| Admin metrics | `GET /api/dashboard` |

Recommended stack: **Node.js + Express** or **Python/FastAPI** with **PostgreSQL**.

---

## 🔒 Production Checklist

- [ ] Replace Unsplash images with professional food photography
- [ ] Connect reservation form to backend API
- [ ] Integrate Stripe for payment processing
- [ ] Add Google Maps API key for live map embed
- [ ] Set up SendGrid for confirmation emails / SMS
- [ ] Configure SSL certificate (HTTPS)
- [ ] Add Google Analytics 4 tracking
- [ ] Implement server-side cart and authentication
- [ ] CMS integration (Strapi / WordPress headless) for menu updates
- [ ] Performance: compress images, enable CDN, add gzip

---

## 📸 Image Credits

All placeholder images sourced from [Unsplash](https://unsplash.com). Replace with licensed/owned photography before production deployment.

---

## 📄 License

MIT License — free to use and modify for personal or commercial projects.

---

*Crafted with precision and intentionality — SUMI & ENJI, 2024.*
