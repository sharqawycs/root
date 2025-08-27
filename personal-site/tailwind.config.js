/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};

export default config;
