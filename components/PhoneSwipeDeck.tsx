'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { CATS, type CatKey, type Lang } from '@/lib/copy';
import { SAMPLE_ARTICLES, type SampleArticle } from '@/lib/sample-articles';
import { fetchLatestNews, formatRelativeTime, type Article } from '@/lib/news';

const WIDTH = 340;
const HEIGHT = 700;
const AUTOPLAY_MS = 4800;

type Card = {
  id: string;
  imageUrl: string;
  cat: CatKey | null;
  source: string;
  time: string;
  title: string;
  summary: string;
};

function cardFromSample(a: SampleArticle, lang: Lang): Card {
  return {
    id: a.id,
    imageUrl: a.imageUrl,
    cat: a.cat,
    source: a.source,
    time: a.time[lang],
    title: a.title[lang],
    summary: a.summary[lang],
  };
}

function cardFromArticle(a: Article, lang: Lang, fallbackImage: string): Card {
  return {
    id: a.link || a.title,
    imageUrl: a.imageUrl || fallbackImage,
    cat: a.cat,
    source: a.source,
    time: formatRelativeTime(a.pubDate, lang),
    title: a.title,
    summary: a.summary,
  };
}

export default function PhoneSwipeDeck() {
  const { lang } = useLang();
  const [cards, setCards] = useState<Card[]>(() =>
    SAMPLE_ARTICLES.map((a) => cardFromSample(a, lang)),
  );
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const total = cards.length;

  useEffect(() => {
    let cancelled = false;
    fetchLatestNews('de')
      .then((arts) => {
        if (cancelled) return;
        if (!arts || arts.length === 0) return;
        const live = arts.slice(0, 4).map((a, i) =>
          cardFromArticle(a, lang, SAMPLE_ARTICLES[i % SAMPLE_ARTICLES.length].imageUrl),
        );
        if (live.length > 0) {
          setCards(live);
          setIdx(0);
        }
      })
      .catch(() => {
        // keep sample fallback already in state
      });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, total]);

  const onDown = (clientX: number) => {
    startX.current = clientX;
    setPaused(true);
  };
  const onUp = (clientX: number) => {
    if (startX.current == null) return;
    const dx = clientX - startX.current;
    if (Math.abs(dx) > 30) {
      setIdx((i) => (dx < 0 ? (i + 1) % total : (i - 1 + total) % total));
    }
    startX.current = null;
    setTimeout(() => setPaused(false), 3000);
  };

  return (
    <div
      style={{ position: 'relative', width: WIDTH, height: HEIGHT + 70 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <PhoneFrame>
        <div
          onMouseDown={(e) => onDown(e.clientX)}
          onMouseUp={(e) => onUp(e.clientX)}
          onTouchStart={(e) => onDown(e.touches[0].clientX)}
          onTouchEnd={(e) => onUp(e.changedTouches[0].clientX)}
          style={{
            position: 'absolute',
            inset: 0,
            cursor: 'grab',
            userSelect: 'none',
          }}
        >
          {cards.map((c, i) => (
            <div
              key={c.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: i === idx ? 1 : 0,
                transform:
                  i === idx
                    ? 'translateY(0)'
                    : i < idx
                    ? 'translateY(-8%)'
                    : 'translateY(8%)',
                transition: 'opacity .5s ease, transform .6s cubic-bezier(.2,.7,.2,1)',
                pointerEvents: i === idx ? 'auto' : 'none',
              }}
            >
              <HeroSwipeCard card={c} lang={lang} />
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            top: 44,
            left: 0,
            right: 0,
            padding: '0 16px',
            zIndex: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'none',
          }}
        >
          <ChromePill>⌕</ChromePill>
          <ChromePill>♡</ChromePill>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 14,
            display: 'flex',
            justifyContent: 'center',
            gap: 5,
            zIndex: 25,
          }}
        >
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === idx ? 16 : 5,
                height: 4,
                borderRadius: 2,
                background: i === idx ? '#E53935' : 'rgba(255,255,255,.3)',
                border: 0,
                padding: 0,
                cursor: 'pointer',
                transition: 'width .25s ease, background .25s ease',
              }}
            />
          ))}
        </div>
      </PhoneFrame>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--ak-text-faint)',
          letterSpacing: '.1em',
          textTransform: 'uppercase',
        }}
      >
        {lang === 'de' ? '← Wischen oder antippen →' : '← Swipe or tap →'}
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        width: WIDTH,
        height: HEIGHT,
        background: '#1A1A1A',
        borderRadius: 44,
        padding: 10,
        boxShadow:
          '0 50px 100px -20px rgba(0,0,0,.7), 0 30px 60px -30px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.06) inset',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: 36,
          overflow: 'hidden',
          background: '#0D0D0D',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 30,
            padding: '8px 22px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 12,
            fontWeight: 700,
            color: '#fff',
            zIndex: 30,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 10 }}>●●●</span>
            <span style={{ fontSize: 10 }}>5G</span>
            <span
              style={{
                display: 'inline-block',
                width: 22,
                height: 11,
                border: '1.5px solid #fff',
                borderRadius: 3,
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 1,
                  background: '#fff',
                  borderRadius: 1,
                }}
              />
            </span>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 110,
            height: 28,
            background: '#000',
            borderRadius: 14,
            zIndex: 40,
          }}
        />
        {children}
      </div>
    </div>
  );
}

function ChromePill({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: 999,
        background: 'rgba(0,0,0,.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,.7)',
        fontSize: 11,
      }}
    >
      {children}
    </div>
  );
}

function HeroSwipeCard({ card, lang }: { card: Card; lang: Lang }) {
  const cat = card.cat ? CATS[card.cat] : null;
  const accent = cat?.color ?? '#E53935';
  const catLabel = cat ? cat[lang] : lang === 'de' ? 'News' : 'News';

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#0D0D0D',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          height: '38%',
          background: `linear-gradient(140deg, ${accent}, #1a1a1a 65%)`,
          overflow: 'hidden',
        }}
      >
        {/* Plain <img> sidesteps next/image domain config for arbitrary publisher CDNs. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.imageUrl}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(.85) contrast(1.05)',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -1,
            height: 50,
            background: 'linear-gradient(180deg, rgba(13,13,13,0), #0D0D0D 92%)',
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          padding: '14px 18px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 11,
          position: 'relative',
        }}
      >
        <div
          style={{
            alignSelf: 'flex-start',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 9px 4px 7px',
            borderRadius: 999,
            background: accent + '26',
            border: `1px solid ${accent}`,
            color: accent,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '.06em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: accent,
            }}
          />
          {catLabel}
        </div>

        <h2
          style={{
            margin: 0,
            fontWeight: 800,
            color: '#fff',
            fontSize: 18,
            lineHeight: 1.12,
            letterSpacing: '-.02em',
            textWrap: 'pretty',
          }}
        >
          {card.title}
        </h2>

        <p
          style={{
            margin: 0,
            color: 'rgba(255,255,255,.82)',
            fontSize: 11.5,
            lineHeight: 1.55,
            textWrap: 'pretty',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {card.summary}
        </p>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: 12,
            borderTop: '1px solid rgba(255,255,255,.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              background: accent + '22',
              border: `1px solid ${accent}55`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent,
              fontSize: 11,
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            {card.source[0]?.toUpperCase() || '·'}
          </div>
          <div style={{ flex: 1, minWidth: 0, lineHeight: 1.15 }}>
            <div
              style={{
                fontSize: 8.5,
                fontWeight: 700,
                letterSpacing: '.16em',
                color: 'rgba(255,255,255,.5)',
                textTransform: 'uppercase',
              }}
            >
              {lang === 'de' ? 'Quelle' : 'Source'}
            </div>
            <div
              style={{
                marginTop: 2,
                fontSize: 11,
                fontWeight: 700,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>{card.source}</span>
              {card.time && (
                <>
                  <span
                    style={{
                      width: 2,
                      height: 2,
                      borderRadius: 1,
                      background: 'rgba(255,255,255,.4)',
                    }}
                  />
                  <span style={{ fontWeight: 500, color: 'rgba(255,255,255,.55)' }}>
                    {card.time}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
