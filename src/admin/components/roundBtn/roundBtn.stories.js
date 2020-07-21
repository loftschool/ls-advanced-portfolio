import roundBtn from "./roundBtn.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick")
}

export default {
  title: "roundBtn",
  component: roundBtn,
};

export const defaultView = () => ({
  components: { roundBtn },
  template: `
    <round-btn @click="onClick" />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};
