import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f6fdf5',
          100: '#ebfce8',
          200: '#d4f7d1',
          300: '#b0f0a8',
          400: '#86e676',
          500: '#65d946',
          600: '#4ab339',
          700: '#3a8f30',
          800: '#326e2b',
          900: '#2c5d24',
        },
        'forest': {
          50: '#f6faf8',
          100: '#ecf5f1',
          200: '#d4e9e2',
          300: '#b1dcd0',
          400: '#85cbb9',
          500: '#5eb8a1',
          600: '#499182',
          700: '#3b756b',
          800: '#305f58',
          900: '#2a4d4a',
        }
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
