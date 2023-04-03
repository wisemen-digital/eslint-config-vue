`eslintrc.json`
```json
{
  {
    "env": {
      "es2021": true,
      "node": true,
      "commonjs": true,
      "mocha": true
    },
    "extends": [
      "wouter"
    ],
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".ts", ".d.ts", ".json", ".vue"]
        },

        "alias": {
          "map": [["@", "./src", "~", "./"]],
          "extensions": [".js", ".vue", ".ts", ".d.ts"]
        }
      }
    },
    "parserOptions": {
      "parser": "@typescript-eslint/parser",
      "project": "./tsconfig.json",
      "extraFileExtensions": [".vue"]
    }
  }
}
```

```
npm i -D eslint-config-appwise eslint eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-putout eslint-plugin-unused-imports putout
```