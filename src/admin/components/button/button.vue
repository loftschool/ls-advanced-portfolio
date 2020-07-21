<template>
  <button
    :class="['default-btn-container', 'btn-decorator', {disabled}, {plain}]"
    v-if="type === 'button'"
    v-on="$listeners"
    :disabled="disabled"
  >{{title}}</button>

  <label class="btn-file-container" v-else-if="type === 'file'">
    <div class="btn-file-fake btn-decorator">{{title}}</div>
    <input class="btn-file-input" type="file" v-on="$listeners" />
  </label>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Отправить"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: Boolean,
    type: {
      type: String,
      default: "button",
      validator: value => ["button", "file"].includes(value)
    }
  }
};
</script>

<style lang="postcss" scoped src="./button.pcss"></style>