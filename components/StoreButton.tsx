type Props = {
  icon: 'apple' | 'play';
  label: string;
  lead: string;
  variant?: 'solid' | 'outline';
  fullWidthMobile?: boolean;
  /** When set, the button becomes an `<a>` that opens in a new tab. */
  href?: string;
};

export default function StoreButton({
  icon,
  label,
  lead,
  variant = 'solid',
  fullWidthMobile = false,
  href,
}: Props) {
  const outline = variant === 'outline';
  const paddingClass = fullWidthMobile
    ? 'w-full justify-center sm:w-auto sm:justify-start px-4 py-[10px] sm:px-5 sm:py-[14px]'
    : 'px-5 py-[14px]';

  const sharedStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    borderRadius: 14,
    background: outline ? 'transparent' : 'var(--ak-store-btn-bg)',
    color: outline ? 'var(--ak-store-btn-outline)' : 'var(--ak-store-btn-text)',
    border: outline ? '1px solid var(--ak-store-btn-outline-border)' : '0',
    cursor: 'pointer',
    font: 'inherit',
    transition: 'all .2s ease',
    textDecoration: 'none',
  } as const;

  const inner = (
    <>
      <StoreIcon name={icon} />
      <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
        <div style={{ fontSize: 10, fontWeight: 500, opacity: 0.7 }}>{lead}</div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>{label}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={paddingClass}
        style={sharedStyle}
        aria-label={`${lead} ${label}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={paddingClass} style={sharedStyle}>
      {inner}
    </button>
  );
}

function StoreIcon({ name, size = 24 }: { name: 'apple' | 'play'; size?: number }) {
  if (name === 'apple') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.05 12.04c-.03-3.16 2.58-4.68 2.7-4.75-1.47-2.16-3.77-2.46-4.59-2.49-1.96-.2-3.83 1.16-4.83 1.16-1 0-2.53-1.13-4.17-1.1-2.15.03-4.13 1.25-5.23 3.17-2.23 3.87-.57 9.58 1.6 12.72 1.07 1.54 2.33 3.27 4 3.21 1.61-.06 2.22-1.04 4.16-1.04 1.94 0 2.49 1.04 4.19 1.01 1.73-.03 2.83-1.56 3.89-3.11 1.23-1.78 1.73-3.52 1.76-3.61-.04-.02-3.38-1.3-3.41-5.17zM13.94 3.32c.89-1.07 1.49-2.57 1.32-4.06-1.28.05-2.83.85-3.74 1.92-.82.95-1.54 2.47-1.35 3.94 1.43.11 2.88-.73 3.77-1.8z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.564v21.017c0 .179.027.354.084.523L12.624 12 1.337.924zm12.207 11.076 3.157-3.143L4.07.792c-.099.013-.197.04-.298.071L13.544 12zm0 .203L3.772 23.142c.101.024.198.054.298.064l13.027-7.388-3.553-3.524z" />
    </svg>
  );
}
