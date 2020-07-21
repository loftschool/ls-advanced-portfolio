const custom = require("../webpack.config.js")(null, "development");

module.exports = {
  stories: ["../src/admin/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-backgrounds/register",
    "storybook-dark-mode/register"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: custom.resolve,
    };
  },
};
