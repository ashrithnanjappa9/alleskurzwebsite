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
        'ak-bg':         'var(--ak-bg)',
        'ak-bg-soft':    'var(--ak-bg-soft)',
        'ak-bg-deep':    'var(--ak-bg-deep)',
        'ak-text':       'var(--ak-text)',
        'ak-text-mute':  'var(--ak-text-mute)',
        'ak-text-dim':   'var(--ak-text-dim)',
        'ak-text-faint': 'var(--ak-text-faint)',
        'ak-surface':    'var(--ak-surface)',
        'ak-surface-alt':'var(--ak-surface-alt)',
        'ak-border':     'var(--ak-border)',
        'ak-border-strong': 'var(--ak-border-strong)',
      },
      fontFamily: {
        sans: ['var(--ak-font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
