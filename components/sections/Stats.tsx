'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';

export default function Stats() {
  const { lang } = useLang();
  return (
    <section
      style={{
        padding: '20px 60px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
        borderTop: '1px solid var(--ak-border-strong)',
        borderBottom: '1px solid var(--ak-border-strong)',
        marginTop: 40,
      }}
    >
      {COPY.stats.map((s, i) => (
        <div
          key={s.n}
          style={{
            padding: '36px 24px',
            borderLeft: i ? '1px solid var(--ak-border-strong)' : 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: '#E53935',
              letterSpacing: '-.04em',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {s.n}
          </div>
          <div
            style={{
              fontSize: 12,
              color: 'var(--ak-text-dim)',
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {s.label[lang]}
          </div>
        </div>
      ))}
    </section>
  );
}
