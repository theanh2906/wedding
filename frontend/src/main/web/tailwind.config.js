/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    screens: {
      tablet: {
        min: '768px',
        max: '1024px',
      },
      desktop: {
        min: '1024px',
      },
      mobile: {
        min: '320px',
        max: '767px',
      },
    },
  },
  plugins: [],
};
