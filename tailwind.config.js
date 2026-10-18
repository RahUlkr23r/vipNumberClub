/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#ECAE01',
          light: '#FDC700',
          dark: '#D18800',
          50: '#FFFDF0',
          100: '#FFF9D2',
          200: '#FFF2A4',
          300: '#FFE66B',
          400: '#FDC700',
          500: '#ECAE01',
          600: '#D18800',
          700: '#A46500',
          800: '#754600',
          900: '#462700',
        },
        dark: {
          DEFAULT: '#0B0B0C',
          pure: '#000000',
          surface: '#121214',
          card: '#161619',
          elevated: '#1C1C21',
          border: '#26262D',
          hover: '#2A2A33'
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(236, 174, 1, 0.15)',
        'gold-md': '0 4px 20px rgba(236, 174, 1, 0.25)',
        'gold-lg': '0 8px 30px rgba(236, 174, 1, 0.35)',
        'dark-card': '0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 2px 6px -1px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
