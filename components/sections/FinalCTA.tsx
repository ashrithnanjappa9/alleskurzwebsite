'use client';

import { useLang } from '../LangProvider';
import { APP_STORE_URL, PLAY_STORE_URL, COPY } from '@/lib/copy';
import StoreButton from '../StoreButton';

export default function FinalCTA() {
  const { lang } = useLang();
  return (
    <section
      id="download"
      style={{
        background: 'var(--ak-red)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '120px 0',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -48%)',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 700,
          fontSize: '60vh',
          lineHeight: 1,
          color: 'rgba(255,255,255,.07)',
          pointerEvents: 'none',
          userSelect: 'none',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        60
      </div>

      <div
        className="mx-auto px-6 md:px-8"
        style={{ maxWidth: 1240, position: 'relative', zIndex: 2 }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.78)',
          }}
        >
          {COPY.finalCTA.kicker[lang]}
        </div>
        <h2
          style={{
            margin: '18px 0 0',
            fontSize: 'clamp(46px, 7vw, 100px)',
            fontWeight: 800,
            letterSpacing: '-.04em',
            lineHeight: 0.96,
          }}
        >
          {COPY.finalCTA.title[lang]}
        </h2>
        <p
          style={{
            margin: '22px auto 0',
            fontSize: 'clamp(17px, 1.8vw, 21px)',
            color: 'rgba(255,255,255,.92)',
            fontWeight: 600,
          }}
        >
          {COPY.finalCTA.sub[lang]}
        </p>
        <p
          style={{
            marginTop: 8,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '.04em',
            color: 'rgba(255,255,255,.66)',
          }}
        >
          {COPY.finalCTA.tag[lang]}
        </p>
        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 44,
          }}
        >
          <StoreButton
            icon="apple"
            lead={COPY.hero.cta1Lead[lang]}
            label="App Store"
            href={APP_STORE_URL}
            onRed
          />
          <StoreButton
            icon="play"
            lead={COPY.hero.cta2Lead[lang]}
            label="Google Play"
            href={PLAY_STORE_URL}
            onRed
          />
        </div>
      </div>
    </section>
  );
}
