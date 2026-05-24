type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, sub, align = 'left' }: Props) {
  return (
    <div
      className="max-w-[720px]"
      style={{ textAlign: align, margin: align === 'center' ? '0 auto' : undefined }}
    >
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
        className="text-[34px] sm:text-[42px] md:text-[52px] mt-3 md:mt-[14px] mb-4"
        style={{
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
          className="text-[15px] md:text-[17px]"
          style={{
            margin: 0,
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
