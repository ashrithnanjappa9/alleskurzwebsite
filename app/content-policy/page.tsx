'use client';

import LegalPageShell from '@/components/LegalPageShell';
import PolicySection from '@/components/PolicySection';
import { useLang } from '@/components/LangProvider';
import { COPY } from '@/lib/copy';

export default function ContentPolicyPage() {
  const { lang } = useLang();
  const cp = COPY.contentPolicy;

  return (
    <LegalPageShell
      eyebrow={cp.eyebrow[lang]}
      title={cp.title[lang]}
      updated={cp.updated[lang]}
    >
      <p
        className="text-[16px] md:text-[17px]"
        style={{
          margin: 0,
          color: 'var(--ak-text-mute)',
          lineHeight: 1.7,
          textWrap: 'pretty',
        }}
      >
        {cp.intro[lang]}
      </p>

      {cp.sections.map((s) => {
        const heading = s.heading[lang];
        const body = s.body[lang];
        const isUserAgent = s.heading.en === 'User-Agent identification';
        const isContact = s.heading.en === 'Contact';

        if (isUserAgent) {
          return (
            <PolicySection key={heading} heading={heading} body={body}>
              <pre
                className="mt-4"
                style={{
                  margin: 0,
                  padding: '12px 14px',
                  borderRadius: 8,
                  background: 'var(--ak-bg-deep)',
                  border: '1px solid var(--ak-border)',
                  color: 'var(--ak-text)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  overflowX: 'auto',
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                }}
              >
                {cp.userAgent}
              </pre>
            </PolicySection>
          );
        }

        if (isContact) {
          return (
            <PolicySection key={heading} heading={heading}>
              <p
                className="text-[15px] md:text-[16px] mt-3"
                style={{
                  margin: 0,
                  color: 'var(--ak-text-mute)',
                  lineHeight: 1.7,
                  textWrap: 'pretty',
                }}
              >
                {lang === 'de'
                  ? 'Für Verlagsanfragen, Inhaltsstreitigkeiten oder Fragen zu dieser Richtlinie: '
                  : 'For publisher enquiries, content disputes, or questions about this policy: '}
                <a
                  href="mailto:contact@alleskurz.com"
                  style={{ color: '#E53935', textDecoration: 'none', fontWeight: 600 }}
                >
                  contact@alleskurz.com
                </a>
                {lang === 'de'
                  ? '. Antwortzeit: innerhalb von 5 Werktagen.'
                  : '. Response time: within 5 business days.'}
              </p>
            </PolicySection>
          );
        }

        return <PolicySection key={heading} heading={heading} body={body} />;
      })}
    </LegalPageShell>
  );
}
