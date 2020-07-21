const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss",
    }),
    require("autoprefixer")({
      cascade: false,
    }),
    require("postcss-each"),
    require("postcss-advanced-variables")({
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      ),
    }),
    require("postcss-nested"),
    require("postcss-rgb"),
    require("postcss-inline-svg")({
      removeFill: true,
      paths: ["./src/images/icons"],
    }),
    require("cssnano"),
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*", "!*border*"],
      selectorBlackList: [/^html$/],
    }),
  ],
};
