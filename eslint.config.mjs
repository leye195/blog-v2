
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    plugins: {
      next: nextPlugin
    }
  },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "unknown"
          ],
          "pathGroups": [
            {
              "pattern": "react*",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "next",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "@tanstack/react-query",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "@",
              "group": "internal",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": [],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ]
    }
  }
];
