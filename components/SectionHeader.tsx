type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, sub, align = 'left' }: Props) {
  return (
    <div style={{ maxWidth: 720, textAlign: align, margin: align === 'center' ? '0 auto' : undefined }}>
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
      <h2
        style={{
          margin: '14px 0 16px',
          fontSize: 52,
          fontWeight: 800,
          letterSpacing: '-.03em',
          lineHeight: 1.02,
          color: 'var(--ak-text)',
          textWrap: 'pretty',
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            margin: 0,
            fontSize: 17,
            color: 'var(--ak-text-mute)',
            lineHeight: 1.55,
            textWrap: 'pretty',
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
