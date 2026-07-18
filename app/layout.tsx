import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import { LangProvider } from '@/components/LangProvider';
import './globals.css';

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--ak-font-sans',
});

export const metadata: Metadata = {
  title: 'alles kurz — Nachrichten in 60 Wörtern',
  description:
    'Jede Story. Genau 60 Wörter. Aus über 30 deutschen Quellen von KI zusammengefasst, in unter 30 Sekunden gelesen.',
  metadataBase: new URL('https://www.alleskurz.com'),
  openGraph: {
    title: 'alles kurz — Nachrichten in 60 Wörtern',
    description: 'Jede Story. Genau 60 Wörter.',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'alles kurz' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={schibsted.variable}>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
