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
        <PolicySection key={s.heading} heading={s.heading} body={s.body}>
          {s.bullets && (
            <ul
              className="text-[15px] md:text-[16px] mt-3"
              style={{
                margin: 0,
                marginTop: 12,
                paddingLeft: '1.25rem',
                color: 'var(--ak-text-mute)',
                lineHeight: 1.7,
                textWrap: 'pretty',
                listStyleType: 'disc',
              }}
            >
              {s.bullets.map((b) => (
                <li key={b} style={{ marginTop: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </PolicySection>
      ))}
    </LegalPageShell>
  );
}

const SECTIONS: { heading: string; body: string; bullets?: string[] }[] = [
  {
    heading: 'Keine persönlichen Daten',
    body: 'alles-kurz erfasst keine persönlichen Daten. Es gibt keine Benutzerkonten, keine Anmeldung und keine Profile.',
  },
  {
    heading: 'Nachrichteninhalte',
    body: 'Nachrichten werden aus öffentlichen RSS-Feeds geladen. Es werden keine Daten an die Anbieter dieser Feeds zurückübermittelt. Wir identifizieren uns beim Abruf mit einem klaren User-Agent (alles-kurz-bot) und respektieren die robots.txt-Einstellungen der jeweiligen Anbieter.',
  },
  {
    heading: 'KI-generierte Zusammenfassungen',
    body: 'Alle Zusammenfassungen auf alles-kurz werden automatisch durch künstliche Intelligenz erstellt. Wir nutzen dafür das Sprachmodell Claude Haiku des Anbieters Anthropic. Die Zusammenfassungen basieren ausschließlich auf den öffentlich zugänglichen RSS-Feeds der jeweils unter jedem Beitrag genannten Originalquelle. Es werden keine personenbezogenen Daten an Anthropic übermittelt — nur die zu zusammenfassenden Artikeltexte selbst.',
  },
  {
    heading: 'Drittanbieter',
    body: 'Für den Betrieb von alles-kurz nutzen wir folgende Dienste:',
    bullets: [
      'Anthropic (USA): Verarbeitung der Artikeltexte zur KI-generierten Zusammenfassung. Übertragung erfolgt verschlüsselt. Es werden keine Nutzerdaten übermittelt, nur die öffentlich zugänglichen Artikelinhalte.',
      'Mixpanel (EU-Server): Anonyme Nutzungsanalyse wie oben beschrieben.',
      'Railway (EU): Hosting unserer Server-Infrastruktur in Europa.',
      'Cloudflare: Auslieferung der Website und E-Mail-Weiterleitung an contact@alleskurz.com.',
    ],
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
    heading: 'Themenpräferenzen',
    body: 'Bei der Einrichtung der App wählst du deine Themenpräferenzen. Diese Angaben werden ausschließlich lokal auf deinem Gerät gespeichert, um den Newsfeed zu personalisieren. Sie werden nicht an unsere Server übermittelt und nicht mit Mixpanel geteilt.',
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
