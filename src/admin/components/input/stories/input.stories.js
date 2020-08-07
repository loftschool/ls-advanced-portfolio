import appInput from "../input.vue";

export default {
  title: "input/default",
  component: appInput,
};

export const defaultView = () => ({
  components: { appInput },
  data() {
    return {
      title : "Текст"
    }
  },
  template: `
    <app-input v-model="title" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

export const noPaddingsView = () => ({
  components: { appInput },
  template: `
    <app-input noSidePaddings />
  `,
});

noPaddingsView.story = {
  name: "Без отступов",
};


export const labeledView = () => ({
  components: { appInput },
  template: `
    <app-input
      title="Фио"
    />
  `,
});

labeledView.story = {
  name: "С заголовком",
};

export const errorView = () => ({
  components: { appInput },
  template: `
    <app-input
      errorMessage="Произошла ошибка"
    />
  `,
});

errorView.story = {
  name: "С ошибкой",
};


export const typeView = () => ({
  components: { appInput },
  template: `
    <app-input
      type="number"
      min="0"
      max="100"
      maxlength="3" 
    />
  `,
});

typeView.story = {
  name: "Другой тип",
};

