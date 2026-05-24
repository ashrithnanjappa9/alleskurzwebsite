'use client';

import { useLang } from './LangProvider';
import { COPY } from '@/lib/copy';
import LogoMark from './LogoMark';

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer
      className="px-5 pt-10 pb-8 md:px-[60px] md:pt-[60px] md:pb-10"
      style={{
        borderTop: '1px solid var(--ak-border-strong)',
        background: 'var(--ak-bg-deep)',
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 md:gap-[60px] mb-10 md:mb-12">
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
        className="pt-6 flex flex-col gap-3 md:flex-row md:justify-between items-start md:items-center"
        style={{
          borderTop: '1px solid var(--ak-border)',
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
