/* eslint-env node */
module.exports = {
  postcssOptions:{
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting':'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
}
}
