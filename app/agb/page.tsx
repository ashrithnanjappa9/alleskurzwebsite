import type { Metadata } from 'next';
import LegalPageShell from '@/components/LegalPageShell';
import PolicySection from '@/components/PolicySection';

export const metadata: Metadata = {
  title: 'AGB — alles kurz',
  description: 'Allgemeine Geschäftsbedingungen für die Nutzung der alles-kurz App.',
  alternates: { canonical: '/agb' },
  openGraph: {
    title: 'AGB — alles kurz',
    description: 'Allgemeine Geschäftsbedingungen für die Nutzung der alles-kurz App.',
    type: 'article',
  },
};

export default function AgbPage() {
  return (
    <LegalPageShell title="Allgemeine Geschäftsbedingungen" updated="Stand: 20. Juni 2026">
      <p
        className="text-[14px] md:text-[15px]"
        style={{
          margin: 0,
          padding: '12px 14px',
          borderRadius: 8,
          background: 'rgba(229, 57, 53, 0.08)',
          border: '1px solid rgba(229, 57, 53, 0.2)',
          color: 'var(--ak-text-mute)',
          lineHeight: 1.6,
        }}
      >
        Hinweis: Diese AGB werden vor dem Launch kostenpflichtiger Funktionen anwaltlich geprüft.
      </p>

      <PolicySection
        heading="1. Geltungsbereich"
        body="Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der App alles kurz. Mit der Installation und Nutzung der App erkennst du diese Bedingungen an."
      />

      <PolicySection
        heading="2. Leistungsbeschreibung"
        body="alles kurz ist eine kostenlose, KI-gestützte News-Aggregations-App. Es werden keine Benutzerkonten erstellt, keine Anmeldung durchgeführt und keine kostenpflichtigen Funktionen angeboten. Die App bezieht Inhalte aus öffentlich verfügbaren RSS-Feeds und stellt KI-generierte Zusammenfassungen bereit."
      />

      <PolicySection
        heading="3. Inhalte Dritter"
        body="Die in der App angezeigten Inhalte stammen aus RSS-Feeds Dritter (Nachrichtenverlage). Für die Richtigkeit, Vollständigkeit und Aktualität dieser Inhalte übernehmen wir keine Gewähr. Die Verantwortung für die Inhalte liegt beim jeweiligen Verlag oder Autor."
      />

      <PolicySection
        heading="4. Haftungsausschluss"
        body="Wir haften nicht für Schäden, die aus der Nutzung der App oder der Inhalte Dritter entstehen, soweit gesetzlich zulässig. Für die uneingeschränkte Haftung bei Vorsatz, grober Fahrlässigkeit sowie nach dem Produkthaftungsgesetz gilt diese Beschränkung nicht."
      />

      <PolicySection
        heading="5. Anwendbares Recht und Gerichtsstand"
        body="Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für sämtliche Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist Berlin, soweit gesetzlich zulässig."
      />

      <PolicySection heading="6. Streitbeilegung">
        <p
          className="text-[15px] md:text-[16px] mt-3"
          style={{
            margin: 0,
            color: 'var(--ak-text-mute)',
            lineHeight: 1.7,
            textWrap: 'pretty',
          }}
        >
          Bei Fragen oder Streitigkeiten wende dich bitte an:{' '}
          <a
            href="mailto:contact@alleskurz.com"
            style={{ color: '#E53935', textDecoration: 'none', fontWeight: 600 }}
          >
            contact@alleskurz.com
          </a>
          .
        </p>
      </PolicySection>
    </LegalPageShell>
  );
}
