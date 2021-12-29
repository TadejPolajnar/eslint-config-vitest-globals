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
```

## Usage
Simply include `eslint-config-vitest-globals` into your eslint configuration file:

```bash
"extends": ["eslint-config-vitest-globals"]
```

## License

Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)