import Image from 'next/image';

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
      <Image
        src="/ak-logo.png"
        alt="alles kurz"
        width={size}
        height={size}
        priority
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}
