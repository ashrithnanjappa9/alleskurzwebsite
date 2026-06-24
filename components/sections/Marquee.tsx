'use client';

import { Fragment } from 'react';
import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';

export default function Marquee() {
  const { lang } = useLang();
  const phrases = COPY.marquee[lang];
  const loop = [...phrases, ...phrases, ...phrases, ...phrases];

  const colorFor = (i: number) => {
    const mod = i % 3;
    if (mod === 0) return 'var(--ak-text)';
    if (mod === 1) return 'var(--ak-red)';
    return 'var(--ak-text-faint)';
  };

  return (
    <section
      aria-hidden
      style={{
        padding: '46px 0',
        overflow: 'hidden',
        borderBottom: '1px solid var(--ak-hair)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'akMarquee 28s linear infinite',
          willChange: 'transform',
        }}
      >
        {loop.map((phrase, i) => (
          <Fragment key={i}>
            <span
              style={{
                fontSize: 'clamp(40px, 5.6vw, 76px)',
                fontWeight: 800,
                letterSpacing: '-.035em',
                padding: '0 8px',
                color: colorFor(i),
              }}
            >
              {phrase}
            </span>
            <span
              style={{
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: 'var(--ak-red)',
                margin: '0 38px',
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
