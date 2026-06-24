type Props = {
  icon: 'apple' | 'play';
  /** Bottom (main) label, e.g. "App Store" / "Google Play". */
  label: string;
  /** Top (lead) label, e.g. "Laden im" / "Download on". */
  lead: string;
  /** Destination URL (opens in a new tab). */
  href: string;
  /** On the red Final-CTA band, the border lifts to white-22%. */
  onRed?: boolean;
};

export default function StoreButton({ icon, label, lead, href, onRed = false }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${lead} ${label}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 11,
        background: '#000',
        color: '#fff',
        border: `1px solid ${onRed ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.22)'}`,
        borderRadius: 13,
        padding: '11px 18px',
        textDecoration: 'none',
        transition: 'transform .12s ease, border-color .2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.borderColor = onRed ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.22)';
      }}
    >
      <StoreIcon name={icon} />
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1.05,
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 500, opacity: 0.9, marginBottom: 2, letterSpacing: '.01em' }}>
          {lead}
        </span>
        <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-.01em' }}>
          {label}
        </span>
      </span>
    </a>
  );
}

function StoreIcon({ name }: { name: 'apple' | 'play' }) {
  if (name === 'apple') {
    return (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="#fff" aria-hidden style={{ flexShrink: 0 }}>
        <path d="M17.05 12.54c-.02-2.05 1.68-3.04 1.75-3.08-.95-1.4-2.44-1.59-2.97-1.61-1.27-.13-2.47.74-3.11.74-.64 0-1.63-.72-2.68-.7-1.38.02-2.65.8-3.36 2.04-1.43 2.49-.37 6.18 1.03 8.2.68.99 1.5 2.1 2.56 2.06 1.02-.04 1.41-.66 2.65-.66 1.23 0 1.58.66 2.66.64 1.1-.02 1.79-1 2.46-2 .77-1.14 1.09-2.25 1.11-2.31-.02-.01-2.13-.82-2.15-3.25Z" />
        <path d="M15.1 6.42c.56-.69.94-1.64.84-2.59-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.57-.86 2.5.9.07 1.83-.46 2.39-1.13Z" />
      </svg>
    );
  }
  return (
    <svg width={24} height={24} viewBox="0 0 512 512" aria-hidden style={{ flexShrink: 0 }}>
      <path d="M48 32 300 256 48 480c-9 5-16 1-16-12V44c0-13 7-17 16-12Z" fill="#fff" />
      <path d="M48 32c4-2 9-2 14 1l250 142-48 48L48 32Z" fill="#fff" opacity=".7" />
      <path d="M264 290 312 338 62 480c-5 3-10 3-14 1l216-191Z" fill="#fff" opacity=".55" />
      <path d="m312 174 86 49c18 10 18 30 0 40l-86 49-48-89 48-49Z" fill="#fff" opacity=".85" />
    </svg>
  );
}
