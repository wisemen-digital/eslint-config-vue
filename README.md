# ESLint Config

Every project uses the same ESlint config. This is to ensure that all projects are consistent and that we don't have to spend time on code style.

[NPM Package](https://www.npmjs.com/package/@appwise/eslint-config-vue)

## Installation

#### 1. Install the package

```
`npm i -D @appwise/eslint-config-vue`
```

#### 2. Add the following to your `.eslintrc.json`:

```json
//.eslintrc.json
{
  "extends": "@appwise/eslint-config-vue"
}
```

#### 3. Add script to `package.json`

```json
//package.json
{
  "scripts": {
    "lint": "eslint --ext .js,.vue src"
  }
}
```

#### 4. Profit

Enjoy the awesome code style!

## Rules overview

- Single quotes
- No semicolons
- No trailing commas
- No console logs
