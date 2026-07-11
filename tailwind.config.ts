import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        'violet-heritage': '#311B92',
        'violet-electric': '#7C3AED',
        'base-black': '#09090B',
        'base-white': '#FFFFFF',
        'soft-gray': '#F4F4F5',
        lavender: '#f8f7ff',
        'lavender-line': '#e8e4f8',
        ink: '#120726',
        'violet-soft': '#c4b5fd',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
