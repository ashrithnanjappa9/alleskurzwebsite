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
        className="px-6 pt-32 pb-40 md:px-[60px] md:pt-[160px] md:pb-[200px]"
        style={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <h1
            className="text-[44px] sm:text-[56px] md:text-[72px]"
            style={{
              margin: 0,
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 0.98,
              color: 'var(--ak-text)',
            }}
          >
            {COPY.business.heading[lang]}
          </h1>
          <p
            className="text-[18px] md:text-[22px] mt-6"
            style={{
              margin: 0,
              marginTop: undefined,
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
