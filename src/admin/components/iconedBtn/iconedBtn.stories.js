import iconedBtn from "./iconedBtn.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
};

export default {
  title: "iconedBtn",
  component: iconedBtn,
};

export const defaultView = () => ({
  components: { iconedBtn },
  template: `
    <iconed-btn @click="onClick" title="Заголовок" />
  `,
  methods,
});

defaultView.story = {
  name: "Стандартный вид",
};
