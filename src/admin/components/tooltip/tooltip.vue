<template>
  <div class="input__error-tooltip-container">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Ошибка"
    }
  }
};
</script>

<style lang="postcss" scoped src="./tooltip.pcss"></style>