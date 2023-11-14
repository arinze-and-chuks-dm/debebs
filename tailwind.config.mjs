/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Quicksand"', 'sans-serif'],
        secondary: ['"Marcellus"', 'serif'],
      },
      // height: {
      //   screen: ['100vh', '100dvh'],
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
  ],
};
