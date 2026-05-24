'use client';

import { useLang } from './LangProvider';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      style={{
        position: 'fixed',
        top: 14,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: 'rgba(20,20,20,.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 999,
        padding: 4,
        display: 'flex',
        gap: 2,
        boxShadow: '0 8px 24px rgba(0,0,0,.4)',
      }}
    >
      {(['de', 'en'] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            style={{
              background: active ? '#E53935' : 'transparent',
              color: active ? '#fff' : 'rgba(255,255,255,.6)',
              border: 0,
              padding: '6px 16px',
              borderRadius: 999,
              fontFamily: 'inherit',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all .15s ease',
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = 'rgba(255,255,255,.6)';
            }}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
