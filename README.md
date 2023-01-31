# Reproducting `tailwindcss` types issue

## Setup

If you run any of the scripts:

```bash
npm install
npm run ts
npm run ts
```

Both produce the same output:

```text
[Function: tailwindcss] { postcss: true }
{ postcssPlugin: 'tailwindcss', plugins: [ [Function (anonymous)] ] }
```

## Problem

ESLint (e.g. in VS Code) is not happy with the JS version:

```json
{
  "resource": "src/index.js",
  "owner": "typescript",
  "code": "2322",
  "severity": 8,
  "message": "Type 'typeof import(\"<...>/tailwindcss/types/index\")' is not assignable to type 'AcceptedPlugin'.",
  "source": "ts"
}
```

## Not a solution

Changing

```js
const createPlugin = require("tailwindcss");
```

to

```js
const createPlugin = require("tailwindcss").default;
```

mutes ESLint yet it breaks the code itself:

```text
undefined
<...>\src\index.cjs:7
console.log(plugin());
            ^

TypeError: plugin is not a function
```

## Why does it matter

The verbose version of `postcss.config.cjs` triggers this exact case:

```js
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

/** @type {{plugins?: import('postcss').AcceptedPlugin[] | string }} */
const config = {
  plugins: [tailwindcss, autoprefixer],
};

module.exports = config;
```
