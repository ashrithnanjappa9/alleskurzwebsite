import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LangProvider } from '@/components/LangProvider';
import LangToggle from '@/components/LangToggle';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--ak-font-sans',
});

export const metadata: Metadata = {
  title: 'alles kurz — Nachrichten in 60 Wörtern',
  description:
    'Jede Story. Genau 60 Wörter. Kuratiert von Redakteur:innen, zusammengefasst von KI, in unter 30 Sekunden gelesen.',
  metadataBase: new URL('https://alles-kurz.app'),
  openGraph: {
    title: 'alles kurz — Nachrichten in 60 Wörtern',
    description: 'Jede Story. Genau 60 Wörter.',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <LangProvider>
          <LangToggle />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
