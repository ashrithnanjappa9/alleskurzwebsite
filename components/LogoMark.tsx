export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: '#E53935',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 900,
        fontSize: size * 0.45,
        letterSpacing: '-.04em',
        flexShrink: 0,
      }}
    >
      AK
    </div>
  );
}
