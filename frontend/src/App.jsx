import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Splash, ScrollProgress, CursorTrail, KanjiParticles, PageTransition, SparkleTrail } from './components/Animations';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  // Update page title
  useEffect(() => {
    const titles = {
      '/':           'ADI ARI HALAL FOOD CORNER | Authentic Halal Cuisine',
      '/menu':       'Our Menu | ADI ARI HALAL FOOD CORNER',
      '/order':      'Order Online | ADI ARI HALAL FOOD CORNER',
      '/reservation':'Reserve a Table | ADI ARI HALAL FOOD CORNER',
      '/about':      'About Us | ADI ARI HALAL FOOD CORNER',
      '/contact':    'Contact | ADI ARI HALAL FOOD CORNER',
      '/account':    'My Account | ADI ARI HALAL FOOD CORNER',
      '/admin':      'Admin Panel | ADI ARI HALAL FOOD CORNER',
    };
    document.title = titles[location.pathname] || 'ADI ARI HALAL FOOD CORNER';
  }, [location]);

  // Close mobile nav on route change
  useEffect(() => {
    document.body.classList.remove('nav-open');
  }, [location]);

  // Scroll-based fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    // Re-observe after route change
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location]);

  // Nav shadow on scroll
  useEffect(() => {
    const nav = document.getElementById('site-nav');
    const onScroll = () => {
      if (!nav) return;
      nav.style.boxShadow = window.scrollY > 10
        ? '0 2px 24px rgba(0,0,0,0.08)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Splash />
      <ScrollProgress />
      <CursorTrail />
      <KanjiParticles />
      <SparkleTrail />
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/menu"       element={<Menu />} />
            <Route path="/order"      element={<Order />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/about"      element={<About />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="/account"    element={<Account />} />
            <Route path="/admin"      element={<Admin />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
