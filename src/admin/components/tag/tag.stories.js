import tag from "./tag.vue";

export default {
  title: "tag",
  components: {tag}
}

export const defaultView = () => ({
  components: { tag },
  template: `
    <tag title="tag" />
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};
