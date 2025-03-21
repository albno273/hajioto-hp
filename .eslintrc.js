module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:testing-library/react",
    "eslint-config-airbnb-typescript",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        // 一部の頻出であり決まりきった変数・関数は型を省略可能とする
        allowedNames: ["handler"],
      },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "import/extensions": "off",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["stories/**", "tests/**"],
        optionalDependencies: false,
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
      },
    ],
    "max-depth": "error",
    "max-lines": "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-unsafe-optional-chaining": "warn",
    "react-hooks/exhaustive-deps": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "{next**,next/**,react**,react/**}",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "~/styles/**",
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        distinctGroup: false,
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/sort-type-constituents": "error",
    quotes: ["error", "single", { avoidEscape: true }],
  },
  overrides: [
    {
      files: ["**/*.hook.ts"],
      rules: {
        // hookファイルは型指定が長く開発体験が悪化するため、無効化
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
