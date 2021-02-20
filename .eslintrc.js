module.exports = {
  plugins: ['eslint-plugin-prettier', 'react-hooks'],
  extends: ['eslint-config-airbnb', 'plugin:react-hooks/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': 'error',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'operator-linebreak': ['error', 'after', {overrides: {'?': 'before', ':': 'before'}}],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'always'],
    'object-curly-spacing': ['error', 'never'],
    'no-console': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', 'never'],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned'
      }
    ],

    'max-classes-per-file': 'off',
    'react/jsx-props-no-spreading': ['error', {html: 'ignore', exceptions: []}],

    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
        minProperties: 0
      }
    ],

    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': ['error', {namedComponents: 'function-declaration'}],
    'react/prefer-stateless-function': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  settings: {
    'import/resolver': {
      webpack: {}
    }
  }
};
