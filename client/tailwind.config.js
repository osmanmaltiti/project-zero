module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
      right: ['Righteous'],
      condensed: ['Roboto Condensed']
    },
    extend: {
      spacing: {
        '100': '26rem',
        '104': '28rem',
        '108': '30rem',
        '112': '32rem',
        '114': '34rem',
        '118': '36rem',
        '124': '38rem',
        '128': '40rem',
        '132': '42rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['dark', 'rounded']
  }
}