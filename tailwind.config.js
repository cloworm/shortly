/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        boost: 'url(\'/images/bg-boost-desktop.svg\')',
        boost_mobile: 'url(\'/images/bg-boost-mobile.svg\')',
        half: 'linear-gradient(0deg, rgb(237, 238, 245) 50%, #fff 50%)',
        hero: 'url(\'/images/illustration-working.svg\')',
        shorten: 'url(\'/images/bg-shorten-desktop.svg\')',
        shorten_mobile: 'url(\'/images/bg-shorten-mobile.svg\')',
      },
      colors: {
        theme_cyan: 'hsl(180, 66%, 49%)',
        theme_darkViolet: 'hsl(257, 27%, 26%)',
        theme_red: 'hsl(0, 87%, 67%)',
        theme_gray: 'hsl(0, 0%, 75%)',
        theme_grayishViolet: 'hsl(257, 7%, 63%)',
        theme_veryDarkBlue: 'hsl(255, 11%, 22%)',
        theme_veryDarkViolet: 'hsl(260, 8%, 14%)',
        theme_lightGray: 'rgb(237, 238, 245)'
      },
      lineHeight: {
        '17': '5.5rem'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
