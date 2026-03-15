module.exports = {
    env: {
        node: true,
        es2024: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        // ─── Errors ─────────────────────────────────────────
        "no-console": "off",
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "no-undef": "error",

        // ─── Style ──────────────────────────────────────────
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "eqeqeq": ["error", "always"],
        "no-var": "error",
        "prefer-const": "error",
    },
};