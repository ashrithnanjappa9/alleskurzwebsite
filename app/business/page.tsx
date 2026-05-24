'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useLang } from '@/components/LangProvider';
import { COPY } from '@/lib/copy';

export default function BusinessPage() {
  const { lang } = useLang();
  return (
    <main>
      <Nav />
      <section
        style={{
          padding: '160px 60px 200px',
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1
            style={{
              margin: 0,
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 0.98,
              color: 'var(--ak-text)',
            }}
          >
            {COPY.business.heading[lang]}
          </h1>
          <p
            style={{
              margin: '24px 0 0',
              fontSize: 22,
              color: 'var(--ak-text-mute)',
              lineHeight: 1.5,
            }}
          >
            {COPY.business.sub[lang]}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
