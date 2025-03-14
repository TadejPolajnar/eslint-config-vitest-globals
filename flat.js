/** @type {import('eslint').Linter.FlatConfig} */
export default function vitestGlobals() {
  return {
    languageOptions: {
      globals: {
        vi: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
      },
    },
  };
}
