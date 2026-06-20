import type { Metadata } from 'next';
import LegalPageShell from '@/components/LegalPageShell';
import PolicySection from '@/components/PolicySection';

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
    <LegalPageShell title="Datenschutzerklärung" updated="Stand: 29. Mai 2026">
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
    </LegalPageShell>
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
    heading: 'Altersgruppe und Interessen',
    body: 'Bei der Einrichtung der App wählst du eine Altersgruppe und Themenpräferenzen. Diese Angaben werden ausschließlich lokal auf deinem Gerät gespeichert, um den Newsfeed zu personalisieren. Sie werden nicht an unsere Server übermittelt und nicht mit Mixpanel geteilt.',
  },
  {
    heading: 'Kein Tracking',
    body: 'Darüber hinaus verwendet alles-kurz keine weiteren Analyse-Tools, kein Cross-Site-Tracking und keine Werbe-IDs.',
  },
  {
    heading: 'Kontakt',
    body: 'Bei Fragen zum Datenschutz wende dich bitte an: contact@alleskurz.com. Diese Datenschutzerklärung gilt für die App alles kurz (com.nanjax.alleskurz) auf iOS und Android.',
  },
];
