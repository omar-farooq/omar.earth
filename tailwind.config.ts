import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        spread: 'spreadOut 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.7s ease-in-out'
      },
      keyframes: theme => ({
        spreadOut: {
          '0%': { height: 0, width: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
      }),
    },
  },
  plugins: [],
}
export default config
