'use client';

import { useEffect, useState } from 'react';
import { useLang } from '../LangProvider';
import { COPY, CATS, type CatKey } from '@/lib/copy';
import {
  fetchLatestNews,
  bucketByCategory,
  formatRelativeTime,
  THIRTY_MINUTES,
  type Article,
} from '@/lib/news';
import { SAMPLE_ARTICLES, sampleImageUrl } from '@/lib/sample-articles';
import { LeadCard, NewsBriefCard } from './NewsCard';

const CAT_ORDER: readonly CatKey[] = [
  'politik',
  'wirtschaft',
  'sport',
  'tech',
  'kultur',
  'wissenschaft',
  'gesundheit',
  'welt',
];

type DisplayLead = {
  title: string;
  summary: string;
  source: string;
  time: string;
  kicker: string;
  catKey: CatKey;
  image: string;
  isExternal: boolean;
  link?: string;
};

type DisplayBrief = {
  catKey: CatKey;
  title: string;
  source: string;
  link?: string;
};

export default function NewsGrid() {
  const { lang } = useLang();
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const fetched = await fetchLatestNews(lang);
      if (cancelled) return;
      setArticles(fetched.length > 0 ? fetched : []);
      setFirstLoad(false);
    };

    load();
    const interval = setInterval(load, THIRTY_MINUTES);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [lang]);

  // Skeleton ONLY on first load (per spec). After first resolution, never
  // skeleton again even if a later refresh returns nothing — we silently
  // keep showing the previous data or fall back to samples.
  const showSkeleton = firstLoad && articles === null;

  const useFallback = !showSkeleton && (articles === null || articles.length === 0);
  const { lead, briefs } = useFallback
    ? buildFromSamples(lang)
    : buildFromApi(articles ?? [], lang);

  return (
    <section
      id="stories"
      style={{
        padding: '120px 60px',
        background: 'var(--ak-bg-soft)',
        borderTop: '1px solid var(--ak-border)',
        borderBottom: '1px solid var(--ak-border)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'flex-start',
          paddingBottom: 56,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '.2em',
              color: '#E53935',
              textTransform: 'uppercase',
            }}
          >
            {COPY.stories.eyebrow[lang]}
          </div>
          <h2
            style={{
              margin: '14px 0 0',
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-.03em',
              lineHeight: 1,
              color: 'var(--ak-text)',
              textWrap: 'pretty',
            }}
          >
            {COPY.stories.title[lang]}
          </h2>
        </div>
        <div style={{ paddingTop: 28 }}>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              fontStyle: 'italic',
              color: 'var(--ak-text-mute)',
              lineHeight: 1.55,
              textWrap: 'pretty',
            }}
          >
            {COPY.stories.sub[lang]}
          </p>
        </div>
      </div>

      {/* Lead */}
      {showSkeleton ? (
        <LeadSkeleton />
      ) : (
        <LeadCard
          lang={lang}
          title={lead.title}
          summary={lead.summary}
          source={lead.source}
          time={lead.time}
          kicker={lead.kicker}
          catKey={lead.catKey}
          image={lead.image}
          isExternal={lead.isExternal}
          link={lead.link}
          caption={COPY.stories.captionLead[lang]}
        />
      )}

      {/* 8-card grid */}
      <div
        style={{
          marginTop: 40,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}
      >
        {showSkeleton
          ? Array.from({ length: 8 }).map((_, i) => (
              <BriefSkeleton key={i} index={i} />
            ))
          : briefs.map((b, i) => {
              const isTopRow = i < 4;
              const isLastCol = (i + 1) % 4 === 0;
              const isFirstCol = i % 4 === 0;
              return (
                <NewsBriefCard
                  key={`${b.catKey}-${i}`}
                  catKey={b.catKey}
                  catLabel={CATS[b.catKey][lang]}
                  title={b.title}
                  source={b.source}
                  link={b.link}
                  border={{
                    right: !isLastCol,
                    bottom: isTopRow,
                    firstCol: isFirstCol,
                  }}
                />
              );
            })}
      </div>
    </section>
  );
}

// ── Builders ───────────────────────────────────────────────────────────────

function buildFromApi(articles: Article[], lang: 'de' | 'en'): {
  lead: DisplayLead;
  briefs: DisplayBrief[];
} {
  const sortedByDate = [...articles].sort((a, b) => {
    const ta = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const tb = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return tb - ta;
  });

  const leadArticle = sortedByDate[0];

  let leadDisplay: DisplayLead;
  if (leadArticle) {
    const catKey: CatKey = leadArticle.cat ?? 'welt';
    leadDisplay = {
      title:   leadArticle.title,
      summary: leadArticle.summary,
      source:  leadArticle.source,
      time:    formatRelativeTime(leadArticle.pubDate, lang),
      kicker:  '',
      catKey,
      image:   leadArticle.imageUrl,
      isExternal: true,
      link:    leadArticle.link,
    };
  } else {
    leadDisplay = sampleLead(lang);
  }

  const bucket = bucketByCategory(
    sortedByDate.filter((a) => a.link !== leadArticle?.link),
    CAT_ORDER,
  );

  const briefs: DisplayBrief[] = CAT_ORDER.map((cat) => {
    const hit = bucket[cat];
    if (hit) {
      return {
        catKey: cat,
        title: hit.title,
        source: hit.source,
        link: hit.link,
      };
    }
    const sample = SAMPLE_ARTICLES.find((s) => s.cat === cat);
    return {
      catKey: cat,
      title: sample
        ? sample.title[lang]
        : lang === 'de'
        ? `${CATS[cat].de}-Briefing: was heute wichtig wird`
        : `${CATS[cat].en} briefing: what matters today`,
      source: sample?.source ?? 'dpa',
    };
  });

  return { lead: leadDisplay, briefs };
}

function buildFromSamples(lang: 'de' | 'en'): {
  lead: DisplayLead;
  briefs: DisplayBrief[];
} {
  const lead = sampleLead(lang);
  const briefs: DisplayBrief[] = CAT_ORDER.map((cat) => {
    const sample = SAMPLE_ARTICLES.find((s) => s.cat === cat);
    return {
      catKey: cat,
      title: sample
        ? sample.title[lang]
        : lang === 'de'
        ? `${CATS[cat].de}-Briefing: was heute wichtig wird`
        : `${CATS[cat].en} briefing: what matters today`,
      source: sample?.source ?? 'dpa',
    };
  });
  return { lead, briefs };
}

function sampleLead(lang: 'de' | 'en'): DisplayLead {
  const sample = SAMPLE_ARTICLES[0];
  return {
    title:   sample.title[lang],
    summary: sample.summary[lang],
    source:  sample.source,
    time:    sample.time[lang],
    kicker:  sample.kicker[lang],
    catKey:  sample.cat,
    image:   sampleImageUrl(sample.imageSeed),
    isExternal: false,
  };
}

// ── Skeletons ──────────────────────────────────────────────────────────────

function LeadSkeleton() {
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
        <div className="ak-skeleton" style={{ width: 180, height: 14, borderRadius: 4 }} />
        <div
          className="ak-skeleton"
          style={{ marginTop: 18, width: '100%', height: 42, borderRadius: 6 }}
        />
        <div
          className="ak-skeleton"
          style={{ marginTop: 12, width: '88%', height: 42, borderRadius: 6 }}
        />
        <div
          className="ak-skeleton"
          style={{ marginTop: 28, width: '100%', height: 14, borderRadius: 4 }}
        />
        <div
          className="ak-skeleton"
          style={{ marginTop: 8, width: '92%', height: 14, borderRadius: 4 }}
        />
        <div
          className="ak-skeleton"
          style={{ marginTop: 8, width: '70%', height: 14, borderRadius: 4 }}
        />
        <div
          className="ak-skeleton"
          style={{ marginTop: 22, width: 240, height: 16, borderRadius: 4 }}
        />
      </div>
      <div className="ak-skeleton" style={{ height: 380, borderRadius: 4 }} />
    </div>
  );
}

function BriefSkeleton({ index }: { index: number }) {
  const isTopRow = index < 4;
  const isLastCol = (index + 1) % 4 === 0;
  const isFirstCol = index % 4 === 0;
  return (
    <div
      style={{
        padding: '24px 24px 24px 0',
        paddingLeft: isFirstCol ? 0 : 24,
        borderRight: isLastCol ? 0 : '1px solid var(--ak-border)',
        borderBottom: isTopRow ? '1px solid var(--ak-border)' : 0,
        paddingBottom: isTopRow ? 28 : 0,
        paddingTop: isTopRow ? 0 : 28,
      }}
    >
      <div className="ak-skeleton" style={{ width: 90, height: 11, borderRadius: 3 }} />
      <div
        className="ak-skeleton"
        style={{ marginTop: 14, width: '100%', height: 18, borderRadius: 4 }}
      />
      <div
        className="ak-skeleton"
        style={{ marginTop: 6, width: '92%', height: 18, borderRadius: 4 }}
      />
      <div
        className="ak-skeleton"
        style={{ marginTop: 6, width: '60%', height: 18, borderRadius: 4 }}
      />
      <div
        className="ak-skeleton"
        style={{ marginTop: 14, width: '70%', height: 11, borderRadius: 3 }}
      />
    </div>
  );
}
