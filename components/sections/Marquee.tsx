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
      className="py-9 md:py-[60px]"
      style={{
        overflow: 'hidden',
        borderBottom: '1px solid var(--ak-border)',
      }}
    >
      <div
        className="gap-10 md:gap-[60px]"
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
          animation: 'akMarquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {triple.map((p, i) => (
          <Fragment key={i}>
            <span
              className="text-[36px] md:text-[64px]"
              style={{
                fontWeight: 800,
                letterSpacing: '-.03em',
                color: i % 4 === 1 ? '#E53935' : 'var(--ak-text)',
                opacity: i % 4 === 1 || i % 4 === 0 ? 1 : 0.28,
              }}
            >
              {p}
            </span>
            <span
              className="w-2 h-2 md:w-3 md:h-3"
              style={{
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
