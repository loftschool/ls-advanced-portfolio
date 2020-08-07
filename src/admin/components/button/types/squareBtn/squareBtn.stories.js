import squareBtn from "../../button.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange"),
};

export default {
  title: "button/square",
  components: squareBtn,
};

export const defaultView = () => ({
  components: { squareBtn },
  template: `
    <square-btn 
      type="square"
      title="Отправить" 
      @click="onClick" 
    />
  `,
  methods,
});

defaultView.story = {
  name: "Стандартный вид",
};
