import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        spread: 'spreadOut 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.7s ease-in-out',
        tuneIn1: 'tuneIn1 0.8s ease-in-out',
        tuneIn2: 'tuneIn2 0.8s ease-in-out',
        tuneIn3: 'tuneIn3 0.8s ease-in-out',
      },
      keyframes: theme => ({
        spreadOut: {
          '0%': { height: 0, width: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
        tuneIn1: {
          '0%': { opacity: 0.5 },
          '10%': { transform: 'skewY(2deg)', opacity: 1 },
          '20%': { transform: 'skewY(-2deg)', opacity: 0.2 },
          '30%': { transform: 'skewY(1deg)', opacity: 1 },
          '60%': { transform: 'skewY(-1deg)', opacity: 0.2 },
          '100%': { opacity: 1 },
        },
        tuneIn2: {
          '0%': { opacity: 0.5 },
          '10%': { transform: 'skewY(2deg)', opacity: 0.2 },
          '20%': { transform: 'skewY(-2deg)', opacity: 1 },
          '30%': { transform: 'skewY(1deg)', opacity: 0.2 },
          '60%': { transform: 'skewY(-1deg)' },
          '100%': { opacity: 1 },
        },
        tuneIn3: {
          '0%': { opacity: 0.1 },
          '10%': { transform: 'skewY(2deg)', opacity: 0.4 },
          '20%': { transform: 'skewY(-2deg)', opacity: 1 },
          '30%': { transform: 'skewY(1deg)', opacity: 0.5 },
          '60%': { transform: 'skewY(-1deg)' },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}
export default config
