'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';
import SectionHeader from '../SectionHeader';

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section
      id="how"
      className="px-5 py-20 md:px-[60px] md:py-[120px]"
    >
      <SectionHeader
        eyebrow={COPY.how.eyebrow[lang]}
        title={COPY.how.title[lang]}
        sub={COPY.how.sub[lang]}
      />
      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
      className="relative px-6 py-8 md:px-[30px] md:py-[36px] md:pb-10 min-h-[220px] md:min-h-[320px]"
      style={{
        background: 'var(--ak-surface)',
        border: '1px solid var(--ak-border)',
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        className="text-[140px] md:text-[220px]"
        style={{
          position: 'absolute',
          top: -20,
          right: -10,
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
        className="text-[22px] md:text-[26px] mt-5 md:mt-6 mb-3"
        style={{
          position: 'relative',
          fontWeight: 800,
          letterSpacing: '-.02em',
          lineHeight: 1.15,
          color: 'var(--ak-text)',
        }}
      >
        {title}
      </h3>
      <p
        className="text-[14px] md:text-[14.5px]"
        style={{
          position: 'relative',
          margin: 0,
          color: 'var(--ak-text-mute)',
          lineHeight: 1.6,
          textWrap: 'pretty',
        }}
      >
        {body}
      </p>
    </div>
  );
}
