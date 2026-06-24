'use client';

import { useLang } from '../LangProvider';
import { APP_STORE_URL, PLAY_STORE_URL, COPY } from '@/lib/copy';
import StoreButton from '../StoreButton';

export default function FinalCTA() {
  const { lang } = useLang();
  return (
    <section
      className="px-5 py-24 md:px-[60px] md:py-[120px]"
      style={{
        position: 'relative',
        textAlign: 'center',
        background:
          'radial-gradient(ellipse at center, rgba(229,57,53,.16) 0%, transparent 60%), var(--ak-bg)',
        borderTop: '1px solid var(--ak-border)',
        overflow: 'hidden',
      }}
    >
      {/* Giant ghost "60" */}
      <div
        aria-hidden
        className="text-[260px] sm:text-[360px] md:text-[520px]"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 800,
          color: 'var(--ak-ghost-sixty)',
          letterSpacing: '-.08em',
          lineHeight: 1,
          pointerEvents: 'none',
          fontVariantNumeric: 'tabular-nums',
          userSelect: 'none',
        }}
      >
        60
      </div>

      <div className="max-w-[720px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '.22em',
            color: '#E53935',
            textTransform: 'uppercase',
          }}
        >
          {COPY.finalCTA.kicker[lang]}
        </div>
        <h2
          className="text-[44px] sm:text-[56px] md:text-[72px] my-4 md:my-[18px]"
          style={{
            fontWeight: 800,
            letterSpacing: '-.035em',
            lineHeight: 0.98,
            color: 'var(--ak-text)',
          }}
        >
          {COPY.finalCTA.title[lang]}
        </h2>
        {/* CHANGE 2 — replaced sub copy lives in COPY.finalCTA.sub */}
        <p
          className="text-[16px] md:text-[18px]"
          style={{
            margin: '0 auto',
            color: 'var(--ak-text-mute)',
            maxWidth: 520,
            lineHeight: 1.55,
          }}
        >
          {COPY.finalCTA.sub[lang]}
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <StoreButton
            icon="apple"
            lead={COPY.hero.cta1Lead[lang]}
            label="App Store"
            href={APP_STORE_URL}
            fullWidthMobile
          />
          <StoreButton
            icon="play"
            lead={COPY.hero.cta2Lead[lang]}
            label="Google Play"
            href={PLAY_STORE_URL}
            variant="outline"
            fullWidthMobile
          />
        </div>
      </div>
    </section>
  );
}
