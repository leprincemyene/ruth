/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      colors: {
        gabon: {
          green: '#009e60',
          yellow: '#fcd116',
          blue: '#0066cc',
        },
        earth: {
          50: '#faf6f0',
          100: '#f3ebe0',
          200: '#e6d5c0',
          300: '#d4ba98',
          400: '#c09d72',
          500: '#a8835a',
          600: '#8a6a48',
          700: '#6b5239',
          800: '#4d3a28',
          900: '#2e2218',
        },
        ink: {
          50: '#f6f6f4',
          100: '#e7e7e3',
          200: '#d1d1ca',
          300: '#a8a89e',
          400: '#7a7a6e',
          500: '#5a5a50',
          600: '#43433c',
          700: '#33332e',
          800: '#222220',
          900: '#151513',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
