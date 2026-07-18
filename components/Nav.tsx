'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { COPY, type Lang } from '@/lib/copy';

export default function Nav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

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
    { label: COPY.nav.business[lang], href: '/business' },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50"
      style={{
        background: 'var(--ak-nav-bg)',
        backdropFilter: 'saturate(160%) blur(16px)',
        WebkitBackdropFilter: 'saturate(160%) blur(16px)',
        borderBottom: '1px solid var(--ak-hair-soft)',
      }}
    >
      <div
        className="mx-auto flex items-center gap-5 px-6 md:px-8"
        style={{ maxWidth: 1240, height: 72 }}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ak-mark-on-dark.svg"
              alt="alles kurz"
              width={40}
              height={40}
              style={{
                width: 40,
                height: 40,
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>
            alles<span style={{ color: 'var(--ak-red)' }}>kurz</span>
          </span>
        </Link>

        <div style={{ flex: 1 }} />

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              style={{
                color: 'var(--ak-text-mute)',
                fontSize: 14.5,
                fontWeight: 600,
                letterSpacing: '-.01em',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ak-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ak-text-mute)')}
            >
              {it.label}
            </Link>
          ))}
        </div>

        <LangPill lang={lang} setLang={setLang} />

        <Link
          href="/#download"
          className="hidden sm:inline-flex"
          style={{
            background: 'var(--ak-red)',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14.5,
            letterSpacing: '-.01em',
            padding: '11px 20px',
            borderRadius: 999,
            alignItems: 'center',
            gap: 8,
            whiteSpace: 'nowrap',
            transition: 'background .18s, transform .12s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ak-red-press)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ak-red)')}
        >
          {COPY.nav.download[lang]}
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
          style={{
            width: 38,
            height: 38,
            borderRadius: 999,
            border: '1px solid var(--ak-hair)',
            background: 'var(--ak-surface)',
            color: 'var(--ak-text-mute)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden absolute left-0 right-0 top-full"
          style={{
            background: 'var(--ak-bg-soft)',
            borderBottom: '1px solid var(--ak-hair)',
            padding: '12px 24px 22px',
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
                fontSize: 16,
                fontWeight: 600,
                padding: '14px 4px',
                borderBottom: '1px solid var(--ak-hair-soft)',
              }}
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16,
              background: 'var(--ak-red)',
              color: '#fff',
              borderRadius: 999,
              padding: '14px 18px',
              fontSize: 15,
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {COPY.nav.download[lang]}
          </Link>
        </div>
      )}
    </nav>
  );
}

function LangPill({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--ak-surface)',
        border: '1px solid var(--ak-hair)',
        borderRadius: 999,
        padding: 3,
        gap: 2,
      }}
    >
      {(['de', 'en'] as const).map((l) => {
        const on = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={on}
            style={{
              background: on ? 'var(--ak-text)' : 'transparent',
              color: on ? 'var(--ak-bg)' : 'var(--ak-text-faint)',
              border: 0,
              padding: '6px 12px',
              borderRadius: 999,
              fontFamily: 'inherit',
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: '.03em',
              cursor: 'pointer',
              transition: 'all .18s',
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
