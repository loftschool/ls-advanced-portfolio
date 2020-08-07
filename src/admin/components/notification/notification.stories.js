import notification from "./notification.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick")
}

export default {
  title: "notification",
  component: notification,
};

export const defaultView = () => ({
  components: { notification },
  template: `
    <notification
      text="Текст внутри" 
      @click="onClick"
    >
    </notification>
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид"
}

export const warningView = () => ({
  components: { notification },
  template: `
    <notification
      text="Текст внутри" 
      type="warning"
      @click="onClick"
    >
    </notification>
  `,
  methods
});

warningView.story = {
  name: "Предупреждение"
}

export const errorView = () => ({
  components: { notification },
  template: `
    <notification
      text="Текст внутри" 
      type="error"
      @click="onClick"
    >
    </notification>
  `,
  methods
});

errorView.story = {
  name: "Ошибка"
}