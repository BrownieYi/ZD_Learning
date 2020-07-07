module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    "plugin:react/recommended"
  ],
  rules:{
    'no-tabs': 0,
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn'
  },
  plugins: [
    'react-hooks'
  ]
};