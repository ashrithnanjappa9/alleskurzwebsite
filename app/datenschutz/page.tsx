import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — alles kurz',
  description:
    'Wie alles-kurz mit deinen Daten umgeht. Keine Konten, keine persönlichen Daten, keine Tracker — Nutzungsanalyse ausschließlich anonym über Mixpanel.',
  alternates: { canonical: '/datenschutz' },
  openGraph: {
    title: 'Datenschutzerklärung — alles kurz',
    description: 'Wie alles-kurz mit deinen Daten umgeht.',
    type: 'article',
  },
};

export default function DatenschutzPage() {
  return (
    <main>
      <Nav />
      <section className="px-5 pt-16 pb-20 md:px-[60px] md:pt-24 md:pb-[120px]">
        <article className="mx-auto" style={{ maxWidth: 720 }}>
          <header className="mb-10 md:mb-12">
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.2em',
                color: '#E53935',
                textTransform: 'uppercase',
              }}
            >
              Rechtliches
            </div>
            <h1
              className="text-[40px] sm:text-[48px] md:text-[56px] mt-4"
              style={{
                margin: 0,
                marginTop: undefined,
                fontWeight: 800,
                letterSpacing: '-.03em',
                lineHeight: 1.02,
                color: 'var(--ak-text)',
                textWrap: 'pretty',
              }}
            >
              Datenschutzerklärung
            </h1>
            <p
              className="text-[13px] mt-4"
              style={{
                margin: 0,
                marginTop: undefined,
                color: 'var(--ak-text-dim)',
                letterSpacing: '.04em',
              }}
            >
              Stand: 29. Mai 2026
            </p>
          </header>

          <p
            className="text-[16px] md:text-[17px]"
            style={{
              margin: 0,
              color: 'var(--ak-text-mute)',
              lineHeight: 1.7,
              textWrap: 'pretty',
            }}
          >
            Diese Datenschutzerklärung beschreibt, wie alles-kurz mit deinen Daten umgeht.
          </p>

          {SECTIONS.map((s) => (
            <PolicySection key={s.heading} heading={s.heading} body={s.body} />
          ))}
        </article>
      </section>
      <Footer />
    </main>
  );
}

function PolicySection({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="mt-10 md:mt-12">
      <h2
        className="text-[20px] md:text-[22px]"
        style={{
          margin: 0,
          fontWeight: 700,
          letterSpacing: '-.01em',
          lineHeight: 1.3,
          color: 'var(--ak-text)',
        }}
      >
        {heading}
      </h2>
      <p
        className="text-[15px] md:text-[16px] mt-3"
        style={{
          margin: 0,
          marginTop: undefined,
          color: 'var(--ak-text-mute)',
          lineHeight: 1.7,
          textWrap: 'pretty',
        }}
      >
        {body}
      </p>
    </section>
  );
}

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: 'Keine persönlichen Daten',
    body: 'alles-kurz erfasst keine persönlichen Daten. Es gibt keine Benutzerkonten, keine Anmeldung und keine Profile.',
  },
  {
    heading: 'Nachrichteninhalte',
    body: 'Nachrichten werden aus öffentlichen RSS-Feeds geladen. Es werden keine Daten an die Anbieter dieser Feeds zurückübermittelt.',
  },
  {
    heading: 'Lesezeichen',
    body: 'Deine Lesezeichen werden ausschließlich lokal auf deinem Gerät gespeichert. Sie verlassen das Gerät nicht.',
  },
  {
    heading: 'Anonyme Nutzungsdaten',
    body: 'Um die App zu verbessern, erheben wir über Mixpanel anonyme Nutzungsdaten — etwa welche Funktionen geöffnet werden. Es werden keine persönlichen Daten, keine Namen und keine E-Mail-Adressen erfasst. Die Daten lassen sich nicht auf dich zurückführen. Wir verwenden Mixpanel zur anonymen Nutzungsanalyse. Dabei wird die IP-Adresse zur Bestimmung des ungefähren Standorts (Land, Stadt) verwendet und anschließend nicht gespeichert. Mixpanel verarbeitet diese Daten auf EU-Servern.',
  },
  {
    heading: 'Kein Tracking',
    body: 'Darüber hinaus verwendet alles-kurz keine weiteren Analyse-Tools, kein Cross-Site-Tracking und keine Werbe-IDs.',
  },
  {
    heading: 'Kontakt',
    body: 'Bei Fragen zum Datenschutz wende dich bitte an: alleskurz.app@gmail.com Diese Datenschutzerklärung gilt für die App alles kurz (com.nanjax.alleskurz) auf Android.',
  },
];
