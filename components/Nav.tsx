'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { COPY, type Lang } from '@/lib/copy';
import LogoMark from './LogoMark';

export default function Nav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Close the mobile menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const navItems: Array<{ label: string; href: string }> = [
    { label: COPY.nav.how[lang],      href: '/#how' },
    { label: COPY.nav.stories[lang],  href: '/#stories' },
    { label: COPY.nav.polls[lang],    href: '/#polls' },
    { label: COPY.nav.business[lang], href: '/business' },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 px-5 py-4 md:px-[60px] md:py-[20px]"
      style={{
        background: 'var(--ak-nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--ak-border)',
      }}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}
        >
          <LogoMark size={28} />
          <span className="text-[15px] md:text-[16px]" style={{ fontWeight: 800, letterSpacing: '-.02em' }}>
            alles<span style={{ color: '#E53935' }}>kurz</span>
          </span>
        </Link>

        {/* Center: text links (desktop only) */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              style={{
                color: 'var(--ak-text-mute)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {it.label}
            </Link>
          ))}
        </div>

        {/* Right: DE/EN + Holen (desktop) | DE/EN + hamburger (mobile) */}
        <div className="flex items-center gap-3 md:gap-4">
          <InlineLangPill lang={lang} setLang={setLang} />

          {/* Desktop Holen button */}
          <button
            type="button"
            className="hidden md:inline-flex"
            style={{
              background: '#E53935',
              color: '#fff',
              border: 0,
              borderRadius: 10,
              padding: '10px 18px',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '.01em',
            }}
          >
            {COPY.nav.download[lang]} ↓
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: 'transparent',
              border: '1px solid var(--ak-border-strong)',
              color: 'var(--ak-text)',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {open ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden absolute left-0 right-0 top-full"
          style={{
            background: 'var(--ak-bg-soft)',
            borderBottom: '1px solid var(--ak-border-strong)',
            padding: '12px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {navItems.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--ak-text)',
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 600,
                padding: '14px 4px',
                borderBottom: '1px solid var(--ak-border)',
              }}
            >
              {it.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16,
              background: '#E53935',
              color: '#fff',
              border: 0,
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '.01em',
              width: '100%',
            }}
          >
            {COPY.nav.download[lang]} ↓
          </button>
        </div>
      )}
    </nav>
  );
}

function InlineLangPill({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      style={{
        background: 'rgba(20,20,20,.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 999,
        padding: 2,
        display: 'flex',
        gap: 1,
      }}
    >
      {(['de', 'en'] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            style={{
              background: active ? '#E53935' : 'transparent',
              color: active ? '#fff' : 'rgba(255,255,255,.65)',
              border: 0,
              padding: '4px 10px',
              borderRadius: 999,
              fontFamily: 'inherit',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all .15s ease',
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = 'rgba(255,255,255,.65)';
            }}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
