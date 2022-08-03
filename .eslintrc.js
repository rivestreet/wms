module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 在rules中添加自定义规则
    // 关闭组件命名规则
    "vue/multi-word-component-names": "off",
    "space-before-function-paren": "off",
    "vue/no-mutating-props": "off",
    "vue/comment-directive": "off",
    "prettier/prettier": "off",
    quotes: "off",
    "no-dupe-keys": "off",
    "comma-dangle": "off",
    semi: "off",
    "vue/no-parsing-error": "off",
  },
};
