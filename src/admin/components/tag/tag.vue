<template>
  <div class="tag">{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>