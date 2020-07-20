<template>
  <button class="about-page__add-new">{{title}}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить группу"
    }
  }
};
</script>


<style lang="postcss" scoped src="./iconedBtn.pcss"></style>