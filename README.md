# @mazp/util

## Introduce

Integrate the functions commonly used in the project.

## Install

```bash
npm i @mazp/util
yarn add @mazp/util
pnpm i @mazp/util
```

## Usage

```js
// ESM
import util from "@mazp/util";
util.formatTime(1671198728746)
```

```js
// CJS
let util = require("@mazp/util");
util.formatTime(1671198728746)
```

## API

### formatTime

Transform timeStamp to  a standard format like `2022-12-16-21-52-8`.

```ts
declare function formatTime(time: number): string;
```

### randomChars

Randomly generate your input parameter length, which is a `[a-z][A-Z]` composition string.

```ts
declare function randomChars(len: number): string;
```

