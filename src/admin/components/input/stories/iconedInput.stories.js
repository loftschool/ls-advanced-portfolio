import appInput from "../input.vue";

export default {
  title: "input/iconed",
  component: appInput,
};

export const defaultView = () => ({
  components: { appInput },
  template: `
    <div>
      <app-input icon="user" />
      <app-input icon="key" />
    </div>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

export const errorView = () => ({
  components: { appInput },
  template: `
      <app-input icon="user" errorMessage="Ошибка" />
  `,
});

errorView.story = {
  name: "С ошибкой",
};
