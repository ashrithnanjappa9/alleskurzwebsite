'use client';

import { Fragment } from 'react';
import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';

export default function Marquee() {
  const { lang } = useLang();
  const phrases = COPY.marquee[lang];
  const triple = [...phrases, ...phrases, ...phrases];
  return (
    <div
      style={{
        padding: '60px 0',
        overflow: 'hidden',
        borderBottom: '1px solid var(--ak-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
          animation: 'akMarquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {triple.map((p, i) => (
          <Fragment key={i}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: '-.03em',
                color: i % 4 === 1 ? '#E53935' : 'var(--ak-text)',
                opacity: i % 4 === 1 || i % 4 === 0 ? 1 : 0.28,
              }}
            >
              {p}
            </span>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#E53935',
                opacity: 0.6,
                flexShrink: 0,
              }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
