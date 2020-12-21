/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        half: 'linear-gradient(0deg, rgb(237, 238, 245) 50%, #fff 50%)',
        hero: 'url(\'/images/illustration-working.svg\')',
        shorten: 'url(\'/images/bg-shorten-desktop.svg\')',
        shorten_mobile: 'url(\'/images/bg-shorten-mobile.svg\')',
        'stripe-h': 'linear-gradient(0deg, transparent 49%, hsl(180, 66%, 49%) 49%, hsl(180, 66%, 49%) 51%, transparent 51%)',
        'stripe-v': 'linear-gradient(90deg, transparent 49%, hsl(180, 66%, 49%) 49%, hsl(180, 66%, 49%) 51%, transparent 51%)',
      },
      backgroundSize: {
        '100-100': '100% 100%',
        '105-100': '105% 100%',
      },
      colors: {
        theme_cyan: 'hsl(180, 66%, 49%)',
        theme_lightCyan: 'rgb(153, 225, 226)',
        theme_darkViolet: 'hsl(257, 27%, 26%)',
        theme_red: 'hsl(0, 87%, 67%)',
        theme_gray: 'hsl(0, 0%, 75%)',
        theme_grayishViolet: 'hsl(257, 7%, 63%)',
        theme_veryDarkBlue: 'hsl(255, 11%, 22%)',
        theme_veryDarkViolet: 'hsl(260, 8%, 14%)',
        theme_lightGray: 'rgb(237, 238, 245)'
      },
      height: {
        '36px': '36px',
        '74': '18.5rem'
      },
      inset: {
        '23': '5.75rem',
        '31': '7.75rem'
      },
      lineHeight: {
        '17': '5.5rem'
      },
      padding: {
        '112': '28rem'
      },
      width: {
        '36px': '36px'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-boost': {
          background: 'url(\'/images/bg-boost-desktop.svg\') hsl(257, 27%, 26%)'
        },
        '.bg-boost_mobile': {
          background: 'url(\'/images/bg-boost-mobile.svg\') hsl(257, 27%, 26%)'
        },
        '.animation-delay-500': {
          'animation-delay': '500ms'
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms'
        }
      }, ['responsive'])
    })
  ],
}
