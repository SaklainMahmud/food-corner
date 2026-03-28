# ADI ARI HALAL FOOD CORNER

> A full-stack **Halal Japanese Fusion** restaurant web application — built with **React + Vite** (frontend) and **Express + SQLite** (backend).  
> Admin can manage all menu items, view orders, and handle reservations — all persisted in a real database that **auto-creates on first server start**.

---

## 🌐 Live Preview

| Service  | URL                        |
|----------|----------------------------|
| Frontend | http://localhost:5173       |
| Backend  | http://localhost:5000/api   |
| Admin    | http://localhost:5173/admin |

---

## 🍱 Website Breakdown

### Pages

| Page           | Route          | Description                                               |
|----------------|----------------|-----------------------------------------------------------|
| Home           | `/`            | Hero with halal badge, featured dishes, assurance bar     |
| Menu           | `/menu`        | Full menu grid with search, category filter + halal badges|
| Order          | `/order`       | Add to cart, delivery/pickup, live cart total             |
| Reservation    | `/reservation` | Table booking form → saved to DB                          |
| About          | `/about`       | Story, Japanese philosophy, chef team, timeline           |
| Contact        | `/contact`     | Contact form (saved to DB), hours, FAQ accordion          |
| Account        | `/account`     | User profile page                                         |
| Admin          | `/admin`       | 🔐 Full product manager (CRUD, DB-connected)              |

### ☪ Halal Food Menu (25 Items)

| Category  | Items                                                                 |
|-----------|-----------------------------------------------------------------------|
| Starters  | Edamame, Gyoza (Halal), Miso Soup, Chicken Karaage, Hummus & Pita    |
| Sushi     | Omakase Nigiri, Salmon Aburi, Tuna Tataki, Rainbow Roll               |
| Ramen     | Tonkotsu Black, Shio Chicken, Spicy Miso, Chicken Shoyu               |
| Mains     | Botan Tempura, Chicken Teriyaki, Black Cod Miso, Chicken Biryani, Beef Yakitori, Lamb Kebab, Butter Chicken |
| Desserts  | Matcha Kakigori, Yuzu Cheesecake, Gulab Jamun, Mango Lassi, Dorayaki  |

---

## 🔐 Admin Panel

**Login:** Go to `/admin` — Password: `admin123`

### Features
- ✅ **Add** new menu items (name, Japanese/Arabic subtitle, category, price, image, description, badge)
- ✅ **Edit** any existing item inline via modal
- ✅ **Delete** items with confirmation dialog
- ✅ **Toggle visibility** (show/hide from public menu without deleting)
- ✅ **Category filter** (view by Starters / Sushi / Ramen / Mains / Desserts)
- ✅ **Sync DB** button — pulls fresh data from backend
- ✅ **Dashboard** with live stats (active items, orders, revenue, reservations)
- ✅ **Orders tab** — shows all orders placed via `/order`
- ✅ **Reservations tab** — shows all table bookings
- ✅ **DB Status indicator** — shows "Connected to Database" vs "Offline Mode"

---

## 🗄️ Database (Auto-Setup SQLite)

The database **auto-creates** in `backend/data/restaurant.db` on first `node server.js`.  
No manual setup, no MongoDB Atlas account, no ENV needed.

### Tables

| Table         | Purpose                          |
|---------------|----------------------------------|
| `menu_items`  | All menu item data (full CRUD)   |
| `orders`      | Online orders from `/order`      |
| `reservations`| Table bookings from `/reservation`|
| `contacts`    | Messages from `/contact`         |

---

## 🚀 Getting Started

### 1. Backend (Database & API)

```bash
cd backend
npm install
npm run dev        # or: node server.js
```

> ✅ On first run it auto-creates the database at `backend/data/restaurant.db` and seeds 25 halal menu items.

**API Endpoints:**

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | `/api/health`         | Server health check    |
| GET    | `/api/menu`           | Get all menu items     |
| POST   | `/api/menu`           | Add new item           |
| PUT    | `/api/menu/:id`       | Update item            |
| PATCH  | `/api/menu/:id/toggle`| Toggle availability    |
| DELETE | `/api/menu/:id`       | Delete item            |
| POST   | `/api/orders`         | Place a new order      |
| GET    | `/api/orders`         | Get all orders         |
| POST   | `/api/reservations`   | Make a reservation     |
| GET    | `/api/reservations`   | Get all reservations   |
| POST   | `/api/contact`        | Send contact message   |
| GET    | `/api/admin/overview` | Dashboard stats        |

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit: **http://localhost:5173**

---

## 🏗️ Project Structure

```
p:/ahsam/
├── backend/
│   ├── server.js          # Express + SQLite API (auto-DB)
│   ├── package.json
│   └── data/
│       └── restaurant.db  # Auto-created SQLite database
│
└── frontend/
    ├── src/
    │   ├── api.js          # API service (all REST calls + offline fallback)
    │   ├── menuData.js     # Shared menu store (API → localStorage → default)
    │   ├── App.jsx         # Router + animations
    │   ├── index.css       # Full design system (1600+ lines)
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx  # Full info: address, phone, hours, social
    │   │   └── Animations.jsx  # Splash, cursor, sparkle trail, particles
    │   └── pages/
    │       ├── Home.jsx
    │       ├── Menu.jsx        # Live from DB with search + filter
    │       ├── Order.jsx       # Cart with DB order saving
    │       ├── Admin.jsx       # Full CRUD + Dashboard
    │       ├── About.jsx
    │       ├── Contact.jsx     # Form saves to DB
    │       ├── Reservation.jsx
    │       └── Account.jsx
    └── index.html
```

---

## 🎨 Design System — "Lacquer & Stone"

| Token            | Value                     |
|------------------|---------------------------|
| Primary          | `#9e0027` (Deep Crimson)  |
| Secondary        | `#b08d57` (Aged Gold)     |
| Background Dark  | `#0c0c0c`                 |
| Font Headline    | Cormorant Garamond        |
| Font Body        | Inter                     |
| Font Label       | Space Grotesk             |
| Arabic Font      | Amiri                     |

### Animations
- 🎆 **Splash screen** with star arabesque & Arabic tagline
- ✨ **Sparkle trail** on mouse movement
- 🌟 **Floating particles** (Islamic/halal motifs: ☪ ✦ ◆)
- 📜 **Scroll fade-up** on all sections
- 🔴 **Custom cursor** ring with click feedback
- 📊 **Scroll progress bar** at top

---

## 🔑 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18, Vite, React Router v6 |
| Styling   | Vanilla CSS (custom design system) |
| Backend   | Node.js, Express 5      |
| Database  | SQLite via `better-sqlite3` |
| Fonts     | Google Fonts (Cormorant, Inter, Space Grotesk, Amiri) |
| Icons     | Material Symbols        |

---

## 📜 Changelog

| Version | Date       | Changes |
|---------|------------|---------|
| v1.0    | 2026-01-27 | Initial SUMI & ENJI Japanese restaurant |
| v2.0    | 2026-03-27 | Rebranded to ADI ARI HALAL FOOD CORNER |
| v2.1    | 2026-03-27 | Admin CRUD panel, halal menu, animations |
| v2.2    | 2026-03-28 | SQLite database, REST API, all pages connected to DB |
| v2.3    | 2026-03-28 | 25 halal+Japanese fusion dishes, footer info, contact saves to DB, git push |

---

## 👤 Author

**Saklain Mahmud**  
GitHub: [@SaklainMahmud](https://github.com/SaklainMahmud)
