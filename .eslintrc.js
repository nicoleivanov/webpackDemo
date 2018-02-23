module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:flowtype/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'babel', 'flowtype'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: 0,
    semi: ['error', 'always'],
  },
  parser: 'babel-eslint',
  'react/jsx-filename-extension': DISABLE,
  'react/no-unused-prop-types': DISABLE,
  'react/jsx-wrap-multilines': DISABLE,
  'react/prop-types': DISABLE,
  'react/no-children-prop': DISABLE,
  'react/jsx-indent': DISABLE,
  'react/jsx-indent-props': DISABLE,
  'react/jsx-closing-bracket-location': DISABLE,
  'react/sort-comp': [
    WARN,
    {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    },
  ],
};
