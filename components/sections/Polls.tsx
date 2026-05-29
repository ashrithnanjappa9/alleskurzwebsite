'use client';

import { useState } from 'react';
import { useLang } from '../LangProvider';
import { CATS, COPY, type CatKey, type Lang } from '@/lib/copy';

type Poll = {
  id: string;
  cat: CatKey;
  question: { de: string; en: string };
  options: { id: string; label: { de: string; en: string } }[];
};

const POLLS: Poll[] = [
  {
    id: 'wahlalter',
    cat: 'politik',
    question: {
      de: 'Sollte das Wahlalter in Deutschland auf 16 gesenkt werden?',
      en: 'Should the voting age in Germany be lowered to 16?',
    },
    options: [
      { id: 'a', label: { de: 'Ja, überfällig',  en: 'Yes, overdue' } },
      { id: 'b', label: { de: 'Nein',             en: 'No' } },
      { id: 'c', label: { de: 'Nur kommunal',     en: 'Local elections only' } },
    ],
  },
  {
    id: 'ki-quelle',
    cat: 'tech',
    question: {
      de: 'Darf KI Nachrichten zusammenfassen, wenn die Originalquelle es verbietet?',
      en: 'May AI summarise news articles even when the source forbids it?',
    },
    options: [
      { id: 'a', label: { de: 'Ja, fair use',     en: 'Yes, fair use' } },
      { id: 'b', label: { de: 'Nein, niemals',    en: 'No, never' } },
      { id: 'c', label: { de: 'Nur mit Lizenz',   en: 'Only with a license' } },
    ],
  },
  {
    id: 'news-routine',
    cat: 'gesundheit',
    question: {
      de: 'Wann liest du Nachrichten am liebsten?',
      en: 'When do you most enjoy reading the news?',
    },
    options: [
      { id: 'a', label: { de: 'Morgens beim Kaffee', en: 'Mornings, with coffee' } },
      { id: 'b', label: { de: 'In der Mittagspause', en: 'On my lunch break' } },
      { id: 'c', label: { de: 'Abends',              en: 'Evenings' } },
    ],
  },
];

export default function Polls() {
  const { lang } = useLang();
  const [voted, setVoted] = useState<Record<string, string | undefined>>({});

  return (
    <section id="polls" className="px-5 py-20 md:px-[60px] md:py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start pb-10 md:pb-14">
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'rgba(229,57,53,.13)',
              color: '#E53935',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#E53935',
                boxShadow: '0 0 8px #E53935',
              }}
            />
            {COPY.polls.eyebrow[lang]}
          </div>
          <h2
            className="text-[34px] sm:text-[42px] md:text-[52px] mt-4 md:mt-[18px]"
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
            {COPY.polls.title[lang]}
          </h2>
        </div>
        <div className="pt-0 md:pt-7">
          <p
            className="text-[15px] md:text-[17px]"
            style={{
              margin: 0,
              fontStyle: 'italic',
              color: 'var(--ak-text-mute)',
              lineHeight: 1.55,
              textWrap: 'pretty',
            }}
          >
            {COPY.polls.sub[lang]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {POLLS.map((p) => (
          <PollCard
            key={p.id}
            poll={p}
            lang={lang}
            voted={voted[p.id]}
            onVote={(optionId) => setVoted((prev) => ({ ...prev, [p.id]: optionId }))}
          />
        ))}
      </div>
    </section>
  );
}

function PollCard({
  poll,
  lang,
  voted,
  onVote,
}: {
  poll: Poll;
  lang: Lang;
  voted: string | undefined;
  onVote: (optionId: string) => void;
}) {
  const c = CATS[poll.cat];
  return (
    <div
      className="p-5 md:p-[26px] min-h-[280px] md:min-h-[320px]"
      style={{
        background: 'var(--ak-surface-alt)',
        border: '1px solid var(--ak-border-strong)',
        borderRadius: 22,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '8px 14px',
          borderRadius: '0 22px 0 14px',
          background: '#E53935',
          color: '#fff',
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: '.16em',
          textTransform: 'uppercase',
        }}
      >
        {COPY.polls.eyebrow[lang]}
      </div>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 10px 4px 8px',
          borderRadius: 999,
          background: c.color + '22',
          color: c.color,
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          alignSelf: 'flex-start',
        }}
      >
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.color }} />
        {c[lang]}
      </div>

      <div
        className="text-[18px] md:text-[20px] mt-4"
        style={{
          fontWeight: 700,
          color: 'var(--ak-text)',
          lineHeight: 1.25,
          letterSpacing: '-.015em',
          textWrap: 'pretty',
        }}
      >
        {poll.question[lang]}
      </div>

      <div
        style={{
          marginTop: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          flex: 1,
        }}
      >
        {voted ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 12,
              padding: '24px 4px',
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: c.color,
              }}
            >
              {lang === 'de' ? 'Danke!' : 'Thanks!'}
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 700,
                lineHeight: 1.4,
                color: 'var(--ak-text)',
                textWrap: 'pretty',
              }}
            >
              {COPY.polls.comingSoonInline[lang]}
            </div>
          </div>
        ) : (
          poll.options.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => onVote(o.id)}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,.02)',
                border: '1px solid var(--ak-border)',
                borderRadius: 12,
                padding: '12px 14px',
                fontSize: 14,
                color: 'var(--ak-text)',
                fontWeight: 500,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all .15s ease',
                font: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--ak-border)';
              }}
            >
              {o.label[lang]}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
