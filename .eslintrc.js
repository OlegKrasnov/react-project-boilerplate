module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  env: {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'plugin:react/recommended',
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error'],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'camelcase': ['error'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'comma-style': ['error', 'last'],
    'eqeqeq': ['error', 'always'],
    'eol-last': ['error'],
    'func-call-spacing': ['error'],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'minimum'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
        'overrides': {
          'function': {
            'after': false
          }
        }
      }
    ],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'max-len': [
      'error',
      {
        'code': 120
      }
    ],
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': false,
        'properties': true
      }
    ],
    'newline-before-return': 'error',
    'no-confusing-arrow': [
      'error',
      {
        'allowParens': true
      }
    ],
    'no-console': ['off'],
    'no-constant-condition': [
      'error',
      {
        'checkLoops': false
      }
    ],
    'no-global-assign': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-self-compare': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unreachable': ['error'],
    'no-use-before-define': [
      'error',
      {
        'functions': false
      }
    ],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'quotes': ['error', 'single'],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error',
      {
        'words': true,
        'nonwords': false,
        'overrides': {
          'typeof': false
        }
      }
    ],
    'spaced-comment': ['error', 'always'],
    'template-curly-spacing': ['error', 'never']
  }
}
