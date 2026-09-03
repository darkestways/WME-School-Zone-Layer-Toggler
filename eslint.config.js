// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 11,
      sourceType: "script",
      parserOptions: {
        ecmaFeatures: {
          globalReturn: true,
          impliedStrict: true
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2026,
        ...globals.greasemonkey,
        ...globals.jquery,
        unsafeWindow: "readonly"
      },
    },
    files: ["**/*.user.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      eqeqeq: "warn",
      indent: [
        "error",
        4,
        {
          ignoreComments: true,
          SwitchCase: 1
        }
      ],
      "linebreak-style": [
        "warn",
        "unix"
      ],
      "no-alert": "error",
      "no-console": "warn"
    }
  },
]);
