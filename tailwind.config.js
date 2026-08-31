/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070b09',
          900: '#0b1210',
          800: '#101a16',
          700: '#182620',
          600: '#22352c',
        },
        paper: {
          50: '#f7faf8',
          100: '#eef3ef',
          200: '#e2ebe4',
        },
        brand: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#0f7a38',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(34,197,94,0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],

}

