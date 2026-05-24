import type { CatKey, Lang } from './copy';

export const NEWS_API = 'https://alles-kurz-backend-production.up.railway.app/api/news';

export const THIRTY_MINUTES = 30 * 60 * 1000;

export type Article = {
  title: string;
  summary: string;
  source: string;
  link: string;
  pubDate: string;
  imageUrl: string;
  category: string;
  cat: CatKey | null;
};

type ApiArticle = {
  title?: string;
  summary?: string;
  source?: string;
  link?: string;
  pubDate?: string;
  imageUrl?: string;
  category?: string;
};

const CATEGORY_TO_CAT: Record<string, CatKey> = {
  Politik:      'politik',
  Wirtschaft:   'wirtschaft',
  Sport:        'sport',
  Technologie:  'tech',
  Tech:         'tech',
  Kultur:       'kultur',
  Wissenschaft: 'wissenschaft',
  Gesundheit:   'gesundheit',
  Welt:         'welt',
};

export function mapCategoryToCat(category: string | undefined): CatKey | null {
  if (!category) return null;
  return CATEGORY_TO_CAT[category] ?? null;
}

export async function fetchLatestNews(lang: Lang): Promise<Article[]> {
  try {
    const res = await fetch(`${NEWS_API}?language=${lang}`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const json: unknown = await res.json();
    if (!json || typeof json !== 'object') return [];
    const list = (json as { articles?: unknown }).articles;
    if (!Array.isArray(list)) return [];
    return list
      .map((raw): Article | null => {
        const a = raw as ApiArticle;
        if (!a || typeof a.title !== 'string' || typeof a.summary !== 'string') return null;
        return {
          title:    a.title,
          summary:  a.summary,
          source:   typeof a.source === 'string' ? a.source : '',
          link:     typeof a.link === 'string' ? a.link : '#',
          pubDate:  typeof a.pubDate === 'string' ? a.pubDate : '',
          imageUrl: typeof a.imageUrl === 'string' ? a.imageUrl : '',
          category: typeof a.category === 'string' ? a.category : '',
          cat:      mapCategoryToCat(a.category),
        };
      })
      .filter((a): a is Article => a !== null);
  } catch {
    return [];
  }
}

/**
 * Pick the freshest article in each of the 8 known categories.
 * If a category has no article, falls back to the next freshest uncategorized article.
 * Used by NewsGrid for the 8-card brief layout.
 */
export function bucketByCategory(
  articles: Article[],
  cats: readonly CatKey[],
): Partial<Record<CatKey, Article>> {
  const result: Partial<Record<CatKey, Article>> = {};
  const sorted = [...articles].sort((a, b) => {
    const ta = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const tb = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return tb - ta;
  });
  const used = new Set<string>();

  for (const key of cats) {
    const hit = sorted.find((a) => a.cat === key && !used.has(a.link));
    if (hit) {
      result[key] = hit;
      used.add(hit.link);
    }
  }
  // Fill gaps with next-freshest uncategorized/unused article.
  for (const key of cats) {
    if (result[key]) continue;
    const fallback = sorted.find((a) => !used.has(a.link));
    if (fallback) {
      result[key] = fallback;
      used.add(fallback.link);
    }
  }
  return result;
}

export function formatRelativeTime(pubDate: string, lang: Lang): string {
  if (!pubDate) return '';
  const t = new Date(pubDate).getTime();
  if (Number.isNaN(t)) return '';
  const diff = Date.now() - t;
  const mins = Math.floor(diff / 60_000);
  if (mins < 1)  return lang === 'de' ? 'gerade eben' : 'just now';
  if (mins < 60) return lang === 'de' ? `vor ${mins} Min.` : `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return lang === 'de' ? `vor ${hrs} Std.` : `${hrs} hr${hrs === 1 ? '' : 's'} ago`;
  const days = Math.floor(hrs / 24);
  return lang === 'de' ? `vor ${days} Tg.` : `${days}d ago`;
}
