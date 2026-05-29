type Props = {
  icon: 'apple' | 'play';
  label: string;
  lead: string;
  variant?: 'solid' | 'outline';
  fullWidthMobile?: boolean;
};

export default function StoreButton({ icon, label, lead, variant = 'solid', fullWidthMobile = false }: Props) {
  const outline = variant === 'outline';
  return (
    <button
      type="button"
      className={
        // Lighter padding when stacked full-width on mobile so the buttons don't feel heavy.
        // sm+ restores the original prototype padding.
        fullWidthMobile
          ? 'w-full justify-center sm:w-auto sm:justify-start px-4 py-[10px] sm:px-5 sm:py-[14px]'
          : 'px-5 py-[14px]'
      }
      style={{
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
      }}
    >
      <StoreIcon name={icon} />
      <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
        <div style={{ fontSize: 10, fontWeight: 500, opacity: 0.7 }}>{lead}</div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>{label}</div>
      </div>
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
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.385.232-.713.609-.92zm10.89 10.893l2.302 2.302-10.937 6.31 8.635-8.612zM5.864 2.658L16.802 8.99l-2.302 2.301L5.864 2.658zm15.225 5.518c.585.45.585 1.598 0 2.048l-2.392 1.382-2.555-2.539 2.555-2.539 2.392 1.648z" />
    </svg>
  );
}
