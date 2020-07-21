import icon from "./icon.vue";

export default {
  title: "icon",
  component: icon,
};

export const defaultView = () => ({
  components: { icon },
  template: `
    <icon />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

export const labeledView = () => ({
  components: { icon },
  template: `
    <icon title="удалить" />
  `,
});

labeledView.story = {
  name: "С подписью",
};

export const iconedView = () => ({
  components: { icon },
  template: `
    <div>
      <icon symbol="pencil" />
      <icon symbol="cross" />
      <icon symbol="tick" />
      <icon symbol="trash" />
    </div>
  `,
});

iconedView.story = {
  name: "Доступные иконки",
};

export const grayscaleView = () => ({
  components: { icon },
  template: `
    <div>
      <icon grayscale symbol="pencil" />
      <icon grayscale symbol="cross" />
      <icon grayscale symbol="tick" />
      <icon grayscale symbol="trash" />
    </div>
  `,
});

grayscaleView.story = {
  name: "Черно-белые иконки",
};
