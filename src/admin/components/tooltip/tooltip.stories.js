import tooltip from "./tooltip.vue";

export default {
  title: "tooltip",
  component: tooltip,
};

export const defaultView = () => ({
  components: { tooltip },
  template: `
    <tooltip
      text="Текст внутри" 
    >
    </tooltip>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
