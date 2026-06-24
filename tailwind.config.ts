import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ak-red':        '#E53935',
        'ak-red-deep':   '#B71C1C',
        'ak-red-press':  '#C8302C',
        'ak-red-tint':   'var(--ak-red-tint)',
        'ak-bg':         'var(--ak-bg)',
        'ak-bg-soft':    'var(--ak-bg-soft)',
        'ak-bg-deep':    'var(--ak-bg-deep)',
        'ak-text':       'var(--ak-text)',
        'ak-text-mute':  'var(--ak-text-mute)',
        'ak-text-dim':   'var(--ak-text-dim)',
        'ak-text-faint': 'var(--ak-text-faint)',
        'ak-surface':    'var(--ak-surface)',
        'ak-surface-alt':'var(--ak-surface-alt)',
        'ak-surface-2':  'var(--ak-surface-2)',
        'ak-border':     'var(--ak-border)',
        'ak-border-strong': 'var(--ak-border-strong)',
        'ak-hair':       'var(--ak-hair)',
        'ak-hair-soft':  'var(--ak-hair-soft)',
        'ak-nav-bg':     'var(--ak-nav-bg)',
      },
      fontFamily: {
        sans: ['var(--ak-font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
