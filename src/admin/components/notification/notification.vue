<template>
  <div class="inner-tooltip-container" :class="type">
    <div class="tooltip__text">{{text}}</div>
    <button v-on="$listeners" class="tooltip__close"></button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "success"
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="postcss" scoped src="./notification.pcss"></style>