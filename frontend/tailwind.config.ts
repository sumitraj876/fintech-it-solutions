import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jet:      '#08080B',
        graphite: '#17171F',
        pink:     '#FF168A',
        yellow:   '#FFE600',
        offwhite: '#F4F4F5',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink':   '0 0 24px rgba(255, 22, 138, 0.35)',
        'neon-yellow': '0 0 24px rgba(255, 230, 0, 0.30)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-faint': '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
