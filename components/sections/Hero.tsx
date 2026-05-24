'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';
import PhoneSwipeDeck from '../PhoneSwipeDeck';
import StoreButton from '../StoreButton';

export default function Hero() {
  const { lang } = useLang();
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 60px 60px',
        display: 'grid',
        gridTemplateColumns: '1.05fr .95fr',
        gap: 60,
        alignItems: 'center',
      }}
    >
      {/* Background flares */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -120,
          right: -160,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, var(--ak-flare-big) 0%, var(--ak-flare-edge) 30%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -200,
          left: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, var(--ak-flare-small) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Left: copy */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 12px 6px 8px',
            borderRadius: 999,
            background: 'var(--ak-pill-bg)',
            border: '1px solid rgba(229,57,53,.33)',
            fontSize: 11,
            fontWeight: 700,
            color: '#E53935',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#E53935',
              boxShadow: '0 0 12px #E53935',
            }}
          />
          {COPY.hero.eyebrow[lang]}
        </div>

        <h1
          style={{
            margin: '24px 0 0',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: '-.035em',
          }}
        >
          <span style={{ display: 'block' }}>{COPY.hero.titleA[lang]}</span>
          <span style={{ display: 'block', color: '#E53935' }}>
            {COPY.hero.titleB[lang]}
          </span>
        </h1>

        <p
          style={{
            margin: '28px 0 0',
            fontSize: 18,
            lineHeight: 1.55,
            color: 'var(--ak-text-mute)',
            maxWidth: 520,
            textWrap: 'pretty',
          }}
        >
          {COPY.hero.sub[lang]}
        </p>

        {/* CTAs */}
        <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <StoreButton
            icon="apple"
            lead={COPY.hero.cta1Lead[lang]}
            label={lang === 'de' ? 'App Store' : 'App Store'}
          />
          <StoreButton
            icon="play"
            lead={COPY.hero.cta2Lead[lang]}
            label="Google Play"
            variant="outline"
          />
        </div>

        {/* Trust line — CHANGE 3 applied (no fabricated reader count). */}
        <div
          style={{
            marginTop: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 13,
            color: 'var(--ak-text-dim)',
          }}
        >
          <div style={{ display: 'flex' }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, hsl(${i * 87},60%,55%), hsl(${i * 87 + 30},60%,40%))`,
                  border: '2px solid var(--ak-avatar-ring)',
                  marginLeft: i ? -8 : 0,
                }}
              />
            ))}
          </div>
          <span>{COPY.hero.trust[lang]}</span>
        </div>
      </div>

      {/* Right: phone */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PhoneSwipeDeck />
      </div>
    </section>
  );
}
