import avatar from "./avatar.vue";

export default {
  title: "avatar",
  components: { avatar },
};

export const defaultView = () => ({
  components: { avatar },
  template: `
    <avatar size="3.1" src="https://picsum.photos/300/300" />
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
