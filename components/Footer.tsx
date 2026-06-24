'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-[40px]">
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <Image
                src="/ak-icon.png"
                alt="alleskurz"
                width={34}
                height={34}
                style={{ borderRadius: 9 }}
              />
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>
                alles<span style={{ color: 'var(--ak-red)' }}>kurz</span>
              </span>
            </Link>
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                color: 'var(--ak-text-mute)',
                maxWidth: 280,
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              {COPY.footer.blurb[lang]}
            </p>
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
                return it.href ? (
                  <Link key={it.label.de} href={it.href} style={style}>
                    {it.label[lang]}
                  </Link>
                ) : (
                  <a key={it.label.de} href="#" style={style}>
                    {it.label[lang]}
                  </a>
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
