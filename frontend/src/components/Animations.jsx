import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* ── Scroll Progress Bar ── */
export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      if (bar) bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div id="scroll-progress" />;
}

/* ── Splash Screen ── */
export function Splash() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return (
    <div id="splash">
      <div className="splash-arabesque" aria-hidden>
        {['☪', '✦', '❋', '☪', '✦'].map((s, i) => (
          <span key={i} className="splash-star" style={{ animationDelay: `${i * 0.2}s` }}>{s}</span>
        ))}
      </div>
      <div className="splash-logo">ADI ARI HALAL</div>
      <div className="splash-line" />
      <div className="splash-sub">FOOD CORNER</div>
      <div className="splash-tagline">حلال • Authentic • Fresh</div>
    </div>
  );
}

/* ── Custom Cursor Trail ── */
export function CursorTrail() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(animate);
    };

    const enter = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; };
    const leave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };
    const down  = () => ring.classList.add('cursor-ring--click');
    const up    = () => ring.classList.remove('cursor-ring--click');

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);

    animate();
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);

  const base = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 99998,
    borderRadius: '50%',
    opacity: 0,
    transition: 'opacity 0.2s',
    willChange: 'transform',
    top: 0, left: 0,
  };

  return (
    <>
      {/* Inner dot */}
      <div ref={dotRef} style={{ ...base, width: 6, height: 6, background: 'var(--primary)', marginLeft: -3, marginTop: -3 }} />
      {/* Outer ring */}
      <div ref={ringRef} style={{ ...base, width: 30, height: 30, border: '1.5px solid var(--gold)', marginLeft: -15, marginTop: -15, transition: 'opacity 0.2s, transform 0.08s linear, width 0.2s, height 0.2s' }} />
    </>
  );
}

/* ── Page Transition (wraps route content) ── */
export function PageTransition({ children }) {
  const location = useLocation();
  const [key, setKey] = useState(location.key);
  const [cls, setCls] = useState('page-enter');

  useEffect(() => {
    setKey(location.key);
    setCls('');
    const t = setTimeout(() => setCls('page-enter'), 10);
    return () => clearTimeout(t);
  }, [location]);

  return <div key={key} className={cls}>{children}</div>;
}

/* ── Floating Arabic / Halal Decorative Particles ── */
const HALAL_CHARS = ['حلال', '☪', '✦', 'بسم', '❋', '✧', 'الله', '☽', '✿', '❀', '✵', '☽'];
export function KanjiParticles() {
  // stable random values using index as seed
  const particles = HALAL_CHARS.map((k, i) => {
    const pseudo = ((i * 137 + 31) % 100) / 100;
    const pseudo2 = ((i * 79 + 13) % 100) / 100;
    const pseudo3 = ((i * 53 + 7) % 100) / 100;
    return {
      char: k,
      size: 30 + pseudo * 55,
      top: pseudo2 * 100,
      left: pseudo3 * 100,
      delay: i * 0.9,
      duration: 9 + pseudo * 7,
      opacity: 0.025 + pseudo * 0.035,
    };
  });

  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${p.top}%`,
          left: `${p.left}%`,
          fontSize: `${p.size}px`,
          opacity: p.opacity,
          fontFamily: p.char.length > 1 && /[\u0600-\u06FF]/.test(p.char) ? 'serif' : 'var(--font-headline)',
          color: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--gold)' : 'var(--secondary)',
          animation: `floatSlow ${p.duration}s ease-in-out ${p.delay}s infinite`,
          userSelect: 'none',
          lineHeight: 1,
          direction: 'rtl',
        }}>{p.char}</div>
      ))}
    </div>
  );
}

/* ── Sparkle Trail (extra premium animation) ── */
export function SparkleTrail() {
  useEffect(() => {
    const sparkles = [];
    const onMove = (e) => {
      if (Math.random() > 0.3) return;
      const el = document.createElement('div');
      el.className = 'sparkle-dot';
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';
      el.style.width = el.style.height = (4 + Math.random() * 6) + 'px';
      el.style.animationDuration = (0.5 + Math.random() * 0.4) + 's';
      document.body.appendChild(el);
      sparkles.push(el);
      setTimeout(() => { el.remove(); }, 900);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      sparkles.forEach(s => s.remove());
    };
  }, []);
  return null;
}
