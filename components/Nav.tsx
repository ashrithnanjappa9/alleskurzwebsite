'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';
import { COPY } from '@/lib/copy';
import LogoMark from './LogoMark';

export default function Nav() {
  const { lang } = useLang();
  const navItems: Array<{ label: string; href: string }> = [
    { label: COPY.nav.how[lang],      href: '/#how' },
    { label: COPY.nav.stories[lang],  href: '/#stories' },
    { label: COPY.nav.polls[lang],    href: '/#polls' },
    // CHANGE 6 — quiet text link, identical style to the others.
    { label: COPY.nav.business[lang], href: '/business' },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '20px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--ak-nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--ak-border)',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <LogoMark size={28} />
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-.02em' }}>
          alles<span style={{ color: '#E53935' }}>kurz</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
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

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button
          type="button"
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
      </div>
    </nav>
  );
}
