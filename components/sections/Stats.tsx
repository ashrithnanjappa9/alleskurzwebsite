'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';

export default function Stats() {
  const { lang } = useLang();
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4 px-5 py-10 md:px-[60px] md:pt-5 md:pb-[60px] mt-8 md:mt-10"
      style={{
        gap: 0,
        borderTop: '1px solid var(--ak-border-strong)',
        borderBottom: '1px solid var(--ak-border-strong)',
      }}
    >
      {COPY.stats.map((s, i) => (
        <div
          key={s.n}
          className={[
            'px-4 py-6 md:px-6 md:py-9 flex flex-col gap-2',
            // Mobile 2-col borders: left border on right-column cells (i % 2 === 1),
            //                       top border on second-row cells (i >= 2).
            i % 2 === 1 ? 'border-l border-ak-border-strong' : '',
            i >= 2 ? 'border-t md:border-t-0 border-ak-border-strong' : '',
            // Desktop 4-col: kill the mobile-only top border on cell 2 (already md:border-t-0),
            //                and add a left border to cells 1,2,3 (i >= 1).
            i >= 1 ? 'md:border-l md:border-ak-border-strong' : '',
            // Cell 2 has no mobile left border (i % 2 === 0) but needs desktop left border (handled above).
          ].join(' ')}
        >
          <div
            className="text-[36px] md:text-[56px]"
            style={{
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
            className="text-[11px] md:text-[12px]"
            style={{
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
