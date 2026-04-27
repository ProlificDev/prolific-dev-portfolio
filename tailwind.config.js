/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        'primary-light': '#3385ff',
        'primary-dark': '#0052cc',
        accent: '#00d4ff',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      keyframes: {
        /* Staggered hero entrance */
        'slide-up-fade': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        /* Word cycling — each word slides up in, pauses, slides up out */
        'word-in': {
          '0%':   { opacity: '0', transform: 'translateY(100%)' },
          '10%':  { opacity: '1', transform: 'translateY(0)' },
          '80%':  { opacity: '1', transform: 'translateY(0)' },
          '90%':  { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '0', transform: 'translateY(-100%)' },
        },
        /* Blinking cursor */
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        /* Subtle float for the badge */
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'slide-up-fade':  'slide-up-fade 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-fade-1':'slide-up-fade 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-fade-2':'slide-up-fade 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-fade-3':'slide-up-fade 0.7s 0.4s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-fade-4':'slide-up-fade 0.7s 0.55s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-fade-5':'slide-up-fade 0.7s 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'word-in':        'word-in 3s ease-in-out infinite',
        'blink':          'blink 1s step-end infinite',
        'float':          'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
