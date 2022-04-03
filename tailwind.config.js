module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.vue"
  ],
  theme: {
    extend: {},
    screens: {
      'md': {'max': '800px'},
      'lg': {'min': '800px'},
      'xl': { 'min': '1000px' }
    }
  },
  plugins: [],
}
