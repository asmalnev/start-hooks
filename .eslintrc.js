module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: [0, 2],
    semi: [2, "always"],
    "space-before-function-paren": ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "multiline-ternary": "off",
    "react/display-name": "off"
  }
};
