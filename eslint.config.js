const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      // ─── Errors ───────────────────────────────────────
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",

      // ─── Style ────────────────────────────────────────
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "eqeqeq": ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];