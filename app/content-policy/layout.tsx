import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inhaltsrichtlinie — alles kurz',
  description:
    'Wie alles-kurz Inhalte von Drittanbietern aggregiert, zusammenfasst und auf Quellen verweist.',
  alternates: { canonical: '/content-policy' },
  openGraph: {
    title: 'Inhaltsrichtlinie — alles kurz',
    description:
      'Wie alles-kurz Inhalte von Drittanbietern aggregiert, zusammenfasst und auf Quellen verweist.',
    type: 'article',
  },
};

export default function ContentPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
