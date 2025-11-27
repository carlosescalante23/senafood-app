/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      'inter-24pt-bold': ['Inter_24pt-Bold', 'sans-serif'],
      'inter-24pt-medium': ['Inter_24pt-Medium', 'sans-serif'],
      'poppins-bold': ['Poppins-Bold', 'sans-serif'],
      'poppins-medium': ['Poppins-Medium', 'sans-serif'],
      'poppins-regular': ['Poppins-Regular', 'sans-serif'],
    },

    colors: {
      primary: {
        DEFAULT: '#ff5e07',
        50: '#fff6ed',
        100: '#ffead4',
        200: '#ffd2a8',
        300: '#ffb270',
        400: '#ff8537',
        500: '#ff5e07',
        600: '#f04806',
        700: '#c73407',
        800: '#9e2a0e',
        900: '#7f250f',
        950: '#450f05',
      },
      secundary: {
        DEFAULT: '#ff9d07',
        50: '#fffcea',
        100: '#fff3c5',
        200: '#ffe685',
        300: '#ffd346',
        400: '#ffbe1b',
        500: '#ff9d07',
        600: '#e27300',
        700: '#bb4e02',
        800: '#983c08',
        900: '#7c310b',
        950: '#481700',
      },
      tertiary: {
        DEFAULT: '#217dd6',
        50: '#f1f7fe',
        100: '#e3edfb',
        200: '#c0daf7',
        300: '#88bcf1',
        400: '#489ae8',
        500: '#217dd6',
        600: '#1158a6',
        700: '#104d94',
        800: '#12437a',
        900: '#143966',
        950: '#0e2443',
      },
      quaternary:{
        DEFAULT: '#0fba83',
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d1',
        300: '#6ee7b8',
        400: '#33d49b',
        500: '#0fba83',
        600: '#05a877',
        700: '#047858',
        800: '#065f47',
        900: '#064e3c',
        950: '#022c22',
      },
      customColorBg: ''
    },

    extend: {},
  },
  plugins: [],
}