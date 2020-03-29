module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {}
}
