module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'object-curly-spacing': 'off',
    'no-trailing-spaces': 'off',
    'vue/no-template-key': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
