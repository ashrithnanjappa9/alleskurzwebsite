'use client';

import { useLang } from './LangProvider';
import { COPY } from '@/lib/copy';
import LogoMark from './LogoMark';

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer
      style={{
        padding: '60px 60px 40px',
        borderTop: '1px solid var(--ak-border-strong)',
        background: 'var(--ak-bg-deep)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 60,
          marginBottom: 48,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoMark size={36} />
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>
              alles<span style={{ color: '#E53935' }}>kurz</span>
            </div>
          </div>
          <p
            style={{
              margin: '16px 0 0',
              maxWidth: 320,
              fontSize: 14,
              color: 'var(--ak-text-dim)',
              lineHeight: 1.6,
            }}
          >
            {COPY.footer.blurb[lang]}
          </p>
        </div>

        {COPY.footer.columns.map((col) => (
          <div key={col.heading.de}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.16em',
                color: 'var(--ak-text-dim)',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              {col.heading[lang]}
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {col.items.map((it) => (
                <li key={it.de}>
                  <a
                    href="#"
                    style={{
                      color: 'var(--ak-text-mute)',
                      textDecoration: 'none',
                      fontSize: 14,
                    }}
                  >
                    {it[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          paddingTop: 24,
          borderTop: '1px solid var(--ak-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: 'var(--ak-text-faint)',
        }}
      >
        <span>{COPY.footer.rights[lang]}</span>
        <span style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>𝕏</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
