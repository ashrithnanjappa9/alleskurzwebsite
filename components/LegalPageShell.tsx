'use client';

import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function LegalPageShell({
  eyebrow = 'Rechtliches',
  title,
  updated,
  children,
}: {
  eyebrow?: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <Nav />
      <section className="px-5 pt-16 pb-20 md:px-[60px] md:pt-24 md:pb-[120px]">
        <article className="mx-auto" style={{ maxWidth: 720 }}>
          <header className="mb-10 md:mb-12">
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.2em',
                color: '#E53935',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </div>
            <h1
              className="text-[40px] sm:text-[48px] md:text-[56px] mt-4"
              style={{
                margin: 0,
                marginTop: undefined,
                fontWeight: 800,
                letterSpacing: '-.03em',
                lineHeight: 1.02,
                color: 'var(--ak-text)',
                textWrap: 'pretty',
              }}
            >
              {title}
            </h1>
            {updated && (
              <p
                className="text-[13px] mt-4"
                style={{
                  margin: 0,
                  marginTop: undefined,
                  color: 'var(--ak-text-dim)',
                  letterSpacing: '.04em',
                }}
              >
                {updated}
              </p>
            )}
          </header>
          {children}
        </article>
      </section>
      <Footer />
    </main>
  );
}
