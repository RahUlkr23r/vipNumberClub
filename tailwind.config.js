/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    // Disable preflight so it does not destroy original Bootstrap and VIP Numbers Club styles
    preflight: false,
  },
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
    },
  },
  plugins: [],
}
