import editLine from "./editLine.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onApprove: action("onApprove"),
  onRemove: action("onRemove")
}

export default {
  title: "editLine",
  component: editLine,
};

export const defaultView = () => ({
  components: { editLine },
  data() {
    return {
      title: "Название"
    }
  },
  template: `
    <editLine
      @approve="onApprove"
      @remove="onRemove" 
      v-model="title"
    />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};

export const blockedView = () => ({
  components: { editLine },
  template: `
    <editLine value="Название" blocked />
  `,
});

blockedView.story = {
  name: "Заблокированный",
};
