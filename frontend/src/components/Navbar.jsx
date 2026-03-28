import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const toggleNav = () => {
    document.body.classList.toggle('nav-open');
  };

  return (
    <nav id="site-nav" className="glass">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">ADI ARI HALAL</Link>

        <ul className="nav-links">
          <li><Link to="/"            className={path === '/'            ? 'active' : ''}>Home</Link></li>
          <li><Link to="/menu"        className={path === '/menu'        ? 'active' : ''}>Menu</Link></li>
          <li><Link to="/about"       className={path === '/about'       ? 'active' : ''}>About</Link></li>
          <li><Link to="/order"       className={path === '/order'       ? 'active' : ''}>Order</Link></li>
          <li><Link to="/reservation" className={path === '/reservation' ? 'active' : ''}>Reserve</Link></li>
          <li><Link to="/contact"     className={path === '/contact'     ? 'active' : ''}>Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/account" aria-label="Account" title="My Account">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link to="/order" style={{ position: 'relative' }} aria-label="Cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/admin" aria-label="Admin Panel" title="Admin" style={{ fontSize: '1rem' }}>
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </Link>
          <button className="nav-toggle" aria-label="Toggle Menu" onClick={toggleNav}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
