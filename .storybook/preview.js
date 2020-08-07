import { addParameters } from "@storybook/vue";
import "./main.pcss";

addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "grey", value: "#8395a7" },
  ],
  darkMode: {
    current: "dark",
  },
});
