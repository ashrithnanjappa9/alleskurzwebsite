'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';
import { COPY } from '@/lib/copy';

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer
      style={{
        background: 'var(--ak-bg)',
        borderTop: '1px solid var(--ak-hair)',
        padding: '76px 0 40px',
      }}
    >
      <div className="mx-auto px-6 md:px-8" style={{ maxWidth: 1240 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-[40px]">
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                <picture>
                  <source srcSet="/ak-mark-on-light.svg" media="(prefers-color-scheme: light)" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ak-mark-on-dark.svg"
                    alt="alleskurz"
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
                </picture>
              </div>
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>
                alles<span style={{ color: 'var(--ak-red)' }}>kurz</span>
              </span>
            </Link>
            {(() => {
              const parts = splitLastSentence(COPY.footer.blurb[lang]);
              const pStyle = {
                fontSize: 14,
                color: 'var(--ak-text-mute)',
                maxWidth: 280,
                lineHeight: 1.6,
                fontWeight: 500,
              } as const;
              return (
                <>
                  <p style={{ ...pStyle, marginTop: 18 }}>{parts[0]}</p>
                  {parts[1] && <p style={{ ...pStyle, marginTop: 6 }}>{parts[1]}</p>}
                </>
              );
            })()}
          </div>

          {COPY.footer.columns.map((col) => (
            <div key={col.heading.de}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ak-text-faint)',
                  marginBottom: 18,
                }}
              >
                {col.heading[lang]}
              </h4>
              {col.items.map((it) => {
                const style = {
                  display: 'block',
                  fontSize: 14.5,
                  color: 'var(--ak-text-mute)',
                  marginBottom: 12,
                  fontWeight: 500,
                  transition: 'color .18s',
                } as const;
                if (!it.href) {
                  return (
                    <a key={it.label.de} href="#" style={style}>
                      {it.label[lang]}
                    </a>
                  );
                }
                if (/^https?:\/\//.test(it.href)) {
                  return (
                    <a
                      key={it.label.de}
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={style}
                    >
                      {it.label[lang]}
                    </a>
                  );
                }
                return (
                  <Link key={it.label.de} href={it.href} style={style}>
                    {it.label[lang]}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          style={{
            marginTop: 60,
            paddingTop: 26,
            borderTop: '1px solid var(--ak-hair)',
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--ak-text-faint)', fontWeight: 500 }}>
            {COPY.footer.rights[lang]}
          </p>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" aria-label="X" style={socialLinkStyle}>X</a>
            <a href="#" aria-label="Instagram" style={socialLinkStyle}>Instagram</a>
            <a href="#" aria-label="LinkedIn" style={socialLinkStyle}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinkStyle = {
  fontSize: 13,
  color: 'var(--ak-text-mute)',
  fontWeight: 600,
  transition: 'color .18s',
} as const;

function splitLastSentence(s: string): [string, string?] {
  const trimmed = s.trim().replace(/\s+$/, '');
  const end = trimmed.endsWith('.') ? trimmed.slice(0, -1) : trimmed;
  const idx = end.lastIndexOf('. ');
  if (idx === -1) return [trimmed];
  const head = trimmed.slice(0, idx + 1);
  const tail = trimmed.slice(idx + 2);
  return [head, tail];
}
