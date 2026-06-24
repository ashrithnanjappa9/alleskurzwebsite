'use client';

import Image from 'next/image';
import { useLang } from '../LangProvider';
import { APP_STORE_URL, PLAY_STORE_URL, COPY } from '@/lib/copy';
import StoreButton from '../StoreButton';

export default function Hero() {
  const { lang } = useLang();
  const shot = lang === 'en' ? '/shots/en-feed-zverev.png' : '/shots/de-feed-finanzamt.png';

  return (
    <header
      style={{ position: 'relative', overflow: 'hidden', padding: '86px 0 96px' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 760,
          height: 760,
          background: 'radial-gradient(circle, var(--ak-red-tint), transparent 62%)',
          pointerEvents: 'none',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="mx-auto px-6 md:px-8"
        style={{ maxWidth: 1240, position: 'relative' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] items-center gap-12 md:gap-14">
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: 'var(--ak-pill-bg)',
                color: 'var(--ak-red)',
                border: '1px solid rgba(229,57,53,.32)',
                borderRadius: 999,
                padding: '7px 14px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ak-red)' }} />
              {COPY.hero.eyebrow[lang]}
            </span>

            <h1
              style={{
                margin: '24px 0 0',
                fontSize: 'clamp(46px, 6.4vw, 86px)',
                fontWeight: 800,
                lineHeight: 0.98,
                letterSpacing: '-.035em',
              }}
            >
              <span style={{ display: 'block' }}>{COPY.hero.titleA[lang]}</span>
              <span style={{ display: 'block', color: 'var(--ak-red)' }}>{COPY.hero.titleB[lang]}</span>
            </h1>

            <p
              style={{
                margin: '26px 0 0',
                fontSize: 'clamp(16px, 1.5vw, 19px)',
                color: 'var(--ak-text-mute)',
                maxWidth: 520,
                lineHeight: 1.55,
                fontWeight: 500,
              }}
            >
              {COPY.hero.sub[lang]}
            </p>

            <div style={{ marginTop: 38, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <StoreButton
                icon="apple"
                lead={COPY.hero.cta1Lead[lang]}
                label="App Store"
                href={APP_STORE_URL}
              />
              <StoreButton
                icon="play"
                lead={COPY.hero.cta2Lead[lang]}
                label="Google Play"
                href={PLAY_STORE_URL}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginTop: 26,
              }}
            >
              <div style={{ display: 'flex' }}>
                {['#E0654E', '#4F9E6A', '#3D7BD9', '#9B59B6'].map((bg, i) => (
                  <span
                    key={bg}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: bg,
                      border: '2px solid var(--ak-bg)',
                      marginLeft: i ? -8 : 0,
                      display: 'inline-block',
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--ak-text-mute)', fontWeight: 500, margin: 0 }}>
                {COPY.hero.trust[lang]}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              className="ak-phone-float"
              style={{
                position: 'relative',
                width: 318,
                borderRadius: 46,
                padding: 9,
                background: 'linear-gradient(155deg, #2a2a2e, #131315 60%, #08080a)',
                boxShadow: 'var(--ak-shadow), 0 0 0 1px rgba(255,255,255,.06) inset',
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 92,
                  height: 26,
                  background: '#000',
                  borderRadius: 999,
                  zIndex: 5,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: 38,
                  overflow: 'hidden',
                  background: '#000',
                  aspectRatio: '946 / 2048',
                }}
              >
                <Image
                  src={shot}
                  alt="alleskurz App"
                  fill
                  sizes="318px"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
