import appButton from "../../button.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange")
}

export default {
  title: "button/default",
  components: { appButton },
};

export const defaultView = () => ({
  components: { appButton },
  template: `
    <appButton title="Send!" @click="onClick" />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};


export const plainView = () => ({
  components: { appButton },
  template: `
    <appButton plain @click="onClick" />
  `,
  methods
});

plainView.story = {
  name: "Без фона",
};

export const disabledView = () => ({
  components: { appButton },
  template: `
    <appButton disabled />
  `,
});

disabledView.story = {
  name: "Заблокированный",
};


export const fileView = () => ({
  components: { appButton },
  template: `
    <appButton typeAttr="file" @change="onChange" />
  `,
  methods
});

fileView.story = {
  name: "Тип - файл",
};


