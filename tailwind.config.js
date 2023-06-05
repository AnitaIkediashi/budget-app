/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#05668D",
        "light-blue": "#427AA1",
        "dull-white": "#EBF2FA",
        "dark-green": "#679436",
        "light-green": "#A5BE00",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'fade': 'fade 2s ease-in-out 1s'
      },
      keyframes: {
        'scroll': {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(calc(-400px*2.5))'}
        },
        'fade': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      }
    },
  },
  plugins: [],
};

