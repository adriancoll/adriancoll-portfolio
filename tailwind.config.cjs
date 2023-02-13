/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ['primary-blue']: '#58DCF4',
        ['primary-red']: '#7C162E',
        ['primary-pink']: '#CB60E2',
        ['background-dark']: '#110E1B',
        background: '#f6f6f6',
      },
    },
  },
  plugins: [],
}
