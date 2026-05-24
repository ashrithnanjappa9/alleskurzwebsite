'use client';

import { useLang } from '../LangProvider';
import { COPY } from '@/lib/copy';
import PhoneSwipeDeck from '../PhoneSwipeDeck';
import StoreButton from '../StoreButton';

export default function Hero() {
  const { lang } = useLang();
  return (
    <section
      className="relative px-5 pt-8 pb-10 md:px-[60px] md:pt-20 md:pb-[60px] grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-10 md:gap-[60px] items-center overflow-hidden"
    >
      {/* Background flares — smaller on mobile so they don't push layout width */}
      <div
        aria-hidden
        className="hidden md:block"
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
        className="hidden md:block"
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
      {/* Compact mobile-only flare */}
      <div
        aria-hidden
        className="md:hidden"
        style={{
          position: 'absolute',
          top: -50,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, var(--ak-flare-big) 0%, var(--ak-flare-edge) 30%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Left: copy */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="text-[10px] md:text-[11px]"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 12px 6px 8px',
            borderRadius: 999,
            background: 'var(--ak-pill-bg)',
            border: '1px solid rgba(229,57,53,.33)',
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
          className="text-[40px] sm:text-[52px] md:text-[80px] mt-5 md:mt-6"
          style={{
            margin: 0,
            marginTop: undefined,
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
          className="text-[15px] md:text-[18px] mt-6 md:mt-7"
          style={{
            margin: 0,
            marginTop: undefined,
            lineHeight: 1.55,
            color: 'var(--ak-text-mute)',
            maxWidth: 520,
            textWrap: 'pretty',
          }}
        >
          {COPY.hero.sub[lang]}
        </p>

        {/* CTAs */}
        <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <StoreButton
            icon="apple"
            lead={COPY.hero.cta1Lead[lang]}
            label="App Store"
            fullWidthMobile
          />
          <StoreButton
            icon="play"
            lead={COPY.hero.cta2Lead[lang]}
            label="Google Play"
            variant="outline"
            fullWidthMobile
          />
        </div>

        {/* Trust line — CHANGE 3 applied */}
        <div
          className="text-[12px] md:text-[13px] mt-6 md:mt-7"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            color: 'var(--ak-text-dim)',
          }}
        >
          <div style={{ display: 'flex', flexShrink: 0 }}>
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

      {/* Right: phone — scaled on mobile to fit narrow screens */}
      <div
        className="flex justify-center scale-[.78] origin-top md:scale-100 -mb-32 md:mb-0"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <PhoneSwipeDeck />
      </div>
    </section>
  );
}
