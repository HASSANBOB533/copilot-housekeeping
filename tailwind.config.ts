import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00875A',
        'royal-blue': '#2563EB',
        'bright-green': '#22C55E',
        'gold-yellow': '#FACC15',
      },
    },
  },
  plugins: [],
};

export default config;
