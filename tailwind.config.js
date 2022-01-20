const safelist = require('./safelist');

module.exports = {
  purge: {
    enabled: true,
    content() {
      return [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
      ]
    },
    safelist,
  },
  mode: 'jit',
  corePlugins: {
    preflight: false,
  }
};
