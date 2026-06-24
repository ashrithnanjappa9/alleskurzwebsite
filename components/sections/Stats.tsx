'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';

export default function Stats() {
  const { lang } = useLang();
  return (
    <section
      style={{
        borderTop: '1px solid var(--ak-hair)',
        borderBottom: '1px solid var(--ak-hair)',
      }}
    >
      <div
        className="mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1240 }}
      >
        {COPY.stats.map((s, i) => {
          const mobileLeft = i % 2 === 1;
          const mobileTop = i >= 2;
          const desktopLeft = i >= 1;
          return (
            <div
              key={s.n}
              className={[
                'py-10 px-5 md:px-7 md:py-[52px]',
                mobileLeft ? 'border-l border-ak-hair' : '',
                mobileTop ? 'border-t border-ak-hair md:border-t-0' : '',
                desktopLeft ? 'md:border-l md:border-ak-hair' : '',
                i === 0 ? 'md:pl-0' : '',
              ].join(' ')}
            >
              <div
                style={{
                  fontSize: 'clamp(40px, 4.4vw, 60px)',
                  fontWeight: 800,
                  color: 'var(--ak-red)',
                  letterSpacing: '-.03em',
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ak-text-faint)',
                }}
              >
                {s.label[lang]}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
