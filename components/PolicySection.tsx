import type { ReactNode } from 'react';

export default function PolicySection({
  heading,
  body,
  children,
}: {
  heading: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mt-10 md:mt-12">
      <h2
        className="text-[20px] md:text-[22px]"
        style={{
          margin: 0,
          fontWeight: 700,
          letterSpacing: '-.01em',
          lineHeight: 1.3,
          color: 'var(--ak-text)',
        }}
      >
        {heading}
      </h2>
      {body !== undefined && (
        <p
          className="text-[15px] md:text-[16px] mt-3"
          style={{
            margin: 0,
            marginTop: undefined,
            color: 'var(--ak-text-mute)',
            lineHeight: 1.7,
            textWrap: 'pretty',
          }}
        >
          {body}
        </p>
      )}
      {children}
    </section>
  );
}
