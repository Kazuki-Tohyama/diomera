module.exports = {
  root: true,
  parserOptions: {
    'parser': 'babel-eslint'
  },
  env: {
    'node': true
  },
  plugins: [
    'vue'
  ],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'single']
  }
};