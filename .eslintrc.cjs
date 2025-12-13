module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports' // or "inline-type-imports"
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'import/extensions': ['error', { ts: 'always', js: 'never' }],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }],
    'linebreak-style': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['error', 140],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    semi: ['error', 'never']
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  }
}
