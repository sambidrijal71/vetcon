/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary_dark': '#2b3883',
        'primary_medium': '#384ab5',
        'primary_light': '#485edc',

        'secondary_dark': '#8a6504',
        'secondary_medium': '#aa7d06',
        'secondary_light': '#f5b712',

        'success_dark': '#1d8104',
        'success_medium': '#2cc705',
        'success_light': '#77f956',

        'warning_dark': '#948906',
        'warning_medium': '#b0a303',
        'warning_light': '#fdea04',

        'danger_dark': '#960a01',
        'danger_medium': '#b50c02',
        'danger_light': '#f1180b'
      },
      fontSize: {
        'font_primary': '20px',
        'font_secondary': '18px',
        'font_tertiary': '16px',
        'font-paragraph': '12px'
      },
    },
  },
  plugins: [],
}
