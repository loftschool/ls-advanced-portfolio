<template>
  <button
    :class="['btn', iconClass, {'grayscale': this.grayscale}, {'no-word' : !!title}]"
    :data-text="title"
    type="button"
    v-on="$listeners"
  ></button>
</template>

<script>
export default {
  props: {
    symbol: {
      type: String,
      default: "pencil",
      validator: value => ["pencil", "cross", "tick", "trash"].includes(value)
    },
    grayscale: {
      type: Boolean
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconClass() {
      return `is-${this.symbol}`;
    }
  }
};
</script>

<style lang="postcss" scoped src="./icon.pcss"></style>
