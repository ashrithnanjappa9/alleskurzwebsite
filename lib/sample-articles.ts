import type { CatKey, Lang } from './copy';

export type SampleArticle = {
  id: string;
  cat: CatKey;
  imageSeed: string;
  source: string;
  time: { de: string; en: string };
  kicker: { de: string; en: string };
  title: { de: string; en: string };
  summary: { de: string; en: string };
};

export const SAMPLE_ARTICLES: SampleArticle[] = [
  {
    id: 'klima',
    cat: 'politik',
    imageSeed: 'klima',
    source: 'dpa',
    time: { de: 'vor 12 Min.', en: '12 min ago' },
    kicker: { de: 'Klimagesetz', en: 'Climate Bill' },
    title: {
      de: 'Bundestag verabschiedet neues Klimagesetz mit knapper Mehrheit',
      en: 'Bundestag passes new climate bill by narrow majority',
    },
    summary: {
      de: 'Mit 348 zu 326 Stimmen hat der Bundestag das überarbeitete Klimaschutzgesetz angenommen. Es schreibt verbindliche Sektorziele bis 2030 fest und führt einen CO₂-Grenzwert für Neubauten ein. Die Opposition kritisiert fehlende Investitionssicherheit, die Regierung verweist auf den Kompromiss mit den Ländern. Inkrafttreten ist für den 1. Januar 2027 geplant, mit gestaffelten Übergangsfristen für Industrie und Wohnungsbau.',
      en: 'By 348 to 326 votes, the Bundestag adopted the revised Climate Protection Act. It locks in binding sector targets through 2030 and introduces a CO₂ ceiling for new buildings. The opposition criticises a lack of investment certainty; the government points to a compromise reached with the states. The law takes effect 1 January 2027, with staggered transition periods for industry and housing.',
    },
  },
  {
    id: 'dax',
    cat: 'wirtschaft',
    imageSeed: 'dax',
    source: 'Handelsblatt',
    time: { de: 'vor 1 Std.', en: '1 hr ago' },
    kicker: { de: 'Markets', en: 'Markets' },
    title: {
      de: 'DAX schließt auf Rekordhoch — Tech-Werte führen die Rallye an',
      en: 'DAX closes at record high as tech stocks lead the rally',
    },
    summary: {
      de: 'Der Leitindex DAX hat zum Handelsschluss erstmals die Marke von 21.400 Punkten überschritten. Treiber waren Technologietitel und ein überraschend starker ifo-Geschäftsklimaindex. Analysten verweisen auf nachlassende Zinsängste und robuste Quartalszahlen. Auch der MDAX und der TecDAX legten deutlich zu. Der Euro stieg auf 1,098 US-Dollar, Bundesanleihen blieben dagegen wenig verändert. Die Wall Street eröffnete ebenfalls fester.',
      en: 'The benchmark DAX closed above 21,400 points for the first time. The rally was led by technology stocks and a surprisingly strong ifo business climate index. Analysts cite easing rate fears and robust earnings. The MDAX and TecDAX also gained sharply. The euro rose to $1.098 while German Bunds were little changed. Wall Street opened firmer on the news.',
    },
  },
  {
    id: 'sport',
    cat: 'sport',
    imageSeed: 'sport',
    source: 'kicker',
    time: { de: 'vor 2 Std.', en: '2 hrs ago' },
    kicker: { de: 'Bundesliga', en: 'Bundesliga' },
    title: {
      de: 'Bayern verliert Spitzenspiel — Leverkusen übernimmt Tabellenführung',
      en: 'Bayern lose top-of-table clash — Leverkusen take the lead',
    },
    summary: {
      de: 'Bayer Leverkusen hat den FC Bayern München mit 2:1 bezwungen und springt damit erstmals in dieser Saison an die Tabellenspitze. Wirtz und Boniface trafen für die Werkself, Kane verkürzte spät per Elfmeter. Trainer Xabi Alonso lobte die taktische Disziplin seines Teams. Bayern-Coach Kompany räumte eine "kontrollierte Niederlage" ein. Das Rückspiel im April gilt nun als möglicher Titelkrimi.',
      en: 'Bayer Leverkusen beat Bayern Munich 2:1, climbing to the top of the table for the first time this season. Wirtz and Boniface scored for the Werkself; Kane pulled one back late from the spot. Coach Xabi Alonso praised his side\'s tactical discipline. Bayern manager Kompany acknowledged a "controlled defeat." The April reverse fixture now looms as a potential title decider.',
    },
  },
  {
    id: 'tech',
    cat: 'tech',
    imageSeed: 'tech',
    source: 'Politico',
    time: { de: 'vor 3 Std.', en: '3 hrs ago' },
    kicker: { de: 'EU · KI-Verordnung', en: 'EU · AI Act' },
    title: {
      de: 'EU einigt sich auf strengere Regeln für generative KI-Systeme',
      en: 'EU agrees on tougher rules for generative AI systems',
    },
    summary: {
      de: 'Die EU-Mitgliedstaaten haben sich auf eine verschärfte Fassung der KI-Verordnung verständigt. Anbieter generativer Modelle müssen Trainingsdaten offenlegen, Wasserzeichen einbauen und systemische Risiken auditieren lassen. Verstöße können mit bis zu sieben Prozent des Konzernumsatzes geahndet werden. Frankreich und Deutschland setzten Ausnahmen für Open-Source-Forschung durch. Das Parlament soll im März final abstimmen, Inkrafttreten gestaffelt ab 2026.',
      en: 'EU member states agreed on a stricter version of the AI Act. Providers of generative models must disclose training data, embed watermarks and submit to systemic-risk audits. Breaches can be fined up to seven percent of group turnover. France and Germany secured carve-outs for open-source research. The Parliament is set to vote in March, with phased entry into force from 2026.',
    },
  },
];

export function sampleImageUrl(seed: string): string {
  return `https://picsum.photos/seed/alleskurz-${seed}/800/1200`;
}

export function picksampleForCategory(cat: CatKey, lang: Lang): SampleArticle | null {
  return SAMPLE_ARTICLES.find((a) => a.cat === cat) ?? null;
}
