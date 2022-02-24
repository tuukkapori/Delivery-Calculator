/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        arrowParens: 'always',
        jsxSingleQuote: false,
        jsxBracketSameLine: true
      }
    ],
    curly: 2,
    'no-console': 0,
    'no-shadow': 0,
    'no-labels': 2,
    'arrow-parens': ['warn', 'always'],
    'no-irregular-whitespace': 2,
    'no-trailing-spaces': 2,
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/named': 0,
    'simple-import-sort/imports': 0,
    'simple-import-sort/exports': 'error'
  }
}
