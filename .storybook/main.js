module.exports = {
  stories: ["../src/admin/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(p|post|)css$/,
      use: ["vue-style-loader", "css-loader", "postcss-loader"],
    });

    return config;
  },
};
