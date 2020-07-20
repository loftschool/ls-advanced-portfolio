import iconedBtn from "./iconedBtn.vue";

export default {
  title: "iconedBtn",
  component: iconedBtn,
};

export const defaultView = () => ({
  components: { iconedBtn },
  template: `
    <iconed-btn title="Заголовок" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
