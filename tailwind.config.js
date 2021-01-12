module.exports = {
  purge: {
    content: ['./src/**/*.svelte', './public/*.html'],
    options: {
      safelist: [
        'bg-green-100',
        'bg-purple-100',
        'bg-yellow-100',
        'bg-indigo-100',
        'bg-white',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'contact-background': "url('/img/topography.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
}
