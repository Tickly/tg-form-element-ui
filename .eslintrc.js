module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/order-in-components': 'error',
    'no-unused-vars': 'off',
    // 忽略尾逗号检测，随便你写不写
    'comma-dangle': 'off'
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/standard'
  ]
}
