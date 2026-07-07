import type { Metadata } from 'next';
import LegalPageShell from '@/components/LegalPageShell';
import PolicySection from '@/components/PolicySection';

export const metadata: Metadata = {
  title: 'Impressum — alles kurz',
  description: 'Angaben gemäß §5 TMG.',
  alternates: { canonical: '/impressum' },
  openGraph: {
    title: 'Impressum — alles kurz',
    description: 'Angaben gemäß §5 TMG.',
    type: 'article',
  },
};

export default function ImpressumPage() {
  return (
    <LegalPageShell title="Impressum" updated="Stand: 25. Juni 2026">
      <PolicySection heading="Angaben gemäß §5 TMG">
        <p
          className="text-[15px] md:text-[16px] mt-3"
          style={{
            margin: 0,
            color: 'var(--ak-text-mute)',
            lineHeight: 1.7,
            textWrap: 'pretty',
          }}
        >
          Ashrith Nanjappa
          <br />
          Einzelunternehmer
          <br />
          Kollwitzstr. 76
          <br />
          10435 Berlin
          <br />
          Deutschland
        </p>
      </PolicySection>

      <PolicySection heading="Kontakt">
        <p
          className="text-[15px] md:text-[16px] mt-3"
          style={{
            margin: 0,
            color: 'var(--ak-text-mute)',
            lineHeight: 1.7,
            textWrap: 'pretty',
          }}
        >
          E-Mail:{' '}
          <a
            href="mailto:contact@alleskurz.com"
            style={{ color: '#E53935', textDecoration: 'none', fontWeight: 600 }}
          >
            contact@alleskurz.com
          </a>
        </p>
      </PolicySection>

      <PolicySection
        heading="Verantwortlich für den Inhalt nach §55 Abs. 2 RStV"
        body="Ashrith Nanjappa, Kollwitzstr. 76, 10435 Berlin."
      />

      <PolicySection
        heading="Umsatzsteuer"
        body="Umsatzsteuer-ID: nicht angegeben. Kleinunternehmer gemäß §19 UStG — es wird keine Umsatzsteuer ausgewiesen."
      />

      <PolicySection
        heading="EU-Streitschlichtung"
        body="Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
      />

      <PolicySection
        heading="Haftung für Inhalte"
        body="Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
      />

      <PolicySection
        heading="Haftung für Links"
        body="Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
      />

      <PolicySection
        heading="Urheberrecht"
        body="Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
      />
    </LegalPageShell>
  );
}
