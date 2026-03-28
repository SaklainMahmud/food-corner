import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--stone-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: 'var(--sp-8)', position: 'relative', overflow: 'hidden' }}>
      {/* Kanji watermark */}
      <div style={{ position: 'absolute', fontSize: '50vw', fontFamily: 'var(--font-headline)', color: 'rgba(255,255,255,0.02)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>迷</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(6rem, 20vw, 16rem)', color: 'var(--primary)', lineHeight: 1, marginBottom: 'var(--sp-4)' }}>404</div>
        <p className="headline-sm" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.4em', fontFamily: 'var(--font-headline)', marginBottom: 'var(--sp-6)' }}>ページが見つかりません</p>
        <div style={{ width: '3rem', height: '1px', background: 'var(--gold-dim)', margin: '0 auto var(--sp-8)' }}></div>
        <p className="body-md" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto var(--sp-12)' }}>
          The page you are looking for seems to have wandered off the path. Let us guide you back.
        </p>
        <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Return Home</Link>
          <Link to="/menu" className="btn btn-ghost">View Menu</Link>
        </div>
      </div>
    </div>
  );
}
