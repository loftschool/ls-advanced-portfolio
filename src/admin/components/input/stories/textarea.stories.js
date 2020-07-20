import appInput from "../input.vue";

export default {
  title: "input/textarea",
  component: appInput,
};

export const defaultView = () => ({
  components: { appInput },
  template: `
    <app-input fieldType="textarea" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

export const labeledView = () => ({
  components: { appInput },
  template: `
    <app-input title="Сообщение" fieldType="textarea" />
  `,
});

labeledView.story = {
  name: "С заголовком",
};

export const errorView = () => ({
  components: { appInput },
  template: `
    <app-input 
      errorMessage="Ошибка" 
      title="Заголовок" 
      fieldType="textarea" />
  `,
});

errorView.story = {
  name: "С ошибкой",
};
