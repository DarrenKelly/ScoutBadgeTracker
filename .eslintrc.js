module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // <-- Add this line
  },
  extends: [
    require.resolve("eslint-plugin-vue/lib/configs/vue3-essential"),
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
