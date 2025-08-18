// // https://docs.expo.dev/guides/using-eslint/
// module.exports = {
//   extends: 'expo',
//   languageOptions: {
//     parserOptions: {
//       ecmaVersion: 'latest',
//     },
//   },
// };
const { defineConfig } = require("eslint/config");
const expo = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expo,
  {
    // tes options persos
    languageOptions: {
      parserOptions: { ecmaVersion: "latest" },
    },
    ignores: ["dist/*"],
  },
]);
