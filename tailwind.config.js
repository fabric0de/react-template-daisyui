/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: ['cupcake'],
  },
  plugins: [daisyui],
}