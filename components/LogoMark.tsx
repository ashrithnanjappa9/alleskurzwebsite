export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'block',
        lineHeight: 0,
      }}
    >
      <picture>
        <source srcSet="/ak-mark-on-light.svg" media="(prefers-color-scheme: light)" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ak-mark-on-dark.svg"
          alt="alles kurz"
          width={size}
          height={size}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </picture>
    </div>
  );
}
