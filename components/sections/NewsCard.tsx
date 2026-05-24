'use client';

import Image from 'next/image';
import { CATS, type CatKey, type Lang } from '@/lib/copy';
import type { Article } from '@/lib/news';

/**
 * Brief card used in the 8-cat grid.
 * Border classes are passed in via `borderClass` because the grid column count
 * changes at different breakpoints (1/2/4), and which sides get borders depends
 * on column count. See NewsGrid for how this is computed.
 */
export function NewsBriefCard({
  title,
  source,
  catKey,
  catLabel,
  link,
  borderClass,
}: {
  title: string;
  source: string;
  catKey: CatKey;
  catLabel: string;
  link?: string;
  borderClass: string;
}) {
  const c = CATS[catKey];
  const hasRealLink = !!link && link !== '#';
  return (
    <a
      href={hasRealLink ? link : '#'}
      target={hasRealLink ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`block no-underline text-inherit py-6 md:py-7 px-0 md:px-6 ${borderClass}`}
      style={{ transition: 'opacity .15s ease' }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: c.color,
          marginBottom: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: c.color,
          }}
        />
        {catLabel}
      </div>
      <h4
        className="ak-clamp-3 text-[16px] md:text-[18px]"
        style={{
          margin: 0,
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-.015em',
          color: 'var(--ak-text)',
          textWrap: 'pretty',
        }}
      >
        {title}
      </h4>
      <div
        style={{
          marginTop: 12,
          fontSize: 11,
          color: 'var(--ak-text-dim)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{source || 'dpa'}</span>
        <span style={{ fontWeight: 700, color: c.color }}>60 W</span>
      </div>
    </a>
  );
}

/**
 * Featured lead — image + kicker + headline + 2-col lede + source row.
 * On mobile: image stacks above the text (CSS `order` flips the visual order).
 * `image` may be a publisher-CDN URL (unoptimized) or a local picsum seed URL.
 */
export function LeadCard({
  lang,
  title,
  kicker,
  summary,
  source,
  time,
  catKey,
  image,
  isExternal,
  link,
  caption,
}: {
  lang: Lang;
  title: string;
  kicker: string;
  summary: string;
  source: string;
  time: string;
  catKey: CatKey;
  image: string;
  isExternal: boolean;
  link?: string;
  caption: string;
}) {
  const c = CATS[catKey];
  const hasRealLink = !!link && link !== '#';
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-[44px] pb-8 md:pb-10 items-stretch md:items-end"
      style={{
        borderBottom: '2px solid var(--ak-text)',
      }}
    >
      {/* Text — order-2 on mobile (below image), original on desktop */}
      <div className="order-2 md:order-1">
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: c.color,
          }}
        >
          {c[lang]}
          {kicker ? ` · ${kicker}` : ''}
        </div>
        <h3
          className="text-[28px] sm:text-[32px] md:text-[48px] my-4 md:my-[14px] md:mb-[22px]"
          style={{
            fontWeight: 800,
            letterSpacing: '-.025em',
            lineHeight: 1.02,
            color: 'var(--ak-text)',
            textWrap: 'pretty',
          }}
        >
          {hasRealLink ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p
          className="text-[15px] md:text-[16px] columns-1 md:columns-2 gap-7"
          style={{
            margin: 0,
            lineHeight: 1.65,
            color: 'var(--ak-text-mute)',
            textWrap: 'pretty',
          }}
        >
          {summary}
        </p>
        <div
          style={{
            marginTop: 22,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 12,
            color: 'var(--ak-text-dim)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontWeight: 700, color: 'var(--ak-text)' }}>{source}</span>
          {time && (
            <>
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 1.5,
                  background: 'var(--ak-text-dim)',
                }}
              />
              <span>{time}</span>
            </>
          )}
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: 1.5,
              background: 'var(--ak-text-dim)',
            }}
          />
          <span
            style={{
              padding: '3px 9px',
              borderRadius: 999,
              background: '#E53935',
              color: '#fff',
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: '.14em',
            }}
          >
            60 W
          </span>
        </div>
      </div>

      {/* Image — order-1 on mobile (top), order-2 on desktop (right column) */}
      <div
        className="order-1 md:order-2 h-[220px] md:h-[380px]"
        style={{
          position: 'relative',
          background: '#1a1a1a',
          overflow: 'hidden',
          borderRadius: 4,
        }}
      >
        {image ? (
          isExternal ? (
            // Publisher CDN — skip Next image optimization, see next.config.js rationale.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt=""
              width={800}
              height={420}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'var(--ak-photo-filter)',
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = '0';
              }}
            />
          ) : (
            <Image
              src={image}
              alt=""
              width={800}
              height={420}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'var(--ak-photo-filter)',
              }}
            />
          )
        ) : null}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'var(--ak-caption-bg)',
            color: 'var(--ak-caption-text)',
            padding: '8px 12px',
            fontStyle: 'italic',
            fontSize: 11,
          }}
        >
          {caption} · {source}
        </div>
      </div>
    </div>
  );
}

export function asCardArticle(a: Article) {
  return { title: a.title, source: a.source, cat: a.cat, link: a.link };
}
