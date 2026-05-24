'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';
import StoreButton from '../StoreButton';

export default function FinalCTA() {
  const { lang } = useLang();
  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 60px',
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
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 520,
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

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
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
          style={{
            margin: '18px 0 18px',
            fontSize: 72,
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
          style={{
            margin: '0 auto',
            fontSize: 18,
            color: 'var(--ak-text-mute)',
            maxWidth: 520,
            lineHeight: 1.55,
          }}
        >
          {COPY.finalCTA.sub[lang]}
        </p>
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <StoreButton
            icon="apple"
            lead={COPY.hero.cta1Lead[lang]}
            label="App Store"
          />
          <StoreButton
            icon="play"
            lead={COPY.hero.cta2Lead[lang]}
            label="Google Play"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
}
