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

  // Skeleton ONLY on first load (per spec).
  const showSkeleton = firstLoad && articles === null;

  const useFallback = !showSkeleton && (articles === null || articles.length === 0);
  const { lead, briefs } = useFallback
    ? buildFromSamples(lang)
    : buildFromApi(articles ?? [], lang);

  return (
    <section
      id="stories"
      className="px-5 py-20 md:px-[60px] md:py-[120px]"
      style={{
        background: 'var(--ak-bg-soft)',
        borderTop: '1px solid var(--ak-border)',
        borderBottom: '1px solid var(--ak-border)',
      }}
    >
      {/* Section header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] items-start pb-10 md:pb-14">
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
            className="text-[34px] sm:text-[42px] md:text-[60px] mt-4"
            style={{
              margin: 0,
              marginTop: undefined,
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
        <div className="pt-0 md:pt-7">
          <p
            className="text-[16px] md:text-[18px]"
            style={{
              margin: 0,
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
      <div className="ak-news-grid mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {showSkeleton
          ? Array.from({ length: 8 }).map((_, i) => <BriefSkeleton key={i} />)
          : briefs.map((b, i) => (
              <NewsBriefCard
                key={`${b.catKey}-${i}`}
                catKey={b.catKey}
                catLabel={CATS[b.catKey][lang]}
                title={b.title}
                source={b.source}
                link={b.link}
                borderClass=""
              />
            ))}
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
      className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-[44px] pb-8 md:pb-10 items-stretch md:items-end"
      style={{ borderBottom: '2px solid var(--ak-text)' }}
    >
      <div className="order-2 md:order-1">
        <div className="ak-skeleton" style={{ width: 180, height: 14, borderRadius: 4 }} />
        <div
          className="ak-skeleton"
          style={{ marginTop: 18, width: '100%', height: 32, borderRadius: 6 }}
        />
        <div
          className="ak-skeleton"
          style={{ marginTop: 12, width: '88%', height: 32, borderRadius: 6 }}
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
      <div
        className="order-1 md:order-2 h-[220px] md:h-[380px] ak-skeleton"
        style={{ borderRadius: 4 }}
      />
    </div>
  );
}

function BriefSkeleton() {
  return (
    <div className="py-6 md:py-7 px-0 md:px-6">
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
