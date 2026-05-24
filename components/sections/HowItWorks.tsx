'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';
import SectionHeader from '../SectionHeader';

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section id="how" style={{ padding: '120px 60px' }}>
      <SectionHeader
        eyebrow={COPY.how.eyebrow[lang]}
        title={COPY.how.title[lang]}
        sub={COPY.how.sub[lang]}
      />
      <div
        style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
      >
        {COPY.how.steps.map((s) => (
          <HowCard key={s.n} n={s.n} title={s.title[lang]} body={s.body[lang]} />
        ))}
      </div>
    </section>
  );
}

function HowCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '36px 30px 40px',
        background: 'var(--ak-surface)',
        border: '1px solid var(--ak-border)',
        borderRadius: 20,
        overflow: 'hidden',
        minHeight: 320,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -20,
          right: -10,
          fontSize: 220,
          fontWeight: 800,
          lineHeight: 1,
          color: 'var(--ak-howcard-numbg)',
          letterSpacing: '-.06em',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {n}
      </div>
      <div
        style={{
          display: 'inline-flex',
          padding: '6px 12px',
          borderRadius: 999,
          background: 'rgba(229,57,53,.13)',
          color: '#E53935',
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '.16em',
        }}
      >
        {n}
      </div>
      <h3
        style={{
          position: 'relative',
          margin: '24px 0 14px',
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: '-.02em',
          lineHeight: 1.15,
          color: 'var(--ak-text)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          position: 'relative',
          margin: 0,
          color: 'var(--ak-text-mute)',
          fontSize: 14.5,
          lineHeight: 1.6,
          textWrap: 'pretty',
        }}
      >
        {body}
      </p>
    </div>
  );
}
