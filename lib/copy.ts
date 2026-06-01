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
    download: { de: 'Holen',             en: 'Get the app' } as Bi,
  },
  hero: {
    eyebrow: {
      de: 'Deutschland · Nachrichten neu definiert',
      en: 'Germany · News, redefined',
    } as Bi,
    titleA: { de: 'Jede Nachricht.', en: 'Every story.' } as Bi,
    titleB: { de: 'Genau 60 Wörter.', en: 'Exactly 60 words.' } as Bi,
    sub: {
      de: 'Schluss mit Schlagzeilen-Roulette. Jede Story kommt auf den Punkt — kuratiert von Redakteur:innen, zusammengefasst von KI, in unter 30 Sekunden gelesen.',
      en: 'No more headline roulette. Every story, distilled — curated by editors, summarised by AI, read in under 30 seconds.',
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
        title: { de: 'Redaktion kuratiert', en: 'Editors curate' } as Bi,
        body: {
          de: 'Unsere Redakteur:innen wählen täglich die Stories, die wirklich wichtig sind. Aus über 200 Quellen — keine Algorithmus-Blase, kein Engagement-Bait.',
          en: "Our editors hand-pick the day's most important stories. From 200+ sources — no algorithm bubble, no engagement bait.",
        } as Bi,
      },
      {
        n: '02',
        title: { de: 'KI fasst zusammen', en: 'AI summarises' } as Bi,
        body: {
          de: 'Jeder Artikel wird auf exakt 60 Wörter eingedampft. Modelle prüfen Fakten gegen die Originalquelle — und Redakteur:innen lesen jede Zusammenfassung gegen, bevor sie live geht.',
          en: 'Every article is distilled to exactly 60 words. Models fact-check against the source, and editors read every summary before it goes live.',
        } as Bi,
      },
      {
        n: '03',
        title: { de: 'Du wischst durch', en: 'You swipe through' } as Bi,
        body: {
          de: 'Eine Story pro Karte. Hoch wischen für die nächste. Speichern, teilen, oder im Original lesen — alles ohne deine Konzentration zu brechen.',
          en: 'One story per card. Swipe up for the next. Save, share, or open the original — all without breaking your focus.',
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
          { label: { de: 'Funktionen', en: 'Features' } as Bi },
          { label: { de: 'iOS App', en: 'iOS app' } as Bi },
          { label: { de: 'Android App', en: 'Android app' } as Bi },
          { label: { de: 'Web Reader', en: 'Web reader' } as Bi },
        ] as FooterItem[],
      },
      {
        heading: { de: 'Redaktion', en: 'Newsroom' } as Bi,
        items: [
          { label: { de: 'Über uns', en: 'About' } as Bi },
          { label: { de: 'Standards', en: 'Standards' } as Bi },
          { label: { de: 'Methodik', en: 'Method' } as Bi },
          { label: { de: 'Jobs', en: 'Careers' } as Bi },
        ] as FooterItem[],
      },
      {
        heading: { de: 'Rechtliches', en: 'Legal' } as Bi,
        items: [
          { label: { de: 'Impressum', en: 'Imprint' } as Bi },
          { label: { de: 'Datenschutz', en: 'Privacy' } as Bi, href: '/datenschutz' },
          { label: { de: 'AGB', en: 'Terms' } as Bi },
          { label: { de: 'Presse', en: 'Press' } as Bi },
          { label: { de: 'Kontakt', en: 'Contact' } as Bi, href: '/kontakt' },
        ] as FooterItem[],
      },
    ],
    rights: {
      de: '© 2026 Alles Kurz GmbH · Hergestellt in Berlin',
      en: '© 2026 Alles Kurz GmbH · Made in Berlin',
    } as Bi,
  },
  business: {
    heading: { de: 'Für Unternehmen', en: 'For Business' } as Bi,
    sub:     { de: 'Kommt bald.',     en: 'Coming soon.' } as Bi,
  },
} as const;
