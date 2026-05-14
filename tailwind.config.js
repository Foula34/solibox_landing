/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Editorial surface tokens
        paper: '#FAFAF7',
        sand: '#F3EDE2',
        mist: '#E8E4DC',

        // Ink — warm near-black neutral scale
        ink: {
          50:  '#F7F5F2',
          100: '#EBE7E0',
          200: '#D6D0C5',
          300: '#B8B0A2',
          400: '#8A8275',
          500: '#5E574C',
          600: '#423D34',
          700: '#2B2823',
          800: '#1A1816',
          900: '#0F0E0D',
          950: '#080706',
        },

        // Solar — brand vivid orange centered on #FF9900
        solar: {
          50:  '#FFF5E6',
          100: '#FFE5BD',
          200: '#FFCC85',
          300: '#FFB347',
          400: '#FFA21E',
          500: '#FF9900', // BRAND
          600: '#E08400',
          700: '#B36800',
          800: '#8A4F00',
          900: '#6B3D00',
          950: '#3D2200',
        },

        // Sky — institutional deep blue centered on #0F477C
        sky: {
          50:  '#EEF3F8',
          100: '#D6E0EC',
          200: '#ADC2D9',
          300: '#819FC0',
          400: '#5479A3',
          500: '#2F5A89',
          600: '#1B4F7E',
          700: '#0F477C', // BRAND
          800: '#0B3A66',
          900: '#082E50',
          950: '#051F38',
        },

        // Legacy aliases — kept so older references keep rendering
        primary: {
          50:  '#F7F5F2',
          100: '#EBE7E0',
          200: '#D6D0C5',
          300: '#B8B0A2',
          400: '#8A8275',
          500: '#5E574C',
          600: '#423D34',
          700: '#2B2823',
          800: '#1A1816',
          900: '#0F0E0D',
          950: '#080706',
        },
        accent: {
          50:  '#FFF5E6',
          100: '#FFE5BD',
          200: '#FFCC85',
          300: '#FFB347',
          400: '#FFA21E',
          500: '#FF9900',
          600: '#E08400',
          700: '#B36800',
          800: '#8A4F00',
          900: '#6B3D00',
          950: '#3D2200',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Glacial Indifference"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,14,13,0.04), 0 8px 24px -12px rgba(15,14,13,0.08)',
      },
    },
  },
  plugins: [],
};
