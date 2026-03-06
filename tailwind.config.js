/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display', '-apple-system', 'BlinkMacSystemFont',
          'Inter', 'system-ui', 'sans-serif',
        ],
        mono: ['SF Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#6C63FF',
          50: '#f0efff',
          100: '#e0deff',
          200: '#c4bfff',
          300: '#a39dff',
          400: '#857eff',
          500: '#6C63FF',
          600: '#5046e5',
          700: '#3d35c4',
          800: '#2e289a',
          900: '#211d6e',
        },
        surface: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#1d1d1f',
          700: '#161617',
          800: '#111111',
          900: '#0a0a0a',
          950: '#050505',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
