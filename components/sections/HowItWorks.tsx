'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section
      id="how"
      className="py-[76px] md:py-[104px]"
    >
      <div className="mx-auto px-6 md:px-8" style={{ maxWidth: 1240 }}>
        <div style={{ maxWidth: 720 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--ak-red)',
            }}
          >
            {COPY.how.eyebrow[lang]}
          </div>
          <h2
            style={{
              margin: '16px 0 0',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-.03em',
              lineHeight: 1.02,
            }}
          >
            {COPY.how.title[lang]}
          </h2>
          <p
            style={{
              margin: '18px 0 0',
              fontSize: 17,
              color: 'var(--ak-text-mute)',
              maxWidth: 560,
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            {COPY.how.sub[lang]}
          </p>
        </div>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid var(--ak-hair)' }}
        >
          {COPY.how.steps.map((s, i) => (
            <div
              key={s.n}
              className={[
                'py-9',
                i === 0 ? 'md:pr-8' : 'md:px-8',
                'border-t md:border-t-0',
                'md:border-l border-ak-hair',
                i === 0 ? 'md:border-l-0 border-t-0' : '',
              ].join(' ')}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: 13,
                  fontWeight: 800,
                  color: 'var(--ak-red)',
                  fontVariantNumeric: 'tabular-nums',
                  letterSpacing: '.04em',
                }}
              >
                {s.n}
              </span>
              <div
                style={{
                  width: 28,
                  height: 3,
                  background: 'var(--ak-red)',
                  borderRadius: 2,
                  margin: '18px 0 20px',
                }}
              />
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '-.02em',
                }}
              >
                {s.title[lang]}
              </h3>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 14.5,
                  color: 'var(--ak-text-mute)',
                  lineHeight: 1.55,
                  fontWeight: 500,
                }}
              >
                {s.body[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
