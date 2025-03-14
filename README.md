# ESLint globals config

Get rid of ESLint errors with one line of code.

```bash
error  'vi' is not defined          no-undef
error  'describe' is not defined    no-undef
error  'beforeEach' is not defined  no-undef
```

## Installation

```bash
$ npm install --dev eslint-config-vitest-globals
$ yarn add --dev eslint-config-vitest-globals
$ pnpm add --dev eslint-config-vitest-globals
```

## Usage

### Flat Config (ESLint >= v9)

Create an `eslint.config.js` file and import the config:

```js
import vitestGlobals from "eslint-config-vitest-globals/flat";

export default [
  vitestGlobals(),
  // ... your other configs
];
```

### Traditional Config (ESLint <= v8)

Include `eslint-config-vitest-globals` in your `.eslintrc` configuration file:

```json
{
  "extends": ["eslint-config-vitest-globals"]
}
```

## License

Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
