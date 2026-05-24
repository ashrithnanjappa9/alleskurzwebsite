'use client';

import Image from 'next/image';
import { CATS, type CatKey, type Lang } from '@/lib/copy';
import type { Article } from '@/lib/news';

type CardArticle = {
  title: string;
  source: string;
  cat: CatKey | null;
  link?: string;
};

export function NewsCard({
  article,
  cat,
  border,
}: {
  article: CardArticle;
  cat: CatKey;
  border: { right: boolean; bottom: boolean; firstCol: boolean };
}) {
  const c = CATS[cat];
  return (
    <a
      href={article.link || '#'}
      target={article.link && article.link !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        padding: '24px 24px 24px 0',
        paddingLeft: border.firstCol ? 0 : 24,
        borderRight: border.right ? '1px solid var(--ak-border)' : '0',
        borderBottom: border.bottom ? '1px solid var(--ak-border)' : '0',
        paddingBottom: border.bottom ? 28 : 0,
        paddingTop: border.bottom ? 0 : 28,
      }}
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
        {c.de /* lang resolved at parent for header; cat label always in user lang at parent */}
      </div>
      <h4
        className="ak-clamp-3"
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-.015em',
          color: 'var(--ak-text)',
          textWrap: 'pretty',
        }}
      >
        {article.title}
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
        <span>{article.source || 'dpa'}</span>
        <span style={{ fontWeight: 700, color: c.color }}>60 W</span>
      </div>
    </a>
  );
}

/**
 * Localized variant used by NewsGrid where the parent already knows `lang`.
 * Pass the rendered category label as a prop so this stays a pure render component.
 */
export function NewsBriefCard({
  title,
  source,
  catKey,
  catLabel,
  link,
  border,
}: {
  title: string;
  source: string;
  catKey: CatKey;
  catLabel: string;
  link?: string;
  border: { right: boolean; bottom: boolean; firstCol: boolean };
}) {
  const c = CATS[catKey];
  const hasRealLink = !!link && link !== '#';
  return (
    <a
      href={hasRealLink ? link : '#'}
      target={hasRealLink ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        padding: border.bottom ? '0 24px 28px 0' : '28px 24px 0 0',
        paddingLeft: border.firstCol ? 0 : 24,
        borderRight: border.right ? '1px solid var(--ak-border)' : '0',
        borderBottom: border.bottom ? '1px solid var(--ak-border)' : '0',
        transition: 'opacity .15s ease',
      }}
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
        className="ak-clamp-3"
        style={{
          margin: 0,
          fontSize: 18,
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
 * Featured lead — image + kicker + headline + 2-column lede + source row.
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
      style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 44,
        paddingBottom: 40,
        borderBottom: '2px solid var(--ak-text)',
        alignItems: 'flex-end',
      }}
    >
      <div>
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
          style={{
            margin: '14px 0 22px',
            fontSize: 48,
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
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.65,
            color: 'var(--ak-text-mute)',
            textWrap: 'pretty',
            columnCount: 2,
            columnGap: 28,
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

      {/* Featured image */}
      <div
        style={{
          position: 'relative',
          height: 380,
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

/** A simple item-shaped wrapper used by the fallback path. */
export function asCardArticle(a: Article): CardArticle {
  return { title: a.title, source: a.source, cat: a.cat, link: a.link };
}
