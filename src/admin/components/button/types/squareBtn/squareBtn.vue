<template>
  <button class="btn-container" type="button" v-on="$listeners">
    <div class="btn__text">
      <div class="btn__sign"></div>
      <div class="btn__title">{{title}}</div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить работу"
    }
  }
};
</script>

<style lang="postcss" scoped src="./squareBtn.pcss"></style>