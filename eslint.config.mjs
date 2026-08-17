import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
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
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);
