import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'soft-stone': '#edeaea'
      },
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
        slideIn: 'slideIn 0.1s ease-in-out forwards',
        tuneIn: 'tuneIn 1.2s ease-in-out',
      },
      keyframes: theme => ({
        spreadOut: {
          '0%': { height: 0, width: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        tuneIn: {
          '0%': { opacity: 0.5 },
          '10%': { transform: 'skewY(2deg)', opacity: 0.2 },
          '20%': { transform: 'skewY(-2deg)', opacity: 1 },
          '30%': { transform: 'skewY(1deg)', opacity: 0.2 },
          '60%': { transform: 'skewY(-1deg)' },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}
export default config
