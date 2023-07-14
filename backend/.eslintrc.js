module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
  },
};