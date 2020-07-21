import squareBtn from "./squareBtn.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange")
}

export default {
  title: "squareBtn",
  components: squareBtn
}

export const defaultView = () => ({
  components: { squareBtn },
  template: `
    <square-btn title="Отправить" @click="onClick" />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};
