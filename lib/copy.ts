export type Lang = 'de' | 'en';

export type Bi = { de: string; en: string };

/**
 * One row in a footer column. `href` is optional — items without it
 * render as a placeholder `<a href="#">` until a real page exists.
 */
export type FooterItem = { label: Bi; href?: string };

export const BRAND = {
  red:     '#E53935',
  redDeep: '#B71C1C',
  ink:     '#0D0D0D',
  cream:   '#F6F4EF',
} as const;

/** Live App Store URL for the iOS app. */
export const APP_STORE_URL = 'https://apps.apple.com/us/app/alleskurz/id6779738506';

/** Live Google Play URL for the Android app. */
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nanjax.alleskurz';

export type CatKey =
  | 'politik'
  | 'wirtschaft'
  | 'sport'
  | 'tech'
  | 'kultur'
  | 'wissenschaft'
  | 'gesundheit'
  | 'welt';

export const CATS: Record<CatKey, { de: string; en: string; color: string }> = {
  politik:      { de: 'Politik',      en: 'Politics', color: '#E53935' },
  wirtschaft:   { de: 'Wirtschaft',   en: 'Business', color: '#F59E0B' },
  sport:        { de: 'Sport',        en: 'Sport',    color: '#22C55E' },
  tech:         { de: 'Tech',         en: 'Tech',     color: '#3B82F6' },
  kultur:       { de: 'Kultur',       en: 'Culture',  color: '#A855F7' },
  wissenschaft: { de: 'Wissenschaft', en: 'Science',  color: '#06B6D4' },
  gesundheit:   { de: 'Gesundheit',   en: 'Health',   color: '#10B981' },
  welt:         { de: 'Welt',         en: 'World',    color: '#6366F1' },
};

export const COPY = {
  nav: {
    how:      { de: "So funktioniert's", en: 'How it works' } as Bi,
    stories:  { de: 'Stories',           en: 'Stories' } as Bi,
    polls:    { de: 'Polls',             en: 'Polls' } as Bi,
    business: { de: 'Für Unternehmen',   en: 'For Business' } as Bi,
    download: { de: 'Jetzt Download',    en: 'Get the app' } as Bi,
  },
  hero: {
    eyebrow: {
      de: 'Deutschland · Nachrichten neu definiert',
      en: 'Germany · News, redefined',
    } as Bi,
    titleA: { de: 'Jede Nachricht.', en: 'Every story.' } as Bi,
    titleB: { de: 'Genau 60 Wörter.', en: 'Exactly 60 words.' } as Bi,
    sub: {
      de: 'Kein Schlagzeilen-Roulette mehr. Jede Story auf den Punkt gebracht, in unter 30 Sekunden gelesen.',
      en: 'No more headline roulette. Every story to the point, read in under 30 seconds.',
    } as Bi,
    cta1: { de: 'Im App Store laden', en: 'Download on App Store' } as Bi,
    cta2: { de: 'Bei Google Play',    en: 'Get it on Google Play' } as Bi,
    cta1Lead: { de: 'Laden im',       en: 'Download on the' } as Bi,
    cta2Lead: { de: 'Erhältlich bei', en: 'GET IT ON' } as Bi,
    // Replaces the fabricated '38,000+ readers' line — see CHANGE 3.
    trust: {
      de: '4,8★ · Sei unter den ersten 1.000',
      en: '4.8★ · Be among the first 1,000',
    } as Bi,
  },
  stats: [
    { n: '60',    label: { de: 'Wörter pro Story',     en: 'Words per story' } as Bi },
    { n: '~24s',  label: { de: 'Durchschn. Lesezeit',  en: 'Avg. read time' } as Bi },
    { n: '12×',   label: { de: 'Neue Stories täglich', en: 'New stories daily' } as Bi },
    { n: '0',     label: { de: 'Pop-ups & Ads',        en: 'Pop-ups & ads' } as Bi },
  ],
  marquee: {
    de: ['Jede Story.', '60 Wörter.', 'Eine Routine.', 'Null Lärm.'],
    en: ['Every story.', '60 words.', 'One habit.', 'Zero noise.'],
  } as { de: string[]; en: string[] },
  how: {
    eyebrow: { de: "So funktioniert's", en: 'How it works' } as Bi,
    title:   { de: 'Drei Schritte. Eine Routine.', en: 'Three steps. One habit.' } as Bi,
    sub: {
      de: 'Von der Recherche zur 60-Wörter-Zusammenfassung. Wir behalten den Kontext, du behältst die Zeit.',
      en: 'From source to 60-word brief. We hold the context, you keep your time.',
    } as Bi,
    steps: [
      {
        n: '01',
        title: { de: 'Quellen kuratiert', en: 'Curated sources' } as Bi,
        body: {
          de: 'Wir aggregieren täglich aus über 30 sorgfältig ausgewählten deutschen Nachrichtenquellen — von Tagesschau bis Handelsblatt. Kein Clickbait, keine Boulevardpresse.',
          en: 'We aggregate daily from 30+ carefully chosen German news sources — from Tagesschau to Handelsblatt. No clickbait, no tabloids.',
        } as Bi,
      },
      {
        n: '02',
        title: { de: 'KI fasst zusammen', en: 'AI summarises' } as Bi,
        body: {
          de: 'Jeder Artikel wird von KI auf genau 60 Wörter destilliert — neutral, präzise, ohne Meinung. Jede Zusammenfassung verlinkt zur Originalquelle.',
          en: 'Every article is distilled by AI to exactly 60 words — neutral, precise, opinion-free. Every summary links to the original source.',
        } as Bi,
      },
      {
        n: '03',
        title: { de: 'Du wischst durch', en: 'You swipe through' } as Bi,
        body: {
          de: 'Eine Story pro Karte. Wisch weiter für die nächste. Speichern, teilen oder Original öffnen ohne den Fokus zu verlieren.',
          en: 'One story per card. Swipe up for the next. Save, share or open the original without losing your place.',
        } as Bi,
      },
    ],
  },
  stories: {
    eyebrow: { de: 'Heute im Feed', en: 'On the feed today' } as Bi,
    title:   { de: 'Acht Themen. Eine Sprache.', en: 'Eight topics. One voice.' } as Bi,
    sub: {
      de: 'Von Bundespolitik bis Wissenschaft — die volle Bandbreite, in jeder Story auf 60 Wörter destilliert.',
      en: 'From federal politics to science — full breadth, every story distilled to 60 words.',
    } as Bi,
    captionLead: {
      de: 'Aus dem Newsroom · heute',
      en: 'From the newsroom · today',
    } as Bi,
  },
  polls: {
    eyebrow: { de: 'Demnächst', en: 'Coming soon' } as Bi,
    title:   { de: 'Live-Umfragen direkt in der App.', en: 'Live polls, right in the app.' } as Bi,
    sub: {
      de: 'Stimme ab, sieh was Deutschland denkt — anonym, in Echtzeit, im selben Wisch-Feed. Beta startet im Frühjahr.',
      en: 'Cast your vote, watch Germany respond — anonymous, real-time, in the same swipe feed. Beta launches this spring.',
    } as Bi,
    comingSoonInline: {
      de: 'Kommt bald in der App.',
      en: 'Coming soon in the app.',
    } as Bi,
  },
  finalCTA: {
    kicker: { de: 'Jetzt laden', en: 'Get it now' } as Bi,
    title:  { de: 'Lade Alles Kurz', en: 'Download Alles Kurz' } as Bi,
    // CHANGE 2 — proper EN translation, not the German string.
    sub: {
      de: 'Kostenlos. Kein Datenmissbrauch. Kein Lärm.',
      en: 'Free. No data abuse. No noise.',
    } as Bi,
    tag: {
      de: 'Weniger scrollen. Mehr wissen.',
      en: 'Scroll less. Know more.',
    } as Bi,
  },
  footer: {
    blurb: {
      de: 'Eine deutsche News-App, die du tatsächlich zu Ende lesen kannst. Gemacht in Berlin.',
      en: 'A German news app you can actually finish reading. Made in Berlin.',
    } as Bi,
    columns: [
      {
        heading: { de: 'Produkt', en: 'Product' } as Bi,
        items: [
          { label: { de: 'iOS App', en: 'iOS app' } as Bi, href: APP_STORE_URL },
          { label: { de: 'Android App', en: 'Android app' } as Bi, href: PLAY_STORE_URL },
        ] as FooterItem[],
      },
      {
        heading: { de: 'Rechtliches', en: 'Legal' } as Bi,
        items: [
          { label: { de: 'Impressum', en: 'Imprint' } as Bi, href: '/impressum' },
          { label: { de: 'Datenschutz', en: 'Privacy' } as Bi, href: '/datenschutz' },
          { label: { de: 'AGB', en: 'Terms' } as Bi, href: '/agb' },
          { label: { de: 'Inhaltsrichtlinie', en: 'Content Policy' } as Bi, href: '/content-policy' },
          { label: { de: 'Kontakt', en: 'Contact' } as Bi, href: '/kontakt' },
        ] as FooterItem[],
      },
    ],
    rights: {
      de: '© 2026 alles kurz · Hergestellt in Berlin',
      en: '© 2026 alles kurz · Made in Berlin',
    } as Bi,
  },
  business: {
    heading: { de: 'Für Unternehmen', en: 'For Business' } as Bi,
    sub:     { de: 'Kommt bald.',     en: 'Coming soon.' } as Bi,
  },
  contentPolicy: {
    eyebrow: { de: 'Rechtliches', en: 'Legal' } as Bi,
    title: { de: 'Inhaltsrichtlinie', en: 'Content Policy' } as Bi,
    updated: { de: 'Stand: 20. Juni 2026', en: 'Last updated: 20 June 2026' } as Bi,
    intro: {
      de: 'Diese Richtlinie beschreibt, wie alles-kurz Inhalte von Drittanbietern aggregiert, zusammenfasst und auf Quellen verweist.',
      en: 'This policy describes how alles-kurz aggregates, summarises, and attributes third-party content.',
    } as Bi,
    sections: [
      {
        heading: { de: 'Was alles-kurz ist', en: 'What alles-kurz is' } as Bi,
        body: {
          de: 'alles-kurz ist eine KI-gestützte News-Aggregations-App für deutschsprachige Leser:innen. Die App sammelt, verarbeitet und zeigt Nachrichten­zusammenfassungen, die ausschließlich aus öffentlich zugänglichen RSS-Feeds von Drittanbietern stammen.',
          en: 'alles-kurz is an AI-powered news aggregation app for German-speaking readers. The app collects, processes, and displays news summaries sourced exclusively from publicly available RSS feeds published by third-party news organisations.',
        } as Bi,
      },
      {
        heading: { de: 'Wie wir RSS-Feeds nutzen', en: 'How we use RSS feeds' } as Bi,
        body: {
          de: 'RSS (Really Simple Syndication) ist ein offener Web-Standard, mit dem Verlage ihre Inhalte für Aggregatoren, Feed-Reader und Drittplattformen verteilen. Mit der Veröffentlichung eines RSS-Feeds stellt ein Verlag Schlagzeilen und Artikel-Metadaten zur Aggregation bereit. alles-kurz bezieht ausschließlich von RSS-Endpunkten, die öffentlich erreichbar sind und nicht per robots.txt eingeschränkt werden. Wir scrapen keine Websites, umgehen keine Paywalls und greifen nicht auf Inhalte zu, die nicht ausdrücklich per RSS angeboten werden.',
          en: 'RSS (Really Simple Syndication) is an open web standard that news publishers use to distribute their content to aggregators, feed readers, and third-party platforms. By publishing an RSS feed, a publisher makes their headlines and article metadata available for aggregation. alles-kurz fetches only from RSS endpoints that are publicly accessible and not restricted by the publisher’s robots.txt file. We do not scrape websites, bypass paywalls, or access content that is not explicitly made available via RSS.',
        } as Bi,
      },
      {
        heading: { de: 'Wie wir Inhalte zusammenfassen', en: 'How we summarise content' } as Bi,
        body: {
          de: 'Jeder Artikel wird mit einem KI-Sprachmodell auf exakt 60 Wörter zusammengefasst. Die Zusammenfassungen sind transformativ — sie sind keine Reproduktion des Originaltexts. Der vollständige Originalartikel ist immer direkt aus der App verlinkt und erreichbar. Wir zeigen oder speichern keine vollständigen Artikeltexte.',
          en: 'Each article is summarised to exactly 60 words using an AI language model. Summaries are transformative — they are not reproductions of the original text. The full original article is always linked and accessible directly from the app. We do not display or store full article text.',
        } as Bi,
      },
      {
        heading: { de: 'Quellenangabe', en: 'Source attribution' } as Bi,
        body: {
          de: 'Jede in alles-kurz angezeigte Zusammenfassung enthält den Namen des Originalverlags und einen direkten Link zum Quellartikel. KI-generierte Zusammenfassungen werden nicht als eigenständiger Journalismus dargestellt.',
          en: 'Every summary displayed in alles-kurz includes the name of the original publisher and a direct link to the source article. We do not present AI-generated summaries as original journalism.',
        } as Bi,
      },
      {
        heading: { de: 'robots.txt-Konformität', en: 'robots.txt compliance' } as Bi,
        body: {
          de: 'Bevor wir eine Quelle abrufen, prüft unser Backend die robots.txt-Datei dieser Quelle. Hat ein Verlag automatisierten Zugriff eingeschränkt, überspringen wir die Quelle vollständig. Diese Prüfung läuft automatisch bei jedem Abrufzyklus.',
          en: 'Before fetching from any source, our backend checks that source’s robots.txt file. If a publisher has restricted automated access, we skip that source entirely. This check runs automatically with every fetch cycle.',
        } as Bi,
      },
      {
        heading: { de: 'User-Agent-Kennung', en: 'User-Agent identification' } as Bi,
        body: {
          de: 'Unser RSS-Fetcher identifiziert sich bei jeder Anfrage mit folgender User-Agent-Zeichenfolge, damit Verlage unseren Crawler in ihren Zugriffsprotokollen erkennen können:',
          en: 'Our RSS fetcher identifies itself with the following User-Agent string on every request, so publishers can identify our crawler in their access logs:',
        } as Bi,
      },
      {
        heading: { de: 'Verlagsbeschwerden und Entfernungswünsche', en: 'Publisher removal requests' } as Bi,
        body: {
          de: 'Wenn Sie Verlag sind und Ihre Inhalte aus alles-kurz entfernen lassen möchten, schreiben Sie an contact@alleskurz.com. Wir entfernen Ihre RSS-Quelle innerhalb von 5 Werktagen nach einer verifizierten Anfrage aus unserem System.',
          en: 'If you are a publisher and wish to have your content removed from alles-kurz, please contact us at contact@alleskurz.com. We will remove your RSS source from our system within 5 business days of a verified request.',
        } as Bi,
      },
      {
        heading: { de: 'Rechtsgrundlage', en: 'Legal basis' } as Bi,
        body: {
          de: 'Unsere Nutzung öffentlich publizierter RSS-Inhalte ist mit dem Zweck vereinbar, zu dem RSS-Feeds bereitgestellt werden. KI-generierte Zusammenfassungen stellen nach geltendem deutschen Urheberrecht (UrhG) eine transformative Nutzung dar. Wir beanspruchen kein Urheberrecht an Originalinhalten der Verlage.',
          en: 'Our use of publicly published RSS content is consistent with the purpose for which RSS feeds are made available. AI-generated summaries constitute transformative use under applicable German copyright law (UrhG). We do not claim copyright over original publisher content.',
        } as Bi,
      },
      {
        heading: { de: 'Kontakt', en: 'Contact' } as Bi,
        body: {
          de: 'Für Verlagsanfragen, Inhaltsstreitigkeiten oder Fragen zu dieser Richtlinie: contact@alleskurz.com. Antwortzeit: innerhalb von 5 Werktagen.',
          en: 'For publisher enquiries, content disputes, or questions about this policy: contact@alleskurz.com. Response time: within 5 business days.',
        } as Bi,
      },
    ],
    userAgent: 'alles-kurz/1.0 (AI News Aggregator; contact@alleskurz.com)',
  },
} as const;
