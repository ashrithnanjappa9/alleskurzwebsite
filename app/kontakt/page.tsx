import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kontakt — alles kurz',
  description: 'Bei Fragen wende dich an uns.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt — alles kurz',
    description: 'Bei Fragen wende dich an uns.',
    type: 'article',
  },
};

export default function KontaktPage() {
  return (
    <main>
      <Nav />
      <section className="px-5 pt-16 pb-20 md:px-[60px] md:pt-24 md:pb-[120px]">
        <article className="mx-auto" style={{ maxWidth: 720 }}>
          <h1
            className="text-[40px] sm:text-[48px] md:text-[56px]"
            style={{
              margin: 0,
              fontWeight: 800,
              letterSpacing: '-.03em',
              lineHeight: 1.02,
              color: 'var(--ak-text)',
            }}
          >
            Kontakt
          </h1>
          <p
            className="text-[16px] md:text-[17px] mt-6 md:mt-8"
            style={{
              margin: 0,
              marginTop: undefined,
              color: 'var(--ak-text-mute)',
              lineHeight: 1.7,
              textWrap: 'pretty',
            }}
          >
            Bei Fragen wende dich an:{' '}
            <a
              href="mailto:contact@alleskurz.com"
              style={{
                color: '#E53935',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              contact@alleskurz.com
            </a>
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
